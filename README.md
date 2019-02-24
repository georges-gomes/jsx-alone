# JSX Alone 

**Render JSX without libraries like React with 0 overhead**

 * Two implementations: 

   * **string**: to render JSX server side. Compatible with node.js, browser, rhino, Nashorn (and any es5 compatible JS engine)
   * **DOM**: to render JSX in the browser as HTML DOM Elements

 * Very lightweight
 * HTML DOM Typings: it contains typings for HTML DOM just like React so you can type-check your HTML templates
 * No support for **features beyond JSX**: (so we keep them KISS and lightweight) :
   * No virtual dom
   * No stateful components 
   * limited support for function attributes (event handlers) 
   * ...But expect auxiliary projects that add some of these in the future...

# String implementation

```
npm install jsx-alone-string
```

import { JSXAlone } from 'jsx-alone-string'

TODO

# DOM implementation

TODO

# Implementation details

## function attributes (event handlers)

In both implementations JSX like the following:

```
<button onClick={e=>{alert('click')}}>click</button>
```

is translated to (dom or string)

```
<button onClick=\"_this = __this__ = this; (e => { alert('click'); }).apply(_this, arguments)\">click</button>
```

Notes : 
 * `_this` is generated by typescript transpiled code to es5
 * the current 

# Limitations

## function attributes (event handlers)

This feature is out of scope for JSX rendering. Some considerations:

 * the functions are rendered using Function.prototype.toString() so they are not transpiled (to es5), so be careful!
 * in both implementations, the functions will be evaluated in a complete different context (the DOM element event handler). None of the variables in the current scope , with exception of `this`,  will be present. 
   * in the dom implementation  globals will be available also, but in string implementation only `this` 
   * in string implementation, even if `this` is available, if a method is called (`this.method()`) it might happen that it ends up calling code that is not available (like a method or function in another file), so be careful.


# TODO

 * performance comparison against other template implementations like js string, handlebars, react, inferno (those that support isomorphic)
 * example-project
 * React.Fragment
 * minimal api in core for manipulate NodeLike before createElement - in another project. 