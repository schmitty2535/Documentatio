let mqtt =    require('mqtt')
let client =  mqtt.connect('mqtt://localhost')
let fs =      require('fs');
let process = require('process');
let events = require('events');
//--mainJS dependencies--//

let appName
let version
let serviceCheck = [] // links with ServiceName var from service

const evnt = new events.EventEmitter();
let appPID
let appMngmntTopic
let myPublishArrayServices = []
let service = []
let str = ''


function configure(name_Of_App, verz, services_Needed){
    appPID = process.pid

    if(typeof name_Of_App === "string" && typeof verz === "number" && typeof services_Needed === "object"){
        appName = name_Of_App // this is the name to reference your app during emit
        version = verz
        serviceCheck = services_Needed //links with ServiceName variable from service
        appMngmntTopic = `app/${appName}/v${version}/${appPID}`
        start()

    }else{
        console.log(`Error!, One or more of your configure properties is incorrect, please check and try again.`)
    }

}
function start(){

// first message sent if *app* launches after the *service*
    client.publish('app/mngmt', JSON.stringify({ type: 'servicesReq', appName:appName, version:version, pid:appPID, from:appName, appMngmntTopic:appMngmntTopic}))// first message sent if app launches after the service
    client.publish('system/manager', JSON.stringify({newTopic:appMngmntTopic}))// sends new dynamic channel to the system manager
//--Publishes--//

    client.subscribe('service/mngmt')
    client.subscribe(appMngmntTopic)
//--Subscribes--//

    /*channel configuration takes place here, this allows the app communication with the specified services it requires*/
    client.on('message', function (topic, message) {// receives the topic and the message from any subscriptions on the app
        try{
            let msg = JSON.parse(message)// message parser
            switch (topic) {
                case 'service/mngmt':// if the app is already running, this will be the first case to hit from a service, here, the app
                    // receives a copy of the service's dynamic channel for communication
                    try{
                        switch (msg.type) {
                            case'serviceAvailable':
                                serviceCheck.forEach(function(index){// determines if the service is needed
                                    if(index === msg.serviceName){

                                        myPublishArrayServices.unshift({topic:msg.srvcMngmntTopic, name:msg.serviceName})// pushed into array

                                        // capability request is sent \/\/\/

                                        setTimeout(() => {
                                            client.publish(msg.srvcMngmntTopic, JSON.stringify({type:'serviceCapabilityRequest', from:appName, appMngmntTopic:appMngmntTopic}))
                                        },700)
                                    }
                                })
                                break;
                        }
                    }catch (e) {
                        console.log(`Error @ serviceAvailable case ${e}`)
                    }
                    break;
                case appMngmntTopic:// this case runs if a service starts before an app
                    evnt.emit('myData', message);
                    try{
                        let msg = JSON.parse(message)
                        switch (msg.type) {
                            case'serviceAvailable':

                                serviceCheck.forEach(function(index){// determines if the service is needed
                                    if(index === msg.serviceName){

                                        myPublishArrayServices.unshift({topic:msg.srvcMngmntTopic, name:msg.serviceName})// pushed into array

                                        // capability request is sent \/\/\/

                                        setTimeout(() => {
                                            client.publish(msg.srvcMngmntTopic, JSON.stringify({type:'serviceCapabilityRequest', from:appName, appMngmntTopic:appMngmntTopic}))
                                        },700)
                                    }else{
                                        client.publish(msg.srvcMngmntTopic, JSON.stringify({type:'removeAppFromPublishArray', from:appName, appMngmntTopic:appMngmntTopic}))
                                    }
                                })
                                break;
                            case 'serviceCapabilityResp':// here, make sure to do the comparisons

                                console.log('Service-Capabilities')

                                client.publish(msg.srvcMngmntTopic, JSON.stringify({type:'serviceConfig', service:msg.name, appName:appName, capabilities:msg.capabilities, from:appName, appMngmntTopic:appMngmntTopic}))
                                service.unshift(msg.srvcMngmntTopic)
                                break;
                            case 'myData':
                                // evnt.emit('myData', msg.name);
                                break;
                        }
                    }catch (e) {
                        console.log(`Error @ serviceAvailable or serviceCapabilityResp case ${e}`)
                    }
                    break;
            }
        }catch (e) {
            console.log(`Error @ service/mngmt or ${appMngmntTopic} case ${e}`)
        }
    })
}
function send(service, obj){
    console.log(myPublishArrayServices)
    myPublishArrayServices.forEach(index=>{
        if(index.name === service){
            client.publish(index.topic,obj)

        }else{
            console.log('error, service does not exist!')
        }
    })
}

module.exports = {service, appName, appMngmntTopic,send, evnt, configure}

/*

    service -               The array of service connections (Dynamic Topics) that the app can connect to
    appName -               The name of your configured app
    appMngmntTopic -        The topic of your configured app

*/
