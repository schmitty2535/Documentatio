let process = require('process');
// let net                      = require('net');
let mqtt = require('mqtt')
let events = require('events');


let client = mqtt.connect('mqtt://localhost')
let servicePID
let serviceName
let capabilities
let directionType
let version
let srvcMngmntTopic
let myPublishArrayApps = []
let app = []
let chk
const evnt = new events.EventEmitter();


function configure(name_Of_Service, verz, service_Capabilities, direction_Type){
    servicePID = process.pid

    if(typeof name_Of_Service === "string" && typeof verz === "number" && typeof service_Capabilities === "string" && typeof direction_Type === "string"){
        serviceName = name_Of_Service // this is the name to reference your service during emit
        version = verz
        capabilities = service_Capabilities// does nothing for now
        directionType = direction_Type
        srvcMngmntTopic = `srvc/${serviceName}/v${version}/${servicePID}`
        start()
    }else{
        console.log(`Error!, One or more of your configure properties is incorrect, please check and try again.`)
    }

}
function start(){

//publishes
// first message sent if *service* launches after the *app*

    client.publish('service/mngmt', JSON.stringify({ type: 'serviceAvailable', serviceName: serviceName, directionType: directionType, version: version, pid:servicePID, from:serviceName, srvcMngmntTopic:srvcMngmntTopic}))// first message sent if service launches after the app
    client.publish('system/manager', JSON.stringify({newTopic:srvcMngmntTopic}))// sends new dynamic channel to the system manager

    client.subscribe('app/mngmt')
    client.subscribe(srvcMngmntTopic)

    client.on('message', function (topic, message) {// receives the topic and the message from any subscriptions on the service
        try{
            switch (topic) {
                case'app/mngmt':// if the service is already running, this will be the first case to hit from an app, the service
                    // receives a copy of the app's dynamic channel for communication
                    try{
                        let msg = JSON.parse(message)// message parser
                        switch (msg.type) {// determines case based off the type in the message
                            case 'servicesReq':

                                myPublishArrayApps.unshift({topic:msg.appMngmntTopic, name:msg.appName})// copy for the service
                                console.log(myPublishArrayApps)
                                // will happen before filter, this why the else exists

                                setTimeout(() => {// a delay is used to allow the stuff above to take place before the final client.publish message is sent.
                                    client.publish(msg.appMngmntTopic, JSON.stringify({ type: 'serviceAvailable', serviceName: serviceName, directionType: directionType, version: version, pid:servicePID, from:serviceName, srvcMngmntTopic:srvcMngmntTopic}))
                                },700)
                                break;
                        }
                    }catch (e) {
                        console.log(`Error @ servicesReq case ${e}`)// this catches any errors that could be encountered
                    }
                    break;
                case srvcMngmntTopic:
                    evnt.emit('myData', message);
                    try{
                        let msg = JSON.parse(message);
                        switch (msg.type) {
                            case 'serviceCapabilityRequest'://used in both cases, that's why we have a check here, to avoid duplicates!

                                chk = myPublishArrayApps.findIndex((index) => index.topic === msg.appMngmntTopic)// check var will either find an index or it won't, if it doesn't, the response is -1
                                if(chk === -1){ //if not found inside of the array
                                    myPublishArrayApps.unshift({topic:msg.appMngmntTopic, name:msg.from})// after check, if it's not already inside the array, it's pushed
                                }
                                setTimeout(() => {// delay so that messages flow correctly
                                    client.publish(msg.appMngmntTopic, JSON.stringify({ type: 'serviceCapabilityResp', name:serviceName, capabilities:capabilities, from:serviceName, srvcMngmntTopic:srvcMngmntTopic}));
                                },700)
                                break;
                            case 'serviceConfig':

                                // here configuration would take place
                                //config happens....

                                app.unshift(msg.appMngmntTopic)

                                break;
                            case 'removeAppFromPublishArray':
                                let myIndex = myPublishArrayApps.findIndex((index) => index.topic === msg.appMngmntTopic)// process to remove any app that rejects the service
                                console.log({myIndex:myIndex})
                                myPublishArrayApps.splice(myIndex,1)
                                break;
                            case 'myData':
                                // evnt.emit('myData', msg.data);
                                // console.log('583'+msg.data)
                                break;
                        }
                    }catch (e) {
                        console.log(`Error @ serviceCapabilityRequest or serviceConfig or removeAppPublishArray, ${e}`)
                    }
                    break;
            }
        }catch (e) {
            console.log(`Error @ app/mngmt or ${srvcMngmntTopic} case ${e}`)
        }
    });
}
function send(app, obj){
    myPublishArrayApps.forEach(index=>{
        if(index.name === app){
            client.publish(index.topic,obj)
        }else{
            console.log('error, app does not exist!')
        }
    })
}


module.exports = {app, serviceName, srvcMngmntTopic, send, evnt, configure}
/*

    app -               The array of app connections (Dynamic Topics) that the service can connect to
    serviceName -       The name of your configured service
    srvcMngmntTopic -   The topic of your configured service

*/

