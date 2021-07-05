# List of NPM packages

## RPIO

{% tabs %}
{% tab title="Example" %}
```javascript
var rpio = require('rpio');

rpio.init({gpiomem:    false, mapping:    'physical'}); //Physical pin mapping
rpio.open(7, rpio.OUTPUT, rpio.HIGH); //Setting GPIO 7 as an Output and default High
rpio.open(35, rpio.INPUT); 


```
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.npmjs.com/package/rpio" %}
{% endtab %}
{% endtabs %}

## Help- Handles "-h, --help" CLI commands

{% tabs %}
{% tab title="Example" %}
```javascript
//Put information to return in usage.txt file

var help = require('help')('usage.txt')
var args = process.argv.splice(2)
if (args[0] === '-h' || args[0] === '--help' || args[0] === 'help') {
    // process prints contents of `usage.txt` and returns
    return help()
}

// the first arg must be a number
if (isNaN(args[0])) {
    // process prints contents of `usage.txt` and exits with code 1
    return help(1)
}
```
{% endtab %}

{% tab title="Links" %}
{% embed url="https://github.com/evanlucas/help" %}
{% endtab %}
{% endtabs %}

## Simple JSONdb- A simple, no-frills, JSON storage 

{% tabs %}
{% tab title="Example" %}
```javascript
const JSONdb = require('simple-json-db');
const db = new JSONdb('/path/to/your/database.json');

//Set a key
db.set('key', 'value');
//The key parameter must be a string, value can be whatever kind of 
//object can be stored in JSON format. JSON.stringify() is your friend!

//Get a key
db.get('key');
//The key parameter must be a string. If the key exhists its value is 
//returned, if it doesn't the function returns undefined.

//Check a key
db.has('key');
//The key parameter must be a string. If the key exhists true is returned,
//if it doesn't the function returns false.

//Delete a key
db.delete('key');
//The key parameter must be a string. The function returns as per the 
//delete operator if the key exhists, else it returns undefined.

//Sync to disk
db.sync();
//This function writes the JSON storage object to the file path 
//specified as the parameter of the main constructor. Consult 
//the Options section for usage details; on default options there 
//is no need to manually invoke it.

//Access JSON storage
db.JSON();
//This will return a copy of the internal JSON storage object, for 
//you to tinker with and loop over.

//Replace JSON storage
db.JSON({ data });
//Giving a parameter to the JSON function makes the object passed 
//replace the internal one. Be careful, as there's no way to recover 
//the old object if the changes have already been written to disk.
```
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.npmjs.com/package/simple-json-db" %}
{% endtab %}
{% endtabs %}

## Idea- A lightweight CLI tool and module for keeping ideas in a safe place quick and easy

{% tabs %}
{% tab title="Example" %}
```javascript
npm install --global idea

$ idea --help
idea help
usage: idea [command] <idea|filter|id>

A lightweight CLI tool and module for keeping your ideas in a safe place quick and easy.

[command]
  create <idea>           Creates and saves a new idea. Example: `idea create "Implement something very cool"`
  list                    Lists all ideas. Example: `idea list`
  filter <filter>         Lists filtered ideas. Example: `idea filter '{"state": "SOLVED"}'`
  solve <id>              Solves an idea. Example `idea solve 1`
  help                    Prints this help.

Documentation can be found at https://github.com/IonicaBizau/idea
```
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.npmjs.com/package/idea" %}
{% endtab %}
{% endtabs %}

## Boxen- command line box maker

{% tabs %}
{% tab title="Example" %}
#### Create boxes in the terminal

![](../../../../.gitbook/assets/boxen2.gif)
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.npmjs.com/package/boxen" %}
{% endtab %}
{% endtabs %}

## Prompts- simple command line interface \(questions\)

{% tabs %}
{% tab title="Example" %}
![](../../../../.gitbook/assets/prompts.gif)
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.npmjs.com/package/prompts" %}
{% endtab %}
{% endtabs %}

## Progress- simple node progress bar

{% tabs %}
{% tab title="Example" %}
![](../../../../.gitbook/assets/progress.gif)
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.npmjs.com/package/progress" %}
{% endtab %}
{% endtabs %}

## Config- .JSON configuration files 

{% tabs %}
{% tab title="Example" %}
![](../../../../.gitbook/assets/config.gif)
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.npmjs.com/package/config" %}
{% endtab %}
{% endtabs %}

## Enquirer- command line interface

{% tabs %}
{% tab title="Example" %}
![](../../../../.gitbook/assets/enquirer.gif)

![](../../../../.gitbook/assets/survey-prompt.gif)
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.npmjs.com/package/enquirer" %}
{% endtab %}
{% endtabs %}

## Inquirer- A collection of common interactive command line user interfaces

{% tabs %}
{% tab title="Example" %}
![](../../../../.gitbook/assets/inquirer.gif)
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.npmjs.com/package/inquirer" %}
{% endtab %}
{% endtabs %}

##  Figlet- Ascii text generator

{% tabs %}
{% tab title="Example" %}
![](../../../../.gitbook/assets/figlet.gif)
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.npmjs.com/package/figlet" %}
{% endtab %}
{% endtabs %}

## Minimist- handles command line arguments

{% tabs %}
{% tab title="Example" %}
![](../../../../.gitbook/assets/minimist.gif)
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.npmjs.com/package/minimist" %}
{% endtab %}
{% endtabs %}

#### 

{% embed url="https://www.npmjs.com/package/fs-extra" %}

{% embed url="https://www.npmjs.com/package/remarkable" %}

{% embed url="https://www.npmjs.com/package/uglify-js2" %}

{% embed url="https://www.npmjs.com/package/msg-router" %}

{% embed url="https://www.npmjs.com/package/commander" %}

{% embed url="https://pdfkit.org/" %}

{% embed url="https://www.npmjs.com/package/gsap" %}

{% embed url="https://www.npmjs.com/package/@google/model-viewer" %}

{% embed url="https://www.npmjs.com/package/three" %}

{% embed url="https://www.npmjs.com/package/javascript-barcode-reader" %}



#### 





