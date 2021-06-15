# Reference

## Counter \(for loop\)

{% tabs %}
{% tab title="Code Example" %}
```javascript
for (var counter = 1; counter < 5; counter++) {
    console.log('Inside the loop:' + counter);
}
console.log('Outside the loop:' + counter);

//results
//Inside the loop:1
//Inside the loop:2
//Inside the loop:3
//Inside the loop:4
//Outside the loop:5
```
{% endtab %}

{% tab title="Format" %}
```javascript
for (initialization; condition; post-expression) {
    // statements
}
```
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.javascripttutorial.net/javascript-for-loop/" %}
{% endtab %}
{% endtabs %}

## Take a certain part of a string

{% tabs %}
{% tab title="Code Example" %}
```javascript
function myFunction() {
  var str = document.getElementById("input").value;
  var res = str.substr(1, 4);
  document.getElementById("demo").innerHTML = res;
}
```
{% endtab %}

{% tab title="CodePen" %}
{% embed url="https://codepen.io/Schmitty2535/pen/oNZJQNN" %}
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.w3schools.com/jsref/jsref\_substr.asp" %}
{% endtab %}
{% endtabs %}

## Reading a file

{% tabs %}
{% tab title="Code Example" %}
```javascript
// Requiring fs module in which 
// readFile function is defined.
const fs = require('fs')
  
fs.readFile('Input.txt', (err, data) => {
    if (err) throw err;
  
    console.log(data.toString());
})
```
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.geeksforgeeks.org/javascript-program-to-read-text-file/" %}
{% endtab %}
{% endtabs %}

## Deleting contents of a file

{% tabs %}
{% tab title="Code Example" %}
```javascript
const fs = require('fs')
fs.truncate('/path/to/file', 0, function(){console.log('done')})

//or

const fs = require('fs')
fs.writeFile('/path/to/file', '', function(){console.log('done')})
```
{% endtab %}

{% tab title="Links" %}
{% embed url="https://stackoverflow.com/questions/17371224/node-js-delete-content-in-file" %}
{% endtab %}
{% endtabs %}

## Padding a number \(ex. 1  -&gt;  001\)

{% tabs %}
{% tab title="Code Example" %}
```javascript
function padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}
                            red2 = padDigits(red2, 3)
                            green2 = padDigits(green2, 3)
                            blue2 = padDigits(blue2, 3)
                            white2 = padDigits(white2, 3)
```
{% endtab %}

{% tab title="Links" %}
{% embed url="https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript" %}
{% endtab %}
{% endtabs %}

## Color wheel

{% tabs %}
{% tab title="CodePen" %}
{% embed url="https://codepen.io/Schmitty2535/pen/poeqQbZ" %}
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.cssscript.com/sleek-html5-javascript-color-picker-iro-js/\#methods" %}
{% endtab %}
{% endtabs %}



## Reload HTML Page with JavaScript 

{% tabs %}
{% tab title="Code" %}
```javascript
location.reload();
```
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.w3schools.com/jsref/met\_loc\_reload.asp" %}
{% endtab %}
{% endtabs %}

## Shields

{% embed url="https://shields.io/category/activity" %}

## Random Number Generator

```text
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


setInterval(function(){
    var test24 = getRandomInt(255);
    var test25 = getRandomInt(255);
    var test26 = getRandomInt(255);

    comm.dledBufferWrite(0x01, test24, test25, test26,0,0);
},100)
```

## Scale Conversion

{% tabs %}
{% tab title="Function JS" %}
```text
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
```
{% endtab %}

{% tab title="CodePen" %}
{% embed url="https://codepen.io/Schmitty2535/pen/yLMGxPY" %}
{% endtab %}
{% endtabs %}







[  
](
https://codepen.io/pen/?template=yLMGxPY
)

