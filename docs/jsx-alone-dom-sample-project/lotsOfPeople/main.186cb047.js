// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"qBof":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export function flatDeep<T = any>(arr1: T[][] | T[]): T[] {
//   return (arr1 as any[]).reduce((acc, val) => (Array.isArray(val) ? acc.concat(flatDeep(val)) : acc.concat(val)), [])
// }
function flatDeep(arr1) {
    return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatDeep(val)) : acc.concat(val), []);
}
exports.flatDeep = flatDeep;
function flat(arr) {
    return arr.reduce((a, b) => a.concat(b));
}
exports.flat = flat;
function flatReadOnly(arr) {
    return arr && arr.length ? arr.reduce((a, b) => a.concat(b)) : [];
}
exports.flatReadOnly = flatReadOnly;

},{}],"HvSf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function array(n, sample) {
    const a = [];
    for (let i = 0; i < n; i++) {
        a.push(typeof sample === 'undefined' ? i : sample);
    }
    return a;
}
exports.array = array;
function dedup(a, p) {
    return a.reduce((x, y) => x.find(i => p(i, y)) ? x : [...x, y], []);
}
exports.dedup = dedup;
function asArray(selectors) {
    return Array.isArray(selectors) ? selectors : [selectors];
}
exports.asArray = asArray;
function unionEquals(left, right, equals) {
    return left.concat(right).reduce((acc, element) => {
        //@ts-ignore
        return acc.some(elt => equals(elt, element)) ? acc : acc.concat(element);
    }, []);
}
exports.unionEquals = unionEquals;
function seq(start = 0, step = 1, max = 0) {
    const result = [];
    for (let i = start; i < max; i += step) {
        result.push(i);
    }
    return result;
}
exports.seq = seq;

},{}],"3n+A":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayPrototypeFind(a, predicate, thisArg) {
    for (let i = 0; i < a.length; i++) {
        const v = a[i];
        if (predicate.apply(thisArg, [v, i, a])) {
            return v;
        }
    }
}
exports.arrayPrototypeFind = arrayPrototypeFind;
function installArrayPrototypeFind(force = false) {
    Array.prototype.find = (typeof Array.prototype.find === 'undefined' || force) ? function (predicate, thisArg) {
        //@ts- ignore
        return arrayPrototypeFind(this, predicate, thisArg);
    } : Array.prototype.find;
}
exports.installArrayPrototypeFind = installArrayPrototypeFind;

},{}],"WEkw":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./flat"));
__export(require("./array"));
__export(require("./prototypeFind"));

},{"./flat":"qBof","./array":"HvSf","./prototypeFind":"3n+A"}],"qKyn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function changeText(text, toInsert) {
    let s = text.split('');
    let indexIncr = 0;
    toInsert.forEach(data => {
        data.toAdd = data.toAdd || '';
        data.toRemove = data.toRemove || '';
        s.splice(data.pos + indexIncr, data.toRemove.length, ...data.toAdd.split(''));
        indexIncr += data.toAdd.length - data.toRemove.length;
    });
    return s.join('');
}
exports.changeText = changeText;

},{}],"5uki":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getPreviousMatchingPos(text, pos, condition) {
    pos = text.length <= pos ? text.length : pos;
    if (typeof condition === 'string') {
        const s = condition;
        condition = (c) => c === s;
    }
    while (pos >= 0) {
        const char = text[pos];
        if (!condition(char)) {
            pos--;
        }
        else {
            break;
        }
    }
    return pos;
}
exports.getPreviousMatchingPos = getPreviousMatchingPos;

},{}],"yp4B":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quote(s, q = '"') {
    return q + s.replace(new RegExp(q, 'g'), '\\' + q) + q;
}
exports.quote = quote;

},{}],"eu/a":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** try to parse given json string. return undefined in case there is an error. */
function parseJSON(s, defaultValue) {
    try {
        return JSON.parse(s);
    }
    catch (error) {
        return defaultValue;
    }
}
exports.parseJSON = parseJSON;
function clone(a) {
    return JSON.parse(JSON.stringify(a));
}
exports.clone = clone;
// export function jsonParseOr<K>(s: string, defaultValue: K): K {
//   return parseJSON(s) || defaultValue
// }

},{}],"49Nj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shorter(text, much = 10) {
    return text.trim().substring(0, Math.min(text.length, much)) + '...';
}
exports.shorter = shorter;

},{}],"ifBX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function escapeHtmlAttribute(code) {
    return code.replace(/\"/gmi, '&quot;');
}
exports.escapeHtmlAttribute = escapeHtmlAttribute;
function unEscapeHtmlAttribute(code) {
    return code.replace(/\&quot\;/gmi, '"');
}
exports.unEscapeHtmlAttribute = unEscapeHtmlAttribute;

},{}],"DXfs":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("../array");
__export(require("./changeText"));
__export(require("./getPreviousMatchingPos"));
__export(require("./quote"));
__export(require("./json"));
__export(require("./shorter"));
__export(require("./html"));
function repeat(n, s) {
    return array_1.array(n, s).join('');
}
exports.repeat = repeat;
function indent(i = 1, tabSize = 2) {
    return repeat(i * tabSize, ' ');
}
exports.indent = indent;
function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}
exports.getPosition = getPosition;
function removeWhites(s, replaceWith = ' ') {
    return s.replace(/\s+/gm, replaceWith).trim();
}
exports.removeWhites = removeWhites;

},{"../array":"WEkw","./changeText":"qKyn","./getPreviousMatchingPos":"5uki","./quote":"yp4B","./json":"eu/a","./shorter":"49Nj","./html":"ifBX"}],"VEKo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _unique = 0;
function unique(prefix = '_') {
    return prefix + _unique++;
}
exports.unique = unique;
function objectKeys(o) {
    return Object.keys(o);
}
exports.objectKeys = objectKeys;
function randomIntBetween(a, b) {
    return Math.floor(Math.random() * b) + a;
}
exports.randomIntBetween = randomIntBetween;
function checkThrow(r, msg = 'Throwing on undefined value') {
    if (!r) {
        throw new Error(msg);
    }
    return r;
}
exports.checkThrow = checkThrow;
function tryTo(f) {
    try {
        return f();
    }
    catch (error) {
    }
}
exports.tryTo = tryTo;

},{}],"TPjs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatDate(date, format) {
    if (typeof date === 'string') { // happens when serializing dates to json for testing
        date = new Date(date);
    }
    var dd = date.getDay();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    if (format === 'YYYY-MM-DD') {
        return yyyy + '-' + mm + '-' + dd;
    }
    else {
        return `${mm}/${dd}/${yyyy}`;
    }
}
exports.formatDate = formatDate;
function formatDateTime(date, format) {
    if (typeof date === 'string') { // happens when serializing dates to json for testing
        date = new Date(date);
    }
    let hh = `${date.getHours()}`.length < 2 ? `0${date.getHours()}` : `${date.getHours()}`;
    let mm = `${date.getMinutes()}`.length < 2 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    return `${formatDate(date, 'YYYY-MM-DD')}T${hh}:${mm}`;
}
exports.formatDateTime = formatDateTime;

},{}],"ltuP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printMs(ms, config = { minutes: false, seconds: true, ms: true }) {
    config = Object.assign({ minutes: false, seconds: true, ms: true }, config);
    const seconds = config.seconds && Math.floor(ms / 1000);
    const minutes = config.minutes && seconds && Math.floor(seconds / 60);
    const milliseconds = config.ms && Math.floor(ms % 1000 || ms);
    return `${minutes ? `${minutes} minutes ` : ''}${seconds ? `${seconds} seconds ` : ''}${milliseconds ? `${milliseconds} milliseconds ` : ''}`;
}
exports.printMs = printMs;

},{}],"4exK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
exports.sleep = sleep;
exports.wait = sleep;
function withTime(label, fn) {
    console.time(label);
    const r = fn();
    console.timeEnd(label);
    return r;
}
exports.withTime = withTime;

},{}],"SYKP":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./formatDate"));
__export(require("./printMs"));
__export(require("./time"));

},{"./formatDate":"TPjs","./printMs":"ltuP","./time":"4exK"}],"8M/7":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./string"));
__export(require("./array"));
__export(require("./misc"));
__export(require("./time"));

},{"./string":"DXfs","./array":"WEkw","./misc":"VEKo","./time":"SYKP"}],"k0NB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var misc_utils_of_mine_generic_1 = require("misc-utils-of-mine-generic");

function isJSXAloneComponent(c) {
  return c.prototype && c.prototype.render;
}

exports.isJSXAloneComponent = isJSXAloneComponent;

function isNode(n) {
  return isTextNodeLike(n) || isElementLike(n);
}

exports.isNode = isNode;

function isElementLike(n) {
  return n && n.setAttribute;
}

exports.isElementLike = isElementLike;

function isTextNodeLike(n) {
  return n && n.content && !isElementLike(n);
}

exports.isTextNodeLike = isTextNodeLike;

var AbstractTextNodeLike =
/** @class */
function () {
  function AbstractTextNodeLike(content) {
    this.content = content;
  }

  return AbstractTextNodeLike;
}();

exports.AbstractTextNodeLike = AbstractTextNodeLike;

var AbstractElementLike =
/** @class */
function () {
  function AbstractElementLike(tag) {
    this.tag = tag;
    this.attrs = {};
    this.children = [];
  }

  AbstractElementLike.prototype.setAttribute = function (name, value) {
    this.attrs[name] = value;
  };

  AbstractElementLike.prototype.appendChild = function (c) {
    this.children.push(c);

    if (isElementLike(c)) {
      c.parentElement = this;
    }
  };

  AbstractElementLike.prototype.findDescendant = function (p) {
    var found;
    this.children.some(function (c) {
      if (isElementLike(c)) {
        if (p(c)) {
          found = c;
        } else {
          found = c.findDescendant(p);
        }
      }

      return !!found;
    });
    return found;
  };

  AbstractElementLike.prototype.findAscendant = function (p) {
    if (this.parentElement) {
      if (p(this.parentElement)) {
        return this.parentElement;
      }

      return this.parentElement.findAscendant(p);
    }
  };

  AbstractElementLike.prototype.getAscendants = function () {
    return this.parentElement ? this.parentElement.getAscendants().concat([this.parentElement]) : [];
  };

  AbstractElementLike.prototype.getRootAscendant = function () {
    var r = this.parentElement ? this.findAscendant(function (n) {
      return isElementLike(n) && !n.parentElement;
    }) : this;
    return misc_utils_of_mine_generic_1.checkThrow(r, 'No root ascendant found in element like tree!');
  };

  AbstractElementLike.prototype.getSiblings = function () {
    var _this = this;

    if (this.parentElement) {
      return this.parentElement.children.filter(function (c) {
        return c !== _this;
      });
    }

    return [];
  };

  AbstractElementLike.prototype.findSibling = function (p) {
    return this.getSiblings().find(p);
  };

  AbstractElementLike.prototype.find = function (p) {
    // TODO: this should start searching in the near children, sibling and parents, and only after that look on far nodes
    return this.getRootAscendant().findDescendant(p);
  };

  return AbstractElementLike;
}();

exports.AbstractElementLike = AbstractElementLike;
},{"misc-utils-of-mine-generic":"8M/7"}],"U/x1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var elementImpl_1 = require("./elementImpl");
/**
 * A Class able to render() JSX. Similar to React.Component but only supporting properties, without state, context, ref, did/will methods, etc.
 */


var AbstractElementClass =
/** @class */
function () {
  function AbstractElementClass(props) {
    this.props = props;
  }

  AbstractElementClass.prototype.childrenAsArray = function () {
    return Array.isArray(this.props.children) ? this.props.children : [this.props.children];
  };

  AbstractElementClass.prototype.childrenElementsAsArray = function () {
    return this.childrenAsArray().filter(function (c) {
      return elementImpl_1.isElementLike(c);
    });
  };

  AbstractElementClass.prototype.firstChildElement = function () {
    return this.childrenAsArray().find(function (e) {
      return true;
    });
  };

  return AbstractElementClass;
}();

exports.AbstractElementClass = AbstractElementClass;
},{"./elementImpl":"k0NB"}],"/Hzm":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var elementImpl_1 = require("./elementImpl");

var throwOnUnrecognized = false;

function debug(err) {
  if (throwOnUnrecognized) {
    throw err;
  } else {
    console.error(err);
  }
}

exports.debug = debug;

function createCreateElement(impl, textNodeImpl) {
  return function createElement(tag, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }

    var children = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      children[_i - 2] = arguments[_i];
    }

    var element;

    if (typeof tag === 'string') {
      element = new impl(tag);
    } else {
      if (elementImpl_1.isJSXAloneComponent(tag)) {
        element = new tag(__assign({}, attrs, {
          children: children
        })).render();
      } else {
        element = tag(__assign({}, attrs, {
          children: children
        }));
      }

      attrs = {};
    }

    for (var name_1 in attrs) {
      if (name_1 && attrs.hasOwnProperty(name_1)) {
        var value = attrs[name_1];

        if (typeof value === 'boolean') {
          if (value === true) {
            element.setAttribute(name_1, name_1);
          }
        } else if (typeof value === 'function') {
          var code = "_this = __this__ = this; (" + value.toString() + ").apply(_this, arguments)";
          var escaped = code.replace(/\"/gim, '&quot;');
          element.setAttribute(name_1, escaped);
        } else if (value !== false && value != null) {
          if (name_1 === 'className') {
            if (typeof value === 'string') {
              element.setAttribute('class', value);
            } else if (Array.isArray(value) && value.length && typeof value[0] === 'string') {
              element.setAttribute('class', value.join(' '));
            } else {
              debug("unrecognized className value " + _typeof(value) + " " + value);
            }
          } else {
            element.setAttribute(name_1, value.toString());
          }
        } else if (_typeof(value) === 'object') {
          if (name_1 === 'style') {
            element.setAttribute('style', "" + Object.keys(value).map(function (p) {
              return p + ": " + value[p];
            }).join('; '));
          } else if (name_1 === 'dangerouslySetInnerHTML' && value && typeof value.__html === 'string') {
            element.dangerouslySetInnerHTML(value.__html);
          } else {
            debug("unrecognized object attribute \"" + name_1 + "\" - the only object attribute supported is \"style\"");
          }
        } else {
          debug("unrecognized attribute \"" + name_1 + "\" with type " + _typeof(value));
        }
      }
    }

    if (typeof tag === 'string') {
      // don't render children for function or classes since they are responsible of render their own children
      children.filter(function (c) {
        return c;
      }).forEach(function (child) {
        if (elementImpl_1.isNode(child)) {
          element.appendChild(child);
        } else if (Array.isArray(child)) {
          child.forEach(function (c) {
            if (typeof c === 'string') {
              element.appendChild(new textNodeImpl(c));
            } else if (elementImpl_1.isNode(c)) {
              element.appendChild(c);
            } else {
              debug("Child is not a node or string: " + c + " , tag: " + tag);
            }
          });
        } else {
          element.appendChild(new textNodeImpl(child));
        }
      });
    }

    return element;
  };
}

exports.createCreateElement = createCreateElement;
},{"./elementImpl":"k0NB"}],"dIAC":[function(require,module,exports) {
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(require("./elementImpl"));

__export(require("./elementClass"));

__export(require("./createElement"));

var elementImpl_1 = require("./elementImpl");

exports.AbstractTextNodeLike = elementImpl_1.AbstractTextNodeLike;
exports.AbstractElementLike = elementImpl_1.AbstractElementLike;
},{"./elementImpl":"k0NB","./elementClass":"U/x1","./createElement":"/Hzm"}],"KmFW":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_alone_core_1 = require("jsx-alone-core");
var ElementLikeImpl = /** @class */ (function (_super) {
    __extends(ElementLikeImpl, _super);
    function ElementLikeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // private _element: HTMLElement | undefined
    ElementLikeImpl.prototype.render = function (config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        // const el = this._getElement()
        var el = document.createElement(this.tag);
        Object.keys(this.attrs).forEach(function (attribute) {
            el.setAttribute(attribute, _this.attrs[attribute]);
        });
        if (this._innerHtml) {
            el.innerHTML = this._innerHtml;
        }
        this.children.forEach(function (c) {
            c.render(__assign({}, config, { parent: el }));
        });
        if (config.parent) {
            config.parent.appendChild(el);
        }
        return el;
    };
    // private _getElement(): HTMLElement {
    //   if (!this._element) {
    //     this._element = document.createElement(this.tag)
    //   }
    //   return this._element
    // }
    ElementLikeImpl.prototype.dangerouslySetInnerHTML = function (s) {
        this._innerHtml = s;
    };
    return ElementLikeImpl;
}(jsx_alone_core_1.AbstractElementLike));
exports.ElementLikeImpl = ElementLikeImpl;
var TextNodeLikeImpl = /** @class */ (function (_super) {
    __extends(TextNodeLikeImpl, _super);
    function TextNodeLikeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // private _node: Text | undefined
    TextNodeLikeImpl.prototype.render = function (config) {
        if (config === void 0) { config = {}; }
        // const n = this._getNode()
        var text = document.createTextNode(this.content);
        if (config.parent) {
            config.parent.appendChild(text);
        }
        return text;
    };
    return TextNodeLikeImpl;
}(jsx_alone_core_1.AbstractTextNodeLike));
exports.TextNodeLikeImpl = TextNodeLikeImpl;
var ElementClass = /** @class */ (function (_super) {
    __extends(ElementClass, _super);
    function ElementClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ElementClass;
}(jsx_alone_core_1.AbstractElementClass));
exports.ElementClass = ElementClass;

},{"jsx-alone-core":"dIAC"}],"Hbm/":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_alone_core_1 = require("jsx-alone-core");
var elementImpl_1 = require("./elementImpl");
document.body.insertAdjacentHTML;
var Module = {
    createElement: jsx_alone_core_1.createCreateElement(elementImpl_1.ElementLikeImpl, elementImpl_1.TextNodeLikeImpl),
    render: function (el, config) {
        return el.render(config);
    }
};
exports.JSXAlone = Module;
// //@ts-ignore
// JSXAlone = Module // creates a global variable needed so emitted .js calls work. See tsconfig.json `"jsxFactory": "JSXAlone.createElement",`

},{"jsx-alone-core":"dIAC","./elementImpl":"KmFW"}],"1C1K":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
// TODO: like React.Fragment
exports.Fragment = function (props) { return _1.JSXAlone.createElement("span", null, props.children); };
function Js(props) {
    var r = props.children();
    console.log(r);
    return r ? _1.JSXAlone.createElement(exports.Fragment, null, r) : null;
}
exports.Js = Js;
/** if as statement. children need to be in a function and the function accepts a parameter which value is given condition `c` but casted to NotFalsy<C> so there's no need of type guards in the body. Example:
```
<If c={type}>{type =>
  <select multiple={true}>{names[type].map(c =>
      <option value={c.id}>{c.label}</option>)}
  </select>
</If>
```

No error thrown on second line because parameter type is not falsy but keep the original type (excluding falsy values)

Other example:

```
export class ErrorComponent extends React.Component<ErrorOptions> {
  public render() {
    return <div>
      <If c={this.props.error}>{error =>
        <React.Fragment>
          <h2>Error</h2>
          <If c={typeof error === 'string'}>{e =>
            <h3>{e}</h3>}
          </If>
          <If c={typeof error === 'object'}>{e =>
            <React.Fragment>
              <h5>{error!.name}</h5>
              <p>{error!.message}</p>
              <If c={error.stack}>{e =>
                <ul>
                  {e.split('\n').map(e =>
                    <li>{e}</li>)}
                </ul>}
              </If>
            </React.Fragment>}
          </If>
          <If c={this.props.responseText}>{responseText =>
            <iframe css={{ border: 0, width: '100%', height: '400px' }} srcDoc={responseText}>
            </iframe>}
          </If>
        </React.Fragment>}
      </If>
    </div>
  }
}

```
*/
function If(props) {
    var c = props.c, p = props.p;
    if (isNotFalsy(c))
        return props.children.apply(null, (p ? [p] : []).concat([c]));
    else {
        return null;
    }
}
exports.If = If;
function isNotFalsy(a) { return !!a; }

},{".":"jxZo"}],"jxZo":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./createElement"));
var elementImpl_1 = require("./elementImpl");
exports.ElementClass = elementImpl_1.ElementClass;
__export(require("./misc"));

},{"./createElement":"Hbm/","./elementImpl":"KmFW","./misc":"1C1K"}],"/5mC":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

function array(n, sample) {
  var a = [];

  for (var i = 0; i < n; i++) {
    a.push(typeof sample === 'undefined' ? i : sample);
  }

  return a;
}

exports.array = array;

function printMs(ms, config) {
  if (config === void 0) {
    config = {
      minutes: false,
      seconds: true,
      ms: true
    };
  }

  config = __assign({
    minutes: false,
    seconds: true,
    ms: true
  }, config);
  var seconds = config.seconds && Math.floor(ms / 1000);
  var minutes = config.minutes && seconds && Math.floor(seconds / 60);
  var milliseconds = config.ms && Math.floor(ms % 1000 || ms);
  return "" + (minutes ? minutes + " minutes " : '') + (seconds ? seconds + " seconds " : '') + (milliseconds ? milliseconds + " milliseconds " : '');
}

exports.printMs = printMs;
},{}],"+IjQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomIntBetween(a, b) {
    return Math.floor(Math.random() * b) + a;
}
exports.randomIntBetween = randomIntBetween;
function randomItem(array) {
    return array[randomIntBetween(0, array.length)];
}
exports.randomItem = randomItem;

},{}],"GIpK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstNames = [
    "William",
    "Jack",
    "Oliver",
    "Joshua",
    "Thomas",
    "Lachlan",
    "Cooper",
    "Noah",
    "Ethan",
    "Lucas",
    "James",
    "Samuel",
    "Jacob",
    "Liam",
    "Alexander",
    "Benjamin",
    "Max",
    "Isaac",
    "Daniel",
    "Riley",
    "Ryan",
    "Charlie",
    "Tyler",
    "Jake",
    "Matthew",
    "Xavier",
    "Harry",
    "Jayden",
    "Nicholas",
    "Harrison",
    "Levi",
    "Luke",
    "Adam",
    "Henry",
    "Aiden",
    "Dylan",
    "Oscar",
    "Michael",
    "Jackson",
    "Logan",
    "Joseph",
    "Blake",
    "Nathan",
    "Connor",
    "Elijah",
    "Nate",
    "Archie",
    "Bailey",
    "Marcus",
    "Cameron",
    "Jordan",
    "Zachary",
    "Caleb",
    "Hunter",
    "Ashton",
    "Toby",
    "Aidan",
    "Hayden",
    "Mason",
    "Hamish",
    "Edward",
    "Angus",
    "Eli",
    "Sebastian",
    "Christian",
    "Patrick",
    "Andrew",
    "Anthony",
    "Luca",
    "Kai",
    "Beau",
    "Alex",
    "George",
    "Callum",
    "Finn",
    "Zac",
    "Mitchell",
    "Jett",
    "Jesse",
    "Gabriel",
    "Leo",
    "Declan",
    "Charles",
    "Jasper",
    "Jonathan",
    "Aaron",
    "Hugo",
    "David",
    "Christopher",
    "Chase",
    "Owen",
    "Justin",
    "Ali",
    "Darcy",
    "Lincoln",
    "Cody",
    "Phoenix",
    "Sam",
    "John",
    "Joel",
    "Isabella",
    "Ruby",
    "Chloe",
    "Olivia",
    "Charlotte",
    "Mia",
    "Lily",
    "Emily",
    "Ella",
    "Sienna",
    "Sophie",
    "Amelia",
    "Grace",
    "Ava",
    "Zoe",
    "Emma",
    "Sophia",
    "Matilda",
    "Hannah",
    "Jessica",
    "Lucy",
    "Georgia",
    "Sarah",
    "Abigail",
    "Zara",
    "Eva",
    "Scarlett",
    "Jasmine",
    "Chelsea",
    "Lilly",
    "Ivy",
    "Isla",
    "Evie",
    "Isabelle",
    "Maddison",
    "Layla",
    "Summer",
    "Annabelle",
    "Alexis",
    "Elizabeth",
    "Bella",
    "Holly",
    "Lara",
    "Madison",
    "Alyssa",
    "Maya",
    "Tahlia",
    "Claire",
    "Hayley",
    "Imogen",
    "Jade",
    "Ellie",
    "Sofia",
    "Addison",
    "Molly",
    "Phoebe",
    "Alice",
    "Savannah",
    "Gabriella",
    "Kayla",
    "Mikayla",
    "Abbey",
    "Eliza",
    "Willow",
    "Alexandra",
    "Poppy",
    "Samantha",
    "Stella",
    "Amy",
    "Amelie",
    "Anna",
    "Piper",
    "Gemma",
    "Isabel",
    "Victoria",
    "Stephanie",
    "Caitlin",
    "Heidi",
    "Paige",
    "Rose",
    "Amber",
    "Audrey",
    "Claudia",
    "Taylor",
    "Madeline",
    "Angelina",
    "Natalie",
    "Charli",
    "Lauren",
    "Ashley",
    "Violet",
    "Mackenzie",
    "Abby",
    "Skye",
    "Lillian",
    "Alana",
    "Lola",
    "Leah",
    "Eve",
    "Kiara"
];

},{}],"63kX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastNames = [
    "Smith",
    "Jones",
    "Williams",
    "Brown",
    "Wilson",
    "Taylor",
    "Johnson",
    "White",
    "Martin",
    "Anderson",
    "Thompson",
    "Nguyen",
    "Thomas",
    "Walker",
    "Harris",
    "Lee",
    "Ryan",
    "Robinson",
    "Kelly",
    "King",
    "Davis",
    "Wright",
    "Evans",
    "Roberts",
    "Green",
    "Hall",
    "Wood",
    "Jackson",
    "Clarke",
    "Patel",
    "Khan",
    "Lewis",
    "James",
    "Phillips",
    "Mason",
    "Mitchell",
    "Rose",
    "Davies",
    "Rodriguez",
    "Cox",
    "Alexander",
    "Garden",
    "Campbell",
    "Johnston",
    "Moore",
    "Smyth",
    "O'neill",
    "Doherty",
    "Stewart",
    "Quinn",
    "Murphy",
    "Graham",
    "Mclaughlin",
    "Hamilton",
    "Murray",
    "Hughes",
    "Robertson",
    "Thomson",
    "Scott",
    "Macdonald",
    "Reid",
    "Clark",
    "Ross",
    "Young",
    "Watson",
    "Paterson",
    "Morrison",
    "Morgan",
    "Griffiths",
    "Edwards",
    "Rees",
    "Jenkins",
    "Owen",
    "Price",
    "Moss",
    "Richards",
    "Abbott",
    "Adams",
    "Armstrong",
    "Bahringer",
    "Bailey",
    "Barrows",
    "Bartell",
    "Bartoletti",
    "Barton",
    "Bauch",
    "Baumbach",
    "Bayer",
    "Beahan",
    "Beatty",
    "Becker",
    "Beier",
    "Berge",
    "Bergstrom",
    "Bode",
    "Bogan",
    "Borer",
    "Bosco",
    "Botsford",
    "Boyer",
    "Boyle",
    "Braun",
    "Bruen",
    "Carroll",
    "Carter",
    "Cartwright",
    "Casper",
    "Cassin",
    "Champlin",
    "Christiansen",
    "Cole",
    "Collier",
    "Collins",
    "Connelly",
    "Conroy",
    "Corkery",
    "Cormier",
    "Corwin",
    "Cronin",
    "Crooks",
    "Cruickshank",
    "Cummings",
    "D'amore",
    "Daniel",
    "Dare",
    "Daugherty",
    "Dickens",
    "Dickinson",
    "Dietrich",
    "Donnelly",
    "Dooley",
    "Douglas",
    "Doyle",
    "Durgan",
    "Ebert",
    "Emard",
    "Emmerich",
    "Erdman",
    "Ernser",
    "Fadel",
    "Fahey",
    "Farrell",
    "Fay",
    "Feeney",
    "Feil",
    "Ferry",
    "Fisher",
    "Flatley",
    "Gibson",
    "Gleason",
    "Glover",
    "Goldner",
    "Goodwin",
    "Grady",
    "Grant",
    "Greenfelder",
    "Greenholt",
    "Grimes",
    "Gutmann",
    "Hackett",
    "Hahn",
    "Haley",
    "Hammes",
    "Hand",
    "Hane",
    "Hansen",
    "Harber",
    "Hartmann",
    "Harvey",
    "Hayes",
    "Heaney",
    "Heathcote",
    "Heller",
    "Hermann",
    "Hermiston",
    "Hessel",
    "Hettinger",
    "Hickle",
    "Hill",
    "Hills",
    "Hoppe",
    "Howe",
    "Howell",
    "Hudson",
    "Huel",
    "Hyatt",
    "Jacobi",
    "Jacobs",
    "Jacobson",
    "Jerde",
    "Johns",
    "Keeling",
    "Kemmer",
    "Kessler",
    "Kiehn",
    "Kirlin",
    "Klein",
    "Koch",
    "Koelpin",
    "Kohler",
    "Koss",
    "Kovacek",
    "Kreiger",
    "Kris",
    "Kuhlman",
    "Kuhn",
    "Kulas",
    "Kunde",
    "Kutch",
    "Lakin",
    "Lang",
    "Langworth",
    "Larkin",
    "Larson",
    "Leannon",
    "Leffler",
    "Little",
    "Lockman",
    "Lowe",
    "Lynch",
    "Mann",
    "Marks",
    "Marvin",
    "Mayer",
    "Mccullough",
    "Mcdermott",
    "Mckenzie",
    "Miller",
    "Mills",
    "Monahan",
    "Morissette",
    "Mueller",
    "Muller",
    "Nader",
    "Nicolas",
    "Nolan",
    "O'connell",
    "O'conner",
    "O'hara",
    "O'keefe",
    "Olson",
    "O'reilly",
    "Parisian",
    "Parker",
    "Quigley",
    "Reilly",
    "Reynolds",
    "Rice",
    "Ritchie",
    "Rohan",
    "Rolfson",
    "Rowe",
    "Russel",
    "Rutherford",
    "Sanford",
    "Sauer",
    "Schmidt",
    "Schmitt",
    "Schneider",
    "Schroeder",
    "Schultz",
    "Shields",
    "Smitham",
    "Spencer",
    "Stanton",
    "Stark",
    "Stokes",
    "Swift",
    "Tillman",
    "Towne",
    "Tremblay",
    "Tromp",
    "Turcotte",
    "Turner",
    "Walsh",
    "Walter",
    "Ward",
    "Waters",
    "Weber",
    "Welch",
    "West",
    "Wilderman",
    "Wilkinson",
    "Williamson",
    "Windler",
    "Wolf"
];

},{}],"Cs+a":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const firstNames_1 = require("./firstNames");
const lastNames_1 = require("./lastNames");
exports.names = {
    firstName() {
        return util_1.randomItem(firstNames_1.firstNames);
    },
    lastName() {
        return util_1.randomItem(lastNames_1.lastNames);
    }
};

},{"../util":"+IjQ","./firstNames":"GIpK","./lastNames":"63kX"}],"6NJ8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
exports.numbers = {
    integer(min, max) {
        return util_1.randomIntBetween(min, max);
    }
};

},{"./util":"+IjQ"}],"6Y+3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var names_1 = require("./names");
exports.names = names_1.names;
var numbers_1 = require("./numbers");
exports.numbers = numbers_1.numbers;

},{"./names":"Cs+a","./numbers":"6NJ8"}],"45O1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var util_1 = require("../util");

var misc_utils_of_mine_random_data_1 = require("misc-utils-of-mine-random-data");

exports.MODEL_CONFIG = {
  peopleCount: 100,
  friendsCount: 20
};

function buildModel(config) {
  return {
    people: makePeople(config)
  };
}

exports.buildModel = buildModel;

function makePeople(config) {
  return util_1.array(config.peopleCount).map(function (i) {
    return {
      name: misc_utils_of_mine_random_data_1.names.firstName() + " " + misc_utils_of_mine_random_data_1.names.firstName() + " " + misc_utils_of_mine_random_data_1.names.lastName() + " " + misc_utils_of_mine_random_data_1.names.lastName(),
      age: misc_utils_of_mine_random_data_1.numbers.integer(0, 100),
      friends: []
    };
  }).map(function (p, i, a) {
    p.friends = util_1.array(misc_utils_of_mine_random_data_1.numbers.integer(Math.trunc(config.friendsCount / 2), config.friendsCount)).map(function (i) {
      return a[misc_utils_of_mine_random_data_1.numbers.integer(0, a.length - 1)];
    });
    return p;
  });
}
},{"../util":"/5mC","misc-utils-of-mine-random-data":"6Y+3"}],"IAey":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsx_alone_dom_1 = require("jsx-alone-dom");

var jsx_alone_dom_2 = require("jsx-alone-dom");

var App =
/** @class */
function (_super) {
  __extends(App, _super);

  function App() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  App.prototype.render = function () {
    return jsx_alone_dom_2.JSXAlone.createElement("div", null, jsx_alone_dom_2.JSXAlone.createElement("h1", null, "Lots of people to print"), jsx_alone_dom_2.JSXAlone.createElement("p", null, "People count: ", jsx_alone_dom_2.JSXAlone.createElement("input", {
      id: "peopleCount",
      value: this.props.peopleCount + '',
      type: "number"
    })), jsx_alone_dom_2.JSXAlone.createElement("p", null, "Friends count: ", jsx_alone_dom_2.JSXAlone.createElement("input", {
      id: "friendsCount",
      value: this.props.friendsCount + '',
      type: "number"
    })), jsx_alone_dom_2.JSXAlone.createElement("button", {
      onClick: function onClick(e) {
        var peopleCount = document.querySelector('#peopleCount').valueAsNumber;
        var friendsCount = document.querySelector('#friendsCount').valueAsNumber;
        window.renderAppLotsOfPeople({
          peopleCount: peopleCount,
          friendsCount: friendsCount
        });
      }
    }, "Render!"), jsx_alone_dom_2.JSXAlone.createElement("h4", null, "Timings"), jsx_alone_dom_2.JSXAlone.createElement("ul", null, jsx_alone_dom_2.JSXAlone.createElement("li", null, "onload: ", jsx_alone_dom_2.JSXAlone.createElement("strong", {
      id: "timings_onload"
    })), jsx_alone_dom_2.JSXAlone.createElement("li", null, "buildModel: ", jsx_alone_dom_2.JSXAlone.createElement("strong", {
      id: "timings_buildModel"
    })), jsx_alone_dom_2.JSXAlone.createElement("li", null, "JSXAlone.createElement: ", jsx_alone_dom_2.JSXAlone.createElement("strong", {
      id: "timings_JSXAloneCreateElement"
    })), jsx_alone_dom_2.JSXAlone.createElement("li", null, "JSXAlone.render: ", jsx_alone_dom_2.JSXAlone.createElement("strong", {
      id: "timings_JSXAloneRender"
    }))), jsx_alone_dom_2.JSXAlone.createElement(People, {
      people: this.props.people
    }));
  };

  return App;
}(jsx_alone_dom_1.ElementClass);

exports.App = App;

var EditButton = function EditButton(props) {
  return jsx_alone_dom_2.JSXAlone.createElement("button", {
    "data-name": props.name,
    onClick: function onClick(e) {
      alert(("\nNo context here that's why we need to do the following: \nName: \"" + e.currentTarget.getAttribute('data-name') + "\"\n").trim());
      debugger;
    }
  }, props.children);
};

var Person = function Person(props) {
  return jsx_alone_dom_2.JSXAlone.createElement("tr", {
    id: encodeURIComponent(props.name)
  }, jsx_alone_dom_2.JSXAlone.createElement("td", null, props.name), jsx_alone_dom_2.JSXAlone.createElement("td", null, props.age), jsx_alone_dom_2.JSXAlone.createElement("td", null, jsx_alone_dom_2.JSXAlone.createElement("ul", null, props.friends.map(function (f) {
    return jsx_alone_dom_2.JSXAlone.createElement("li", null, jsx_alone_dom_2.JSXAlone.createElement("a", {
      href: "#" + f.name
    }, f.name));
  }))), jsx_alone_dom_2.JSXAlone.createElement("td", null, jsx_alone_dom_2.JSXAlone.createElement(EditButton, {
    name: props.name
  }, "Edit")));
};

var People = function People(props) {
  return jsx_alone_dom_2.JSXAlone.createElement("table", {
    className: "person"
  }, jsx_alone_dom_2.JSXAlone.createElement("thead", null, jsx_alone_dom_2.JSXAlone.createElement("tr", null, jsx_alone_dom_2.JSXAlone.createElement("th", null, "Name"), jsx_alone_dom_2.JSXAlone.createElement("th", null, "Age"), jsx_alone_dom_2.JSXAlone.createElement("th", null, "Friends"), jsx_alone_dom_2.JSXAlone.createElement("th", null, "Actions"))), jsx_alone_dom_2.JSXAlone.createElement("tbody", null, props.people.map(function (p) {
    return jsx_alone_dom_2.JSXAlone.createElement(Person, __assign({}, p));
  })));
};
},{"jsx-alone-dom":"jxZo"}],"z8rF":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsx_alone_dom_1 = require("jsx-alone-dom");

var model_1 = require("./model");

var App_1 = require("./App");

var model_2 = require("./model");

function renderApp(renderer, config) {
  if (config === void 0) {
    config = model_2.MODEL_CONFIG;
  } // buildModel


  var buildModelT0 = Date.now();
  console.time('buildModel');
  var model = model_1.buildModel(config);
  var buildModelT = Date.now() - buildModelT0;
  console.timeEnd('buildModel'); // createElement - declaring the JSX element here will end up in code calling JSXAlone.createElement

  var JSXAloneCreateElementT0 = Date.now();
  console.time('JSXAlone.createElement');
  var app = jsx_alone_dom_1.JSXAlone.createElement("div", {
    id: "jsx-alone-sample-project-code"
  }, jsx_alone_dom_1.JSXAlone.createElement(App_1.App, __assign({}, model, config)), ";");
  var JSXAloneCreateElementT = Date.now() - JSXAloneCreateElementT0;
  console.timeEnd('JSXAlone.createElement');
  renderer(app, {
    buildModelT: buildModelT,
    JSXAloneCreateElementT: JSXAloneCreateElementT
  });
}

exports.renderApp = renderApp;
window.renderAppLotsOfPeople = renderApp;
},{"jsx-alone-dom":"jxZo","./model":"45O1","./App":"IAey"}],"wC2p":[function(require,module,exports) {
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var renderApp_1 = require("./lotsOfPeople/renderApp");

exports.lotsOfPeople = renderApp_1.renderApp;

__export(require("./util"));
},{"./lotsOfPeople/renderApp":"z8rF","./util":"/5mC"}],"XwTw":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./flat"));
__export(require("./array"));
__export(require("./prototypeFind"));

},{"./flat":"qBof","./array":"HvSf","./prototypeFind":"3n+A"}],"7sk5":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("../array");
__export(require("./changeText"));
__export(require("./getPreviousMatchingPos"));
__export(require("./quote"));
__export(require("./json"));
__export(require("./shorter"));
__export(require("./html"));
function repeat(n, s) {
    return array_1.array(n, s).join('');
}
exports.repeat = repeat;
function indent(i = 1, tabSize = 2) {
    return repeat(i * tabSize, ' ');
}
exports.indent = indent;
function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}
exports.getPosition = getPosition;
function removeWhites(s, replaceWith = ' ') {
    return s.replace(/\s+/gm, replaceWith).trim();
}
exports.removeWhites = removeWhites;

},{"../array":"XwTw","./changeText":"qKyn","./getPreviousMatchingPos":"5uki","./quote":"yp4B","./json":"eu/a","./shorter":"49Nj","./html":"ifBX"}],"PJyN":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./formatDate"));
__export(require("./printMs"));
__export(require("./time"));

},{"./formatDate":"TPjs","./printMs":"ltuP","./time":"4exK"}],"dgX+":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./string"));
__export(require("./array"));
__export(require("./misc"));
__export(require("./time"));

},{"./string":"7sk5","./array":"XwTw","./misc":"VEKo","./time":"PJyN"}],"vmAk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var misc_utils_of_mine_generic_1 = require("misc-utils-of-mine-generic");

function isJSXAloneComponent(c) {
  return c.prototype && c.prototype.render;
}

exports.isJSXAloneComponent = isJSXAloneComponent;

function isNode(n) {
  return isTextNodeLike(n) || isElementLike(n);
}

exports.isNode = isNode;

function isElementLike(n) {
  return n && n.setAttribute;
}

exports.isElementLike = isElementLike;

function isTextNodeLike(n) {
  return n && n.content && !isElementLike(n);
}

exports.isTextNodeLike = isTextNodeLike;

var AbstractTextNodeLike =
/** @class */
function () {
  function AbstractTextNodeLike(content) {
    this.content = content;
  }

  return AbstractTextNodeLike;
}();

exports.AbstractTextNodeLike = AbstractTextNodeLike;

var AbstractElementLike =
/** @class */
function () {
  function AbstractElementLike(tag) {
    this.tag = tag;
    this.attrs = {};
    this.children = [];
  }

  AbstractElementLike.prototype.setAttribute = function (name, value) {
    this.attrs[name] = value;
  };

  AbstractElementLike.prototype.appendChild = function (c) {
    this.children.push(c);

    if (isElementLike(c)) {
      c.parentElement = this;
    }
  };

  AbstractElementLike.prototype.findDescendant = function (p) {
    var found;
    this.children.some(function (c) {
      if (isElementLike(c)) {
        if (p(c)) {
          found = c;
        } else {
          found = c.findDescendant(p);
        }
      }

      return !!found;
    });
    return found;
  };

  AbstractElementLike.prototype.findAscendant = function (p) {
    if (this.parentElement) {
      if (p(this.parentElement)) {
        return this.parentElement;
      }

      return this.parentElement.findAscendant(p);
    }
  };

  AbstractElementLike.prototype.getAscendants = function () {
    return this.parentElement ? this.parentElement.getAscendants().concat([this.parentElement]) : [];
  };

  AbstractElementLike.prototype.getRootAscendant = function () {
    var r = this.parentElement ? this.findAscendant(function (n) {
      return isElementLike(n) && !n.parentElement;
    }) : this;
    return misc_utils_of_mine_generic_1.checkThrow(r, 'No root ascendant found in element like tree!');
  };

  AbstractElementLike.prototype.getSiblings = function () {
    var _this = this;

    if (this.parentElement) {
      return this.parentElement.children.filter(function (c) {
        return c !== _this;
      });
    }

    return [];
  };

  AbstractElementLike.prototype.findSibling = function (p) {
    return this.getSiblings().find(p);
  };

  AbstractElementLike.prototype.find = function (p) {
    // TODO: this should start searching in the near children, sibling and parents, and only after that look on far nodes
    return this.getRootAscendant().findDescendant(p);
  };

  return AbstractElementLike;
}();

exports.AbstractElementLike = AbstractElementLike;
},{"misc-utils-of-mine-generic":"dgX+"}],"0Bvz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var elementImpl_1 = require("./elementImpl");
/**
 * A Class able to render() JSX. Similar to React.Component but only supporting properties, without state, context, ref, did/will methods, etc.
 */


var AbstractElementClass =
/** @class */
function () {
  function AbstractElementClass(props) {
    this.props = props;
  }

  AbstractElementClass.prototype.childrenAsArray = function () {
    return Array.isArray(this.props.children) ? this.props.children : [this.props.children];
  };

  AbstractElementClass.prototype.childrenElementsAsArray = function () {
    return this.childrenAsArray().filter(function (c) {
      return elementImpl_1.isElementLike(c);
    });
  };

  AbstractElementClass.prototype.firstChildElement = function () {
    return this.childrenAsArray().find(function (e) {
      return true;
    });
  };

  return AbstractElementClass;
}();

exports.AbstractElementClass = AbstractElementClass;
},{"./elementImpl":"vmAk"}],"fbNL":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var elementImpl_1 = require("./elementImpl");

var throwOnUnrecognized = false;

function debug(err) {
  if (throwOnUnrecognized) {
    throw err;
  } else {
    console.error(err);
  }
}

exports.debug = debug;

function createCreateElement(impl, textNodeImpl) {
  return function createElement(tag, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }

    var children = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      children[_i - 2] = arguments[_i];
    }

    var element;

    if (typeof tag === 'string') {
      element = new impl(tag);
    } else {
      if (elementImpl_1.isJSXAloneComponent(tag)) {
        element = new tag(__assign({}, attrs, {
          children: children
        })).render();
      } else {
        element = tag(__assign({}, attrs, {
          children: children
        }));
      }

      attrs = {};
    }

    for (var name_1 in attrs) {
      if (name_1 && attrs.hasOwnProperty(name_1)) {
        var value = attrs[name_1];

        if (typeof value === 'boolean') {
          if (value === true) {
            element.setAttribute(name_1, name_1);
          }
        } else if (typeof value === 'function') {
          var code = "_this = __this__ = this; (" + value.toString() + ").apply(_this, arguments)";
          var escaped = code.replace(/\"/gim, '&quot;');
          element.setAttribute(name_1, escaped);
        } else if (value !== false && value != null) {
          if (name_1 === 'className') {
            if (typeof value === 'string') {
              element.setAttribute('class', value);
            } else if (Array.isArray(value) && value.length && typeof value[0] === 'string') {
              element.setAttribute('class', value.join(' '));
            } else {
              debug("unrecognized className value " + _typeof(value) + " " + value);
            }
          } else {
            element.setAttribute(name_1, value.toString());
          }
        } else if (_typeof(value) === 'object') {
          if (name_1 === 'style') {
            element.setAttribute('style', "" + Object.keys(value).map(function (p) {
              return p + ": " + value[p];
            }).join('; '));
          } else if (name_1 === 'dangerouslySetInnerHTML' && value && typeof value.__html === 'string') {
            element.dangerouslySetInnerHTML(value.__html);
          } else {
            debug("unrecognized object attribute \"" + name_1 + "\" - the only object attribute supported is \"style\"");
          }
        } else {
          debug("unrecognized attribute \"" + name_1 + "\" with type " + _typeof(value));
        }
      }
    }

    if (typeof tag === 'string') {
      // don't render children for function or classes since they are responsible of render their own children
      children.filter(function (c) {
        return c;
      }).forEach(function (child) {
        if (elementImpl_1.isNode(child)) {
          element.appendChild(child);
        } else if (Array.isArray(child)) {
          child.forEach(function (c) {
            if (typeof c === 'string') {
              element.appendChild(new textNodeImpl(c));
            } else if (elementImpl_1.isNode(c)) {
              element.appendChild(c);
            } else {
              debug("Child is not a node or string: " + c + " , tag: " + tag);
            }
          });
        } else {
          element.appendChild(new textNodeImpl(child));
        }
      });
    }

    return element;
  };
}

exports.createCreateElement = createCreateElement;
},{"./elementImpl":"vmAk"}],"BB47":[function(require,module,exports) {
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(require("./elementImpl"));

__export(require("./elementClass"));

__export(require("./createElement"));

var elementImpl_1 = require("./elementImpl");

exports.AbstractTextNodeLike = elementImpl_1.AbstractTextNodeLike;
exports.AbstractElementLike = elementImpl_1.AbstractElementLike;
},{"./elementImpl":"vmAk","./elementClass":"0Bvz","./createElement":"fbNL"}],"gNvY":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_alone_core_1 = require("jsx-alone-core");
var ElementLikeImpl = /** @class */ (function (_super) {
    __extends(ElementLikeImpl, _super);
    function ElementLikeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // private _element: HTMLElement | undefined
    ElementLikeImpl.prototype.render = function (config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        // const el = this._getElement()
        var el = document.createElement(this.tag);
        Object.keys(this.attrs).forEach(function (attribute) {
            el.setAttribute(attribute, _this.attrs[attribute]);
        });
        if (this._innerHtml) {
            el.innerHTML = this._innerHtml;
        }
        this.children.forEach(function (c) {
            c.render(__assign({}, config, { parent: el }));
        });
        if (config.parent) {
            config.parent.appendChild(el);
        }
        return el;
    };
    // private _getElement(): HTMLElement {
    //   if (!this._element) {
    //     this._element = document.createElement(this.tag)
    //   }
    //   return this._element
    // }
    ElementLikeImpl.prototype.dangerouslySetInnerHTML = function (s) {
        this._innerHtml = s;
    };
    return ElementLikeImpl;
}(jsx_alone_core_1.AbstractElementLike));
exports.ElementLikeImpl = ElementLikeImpl;
var TextNodeLikeImpl = /** @class */ (function (_super) {
    __extends(TextNodeLikeImpl, _super);
    function TextNodeLikeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // private _node: Text | undefined
    TextNodeLikeImpl.prototype.render = function (config) {
        if (config === void 0) { config = {}; }
        // const n = this._getNode()
        var text = document.createTextNode(this.content);
        if (config.parent) {
            config.parent.appendChild(text);
        }
        return text;
    };
    return TextNodeLikeImpl;
}(jsx_alone_core_1.AbstractTextNodeLike));
exports.TextNodeLikeImpl = TextNodeLikeImpl;
var ElementClass = /** @class */ (function (_super) {
    __extends(ElementClass, _super);
    function ElementClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ElementClass;
}(jsx_alone_core_1.AbstractElementClass));
exports.ElementClass = ElementClass;

},{"jsx-alone-core":"BB47"}],"S0OW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_alone_core_1 = require("jsx-alone-core");
var elementImpl_1 = require("./elementImpl");
document.body.insertAdjacentHTML;
var Module = {
    createElement: jsx_alone_core_1.createCreateElement(elementImpl_1.ElementLikeImpl, elementImpl_1.TextNodeLikeImpl),
    render: function (el, config) {
        return el.render(config);
    }
};
exports.JSXAlone = Module;
// //@ts-ignore
// JSXAlone = Module // creates a global variable needed so emitted .js calls work. See tsconfig.json `"jsxFactory": "JSXAlone.createElement",`

},{"jsx-alone-core":"BB47","./elementImpl":"gNvY"}],"F7e8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
// TODO: like React.Fragment
exports.Fragment = function (props) { return _1.JSXAlone.createElement("span", null, props.children); };
function Js(props) {
    var r = props.children();
    console.log(r);
    return r ? _1.JSXAlone.createElement(exports.Fragment, null, r) : null;
}
exports.Js = Js;
/** if as statement. children need to be in a function and the function accepts a parameter which value is given condition `c` but casted to NotFalsy<C> so there's no need of type guards in the body. Example:
```
<If c={type}>{type =>
  <select multiple={true}>{names[type].map(c =>
      <option value={c.id}>{c.label}</option>)}
  </select>
</If>
```

No error thrown on second line because parameter type is not falsy but keep the original type (excluding falsy values)

Other example:

```
export class ErrorComponent extends React.Component<ErrorOptions> {
  public render() {
    return <div>
      <If c={this.props.error}>{error =>
        <React.Fragment>
          <h2>Error</h2>
          <If c={typeof error === 'string'}>{e =>
            <h3>{e}</h3>}
          </If>
          <If c={typeof error === 'object'}>{e =>
            <React.Fragment>
              <h5>{error!.name}</h5>
              <p>{error!.message}</p>
              <If c={error.stack}>{e =>
                <ul>
                  {e.split('\n').map(e =>
                    <li>{e}</li>)}
                </ul>}
              </If>
            </React.Fragment>}
          </If>
          <If c={this.props.responseText}>{responseText =>
            <iframe css={{ border: 0, width: '100%', height: '400px' }} srcDoc={responseText}>
            </iframe>}
          </If>
        </React.Fragment>}
      </If>
    </div>
  }
}

```
*/
function If(props) {
    var c = props.c, p = props.p;
    if (isNotFalsy(c))
        return props.children.apply(null, (p ? [p] : []).concat([c]));
    else {
        return null;
    }
}
exports.If = If;
function isNotFalsy(a) { return !!a; }

},{".":"MNUJ"}],"MNUJ":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./createElement"));
var elementImpl_1 = require("./elementImpl");
exports.ElementClass = elementImpl_1.ElementClass;
__export(require("./misc"));

},{"./createElement":"S0OW","./elementImpl":"gNvY","./misc":"F7e8"}],"wdqJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsx_alone_sample_project_code_1 = require("jsx-alone-sample-project-code"); // import { LotsOfPeopleRendererConfig } from 'jsx-alone-sample-project-code/dist/src/lotsOfPeople/types';


var jsx_alone_dom_1 = require("jsx-alone-dom");

var renderer = function renderer(app, config) {
  // measures onload
  var onloadT0 = Date.now();
  console.time('onload');

  window.onload = function () {
    console.timeEnd('onload');
    var onloadT = Date.now() - onloadT0;
    document.getElementById('timings_onload').innerHTML = jsx_alone_sample_project_code_1.printMs(onloadT);
    document.getElementById('timings_buildModel').innerHTML = jsx_alone_sample_project_code_1.printMs(config.buildModelT);
    document.getElementById('timings_JSXAloneCreateElement').innerHTML = jsx_alone_sample_project_code_1.printMs(config.JSXAloneCreateElementT);
    document.getElementById('timings_JSXAloneRender').innerHTML = jsx_alone_sample_project_code_1.printMs(JSXAloneRenderT);
  }; // measures render


  console.time('JSXAlone.render()');
  var root = document.getElementById('jsx-alone-sample-project-code');

  if (root) {
    root.remove();
  }

  var el = jsx_alone_dom_1.JSXAlone.render(app);
  console.timeEnd('JSXAlone.render()'); // measures appendChild TODO: timing

  var JSXAloneRenderT0 = Date.now();
  var JSXAloneRenderT = Date.now() - JSXAloneRenderT0;
  document.body.appendChild(el);
  document.getElementById('timings_onload').innerHTML = 'N/E';
  document.getElementById('timings_buildModel').innerHTML = jsx_alone_sample_project_code_1.printMs(config.buildModelT);
  document.getElementById('timings_JSXAloneCreateElement').innerHTML = jsx_alone_sample_project_code_1.printMs(config.JSXAloneCreateElementT);
  document.getElementById('timings_JSXAloneRender').innerHTML = jsx_alone_sample_project_code_1.printMs(JSXAloneRenderT);
  var app = jsx_alone_dom_1.JSXAlone.createElement("div", null, new Date().toDateString());
  var e = jsx_alone_dom_1.JSXAlone.render(app);
  console.log(e);
  return JSXAloneRenderT;
};

jsx_alone_sample_project_code_1.lotsOfPeople(renderer);
},{"jsx-alone-sample-project-code":"wC2p","jsx-alone-dom":"MNUJ"}]},{},["wdqJ"], null)
//# sourceMappingURL=main.186cb047.map