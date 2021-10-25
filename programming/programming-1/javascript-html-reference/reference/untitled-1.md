# Object() constructor - JavaScript | MDN

The **`Object` constructor** creates an object wrapper for the given value.

* If the value is [`null`](https://app.gitbook.com/en-US/docs/Web/JavaScript/Reference/Global\_Objects/null) or [`undefined`](https://app.gitbook.com/en-US/docs/Web/JavaScript/Reference/Global\_Objects/undefined), it will create and return an empty object.
* Otherwise, it will return an object of a Type that corresponds to the given value.
* If the value is an object already, it will return the value.

When called in a non-constructor context, `Object` behaves identically to `new Object()`.

## Syntax <a href="syntax" id="syntax"></a>

```javascript
new Object()
new Object(value)
```

#### Parameters

`Value` Any value.

## Examples <a href="examples" id="examples"></a>

### Creating a new Object <a href="creating_a_new_object" id="creating_a_new_object"></a>

```javascript
let o = new Object()
o.foo = 42

console.log(o)
//Object { foo:42 }
```

### Using Object given undefined and null types <a href="using_object_given_undefined_and_null_types" id="using_object_given_undefined_and_null_types"></a>

The following examples store an empty `Object` object in `o`:

```
let o = new Object()
```

```
let o = new Object(undefined)
```

```
let o = new Object(null)
```

## Specifications <a href="specifications" id="specifications"></a>

| Specification                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p><a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object-constructor">ECMAScript Language Specification (ECMAScript)<br># sec-object-constructor</a></p> |

## See also <a href="see_also" id="see_also"></a>

{% embed url="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object" %}
