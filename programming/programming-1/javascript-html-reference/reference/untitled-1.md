# Object\(\) constructor - JavaScript \| MDN

The **`Object` constructor** creates an object wrapper for the given value.

* If the value is [`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) or [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined), it will create and return an empty object.
* Otherwise, it will return an object of a Type that corresponds to the given value.
* If the value is an object already, it will return the value.

When called in a non-constructor context, `Object` behaves identically to `new Object()`.

## Syntax <a id="syntax"></a>

```javascript
new Object()
new Object(value)
```

#### Parameters

`Value` Any value.

## Examples <a id="examples"></a>

### Creating a new Object <a id="creating_a_new_object"></a>

```javascript
let o = new Object()
o.foo = 42

console.log(o)
//Object { foo:42 }
```

### Using Object given undefined and null types <a id="using_object_given_undefined_and_null_types"></a>

The following examples store an empty `Object` object in `o`:

```text
let o = new Object()
```

```text
let o = new Object(undefined)
```

```text
let o = new Object(null)
```

## Specifications <a id="specifications"></a>

| Specification |
| :--- |
| [ECMAScript Language Specification \(ECMAScript\) \# sec-object-constructor](https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object-constructor) |

## See also <a id="see_also"></a>

{% embed url="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Object/Object" %}

