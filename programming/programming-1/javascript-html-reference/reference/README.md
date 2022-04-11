# Reference

## Counter (for loop)

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
{% embed url="https://www.w3schools.com/jsref/jsref_substr.asp" %}


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

## Padding a number (ex. 1  ->  001)

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
{% embed url="https://www.cssscript.com/sleek-html5-javascript-color-picker-iro-js/#methods" %}
{% endtab %}
{% endtabs %}



## Reload HTML Page with JavaScript&#x20;

{% tabs %}
{% tab title="Code" %}
```javascript
location.reload();
```
{% endtab %}

{% tab title="Links" %}
{% embed url="https://www.w3schools.com/jsref/met_loc_reload.asp" %}
{% endtab %}
{% endtabs %}

## Shields

{% embed url="https://shields.io/category/activity" %}

## Random Number Generator

```javascript
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
```
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
```
{% endtab %}

{% tab title="CodePen" %}
{% embed url="https://codepen.io/Schmitty2535/pen/yLMGxPY" %}
{% endtab %}
{% endtabs %}

## One Line If/Else

```javascript
const condition = true;
// (condition) ? if : else
(condition) ? console.log("it is true") : console.log("it is false");

var variable = (condition) ? (true block) : ((condition2) ? (true block2) : (else block2))
```

## Old vs. New Variable Comparer

```javascript
function check1(oldvalue) {
    undefined === oldvalue && (oldvalue = value);
    clearcheck = setInterval(repeatcheck,500,oldvalue);
    function repeatcheck(oldvalue) {
        if (value !== oldvalue) {
            // do something
            clearInterval(clearcheck);
            console.log("check1 value changed from " +
                oldvalue + " to " + value);
        }
    }
}
```



{% embed url="https://www.w3schools.com/js/js_arrays.asp" %}

{% embed url="https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/" %}

{% embed url="https://flaviocopes.com/how-to-count-properties-object-javascript/" %}

```javascript
let object2 = {
            part:'OCO' + part ,
            partQr: '^FDQA,OCO' + part,
            lot:'2002' + lot,
            temp: '' +
                '^XA' +
                '^DFR:temp1.PRN^FS' +
                '^BY3,3,48^FT229,150^BCN,,Y,N,,A^FN1^FS' +
                '^FO157,43^A0N,28,28^FB393,1,7,C^FH^CI28^FN2^FS^CI27' +
                '' +
                '^FT36,169^BQN,2,5' +
                '^FH^FN3^FS' +
                '^XZ' +
                '',
            numberOfProps: (Object.keys(this).length - 1) //will not work from within object
        }
```

{% embed url="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" %}

{% embed url="https://www.w3schools.com/js/js_switch.asp" %}

{% embed url="https://zellwk.com/blog/css-values-in-js/" %}



{% embed url="https://css-tricks.com/centering-css-complete-guide/" %}

{% embed url="https://stackoverflow.com/questions/4260308/getting-the-objects-property-name" %}

{% embed url="https://css-tricks.com/complete-guide-table-element/" %}

{% embed url="https://mattboldt.com/demos/typed-js/" %}

{% embed url="https://popmotion.io/" %}

{% embed url="https://yoannmoi.net/nipplejs/" %}

{% embed url="https://popper.js.org/" %}

{% embed url="https://vincentgarreau.com/particles.js/" %}

{% embed url="https://www.mysamplecode.com/2012/04/generate-html-table-using-javascript.html" %}

{% embed url="https://atomiks.github.io/tippyjs/v6/html-content/" %}

## Console.table

{% tabs %}
{% tab title="First Tab" %}
```javascript
console.table(["Audi", "Volvo", "Ford"]);
```
{% endtab %}

{% tab title="Second Tab" %}


|   |         |
| - | ------- |
| 0 | 'Audi'  |
| 1 | 'Volvo' |
| 2 | 'Ford'  |
|   |         |

1. Array(3)
{% endtab %}
{% endtabs %}

{% embed url="https://www.w3schools.com/jsref/met_console_table.asp" %}

## Mousemove Event

{% embed url="https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event" %}

## Iphone Notch

{% embed url="https://css-tricks.com/the-notch-and-css" %}

{% embed url="https://dev.to/karmasakshi/make-your-pwas-look-handsome-on-ios-1o08" %}

{% embed url="https://medium.com/appscope/changing-the-ios-status-bar-of-your-progressive-web-app-9fc8fbe8e6ab" %}

## Scroll to the bottom of a HTML element

```javascript
var objDiv = document.getElementById("divExample");
objDiv.scrollTop = objDiv.scrollHeight;
```

{% embed url="https://www.w3schools.com/css/css_overflow.asp" %}

{% embed url="https://www.w3schools.com/cssref/css3_pr_word-wrap.asp" %}

{% embed url="https://www.w3docs.com/snippets/javascript/how-to-detect-a-click-outside-an-element.html" %}

{% embed url="https://shadows.brumm.af" %}

{% embed url="https://neumorphism.io/#e0e0e0" %}

{% embed url="https://loading.io/progress" %}

{% embed url="https://codezup.com/add-dynamic-key-to-object-property-in-javascript" %}

{% embed url="https://stackoverflow.com/questions/3298477/get-the-first-key-name-of-a-javascript-object" %}

{% embed url="https://lodash.com/docs/4.17.15#memoize" %}

{% embed url="https://www.google.com/search?aqs=chrome.1.69i57j0i13l7j0i22i30l2.8572j0j7&ie=UTF-8&oq=what+is+a+regretion+a&q=what+is+a+regression+analysis&rlz=1C1ONGR_enUS989US989&sourceid=chrome" %}

{% embed url="https://medium.com/front-end-weekly/how-to-convert-24-hours-format-to-12-hours-in-javascript-ca19dfd7419d" %}

{% embed url="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" %}

{% embed url="https://stackoverflow.com/questions/38619762/how-to-prevent-ios-keyboard-from-pushing-the-view-off-screen-with-css-or-js" %}

{% embed url="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation" %}

{% embed url="https://stackoverflow.com/questions/37465458/input-text-field-with-only-bottom-border" %}

{% embed url="https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content" %}

{% embed url="https://ianlunn.github.io/Hover" %}

{% embed url="https://www.minimamente.com/project/magic" %}
