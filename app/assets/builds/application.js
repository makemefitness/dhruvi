(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global.document ? factory(global, true) : function(w2) {
            if (!w2.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w2);
          };
        } else {
          factory(global);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i2, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i2 in preservedScriptAttributes) {
              val = node[i2] || node.getAttribute && node.getAttribute(i2);
              if (val) {
                script.setAttribute(i2, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType2(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery2 = function(selector, context) {
          return new jQuery2.fn.init(selector, context);
        };
        jQuery2.fn = jQuery2.prototype = {
          // The current version of jQuery being used
          jquery: version,
          constructor: jQuery2,
          // The default length of a jQuery object is 0
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          // Get the Nth element in the matched element set OR
          // Get the whole matched element set as a clean array
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          // Take an array of elements and push it onto the stack
          // (returning the new matched element set)
          pushStack: function(elems) {
            var ret = jQuery2.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          // Execute a callback for every element in the matched set.
          each: function(callback) {
            return jQuery2.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery2.map(this, function(elem, i2) {
              return callback.call(elem, i2, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
              return (i2 + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
              return i2 % 2;
            }));
          },
          eq: function(i2) {
            var len = this.length, j2 = +i2 + (i2 < 0 ? len : 0);
            return this.pushStack(j2 >= 0 && j2 < len ? [this[j2]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          // For internal use only.
          // Behaves like an Array's method, not like a jQuery method.
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery2.extend = jQuery2.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i2] || {};
            i2++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i2 === length) {
            target = this;
            i2--;
          }
          for (; i2 < length; i2++) {
            if ((options = arguments[i2]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery2.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery2.extend({
          // Unique for each copy of jQuery on the page
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          // Assume jQuery is ready without the ready module
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          // Evaluates a script in a provided context; falls back to the global one
          // if not specified.
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i2 = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i2 < length; i2++) {
                if (callback.call(obj[i2], i2, obj[i2]) === false) {
                  break;
                }
              }
            } else {
              for (i2 in obj) {
                if (callback.call(obj[i2], i2, obj[i2]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          // Retrieve the text value of an array of DOM nodes
          text: function(elem) {
            var node, ret = "", i2 = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i2++]) {
                ret += jQuery2.text(node);
              }
            }
            if (nodeType === 1 || nodeType === 11) {
              return elem.textContent;
            }
            if (nodeType === 9) {
              return elem.documentElement.textContent;
            }
            if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          },
          // results is for internal usage only
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery2.merge(
                  ret,
                  typeof arr2 === "string" ? [arr2] : arr2
                );
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i2) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i2);
          },
          isXMLDoc: function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
          },
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          merge: function(first, second) {
            var len = +second.length, j2 = 0, i2 = first.length;
            for (; j2 < len; j2++) {
              first[i2++] = second[j2];
            }
            first.length = i2;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i2 = 0, length = elems.length, callbackExpect = !invert;
            for (; i2 < length; i2++) {
              callbackInverse = !callback(elems[i2], i2);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i2]);
              }
            }
            return matches;
          },
          // arg is for internal usage only
          map: function(elems, callback, arg) {
            var length, value, i2 = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i2 < length; i2++) {
                value = callback(elems[i2], i2, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i2 in elems) {
                value = callback(elems[i2], i2, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          // A global GUID counter for objects
          guid: 1,
          // jQuery.support is not used in Core but other projects attach their
          // properties to it so it needs to exist.
          support
        });
        if (typeof Symbol === "function") {
          jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery2.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i2, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType2(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var pop = arr.pop;
        var sort = arr.sort;
        var splice = arr.splice;
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        var rtrimCSS = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        );
        jQuery2.contains = function(a2, b2) {
          var bup = b2 && b2.parentNode;
          return a2 === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
          // IE doesn't have `contains` on SVG.
          (a2.contains ? a2.contains(bup) : a2.compareDocumentPosition && a2.compareDocumentPosition(bup) & 16));
        };
        var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function fcssescape(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        }
        jQuery2.escapeSelector = function(sel) {
          return (sel + "").replace(rcssescape, fcssescape);
        };
        var preferredDoc = document2, pushNative = push;
        (function() {
          var i2, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery2.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a2, b2) {
            if (a2 === b2) {
              hasDuplicate = true;
            }
            return 0;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
          "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            if (nonHex) {
              return nonHex;
            }
            return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(
            function(elem) {
              return elem.disabled === true && nodeName(elem, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
          function safeActiveElement() {
            try {
              return document3.activeElement;
            } catch (err) {
            }
          }
          try {
            push2.apply(
              arr = slice.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr[preferredDoc.childNodes.length].nodeType;
          } catch (e2) {
            push2 = {
              apply: function(target, els) {
                pushNative.apply(target, slice.call(els));
              },
              call: function(target) {
                pushNative.apply(target, slice.call(arguments, 1));
              }
            };
          }
          function find(selector, context, results, seed) {
            var m2, i3, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m2 = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m2)) {
                        if (elem.id === m2) {
                          push2.call(results, elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m2)) && find.contains(context, elem) && elem.id === m2) {
                        push2.call(results, elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m2 = match[3]) && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m2));
                    return results;
                  }
                }
                if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext != context || !support.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = jQuery2.escapeSelector(nid);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i3 = groups.length;
                    while (i3--) {
                      groups[i3] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i3]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    );
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn3) {
            fn3[expando] = true;
            return fn3;
          }
          function assert(fn3) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn3(el);
            } catch (e2) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function createInputPseudo(type) {
            return function(elem) {
              return nodeName(elem, "input") && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                  elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn3) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j2, matchIndexes = fn3([], seed.length, argument), i3 = matchIndexes.length;
                while (i3--) {
                  if (seed[j2 = matchIndexes[i3]]) {
                    seed[j2] = !(matches2[j2] = seed[j2]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          function setDocument(node) {
            var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            documentElement2 = document3.documentElement;
            documentIsHTML = !jQuery2.isXMLDoc(document3);
            matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
            if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              subWindow.addEventListener("unload", unloadHandler);
            }
            support.getById = assert(function(el) {
              documentElement2.appendChild(el).id = jQuery2.expando;
              return !document3.getElementsByName || !document3.getElementsByName(jQuery2.expando).length;
            });
            support.disconnectedMatch = assert(function(el) {
              return matches.call(el, "*");
            });
            support.scope = assert(function() {
              return document3.querySelectorAll(":scope");
            });
            support.cssHas = assert(function() {
              try {
                document3.querySelector(":has(*,:jqfake)");
                return false;
              } catch (e2) {
                return true;
              }
            });
            if (support.getById) {
              Expr.filter.ID = function(id2) {
                var attrId = id2.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find.ID = function(id2, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id2);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter.ID = function(id2) {
                var attrId = id2.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find.ID = function(id2, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i3, elems, elem = context.getElementById(id2);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id2) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id2);
                    i3 = 0;
                    while (elem = elems[i3++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id2) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find.TAG = function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else {
                return context.querySelectorAll(tag);
              }
            };
            Expr.find.CLASS = function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyQSA = [];
            assert(function(el) {
              var input;
              documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
              if (!el.querySelectorAll("[selected]").length) {
                rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
              }
              if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                rbuggyQSA.push("~=");
              }
              if (!el.querySelectorAll("a#" + expando + "+*").length) {
                rbuggyQSA.push(".#.+[+~]");
              }
              if (!el.querySelectorAll(":checked").length) {
                rbuggyQSA.push(":checked");
              }
              input = document3.createElement("input");
              input.setAttribute("type", "hidden");
              el.appendChild(input).setAttribute("name", "D");
              documentElement2.appendChild(el).disabled = true;
              if (el.querySelectorAll(":disabled").length !== 2) {
                rbuggyQSA.push(":enabled", ":disabled");
              }
              input = document3.createElement("input");
              input.setAttribute("name", "");
              el.appendChild(input);
              if (!el.querySelectorAll("[name='']").length) {
                rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
              }
            });
            if (!support.cssHas) {
              rbuggyQSA.push(":has");
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            sortOrder = function(a2, b2) {
              if (a2 === b2) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a2.compareDocumentPosition - !b2.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a2.ownerDocument || a2) == (b2.ownerDocument || b2) ? a2.compareDocumentPosition(b2) : (
                // Otherwise we know they are disconnected
                1
              );
              if (compare & 1 || !support.sortDetached && b2.compareDocumentPosition(a2) === compare) {
                if (a2 === document3 || a2.ownerDocument == preferredDoc && find.contains(preferredDoc, a2)) {
                  return -1;
                }
                if (b2 === document3 || b2.ownerDocument == preferredDoc && find.contains(preferredDoc, b2)) {
                  return 1;
                }
                return sortInput ? indexOf.call(sortInput, a2) - indexOf.call(sortInput, b2) : 0;
              }
              return compare & 4 ? -1 : 1;
            };
            return document3;
          }
          find.matches = function(expr, elements) {
            return find(expr, null, null, elements);
          };
          find.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e2) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return find(expr, document3, null, [elem]).length > 0;
          };
          find.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return jQuery2.contains(context, elem);
          };
          find.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn3 = Expr.attrHandle[name.toLowerCase()], val = fn3 && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn3(elem, name, !documentIsHTML) : void 0;
            if (val !== void 0) {
              return val;
            }
            return elem.getAttribute(name);
          };
          find.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          jQuery2.uniqueSort = function(results) {
            var elem, duplicates = [], j2 = 0, i3 = 0;
            hasDuplicate = !support.sortStable;
            sortInput = !support.sortStable && slice.call(results, 0);
            sort.call(results, sortOrder);
            if (hasDuplicate) {
              while (elem = results[i3++]) {
                if (elem === results[i3]) {
                  j2 = duplicates.push(i3);
                }
              }
              while (j2--) {
                splice.call(results, duplicates[j2], 1);
              }
            }
            sortInput = null;
            return results;
          };
          jQuery2.fn.uniqueSort = function() {
            return this.pushStack(jQuery2.uniqueSort(slice.apply(this)));
          };
          Expr = jQuery2.expr = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              CHILD: function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    find.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  find.error(match[0]);
                }
                return match;
              },
              PSEUDO: function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr.CHILD.test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              TAG: function(nodeNameSelector) {
                var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return nodeName(elem, expectedNodeName);
                };
              },
              CLASS: function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(
                    typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                  );
                });
              },
              ATTR: function(name, operator, check) {
                return function(elem) {
                  var result = find.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  if (operator === "=") {
                    return result === check;
                  }
                  if (operator === "!=") {
                    return result !== check;
                  }
                  if (operator === "^=") {
                    return check && result.indexOf(check) === 0;
                  }
                  if (operator === "*=") {
                    return check && result.indexOf(check) > -1;
                  }
                  if (operator === "$=") {
                    return check && result.slice(-check.length) === check;
                  }
                  if (operator === "~=") {
                    return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                  }
                  if (operator === "|=") {
                    return result === check || result.slice(0, check.length + 1) === check + "-";
                  }
                  return false;
                };
              },
              CHILD: function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? (
                  // Shortcut for :nth-*(n)
                  function(elem) {
                    return !!elem.parentNode;
                  }
                ) : function(elem, _context, xml) {
                  var cache, outerCache, node, nodeIndex, start3, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start3 = dir2 = type === "only" && !start3 && "nextSibling";
                      }
                      return true;
                    }
                    start3 = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      outerCache = parent[expando] || (parent[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                      (diff = nodeIndex = 0) || start3.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          outerCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        cache = outerCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start3.pop()) {
                          if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              outerCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              PSEUDO: function(pseudo, argument) {
                var args, fn3 = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                if (fn3[expando]) {
                  return fn3(argument);
                }
                if (fn3.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn3(seed, argument), i3 = matched.length;
                    while (i3--) {
                      idx = indexOf.call(seed, matched[i3]);
                      seed[idx] = !(matches2[idx] = matched[i3]);
                    }
                  }) : function(elem) {
                    return fn3(elem, 0, args);
                  };
                }
                return fn3;
              }
            },
            pseudos: {
              // Potentially complex pseudos
              not: markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i3 = seed.length;
                  while (i3--) {
                    if (elem = unmatched[i3]) {
                      seed[i3] = !(matches2[i3] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              has: markFunction(function(selector) {
                return function(elem) {
                  return find(selector, elem).length > 0;
                };
              }),
              contains: markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || jQuery2.text(elem)).indexOf(text) > -1;
                };
              }),
              // "Whether an element is represented by a :lang() selector
              // is based solely on the element's language value
              // being equal to the identifier C,
              // or beginning with the identifier C immediately followed by "-".
              // The matching of C against the element's language value is performed case-insensitively.
              // The identifier C does not have to be a valid language name."
              // https://www.w3.org/TR/selectors/#lang-pseudo
              lang: markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  find.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              // Miscellaneous
              target: function(elem) {
                var hash3 = window2.location && window2.location.hash;
                return hash3 && hash3.slice(1) === elem.id;
              },
              root: function(elem) {
                return elem === documentElement2;
              },
              focus: function(elem) {
                return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              // Boolean properties
              enabled: createDisabledPseudo(false),
              disabled: createDisabledPseudo(true),
              checked: function(elem) {
                return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
              },
              selected: function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              // Contents
              empty: function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              parent: function(elem) {
                return !Expr.pseudos.empty(elem);
              },
              // Element/input types
              header: function(elem) {
                return rheader.test(elem.nodeName);
              },
              input: function(elem) {
                return rinputs.test(elem.nodeName);
              },
              button: function(elem) {
                return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
              },
              text: function(elem) {
                var attr;
                return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
                // New HTML5 attribute values (e.g., "search") appear
                // with elem.type === "text"
                ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              // Position-in-collection
              first: createPositionalPseudo(function() {
                return [0];
              }),
              last: createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              even: createPositionalPseudo(function(matchIndexes, length) {
                var i3 = 0;
                for (; i3 < length; i3 += 2) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              odd: createPositionalPseudo(function(matchIndexes, length) {
                var i3 = 1;
                for (; i3 < length; i3 += 2) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i3;
                if (argument < 0) {
                  i3 = argument + length;
                } else if (argument > length) {
                  i3 = length;
                } else {
                  i3 = argument;
                }
                for (; --i3 >= 0; ) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                var i3 = argument < 0 ? argument + length : argument;
                for (; ++i3 < length; ) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos.nth = Expr.pseudos.eq;
          for (i2 in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i2] = createInputPseudo(i2);
          }
          for (i2 in { submit: true, reset: true }) {
            Expr.pseudos[i2] = createButtonPseudo(i2);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rleadingCombinator.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match[0].replace(rtrimCSS, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            if (parseOnly) {
              return soFar.length;
            }
            return soFar ? find.error(selector) : (
              // Cache the tokens
              tokenCache(selector, groups).slice(0)
            );
          }
          function toSelector(tokens) {
            var i3 = 0, len = tokens.length, selector = "";
            for (; i3 < len; i3++) {
              selector += tokens[i3].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? (
              // Check against closest ancestor/preceding element
              function(elem, context, xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    return matcher(elem, context, xml);
                  }
                }
                return false;
              }
            ) : (
              // Check against all ancestor/preceding elements
              function(elem, context, xml) {
                var oldCache, outerCache, newCache = [dirruns, doneName];
                if (xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      if (matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                } else {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      if (skip && nodeName(elem, skip)) {
                        elem = elem[dir2] || elem;
                      } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                        return newCache[2] = oldCache[2];
                      } else {
                        outerCache[key] = newCache;
                        if (newCache[2] = matcher(elem, context, xml)) {
                          return true;
                        }
                      }
                    }
                  }
                }
                return false;
              }
            );
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i3 = matchers.length;
              while (i3--) {
                if (!matchers[i3](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i3 = 0, len = contexts.length;
            for (; i3 < len; i3++) {
              find(selector, contexts[i3], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i3 = 0, len = unmatched.length, mapped = map != null;
            for (; i3 < len; i3++) {
              if (elem = unmatched[i3]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i3);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i3, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector || "*",
                context.nodeType ? [context] : context,
                []
              ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
              if (matcher) {
                matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                  // ...intermediate processing is necessary
                  []
                ) : (
                  // ...otherwise use results directly
                  results
                );
                matcher(matcherIn, matcherOut, context, xml);
              } else {
                matcherOut = matcherIn;
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i3 = temp.length;
                while (i3--) {
                  if (elem = temp[i3]) {
                    matcherOut[postMap[i3]] = !(matcherIn[postMap[i3]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i3 = matcherOut.length;
                    while (i3--) {
                      if (elem = matcherOut[i3]) {
                        temp.push(matcherIn[i3] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i3 = matcherOut.length;
                  while (i3--) {
                    if ((elem = matcherOut[i3]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i3]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j2, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i3 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i3 < len; i3++) {
              if (matcher = Expr.relative[tokens[i3].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i3].type].apply(null, tokens[i3].matches);
                if (matcher[expando]) {
                  j2 = ++i3;
                  for (; j2 < len; j2++) {
                    if (Expr.relative[tokens[j2].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i3 > 1 && elementMatcher(matchers),
                    i3 > 1 && toSelector(
                      // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                      tokens.slice(0, i3 - 1).concat({ value: tokens[i3 - 2].type === " " ? "*" : "" })
                    ).replace(rtrimCSS, "$1"),
                    matcher,
                    i3 < j2 && matcherFromTokens(tokens.slice(i3, j2)),
                    j2 < len && matcherFromTokens(tokens = tokens.slice(j2)),
                    j2 < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j2, matcher, matchedCount = 0, i3 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i3 !== len && (elem = elems[i3]) != null; i3++) {
                if (byElement && elem) {
                  j2 = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j2++]) {
                    if (matcher(elem, context || document3, xml)) {
                      push2.call(results, elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i3;
              if (bySet && i3 !== matchedCount) {
                j2 = 0;
                while (matcher = setMatchers[j2++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i3--) {
                      if (!(unmatched[i3] || setMatched[i3])) {
                        setMatched[i3] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  jQuery2.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          function compile(selector, match) {
            var i3, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i3 = match.length;
              while (i3--) {
                cached = matcherFromTokens(match[i3]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              );
              cached.selector = selector;
            }
            return cached;
          }
          function select(selector, context, results, seed) {
            var i3, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find.ID(
                  token.matches[0].replace(runescape, funescape),
                  context
                ) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i3 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
              while (i3--) {
                token = tokens[i3];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find2 = Expr.find[type]) {
                  if (seed = find2(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  )) {
                    tokens.splice(i3, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          }
          support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          setDocument();
          support.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          jQuery2.find = find;
          jQuery2.expr[":"] = jQuery2.expr.pseudos;
          jQuery2.unique = jQuery2.uniqueSort;
          find.compile = compile;
          find.select = select;
          find.setDocument = setDocument;
          find.tokenize = tokenize;
          find.escape = jQuery2.escapeSelector;
          find.getText = jQuery2.text;
          find.isXML = jQuery2.isXMLDoc;
          find.selectors = jQuery2.expr;
          find.support = jQuery2.support;
          find.uniqueSort = jQuery2.uniqueSort;
        })();
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery2(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n2, elem) {
          var matched = [];
          for (; n2; n2 = n2.nextSibling) {
            if (n2.nodeType === 1 && n2 !== elem) {
              matched.push(n2);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery2.expr.match.needsContext;
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery2.grep(elements, function(elem, i2) {
              return !!qualifier.call(elem, i2, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery2.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery2.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery2.filter(qualifier, elements, not);
        }
        jQuery2.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery2.fn.extend({
          find: function(selector) {
            var i2, ret, len = this.length, self = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery2(selector).filter(function() {
                for (i2 = 0; i2 < len; i2++) {
                  if (jQuery2.contains(self[i2], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i2 = 0; i2 < len; i2++) {
              jQuery2.find(selector, self[i2], ret);
            }
            return len > 1 ? jQuery2.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(
              this,
              // If this is a positional/relative selector, check membership in the returned set
              // so $("p:first").is("p:last") won't return true for a doc with two "p".
              typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery2.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery2 ? context[0] : context;
                jQuery2.merge(this, jQuery2.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  true
                ));
                if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : (
              // Execute immediately if ready is not present
              selector(jQuery2)
            );
          }
          return jQuery2.makeArray(selector, this);
        };
        init.prototype = jQuery2.fn;
        rootjQuery = jQuery2(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery2.fn.extend({
          has: function(target) {
            var targets = jQuery2(target, this), l2 = targets.length;
            return this.filter(function() {
              var i2 = 0;
              for (; i2 < l2; i2++) {
                if (jQuery2.contains(this, targets[i2])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i2 = 0, l2 = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i2 < l2; i2++) {
                for (cur = this[i2]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                    // Don't pass non-elements to jQuery#find
                    cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors)
                  ))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
          },
          // Determine the position of an element within the set
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery2(elem), this[0]);
            }
            return indexOf.call(
              this,
              // If it receives a jQuery object, the first element is used
              elem.jquery ? elem[0] : elem
            );
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery2.uniqueSort(
                jQuery2.merge(this.get(), jQuery2(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery2.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i2, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i2, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i2, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery2.merge([], elem.childNodes);
          }
        }, function(name, fn3) {
          jQuery2.fn[name] = function(until, selector) {
            var matched = jQuery2.map(this, fn3, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery2.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery2.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery2.each(options.match(rnothtmlwhite) || [], function(_2, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery2.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery2.each(args, function(_2, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType2(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            // Remove a callback from the list
            remove: function() {
              jQuery2.each(arguments, function(_2, arg) {
                var index;
                while ((index = jQuery2.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn3) {
              return fn3 ? jQuery2.inArray(fn3, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
              self.fireWith(this, arguments);
              return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
              return !!fired;
            }
          };
          return self;
        };
        function Identity(v2) {
          return v2;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery2.extend({
          Deferred: function(func) {
            var tuples = [
              // action, add listener, callbacks,
              // ... .then handlers, argument index, [final state]
              [
                "notify",
                "progress",
                jQuery2.Callbacks("memory"),
                jQuery2.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery2.Callbacks("once memory"),
                jQuery2.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery2.Callbacks("once memory"),
                jQuery2.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn3) {
                return promise.then(null, fn3);
              },
              // Keep pipe for back-compat
              pipe: function() {
                var fns = arguments;
                return jQuery2.Deferred(function(newDefer) {
                  jQuery2.each(tuples, function(_i2, tuple) {
                    var fn3 = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn3 && fn3.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn3 ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special)
                          );
                        } else {
                          maxDepth++;
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special),
                            resolve(
                              maxDepth,
                              deferred2,
                              Identity,
                              deferred2.notifyWith
                            )
                          );
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e2) {
                        if (jQuery2.Deferred.exceptionHook) {
                          jQuery2.Deferred.exceptionHook(
                            e2,
                            process.error
                          );
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e2];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery2.Deferred.getErrorHook) {
                        process.error = jQuery2.Deferred.getErrorHook();
                      } else if (jQuery2.Deferred.getStackHook) {
                        process.error = jQuery2.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery2.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  );
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onFulfilled) ? onFulfilled : Identity
                    )
                  );
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              // Get a promise for this deferred
              // If obj is provided, the promise aspect is added to the object
              promise: function(obj) {
                return obj != null ? jQuery2.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery2.each(tuples, function(i2, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(
                  function() {
                    state = stateString;
                  },
                  // rejected_callbacks.disable
                  // fulfilled_callbacks.disable
                  tuples[3 - i2][2].disable,
                  // rejected_handlers.disable
                  // fulfilled_handlers.disable
                  tuples[3 - i2][3].disable,
                  // progress_callbacks.lock
                  tuples[0][2].lock,
                  // progress_handlers.lock
                  tuples[0][3].lock
                );
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          // Deferred helper
          when: function(singleValue) {
            var remaining = arguments.length, i2 = remaining, resolveContexts = Array(i2), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i3) {
              return function(value) {
                resolveContexts[i3] = this;
                resolveValues[i3] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                primary.done(updateFunc(i2)).resolve,
                primary.reject,
                !remaining
              );
              if (primary.state() === "pending" || isFunction(resolveValues[i2] && resolveValues[i2].then)) {
                return primary.then();
              }
            }
            while (i2--) {
              adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery2.Deferred.exceptionHook = function(error, asyncError) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn(
              "jQuery.Deferred exception: " + error.message,
              error.stack,
              asyncError
            );
          }
        };
        jQuery2.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery2.Deferred();
        jQuery2.fn.ready = function(fn3) {
          readyList.then(fn3).catch(function(error) {
            jQuery2.readyException(error);
          });
          return this;
        };
        jQuery2.extend({
          // Is the DOM ready to be used? Set to true once it occurs.
          isReady: false,
          // A counter to track how many items to wait for before
          // the ready event fires. See trac-6781
          readyWait: 1,
          // Handle when the DOM is ready
          ready: function(wait) {
            if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
              return;
            }
            jQuery2.isReady = true;
            if (wait !== true && --jQuery2.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery2]);
          }
        });
        jQuery2.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery2.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery2.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn3, key, value, chainable, emptyGet, raw) {
          var i2 = 0, len = elems.length, bulk = key == null;
          if (toType2(key) === "object") {
            chainable = true;
            for (i2 in key) {
              access(elems, fn3, i2, key[i2], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn3.call(elems, value);
                fn3 = null;
              } else {
                bulk = fn3;
                fn3 = function(elem, _key, value2) {
                  return bulk.call(jQuery2(elem), value2);
                };
              }
            }
            if (fn3) {
              for (; i2 < len; i2++) {
                fn3(
                  elems[i2],
                  key,
                  raw ? value : value.call(elems[i2], i2, fn3(elems[i2], key))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn3.call(elems);
          }
          return len ? fn3(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data2() {
          this.expando = jQuery2.expando + Data2.uid++;
        }
        Data2.uid = 1;
        Data2.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : (
              // Always use camelCase key (gh-2257)
              owner[this.expando] && owner[this.expando][camelCase(key)]
            );
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i2, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i2 = key.length;
              while (i2--) {
                delete cache[key[i2]];
              }
            }
            if (key === void 0 || jQuery2.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery2.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data2();
        var dataUser = new Data2();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e2) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery2.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          // TODO: Now that all calls to _data and _removeData have been replaced
          // with direct calls to dataPriv methods, these can be deprecated.
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery2.fn.extend({
          data: function(key, value) {
            var i2, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i2 = attrs.length;
                  while (i2--) {
                    if (attrs[i2]) {
                      name = attrs[i2].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery2.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery2.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery2.queue(elem, type), startLength = queue.length, fn3 = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
              jQuery2.dequeue(elem, type);
            };
            if (fn3 === "inprogress") {
              fn3 = queue.shift();
              startLength--;
            }
            if (fn3) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn3.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          // Not public - generate a queueHooks object, or return the current one
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery2.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery2.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery2.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery2.queue(this, type, data);
              jQuery2._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery2.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery2.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          // Get a promise resolved when queues of a certain type
          // are emptied (fx is the type by default)
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i2 = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i2--) {
              tmp = dataPriv.get(elements[i2], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery2.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
          // Support: Firefox <=43 - 45
          // Disconnected elements can have computed display: none, so first confirm that elem is
          // in the document.
          isAttached(elem) && jQuery2.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery2.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery2.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery2.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery2.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery2.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery2(this).show();
              } else {
                jQuery2(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          // XHTML parsers do not magically insert elements in the
          // same way that tag soup parsers do. So we cannot shorten
          // this by omitting <tbody> or other required elements.
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery2.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i2 = 0, l2 = elems.length;
          for (; i2 < l2; i2++) {
            dataPriv.set(
              elems[i2],
              "globalEval",
              !refElements || dataPriv.get(refElements[i2], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j2, fragment = context.createDocumentFragment(), nodes = [], i2 = 0, l2 = elems.length;
          for (; i2 < l2; i2++) {
            elem = elems[i2];
            if (elem || elem === 0) {
              if (toType2(elem) === "object") {
                jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem) + wrap[2];
                j2 = wrap[0];
                while (j2--) {
                  tmp = tmp.lastChild;
                }
                jQuery2.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i2 = 0;
          while (elem = nodes[i2++]) {
            if (selection && jQuery2.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j2 = 0;
              while (elem = tmp[j2++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function on2(elem, types, selector, data, fn3, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on2(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn3 == null) {
            fn3 = selector;
            data = selector = void 0;
          } else if (fn3 == null) {
            if (typeof selector === "string") {
              fn3 = data;
              data = void 0;
            } else {
              fn3 = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn3 === false) {
            fn3 = returnFalse;
          } else if (!fn3) {
            return elem;
          }
          if (one === 1) {
            origFn = fn3;
            fn3 = function(event) {
              jQuery2().off(event);
              return origFn.apply(this, arguments);
            };
            fn3.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
          }
          return elem.each(function() {
            jQuery2.event.add(this, types, fn3, data, selector);
          });
        }
        jQuery2.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t2, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery2.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery2.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e2) {
                return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e2.type ? jQuery2.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t2 = types.length;
            while (t2--) {
              tmp = rtypenamespace.exec(types[t2]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery2.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery2.event.special[type] || {};
              handleObj = jQuery2.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery2.event.global[type] = true;
            }
          },
          // Detach an event or set of events from an element
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j2, origCount, tmp, events, t2, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t2 = types.length;
            while (t2--) {
              tmp = rtypenamespace.exec(types[t2]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery2.event.remove(elem, type + types[t2], handler, selector, true);
                }
                continue;
              }
              special = jQuery2.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j2 = handlers.length;
              while (j2--) {
                handleObj = handlers[j2];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j2, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery2.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery2.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i2, j2, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
            args[0] = event;
            for (i2 = 1; i2 < arguments.length; i2++) {
              args[i2] = arguments[i2];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
            i2 = 0;
            while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j2 = 0;
              while ((handleObj = matched.handlers[j2++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i2 = 0; i2 < delegateCount; i2++) {
                    handleObj = handlers[i2];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery2.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
          },
          special: {
            load: {
              // Prevent triggered image.load events from bubbling to window.load
              noBubble: true
            },
            click: {
              // Utilize native event to ensure correct state for checkable inputs
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", true);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              // For cross-browser consistency, suppress native .click() on links
              // Also prevent it if we're currently inside a leveraged native-event stack
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, isSetup) {
          if (!isSetup) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery2.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery2.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  this[type]();
                  result = dataPriv.get(this, type);
                  dataPriv.set(this, type, false);
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result;
                  }
                } else if ((jQuery2.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved) {
                dataPriv.set(this, type, jQuery2.event.trigger(
                  saved[0],
                  saved.slice(1),
                  this
                ));
                event.stopPropagation();
                event.isImmediatePropagationStopped = returnTrue;
              }
            }
          });
        }
        jQuery2.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery2.Event = function(src, props) {
          if (!(this instanceof jQuery2.Event)) {
            return new jQuery2.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery2.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery2.expando] = true;
        };
        jQuery2.Event.prototype = {
          constructor: jQuery2.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e2 = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e2 && !this.isSimulated) {
              e2.preventDefault();
            }
          },
          stopPropagation: function() {
            var e2 = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e2 && !this.isSimulated) {
              e2.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e2 = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e2 && !this.isSimulated) {
              e2.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery2.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery2.event.addProp);
        jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          function focusMappedHandler(nativeEvent) {
            if (document2.documentMode) {
              var handle = dataPriv.get(this, "handle"), event = jQuery2.event.fix(nativeEvent);
              event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
              event.isSimulated = true;
              handle(nativeEvent);
              if (event.target === event.currentTarget) {
                handle(event);
              }
            } else {
              jQuery2.event.simulate(
                delegateType,
                nativeEvent.target,
                jQuery2.event.fix(nativeEvent)
              );
            }
          }
          jQuery2.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
              var attaches;
              leverageNative(this, type, true);
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType);
                if (!attaches) {
                  this.addEventListener(delegateType, focusMappedHandler);
                }
                dataPriv.set(this, delegateType, (attaches || 0) + 1);
              } else {
                return false;
              }
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            teardown: function() {
              var attaches;
              if (document2.documentMode) {
                attaches = dataPriv.get(this, delegateType) - 1;
                if (!attaches) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                  dataPriv.remove(this, delegateType);
                } else {
                  dataPriv.set(this, delegateType, attaches);
                }
              } else {
                return false;
              }
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
              return dataPriv.get(event.target, type);
            },
            delegateType
          };
          jQuery2.event.special[delegateType] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
              if (!attaches) {
                if (document2.documentMode) {
                  this.addEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.addEventListener(type, focusMappedHandler, true);
                }
              }
              dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
              if (!attaches) {
                if (document2.documentMode) {
                  this.removeEventListener(delegateType, focusMappedHandler);
                } else {
                  doc.removeEventListener(type, focusMappedHandler, true);
                }
                dataPriv.remove(dataHolder, delegateType);
              } else {
                dataPriv.set(dataHolder, delegateType, attaches);
              }
            }
          };
        });
        jQuery2.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery2.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery2.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery2.fn.extend({
          on: function(types, selector, data, fn3) {
            return on2(this, types, selector, data, fn3);
          },
          one: function(types, selector, data, fn3) {
            return on2(this, types, selector, data, fn3, 1);
          },
          off: function(types, selector, fn3) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery2(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn3 = selector;
              selector = void 0;
            }
            if (fn3 === false) {
              fn3 = returnFalse;
            }
            return this.each(function() {
              jQuery2.event.remove(this, types, fn3, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery2(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i2, l2, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i2 = 0, l2 = events[type].length; i2 < l2; i2++) {
                  jQuery2.event.add(dest, type, events[type][i2]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery2.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i2 = 0, l2 = collection.length, iNoClone = l2 - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l2 > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self.html());
              }
              domManip(self, args, callback, ignored);
            });
          }
          if (l2) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i2 < l2; i2++) {
                node = fragment;
                if (i2 !== iNoClone) {
                  node = jQuery2.clone(node, true, true);
                  if (hasScripts) {
                    jQuery2.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i2], node, i2);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery2.map(scripts, restoreScript);
                for (i2 = 0; i2 < hasScripts; i2++) {
                  node = scripts[i2];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery2.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery2._evalUrl && !node.noModule) {
                        jQuery2._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i2 = 0;
          for (; (node = nodes[i2]) != null; i2++) {
            if (!keepData && node.nodeType === 1) {
              jQuery2.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery2.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i2, l2, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i2 = 0, l2 = srcElements.length; i2 < l2; i2++) {
                fixInput(srcElements[i2], destElements[i2]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i2 = 0, l2 = srcElements.length; i2 < l2; i2++) {
                  cloneCopyEvent(srcElements[i2], destElements[i2]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery2.event.special, i2 = 0;
            for (; (elem = elems[i2]) !== void 0; i2++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery2.event.remove(elem, type);
                      } else {
                        jQuery2.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery2.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i2 = 0;
            for (; (elem = this[i2]) != null; i2++) {
              if (elem.nodeType === 1) {
                jQuery2.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i2 = 0, l2 = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery2.htmlPrefilter(value2);
                try {
                  for (; i2 < l2; i2++) {
                    elem = this[i2] || {};
                    if (elem.nodeType === 1) {
                      jQuery2.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e2) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery2.inArray(this, ignored) < 0) {
                jQuery2.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery2.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery2.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i2 = 0;
            for (; i2 <= last; i2++) {
              elems = i2 === last ? this : this.clone(true);
              jQuery2(insert[i2])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var rcustomProp = /^--/;
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery2.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "box-sizing:content-box;border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) {
              ret = ret.replace(rtrimCSS, "$1") || void 0;
            }
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery2.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? (
            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + ""
          ) : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
          while (i2--) {
            name = cssPrefixes[i2] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery2.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? (
            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
          ) : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i2 < 4; i2 += 2) {
            if (box === "margin") {
              marginDelta += jQuery2.css(elem, box + cssExpand[i2], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
              if (box !== "padding") {
                delta += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
              } else {
                extra += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
              // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
              // Use an explicit zero to avoid NaN (gh-3964)
            )) || 0;
          }
          return delta + marginDelta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Interestingly, in some cases IE 9 doesn't suffer from this issue.
          !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
          // This happens for inline elements with no explicit setting (gh-3571)
          val === "auto" || // Support: Android <=4.1 - 4.3 only
          // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
          !parseFloat(val) && jQuery2.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
          elem.getClientRects().length) {
            isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val
          ) + "px";
        }
        jQuery2.extend({
          // Add in style property hooks for overriding the default
          // behavior of getting and setting a style property
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          // Don't automatically add "px" to these possibly-unitless properties
          cssNumber: {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageSlice: true,
            columnCount: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            scale: true,
            widows: true,
            zIndex: true,
            zoom: true,
            // SVG-related
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeMiterlimit: true,
            strokeOpacity: true
          },
          // Add in properties whose names you wish to fix before
          // setting or getting the value
          cssProps: {},
          // Get and set the style property on a DOM Node
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery2.each(["height", "width"], function(_i2, dimension) {
          jQuery2.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery2.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                );
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery2.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery2.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
            }
          }
        );
        jQuery2.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery2.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i2 < 4; i2++) {
                expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery2.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i2 = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i2 < len; i2++) {
                  map[name2[i2]] = jQuery2.css(elem, name2[i2], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end2, easing) {
          return new Tween.prototype.init(elem, options, prop, end2, easing);
        }
        jQuery2.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end2, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery2.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end2;
            this.unit = unit || (jQuery2.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery2.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery2.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery2.fx.step[tween.prop]) {
                jQuery2.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery2.easing = {
          linear: function(p2) {
            return p2;
          },
          swing: function(p2) {
            return 0.5 - Math.cos(p2 * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery2.fx = Tween.prototype.init;
        jQuery2.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery2.fx.interval);
            }
            jQuery2.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i2 = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i2 < 4; i2 += 2 - includeWidth) {
            which = cssExpand[i2];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery2._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery2.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
            }
          }
          propTween = !jQuery2.isEmptyObject(props);
          if (!propTween && jQuery2.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery2.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery2.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery2.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery2.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery2.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery2.extend({}, properties),
            opts: jQuery2.extend(true, {
              specialEasing: {},
              easing: jQuery2.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end2) {
              var tween = jQuery2.Tween(
                elem,
                animation.opts,
                prop,
                end2,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery2.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery2.fx.timer(
            jQuery2.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation;
        }
        jQuery2.Animation = jQuery2.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery2.speed = function(speed, easing, fn3) {
          var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
            complete: fn3 || !fn3 && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn3 && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery2.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery2.fx.speeds) {
                opt.duration = jQuery2.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery2.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery2.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery2.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery2.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery2.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery2.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery2.each(["toggle", "show", "hide"], function(_i2, name) {
          var cssFn = jQuery2.fn[name];
          jQuery2.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery2.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery2.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery2.timers = [];
        jQuery2.fx.tick = function() {
          var timer, i2 = 0, timers = jQuery2.timers;
          fxNow = Date.now();
          for (; i2 < timers.length; i2++) {
            timer = timers[i2];
            if (!timer() && timers[i2] === timer) {
              timers.splice(i2--, 1);
            }
          }
          if (!timers.length) {
            jQuery2.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery2.fx.timer = function(timer) {
          jQuery2.timers.push(timer);
          jQuery2.fx.start();
        };
        jQuery2.fx.interval = 13;
        jQuery2.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery2.fx.stop = function() {
          inProgress = null;
        };
        jQuery2.fx.speeds = {
          slow: 600,
          fast: 200,
          // Default speed
          _default: 400
        };
        jQuery2.fn.delay = function(time, type) {
          time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery2.expr.attrHandle;
        jQuery2.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery2.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery2.removeAttr(this, name);
            });
          }
        });
        jQuery2.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery2.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
              hooks = jQuery2.attrHooks[name.toLowerCase()] || (jQuery2.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery2.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery2.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i2 = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i2++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery2.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(_i2, name) {
          var getter = attrHandle[name] || jQuery2.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery2.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery2.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery2.propFix[name] || name];
            });
          }
        });
        jQuery2.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
              name = jQuery2.propFix[name] || name;
              hooks = jQuery2.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery2.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery2.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery2.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery2.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery2.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i2, finalValue;
            if (isFunction(value)) {
              return this.each(function(j2) {
                jQuery2(this).addClass(value.call(this, j2, getClass(this)));
              });
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i2 = 0; i2 < classNames.length; i2++) {
                    className = classNames[i2];
                    if (cur.indexOf(" " + className + " ") < 0) {
                      cur += className + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i2, finalValue;
            if (isFunction(value)) {
              return this.each(function(j2) {
                jQuery2(this).removeClass(value.call(this, j2, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i2 = 0; i2 < classNames.length; i2++) {
                    className = classNames[i2];
                    while (cur.indexOf(" " + className + " ") > -1) {
                      cur = cur.replace(" " + className + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i2, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) {
              return this.each(function(i3) {
                jQuery2(this).toggleClass(
                  value.call(this, i3, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            classNames = classesToArray(value);
            return this.each(function() {
              if (isValidValue) {
                self = jQuery2(this);
                for (i2 = 0; i2 < classNames.length; i2++) {
                  className = classNames[i2];
                  if (self.hasClass(className)) {
                    self.removeClass(className);
                  } else {
                    self.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                  );
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i2 = 0;
            className = " " + selector + " ";
            while (elem = this[i2++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery2.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i2) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i2, jQuery2(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery2.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery2.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery2.find.attr(elem, "value");
                return val != null ? val : (
                  // Support: IE <=10 - 11 only
                  // option.text throws exceptions (trac-14686, trac-14858)
                  // Strip and collapse whitespace
                  // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                  stripAndCollapse(jQuery2.text(elem))
                );
              }
            },
            select: {
              get: function(elem) {
                var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max2 = one ? index + 1 : options.length;
                if (index < 0) {
                  i2 = max2;
                } else {
                  i2 = one ? index : 0;
                }
                for (; i2 < max2; i2++) {
                  option = options[i2];
                  if ((option.selected || i2 === index) && // Don't return options that are disabled or in a disabled optgroup
                  !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery2(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i2 = options.length;
                while (i2--) {
                  option = options[i2];
                  if (option.selected = jQuery2.inArray(jQuery2.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery2.each(["radio", "checkbox"], function() {
          jQuery2.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery2.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        var location = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery2.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e2) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e2) {
          e2.stopPropagation();
        };
        jQuery2.extend(jQuery2.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery2.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery2.makeArray(data, [event]);
            special = jQuery2.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i2 = 0;
            while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i2 > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery2.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery2.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          // Piggyback on a donor event to simulate a different one
          // Used only for `focus(in | out)` events
          simulate: function(type, elem, event) {
            var e2 = jQuery2.extend(
              new jQuery2.Event(),
              event,
              {
                type,
                isSimulated: true
              }
            );
            jQuery2.event.trigger(e2, null, elem);
          }
        });
        jQuery2.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery2.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery2.event.trigger(type, data, elem, true);
            }
          }
        });
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery2.each(obj, function(i2, v2) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v2);
              } else {
                buildParams(
                  prefix + "[" + (typeof v2 === "object" && v2 != null ? i2 : "") + "]",
                  v2,
                  traditional,
                  add
                );
              }
            });
          } else if (!traditional && toType2(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery2.param = function(a2, traditional) {
          var prefix, s2 = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s2[s2.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a2 == null) {
            return "";
          }
          if (Array.isArray(a2) || a2.jquery && !jQuery2.isPlainObject(a2)) {
            jQuery2.each(a2, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a2) {
              buildParams(prefix, a2[prefix], traditional, add);
            }
          }
          return s2.join("&");
        };
        jQuery2.fn.extend({
          serialize: function() {
            return jQuery2.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery2.prop(this, "elements");
              return elements ? jQuery2.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i2, elem) {
              var val = jQuery2(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery2.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i2++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery2.each(structure[dataType] || [], function(_2, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery2.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s2, jqXHR, responses) {
          var ct2, type, finalDataType, firstDataType, contents = s2.contents, dataTypes = s2.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct2 === void 0) {
              ct2 = s2.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct2) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct2)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s2.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s2, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s2.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s2.converters) {
              converters[conv.toLowerCase()] = s2.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s2.responseFields[current]) {
              jqXHR[s2.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s2.dataFilter) {
              response = s2.dataFilter(response, s2.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s2.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e2) {
                      return {
                        state: "parsererror",
                        error: conv ? e2 : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery2.extend({
          // Counter for holding the number of active queries
          active: 0,
          // Last-Modified header cache for next request
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
              // Convert anything to text
              "* text": String,
              // Text to html (true = no transformation)
              "text html": true,
              // Evaluate text as a json expression
              "text json": JSON.parse,
              // Parse text as xml
              "text xml": jQuery2.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
              url: true,
              context: true
            }
          },
          // Creates a full fledged settings object into target
          // with both ajaxSettings and settings fields.
          // If target is omitted, writes into ajaxSettings.
          ajaxSetup: function(target, settings) {
            return settings ? (
              // Building a settings object
              ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings)
            ) : (
              // Extending ajaxSettings
              ajaxExtend(jQuery2.ajaxSettings, target)
            );
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          // Main method
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i2, uncached, s2 = jQuery2.ajaxSetup({}, options), callbackContext = s2.context || s2, globalEventContext = s2.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s2.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              // Builds headers hashtable if needed
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              // Raw string
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              // Caches the header
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              // Overrides response content-type header
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s2.mimeType = type;
                }
                return this;
              },
              // Status-dependent callbacks
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              // Cancel the request
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s2.url = ((url || s2.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            s2.type = options.method || options.type || s2.method || s2.type;
            s2.dataTypes = (s2.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s2.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s2.url;
                urlAnchor.href = urlAnchor.href;
                s2.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e2) {
                s2.crossDomain = true;
              }
            }
            if (s2.data && s2.processData && typeof s2.data !== "string") {
              s2.data = jQuery2.param(s2.data, s2.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s2, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery2.event && s2.global;
            if (fireGlobals && jQuery2.active++ === 0) {
              jQuery2.event.trigger("ajaxStart");
            }
            s2.type = s2.type.toUpperCase();
            s2.hasContent = !rnoContent.test(s2.type);
            cacheURL = s2.url.replace(rhash, "");
            if (!s2.hasContent) {
              uncached = s2.url.slice(cacheURL.length);
              if (s2.data && (s2.processData || typeof s2.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s2.data;
                delete s2.data;
              }
              if (s2.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s2.url = cacheURL + uncached;
            } else if (s2.data && s2.processData && (s2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s2.data = s2.data.replace(r20, "+");
            }
            if (s2.ifModified) {
              if (jQuery2.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
              }
              if (jQuery2.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
              }
            }
            if (s2.data && s2.hasContent && s2.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s2.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s2.dataTypes[0] && s2.accepts[s2.dataTypes[0]] ? s2.accepts[s2.dataTypes[0]] + (s2.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s2.accepts["*"]
            );
            for (i2 in s2.headers) {
              jqXHR.setRequestHeader(i2, s2.headers[i2]);
            }
            if (s2.beforeSend && (s2.beforeSend.call(callbackContext, jqXHR, s2) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s2.complete);
            jqXHR.done(s2.success);
            jqXHR.fail(s2.error);
            transport = inspectPrefiltersOrTransports(transports, s2, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s2]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s2.async && s2.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s2.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e2) {
                if (completed2) {
                  throw e2;
                }
                done(-1, e2);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s2, jqXHR, responses);
              }
              if (!isSuccess && jQuery2.inArray("script", s2.dataTypes) > -1 && jQuery2.inArray("json", s2.dataTypes) < 0) {
                s2.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s2, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s2.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery2.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery2.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s2.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s2, isSuccess ? success : error]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s2]);
                if (!--jQuery2.active) {
                  jQuery2.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery2.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery2.get(url, void 0, callback, "script");
          }
        });
        jQuery2.each(["get", "post"], function(_i2, method) {
          jQuery2[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery2.ajax(jQuery2.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery2.isPlainObject(url) && url));
          };
        });
        jQuery2.ajaxPrefilter(function(s2) {
          var i2;
          for (i2 in s2.headers) {
            if (i2.toLowerCase() === "content-type") {
              s2.contentType = s2.headers[i2] || "";
            }
          }
        });
        jQuery2._evalUrl = function(url, options, doc) {
          return jQuery2.ajax({
            url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery2.globalEval(response, options, doc);
            }
          });
        };
        jQuery2.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i2) {
                jQuery2(this).wrapInner(html.call(this, i2));
              });
            }
            return this.each(function() {
              var self = jQuery2(this), contents = self.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i2) {
              jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i2) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery2(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery2.expr.pseudos.hidden = function(elem) {
          return !jQuery2.expr.pseudos.visible(elem);
        };
        jQuery2.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery2.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e2) {
          }
        };
        var xhrSuccessStatus = {
          // File protocol always yields status code 0, assume 200
          0: 200,
          // Support: IE <=9 only
          // trac-1450: sometimes IE returns 1223 when it should be 204
          1223: 204
        }, xhrSupported = jQuery2.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery2.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i2, xhr = options.xhr();
                xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                );
                if (options.xhrFields) {
                  for (i2 in options.xhrFields) {
                    xhr[i2] = options.xhrFields[i2];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i2 in headers) {
                  xhr.setRequestHeader(i2, headers[i2]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(
                            // File: protocol always yields status 0; see trac-8605, trac-14207
                            xhr.status,
                            xhr.statusText
                          );
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr.status] || xhr.status,
                          xhr.statusText,
                          // Support: IE <=9 only
                          // IE9 has no XHR2 but throws on binary (trac-11426)
                          // For XHR2 non-text, let the caller handle it (gh-2498)
                          (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                          xhr.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e2) {
                  if (callback) {
                    throw e2;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery2.ajaxPrefilter(function(s2) {
          if (s2.crossDomain) {
            s2.contents.script = false;
          }
        });
        jQuery2.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery2.globalEval(text);
              return text;
            }
          }
        });
        jQuery2.ajaxPrefilter("script", function(s2) {
          if (s2.cache === void 0) {
            s2.cache = false;
          }
          if (s2.crossDomain) {
            s2.type = "GET";
          }
        });
        jQuery2.ajaxTransport("script", function(s2) {
          if (s2.crossDomain || s2.scriptAttrs) {
            var script, callback;
            return {
              send: function(_2, complete) {
                script = jQuery2("<script>").attr(s2.scriptAttrs || {}).prop({ charset: s2.scriptCharset, src: s2.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery2.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery2.ajaxPrefilter("json jsonp", function(s2, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s2.jsonp !== false && (rjsonp.test(s2.url) ? "url" : typeof s2.data === "string" && (s2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s2.data) && "data");
          if (jsonProp || s2.dataTypes[0] === "jsonp") {
            callbackName = s2.jsonpCallback = isFunction(s2.jsonpCallback) ? s2.jsonpCallback() : s2.jsonpCallback;
            if (jsonProp) {
              s2[jsonProp] = s2[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s2.jsonp !== false) {
              s2.url += (rquery.test(s2.url) ? "&" : "?") + s2.jsonp + "=" + callbackName;
            }
            s2.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery2.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s2.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery2(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s2[callbackName]) {
                s2.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery2.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery2(scripts).remove();
          }
          return jQuery2.merge([], parsed.childNodes);
        };
        jQuery2.fn.load = function(url, params, callback) {
          var selector, type, response, self = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self.length > 0) {
            jQuery2.ajax({
              url,
              // If "type" variable is undefined, then "GET" method will be used.
              // Make value of this field explicit since
              // user can override it through ajaxSetup method
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self.html(selector ? (
                // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector)
              ) : (
                // Otherwise use the full result
                responseText
              ));
            }).always(callback && function(jqXHR, status) {
              self.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery2.expr.pseudos.animated = function(elem) {
          return jQuery2.grep(jQuery2.timers, function(fn3) {
            return elem === fn3.elem;
          }).length;
        };
        jQuery2.offset = {
          setOffset: function(elem, options, i2) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery2.css(elem, "top");
            curCSSLeft = jQuery2.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i2, jQuery2.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery2.fn.extend({
          // offset() relates an element's border box to the document origin
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i2) {
                jQuery2.offset.setOffset(this, options, i2);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          // position() relates an element's margin box to its offset parent's padding box
          // This corresponds to the behavior of CSS absolute positioning
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset2, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery2.css(elem, "position") === "fixed") {
              offset2 = elem.getBoundingClientRect();
            } else {
              offset2 = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery2.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery2(offsetParent).offset();
                parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset2.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
              left: offset2.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
            };
          },
          // This method will return documentElement in the following cases:
          // 1) For the element inside the iframe without offsetParent, this method will return
          //    documentElement of the parent window
          // 2) For the hidden or detached element
          // 3) For body or html element, i.e. in case of the html node - it will return itself
          //
          // but those exceptions were never presented as a real life use-cases
          // and might be considered as more preferable results.
          //
          // This logic, however, is not guaranteed and can change at any point in the future
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top2 = "pageYOffset" === prop;
          jQuery2.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top2 ? val2 : win.pageXOffset,
                  top2 ? val2 : win.pageYOffset
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery2.each(["top", "left"], function(_i2, prop) {
          jQuery2.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery2(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery2.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery2.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(
                    elem.body["scroll" + name],
                    doc["scroll" + name],
                    elem.body["offset" + name],
                    doc["offset" + name],
                    doc["client" + name]
                  );
                }
                return value2 === void 0 ? (
                  // Get width or height on the element, requesting but not forcing parseFloat
                  jQuery2.css(elem, type2, extra)
                ) : (
                  // Set width or height on the element
                  jQuery2.style(elem, type2, value2, extra)
                );
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery2.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i2, type) {
          jQuery2.fn[type] = function(fn3) {
            return this.on(type, fn3);
          };
        });
        jQuery2.fn.extend({
          bind: function(types, data, fn3) {
            return this.on(types, null, data, fn3);
          },
          unbind: function(types, fn3) {
            return this.off(types, null, fn3);
          },
          delegate: function(selector, types, data, fn3) {
            return this.on(types, selector, data, fn3);
          },
          undelegate: function(selector, types, fn3) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn3);
          },
          hover: function(fnOver, fnOut) {
            return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
          }
        });
        jQuery2.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i2, name) {
            jQuery2.fn[name] = function(data, fn3) {
              return arguments.length > 0 ? this.on(name, null, data, fn3) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery2.proxy = function(fn3, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn3[context];
            context = fn3;
            fn3 = tmp;
          }
          if (!isFunction(fn3)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn3.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn3.guid = fn3.guid || jQuery2.guid++;
          return proxy;
        };
        jQuery2.holdReady = function(hold) {
          if (hold) {
            jQuery2.readyWait++;
          } else {
            jQuery2.ready(true);
          }
        };
        jQuery2.isArray = Array.isArray;
        jQuery2.parseJSON = JSON.parse;
        jQuery2.nodeName = nodeName;
        jQuery2.isFunction = isFunction;
        jQuery2.isWindow = isWindow;
        jQuery2.camelCase = camelCase;
        jQuery2.type = toType2;
        jQuery2.now = Date.now;
        jQuery2.isNumeric = function(obj) {
          var type = jQuery2.type(obj);
          return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
          // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
          // subtraction forces infinities to NaN
          !isNaN(obj - parseFloat(obj));
        };
        jQuery2.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "$1");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery2;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery2.noConflict = function(deep) {
          if (window2.$ === jQuery2) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery2) {
            window2.jQuery = _jQuery;
          }
          return jQuery2;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery2;
        }
        return jQuery2;
      });
    }
  });

  // node_modules/@popperjs/core/lib/index.js
  var lib_exports = {};
  __export(lib_exports, {
    afterMain: () => afterMain,
    afterRead: () => afterRead,
    afterWrite: () => afterWrite,
    applyStyles: () => applyStyles_default,
    arrow: () => arrow_default,
    auto: () => auto,
    basePlacements: () => basePlacements,
    beforeMain: () => beforeMain,
    beforeRead: () => beforeRead,
    beforeWrite: () => beforeWrite,
    bottom: () => bottom,
    clippingParents: () => clippingParents,
    computeStyles: () => computeStyles_default,
    createPopper: () => createPopper3,
    createPopperBase: () => createPopper,
    createPopperLite: () => createPopper2,
    detectOverflow: () => detectOverflow,
    end: () => end,
    eventListeners: () => eventListeners_default,
    flip: () => flip_default,
    hide: () => hide_default,
    left: () => left,
    main: () => main,
    modifierPhases: () => modifierPhases,
    offset: () => offset_default,
    placements: () => placements,
    popper: () => popper,
    popperGenerator: () => popperGenerator,
    popperOffsets: () => popperOffsets_default,
    preventOverflow: () => preventOverflow_default,
    read: () => read,
    reference: () => reference,
    right: () => right,
    start: () => start,
    top: () => top,
    variationPlacements: () => variationPlacements,
    viewport: () => viewport,
    write: () => write
  });

  // node_modules/@popperjs/core/lib/enums.js
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  // node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindow.js
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }

  // node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // node_modules/@popperjs/core/lib/modifiers/applyStyles.js
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  var applyStyles_default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect,
    requires: ["computeStyles"]
  };

  // node_modules/@popperjs/core/lib/utils/getBasePlacement.js
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }

  // node_modules/@popperjs/core/lib/utils/math.js
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  // node_modules/@popperjs/core/lib/utils/userAgent.js
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }

  // node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  // node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y2,
      right: x2 + width,
      bottom: y2 + height,
      left: x2,
      x: x2,
      y: y2
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/contains.js
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }

  // node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }

  // node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle2(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle2(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle2(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }

  // node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }

  // node_modules/@popperjs/core/lib/utils/within.js
  function within(min2, value, max2) {
    return max(min2, min(value, max2));
  }
  function withinMaxClamp(min2, value, max2) {
    var v2 = within(min2, value, max2);
    return v2 > max2 ? max2 : v2;
  }

  // node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  // node_modules/@popperjs/core/lib/utils/expandToHashMap.js
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  // node_modules/@popperjs/core/lib/modifiers/arrow.js
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect2(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  var arrow_default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect2,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  // node_modules/@popperjs/core/lib/utils/getVariation.js
  function getVariation(placement) {
    return placement.split("-")[1];
  }

  // node_modules/@popperjs/core/lib/modifiers/computeStyles.js
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x2 = _ref.x, y2 = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x2 * dpr) / dpr || 0,
      y: round(y2 * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x: x2,
      y: y2
    }) : {
      x: x2,
      y: y2
    };
    x2 = _ref3.x;
    y2 = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y2 -= offsetY - popperRect.height;
        y2 *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x2 -= offsetX - popperRect.width;
        x2 *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x: x2,
      y: y2
    }, getWindow(popper2)) : {
      x: x2,
      y: y2
    };
    x2 = _ref4.x;
    y2 = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles_default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };

  // node_modules/@popperjs/core/lib/modifiers/eventListeners.js
  var passive = {
    passive: true
  };
  function effect3(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  var eventListeners_default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect: effect3,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
  var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash[matched];
    });
  }

  // node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
  var hash2 = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash2[matched];
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x2 = 0;
    var y2 = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x2 = visualViewport.offsetLeft;
        y2 = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x2 + getWindowScrollBarX(element),
      y: y2
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y2 = -winScroll.scrollTop;
    if (getComputedStyle2(body || html).direction === "rtl") {
      x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x: x2,
      y: y2
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  // node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }

  // node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }

  // node_modules/@popperjs/core/lib/utils/rectToClientRect.js
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  // node_modules/@popperjs/core/lib/utils/computeOffsets.js
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
        default:
      }
    }
    return offsets;
  }

  // node_modules/@popperjs/core/lib/utils/detectOverflow.js
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }

  // node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements2.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements2;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a2, b2) {
      return overflows[a2] - overflows[b2];
    });
  }

  // node_modules/@popperjs/core/lib/modifiers/flip.js
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i2 = 0; i2 < placements2.length; i2++) {
      var placement = placements2[i2];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i3) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i3).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i2 = numberOfChecks; _i2 > 0; _i2--) {
        var _ret = _loop(_i2);
        if (_ret === "break")
          break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  var flip_default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };

  // node_modules/@popperjs/core/lib/modifiers/hide.js
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  var hide_default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };

  // node_modules/@popperjs/core/lib/modifiers/offset.js
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x2;
      state.modifiersData.popperOffsets.y += y2;
    }
    state.modifiersData[name] = data;
  }
  var offset_default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };

  // node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  var popperOffsets_default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getAltAxis.js
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }

  // node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min2 = offset2 + overflow[mainSide];
      var max2 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  var preventOverflow_default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };

  // node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  // node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  // node_modules/@popperjs/core/lib/utils/orderModifiers.js
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  // node_modules/@popperjs/core/lib/utils/debounce.js
  function debounce(fn3) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn3());
          });
        });
      }
      return pending;
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergeByName.js
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }

  // node_modules/@popperjs/core/lib/createPopper.js
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper4(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m2) {
            return m2.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn3 === "function") {
              state = fn3({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
          if (typeof effect4 === "function") {
            var cleanupFn = effect4({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn3) {
          return fn3();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  var createPopper = /* @__PURE__ */ popperGenerator();

  // node_modules/@popperjs/core/lib/popper-lite.js
  var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
  var createPopper2 = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });

  // node_modules/@popperjs/core/lib/popper.js
  var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
  var createPopper3 = /* @__PURE__ */ popperGenerator({
    defaultModifiers: defaultModifiers2
  });

  // node_modules/bootstrap/dist/js/bootstrap.esm.js
  var elementMap = /* @__PURE__ */ new Map();
  var Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, /* @__PURE__ */ new Map());
      }
      const instanceMap = elementMap.get(element);
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };
  var MAX_UID = 1e6;
  var MILLISECONDS_MULTIPLIER = 1e3;
  var TRANSITION_END = "transitionend";
  var parseSelector = (selector) => {
    if (selector && window.CSS && window.CSS.escape) {
      selector = selector.replace(/#([^\s"#']+)/g, (match, id2) => `#${CSS.escape(id2)}`);
    }
    return selector;
  };
  var toType = (object) => {
    if (object === null || object === void 0) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var getUID = (prefix) => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  var getTransitionDurationFromElement = (element) => {
    if (!element) {
      return 0;
    }
    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = (element) => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement2 = (object) => {
    if (!object || typeof object !== "object") {
      return false;
    }
    if (typeof object.jquery !== "undefined") {
      object = object[0];
    }
    return typeof object.nodeType !== "undefined";
  };
  var getElement = (object) => {
    if (isElement2(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === "string" && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  var isVisible = (element) => {
    if (!isElement2(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest("summary");
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains("disabled")) {
      return true;
    }
    if (typeof element.disabled !== "undefined") {
      return element.disabled;
    }
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
  };
  var findShadowRoot = (element) => {
    if (!document.documentElement.attachShadow) {
      return null;
    }
    if (typeof element.getRootNode === "function") {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  var noop = () => {
  };
  var reflow = (element) => {
    element.offsetHeight;
  };
  var getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = (callback) => {
    if (document.readyState === "loading") {
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const callback2 of DOMContentLoadedCallbacks) {
            callback2();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = () => document.documentElement.dir === "rtl";
  var defineJQueryPlugin = (plugin) => {
    onDOMContentLoaded(() => {
      const $3 = getjQuery();
      if ($3) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $3.fn[name];
        $3.fn[name] = plugin.jQueryInterface;
        $3.fn[name].Constructor = plugin;
        $3.fn[name].noConflict = () => {
          $3.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
  };
  var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {};
  var uidEvent = 1;
  var customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  var nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn3) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn3);
      }
      return fn3.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn3) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn3);
          }
          return fn3.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn4) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn4.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn3 = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn3.delegationSelector = isDelegated ? handler : null;
    fn3.callable = callable;
    fn3.oneOff = oneOff;
    fn3.uidEvent = uid;
    handlers[uid] = fn3;
    element.addEventListener(typeEvent, fn3, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn3 = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn3) {
      return;
    }
    element.removeEventListener(typeEvent, fn3, Boolean(delegationSelector));
    delete events[typeEvent][fn3.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  var EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== "string" || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith(".");
      if (typeof callable !== "undefined") {
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, "");
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== "string" || !element) {
        return null;
      }
      const $3 = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $3) {
        jQueryEvent = $3.Event(event, args);
        $3(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, {
        bubbles,
        cancelable: true
      }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  var Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, "");
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };
  var Config = class {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement2(element) ? Manipulator.getDataAttribute(element, "config") : {};
      return {
        ...this.constructor.Default,
        ...typeof jsonConfig === "object" ? jsonConfig : {},
        ...isElement2(element) ? Manipulator.getDataAttributes(element) : {},
        ...typeof config === "object" ? config : {}
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement2(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
  };
  var VERSION = "5.3.2";
  var BaseComponent = class extends Config {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    // Static
    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  };
  var getSelector = (element) => {
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
      let hrefAttribute = element.getAttribute("href");
      if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
        return null;
      }
      if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
        hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== "#" ? parseSelector(hrefAttribute.trim()) : null;
    }
    return selector;
  };
  var SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter((child) => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
      return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };
  var enableDismissTrigger = (component, method = "hide") => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);
      instance[method]();
    });
  };
  var NAME$f = "alert";
  var DATA_KEY$a = "bs.alert";
  var EVENT_KEY$b = `.${DATA_KEY$a}`;
  var EVENT_CLOSE = `close${EVENT_KEY$b}`;
  var EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  var CLASS_NAME_FADE$5 = "fade";
  var CLASS_NAME_SHOW$8 = "show";
  var Alert = class _Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$f;
    }
    // Public
    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
      if (closeEvent.defaultPrevented) {
        return;
      }
      this._element.classList.remove(CLASS_NAME_SHOW$8);
      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    }
    // Private
    _destroyElement() {
      this._element.remove();
      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Alert.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  enableDismissTrigger(Alert, "close");
  defineJQueryPlugin(Alert);
  var NAME$e = "button";
  var DATA_KEY$9 = "bs.button";
  var EVENT_KEY$a = `.${DATA_KEY$9}`;
  var DATA_API_KEY$6 = ".data-api";
  var CLASS_NAME_ACTIVE$3 = "active";
  var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
  var Button = class _Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$e;
    }
    // Public
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Button.getOrCreateInstance(this);
        if (config === "toggle") {
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event) => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  defineJQueryPlugin(Button);
  var NAME$d = "swipe";
  var EVENT_KEY$9 = ".bs.swipe";
  var EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  var EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  var EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
  var POINTER_TYPE_TOUCH = "touch";
  var POINTER_TYPE_PEN = "pen";
  var CLASS_NAME_POINTER_EVENT = "pointer-event";
  var SWIPE_THRESHOLD = 40;
  var Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType$c = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  var Swipe = class _Swipe extends Config {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !_Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }
    // Getters
    static get Default() {
      return Default$c;
    }
    static get DefaultType() {
      return DefaultType$c;
    }
    static get NAME() {
      return NAME$d;
    }
    // Public
    dispose() {
      EventHandler.off(this._element, EVENT_KEY$9);
    }
    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  };
  var NAME$c = "carousel";
  var DATA_KEY$8 = "bs.carousel";
  var EVENT_KEY$8 = `.${DATA_KEY$8}`;
  var DATA_API_KEY$5 = ".data-api";
  var ARROW_LEFT_KEY$1 = "ArrowLeft";
  var ARROW_RIGHT_KEY$1 = "ArrowRight";
  var TOUCHEVENT_COMPAT_WAIT = 500;
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var EVENT_SLIDE = `slide${EVENT_KEY$8}`;
  var EVENT_SLID = `slid${EVENT_KEY$8}`;
  var EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
  var EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
  var EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
  var EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
  var EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
  var EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  var CLASS_NAME_CAROUSEL = "carousel";
  var CLASS_NAME_ACTIVE$2 = "active";
  var CLASS_NAME_SLIDE = "slide";
  var CLASS_NAME_END = "carousel-item-end";
  var CLASS_NAME_START = "carousel-item-start";
  var CLASS_NAME_NEXT = "carousel-item-next";
  var CLASS_NAME_PREV = "carousel-item-prev";
  var SELECTOR_ACTIVE = ".active";
  var SELECTOR_ITEM = ".carousel-item";
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = ".carousel-item img";
  var SELECTOR_INDICATORS = ".carousel-indicators";
  var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  var Default$b = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType$b = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  var Carousel = class _Carousel extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }
    // Getters
    static get Default() {
      return Default$b;
    }
    static get DefaultType() {
      return DefaultType$b;
    }
    static get NAME() {
      return NAME$c;
    }
    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order2 = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order2, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, (event) => this._keydown(event));
      }
      if (this._config.pause === "hover") {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
      }
      if (this._config.touch && Swipe.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== "hover") {
          return;
        }
        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order2, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order2 === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = (eventName) => {
        return EventHandler.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order2),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order2) {
      if (isRTL()) {
        return order2 === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order2 === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Carousel.getOrCreateInstance(this, config);
        if (typeof config === "number") {
          data.to(config);
          return;
        }
        if (typeof config === "string") {
          if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (Manipulator.getDataAttribute(this, "slide") === "next") {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  defineJQueryPlugin(Carousel);
  var NAME$b = "collapse";
  var DATA_KEY$7 = "bs.collapse";
  var EVENT_KEY$7 = `.${DATA_KEY$7}`;
  var DATA_API_KEY$4 = ".data-api";
  var EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  var EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  var EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  var EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  var EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  var CLASS_NAME_SHOW$7 = "show";
  var CLASS_NAME_COLLAPSE = "collapse";
  var CLASS_NAME_COLLAPSING = "collapsing";
  var CLASS_NAME_COLLAPSED = "collapsed";
  var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
  var WIDTH = "width";
  var HEIGHT = "height";
  var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  var Default$a = {
    parent: null,
    toggle: true
  };
  var DefaultType$a = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  var Collapse = class _Collapse extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
      for (const elem of toggleList) {
        const selector = SelectorEngine.getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    // Getters
    static get Default() {
      return Default$a;
    }
    static get DefaultType() {
      return DefaultType$a;
    }
    static get NAME() {
      return NAME$b;
    }
    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        this._element.style[dimension] = "";
        EventHandler.trigger(this._element, EVENT_SHOWN$6);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      for (const trigger of this._triggerArray) {
        const element = SelectorEngine.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
      };
      this._element.style[dimension] = "";
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    }
    // Private
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle);
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
      for (const element of children) {
        const selected = SelectorEngine.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute("aria-expanded", isOpen);
      }
    }
    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === "string" && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function() {
        const data = _Collapse.getOrCreateInstance(this, _config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
      event.preventDefault();
    }
    for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });
  defineJQueryPlugin(Collapse);
  var NAME$a = "dropdown";
  var DATA_KEY$6 = "bs.dropdown";
  var EVENT_KEY$6 = `.${DATA_KEY$6}`;
  var DATA_API_KEY$3 = ".data-api";
  var ESCAPE_KEY$2 = "Escape";
  var TAB_KEY$1 = "Tab";
  var ARROW_UP_KEY$1 = "ArrowUp";
  var ARROW_DOWN_KEY$1 = "ArrowDown";
  var RIGHT_MOUSE_BUTTON = 2;
  var EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  var EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  var EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  var EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  var EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var CLASS_NAME_SHOW$6 = "show";
  var CLASS_NAME_DROPUP = "dropup";
  var CLASS_NAME_DROPEND = "dropend";
  var CLASS_NAME_DROPSTART = "dropstart";
  var CLASS_NAME_DROPUP_CENTER = "dropup-center";
  var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  var SELECTOR_MENU = ".dropdown-menu";
  var SELECTOR_NAVBAR = ".navbar";
  var SELECTOR_NAVBAR_NAV = ".navbar-nav";
  var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  var PLACEMENT_TOPCENTER = "top";
  var PLACEMENT_BOTTOMCENTER = "bottom";
  var Default$9 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  var DefaultType$9 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  var Dropdown = class _Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
      return Default$9;
    }
    static get DefaultType() {
      return DefaultType$9;
    }
    static get NAME() {
      return NAME$a;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();
      if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      this._menu.classList.add(CLASS_NAME_SHOW$6);
      this._element.classList.add(CLASS_NAME_SHOW$6);
      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    // Private
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW$6);
      this._element.classList.remove(CLASS_NAME_SHOW$6);
      this._element.setAttribute("aria-expanded", "false");
      Manipulator.removeDataAttribute(this._menu, "popper");
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement2(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof lib_exports === "undefined") {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      }
      let referenceElement = this._element;
      if (this._config.reference === "parent") {
        referenceElement = this._parent;
      } else if (isElement2(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === "object") {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = createPopper3(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }
      const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const {
        offset: offset2
      } = this._config;
      if (typeof offset2 === "string") {
        return offset2.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset2 === "function") {
        return (popperData) => offset2(popperData, this._element);
      }
      return offset2;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      if (this._inNavbar || this._config.display === "static") {
        Manipulator.setDataAttribute(this._menu, "popper", "static");
        defaultBsPopperConfig.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
      if (!items.length) {
        return;
      }
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = _Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
          continue;
        }
        if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = {
          relatedTarget: context._element
        };
        if (event.type === "click") {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = _Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  };
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);
  var NAME$9 = "backdrop";
  var CLASS_NAME_FADE$4 = "fade";
  var CLASS_NAME_SHOW$5 = "show";
  var EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  var Default$8 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  var DefaultType$8 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  var Backdrop = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    // Getters
    static get Default() {
      return Default$8;
    }
    static get DefaultType() {
      return DefaultType$8;
    }
    static get NAME() {
      return NAME$9;
    }
    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }
    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement("div");
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  };
  var NAME$8 = "focustrap";
  var DATA_KEY$5 = "bs.focustrap";
  var EVENT_KEY$5 = `.${DATA_KEY$5}`;
  var EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  var TAB_KEY = "Tab";
  var TAB_NAV_FORWARD = "forward";
  var TAB_NAV_BACKWARD = "backward";
  var Default$7 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  var DefaultType$7 = {
    autofocus: "boolean",
    trapElement: "element"
  };
  var FocusTrap = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
      return Default$7;
    }
    static get DefaultType() {
      return DefaultType$7;
    }
    static get NAME() {
      return NAME$8;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY$5);
      EventHandler.on(document, EVENT_FOCUSIN$2, (event) => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    }
    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  };
  var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var SELECTOR_STICKY_CONTENT = ".sticky-top";
  var PROPERTY_PADDING = "padding-right";
  var PROPERTY_MARGIN = "margin-right";
  var ScrollBarHelper = class {
    constructor() {
      this._element = document.body;
    }
    // Public
    getWidth() {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = (element) => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = (element) => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement2(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  };
  var NAME$7 = "modal";
  var DATA_KEY$4 = "bs.modal";
  var EVENT_KEY$4 = `.${DATA_KEY$4}`;
  var DATA_API_KEY$2 = ".data-api";
  var ESCAPE_KEY$1 = "Escape";
  var EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  var EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  var EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  var EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  var EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  var EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  var EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
  var EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  var EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  var EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  var CLASS_NAME_OPEN = "modal-open";
  var CLASS_NAME_FADE$3 = "fade";
  var CLASS_NAME_SHOW$4 = "show";
  var CLASS_NAME_STATIC = "modal-static";
  var OPEN_SELECTOR$1 = ".modal.show";
  var SELECTOR_DIALOG = ".modal-dialog";
  var SELECTOR_MODAL_BODY = ".modal-body";
  var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  var Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  var DefaultType$6 = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };
  var Modal = class _Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$6;
    }
    static get DefaultType() {
      return DefaultType$6;
    }
    static get NAME() {
      return NAME$7;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW$4);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY$4);
      EventHandler.off(this._dialog, EVENT_KEY$4);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = "block";
      this._element.removeAttribute("aria-hidden");
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW$4);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event) => {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none";
      this._element.setAttribute("aria-hidden", true);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = "hidden";
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }
    /**
     * The following methods are used to handle overflowing modals
     */
    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? "paddingLeft" : "paddingRight";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? "paddingRight" : "paddingLeft";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "";
      this._element.style.paddingRight = "";
    }
    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function() {
        const data = _Modal.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW$4, (showEvent) => {
      if (showEvent.defaultPrevented) {
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN$4, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  defineJQueryPlugin(Modal);
  var NAME$6 = "offcanvas";
  var DATA_KEY$3 = "bs.offcanvas";
  var EVENT_KEY$3 = `.${DATA_KEY$3}`;
  var DATA_API_KEY$1 = ".data-api";
  var EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  var ESCAPE_KEY = "Escape";
  var CLASS_NAME_SHOW$3 = "show";
  var CLASS_NAME_SHOWING$1 = "showing";
  var CLASS_NAME_HIDING = "hiding";
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
  var EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
  var EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
  var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
  var EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
  var EVENT_RESIZE = `resize${EVENT_KEY$3}`;
  var EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
  var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
  var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  var Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType$5 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  var Offcanvas = class _Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$5;
    }
    static get DefaultType() {
      return DefaultType$5;
    }
    static get NAME() {
      return NAME$6;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.classList.add(CLASS_NAME_SHOWING$1);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW$3);
        this._element.classList.remove(CLASS_NAME_SHOWING$1);
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === "static") {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };
      const isVisible2 = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible2,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible2 ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$3, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(element).position !== "fixed") {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  defineJQueryPlugin(Offcanvas);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  var uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
  var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
  var allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    }
    return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === "function") {
      return sanitizeFunction(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }
    return createdDocument.body.innerHTML;
  }
  var NAME$5 = "TemplateFactory";
  var Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
  };
  var DefaultType$4 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  };
  var DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };
  var TemplateFactory = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    }
    // Getters
    static get Default() {
      return Default$4;
    }
    static get DefaultType() {
      return DefaultType$4;
    }
    static get NAME() {
      return NAME$5;
    }
    // Public
    getContent() {
      return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(content) {
      this._checkContent(content);
      this._config.content = {
        ...this._config.content,
        ...content
      };
      return this;
    }
    toHtml() {
      const templateWrapper = document.createElement("div");
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }
      const template = templateWrapper.children[0];
      const extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        template.classList.add(...extraClass.split(" "));
      }
      return template;
    }
    // Private
    _typeCheckConfig(config) {
      super._typeCheckConfig(config);
      this._checkContent(config.content);
    }
    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }
    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement2(content)) {
        this._putElementInTemplate(getElement(content), templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this]);
    }
    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = "";
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  };
  var NAME$4 = "tooltip";
  var DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
  var CLASS_NAME_FADE$2 = "fade";
  var CLASS_NAME_MODAL = "modal";
  var CLASS_NAME_SHOW$2 = "show";
  var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
  var SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  var EVENT_MODAL_HIDE = "hide.bs.modal";
  var TRIGGER_HOVER = "hover";
  var TRIGGER_FOCUS = "focus";
  var TRIGGER_CLICK = "click";
  var TRIGGER_MANUAL = "manual";
  var EVENT_HIDE$2 = "hide";
  var EVENT_HIDDEN$2 = "hidden";
  var EVENT_SHOW$2 = "show";
  var EVENT_SHOWN$2 = "shown";
  var EVENT_INSERTED = "inserted";
  var EVENT_CLICK$1 = "click";
  var EVENT_FOCUSIN$1 = "focusin";
  var EVENT_FOCUSOUT$1 = "focusout";
  var EVENT_MOUSEENTER = "mouseenter";
  var EVENT_MOUSELEAVE = "mouseleave";
  var AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: isRTL() ? "right" : "left"
  };
  var Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: false,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  };
  var DefaultType$3 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };
  var Tooltip = class _Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof lib_exports === "undefined") {
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      }
      super(element, config);
      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null;
      this.tip = null;
      this._setListeners();
      if (!this._config.selector) {
        this._fixTitle();
      }
    }
    // Getters
    static get Default() {
      return Default$3;
    }
    static get DefaultType() {
      return DefaultType$3;
    }
    static get NAME() {
      return NAME$4;
    }
    // Public
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (!this._isEnabled) {
        return;
      }
      this._activeTrigger.click = !this._activeTrigger.click;
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      if (this._element.getAttribute("data-bs-original-title")) {
        this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
      }
      this._disposePopper();
      super.dispose();
    }
    show() {
      if (this._element.style.display === "none") {
        throw new Error("Please use show on visible elements");
      }
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }
      this._disposePopper();
      const tip = this._getTipElement();
      this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
      const {
        container
      } = this._config;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }
      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      const complete = () => {
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
        if (this._isHovered === false) {
          this._leave();
        }
        this._isHovered = false;
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
      if (hideEvent.defaultPrevented) {
        return;
      }
      const tip = this._getTipElement();
      tip.classList.remove(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null;
      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }
        if (!this._isHovered) {
          this._disposePopper();
        }
        this._element.removeAttribute("aria-describedby");
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
      if (this._popper) {
        this._popper.update();
      }
    }
    // Protected
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }
      return this.tip;
    }
    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml();
      if (!tip) {
        return null;
      }
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute("id", tipId);
      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }
      return tip;
    }
    setContent(content) {
      this._newContent = content;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory({
          ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }
      return this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    // Private
    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
      const placement = execute(this._config.placement, [this, tip, this._element]);
      const attachment = AttachmentMap[placement.toUpperCase()];
      return createPopper3(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
      const {
        offset: offset2
      } = this._config;
      if (typeof offset2 === "string") {
        return offset2.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset2 === "function") {
        return (popperData) => offset2(popperData, this._element);
      }
      return offset2;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this._element]);
    }
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "preSetPlacement",
          enabled: true,
          phase: "beforeMain",
          fn: (data) => {
            this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
          }
        }]
      };
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _setListeners() {
      const triggers = this._config.trigger.split(" ");
      for (const trigger of triggers) {
        if (trigger === "click") {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
          EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            context._leave();
          });
        }
      }
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
      const title = this._element.getAttribute("title");
      if (!title) {
        return;
      }
      if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
        this._element.setAttribute("aria-label", title);
      }
      this._element.setAttribute("data-bs-original-title", title);
      this._element.removeAttribute("title");
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true;
      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }
    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }
      this._isHovered = false;
      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = {
        ...dataAttributes,
        ...typeof config === "object" && config ? config : {}
      };
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);
      if (typeof config.delay === "number") {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === "number") {
        config.title = config.title.toString();
      }
      if (typeof config.content === "number") {
        config.content = config.content.toString();
      }
      return config;
    }
    _getDelegateConfig() {
      const config = {};
      for (const [key, value] of Object.entries(this._config)) {
        if (this.constructor.Default[key] !== value) {
          config[key] = value;
        }
      }
      config.selector = false;
      config.trigger = "manual";
      return config;
    }
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tooltip.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Tooltip);
  var NAME$3 = "popover";
  var SELECTOR_TITLE = ".popover-header";
  var SELECTOR_CONTENT = ".popover-body";
  var Default$2 = {
    ...Tooltip.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  };
  var DefaultType$2 = {
    ...Tooltip.DefaultType,
    content: "(null|string|element|function)"
  };
  var Popover = class _Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }
    static get DefaultType() {
      return DefaultType$2;
    }
    static get NAME() {
      return NAME$3;
    }
    // Overrides
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    // Private
    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Popover.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Popover);
  var NAME$2 = "scrollspy";
  var DATA_KEY$2 = "bs.scrollspy";
  var EVENT_KEY$2 = `.${DATA_KEY$2}`;
  var DATA_API_KEY = ".data-api";
  var EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  var EVENT_CLICK = `click${EVENT_KEY$2}`;
  var EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
  var CLASS_NAME_ACTIVE$1 = "active";
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_TARGET_LINKS = "[href]";
  var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
  var SELECTOR_NAV_LINKS = ".nav-link";
  var SELECTOR_NAV_ITEMS = ".nav-item";
  var SELECTOR_LIST_ITEMS = ".list-group-item";
  var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  var SELECTOR_DROPDOWN = ".dropdown";
  var SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
  var Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  var DefaultType$1 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  var ScrollSpy = class _ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    // Getters
    static get Default() {
      return Default$1;
    }
    static get DefaultType() {
      return DefaultType$1;
    }
    static get NAME() {
      return NAME$2;
    }
    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.target = getElement(config.target) || document.body;
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === "string") {
        config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }
      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: "smooth"
            });
            return;
          }
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((entries) => this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
      const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
      const activate = (entry) => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          if (!parentScrollTop) {
            return;
          }
          continue;
        }
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);
      this._activateParents(target);
      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
    _activateParents(target) {
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
      }
      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$1);
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  defineJQueryPlugin(ScrollSpy);
  var NAME$1 = "tab";
  var DATA_KEY$1 = "bs.tab";
  var EVENT_KEY$1 = `.${DATA_KEY$1}`;
  var EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  var EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  var EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  var EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  var EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
  var EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
  var ARROW_LEFT_KEY = "ArrowLeft";
  var ARROW_RIGHT_KEY = "ArrowRight";
  var ARROW_UP_KEY = "ArrowUp";
  var ARROW_DOWN_KEY = "ArrowDown";
  var HOME_KEY = "Home";
  var END_KEY = "End";
  var CLASS_NAME_ACTIVE = "active";
  var CLASS_NAME_FADE$1 = "fade";
  var CLASS_NAME_SHOW$1 = "show";
  var CLASS_DROPDOWN = "dropdown";
  var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = ".nav-item, .list-group-item";
  var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
  var Tab = class _Tab extends BaseComponent {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      EventHandler.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME$1;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      this._activate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();
      this._deactivate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        _Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((child) => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, "role", "tablist");
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute("aria-selected", isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, "role", "presentation");
      }
      if (!isActive) {
        child.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(child, "role", "tab");
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = SelectorEngine.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, "role", "tabpanel");
      if (child.id) {
        this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element2 = SelectorEngine.findOne(selector, outerElem);
        if (element2) {
          element2.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tab.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);
  var NAME = "toast";
  var DATA_KEY = "bs.toast";
  var EVENT_KEY = `.${DATA_KEY}`;
  var EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  var EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  var EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  var EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  var EVENT_HIDE = `hide${EVENT_KEY}`;
  var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  var EVENT_SHOW = `show${EVENT_KEY}`;
  var EVENT_SHOWN = `shown${EVENT_KEY}`;
  var CLASS_NAME_FADE = "fade";
  var CLASS_NAME_HIDE = "hide";
  var CLASS_NAME_SHOW = "show";
  var CLASS_NAME_SHOWING = "showing";
  var DefaultType = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  };
  var Default = {
    animation: true,
    autohide: true,
    delay: 5e3
  };
  var Toast = class _Toast extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;
      this._setListeners();
    }
    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }
    // Public
    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._clearTimeout();
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(this._element, EVENT_SHOWN);
        this._maybeScheduleHide();
      };
      this._element.classList.remove(CLASS_NAME_HIDE);
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE);
        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.classList.add(CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout();
      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
      super.dispose();
    }
    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    }
    // Private
    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }
      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }
      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case "mouseover":
        case "mouseout": {
          this._hasMouseInteraction = isInteracting;
          break;
        }
        case "focusin":
        case "focusout": {
          this._hasKeyboardInteraction = isInteracting;
          break;
        }
      }
      if (isInteracting) {
        this._clearTimeout();
        return;
      }
      const nextElement = event.relatedTarget;
      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }
      this._maybeScheduleHide();
    }
    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Toast.getOrCreateInstance(this, config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config](this);
        }
      });
    }
  };
  enableDismissTrigger(Toast);
  defineJQueryPlugin(Toast);

  // node_modules/trix/dist/trix.esm.min.js
  var t = "2.0.8";
  var e = "[data-trix-attachment]";
  var i = { preview: { presentation: "gallery", caption: { name: true, size: true } }, file: { caption: { size: true } } };
  var n = { default: { tagName: "div", parse: false }, quote: { tagName: "blockquote", nestable: true }, heading1: { tagName: "h1", terminal: true, breakOnReturn: true, group: false }, code: { tagName: "pre", terminal: true, text: { plaintext: true } }, bulletList: { tagName: "ul", parse: false }, bullet: { tagName: "li", listAttribute: "bulletList", group: false, nestable: true, test(t2) {
    return r(t2.parentNode) === n[this.listAttribute].tagName;
  } }, numberList: { tagName: "ol", parse: false }, number: { tagName: "li", listAttribute: "numberList", group: false, nestable: true, test(t2) {
    return r(t2.parentNode) === n[this.listAttribute].tagName;
  } }, attachmentGallery: { tagName: "div", exclusive: true, terminal: true, parse: false, group: false } };
  var r = (t2) => {
    var e2;
    return null == t2 || null === (e2 = t2.tagName) || void 0 === e2 ? void 0 : e2.toLowerCase();
  };
  var o = navigator.userAgent.match(/android\s([0-9]+.*Chrome)/i);
  var s = o && parseInt(o[1]);
  var a = { composesExistingText: /Android.*Chrome/.test(navigator.userAgent), recentAndroid: s && s > 12, samsungAndroid: s && navigator.userAgent.match(/Android.*SM-/), forcesObjectResizing: /Trident.*rv:11/.test(navigator.userAgent), supportsInputEvents: "undefined" != typeof InputEvent && ["data", "getTargetRanges", "inputType"].every((t2) => t2 in InputEvent.prototype) };
  var l = { attachFiles: "Attach Files", bold: "Bold", bullets: "Bullets", byte: "Byte", bytes: "Bytes", captionPlaceholder: "Add a caption\u2026", code: "Code", heading1: "Heading", indent: "Increase Level", italic: "Italic", link: "Link", numbers: "Numbers", outdent: "Decrease Level", quote: "Quote", redo: "Redo", remove: "Remove", strike: "Strikethrough", undo: "Undo", unlink: "Unlink", url: "URL", urlPlaceholder: "Enter a URL\u2026", GB: "GB", KB: "KB", MB: "MB", PB: "PB", TB: "TB" };
  var c = [l.bytes, l.KB, l.MB, l.GB, l.TB, l.PB];
  var h = { prefix: "IEC", precision: 2, formatter(t2) {
    switch (t2) {
      case 0:
        return "0 ".concat(l.bytes);
      case 1:
        return "1 ".concat(l.byte);
      default:
        let e2;
        "SI" === this.prefix ? e2 = 1e3 : "IEC" === this.prefix && (e2 = 1024);
        const i2 = Math.floor(Math.log(t2) / Math.log(e2)), n2 = (t2 / Math.pow(e2, i2)).toFixed(this.precision).replace(/0*$/, "").replace(/\.$/, "");
        return "".concat(n2, " ").concat(c[i2]);
    }
  } };
  var u = "\uFEFF";
  var d = "\xA0";
  var g = function(t2) {
    for (const e2 in t2) {
      const i2 = t2[e2];
      this[e2] = i2;
    }
    return this;
  };
  var m = document.documentElement;
  var p = m.matches;
  var f = function(t2) {
    let { onElement: e2, matchingSelector: i2, withCallback: n2, inPhase: r2, preventDefault: o2, times: s2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const a2 = e2 || m, l2 = i2, c2 = "capturing" === r2, h2 = function(t3) {
      null != s2 && 0 == --s2 && h2.destroy();
      const e3 = A(t3.target, { matchingSelector: l2 });
      null != e3 && (null == n2 || n2.call(e3, t3, e3), o2 && t3.preventDefault());
    };
    return h2.destroy = () => a2.removeEventListener(t2, h2, c2), a2.addEventListener(t2, h2, c2), h2;
  };
  var b = function(t2) {
    let { onElement: e2, bubbles: i2, cancelable: n2, attributes: r2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const o2 = null != e2 ? e2 : m;
    i2 = false !== i2, n2 = false !== n2;
    const s2 = document.createEvent("Events");
    return s2.initEvent(t2, i2, n2), null != r2 && g.call(s2, r2), o2.dispatchEvent(s2);
  };
  var v = function(t2, e2) {
    if (1 === (null == t2 ? void 0 : t2.nodeType))
      return p.call(t2, e2);
  };
  var A = function(t2) {
    let { matchingSelector: e2, untilNode: i2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    for (; t2 && t2.nodeType !== Node.ELEMENT_NODE; )
      t2 = t2.parentNode;
    if (null != t2) {
      if (null == e2)
        return t2;
      if (t2.closest && null == i2)
        return t2.closest(e2);
      for (; t2 && t2 !== i2; ) {
        if (v(t2, e2))
          return t2;
        t2 = t2.parentNode;
      }
    }
  };
  var x = (t2) => document.activeElement !== t2 && y(t2, document.activeElement);
  var y = function(t2, e2) {
    if (t2 && e2)
      for (; e2; ) {
        if (e2 === t2)
          return true;
        e2 = e2.parentNode;
      }
  };
  var C = function(t2) {
    var e2;
    if (null === (e2 = t2) || void 0 === e2 || !e2.parentNode)
      return;
    let i2 = 0;
    for (t2 = t2.previousSibling; t2; )
      i2++, t2 = t2.previousSibling;
    return i2;
  };
  var R = (t2) => {
    var e2;
    return null == t2 || null === (e2 = t2.parentNode) || void 0 === e2 ? void 0 : e2.removeChild(t2);
  };
  var S = function(t2) {
    let { onlyNodesOfType: e2, usingFilter: i2, expandEntityReferences: n2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const r2 = (() => {
      switch (e2) {
        case "element":
          return NodeFilter.SHOW_ELEMENT;
        case "text":
          return NodeFilter.SHOW_TEXT;
        case "comment":
          return NodeFilter.SHOW_COMMENT;
        default:
          return NodeFilter.SHOW_ALL;
      }
    })();
    return document.createTreeWalker(t2, r2, null != i2 ? i2 : null, true === n2);
  };
  var E = (t2) => {
    var e2;
    return null == t2 || null === (e2 = t2.tagName) || void 0 === e2 ? void 0 : e2.toLowerCase();
  };
  var k = function(t2) {
    let e2, i2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    "object" == typeof t2 ? (n2 = t2, t2 = n2.tagName) : n2 = { attributes: n2 };
    const r2 = document.createElement(t2);
    if (null != n2.editable && (null == n2.attributes && (n2.attributes = {}), n2.attributes.contenteditable = n2.editable), n2.attributes)
      for (e2 in n2.attributes)
        i2 = n2.attributes[e2], r2.setAttribute(e2, i2);
    if (n2.style)
      for (e2 in n2.style)
        i2 = n2.style[e2], r2.style[e2] = i2;
    if (n2.data)
      for (e2 in n2.data)
        i2 = n2.data[e2], r2.dataset[e2] = i2;
    return n2.className && n2.className.split(" ").forEach((t3) => {
      r2.classList.add(t3);
    }), n2.textContent && (r2.textContent = n2.textContent), n2.childNodes && [].concat(n2.childNodes).forEach((t3) => {
      r2.appendChild(t3);
    }), r2;
  };
  var L;
  var D = function() {
    if (null != L)
      return L;
    L = [];
    for (const t2 in n) {
      const e2 = n[t2];
      e2.tagName && L.push(e2.tagName);
    }
    return L;
  };
  var w = (t2) => B(null == t2 ? void 0 : t2.firstChild);
  var T = function(t2) {
    let { strict: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { strict: true };
    return e2 ? B(t2) : B(t2) || !B(t2.firstChild) && function(t3) {
      return D().includes(E(t3)) && !D().includes(E(t3.firstChild));
    }(t2);
  };
  var B = (t2) => F(t2) && "block" === (null == t2 ? void 0 : t2.data);
  var F = (t2) => (null == t2 ? void 0 : t2.nodeType) === Node.COMMENT_NODE;
  var I = function(t2) {
    let { name: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (t2)
      return O(t2) ? t2.data === u ? !e2 || t2.parentNode.dataset.trixCursorTarget === e2 : void 0 : I(t2.firstChild);
  };
  var P = (t2) => v(t2, e);
  var N = (t2) => O(t2) && "" === (null == t2 ? void 0 : t2.data);
  var O = (t2) => (null == t2 ? void 0 : t2.nodeType) === Node.TEXT_NODE;
  var M = { level2Enabled: true, getLevel() {
    return this.level2Enabled && a.supportsInputEvents ? 2 : 0;
  }, pickFiles(t2) {
    const e2 = k("input", { type: "file", multiple: true, hidden: true, id: this.fileInputId });
    e2.addEventListener("change", () => {
      t2(e2.files), R(e2);
    }), R(document.getElementById(this.fileInputId)), document.body.appendChild(e2), e2.click();
  } };
  var j = { removeBlankTableCells: false, tableCellSeparator: " | ", tableRowSeparator: "\n" };
  var W = { bold: { tagName: "strong", inheritable: true, parser(t2) {
    const e2 = window.getComputedStyle(t2);
    return "bold" === e2.fontWeight || e2.fontWeight >= 600;
  } }, italic: { tagName: "em", inheritable: true, parser: (t2) => "italic" === window.getComputedStyle(t2).fontStyle }, href: { groupTagName: "a", parser(t2) {
    const i2 = "a:not(".concat(e, ")"), n2 = t2.closest(i2);
    if (n2)
      return n2.getAttribute("href");
  } }, strike: { tagName: "del", inheritable: true }, frozen: { style: { backgroundColor: "highlight" } } };
  var U = { getDefaultHTML: () => '<div class="trix-button-row">\n      <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="'.concat(l.bold, '" tabindex="-1">').concat(l.bold, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="').concat(l.italic, '" tabindex="-1">').concat(l.italic, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="').concat(l.strike, '" tabindex="-1">').concat(l.strike, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="').concat(l.link, '" tabindex="-1">').concat(l.link, '</button>\n      </span>\n\n      <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="').concat(l.heading1, '" tabindex="-1">').concat(l.heading1, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="').concat(l.quote, '" tabindex="-1">').concat(l.quote, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="').concat(l.code, '" tabindex="-1">').concat(l.code, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="').concat(l.bullets, '" tabindex="-1">').concat(l.bullets, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="').concat(l.numbers, '" tabindex="-1">').concat(l.numbers, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="').concat(l.outdent, '" tabindex="-1">').concat(l.outdent, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="').concat(l.indent, '" tabindex="-1">').concat(l.indent, '</button>\n      </span>\n\n      <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="').concat(l.attachFiles, '" tabindex="-1">').concat(l.attachFiles, '</button>\n      </span>\n\n      <span class="trix-button-group-spacer"></span>\n\n      <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="').concat(l.undo, '" tabindex="-1">').concat(l.undo, '</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="').concat(l.redo, '" tabindex="-1">').concat(l.redo, '</button>\n      </span>\n    </div>\n\n    <div class="trix-dialogs" data-trix-dialogs>\n      <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n        <div class="trix-dialog__link-fields">\n          <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="').concat(l.urlPlaceholder, '" aria-label="').concat(l.url, '" required data-trix-input>\n          <div class="trix-button-group">\n            <input type="button" class="trix-button trix-button--dialog" value="').concat(l.link, '" data-trix-method="setAttribute">\n            <input type="button" class="trix-button trix-button--dialog" value="').concat(l.unlink, '" data-trix-method="removeAttribute">\n          </div>\n        </div>\n      </div>\n    </div>') };
  var q = { interval: 5e3 };
  var V = Object.freeze({ __proto__: null, attachments: i, blockAttributes: n, browser: a, css: { attachment: "attachment", attachmentCaption: "attachment__caption", attachmentCaptionEditor: "attachment__caption-editor", attachmentMetadata: "attachment__metadata", attachmentMetadataContainer: "attachment__metadata-container", attachmentName: "attachment__name", attachmentProgress: "attachment__progress", attachmentSize: "attachment__size", attachmentToolbar: "attachment__toolbar", attachmentGallery: "attachment-gallery" }, fileSize: h, input: M, keyNames: { 8: "backspace", 9: "tab", 13: "return", 27: "escape", 37: "left", 39: "right", 46: "delete", 68: "d", 72: "h", 79: "o" }, lang: l, parser: j, textAttributes: W, toolbar: U, undo: q });
  var z = class {
    static proxyMethod(t2) {
      const { name: e2, toMethod: i2, toProperty: n2, optional: r2 } = _(t2);
      this.prototype[e2] = function() {
        let t3, o2;
        var s2, a2;
        i2 ? o2 = r2 ? null === (s2 = this[i2]) || void 0 === s2 ? void 0 : s2.call(this) : this[i2]() : n2 && (o2 = this[n2]);
        return r2 ? (t3 = null === (a2 = o2) || void 0 === a2 ? void 0 : a2[e2], t3 ? H.call(t3, o2, arguments) : void 0) : (t3 = o2[e2], H.call(t3, o2, arguments));
      };
    }
  };
  var _ = function(t2) {
    const e2 = t2.match(J);
    if (!e2)
      throw new Error("can't parse @proxyMethod expression: ".concat(t2));
    const i2 = { name: e2[4] };
    return null != e2[2] ? i2.toMethod = e2[1] : i2.toProperty = e2[1], null != e2[3] && (i2.optional = true), i2;
  };
  var { apply: H } = Function.prototype;
  var J = new RegExp("^(.+?)(\\(\\))?(\\?)?\\.(.+?)$");
  var K;
  var G;
  var $2;
  var X = class extends z {
    static box() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return t2 instanceof this ? t2 : this.fromUCS2String(null == t2 ? void 0 : t2.toString());
    }
    static fromUCS2String(t2) {
      return new this(t2, tt(t2));
    }
    static fromCodepoints(t2) {
      return new this(et(t2), t2);
    }
    constructor(t2, e2) {
      super(...arguments), this.ucs2String = t2, this.codepoints = e2, this.length = this.codepoints.length, this.ucs2Length = this.ucs2String.length;
    }
    offsetToUCS2Offset(t2) {
      return et(this.codepoints.slice(0, Math.max(0, t2))).length;
    }
    offsetFromUCS2Offset(t2) {
      return tt(this.ucs2String.slice(0, Math.max(0, t2))).length;
    }
    slice() {
      return this.constructor.fromCodepoints(this.codepoints.slice(...arguments));
    }
    charAt(t2) {
      return this.slice(t2, t2 + 1);
    }
    isEqualTo(t2) {
      return this.constructor.box(t2).ucs2String === this.ucs2String;
    }
    toJSON() {
      return this.ucs2String;
    }
    getCacheKey() {
      return this.ucs2String;
    }
    toString() {
      return this.ucs2String;
    }
  };
  var Y = 1 === (null === (K = Array.from) || void 0 === K ? void 0 : K.call(Array, "\u{1F47C}").length);
  var Q = null != (null === (G = " ".codePointAt) || void 0 === G ? void 0 : G.call(" ", 0));
  var Z = " \u{1F47C}" === (null === ($2 = String.fromCodePoint) || void 0 === $2 ? void 0 : $2.call(String, 32, 128124));
  var tt;
  var et;
  tt = Y && Q ? (t2) => Array.from(t2).map((t3) => t3.codePointAt(0)) : function(t2) {
    const e2 = [];
    let i2 = 0;
    const { length: n2 } = t2;
    for (; i2 < n2; ) {
      let r2 = t2.charCodeAt(i2++);
      if (55296 <= r2 && r2 <= 56319 && i2 < n2) {
        const e3 = t2.charCodeAt(i2++);
        56320 == (64512 & e3) ? r2 = ((1023 & r2) << 10) + (1023 & e3) + 65536 : i2--;
      }
      e2.push(r2);
    }
    return e2;
  }, et = Z ? (t2) => String.fromCodePoint(...Array.from(t2 || [])) : function(t2) {
    return (() => {
      const e2 = [];
      return Array.from(t2).forEach((t3) => {
        let i2 = "";
        t3 > 65535 && (t3 -= 65536, i2 += String.fromCharCode(t3 >>> 10 & 1023 | 55296), t3 = 56320 | 1023 & t3), e2.push(i2 + String.fromCharCode(t3));
      }), e2;
    })().join("");
  };
  var it = 0;
  var nt = class extends z {
    static fromJSONString(t2) {
      return this.fromJSON(JSON.parse(t2));
    }
    constructor() {
      super(...arguments), this.id = ++it;
    }
    hasSameConstructorAs(t2) {
      return this.constructor === (null == t2 ? void 0 : t2.constructor);
    }
    isEqualTo(t2) {
      return this === t2;
    }
    inspect() {
      const t2 = [], e2 = this.contentsForInspection() || {};
      for (const i2 in e2) {
        const n2 = e2[i2];
        t2.push("".concat(i2, "=").concat(n2));
      }
      return "#<".concat(this.constructor.name, ":").concat(this.id).concat(t2.length ? " ".concat(t2.join(", ")) : "", ">");
    }
    contentsForInspection() {
    }
    toJSONString() {
      return JSON.stringify(this);
    }
    toUTF16String() {
      return X.box(this);
    }
    getCacheKey() {
      return this.id.toString();
    }
  };
  var rt = function() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (t2.length !== e2.length)
      return false;
    for (let i2 = 0; i2 < t2.length; i2++) {
      if (t2[i2] !== e2[i2])
        return false;
    }
    return true;
  };
  var ot = function(t2) {
    const e2 = t2.slice(0);
    for (var i2 = arguments.length, n2 = new Array(i2 > 1 ? i2 - 1 : 0), r2 = 1; r2 < i2; r2++)
      n2[r2 - 1] = arguments[r2];
    return e2.splice(...n2), e2;
  };
  var st = /[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/;
  var at = function() {
    const t2 = k("input", { dir: "auto", name: "x", dirName: "x.dir" }), e2 = k("textarea", { dir: "auto", name: "y", dirName: "y.dir" }), i2 = k("form");
    i2.appendChild(t2), i2.appendChild(e2);
    const n2 = function() {
      try {
        return new FormData(i2).has(e2.dirName);
      } catch (t3) {
        return false;
      }
    }(), r2 = function() {
      try {
        return t2.matches(":dir(ltr),:dir(rtl)");
      } catch (t3) {
        return false;
      }
    }();
    return n2 ? function(t3) {
      return e2.value = t3, new FormData(i2).get(e2.dirName);
    } : r2 ? function(e3) {
      return t2.value = e3, t2.matches(":dir(rtl)") ? "rtl" : "ltr";
    } : function(t3) {
      const e3 = t3.trim().charAt(0);
      return st.test(e3) ? "rtl" : "ltr";
    };
  }();
  var lt = null;
  var ct = null;
  var ht = null;
  var ut = null;
  var dt = () => (lt || (lt = ft().concat(mt())), lt);
  var gt = (t2) => n[t2];
  var mt = () => (ct || (ct = Object.keys(n)), ct);
  var pt = (t2) => W[t2];
  var ft = () => (ht || (ht = Object.keys(W)), ht);
  var bt = function(t2, e2) {
    vt(t2).textContent = e2.replace(/%t/g, t2);
  };
  var vt = function(t2) {
    const e2 = document.createElement("style");
    e2.setAttribute("type", "text/css"), e2.setAttribute("data-tag-name", t2.toLowerCase());
    const i2 = At();
    return i2 && e2.setAttribute("nonce", i2), document.head.insertBefore(e2, document.head.firstChild), e2;
  };
  var At = function() {
    const t2 = xt("trix-csp-nonce") || xt("csp-nonce");
    if (t2)
      return t2.getAttribute("content");
  };
  var xt = (t2) => document.head.querySelector("meta[name=".concat(t2, "]"));
  var yt = { "application/x-trix-feature-detection": "test" };
  var Ct = function(t2) {
    const e2 = t2.getData("text/plain"), i2 = t2.getData("text/html");
    if (!e2 || !i2)
      return null == e2 ? void 0 : e2.length;
    {
      const { body: t3 } = new DOMParser().parseFromString(i2, "text/html");
      if (t3.textContent === e2)
        return !t3.querySelector("*");
    }
  };
  var Rt = /Mac|^iP/.test(navigator.platform) ? (t2) => t2.metaKey : (t2) => t2.ctrlKey;
  var St = (t2) => setTimeout(t2, 1);
  var Et = function() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e2 = {};
    for (const i2 in t2) {
      const n2 = t2[i2];
      e2[i2] = n2;
    }
    return e2;
  };
  var kt = function() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (Object.keys(t2).length !== Object.keys(e2).length)
      return false;
    for (const i2 in t2) {
      if (t2[i2] !== e2[i2])
        return false;
    }
    return true;
  };
  var Lt = function(t2) {
    if (null != t2)
      return Array.isArray(t2) || (t2 = [t2, t2]), [Tt(t2[0]), Tt(null != t2[1] ? t2[1] : t2[0])];
  };
  var Dt = function(t2) {
    if (null == t2)
      return;
    const [e2, i2] = Lt(t2);
    return Bt(e2, i2);
  };
  var wt = function(t2, e2) {
    if (null == t2 || null == e2)
      return;
    const [i2, n2] = Lt(t2), [r2, o2] = Lt(e2);
    return Bt(i2, r2) && Bt(n2, o2);
  };
  var Tt = function(t2) {
    return "number" == typeof t2 ? t2 : Et(t2);
  };
  var Bt = function(t2, e2) {
    return "number" == typeof t2 ? t2 === e2 : kt(t2, e2);
  };
  var Ft = class extends z {
    constructor() {
      super(...arguments), this.update = this.update.bind(this), this.selectionManagers = [];
    }
    start() {
      this.started || (this.started = true, document.addEventListener("selectionchange", this.update, true));
    }
    stop() {
      if (this.started)
        return this.started = false, document.removeEventListener("selectionchange", this.update, true);
    }
    registerSelectionManager(t2) {
      if (!this.selectionManagers.includes(t2))
        return this.selectionManagers.push(t2), this.start();
    }
    unregisterSelectionManager(t2) {
      if (this.selectionManagers = this.selectionManagers.filter((e2) => e2 !== t2), 0 === this.selectionManagers.length)
        return this.stop();
    }
    notifySelectionManagersOfSelectionChange() {
      return this.selectionManagers.map((t2) => t2.selectionDidChange());
    }
    update() {
      this.notifySelectionManagersOfSelectionChange();
    }
    reset() {
      this.update();
    }
  };
  var It = new Ft();
  var Pt = function() {
    const t2 = window.getSelection();
    if (t2.rangeCount > 0)
      return t2;
  };
  var Nt = function() {
    var t2;
    const e2 = null === (t2 = Pt()) || void 0 === t2 ? void 0 : t2.getRangeAt(0);
    if (e2 && !Mt(e2))
      return e2;
  };
  var Ot = function(t2) {
    const e2 = window.getSelection();
    return e2.removeAllRanges(), e2.addRange(t2), It.update();
  };
  var Mt = (t2) => jt(t2.startContainer) || jt(t2.endContainer);
  var jt = (t2) => !Object.getPrototypeOf(t2);
  var Wt = (t2) => t2.replace(new RegExp("".concat(u), "g"), "").replace(new RegExp("".concat(d), "g"), " ");
  var Ut = new RegExp("[^\\S".concat(d, "]"));
  var qt = (t2) => t2.replace(new RegExp("".concat(Ut.source), "g"), " ").replace(/\ {2,}/g, " ");
  var Vt = function(t2, e2) {
    if (t2.isEqualTo(e2))
      return ["", ""];
    const i2 = zt(t2, e2), { length: n2 } = i2.utf16String;
    let r2;
    if (n2) {
      const { offset: o2 } = i2, s2 = t2.codepoints.slice(0, o2).concat(t2.codepoints.slice(o2 + n2));
      r2 = zt(e2, X.fromCodepoints(s2));
    } else
      r2 = zt(e2, t2);
    return [i2.utf16String.toString(), r2.utf16String.toString()];
  };
  var zt = function(t2, e2) {
    let i2 = 0, n2 = t2.length, r2 = e2.length;
    for (; i2 < n2 && t2.charAt(i2).isEqualTo(e2.charAt(i2)); )
      i2++;
    for (; n2 > i2 + 1 && t2.charAt(n2 - 1).isEqualTo(e2.charAt(r2 - 1)); )
      n2--, r2--;
    return { utf16String: t2.slice(i2, n2), offset: i2 };
  };
  var _t = class __t extends nt {
    static fromCommonAttributesOfObjects() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      if (!t2.length)
        return new this();
      let e2 = Gt(t2[0]), i2 = e2.getKeys();
      return t2.slice(1).forEach((t3) => {
        i2 = e2.getKeysCommonToHash(Gt(t3)), e2 = e2.slice(i2);
      }), e2;
    }
    static box(t2) {
      return Gt(t2);
    }
    constructor() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      super(...arguments), this.values = Kt(t2);
    }
    add(t2, e2) {
      return this.merge(Ht(t2, e2));
    }
    remove(t2) {
      return new __t(Kt(this.values, t2));
    }
    get(t2) {
      return this.values[t2];
    }
    has(t2) {
      return t2 in this.values;
    }
    merge(t2) {
      return new __t(Jt(this.values, $t(t2)));
    }
    slice(t2) {
      const e2 = {};
      return Array.from(t2).forEach((t3) => {
        this.has(t3) && (e2[t3] = this.values[t3]);
      }), new __t(e2);
    }
    getKeys() {
      return Object.keys(this.values);
    }
    getKeysCommonToHash(t2) {
      return t2 = Gt(t2), this.getKeys().filter((e2) => this.values[e2] === t2.values[e2]);
    }
    isEqualTo(t2) {
      return rt(this.toArray(), Gt(t2).toArray());
    }
    isEmpty() {
      return 0 === this.getKeys().length;
    }
    toArray() {
      if (!this.array) {
        const t2 = [];
        for (const e2 in this.values) {
          const i2 = this.values[e2];
          t2.push(t2.push(e2, i2));
        }
        this.array = t2.slice(0);
      }
      return this.array;
    }
    toObject() {
      return Kt(this.values);
    }
    toJSON() {
      return this.toObject();
    }
    contentsForInspection() {
      return { values: JSON.stringify(this.values) };
    }
  };
  var Ht = function(t2, e2) {
    const i2 = {};
    return i2[t2] = e2, i2;
  };
  var Jt = function(t2, e2) {
    const i2 = Kt(t2);
    for (const t3 in e2) {
      const n2 = e2[t3];
      i2[t3] = n2;
    }
    return i2;
  };
  var Kt = function(t2, e2) {
    const i2 = {};
    return Object.keys(t2).sort().forEach((n2) => {
      n2 !== e2 && (i2[n2] = t2[n2]);
    }), i2;
  };
  var Gt = function(t2) {
    return t2 instanceof _t ? t2 : new _t(t2);
  };
  var $t = function(t2) {
    return t2 instanceof _t ? t2.values : t2;
  };
  var Xt = class {
    static groupObjects() {
      let t2, e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], { depth: i2, asTree: n2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      n2 && null == i2 && (i2 = 0);
      const r2 = [];
      return Array.from(e2).forEach((e3) => {
        var o2;
        if (t2) {
          var s2, a2, l2;
          if (null !== (s2 = e3.canBeGrouped) && void 0 !== s2 && s2.call(e3, i2) && null !== (a2 = (l2 = t2[t2.length - 1]).canBeGroupedWith) && void 0 !== a2 && a2.call(l2, e3, i2))
            return void t2.push(e3);
          r2.push(new this(t2, { depth: i2, asTree: n2 })), t2 = null;
        }
        null !== (o2 = e3.canBeGrouped) && void 0 !== o2 && o2.call(e3, i2) ? t2 = [e3] : r2.push(e3);
      }), t2 && r2.push(new this(t2, { depth: i2, asTree: n2 })), r2;
    }
    constructor() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], { depth: e2, asTree: i2 } = arguments.length > 1 ? arguments[1] : void 0;
      this.objects = t2, i2 && (this.depth = e2, this.objects = this.constructor.groupObjects(this.objects, { asTree: i2, depth: this.depth + 1 }));
    }
    getObjects() {
      return this.objects;
    }
    getDepth() {
      return this.depth;
    }
    getCacheKey() {
      const t2 = ["objectGroup"];
      return Array.from(this.getObjects()).forEach((e2) => {
        t2.push(e2.getCacheKey());
      }), t2.join("/");
    }
  };
  var Yt = class extends z {
    constructor() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      super(...arguments), this.objects = {}, Array.from(t2).forEach((t3) => {
        const e2 = JSON.stringify(t3);
        null == this.objects[e2] && (this.objects[e2] = t3);
      });
    }
    find(t2) {
      const e2 = JSON.stringify(t2);
      return this.objects[e2];
    }
  };
  var Qt = class {
    constructor(t2) {
      this.reset(t2);
    }
    add(t2) {
      const e2 = Zt(t2);
      this.elements[e2] = t2;
    }
    remove(t2) {
      const e2 = Zt(t2), i2 = this.elements[e2];
      if (i2)
        return delete this.elements[e2], i2;
    }
    reset() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return this.elements = {}, Array.from(t2).forEach((t3) => {
        this.add(t3);
      }), t2;
    }
  };
  var Zt = (t2) => t2.dataset.trixStoreKey;
  var te = class extends z {
    isPerforming() {
      return true === this.performing;
    }
    hasPerformed() {
      return true === this.performed;
    }
    hasSucceeded() {
      return this.performed && this.succeeded;
    }
    hasFailed() {
      return this.performed && !this.succeeded;
    }
    getPromise() {
      return this.promise || (this.promise = new Promise((t2, e2) => (this.performing = true, this.perform((i2, n2) => {
        this.succeeded = i2, this.performing = false, this.performed = true, this.succeeded ? t2(n2) : e2(n2);
      })))), this.promise;
    }
    perform(t2) {
      return t2(false);
    }
    release() {
      var t2, e2;
      null === (t2 = this.promise) || void 0 === t2 || null === (e2 = t2.cancel) || void 0 === e2 || e2.call(t2), this.promise = null, this.performing = null, this.performed = null, this.succeeded = null;
    }
  };
  te.proxyMethod("getPromise().then"), te.proxyMethod("getPromise().catch");
  var ee = class extends z {
    constructor(t2) {
      let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      super(...arguments), this.object = t2, this.options = e2, this.childViews = [], this.rootView = this;
    }
    getNodes() {
      return this.nodes || (this.nodes = this.createNodes()), this.nodes.map((t2) => t2.cloneNode(true));
    }
    invalidate() {
      var t2;
      return this.nodes = null, this.childViews = [], null === (t2 = this.parentView) || void 0 === t2 ? void 0 : t2.invalidate();
    }
    invalidateViewForObject(t2) {
      var e2;
      return null === (e2 = this.findViewForObject(t2)) || void 0 === e2 ? void 0 : e2.invalidate();
    }
    findOrCreateCachedChildView(t2, e2, i2) {
      let n2 = this.getCachedViewForObject(e2);
      return n2 ? this.recordChildView(n2) : (n2 = this.createChildView(...arguments), this.cacheViewForObject(n2, e2)), n2;
    }
    createChildView(t2, e2) {
      let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      e2 instanceof Xt && (i2.viewClass = t2, t2 = ie);
      const n2 = new t2(e2, i2);
      return this.recordChildView(n2);
    }
    recordChildView(t2) {
      return t2.parentView = this, t2.rootView = this.rootView, this.childViews.push(t2), t2;
    }
    getAllChildViews() {
      let t2 = [];
      return this.childViews.forEach((e2) => {
        t2.push(e2), t2 = t2.concat(e2.getAllChildViews());
      }), t2;
    }
    findElement() {
      return this.findElementForObject(this.object);
    }
    findElementForObject(t2) {
      const e2 = null == t2 ? void 0 : t2.id;
      if (e2)
        return this.rootView.element.querySelector("[data-trix-id='".concat(e2, "']"));
    }
    findViewForObject(t2) {
      for (const e2 of this.getAllChildViews())
        if (e2.object === t2)
          return e2;
    }
    getViewCache() {
      return this.rootView !== this ? this.rootView.getViewCache() : this.isViewCachingEnabled() ? (this.viewCache || (this.viewCache = {}), this.viewCache) : void 0;
    }
    isViewCachingEnabled() {
      return false !== this.shouldCacheViews;
    }
    enableViewCaching() {
      this.shouldCacheViews = true;
    }
    disableViewCaching() {
      this.shouldCacheViews = false;
    }
    getCachedViewForObject(t2) {
      var e2;
      return null === (e2 = this.getViewCache()) || void 0 === e2 ? void 0 : e2[t2.getCacheKey()];
    }
    cacheViewForObject(t2, e2) {
      const i2 = this.getViewCache();
      i2 && (i2[e2.getCacheKey()] = t2);
    }
    garbageCollectCachedViews() {
      const t2 = this.getViewCache();
      if (t2) {
        const e2 = this.getAllChildViews().concat(this).map((t3) => t3.object.getCacheKey());
        for (const i2 in t2)
          e2.includes(i2) || delete t2[i2];
      }
    }
  };
  var ie = class extends ee {
    constructor() {
      super(...arguments), this.objectGroup = this.object, this.viewClass = this.options.viewClass, delete this.options.viewClass;
    }
    getChildViews() {
      return this.childViews.length || Array.from(this.objectGroup.getObjects()).forEach((t2) => {
        this.findOrCreateCachedChildView(this.viewClass, t2, this.options);
      }), this.childViews;
    }
    createNodes() {
      const t2 = this.createContainerElement();
      return this.getChildViews().forEach((e2) => {
        Array.from(e2.getNodes()).forEach((e3) => {
          t2.appendChild(e3);
        });
      }), [t2];
    }
    createContainerElement() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.objectGroup.getDepth();
      return this.getChildViews()[0].createContainerElement(t2);
    }
  };
  var { css: ne } = V;
  var re = class extends ee {
    constructor() {
      super(...arguments), this.attachment = this.object, this.attachment.uploadProgressDelegate = this, this.attachmentPiece = this.options.piece;
    }
    createContentNodes() {
      return [];
    }
    createNodes() {
      let t2;
      const e2 = t2 = k({ tagName: "figure", className: this.getClassName(), data: this.getData(), editable: false }), i2 = this.getHref();
      return i2 && (t2 = k({ tagName: "a", editable: false, attributes: { href: i2, tabindex: -1 } }), e2.appendChild(t2)), this.attachment.hasContent() ? t2.innerHTML = this.attachment.getContent() : this.createContentNodes().forEach((e3) => {
        t2.appendChild(e3);
      }), t2.appendChild(this.createCaptionElement()), this.attachment.isPending() && (this.progressElement = k({ tagName: "progress", attributes: { class: ne.attachmentProgress, value: this.attachment.getUploadProgress(), max: 100 }, data: { trixMutable: true, trixStoreKey: ["progressElement", this.attachment.id].join("/") } }), e2.appendChild(this.progressElement)), [oe("left"), e2, oe("right")];
    }
    createCaptionElement() {
      const t2 = k({ tagName: "figcaption", className: ne.attachmentCaption }), e2 = this.attachmentPiece.getCaption();
      if (e2)
        t2.classList.add("".concat(ne.attachmentCaption, "--edited")), t2.textContent = e2;
      else {
        let e3, i2;
        const n2 = this.getCaptionConfig();
        if (n2.name && (e3 = this.attachment.getFilename()), n2.size && (i2 = this.attachment.getFormattedFilesize()), e3) {
          const i3 = k({ tagName: "span", className: ne.attachmentName, textContent: e3 });
          t2.appendChild(i3);
        }
        if (i2) {
          e3 && t2.appendChild(document.createTextNode(" "));
          const n3 = k({ tagName: "span", className: ne.attachmentSize, textContent: i2 });
          t2.appendChild(n3);
        }
      }
      return t2;
    }
    getClassName() {
      const t2 = [ne.attachment, "".concat(ne.attachment, "--").concat(this.attachment.getType())], e2 = this.attachment.getExtension();
      return e2 && t2.push("".concat(ne.attachment, "--").concat(e2)), t2.join(" ");
    }
    getData() {
      const t2 = { trixAttachment: JSON.stringify(this.attachment), trixContentType: this.attachment.getContentType(), trixId: this.attachment.id }, { attributes: e2 } = this.attachmentPiece;
      return e2.isEmpty() || (t2.trixAttributes = JSON.stringify(e2)), this.attachment.isPending() && (t2.trixSerialize = false), t2;
    }
    getHref() {
      if (!se(this.attachment.getContent(), "a"))
        return this.attachment.getHref();
    }
    getCaptionConfig() {
      var t2;
      const e2 = this.attachment.getType(), n2 = Et(null === (t2 = i[e2]) || void 0 === t2 ? void 0 : t2.caption);
      return "file" === e2 && (n2.name = true), n2;
    }
    findProgressElement() {
      var t2;
      return null === (t2 = this.findElement()) || void 0 === t2 ? void 0 : t2.querySelector("progress");
    }
    attachmentDidChangeUploadProgress() {
      const t2 = this.attachment.getUploadProgress(), e2 = this.findProgressElement();
      e2 && (e2.value = t2);
    }
  };
  var oe = (t2) => k({ tagName: "span", textContent: u, data: { trixCursorTarget: t2, trixSerialize: false } });
  var se = function(t2, e2) {
    const i2 = k("div");
    return i2.innerHTML = t2 || "", i2.querySelector(e2);
  };
  var ae = class extends re {
    constructor() {
      super(...arguments), this.attachment.previewDelegate = this;
    }
    createContentNodes() {
      return this.image = k({ tagName: "img", attributes: { src: "" }, data: { trixMutable: true } }), this.refresh(this.image), [this.image];
    }
    createCaptionElement() {
      const t2 = super.createCaptionElement(...arguments);
      return t2.textContent || t2.setAttribute("data-trix-placeholder", l.captionPlaceholder), t2;
    }
    refresh(t2) {
      var e2;
      t2 || (t2 = null === (e2 = this.findElement()) || void 0 === e2 ? void 0 : e2.querySelector("img"));
      if (t2)
        return this.updateAttributesForImage(t2);
    }
    updateAttributesForImage(t2) {
      const e2 = this.attachment.getURL(), i2 = this.attachment.getPreviewURL();
      if (t2.src = i2 || e2, i2 === e2)
        t2.removeAttribute("data-trix-serialized-attributes");
      else {
        const i3 = JSON.stringify({ src: e2 });
        t2.setAttribute("data-trix-serialized-attributes", i3);
      }
      const n2 = this.attachment.getWidth(), r2 = this.attachment.getHeight();
      null != n2 && (t2.width = n2), null != r2 && (t2.height = r2);
      const o2 = ["imageElement", this.attachment.id, t2.src, t2.width, t2.height].join("/");
      t2.dataset.trixStoreKey = o2;
    }
    attachmentDidChangeAttributes() {
      return this.refresh(this.image), this.refresh();
    }
  };
  var le = class extends ee {
    constructor() {
      super(...arguments), this.piece = this.object, this.attributes = this.piece.getAttributes(), this.textConfig = this.options.textConfig, this.context = this.options.context, this.piece.attachment ? this.attachment = this.piece.attachment : this.string = this.piece.toString();
    }
    createNodes() {
      let t2 = this.attachment ? this.createAttachmentNodes() : this.createStringNodes();
      const e2 = this.createElement();
      if (e2) {
        const i2 = function(t3) {
          for (; null !== (e3 = t3) && void 0 !== e3 && e3.firstElementChild; ) {
            var e3;
            t3 = t3.firstElementChild;
          }
          return t3;
        }(e2);
        Array.from(t2).forEach((t3) => {
          i2.appendChild(t3);
        }), t2 = [e2];
      }
      return t2;
    }
    createAttachmentNodes() {
      const t2 = this.attachment.isPreviewable() ? ae : re;
      return this.createChildView(t2, this.piece.attachment, { piece: this.piece }).getNodes();
    }
    createStringNodes() {
      var t2;
      if (null !== (t2 = this.textConfig) && void 0 !== t2 && t2.plaintext)
        return [document.createTextNode(this.string)];
      {
        const t3 = [], e2 = this.string.split("\n");
        for (let i2 = 0; i2 < e2.length; i2++) {
          const n2 = e2[i2];
          if (i2 > 0) {
            const e3 = k("br");
            t3.push(e3);
          }
          if (n2.length) {
            const e3 = document.createTextNode(this.preserveSpaces(n2));
            t3.push(e3);
          }
        }
        return t3;
      }
    }
    createElement() {
      let t2, e2, i2;
      const n2 = {};
      for (e2 in this.attributes) {
        i2 = this.attributes[e2];
        const o2 = pt(e2);
        if (o2) {
          if (o2.tagName) {
            var r2;
            const e3 = k(o2.tagName);
            r2 ? (r2.appendChild(e3), r2 = e3) : t2 = r2 = e3;
          }
          if (o2.styleProperty && (n2[o2.styleProperty] = i2), o2.style)
            for (e2 in o2.style)
              i2 = o2.style[e2], n2[e2] = i2;
        }
      }
      if (Object.keys(n2).length)
        for (e2 in t2 || (t2 = k("span")), n2)
          i2 = n2[e2], t2.style[e2] = i2;
      return t2;
    }
    createContainerElement() {
      for (const t2 in this.attributes) {
        const e2 = this.attributes[t2], i2 = pt(t2);
        if (i2 && i2.groupTagName) {
          const n2 = {};
          return n2[t2] = e2, k(i2.groupTagName, n2);
        }
      }
    }
    preserveSpaces(t2) {
      return this.context.isLast && (t2 = t2.replace(/\ $/, d)), t2 = t2.replace(/(\S)\ {3}(\S)/g, "$1 ".concat(d, " $2")).replace(/\ {2}/g, "".concat(d, " ")).replace(/\ {2}/g, " ".concat(d)), (this.context.isFirst || this.context.followsWhitespace) && (t2 = t2.replace(/^\ /, d)), t2;
    }
  };
  var ce = class extends ee {
    constructor() {
      super(...arguments), this.text = this.object, this.textConfig = this.options.textConfig;
    }
    createNodes() {
      const t2 = [], e2 = Xt.groupObjects(this.getPieces()), i2 = e2.length - 1;
      for (let r2 = 0; r2 < e2.length; r2++) {
        const o2 = e2[r2], s2 = {};
        0 === r2 && (s2.isFirst = true), r2 === i2 && (s2.isLast = true), he(n2) && (s2.followsWhitespace = true);
        const a2 = this.findOrCreateCachedChildView(le, o2, { textConfig: this.textConfig, context: s2 });
        t2.push(...Array.from(a2.getNodes() || []));
        var n2 = o2;
      }
      return t2;
    }
    getPieces() {
      return Array.from(this.text.getPieces()).filter((t2) => !t2.hasAttribute("blockBreak"));
    }
  };
  var he = (t2) => /\s$/.test(null == t2 ? void 0 : t2.toString());
  var { css: ue } = V;
  var de = class extends ee {
    constructor() {
      super(...arguments), this.block = this.object, this.attributes = this.block.getAttributes();
    }
    createNodes() {
      const t2 = [document.createComment("block")];
      if (this.block.isEmpty())
        t2.push(k("br"));
      else {
        var e2;
        const i2 = null === (e2 = gt(this.block.getLastAttribute())) || void 0 === e2 ? void 0 : e2.text, n2 = this.findOrCreateCachedChildView(ce, this.block.text, { textConfig: i2 });
        t2.push(...Array.from(n2.getNodes() || [])), this.shouldAddExtraNewlineElement() && t2.push(k("br"));
      }
      if (this.attributes.length)
        return t2;
      {
        let e3;
        const { tagName: i2 } = n.default;
        this.block.isRTL() && (e3 = { dir: "rtl" });
        const r2 = k({ tagName: i2, attributes: e3 });
        return t2.forEach((t3) => r2.appendChild(t3)), [r2];
      }
    }
    createContainerElement(t2) {
      let e2, i2;
      const n2 = this.attributes[t2], { tagName: r2 } = gt(n2);
      if (0 === t2 && this.block.isRTL() && (e2 = { dir: "rtl" }), "attachmentGallery" === n2) {
        const t3 = this.block.getBlockBreakPosition();
        i2 = "".concat(ue.attachmentGallery, " ").concat(ue.attachmentGallery, "--").concat(t3);
      }
      return k({ tagName: r2, className: i2, attributes: e2 });
    }
    shouldAddExtraNewlineElement() {
      return /\n\n$/.test(this.block.toString());
    }
  };
  var ge = class extends ee {
    static render(t2) {
      const e2 = k("div"), i2 = new this(t2, { element: e2 });
      return i2.render(), i2.sync(), e2;
    }
    constructor() {
      super(...arguments), this.element = this.options.element, this.elementStore = new Qt(), this.setDocument(this.object);
    }
    setDocument(t2) {
      t2.isEqualTo(this.document) || (this.document = this.object = t2);
    }
    render() {
      if (this.childViews = [], this.shadowElement = k("div"), !this.document.isEmpty()) {
        const t2 = Xt.groupObjects(this.document.getBlocks(), { asTree: true });
        Array.from(t2).forEach((t3) => {
          const e2 = this.findOrCreateCachedChildView(de, t3);
          Array.from(e2.getNodes()).map((t4) => this.shadowElement.appendChild(t4));
        });
      }
    }
    isSynced() {
      return pe(this.shadowElement, this.element);
    }
    sync() {
      const t2 = this.createDocumentFragmentForSync();
      for (; this.element.lastChild; )
        this.element.removeChild(this.element.lastChild);
      return this.element.appendChild(t2), this.didSync();
    }
    didSync() {
      return this.elementStore.reset(me(this.element)), St(() => this.garbageCollectCachedViews());
    }
    createDocumentFragmentForSync() {
      const t2 = document.createDocumentFragment();
      return Array.from(this.shadowElement.childNodes).forEach((e2) => {
        t2.appendChild(e2.cloneNode(true));
      }), Array.from(me(t2)).forEach((t3) => {
        const e2 = this.elementStore.remove(t3);
        e2 && t3.parentNode.replaceChild(e2, t3);
      }), t2;
    }
  };
  var me = (t2) => t2.querySelectorAll("[data-trix-store-key]");
  var pe = (t2, e2) => fe(t2.innerHTML) === fe(e2.innerHTML);
  var fe = (t2) => t2.replace(/&nbsp;/g, " ");
  function be(t2) {
    var e2, i2;
    function n2(e3, i3) {
      try {
        var o2 = t2[e3](i3), s2 = o2.value, a2 = s2 instanceof ve;
        Promise.resolve(a2 ? s2.v : s2).then(function(i4) {
          if (a2) {
            var l2 = "return" === e3 ? "return" : "next";
            if (!s2.k || i4.done)
              return n2(l2, i4);
            i4 = t2[l2](i4).value;
          }
          r2(o2.done ? "return" : "normal", i4);
        }, function(t3) {
          n2("throw", t3);
        });
      } catch (t3) {
        r2("throw", t3);
      }
    }
    function r2(t3, r3) {
      switch (t3) {
        case "return":
          e2.resolve({ value: r3, done: true });
          break;
        case "throw":
          e2.reject(r3);
          break;
        default:
          e2.resolve({ value: r3, done: false });
      }
      (e2 = e2.next) ? n2(e2.key, e2.arg) : i2 = null;
    }
    this._invoke = function(t3, r3) {
      return new Promise(function(o2, s2) {
        var a2 = { key: t3, arg: r3, resolve: o2, reject: s2, next: null };
        i2 ? i2 = i2.next = a2 : (e2 = i2 = a2, n2(t3, r3));
      });
    }, "function" != typeof t2.return && (this.return = void 0);
  }
  function ve(t2, e2) {
    this.v = t2, this.k = e2;
  }
  function Ae(t2, e2, i2) {
    return (e2 = xe(e2)) in t2 ? Object.defineProperty(t2, e2, { value: i2, enumerable: true, configurable: true, writable: true }) : t2[e2] = i2, t2;
  }
  function xe(t2) {
    var e2 = function(t3, e3) {
      if ("object" != typeof t3 || null === t3)
        return t3;
      var i2 = t3[Symbol.toPrimitive];
      if (void 0 !== i2) {
        var n2 = i2.call(t3, e3 || "default");
        if ("object" != typeof n2)
          return n2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e3 ? String : Number)(t3);
    }(t2, "string");
    return "symbol" == typeof e2 ? e2 : String(e2);
  }
  be.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
    return this;
  }, be.prototype.next = function(t2) {
    return this._invoke("next", t2);
  }, be.prototype.throw = function(t2) {
    return this._invoke("throw", t2);
  }, be.prototype.return = function(t2) {
    return this._invoke("return", t2);
  };
  var ye = class extends nt {
    static registerType(t2, e2) {
      e2.type = t2, this.types[t2] = e2;
    }
    static fromJSON(t2) {
      const e2 = this.types[t2.type];
      if (e2)
        return e2.fromJSON(t2);
    }
    constructor(t2) {
      let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      super(...arguments), this.attributes = _t.box(e2);
    }
    copyWithAttributes(t2) {
      return new this.constructor(this.getValue(), t2);
    }
    copyWithAdditionalAttributes(t2) {
      return this.copyWithAttributes(this.attributes.merge(t2));
    }
    copyWithoutAttribute(t2) {
      return this.copyWithAttributes(this.attributes.remove(t2));
    }
    copy() {
      return this.copyWithAttributes(this.attributes);
    }
    getAttribute(t2) {
      return this.attributes.get(t2);
    }
    getAttributesHash() {
      return this.attributes;
    }
    getAttributes() {
      return this.attributes.toObject();
    }
    hasAttribute(t2) {
      return this.attributes.has(t2);
    }
    hasSameStringValueAsPiece(t2) {
      return t2 && this.toString() === t2.toString();
    }
    hasSameAttributesAsPiece(t2) {
      return t2 && (this.attributes === t2.attributes || this.attributes.isEqualTo(t2.attributes));
    }
    isBlockBreak() {
      return false;
    }
    isEqualTo(t2) {
      return super.isEqualTo(...arguments) || this.hasSameConstructorAs(t2) && this.hasSameStringValueAsPiece(t2) && this.hasSameAttributesAsPiece(t2);
    }
    isEmpty() {
      return 0 === this.length;
    }
    isSerializable() {
      return true;
    }
    toJSON() {
      return { type: this.constructor.type, attributes: this.getAttributes() };
    }
    contentsForInspection() {
      return { type: this.constructor.type, attributes: this.attributes.inspect() };
    }
    canBeGrouped() {
      return this.hasAttribute("href");
    }
    canBeGroupedWith(t2) {
      return this.getAttribute("href") === t2.getAttribute("href");
    }
    getLength() {
      return this.length;
    }
    canBeConsolidatedWith(t2) {
      return false;
    }
  };
  Ae(ye, "types", {});
  var Ce = class extends te {
    constructor(t2) {
      super(...arguments), this.url = t2;
    }
    perform(t2) {
      const e2 = new Image();
      e2.onload = () => (e2.width = this.width = e2.naturalWidth, e2.height = this.height = e2.naturalHeight, t2(true, e2)), e2.onerror = () => t2(false), e2.src = this.url;
    }
  };
  var Re = class _Re extends nt {
    static attachmentForFile(t2) {
      const e2 = new this(this.attributesForFile(t2));
      return e2.setFile(t2), e2;
    }
    static attributesForFile(t2) {
      return new _t({ filename: t2.name, filesize: t2.size, contentType: t2.type });
    }
    static fromJSON(t2) {
      return new this(t2);
    }
    constructor() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      super(t2), this.releaseFile = this.releaseFile.bind(this), this.attributes = _t.box(t2), this.didChangeAttributes();
    }
    getAttribute(t2) {
      return this.attributes.get(t2);
    }
    hasAttribute(t2) {
      return this.attributes.has(t2);
    }
    getAttributes() {
      return this.attributes.toObject();
    }
    setAttributes() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const e2 = this.attributes.merge(t2);
      var i2, n2, r2, o2;
      if (!this.attributes.isEqualTo(e2))
        return this.attributes = e2, this.didChangeAttributes(), null === (i2 = this.previewDelegate) || void 0 === i2 || null === (n2 = i2.attachmentDidChangeAttributes) || void 0 === n2 || n2.call(i2, this), null === (r2 = this.delegate) || void 0 === r2 || null === (o2 = r2.attachmentDidChangeAttributes) || void 0 === o2 ? void 0 : o2.call(r2, this);
    }
    didChangeAttributes() {
      if (this.isPreviewable())
        return this.preloadURL();
    }
    isPending() {
      return null != this.file && !(this.getURL() || this.getHref());
    }
    isPreviewable() {
      return this.attributes.has("previewable") ? this.attributes.get("previewable") : _Re.previewablePattern.test(this.getContentType());
    }
    getType() {
      return this.hasContent() ? "content" : this.isPreviewable() ? "preview" : "file";
    }
    getURL() {
      return this.attributes.get("url");
    }
    getHref() {
      return this.attributes.get("href");
    }
    getFilename() {
      return this.attributes.get("filename") || "";
    }
    getFilesize() {
      return this.attributes.get("filesize");
    }
    getFormattedFilesize() {
      const t2 = this.attributes.get("filesize");
      return "number" == typeof t2 ? h.formatter(t2) : "";
    }
    getExtension() {
      var t2;
      return null === (t2 = this.getFilename().match(/\.(\w+)$/)) || void 0 === t2 ? void 0 : t2[1].toLowerCase();
    }
    getContentType() {
      return this.attributes.get("contentType");
    }
    hasContent() {
      return this.attributes.has("content");
    }
    getContent() {
      return this.attributes.get("content");
    }
    getWidth() {
      return this.attributes.get("width");
    }
    getHeight() {
      return this.attributes.get("height");
    }
    getFile() {
      return this.file;
    }
    setFile(t2) {
      if (this.file = t2, this.isPreviewable())
        return this.preloadFile();
    }
    releaseFile() {
      this.releasePreloadedFile(), this.file = null;
    }
    getUploadProgress() {
      return null != this.uploadProgress ? this.uploadProgress : 0;
    }
    setUploadProgress(t2) {
      var e2, i2;
      if (this.uploadProgress !== t2)
        return this.uploadProgress = t2, null === (e2 = this.uploadProgressDelegate) || void 0 === e2 || null === (i2 = e2.attachmentDidChangeUploadProgress) || void 0 === i2 ? void 0 : i2.call(e2, this);
    }
    toJSON() {
      return this.getAttributes();
    }
    getCacheKey() {
      return [super.getCacheKey(...arguments), this.attributes.getCacheKey(), this.getPreviewURL()].join("/");
    }
    getPreviewURL() {
      return this.previewURL || this.preloadingURL;
    }
    setPreviewURL(t2) {
      var e2, i2, n2, r2;
      if (t2 !== this.getPreviewURL())
        return this.previewURL = t2, null === (e2 = this.previewDelegate) || void 0 === e2 || null === (i2 = e2.attachmentDidChangeAttributes) || void 0 === i2 || i2.call(e2, this), null === (n2 = this.delegate) || void 0 === n2 || null === (r2 = n2.attachmentDidChangePreviewURL) || void 0 === r2 ? void 0 : r2.call(n2, this);
    }
    preloadURL() {
      return this.preload(this.getURL(), this.releaseFile);
    }
    preloadFile() {
      if (this.file)
        return this.fileObjectURL = URL.createObjectURL(this.file), this.preload(this.fileObjectURL);
    }
    releasePreloadedFile() {
      this.fileObjectURL && (URL.revokeObjectURL(this.fileObjectURL), this.fileObjectURL = null);
    }
    preload(t2, e2) {
      if (t2 && t2 !== this.getPreviewURL()) {
        this.preloadingURL = t2;
        return new Ce(t2).then((i2) => {
          let { width: n2, height: r2 } = i2;
          return this.getWidth() && this.getHeight() || this.setAttributes({ width: n2, height: r2 }), this.preloadingURL = null, this.setPreviewURL(t2), null == e2 ? void 0 : e2();
        }).catch(() => (this.preloadingURL = null, null == e2 ? void 0 : e2()));
      }
    }
  };
  Ae(Re, "previewablePattern", /^image(\/(gif|png|webp|jpe?g)|$)/);
  var Se = class _Se extends ye {
    static fromJSON(t2) {
      return new this(Re.fromJSON(t2.attachment), t2.attributes);
    }
    constructor(t2) {
      super(...arguments), this.attachment = t2, this.length = 1, this.ensureAttachmentExclusivelyHasAttribute("href"), this.attachment.hasContent() || this.removeProhibitedAttributes();
    }
    ensureAttachmentExclusivelyHasAttribute(t2) {
      this.hasAttribute(t2) && (this.attachment.hasAttribute(t2) || this.attachment.setAttributes(this.attributes.slice([t2])), this.attributes = this.attributes.remove(t2));
    }
    removeProhibitedAttributes() {
      const t2 = this.attributes.slice(_Se.permittedAttributes);
      t2.isEqualTo(this.attributes) || (this.attributes = t2);
    }
    getValue() {
      return this.attachment;
    }
    isSerializable() {
      return !this.attachment.isPending();
    }
    getCaption() {
      return this.attributes.get("caption") || "";
    }
    isEqualTo(t2) {
      var e2;
      return super.isEqualTo(t2) && this.attachment.id === (null == t2 || null === (e2 = t2.attachment) || void 0 === e2 ? void 0 : e2.id);
    }
    toString() {
      return "\uFFFC";
    }
    toJSON() {
      const t2 = super.toJSON(...arguments);
      return t2.attachment = this.attachment, t2;
    }
    getCacheKey() {
      return [super.getCacheKey(...arguments), this.attachment.getCacheKey()].join("/");
    }
    toConsole() {
      return JSON.stringify(this.toString());
    }
  };
  Ae(Se, "permittedAttributes", ["caption", "presentation"]), ye.registerType("attachment", Se);
  var Ee = class extends ye {
    static fromJSON(t2) {
      return new this(t2.string, t2.attributes);
    }
    constructor(t2) {
      super(...arguments), this.string = ((t3) => t3.replace(/\r\n?/g, "\n"))(t2), this.length = this.string.length;
    }
    getValue() {
      return this.string;
    }
    toString() {
      return this.string.toString();
    }
    isBlockBreak() {
      return "\n" === this.toString() && true === this.getAttribute("blockBreak");
    }
    toJSON() {
      const t2 = super.toJSON(...arguments);
      return t2.string = this.string, t2;
    }
    canBeConsolidatedWith(t2) {
      return t2 && this.hasSameConstructorAs(t2) && this.hasSameAttributesAsPiece(t2);
    }
    consolidateWith(t2) {
      return new this.constructor(this.toString() + t2.toString(), this.attributes);
    }
    splitAtOffset(t2) {
      let e2, i2;
      return 0 === t2 ? (e2 = null, i2 = this) : t2 === this.length ? (e2 = this, i2 = null) : (e2 = new this.constructor(this.string.slice(0, t2), this.attributes), i2 = new this.constructor(this.string.slice(t2), this.attributes)), [e2, i2];
    }
    toConsole() {
      let { string: t2 } = this;
      return t2.length > 15 && (t2 = t2.slice(0, 14) + "\u2026"), JSON.stringify(t2.toString());
    }
  };
  ye.registerType("string", Ee);
  var ke = class extends nt {
    static box(t2) {
      return t2 instanceof this ? t2 : new this(t2);
    }
    constructor() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      super(...arguments), this.objects = t2.slice(0), this.length = this.objects.length;
    }
    indexOf(t2) {
      return this.objects.indexOf(t2);
    }
    splice() {
      for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++)
        e2[i2] = arguments[i2];
      return new this.constructor(ot(this.objects, ...e2));
    }
    eachObject(t2) {
      return this.objects.map((e2, i2) => t2(e2, i2));
    }
    insertObjectAtIndex(t2, e2) {
      return this.splice(e2, 0, t2);
    }
    insertSplittableListAtIndex(t2, e2) {
      return this.splice(e2, 0, ...t2.objects);
    }
    insertSplittableListAtPosition(t2, e2) {
      const [i2, n2] = this.splitObjectAtPosition(e2);
      return new this.constructor(i2).insertSplittableListAtIndex(t2, n2);
    }
    editObjectAtIndex(t2, e2) {
      return this.replaceObjectAtIndex(e2(this.objects[t2]), t2);
    }
    replaceObjectAtIndex(t2, e2) {
      return this.splice(e2, 1, t2);
    }
    removeObjectAtIndex(t2) {
      return this.splice(t2, 1);
    }
    getObjectAtIndex(t2) {
      return this.objects[t2];
    }
    getSplittableListInRange(t2) {
      const [e2, i2, n2] = this.splitObjectsAtRange(t2);
      return new this.constructor(e2.slice(i2, n2 + 1));
    }
    selectSplittableList(t2) {
      const e2 = this.objects.filter((e3) => t2(e3));
      return new this.constructor(e2);
    }
    removeObjectsInRange(t2) {
      const [e2, i2, n2] = this.splitObjectsAtRange(t2);
      return new this.constructor(e2).splice(i2, n2 - i2 + 1);
    }
    transformObjectsInRange(t2, e2) {
      const [i2, n2, r2] = this.splitObjectsAtRange(t2), o2 = i2.map((t3, i3) => n2 <= i3 && i3 <= r2 ? e2(t3) : t3);
      return new this.constructor(o2);
    }
    splitObjectsAtRange(t2) {
      let e2, [i2, n2, r2] = this.splitObjectAtPosition(De(t2));
      return [i2, e2] = new this.constructor(i2).splitObjectAtPosition(we(t2) + r2), [i2, n2, e2 - 1];
    }
    getObjectAtPosition(t2) {
      const { index: e2 } = this.findIndexAndOffsetAtPosition(t2);
      return this.objects[e2];
    }
    splitObjectAtPosition(t2) {
      let e2, i2;
      const { index: n2, offset: r2 } = this.findIndexAndOffsetAtPosition(t2), o2 = this.objects.slice(0);
      if (null != n2)
        if (0 === r2)
          e2 = n2, i2 = 0;
        else {
          const t3 = this.getObjectAtIndex(n2), [s2, a2] = t3.splitAtOffset(r2);
          o2.splice(n2, 1, s2, a2), e2 = n2 + 1, i2 = s2.getLength() - r2;
        }
      else
        e2 = o2.length, i2 = 0;
      return [o2, e2, i2];
    }
    consolidate() {
      const t2 = [];
      let e2 = this.objects[0];
      return this.objects.slice(1).forEach((i2) => {
        var n2, r2;
        null !== (n2 = (r2 = e2).canBeConsolidatedWith) && void 0 !== n2 && n2.call(r2, i2) ? e2 = e2.consolidateWith(i2) : (t2.push(e2), e2 = i2);
      }), e2 && t2.push(e2), new this.constructor(t2);
    }
    consolidateFromIndexToIndex(t2, e2) {
      const i2 = this.objects.slice(0).slice(t2, e2 + 1), n2 = new this.constructor(i2).consolidate().toArray();
      return this.splice(t2, i2.length, ...n2);
    }
    findIndexAndOffsetAtPosition(t2) {
      let e2, i2 = 0;
      for (e2 = 0; e2 < this.objects.length; e2++) {
        const n2 = i2 + this.objects[e2].getLength();
        if (i2 <= t2 && t2 < n2)
          return { index: e2, offset: t2 - i2 };
        i2 = n2;
      }
      return { index: null, offset: null };
    }
    findPositionAtIndexAndOffset(t2, e2) {
      let i2 = 0;
      for (let n2 = 0; n2 < this.objects.length; n2++) {
        const r2 = this.objects[n2];
        if (n2 < t2)
          i2 += r2.getLength();
        else if (n2 === t2) {
          i2 += e2;
          break;
        }
      }
      return i2;
    }
    getEndPosition() {
      return null == this.endPosition && (this.endPosition = 0, this.objects.forEach((t2) => this.endPosition += t2.getLength())), this.endPosition;
    }
    toString() {
      return this.objects.join("");
    }
    toArray() {
      return this.objects.slice(0);
    }
    toJSON() {
      return this.toArray();
    }
    isEqualTo(t2) {
      return super.isEqualTo(...arguments) || Le(this.objects, null == t2 ? void 0 : t2.objects);
    }
    contentsForInspection() {
      return { objects: "[".concat(this.objects.map((t2) => t2.inspect()).join(", "), "]") };
    }
  };
  var Le = function(t2) {
    let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (t2.length !== e2.length)
      return false;
    let i2 = true;
    for (let n2 = 0; n2 < t2.length; n2++) {
      const r2 = t2[n2];
      i2 && !r2.isEqualTo(e2[n2]) && (i2 = false);
    }
    return i2;
  };
  var De = (t2) => t2[0];
  var we = (t2) => t2[1];
  var Te = class extends nt {
    static textForAttachmentWithAttributes(t2, e2) {
      return new this([new Se(t2, e2)]);
    }
    static textForStringWithAttributes(t2, e2) {
      return new this([new Ee(t2, e2)]);
    }
    static fromJSON(t2) {
      return new this(Array.from(t2).map((t3) => ye.fromJSON(t3)));
    }
    constructor() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      super(...arguments);
      const e2 = t2.filter((t3) => !t3.isEmpty());
      this.pieceList = new ke(e2);
    }
    copy() {
      return this.copyWithPieceList(this.pieceList);
    }
    copyWithPieceList(t2) {
      return new this.constructor(t2.consolidate().toArray());
    }
    copyUsingObjectMap(t2) {
      const e2 = this.getPieces().map((e3) => t2.find(e3) || e3);
      return new this.constructor(e2);
    }
    appendText(t2) {
      return this.insertTextAtPosition(t2, this.getLength());
    }
    insertTextAtPosition(t2, e2) {
      return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t2.pieceList, e2));
    }
    removeTextAtRange(t2) {
      return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t2));
    }
    replaceTextAtRange(t2, e2) {
      return this.removeTextAtRange(e2).insertTextAtPosition(t2, e2[0]);
    }
    moveTextFromRangeToPosition(t2, e2) {
      if (t2[0] <= e2 && e2 <= t2[1])
        return;
      const i2 = this.getTextAtRange(t2), n2 = i2.getLength();
      return t2[0] < e2 && (e2 -= n2), this.removeTextAtRange(t2).insertTextAtPosition(i2, e2);
    }
    addAttributeAtRange(t2, e2, i2) {
      const n2 = {};
      return n2[t2] = e2, this.addAttributesAtRange(n2, i2);
    }
    addAttributesAtRange(t2, e2) {
      return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e2, (e3) => e3.copyWithAdditionalAttributes(t2)));
    }
    removeAttributeAtRange(t2, e2) {
      return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e2, (e3) => e3.copyWithoutAttribute(t2)));
    }
    setAttributesAtRange(t2, e2) {
      return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e2, (e3) => e3.copyWithAttributes(t2)));
    }
    getAttributesAtPosition(t2) {
      var e2;
      return (null === (e2 = this.pieceList.getObjectAtPosition(t2)) || void 0 === e2 ? void 0 : e2.getAttributes()) || {};
    }
    getCommonAttributes() {
      const t2 = Array.from(this.pieceList.toArray()).map((t3) => t3.getAttributes());
      return _t.fromCommonAttributesOfObjects(t2).toObject();
    }
    getCommonAttributesAtRange(t2) {
      return this.getTextAtRange(t2).getCommonAttributes() || {};
    }
    getExpandedRangeForAttributeAtOffset(t2, e2) {
      let i2, n2 = i2 = e2;
      const r2 = this.getLength();
      for (; n2 > 0 && this.getCommonAttributesAtRange([n2 - 1, i2])[t2]; )
        n2--;
      for (; i2 < r2 && this.getCommonAttributesAtRange([e2, i2 + 1])[t2]; )
        i2++;
      return [n2, i2];
    }
    getTextAtRange(t2) {
      return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t2));
    }
    getStringAtRange(t2) {
      return this.pieceList.getSplittableListInRange(t2).toString();
    }
    getStringAtPosition(t2) {
      return this.getStringAtRange([t2, t2 + 1]);
    }
    startsWithString(t2) {
      return this.getStringAtRange([0, t2.length]) === t2;
    }
    endsWithString(t2) {
      const e2 = this.getLength();
      return this.getStringAtRange([e2 - t2.length, e2]) === t2;
    }
    getAttachmentPieces() {
      return this.pieceList.toArray().filter((t2) => !!t2.attachment);
    }
    getAttachments() {
      return this.getAttachmentPieces().map((t2) => t2.attachment);
    }
    getAttachmentAndPositionById(t2) {
      let e2 = 0;
      for (const n2 of this.pieceList.toArray()) {
        var i2;
        if ((null === (i2 = n2.attachment) || void 0 === i2 ? void 0 : i2.id) === t2)
          return { attachment: n2.attachment, position: e2 };
        e2 += n2.length;
      }
      return { attachment: null, position: null };
    }
    getAttachmentById(t2) {
      const { attachment: e2 } = this.getAttachmentAndPositionById(t2);
      return e2;
    }
    getRangeOfAttachment(t2) {
      const e2 = this.getAttachmentAndPositionById(t2.id), i2 = e2.position;
      if (t2 = e2.attachment)
        return [i2, i2 + 1];
    }
    updateAttributesForAttachment(t2, e2) {
      const i2 = this.getRangeOfAttachment(e2);
      return i2 ? this.addAttributesAtRange(t2, i2) : this;
    }
    getLength() {
      return this.pieceList.getEndPosition();
    }
    isEmpty() {
      return 0 === this.getLength();
    }
    isEqualTo(t2) {
      var e2;
      return super.isEqualTo(t2) || (null == t2 || null === (e2 = t2.pieceList) || void 0 === e2 ? void 0 : e2.isEqualTo(this.pieceList));
    }
    isBlockBreak() {
      return 1 === this.getLength() && this.pieceList.getObjectAtIndex(0).isBlockBreak();
    }
    eachPiece(t2) {
      return this.pieceList.eachObject(t2);
    }
    getPieces() {
      return this.pieceList.toArray();
    }
    getPieceAtPosition(t2) {
      return this.pieceList.getObjectAtPosition(t2);
    }
    contentsForInspection() {
      return { pieceList: this.pieceList.inspect() };
    }
    toSerializableText() {
      const t2 = this.pieceList.selectSplittableList((t3) => t3.isSerializable());
      return this.copyWithPieceList(t2);
    }
    toString() {
      return this.pieceList.toString();
    }
    toJSON() {
      return this.pieceList.toJSON();
    }
    toConsole() {
      return JSON.stringify(this.pieceList.toArray().map((t2) => JSON.parse(t2.toConsole())));
    }
    getDirection() {
      return at(this.toString());
    }
    isRTL() {
      return "rtl" === this.getDirection();
    }
  };
  var Be = class _Be extends nt {
    static fromJSON(t2) {
      return new this(Te.fromJSON(t2.text), t2.attributes);
    }
    constructor(t2, e2) {
      super(...arguments), this.text = Fe(t2 || new Te()), this.attributes = e2 || [];
    }
    isEmpty() {
      return this.text.isBlockBreak();
    }
    isEqualTo(t2) {
      return !!super.isEqualTo(t2) || this.text.isEqualTo(null == t2 ? void 0 : t2.text) && rt(this.attributes, null == t2 ? void 0 : t2.attributes);
    }
    copyWithText(t2) {
      return new _Be(t2, this.attributes);
    }
    copyWithoutText() {
      return this.copyWithText(null);
    }
    copyWithAttributes(t2) {
      return new _Be(this.text, t2);
    }
    copyWithoutAttributes() {
      return this.copyWithAttributes(null);
    }
    copyUsingObjectMap(t2) {
      const e2 = t2.find(this.text);
      return e2 ? this.copyWithText(e2) : this.copyWithText(this.text.copyUsingObjectMap(t2));
    }
    addAttribute(t2) {
      const e2 = this.attributes.concat(je(t2));
      return this.copyWithAttributes(e2);
    }
    removeAttribute(t2) {
      const { listAttribute: e2 } = gt(t2), i2 = Ue(Ue(this.attributes, t2), e2);
      return this.copyWithAttributes(i2);
    }
    removeLastAttribute() {
      return this.removeAttribute(this.getLastAttribute());
    }
    getLastAttribute() {
      return We(this.attributes);
    }
    getAttributes() {
      return this.attributes.slice(0);
    }
    getAttributeLevel() {
      return this.attributes.length;
    }
    getAttributeAtLevel(t2) {
      return this.attributes[t2 - 1];
    }
    hasAttribute(t2) {
      return this.attributes.includes(t2);
    }
    hasAttributes() {
      return this.getAttributeLevel() > 0;
    }
    getLastNestableAttribute() {
      return We(this.getNestableAttributes());
    }
    getNestableAttributes() {
      return this.attributes.filter((t2) => gt(t2).nestable);
    }
    getNestingLevel() {
      return this.getNestableAttributes().length;
    }
    decreaseNestingLevel() {
      const t2 = this.getLastNestableAttribute();
      return t2 ? this.removeAttribute(t2) : this;
    }
    increaseNestingLevel() {
      const t2 = this.getLastNestableAttribute();
      if (t2) {
        const e2 = this.attributes.lastIndexOf(t2), i2 = ot(this.attributes, e2 + 1, 0, ...je(t2));
        return this.copyWithAttributes(i2);
      }
      return this;
    }
    getListItemAttributes() {
      return this.attributes.filter((t2) => gt(t2).listAttribute);
    }
    isListItem() {
      var t2;
      return null === (t2 = gt(this.getLastAttribute())) || void 0 === t2 ? void 0 : t2.listAttribute;
    }
    isTerminalBlock() {
      var t2;
      return null === (t2 = gt(this.getLastAttribute())) || void 0 === t2 ? void 0 : t2.terminal;
    }
    breaksOnReturn() {
      var t2;
      return null === (t2 = gt(this.getLastAttribute())) || void 0 === t2 ? void 0 : t2.breakOnReturn;
    }
    findLineBreakInDirectionFromPosition(t2, e2) {
      const i2 = this.toString();
      let n2;
      switch (t2) {
        case "forward":
          n2 = i2.indexOf("\n", e2);
          break;
        case "backward":
          n2 = i2.slice(0, e2).lastIndexOf("\n");
      }
      if (-1 !== n2)
        return n2;
    }
    contentsForInspection() {
      return { text: this.text.inspect(), attributes: this.attributes };
    }
    toString() {
      return this.text.toString();
    }
    toJSON() {
      return { text: this.text, attributes: this.attributes };
    }
    getDirection() {
      return this.text.getDirection();
    }
    isRTL() {
      return this.text.isRTL();
    }
    getLength() {
      return this.text.getLength();
    }
    canBeConsolidatedWith(t2) {
      return !this.hasAttributes() && !t2.hasAttributes() && this.getDirection() === t2.getDirection();
    }
    consolidateWith(t2) {
      const e2 = Te.textForStringWithAttributes("\n"), i2 = this.getTextWithoutBlockBreak().appendText(e2);
      return this.copyWithText(i2.appendText(t2.text));
    }
    splitAtOffset(t2) {
      let e2, i2;
      return 0 === t2 ? (e2 = null, i2 = this) : t2 === this.getLength() ? (e2 = this, i2 = null) : (e2 = this.copyWithText(this.text.getTextAtRange([0, t2])), i2 = this.copyWithText(this.text.getTextAtRange([t2, this.getLength()]))), [e2, i2];
    }
    getBlockBreakPosition() {
      return this.text.getLength() - 1;
    }
    getTextWithoutBlockBreak() {
      return Oe(this.text) ? this.text.getTextAtRange([0, this.getBlockBreakPosition()]) : this.text.copy();
    }
    canBeGrouped(t2) {
      return this.attributes[t2];
    }
    canBeGroupedWith(t2, e2) {
      const i2 = t2.getAttributes(), r2 = i2[e2], o2 = this.attributes[e2];
      return o2 === r2 && !(false === gt(o2).group && !(() => {
        if (!ut) {
          ut = [];
          for (const t3 in n) {
            const { listAttribute: e3 } = n[t3];
            null != e3 && ut.push(e3);
          }
        }
        return ut;
      })().includes(i2[e2 + 1])) && (this.getDirection() === t2.getDirection() || t2.isEmpty());
    }
  };
  var Fe = function(t2) {
    return t2 = Ie(t2), t2 = Ne(t2);
  };
  var Ie = function(t2) {
    let e2 = false;
    const i2 = t2.getPieces();
    let n2 = i2.slice(0, i2.length - 1);
    const r2 = i2[i2.length - 1];
    return r2 ? (n2 = n2.map((t3) => t3.isBlockBreak() ? (e2 = true, Me(t3)) : t3), e2 ? new Te([...n2, r2]) : t2) : t2;
  };
  var Pe = Te.textForStringWithAttributes("\n", { blockBreak: true });
  var Ne = function(t2) {
    return Oe(t2) ? t2 : t2.appendText(Pe);
  };
  var Oe = function(t2) {
    const e2 = t2.getLength();
    if (0 === e2)
      return false;
    return t2.getTextAtRange([e2 - 1, e2]).isBlockBreak();
  };
  var Me = (t2) => t2.copyWithoutAttribute("blockBreak");
  var je = function(t2) {
    const { listAttribute: e2 } = gt(t2);
    return e2 ? [e2, t2] : [t2];
  };
  var We = (t2) => t2.slice(-1)[0];
  var Ue = function(t2, e2) {
    const i2 = t2.lastIndexOf(e2);
    return -1 === i2 ? t2 : ot(t2, i2, 1);
  };
  var qe = class extends nt {
    static fromJSON(t2) {
      return new this(Array.from(t2).map((t3) => Be.fromJSON(t3)));
    }
    static fromString(t2, e2) {
      const i2 = Te.textForStringWithAttributes(t2, e2);
      return new this([new Be(i2)]);
    }
    constructor() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      super(...arguments), 0 === t2.length && (t2 = [new Be()]), this.blockList = ke.box(t2);
    }
    isEmpty() {
      const t2 = this.getBlockAtIndex(0);
      return 1 === this.blockList.length && t2.isEmpty() && !t2.hasAttributes();
    }
    copy() {
      const t2 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).consolidateBlocks ? this.blockList.consolidate().toArray() : this.blockList.toArray();
      return new this.constructor(t2);
    }
    copyUsingObjectsFromDocument(t2) {
      const e2 = new Yt(t2.getObjects());
      return this.copyUsingObjectMap(e2);
    }
    copyUsingObjectMap(t2) {
      const e2 = this.getBlocks().map((e3) => t2.find(e3) || e3.copyUsingObjectMap(t2));
      return new this.constructor(e2);
    }
    copyWithBaseBlockAttributes() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      const e2 = this.getBlocks().map((e3) => {
        const i2 = t2.concat(e3.getAttributes());
        return e3.copyWithAttributes(i2);
      });
      return new this.constructor(e2);
    }
    replaceBlock(t2, e2) {
      const i2 = this.blockList.indexOf(t2);
      return -1 === i2 ? this : new this.constructor(this.blockList.replaceObjectAtIndex(e2, i2));
    }
    insertDocumentAtRange(t2, e2) {
      const { blockList: i2 } = t2;
      e2 = Lt(e2);
      let [n2] = e2;
      const { index: r2, offset: o2 } = this.locationFromPosition(n2);
      let s2 = this;
      const a2 = this.getBlockAtPosition(n2);
      return Dt(e2) && a2.isEmpty() && !a2.hasAttributes() ? s2 = new this.constructor(s2.blockList.removeObjectAtIndex(r2)) : a2.getBlockBreakPosition() === o2 && n2++, s2 = s2.removeTextAtRange(e2), new this.constructor(s2.blockList.insertSplittableListAtPosition(i2, n2));
    }
    mergeDocumentAtRange(t2, e2) {
      let i2, n2;
      e2 = Lt(e2);
      const [r2] = e2, o2 = this.locationFromPosition(r2), s2 = this.getBlockAtIndex(o2.index).getAttributes(), a2 = t2.getBaseBlockAttributes(), l2 = s2.slice(-a2.length);
      if (rt(a2, l2)) {
        const e3 = s2.slice(0, -a2.length);
        i2 = t2.copyWithBaseBlockAttributes(e3);
      } else
        i2 = t2.copy({ consolidateBlocks: true }).copyWithBaseBlockAttributes(s2);
      const c2 = i2.getBlockCount(), h2 = i2.getBlockAtIndex(0);
      if (rt(s2, h2.getAttributes())) {
        const t3 = h2.getTextWithoutBlockBreak();
        if (n2 = this.insertTextAtRange(t3, e2), c2 > 1) {
          i2 = new this.constructor(i2.getBlocks().slice(1));
          const e3 = r2 + t3.getLength();
          n2 = n2.insertDocumentAtRange(i2, e3);
        }
      } else
        n2 = this.insertDocumentAtRange(i2, e2);
      return n2;
    }
    insertTextAtRange(t2, e2) {
      e2 = Lt(e2);
      const [i2] = e2, { index: n2, offset: r2 } = this.locationFromPosition(i2), o2 = this.removeTextAtRange(e2);
      return new this.constructor(o2.blockList.editObjectAtIndex(n2, (e3) => e3.copyWithText(e3.text.insertTextAtPosition(t2, r2))));
    }
    removeTextAtRange(t2) {
      let e2;
      t2 = Lt(t2);
      const [i2, n2] = t2;
      if (Dt(t2))
        return this;
      const [r2, o2] = Array.from(this.locationRangeFromRange(t2)), s2 = r2.index, a2 = r2.offset, l2 = this.getBlockAtIndex(s2), c2 = o2.index, h2 = o2.offset, u2 = this.getBlockAtIndex(c2);
      if (n2 - i2 == 1 && l2.getBlockBreakPosition() === a2 && u2.getBlockBreakPosition() !== h2 && "\n" === u2.text.getStringAtPosition(h2))
        e2 = this.blockList.editObjectAtIndex(c2, (t3) => t3.copyWithText(t3.text.removeTextAtRange([h2, h2 + 1])));
      else {
        let t3;
        const i3 = l2.text.getTextAtRange([0, a2]), n3 = u2.text.getTextAtRange([h2, u2.getLength()]), r3 = i3.appendText(n3);
        t3 = s2 !== c2 && 0 === a2 && l2.getAttributeLevel() >= u2.getAttributeLevel() ? u2.copyWithText(r3) : l2.copyWithText(r3);
        const o3 = c2 + 1 - s2;
        e2 = this.blockList.splice(s2, o3, t3);
      }
      return new this.constructor(e2);
    }
    moveTextFromRangeToPosition(t2, e2) {
      let i2;
      t2 = Lt(t2);
      const [n2, r2] = t2;
      if (n2 <= e2 && e2 <= r2)
        return this;
      let o2 = this.getDocumentAtRange(t2), s2 = this.removeTextAtRange(t2);
      const a2 = n2 < e2;
      a2 && (e2 -= o2.getLength());
      const [l2, ...c2] = o2.getBlocks();
      return 0 === c2.length ? (i2 = l2.getTextWithoutBlockBreak(), a2 && (e2 += 1)) : i2 = l2.text, s2 = s2.insertTextAtRange(i2, e2), 0 === c2.length ? s2 : (o2 = new this.constructor(c2), e2 += i2.getLength(), s2.insertDocumentAtRange(o2, e2));
    }
    addAttributeAtRange(t2, e2, i2) {
      let { blockList: n2 } = this;
      return this.eachBlockAtRange(i2, (i3, r2, o2) => n2 = n2.editObjectAtIndex(o2, function() {
        return gt(t2) ? i3.addAttribute(t2, e2) : r2[0] === r2[1] ? i3 : i3.copyWithText(i3.text.addAttributeAtRange(t2, e2, r2));
      })), new this.constructor(n2);
    }
    addAttribute(t2, e2) {
      let { blockList: i2 } = this;
      return this.eachBlock((n2, r2) => i2 = i2.editObjectAtIndex(r2, () => n2.addAttribute(t2, e2))), new this.constructor(i2);
    }
    removeAttributeAtRange(t2, e2) {
      let { blockList: i2 } = this;
      return this.eachBlockAtRange(e2, function(e3, n2, r2) {
        gt(t2) ? i2 = i2.editObjectAtIndex(r2, () => e3.removeAttribute(t2)) : n2[0] !== n2[1] && (i2 = i2.editObjectAtIndex(r2, () => e3.copyWithText(e3.text.removeAttributeAtRange(t2, n2))));
      }), new this.constructor(i2);
    }
    updateAttributesForAttachment(t2, e2) {
      const i2 = this.getRangeOfAttachment(e2), [n2] = Array.from(i2), { index: r2 } = this.locationFromPosition(n2), o2 = this.getTextAtIndex(r2);
      return new this.constructor(this.blockList.editObjectAtIndex(r2, (i3) => i3.copyWithText(o2.updateAttributesForAttachment(t2, e2))));
    }
    removeAttributeForAttachment(t2, e2) {
      const i2 = this.getRangeOfAttachment(e2);
      return this.removeAttributeAtRange(t2, i2);
    }
    insertBlockBreakAtRange(t2) {
      let e2;
      t2 = Lt(t2);
      const [i2] = t2, { offset: n2 } = this.locationFromPosition(i2), r2 = this.removeTextAtRange(t2);
      return 0 === n2 && (e2 = [new Be()]), new this.constructor(r2.blockList.insertSplittableListAtPosition(new ke(e2), i2));
    }
    applyBlockAttributeAtRange(t2, e2, i2) {
      const n2 = this.expandRangeToLineBreaksAndSplitBlocks(i2);
      let r2 = n2.document;
      i2 = n2.range;
      const o2 = gt(t2);
      if (o2.listAttribute) {
        r2 = r2.removeLastListAttributeAtRange(i2, { exceptAttributeName: t2 });
        const e3 = r2.convertLineBreaksToBlockBreaksInRange(i2);
        r2 = e3.document, i2 = e3.range;
      } else
        r2 = o2.exclusive ? r2.removeBlockAttributesAtRange(i2) : o2.terminal ? r2.removeLastTerminalAttributeAtRange(i2) : r2.consolidateBlocksAtRange(i2);
      return r2.addAttributeAtRange(t2, e2, i2);
    }
    removeLastListAttributeAtRange(t2) {
      let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { blockList: i2 } = this;
      return this.eachBlockAtRange(t2, function(t3, n2, r2) {
        const o2 = t3.getLastAttribute();
        o2 && gt(o2).listAttribute && o2 !== e2.exceptAttributeName && (i2 = i2.editObjectAtIndex(r2, () => t3.removeAttribute(o2)));
      }), new this.constructor(i2);
    }
    removeLastTerminalAttributeAtRange(t2) {
      let { blockList: e2 } = this;
      return this.eachBlockAtRange(t2, function(t3, i2, n2) {
        const r2 = t3.getLastAttribute();
        r2 && gt(r2).terminal && (e2 = e2.editObjectAtIndex(n2, () => t3.removeAttribute(r2)));
      }), new this.constructor(e2);
    }
    removeBlockAttributesAtRange(t2) {
      let { blockList: e2 } = this;
      return this.eachBlockAtRange(t2, function(t3, i2, n2) {
        t3.hasAttributes() && (e2 = e2.editObjectAtIndex(n2, () => t3.copyWithoutAttributes()));
      }), new this.constructor(e2);
    }
    expandRangeToLineBreaksAndSplitBlocks(t2) {
      let e2;
      t2 = Lt(t2);
      let [i2, n2] = t2;
      const r2 = this.locationFromPosition(i2), o2 = this.locationFromPosition(n2);
      let s2 = this;
      const a2 = s2.getBlockAtIndex(r2.index);
      if (r2.offset = a2.findLineBreakInDirectionFromPosition("backward", r2.offset), null != r2.offset && (e2 = s2.positionFromLocation(r2), s2 = s2.insertBlockBreakAtRange([e2, e2 + 1]), o2.index += 1, o2.offset -= s2.getBlockAtIndex(r2.index).getLength(), r2.index += 1), r2.offset = 0, 0 === o2.offset && o2.index > r2.index)
        o2.index -= 1, o2.offset = s2.getBlockAtIndex(o2.index).getBlockBreakPosition();
      else {
        const t3 = s2.getBlockAtIndex(o2.index);
        "\n" === t3.text.getStringAtRange([o2.offset - 1, o2.offset]) ? o2.offset -= 1 : o2.offset = t3.findLineBreakInDirectionFromPosition("forward", o2.offset), o2.offset !== t3.getBlockBreakPosition() && (e2 = s2.positionFromLocation(o2), s2 = s2.insertBlockBreakAtRange([e2, e2 + 1]));
      }
      return i2 = s2.positionFromLocation(r2), n2 = s2.positionFromLocation(o2), { document: s2, range: t2 = Lt([i2, n2]) };
    }
    convertLineBreaksToBlockBreaksInRange(t2) {
      t2 = Lt(t2);
      let [e2] = t2;
      const i2 = this.getStringAtRange(t2).slice(0, -1);
      let n2 = this;
      return i2.replace(/.*?\n/g, function(t3) {
        e2 += t3.length, n2 = n2.insertBlockBreakAtRange([e2 - 1, e2]);
      }), { document: n2, range: t2 };
    }
    consolidateBlocksAtRange(t2) {
      t2 = Lt(t2);
      const [e2, i2] = t2, n2 = this.locationFromPosition(e2).index, r2 = this.locationFromPosition(i2).index;
      return new this.constructor(this.blockList.consolidateFromIndexToIndex(n2, r2));
    }
    getDocumentAtRange(t2) {
      t2 = Lt(t2);
      const e2 = this.blockList.getSplittableListInRange(t2).toArray();
      return new this.constructor(e2);
    }
    getStringAtRange(t2) {
      let e2;
      const i2 = t2 = Lt(t2);
      return i2[i2.length - 1] !== this.getLength() && (e2 = -1), this.getDocumentAtRange(t2).toString().slice(0, e2);
    }
    getBlockAtIndex(t2) {
      return this.blockList.getObjectAtIndex(t2);
    }
    getBlockAtPosition(t2) {
      const { index: e2 } = this.locationFromPosition(t2);
      return this.getBlockAtIndex(e2);
    }
    getTextAtIndex(t2) {
      var e2;
      return null === (e2 = this.getBlockAtIndex(t2)) || void 0 === e2 ? void 0 : e2.text;
    }
    getTextAtPosition(t2) {
      const { index: e2 } = this.locationFromPosition(t2);
      return this.getTextAtIndex(e2);
    }
    getPieceAtPosition(t2) {
      const { index: e2, offset: i2 } = this.locationFromPosition(t2);
      return this.getTextAtIndex(e2).getPieceAtPosition(i2);
    }
    getCharacterAtPosition(t2) {
      const { index: e2, offset: i2 } = this.locationFromPosition(t2);
      return this.getTextAtIndex(e2).getStringAtRange([i2, i2 + 1]);
    }
    getLength() {
      return this.blockList.getEndPosition();
    }
    getBlocks() {
      return this.blockList.toArray();
    }
    getBlockCount() {
      return this.blockList.length;
    }
    getEditCount() {
      return this.editCount;
    }
    eachBlock(t2) {
      return this.blockList.eachObject(t2);
    }
    eachBlockAtRange(t2, e2) {
      let i2, n2;
      t2 = Lt(t2);
      const [r2, o2] = t2, s2 = this.locationFromPosition(r2), a2 = this.locationFromPosition(o2);
      if (s2.index === a2.index)
        return i2 = this.getBlockAtIndex(s2.index), n2 = [s2.offset, a2.offset], e2(i2, n2, s2.index);
      for (let t3 = s2.index; t3 <= a2.index; t3++)
        if (i2 = this.getBlockAtIndex(t3), i2) {
          switch (t3) {
            case s2.index:
              n2 = [s2.offset, i2.text.getLength()];
              break;
            case a2.index:
              n2 = [0, a2.offset];
              break;
            default:
              n2 = [0, i2.text.getLength()];
          }
          e2(i2, n2, t3);
        }
    }
    getCommonAttributesAtRange(t2) {
      t2 = Lt(t2);
      const [e2] = t2;
      if (Dt(t2))
        return this.getCommonAttributesAtPosition(e2);
      {
        const e3 = [], i2 = [];
        return this.eachBlockAtRange(t2, function(t3, n2) {
          if (n2[0] !== n2[1])
            return e3.push(t3.text.getCommonAttributesAtRange(n2)), i2.push(Ve(t3));
        }), _t.fromCommonAttributesOfObjects(e3).merge(_t.fromCommonAttributesOfObjects(i2)).toObject();
      }
    }
    getCommonAttributesAtPosition(t2) {
      let e2, i2;
      const { index: n2, offset: r2 } = this.locationFromPosition(t2), o2 = this.getBlockAtIndex(n2);
      if (!o2)
        return {};
      const s2 = Ve(o2), a2 = o2.text.getAttributesAtPosition(r2), l2 = o2.text.getAttributesAtPosition(r2 - 1), c2 = Object.keys(W).filter((t3) => W[t3].inheritable);
      for (e2 in l2)
        i2 = l2[e2], (i2 === a2[e2] || c2.includes(e2)) && (s2[e2] = i2);
      return s2;
    }
    getRangeOfCommonAttributeAtPosition(t2, e2) {
      const { index: i2, offset: n2 } = this.locationFromPosition(e2), r2 = this.getTextAtIndex(i2), [o2, s2] = Array.from(r2.getExpandedRangeForAttributeAtOffset(t2, n2)), a2 = this.positionFromLocation({ index: i2, offset: o2 }), l2 = this.positionFromLocation({ index: i2, offset: s2 });
      return Lt([a2, l2]);
    }
    getBaseBlockAttributes() {
      let t2 = this.getBlockAtIndex(0).getAttributes();
      for (let e2 = 1; e2 < this.getBlockCount(); e2++) {
        const i2 = this.getBlockAtIndex(e2).getAttributes(), n2 = Math.min(t2.length, i2.length);
        t2 = (() => {
          const e3 = [];
          for (let r2 = 0; r2 < n2 && i2[r2] === t2[r2]; r2++)
            e3.push(i2[r2]);
          return e3;
        })();
      }
      return t2;
    }
    getAttachmentById(t2) {
      for (const e2 of this.getAttachments())
        if (e2.id === t2)
          return e2;
    }
    getAttachmentPieces() {
      let t2 = [];
      return this.blockList.eachObject((e2) => {
        let { text: i2 } = e2;
        return t2 = t2.concat(i2.getAttachmentPieces());
      }), t2;
    }
    getAttachments() {
      return this.getAttachmentPieces().map((t2) => t2.attachment);
    }
    getRangeOfAttachment(t2) {
      let e2 = 0;
      const i2 = this.blockList.toArray();
      for (let n2 = 0; n2 < i2.length; n2++) {
        const { text: r2 } = i2[n2], o2 = r2.getRangeOfAttachment(t2);
        if (o2)
          return Lt([e2 + o2[0], e2 + o2[1]]);
        e2 += r2.getLength();
      }
    }
    getLocationRangeOfAttachment(t2) {
      const e2 = this.getRangeOfAttachment(t2);
      return this.locationRangeFromRange(e2);
    }
    getAttachmentPieceForAttachment(t2) {
      for (const e2 of this.getAttachmentPieces())
        if (e2.attachment === t2)
          return e2;
    }
    findRangesForBlockAttribute(t2) {
      let e2 = 0;
      const i2 = [];
      return this.getBlocks().forEach((n2) => {
        const r2 = n2.getLength();
        n2.hasAttribute(t2) && i2.push([e2, e2 + r2]), e2 += r2;
      }), i2;
    }
    findRangesForTextAttribute(t2) {
      let { withValue: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i2 = 0, n2 = [];
      const r2 = [];
      return this.getPieces().forEach((o2) => {
        const s2 = o2.getLength();
        (function(i3) {
          return e2 ? i3.getAttribute(t2) === e2 : i3.hasAttribute(t2);
        })(o2) && (n2[1] === i2 ? n2[1] = i2 + s2 : r2.push(n2 = [i2, i2 + s2])), i2 += s2;
      }), r2;
    }
    locationFromPosition(t2) {
      const e2 = this.blockList.findIndexAndOffsetAtPosition(Math.max(0, t2));
      if (null != e2.index)
        return e2;
      {
        const t3 = this.getBlocks();
        return { index: t3.length - 1, offset: t3[t3.length - 1].getLength() };
      }
    }
    positionFromLocation(t2) {
      return this.blockList.findPositionAtIndexAndOffset(t2.index, t2.offset);
    }
    locationRangeFromPosition(t2) {
      return Lt(this.locationFromPosition(t2));
    }
    locationRangeFromRange(t2) {
      if (!(t2 = Lt(t2)))
        return;
      const [e2, i2] = Array.from(t2), n2 = this.locationFromPosition(e2), r2 = this.locationFromPosition(i2);
      return Lt([n2, r2]);
    }
    rangeFromLocationRange(t2) {
      let e2;
      t2 = Lt(t2);
      const i2 = this.positionFromLocation(t2[0]);
      return Dt(t2) || (e2 = this.positionFromLocation(t2[1])), Lt([i2, e2]);
    }
    isEqualTo(t2) {
      return this.blockList.isEqualTo(null == t2 ? void 0 : t2.blockList);
    }
    getTexts() {
      return this.getBlocks().map((t2) => t2.text);
    }
    getPieces() {
      const t2 = [];
      return Array.from(this.getTexts()).forEach((e2) => {
        t2.push(...Array.from(e2.getPieces() || []));
      }), t2;
    }
    getObjects() {
      return this.getBlocks().concat(this.getTexts()).concat(this.getPieces());
    }
    toSerializableDocument() {
      const t2 = [];
      return this.blockList.eachObject((e2) => t2.push(e2.copyWithText(e2.text.toSerializableText()))), new this.constructor(t2);
    }
    toString() {
      return this.blockList.toString();
    }
    toJSON() {
      return this.blockList.toJSON();
    }
    toConsole() {
      return JSON.stringify(this.blockList.toArray().map((t2) => JSON.parse(t2.text.toConsole())));
    }
  };
  var Ve = function(t2) {
    const e2 = {}, i2 = t2.getLastAttribute();
    return i2 && (e2[i2] = true), e2;
  };
  var ze = "style href src width height class".split(" ");
  var _e = "javascript:".split(" ");
  var He = "script iframe form".split(" ");
  var Je = class extends z {
    static sanitize(t2, e2) {
      const i2 = new this(t2, e2);
      return i2.sanitize(), i2;
    }
    constructor(t2) {
      let { allowedAttributes: e2, forbiddenProtocols: i2, forbiddenElements: n2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      super(...arguments), this.allowedAttributes = e2 || ze, this.forbiddenProtocols = i2 || _e, this.forbiddenElements = n2 || He, this.body = Ke(t2);
    }
    sanitize() {
      return this.sanitizeElements(), this.normalizeListElementNesting();
    }
    getHTML() {
      return this.body.innerHTML;
    }
    getBody() {
      return this.body;
    }
    sanitizeElements() {
      const t2 = S(this.body), e2 = [];
      for (; t2.nextNode(); ) {
        const i2 = t2.currentNode;
        switch (i2.nodeType) {
          case Node.ELEMENT_NODE:
            this.elementIsRemovable(i2) ? e2.push(i2) : this.sanitizeElement(i2);
            break;
          case Node.COMMENT_NODE:
            e2.push(i2);
        }
      }
      return e2.forEach((t3) => R(t3)), this.body;
    }
    sanitizeElement(t2) {
      return t2.hasAttribute("href") && this.forbiddenProtocols.includes(t2.protocol) && t2.removeAttribute("href"), Array.from(t2.attributes).forEach((e2) => {
        let { name: i2 } = e2;
        this.allowedAttributes.includes(i2) || 0 === i2.indexOf("data-trix") || t2.removeAttribute(i2);
      }), t2;
    }
    normalizeListElementNesting() {
      return Array.from(this.body.querySelectorAll("ul,ol")).forEach((t2) => {
        const e2 = t2.previousElementSibling;
        e2 && "li" === E(e2) && e2.appendChild(t2);
      }), this.body;
    }
    elementIsRemovable(t2) {
      if ((null == t2 ? void 0 : t2.nodeType) === Node.ELEMENT_NODE)
        return this.elementIsForbidden(t2) || this.elementIsntSerializable(t2);
    }
    elementIsForbidden(t2) {
      return this.forbiddenElements.includes(E(t2));
    }
    elementIsntSerializable(t2) {
      return "false" === t2.getAttribute("data-trix-serialize") && !P(t2);
    }
  };
  var Ke = function() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    t2 = t2.replace(/<\/html[^>]*>[^]*$/i, "</html>");
    const e2 = document.implementation.createHTMLDocument("");
    return e2.documentElement.innerHTML = t2, Array.from(e2.head.querySelectorAll("style")).forEach((t3) => {
      e2.body.appendChild(t3);
    }), e2.body;
  };
  var Ge = function(t2) {
    let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return { string: t2 = Wt(t2), attributes: e2, type: "string" };
  };
  var $e = (t2, e2) => {
    try {
      return JSON.parse(t2.getAttribute("data-trix-".concat(e2)));
    } catch (t3) {
      return {};
    }
  };
  var Xe = class extends z {
    static parse(t2, e2) {
      const i2 = new this(t2, e2);
      return i2.parse(), i2;
    }
    constructor(t2) {
      let { referenceElement: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      super(...arguments), this.html = t2, this.referenceElement = e2, this.blocks = [], this.blockElements = [], this.processedElements = [];
    }
    getDocument() {
      return qe.fromJSON(this.blocks);
    }
    parse() {
      try {
        this.createHiddenContainer();
        const t2 = Je.sanitize(this.html).getHTML();
        this.containerElement.innerHTML = t2;
        const e2 = S(this.containerElement, { usingFilter: ti });
        for (; e2.nextNode(); )
          this.processNode(e2.currentNode);
        return this.translateBlockElementMarginsToNewlines();
      } finally {
        this.removeHiddenContainer();
      }
    }
    createHiddenContainer() {
      return this.referenceElement ? (this.containerElement = this.referenceElement.cloneNode(false), this.containerElement.removeAttribute("id"), this.containerElement.setAttribute("data-trix-internal", ""), this.containerElement.style.display = "none", this.referenceElement.parentNode.insertBefore(this.containerElement, this.referenceElement.nextSibling)) : (this.containerElement = k({ tagName: "div", style: { display: "none" } }), document.body.appendChild(this.containerElement));
    }
    removeHiddenContainer() {
      return R(this.containerElement);
    }
    processNode(t2) {
      switch (t2.nodeType) {
        case Node.TEXT_NODE:
          if (!this.isInsignificantTextNode(t2))
            return this.appendBlockForTextNode(t2), this.processTextNode(t2);
          break;
        case Node.ELEMENT_NODE:
          return this.appendBlockForElement(t2), this.processElement(t2);
      }
    }
    appendBlockForTextNode(t2) {
      const e2 = t2.parentNode;
      if (e2 === this.currentBlockElement && this.isBlockElement(t2.previousSibling))
        return this.appendStringWithAttributes("\n");
      if (e2 === this.containerElement || this.isBlockElement(e2)) {
        var i2;
        const t3 = this.getBlockAttributes(e2);
        rt(t3, null === (i2 = this.currentBlock) || void 0 === i2 ? void 0 : i2.attributes) || (this.currentBlock = this.appendBlockForAttributesWithElement(t3, e2), this.currentBlockElement = e2);
      }
    }
    appendBlockForElement(t2) {
      const e2 = this.isBlockElement(t2), i2 = y(this.currentBlockElement, t2);
      if (e2 && !this.isBlockElement(t2.firstChild)) {
        if (!this.isInsignificantTextNode(t2.firstChild) || !this.isBlockElement(t2.firstElementChild)) {
          const e3 = this.getBlockAttributes(t2);
          if (t2.firstChild) {
            if (i2 && rt(e3, this.currentBlock.attributes))
              return this.appendStringWithAttributes("\n");
            this.currentBlock = this.appendBlockForAttributesWithElement(e3, t2), this.currentBlockElement = t2;
          }
        }
      } else if (this.currentBlockElement && !i2 && !e2) {
        const e3 = this.findParentBlockElement(t2);
        if (e3)
          return this.appendBlockForElement(e3);
        this.currentBlock = this.appendEmptyBlock(), this.currentBlockElement = null;
      }
    }
    findParentBlockElement(t2) {
      let { parentElement: e2 } = t2;
      for (; e2 && e2 !== this.containerElement; ) {
        if (this.isBlockElement(e2) && this.blockElements.includes(e2))
          return e2;
        e2 = e2.parentElement;
      }
      return null;
    }
    processTextNode(t2) {
      let e2 = t2.data;
      var i2;
      Ye(t2.parentNode) || (e2 = qt(e2), ni(null === (i2 = t2.previousSibling) || void 0 === i2 ? void 0 : i2.textContent) && (e2 = ei(e2)));
      return this.appendStringWithAttributes(e2, this.getTextAttributes(t2.parentNode));
    }
    processElement(t2) {
      let e2;
      if (P(t2)) {
        if (e2 = $e(t2, "attachment"), Object.keys(e2).length) {
          const i2 = this.getTextAttributes(t2);
          this.appendAttachmentWithAttributes(e2, i2), t2.innerHTML = "";
        }
        return this.processedElements.push(t2);
      }
      switch (E(t2)) {
        case "br":
          return this.isExtraBR(t2) || this.isBlockElement(t2.nextSibling) || this.appendStringWithAttributes("\n", this.getTextAttributes(t2)), this.processedElements.push(t2);
        case "img":
          e2 = { url: t2.getAttribute("src"), contentType: "image" };
          const i2 = ((t3) => {
            const e3 = t3.getAttribute("width"), i3 = t3.getAttribute("height"), n2 = {};
            return e3 && (n2.width = parseInt(e3, 10)), i3 && (n2.height = parseInt(i3, 10)), n2;
          })(t2);
          for (const t3 in i2) {
            const n2 = i2[t3];
            e2[t3] = n2;
          }
          return this.appendAttachmentWithAttributes(e2, this.getTextAttributes(t2)), this.processedElements.push(t2);
        case "tr":
          if (this.needsTableSeparator(t2))
            return this.appendStringWithAttributes(j.tableRowSeparator);
          break;
        case "td":
          if (this.needsTableSeparator(t2))
            return this.appendStringWithAttributes(j.tableCellSeparator);
      }
    }
    appendBlockForAttributesWithElement(t2, e2) {
      this.blockElements.push(e2);
      const i2 = function() {
        return { text: [], attributes: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {} };
      }(t2);
      return this.blocks.push(i2), i2;
    }
    appendEmptyBlock() {
      return this.appendBlockForAttributesWithElement([], null);
    }
    appendStringWithAttributes(t2, e2) {
      return this.appendPiece(Ge(t2, e2));
    }
    appendAttachmentWithAttributes(t2, e2) {
      return this.appendPiece(function(t3) {
        return { attachment: t3, attributes: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, type: "attachment" };
      }(t2, e2));
    }
    appendPiece(t2) {
      return 0 === this.blocks.length && this.appendEmptyBlock(), this.blocks[this.blocks.length - 1].text.push(t2);
    }
    appendStringToTextAtIndex(t2, e2) {
      const { text: i2 } = this.blocks[e2], n2 = i2[i2.length - 1];
      if ("string" !== (null == n2 ? void 0 : n2.type))
        return i2.push(Ge(t2));
      n2.string += t2;
    }
    prependStringToTextAtIndex(t2, e2) {
      const { text: i2 } = this.blocks[e2], n2 = i2[0];
      if ("string" !== (null == n2 ? void 0 : n2.type))
        return i2.unshift(Ge(t2));
      n2.string = t2 + n2.string;
    }
    getTextAttributes(t2) {
      let e2;
      const i2 = {};
      for (const n2 in W) {
        const r2 = W[n2];
        if (r2.tagName && A(t2, { matchingSelector: r2.tagName, untilNode: this.containerElement }))
          i2[n2] = true;
        else if (r2.parser) {
          if (e2 = r2.parser(t2), e2) {
            let o2 = false;
            for (const i3 of this.findBlockElementAncestors(t2))
              if (r2.parser(i3) === e2) {
                o2 = true;
                break;
              }
            o2 || (i2[n2] = e2);
          }
        } else
          r2.styleProperty && (e2 = t2.style[r2.styleProperty], e2 && (i2[n2] = e2));
      }
      if (P(t2)) {
        const n2 = $e(t2, "attributes");
        for (const t3 in n2)
          e2 = n2[t3], i2[t3] = e2;
      }
      return i2;
    }
    getBlockAttributes(t2) {
      const e2 = [];
      for (; t2 && t2 !== this.containerElement; ) {
        for (const r2 in n) {
          const o2 = n[r2];
          var i2;
          if (false !== o2.parse) {
            if (E(t2) === o2.tagName)
              (null !== (i2 = o2.test) && void 0 !== i2 && i2.call(o2, t2) || !o2.test) && (e2.push(r2), o2.listAttribute && e2.push(o2.listAttribute));
          }
        }
        t2 = t2.parentNode;
      }
      return e2.reverse();
    }
    findBlockElementAncestors(t2) {
      const e2 = [];
      for (; t2 && t2 !== this.containerElement; ) {
        const i2 = E(t2);
        D().includes(i2) && e2.push(t2), t2 = t2.parentNode;
      }
      return e2;
    }
    isBlockElement(t2) {
      if ((null == t2 ? void 0 : t2.nodeType) === Node.ELEMENT_NODE && !P(t2) && !A(t2, { matchingSelector: "td", untilNode: this.containerElement }))
        return D().includes(E(t2)) || "block" === window.getComputedStyle(t2).display;
    }
    isInsignificantTextNode(t2) {
      if ((null == t2 ? void 0 : t2.nodeType) !== Node.TEXT_NODE)
        return;
      if (!ii(t2.data))
        return;
      const { parentNode: e2, previousSibling: i2, nextSibling: n2 } = t2;
      return Qe(e2.previousSibling) && !this.isBlockElement(e2.previousSibling) || Ye(e2) ? void 0 : !i2 || this.isBlockElement(i2) || !n2 || this.isBlockElement(n2);
    }
    isExtraBR(t2) {
      return "br" === E(t2) && this.isBlockElement(t2.parentNode) && t2.parentNode.lastChild === t2;
    }
    needsTableSeparator(t2) {
      if (j.removeBlankTableCells) {
        var e2;
        const i2 = null === (e2 = t2.previousSibling) || void 0 === e2 ? void 0 : e2.textContent;
        return i2 && /\S/.test(i2);
      }
      return t2.previousSibling;
    }
    translateBlockElementMarginsToNewlines() {
      const t2 = this.getMarginOfDefaultBlockElement();
      for (let e2 = 0; e2 < this.blocks.length; e2++) {
        const i2 = this.getMarginOfBlockElementAtIndex(e2);
        i2 && (i2.top > 2 * t2.top && this.prependStringToTextAtIndex("\n", e2), i2.bottom > 2 * t2.bottom && this.appendStringToTextAtIndex("\n", e2));
      }
    }
    getMarginOfBlockElementAtIndex(t2) {
      const e2 = this.blockElements[t2];
      if (e2 && e2.textContent && !D().includes(E(e2)) && !this.processedElements.includes(e2))
        return Ze(e2);
    }
    getMarginOfDefaultBlockElement() {
      const t2 = k(n.default.tagName);
      return this.containerElement.appendChild(t2), Ze(t2);
    }
  };
  var Ye = function(t2) {
    const { whiteSpace: e2 } = window.getComputedStyle(t2);
    return ["pre", "pre-wrap", "pre-line"].includes(e2);
  };
  var Qe = (t2) => t2 && !ni(t2.textContent);
  var Ze = function(t2) {
    const e2 = window.getComputedStyle(t2);
    if ("block" === e2.display)
      return { top: parseInt(e2.marginTop), bottom: parseInt(e2.marginBottom) };
  };
  var ti = function(t2) {
    return "style" === E(t2) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  };
  var ei = (t2) => t2.replace(new RegExp("^".concat(Ut.source, "+")), "");
  var ii = (t2) => new RegExp("^".concat(Ut.source, "*$")).test(t2);
  var ni = (t2) => /\s$/.test(t2);
  var ri = ["contenteditable", "data-trix-id", "data-trix-store-key", "data-trix-mutable", "data-trix-placeholder", "tabindex"];
  var oi = "data-trix-serialized-attributes";
  var si = "[".concat(oi, "]");
  var ai = new RegExp("<!--block-->", "g");
  var li = { "application/json": function(t2) {
    let e2;
    if (t2 instanceof qe)
      e2 = t2;
    else {
      if (!(t2 instanceof HTMLElement))
        throw new Error("unserializable object");
      e2 = Xe.parse(t2.innerHTML).getDocument();
    }
    return e2.toSerializableDocument().toJSONString();
  }, "text/html": function(t2) {
    let e2;
    if (t2 instanceof qe)
      e2 = ge.render(t2);
    else {
      if (!(t2 instanceof HTMLElement))
        throw new Error("unserializable object");
      e2 = t2.cloneNode(true);
    }
    return Array.from(e2.querySelectorAll("[data-trix-serialize=false]")).forEach((t3) => {
      R(t3);
    }), ri.forEach((t3) => {
      Array.from(e2.querySelectorAll("[".concat(t3, "]"))).forEach((e3) => {
        e3.removeAttribute(t3);
      });
    }), Array.from(e2.querySelectorAll(si)).forEach((t3) => {
      try {
        const e3 = JSON.parse(t3.getAttribute(oi));
        t3.removeAttribute(oi);
        for (const i2 in e3) {
          const n2 = e3[i2];
          t3.setAttribute(i2, n2);
        }
      } catch (t4) {
      }
    }), e2.innerHTML.replace(ai, "");
  } };
  var ci = Object.freeze({ __proto__: null });
  var hi = class extends z {
    constructor(t2, e2) {
      super(...arguments), this.attachmentManager = t2, this.attachment = e2, this.id = this.attachment.id, this.file = this.attachment.file;
    }
    remove() {
      return this.attachmentManager.requestRemovalOfAttachment(this.attachment);
    }
  };
  hi.proxyMethod("attachment.getAttribute"), hi.proxyMethod("attachment.hasAttribute"), hi.proxyMethod("attachment.setAttribute"), hi.proxyMethod("attachment.getAttributes"), hi.proxyMethod("attachment.setAttributes"), hi.proxyMethod("attachment.isPending"), hi.proxyMethod("attachment.isPreviewable"), hi.proxyMethod("attachment.getURL"), hi.proxyMethod("attachment.getHref"), hi.proxyMethod("attachment.getFilename"), hi.proxyMethod("attachment.getFilesize"), hi.proxyMethod("attachment.getFormattedFilesize"), hi.proxyMethod("attachment.getExtension"), hi.proxyMethod("attachment.getContentType"), hi.proxyMethod("attachment.getFile"), hi.proxyMethod("attachment.setFile"), hi.proxyMethod("attachment.releaseFile"), hi.proxyMethod("attachment.getUploadProgress"), hi.proxyMethod("attachment.setUploadProgress");
  var ui = class extends z {
    constructor() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      super(...arguments), this.managedAttachments = {}, Array.from(t2).forEach((t3) => {
        this.manageAttachment(t3);
      });
    }
    getAttachments() {
      const t2 = [];
      for (const e2 in this.managedAttachments) {
        const i2 = this.managedAttachments[e2];
        t2.push(i2);
      }
      return t2;
    }
    manageAttachment(t2) {
      return this.managedAttachments[t2.id] || (this.managedAttachments[t2.id] = new hi(this, t2)), this.managedAttachments[t2.id];
    }
    attachmentIsManaged(t2) {
      return t2.id in this.managedAttachments;
    }
    requestRemovalOfAttachment(t2) {
      var e2, i2;
      if (this.attachmentIsManaged(t2))
        return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.attachmentManagerDidRequestRemovalOfAttachment) || void 0 === i2 ? void 0 : i2.call(e2, t2);
    }
    unmanageAttachment(t2) {
      const e2 = this.managedAttachments[t2.id];
      return delete this.managedAttachments[t2.id], e2;
    }
  };
  var di = class {
    constructor(t2) {
      this.composition = t2, this.document = this.composition.document;
      const e2 = this.composition.getSelectedRange();
      this.startPosition = e2[0], this.endPosition = e2[1], this.startLocation = this.document.locationFromPosition(this.startPosition), this.endLocation = this.document.locationFromPosition(this.endPosition), this.block = this.document.getBlockAtIndex(this.endLocation.index), this.breaksOnReturn = this.block.breaksOnReturn(), this.previousCharacter = this.block.text.getStringAtPosition(this.endLocation.offset - 1), this.nextCharacter = this.block.text.getStringAtPosition(this.endLocation.offset);
    }
    shouldInsertBlockBreak() {
      return this.block.hasAttributes() && this.block.isListItem() && !this.block.isEmpty() ? 0 !== this.startLocation.offset : this.breaksOnReturn && "\n" !== this.nextCharacter;
    }
    shouldBreakFormattedBlock() {
      return this.block.hasAttributes() && !this.block.isListItem() && (this.breaksOnReturn && "\n" === this.nextCharacter || "\n" === this.previousCharacter);
    }
    shouldDecreaseListLevel() {
      return this.block.hasAttributes() && this.block.isListItem() && this.block.isEmpty();
    }
    shouldPrependListItem() {
      return this.block.isListItem() && 0 === this.startLocation.offset && !this.block.isEmpty();
    }
    shouldRemoveLastBlockAttribute() {
      return this.block.hasAttributes() && !this.block.isListItem() && this.block.isEmpty();
    }
  };
  var gi = class extends z {
    constructor() {
      super(...arguments), this.document = new qe(), this.attachments = [], this.currentAttributes = {}, this.revision = 0;
    }
    setDocument(t2) {
      var e2, i2;
      if (!t2.isEqualTo(this.document))
        return this.document = t2, this.refreshAttachments(), this.revision++, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionDidChangeDocument) || void 0 === i2 ? void 0 : i2.call(e2, t2);
    }
    getSnapshot() {
      return { document: this.document, selectedRange: this.getSelectedRange() };
    }
    loadSnapshot(t2) {
      var e2, i2, n2, r2;
      let { document: o2, selectedRange: s2 } = t2;
      return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionWillLoadSnapshot) || void 0 === i2 || i2.call(e2), this.setDocument(null != o2 ? o2 : new qe()), this.setSelection(null != s2 ? s2 : [0, 0]), null === (n2 = this.delegate) || void 0 === n2 || null === (r2 = n2.compositionDidLoadSnapshot) || void 0 === r2 ? void 0 : r2.call(n2);
    }
    insertText(t2) {
      let { updatePosition: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { updatePosition: true };
      const i2 = this.getSelectedRange();
      this.setDocument(this.document.insertTextAtRange(t2, i2));
      const n2 = i2[0], r2 = n2 + t2.getLength();
      return e2 && this.setSelection(r2), this.notifyDelegateOfInsertionAtRange([n2, r2]);
    }
    insertBlock() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Be();
      const e2 = new qe([t2]);
      return this.insertDocument(e2);
    }
    insertDocument() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new qe();
      const e2 = this.getSelectedRange();
      this.setDocument(this.document.insertDocumentAtRange(t2, e2));
      const i2 = e2[0], n2 = i2 + t2.getLength();
      return this.setSelection(n2), this.notifyDelegateOfInsertionAtRange([i2, n2]);
    }
    insertString(t2, e2) {
      const i2 = this.getCurrentTextAttributes(), n2 = Te.textForStringWithAttributes(t2, i2);
      return this.insertText(n2, e2);
    }
    insertBlockBreak() {
      const t2 = this.getSelectedRange();
      this.setDocument(this.document.insertBlockBreakAtRange(t2));
      const e2 = t2[0], i2 = e2 + 1;
      return this.setSelection(i2), this.notifyDelegateOfInsertionAtRange([e2, i2]);
    }
    insertLineBreak() {
      const t2 = new di(this);
      if (t2.shouldDecreaseListLevel())
        return this.decreaseListLevel(), this.setSelection(t2.startPosition);
      if (t2.shouldPrependListItem()) {
        const e2 = new qe([t2.block.copyWithoutText()]);
        return this.insertDocument(e2);
      }
      return t2.shouldInsertBlockBreak() ? this.insertBlockBreak() : t2.shouldRemoveLastBlockAttribute() ? this.removeLastBlockAttribute() : t2.shouldBreakFormattedBlock() ? this.breakFormattedBlock(t2) : this.insertString("\n");
    }
    insertHTML(t2) {
      const e2 = Xe.parse(t2).getDocument(), i2 = this.getSelectedRange();
      this.setDocument(this.document.mergeDocumentAtRange(e2, i2));
      const n2 = i2[0], r2 = n2 + e2.getLength() - 1;
      return this.setSelection(r2), this.notifyDelegateOfInsertionAtRange([n2, r2]);
    }
    replaceHTML(t2) {
      const e2 = Xe.parse(t2).getDocument().copyUsingObjectsFromDocument(this.document), i2 = this.getLocationRange({ strict: false }), n2 = this.document.rangeFromLocationRange(i2);
      return this.setDocument(e2), this.setSelection(n2);
    }
    insertFile(t2) {
      return this.insertFiles([t2]);
    }
    insertFiles(t2) {
      const e2 = [];
      return Array.from(t2).forEach((t3) => {
        var i2;
        if (null !== (i2 = this.delegate) && void 0 !== i2 && i2.compositionShouldAcceptFile(t3)) {
          const i3 = Re.attachmentForFile(t3);
          e2.push(i3);
        }
      }), this.insertAttachments(e2);
    }
    insertAttachment(t2) {
      return this.insertAttachments([t2]);
    }
    insertAttachments(t2) {
      let e2 = new Te();
      return Array.from(t2).forEach((t3) => {
        var n2;
        const r2 = t3.getType(), o2 = null === (n2 = i[r2]) || void 0 === n2 ? void 0 : n2.presentation, s2 = this.getCurrentTextAttributes();
        o2 && (s2.presentation = o2);
        const a2 = Te.textForAttachmentWithAttributes(t3, s2);
        e2 = e2.appendText(a2);
      }), this.insertText(e2);
    }
    shouldManageDeletingInDirection(t2) {
      const e2 = this.getLocationRange();
      if (Dt(e2)) {
        if ("backward" === t2 && 0 === e2[0].offset)
          return true;
        if (this.shouldManageMovingCursorInDirection(t2))
          return true;
      } else if (e2[0].index !== e2[1].index)
        return true;
      return false;
    }
    deleteInDirection(t2) {
      let e2, i2, n2, { length: r2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const o2 = this.getLocationRange();
      let s2 = this.getSelectedRange();
      const a2 = Dt(s2);
      if (a2 ? i2 = "backward" === t2 && 0 === o2[0].offset : n2 = o2[0].index !== o2[1].index, i2 && this.canDecreaseBlockAttributeLevel()) {
        const t3 = this.getBlock();
        if (t3.isListItem() ? this.decreaseListLevel() : this.decreaseBlockAttributeLevel(), this.setSelection(s2[0]), t3.isEmpty())
          return false;
      }
      return a2 && (s2 = this.getExpandedRangeInDirection(t2, { length: r2 }), "backward" === t2 && (e2 = this.getAttachmentAtRange(s2))), e2 ? (this.editAttachment(e2), false) : (this.setDocument(this.document.removeTextAtRange(s2)), this.setSelection(s2[0]), !i2 && !n2 && void 0);
    }
    moveTextFromRange(t2) {
      const [e2] = Array.from(this.getSelectedRange());
      return this.setDocument(this.document.moveTextFromRangeToPosition(t2, e2)), this.setSelection(e2);
    }
    removeAttachment(t2) {
      const e2 = this.document.getRangeOfAttachment(t2);
      if (e2)
        return this.stopEditingAttachment(), this.setDocument(this.document.removeTextAtRange(e2)), this.setSelection(e2[0]);
    }
    removeLastBlockAttribute() {
      const [t2, e2] = Array.from(this.getSelectedRange()), i2 = this.document.getBlockAtPosition(e2);
      return this.removeCurrentAttribute(i2.getLastAttribute()), this.setSelection(t2);
    }
    insertPlaceholder() {
      return this.placeholderPosition = this.getPosition(), this.insertString(" ");
    }
    selectPlaceholder() {
      if (null != this.placeholderPosition)
        return this.setSelectedRange([this.placeholderPosition, this.placeholderPosition + 1]), this.getSelectedRange();
    }
    forgetPlaceholder() {
      this.placeholderPosition = null;
    }
    hasCurrentAttribute(t2) {
      const e2 = this.currentAttributes[t2];
      return null != e2 && false !== e2;
    }
    toggleCurrentAttribute(t2) {
      const e2 = !this.currentAttributes[t2];
      return e2 ? this.setCurrentAttribute(t2, e2) : this.removeCurrentAttribute(t2);
    }
    canSetCurrentAttribute(t2) {
      return gt(t2) ? this.canSetCurrentBlockAttribute(t2) : this.canSetCurrentTextAttribute(t2);
    }
    canSetCurrentTextAttribute(t2) {
      const e2 = this.getSelectedDocument();
      if (e2) {
        for (const t3 of Array.from(e2.getAttachments()))
          if (!t3.hasContent())
            return false;
        return true;
      }
    }
    canSetCurrentBlockAttribute(t2) {
      const e2 = this.getBlock();
      if (e2)
        return !e2.isTerminalBlock();
    }
    setCurrentAttribute(t2, e2) {
      return gt(t2) ? this.setBlockAttribute(t2, e2) : (this.setTextAttribute(t2, e2), this.currentAttributes[t2] = e2, this.notifyDelegateOfCurrentAttributesChange());
    }
    setTextAttribute(t2, e2) {
      const i2 = this.getSelectedRange();
      if (!i2)
        return;
      const [n2, r2] = Array.from(i2);
      if (n2 !== r2)
        return this.setDocument(this.document.addAttributeAtRange(t2, e2, i2));
      if ("href" === t2) {
        const t3 = Te.textForStringWithAttributes(e2, { href: e2 });
        return this.insertText(t3);
      }
    }
    setBlockAttribute(t2, e2) {
      const i2 = this.getSelectedRange();
      if (this.canSetCurrentAttribute(t2))
        return this.setDocument(this.document.applyBlockAttributeAtRange(t2, e2, i2)), this.setSelection(i2);
    }
    removeCurrentAttribute(t2) {
      return gt(t2) ? (this.removeBlockAttribute(t2), this.updateCurrentAttributes()) : (this.removeTextAttribute(t2), delete this.currentAttributes[t2], this.notifyDelegateOfCurrentAttributesChange());
    }
    removeTextAttribute(t2) {
      const e2 = this.getSelectedRange();
      if (e2)
        return this.setDocument(this.document.removeAttributeAtRange(t2, e2));
    }
    removeBlockAttribute(t2) {
      const e2 = this.getSelectedRange();
      if (e2)
        return this.setDocument(this.document.removeAttributeAtRange(t2, e2));
    }
    canDecreaseNestingLevel() {
      var t2;
      return (null === (t2 = this.getBlock()) || void 0 === t2 ? void 0 : t2.getNestingLevel()) > 0;
    }
    canIncreaseNestingLevel() {
      var t2;
      const e2 = this.getBlock();
      if (e2) {
        if (null === (t2 = gt(e2.getLastNestableAttribute())) || void 0 === t2 || !t2.listAttribute)
          return e2.getNestingLevel() > 0;
        {
          const t3 = this.getPreviousBlock();
          if (t3)
            return function() {
              let t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              return rt((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).slice(0, t4.length), t4);
            }(t3.getListItemAttributes(), e2.getListItemAttributes());
        }
      }
    }
    decreaseNestingLevel() {
      const t2 = this.getBlock();
      if (t2)
        return this.setDocument(this.document.replaceBlock(t2, t2.decreaseNestingLevel()));
    }
    increaseNestingLevel() {
      const t2 = this.getBlock();
      if (t2)
        return this.setDocument(this.document.replaceBlock(t2, t2.increaseNestingLevel()));
    }
    canDecreaseBlockAttributeLevel() {
      var t2;
      return (null === (t2 = this.getBlock()) || void 0 === t2 ? void 0 : t2.getAttributeLevel()) > 0;
    }
    decreaseBlockAttributeLevel() {
      var t2;
      const e2 = null === (t2 = this.getBlock()) || void 0 === t2 ? void 0 : t2.getLastAttribute();
      if (e2)
        return this.removeCurrentAttribute(e2);
    }
    decreaseListLevel() {
      let [t2] = Array.from(this.getSelectedRange());
      const { index: e2 } = this.document.locationFromPosition(t2);
      let i2 = e2;
      const n2 = this.getBlock().getAttributeLevel();
      let r2 = this.document.getBlockAtIndex(i2 + 1);
      for (; r2 && r2.isListItem() && !(r2.getAttributeLevel() <= n2); )
        i2++, r2 = this.document.getBlockAtIndex(i2 + 1);
      t2 = this.document.positionFromLocation({ index: e2, offset: 0 });
      const o2 = this.document.positionFromLocation({ index: i2, offset: 0 });
      return this.setDocument(this.document.removeLastListAttributeAtRange([t2, o2]));
    }
    updateCurrentAttributes() {
      const t2 = this.getSelectedRange({ ignoreLock: true });
      if (t2) {
        const e2 = this.document.getCommonAttributesAtRange(t2);
        if (Array.from(dt()).forEach((t3) => {
          e2[t3] || this.canSetCurrentAttribute(t3) || (e2[t3] = false);
        }), !kt(e2, this.currentAttributes))
          return this.currentAttributes = e2, this.notifyDelegateOfCurrentAttributesChange();
      }
    }
    getCurrentAttributes() {
      return g.call({}, this.currentAttributes);
    }
    getCurrentTextAttributes() {
      const t2 = {};
      for (const e2 in this.currentAttributes) {
        const i2 = this.currentAttributes[e2];
        false !== i2 && pt(e2) && (t2[e2] = i2);
      }
      return t2;
    }
    freezeSelection() {
      return this.setCurrentAttribute("frozen", true);
    }
    thawSelection() {
      return this.removeCurrentAttribute("frozen");
    }
    hasFrozenSelection() {
      return this.hasCurrentAttribute("frozen");
    }
    setSelection(t2) {
      var e2;
      const i2 = this.document.locationRangeFromRange(t2);
      return null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.compositionDidRequestChangingSelectionToLocationRange(i2);
    }
    getSelectedRange() {
      const t2 = this.getLocationRange();
      if (t2)
        return this.document.rangeFromLocationRange(t2);
    }
    setSelectedRange(t2) {
      const e2 = this.document.locationRangeFromRange(t2);
      return this.getSelectionManager().setLocationRange(e2);
    }
    getPosition() {
      const t2 = this.getLocationRange();
      if (t2)
        return this.document.positionFromLocation(t2[0]);
    }
    getLocationRange(t2) {
      return this.targetLocationRange ? this.targetLocationRange : this.getSelectionManager().getLocationRange(t2) || Lt({ index: 0, offset: 0 });
    }
    withTargetLocationRange(t2, e2) {
      let i2;
      this.targetLocationRange = t2;
      try {
        i2 = e2();
      } finally {
        this.targetLocationRange = null;
      }
      return i2;
    }
    withTargetRange(t2, e2) {
      const i2 = this.document.locationRangeFromRange(t2);
      return this.withTargetLocationRange(i2, e2);
    }
    withTargetDOMRange(t2, e2) {
      const i2 = this.createLocationRangeFromDOMRange(t2, { strict: false });
      return this.withTargetLocationRange(i2, e2);
    }
    getExpandedRangeInDirection(t2) {
      let { length: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, [i2, n2] = Array.from(this.getSelectedRange());
      return "backward" === t2 ? e2 ? i2 -= e2 : i2 = this.translateUTF16PositionFromOffset(i2, -1) : e2 ? n2 += e2 : n2 = this.translateUTF16PositionFromOffset(n2, 1), Lt([i2, n2]);
    }
    shouldManageMovingCursorInDirection(t2) {
      if (this.editingAttachment)
        return true;
      const e2 = this.getExpandedRangeInDirection(t2);
      return null != this.getAttachmentAtRange(e2);
    }
    moveCursorInDirection(t2) {
      let e2, i2;
      if (this.editingAttachment)
        i2 = this.document.getRangeOfAttachment(this.editingAttachment);
      else {
        const n2 = this.getSelectedRange();
        i2 = this.getExpandedRangeInDirection(t2), e2 = !wt(n2, i2);
      }
      if ("backward" === t2 ? this.setSelectedRange(i2[0]) : this.setSelectedRange(i2[1]), e2) {
        const t3 = this.getAttachmentAtRange(i2);
        if (t3)
          return this.editAttachment(t3);
      }
    }
    expandSelectionInDirection(t2) {
      let { length: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const i2 = this.getExpandedRangeInDirection(t2, { length: e2 });
      return this.setSelectedRange(i2);
    }
    expandSelectionForEditing() {
      if (this.hasCurrentAttribute("href"))
        return this.expandSelectionAroundCommonAttribute("href");
    }
    expandSelectionAroundCommonAttribute(t2) {
      const e2 = this.getPosition(), i2 = this.document.getRangeOfCommonAttributeAtPosition(t2, e2);
      return this.setSelectedRange(i2);
    }
    selectionContainsAttachments() {
      var t2;
      return (null === (t2 = this.getSelectedAttachments()) || void 0 === t2 ? void 0 : t2.length) > 0;
    }
    selectionIsInCursorTarget() {
      return this.editingAttachment || this.positionIsCursorTarget(this.getPosition());
    }
    positionIsCursorTarget(t2) {
      const e2 = this.document.locationFromPosition(t2);
      if (e2)
        return this.locationIsCursorTarget(e2);
    }
    positionIsBlockBreak(t2) {
      var e2;
      return null === (e2 = this.document.getPieceAtPosition(t2)) || void 0 === e2 ? void 0 : e2.isBlockBreak();
    }
    getSelectedDocument() {
      const t2 = this.getSelectedRange();
      if (t2)
        return this.document.getDocumentAtRange(t2);
    }
    getSelectedAttachments() {
      var t2;
      return null === (t2 = this.getSelectedDocument()) || void 0 === t2 ? void 0 : t2.getAttachments();
    }
    getAttachments() {
      return this.attachments.slice(0);
    }
    refreshAttachments() {
      const t2 = this.document.getAttachments(), { added: e2, removed: i2 } = function() {
        let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const i3 = [], n2 = [], r2 = /* @__PURE__ */ new Set();
        t3.forEach((t4) => {
          r2.add(t4);
        });
        const o2 = /* @__PURE__ */ new Set();
        return e3.forEach((t4) => {
          o2.add(t4), r2.has(t4) || i3.push(t4);
        }), t3.forEach((t4) => {
          o2.has(t4) || n2.push(t4);
        }), { added: i3, removed: n2 };
      }(this.attachments, t2);
      return this.attachments = t2, Array.from(i2).forEach((t3) => {
        var e3, i3;
        t3.delegate = null, null === (e3 = this.delegate) || void 0 === e3 || null === (i3 = e3.compositionDidRemoveAttachment) || void 0 === i3 || i3.call(e3, t3);
      }), (() => {
        const t3 = [];
        return Array.from(e2).forEach((e3) => {
          var i3, n2;
          e3.delegate = this, t3.push(null === (i3 = this.delegate) || void 0 === i3 || null === (n2 = i3.compositionDidAddAttachment) || void 0 === n2 ? void 0 : n2.call(i3, e3));
        }), t3;
      })();
    }
    attachmentDidChangeAttributes(t2) {
      var e2, i2;
      return this.revision++, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionDidEditAttachment) || void 0 === i2 ? void 0 : i2.call(e2, t2);
    }
    attachmentDidChangePreviewURL(t2) {
      var e2, i2;
      return this.revision++, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionDidChangeAttachmentPreviewURL) || void 0 === i2 ? void 0 : i2.call(e2, t2);
    }
    editAttachment(t2, e2) {
      var i2, n2;
      if (t2 !== this.editingAttachment)
        return this.stopEditingAttachment(), this.editingAttachment = t2, null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionDidStartEditingAttachment) || void 0 === n2 ? void 0 : n2.call(i2, this.editingAttachment, e2);
    }
    stopEditingAttachment() {
      var t2, e2;
      this.editingAttachment && (null === (t2 = this.delegate) || void 0 === t2 || null === (e2 = t2.compositionDidStopEditingAttachment) || void 0 === e2 || e2.call(t2, this.editingAttachment), this.editingAttachment = null);
    }
    updateAttributesForAttachment(t2, e2) {
      return this.setDocument(this.document.updateAttributesForAttachment(t2, e2));
    }
    removeAttributeForAttachment(t2, e2) {
      return this.setDocument(this.document.removeAttributeForAttachment(t2, e2));
    }
    breakFormattedBlock(t2) {
      let { document: e2 } = t2;
      const { block: i2 } = t2;
      let n2 = t2.startPosition, r2 = [n2 - 1, n2];
      i2.getBlockBreakPosition() === t2.startLocation.offset ? (i2.breaksOnReturn() && "\n" === t2.nextCharacter ? n2 += 1 : e2 = e2.removeTextAtRange(r2), r2 = [n2, n2]) : "\n" === t2.nextCharacter ? "\n" === t2.previousCharacter ? r2 = [n2 - 1, n2 + 1] : (r2 = [n2, n2 + 1], n2 += 1) : t2.startLocation.offset - 1 != 0 && (n2 += 1);
      const o2 = new qe([i2.removeLastAttribute().copyWithoutText()]);
      return this.setDocument(e2.insertDocumentAtRange(o2, r2)), this.setSelection(n2);
    }
    getPreviousBlock() {
      const t2 = this.getLocationRange();
      if (t2) {
        const { index: e2 } = t2[0];
        if (e2 > 0)
          return this.document.getBlockAtIndex(e2 - 1);
      }
    }
    getBlock() {
      const t2 = this.getLocationRange();
      if (t2)
        return this.document.getBlockAtIndex(t2[0].index);
    }
    getAttachmentAtRange(t2) {
      const e2 = this.document.getDocumentAtRange(t2);
      if (e2.toString() === "".concat("\uFFFC", "\n"))
        return e2.getAttachments()[0];
    }
    notifyDelegateOfCurrentAttributesChange() {
      var t2, e2;
      return null === (t2 = this.delegate) || void 0 === t2 || null === (e2 = t2.compositionDidChangeCurrentAttributes) || void 0 === e2 ? void 0 : e2.call(t2, this.currentAttributes);
    }
    notifyDelegateOfInsertionAtRange(t2) {
      var e2, i2;
      return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionDidPerformInsertionAtRange) || void 0 === i2 ? void 0 : i2.call(e2, t2);
    }
    translateUTF16PositionFromOffset(t2, e2) {
      const i2 = this.document.toUTF16String(), n2 = i2.offsetFromUCS2Offset(t2);
      return i2.offsetToUCS2Offset(n2 + e2);
    }
  };
  gi.proxyMethod("getSelectionManager().getPointRange"), gi.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"), gi.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"), gi.proxyMethod("getSelectionManager().locationIsCursorTarget"), gi.proxyMethod("getSelectionManager().selectionIsExpanded"), gi.proxyMethod("delegate?.getSelectionManager");
  var mi = class extends z {
    constructor(t2) {
      super(...arguments), this.composition = t2, this.undoEntries = [], this.redoEntries = [];
    }
    recordUndoEntry(t2) {
      let { context: e2, consolidatable: i2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const n2 = this.undoEntries.slice(-1)[0];
      if (!i2 || !pi(n2, t2, e2)) {
        const i3 = this.createEntry({ description: t2, context: e2 });
        this.undoEntries.push(i3), this.redoEntries = [];
      }
    }
    undo() {
      const t2 = this.undoEntries.pop();
      if (t2) {
        const e2 = this.createEntry(t2);
        return this.redoEntries.push(e2), this.composition.loadSnapshot(t2.snapshot);
      }
    }
    redo() {
      const t2 = this.redoEntries.pop();
      if (t2) {
        const e2 = this.createEntry(t2);
        return this.undoEntries.push(e2), this.composition.loadSnapshot(t2.snapshot);
      }
    }
    canUndo() {
      return this.undoEntries.length > 0;
    }
    canRedo() {
      return this.redoEntries.length > 0;
    }
    createEntry() {
      let { description: t2, context: e2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return { description: null == t2 ? void 0 : t2.toString(), context: JSON.stringify(e2), snapshot: this.composition.getSnapshot() };
    }
  };
  var pi = (t2, e2, i2) => (null == t2 ? void 0 : t2.description) === (null == e2 ? void 0 : e2.toString()) && (null == t2 ? void 0 : t2.context) === JSON.stringify(i2);
  var fi = "attachmentGallery";
  var bi = class {
    constructor(t2) {
      this.document = t2.document, this.selectedRange = t2.selectedRange;
    }
    perform() {
      return this.removeBlockAttribute(), this.applyBlockAttribute();
    }
    getSnapshot() {
      return { document: this.document, selectedRange: this.selectedRange };
    }
    removeBlockAttribute() {
      return this.findRangesOfBlocks().map((t2) => this.document = this.document.removeAttributeAtRange(fi, t2));
    }
    applyBlockAttribute() {
      let t2 = 0;
      this.findRangesOfPieces().forEach((e2) => {
        e2[1] - e2[0] > 1 && (e2[0] += t2, e2[1] += t2, "\n" !== this.document.getCharacterAtPosition(e2[1]) && (this.document = this.document.insertBlockBreakAtRange(e2[1]), e2[1] < this.selectedRange[1] && this.moveSelectedRangeForward(), e2[1]++, t2++), 0 !== e2[0] && "\n" !== this.document.getCharacterAtPosition(e2[0] - 1) && (this.document = this.document.insertBlockBreakAtRange(e2[0]), e2[0] < this.selectedRange[0] && this.moveSelectedRangeForward(), e2[0]++, t2++), this.document = this.document.applyBlockAttributeAtRange(fi, true, e2));
      });
    }
    findRangesOfBlocks() {
      return this.document.findRangesForBlockAttribute(fi);
    }
    findRangesOfPieces() {
      return this.document.findRangesForTextAttribute("presentation", { withValue: "gallery" });
    }
    moveSelectedRangeForward() {
      this.selectedRange[0] += 1, this.selectedRange[1] += 1;
    }
  };
  var vi = function(t2) {
    const e2 = new bi(t2);
    return e2.perform(), e2.getSnapshot();
  };
  var Ai = [vi];
  var xi = class {
    constructor(t2, e2, i2) {
      this.insertFiles = this.insertFiles.bind(this), this.composition = t2, this.selectionManager = e2, this.element = i2, this.undoManager = new mi(this.composition), this.filters = Ai.slice(0);
    }
    loadDocument(t2) {
      return this.loadSnapshot({ document: t2, selectedRange: [0, 0] });
    }
    loadHTML() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const e2 = Xe.parse(t2, { referenceElement: this.element }).getDocument();
      return this.loadDocument(e2);
    }
    loadJSON(t2) {
      let { document: e2, selectedRange: i2 } = t2;
      return e2 = qe.fromJSON(e2), this.loadSnapshot({ document: e2, selectedRange: i2 });
    }
    loadSnapshot(t2) {
      return this.undoManager = new mi(this.composition), this.composition.loadSnapshot(t2);
    }
    getDocument() {
      return this.composition.document;
    }
    getSelectedDocument() {
      return this.composition.getSelectedDocument();
    }
    getSnapshot() {
      return this.composition.getSnapshot();
    }
    toJSON() {
      return this.getSnapshot();
    }
    deleteInDirection(t2) {
      return this.composition.deleteInDirection(t2);
    }
    insertAttachment(t2) {
      return this.composition.insertAttachment(t2);
    }
    insertAttachments(t2) {
      return this.composition.insertAttachments(t2);
    }
    insertDocument(t2) {
      return this.composition.insertDocument(t2);
    }
    insertFile(t2) {
      return this.composition.insertFile(t2);
    }
    insertFiles(t2) {
      return this.composition.insertFiles(t2);
    }
    insertHTML(t2) {
      return this.composition.insertHTML(t2);
    }
    insertString(t2) {
      return this.composition.insertString(t2);
    }
    insertText(t2) {
      return this.composition.insertText(t2);
    }
    insertLineBreak() {
      return this.composition.insertLineBreak();
    }
    getSelectedRange() {
      return this.composition.getSelectedRange();
    }
    getPosition() {
      return this.composition.getPosition();
    }
    getClientRectAtPosition(t2) {
      const e2 = this.getDocument().locationRangeFromRange([t2, t2 + 1]);
      return this.selectionManager.getClientRectAtLocationRange(e2);
    }
    expandSelectionInDirection(t2) {
      return this.composition.expandSelectionInDirection(t2);
    }
    moveCursorInDirection(t2) {
      return this.composition.moveCursorInDirection(t2);
    }
    setSelectedRange(t2) {
      return this.composition.setSelectedRange(t2);
    }
    activateAttribute(t2) {
      let e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return this.composition.setCurrentAttribute(t2, e2);
    }
    attributeIsActive(t2) {
      return this.composition.hasCurrentAttribute(t2);
    }
    canActivateAttribute(t2) {
      return this.composition.canSetCurrentAttribute(t2);
    }
    deactivateAttribute(t2) {
      return this.composition.removeCurrentAttribute(t2);
    }
    canDecreaseNestingLevel() {
      return this.composition.canDecreaseNestingLevel();
    }
    canIncreaseNestingLevel() {
      return this.composition.canIncreaseNestingLevel();
    }
    decreaseNestingLevel() {
      if (this.canDecreaseNestingLevel())
        return this.composition.decreaseNestingLevel();
    }
    increaseNestingLevel() {
      if (this.canIncreaseNestingLevel())
        return this.composition.increaseNestingLevel();
    }
    canRedo() {
      return this.undoManager.canRedo();
    }
    canUndo() {
      return this.undoManager.canUndo();
    }
    recordUndoEntry(t2) {
      let { context: e2, consolidatable: i2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return this.undoManager.recordUndoEntry(t2, { context: e2, consolidatable: i2 });
    }
    redo() {
      if (this.canRedo())
        return this.undoManager.redo();
    }
    undo() {
      if (this.canUndo())
        return this.undoManager.undo();
    }
  };
  var yi = class {
    constructor(t2) {
      this.element = t2;
    }
    findLocationFromContainerAndOffset(t2, e2) {
      let { strict: i2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { strict: true }, n2 = 0, r2 = false;
      const o2 = { index: 0, offset: 0 }, s2 = this.findAttachmentElementParentForNode(t2);
      s2 && (t2 = s2.parentNode, e2 = C(s2));
      const a2 = S(this.element, { usingFilter: Ei });
      for (; a2.nextNode(); ) {
        const s3 = a2.currentNode;
        if (s3 === t2 && O(t2)) {
          I(s3) || (o2.offset += e2);
          break;
        }
        if (s3.parentNode === t2) {
          if (n2++ === e2)
            break;
        } else if (!y(t2, s3) && n2 > 0)
          break;
        T(s3, { strict: i2 }) ? (r2 && o2.index++, o2.offset = 0, r2 = true) : o2.offset += Ci(s3);
      }
      return o2;
    }
    findContainerAndOffsetFromLocation(t2) {
      let e2, i2;
      if (0 === t2.index && 0 === t2.offset) {
        for (e2 = this.element, i2 = 0; e2.firstChild; )
          if (e2 = e2.firstChild, w(e2)) {
            i2 = 1;
            break;
          }
        return [e2, i2];
      }
      let [n2, r2] = this.findNodeAndOffsetFromLocation(t2);
      if (n2) {
        if (O(n2))
          0 === Ci(n2) ? (e2 = n2.parentNode.parentNode, i2 = C(n2.parentNode), I(n2, { name: "right" }) && i2++) : (e2 = n2, i2 = t2.offset - r2);
        else {
          if (e2 = n2.parentNode, !T(n2.previousSibling) && !w(e2))
            for (; n2 === e2.lastChild && (n2 = e2, e2 = e2.parentNode, !w(e2)); )
              ;
          i2 = C(n2), 0 !== t2.offset && i2++;
        }
        return [e2, i2];
      }
    }
    findNodeAndOffsetFromLocation(t2) {
      let e2, i2, n2 = 0;
      for (const r2 of this.getSignificantNodesForIndex(t2.index)) {
        const o2 = Ci(r2);
        if (t2.offset <= n2 + o2)
          if (O(r2)) {
            if (e2 = r2, i2 = n2, t2.offset === i2 && I(e2))
              break;
          } else
            e2 || (e2 = r2, i2 = n2);
        if (n2 += o2, n2 > t2.offset)
          break;
      }
      return [e2, i2];
    }
    findAttachmentElementParentForNode(t2) {
      for (; t2 && t2 !== this.element; ) {
        if (P(t2))
          return t2;
        t2 = t2.parentNode;
      }
    }
    getSignificantNodesForIndex(t2) {
      const e2 = [], i2 = S(this.element, { usingFilter: Ri });
      let n2 = false;
      for (; i2.nextNode(); ) {
        const o2 = i2.currentNode;
        var r2;
        if (B(o2)) {
          if (null != r2 ? r2++ : r2 = 0, r2 === t2)
            n2 = true;
          else if (n2)
            break;
        } else
          n2 && e2.push(o2);
      }
      return e2;
    }
  };
  var Ci = function(t2) {
    if (t2.nodeType === Node.TEXT_NODE) {
      if (I(t2))
        return 0;
      return t2.textContent.length;
    }
    return "br" === E(t2) || P(t2) ? 1 : 0;
  };
  var Ri = function(t2) {
    return Si(t2) === NodeFilter.FILTER_ACCEPT ? Ei(t2) : NodeFilter.FILTER_REJECT;
  };
  var Si = function(t2) {
    return N(t2) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  };
  var Ei = function(t2) {
    return P(t2.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  };
  var ki = class {
    createDOMRangeFromPoint(t2) {
      let e2, { x: i2, y: n2 } = t2;
      if (document.caretPositionFromPoint) {
        const { offsetNode: t3, offset: r2 } = document.caretPositionFromPoint(i2, n2);
        return e2 = document.createRange(), e2.setStart(t3, r2), e2;
      }
      if (document.caretRangeFromPoint)
        return document.caretRangeFromPoint(i2, n2);
      if (document.body.createTextRange) {
        const t3 = Nt();
        try {
          const t4 = document.body.createTextRange();
          t4.moveToPoint(i2, n2), t4.select();
        } catch (t4) {
        }
        return e2 = Nt(), Ot(t3), e2;
      }
    }
    getClientRectsForDOMRange(t2) {
      const e2 = Array.from(t2.getClientRects());
      return [e2[0], e2[e2.length - 1]];
    }
  };
  var Li = class extends z {
    constructor(t2) {
      super(...arguments), this.didMouseDown = this.didMouseDown.bind(this), this.selectionDidChange = this.selectionDidChange.bind(this), this.element = t2, this.locationMapper = new yi(this.element), this.pointMapper = new ki(), this.lockCount = 0, f("mousedown", { onElement: this.element, withCallback: this.didMouseDown });
    }
    getLocationRange() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return false === t2.strict ? this.createLocationRangeFromDOMRange(Nt()) : t2.ignoreLock ? this.currentLocationRange : this.lockedLocationRange ? this.lockedLocationRange : this.currentLocationRange;
    }
    setLocationRange(t2) {
      if (this.lockedLocationRange)
        return;
      t2 = Lt(t2);
      const e2 = this.createDOMRangeFromLocationRange(t2);
      e2 && (Ot(e2), this.updateCurrentLocationRange(t2));
    }
    setLocationRangeFromPointRange(t2) {
      t2 = Lt(t2);
      const e2 = this.getLocationAtPoint(t2[0]), i2 = this.getLocationAtPoint(t2[1]);
      this.setLocationRange([e2, i2]);
    }
    getClientRectAtLocationRange(t2) {
      const e2 = this.createDOMRangeFromLocationRange(t2);
      if (e2)
        return this.getClientRectsForDOMRange(e2)[1];
    }
    locationIsCursorTarget(t2) {
      const e2 = Array.from(this.findNodeAndOffsetFromLocation(t2))[0];
      return I(e2);
    }
    lock() {
      0 == this.lockCount++ && (this.updateCurrentLocationRange(), this.lockedLocationRange = this.getLocationRange());
    }
    unlock() {
      if (0 == --this.lockCount) {
        const { lockedLocationRange: t2 } = this;
        if (this.lockedLocationRange = null, null != t2)
          return this.setLocationRange(t2);
      }
    }
    clearSelection() {
      var t2;
      return null === (t2 = Pt()) || void 0 === t2 ? void 0 : t2.removeAllRanges();
    }
    selectionIsCollapsed() {
      var t2;
      return true === (null === (t2 = Nt()) || void 0 === t2 ? void 0 : t2.collapsed);
    }
    selectionIsExpanded() {
      return !this.selectionIsCollapsed();
    }
    createLocationRangeFromDOMRange(t2, e2) {
      if (null == t2 || !this.domRangeWithinElement(t2))
        return;
      const i2 = this.findLocationFromContainerAndOffset(t2.startContainer, t2.startOffset, e2);
      if (!i2)
        return;
      const n2 = t2.collapsed ? void 0 : this.findLocationFromContainerAndOffset(t2.endContainer, t2.endOffset, e2);
      return Lt([i2, n2]);
    }
    didMouseDown() {
      return this.pauseTemporarily();
    }
    pauseTemporarily() {
      let t2;
      this.paused = true;
      const e2 = () => {
        if (this.paused = false, clearTimeout(i2), Array.from(t2).forEach((t3) => {
          t3.destroy();
        }), y(document, this.element))
          return this.selectionDidChange();
      }, i2 = setTimeout(e2, 200);
      t2 = ["mousemove", "keydown"].map((t3) => f(t3, { onElement: document, withCallback: e2 }));
    }
    selectionDidChange() {
      if (!this.paused && !x(this.element))
        return this.updateCurrentLocationRange();
    }
    updateCurrentLocationRange(t2) {
      var e2, i2;
      if ((null != t2 ? t2 : t2 = this.createLocationRangeFromDOMRange(Nt())) && !wt(t2, this.currentLocationRange))
        return this.currentLocationRange = t2, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.locationRangeDidChange) || void 0 === i2 ? void 0 : i2.call(e2, this.currentLocationRange.slice(0));
    }
    createDOMRangeFromLocationRange(t2) {
      const e2 = this.findContainerAndOffsetFromLocation(t2[0]), i2 = Dt(t2) ? e2 : this.findContainerAndOffsetFromLocation(t2[1]) || e2;
      if (null != e2 && null != i2) {
        const t3 = document.createRange();
        return t3.setStart(...Array.from(e2 || [])), t3.setEnd(...Array.from(i2 || [])), t3;
      }
    }
    getLocationAtPoint(t2) {
      const e2 = this.createDOMRangeFromPoint(t2);
      var i2;
      if (e2)
        return null === (i2 = this.createLocationRangeFromDOMRange(e2)) || void 0 === i2 ? void 0 : i2[0];
    }
    domRangeWithinElement(t2) {
      return t2.collapsed ? y(this.element, t2.startContainer) : y(this.element, t2.startContainer) && y(this.element, t2.endContainer);
    }
  };
  Li.proxyMethod("locationMapper.findLocationFromContainerAndOffset"), Li.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"), Li.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"), Li.proxyMethod("pointMapper.createDOMRangeFromPoint"), Li.proxyMethod("pointMapper.getClientRectsForDOMRange");
  var Di = Object.freeze({ __proto__: null, Attachment: Re, AttachmentManager: ui, AttachmentPiece: Se, Block: Be, Composition: gi, Document: qe, Editor: xi, HTMLParser: Xe, HTMLSanitizer: Je, LineBreakInsertion: di, LocationMapper: yi, ManagedAttachment: hi, Piece: ye, PointMapper: ki, SelectionManager: Li, SplittableList: ke, StringPiece: Ee, Text: Te, UndoManager: mi });
  var wi = Object.freeze({ __proto__: null, ObjectView: ee, AttachmentView: re, BlockView: de, DocumentView: ge, PieceView: le, PreviewableAttachmentView: ae, TextView: ce });
  var { lang: Ti, css: Bi, keyNames: Fi } = V;
  var Ii = function(t2) {
    return function() {
      const e2 = t2.apply(this, arguments);
      e2.do(), this.undos || (this.undos = []), this.undos.push(e2.undo);
    };
  };
  var Pi = class extends z {
    constructor(t2, e2, i2) {
      let n2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      super(...arguments), Ae(this, "makeElementMutable", Ii(() => ({ do: () => {
        this.element.dataset.trixMutable = true;
      }, undo: () => delete this.element.dataset.trixMutable }))), Ae(this, "addToolbar", Ii(() => {
        const t3 = k({ tagName: "div", className: Bi.attachmentToolbar, data: { trixMutable: true }, childNodes: k({ tagName: "div", className: "trix-button-row", childNodes: k({ tagName: "span", className: "trix-button-group trix-button-group--actions", childNodes: k({ tagName: "button", className: "trix-button trix-button--remove", textContent: Ti.remove, attributes: { title: Ti.remove }, data: { trixAction: "remove" } }) }) }) });
        return this.attachment.isPreviewable() && t3.appendChild(k({ tagName: "div", className: Bi.attachmentMetadataContainer, childNodes: k({ tagName: "span", className: Bi.attachmentMetadata, childNodes: [k({ tagName: "span", className: Bi.attachmentName, textContent: this.attachment.getFilename(), attributes: { title: this.attachment.getFilename() } }), k({ tagName: "span", className: Bi.attachmentSize, textContent: this.attachment.getFormattedFilesize() })] }) })), f("click", { onElement: t3, withCallback: this.didClickToolbar }), f("click", { onElement: t3, matchingSelector: "[data-trix-action]", withCallback: this.didClickActionButton }), b("trix-attachment-before-toolbar", { onElement: this.element, attributes: { toolbar: t3, attachment: this.attachment } }), { do: () => this.element.appendChild(t3), undo: () => R(t3) };
      })), Ae(this, "installCaptionEditor", Ii(() => {
        const t3 = k({ tagName: "textarea", className: Bi.attachmentCaptionEditor, attributes: { placeholder: Ti.captionPlaceholder }, data: { trixMutable: true } });
        t3.value = this.attachmentPiece.getCaption();
        const e3 = t3.cloneNode();
        e3.classList.add("trix-autoresize-clone"), e3.tabIndex = -1;
        const i3 = function() {
          e3.value = t3.value, t3.style.height = e3.scrollHeight + "px";
        };
        f("input", { onElement: t3, withCallback: i3 }), f("input", { onElement: t3, withCallback: this.didInputCaption }), f("keydown", { onElement: t3, withCallback: this.didKeyDownCaption }), f("change", { onElement: t3, withCallback: this.didChangeCaption }), f("blur", { onElement: t3, withCallback: this.didBlurCaption });
        const n3 = this.element.querySelector("figcaption"), r2 = n3.cloneNode();
        return { do: () => {
          if (n3.style.display = "none", r2.appendChild(t3), r2.appendChild(e3), r2.classList.add("".concat(Bi.attachmentCaption, "--editing")), n3.parentElement.insertBefore(r2, n3), i3(), this.options.editCaption)
            return St(() => t3.focus());
        }, undo() {
          R(r2), n3.style.display = null;
        } };
      })), this.didClickToolbar = this.didClickToolbar.bind(this), this.didClickActionButton = this.didClickActionButton.bind(this), this.didKeyDownCaption = this.didKeyDownCaption.bind(this), this.didInputCaption = this.didInputCaption.bind(this), this.didChangeCaption = this.didChangeCaption.bind(this), this.didBlurCaption = this.didBlurCaption.bind(this), this.attachmentPiece = t2, this.element = e2, this.container = i2, this.options = n2, this.attachment = this.attachmentPiece.attachment, "a" === E(this.element) && (this.element = this.element.firstChild), this.install();
    }
    install() {
      this.makeElementMutable(), this.addToolbar(), this.attachment.isPreviewable() && this.installCaptionEditor();
    }
    uninstall() {
      var t2;
      let e2 = this.undos.pop();
      for (this.savePendingCaption(); e2; )
        e2(), e2 = this.undos.pop();
      null === (t2 = this.delegate) || void 0 === t2 || t2.didUninstallAttachmentEditor(this);
    }
    savePendingCaption() {
      if (null != this.pendingCaption) {
        const r2 = this.pendingCaption;
        var t2, e2, i2, n2;
        if (this.pendingCaption = null, r2)
          null === (t2 = this.delegate) || void 0 === t2 || null === (e2 = t2.attachmentEditorDidRequestUpdatingAttributesForAttachment) || void 0 === e2 || e2.call(t2, { caption: r2 }, this.attachment);
        else
          null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.attachmentEditorDidRequestRemovingAttributeForAttachment) || void 0 === n2 || n2.call(i2, "caption", this.attachment);
      }
    }
    didClickToolbar(t2) {
      return t2.preventDefault(), t2.stopPropagation();
    }
    didClickActionButton(t2) {
      var e2;
      if ("remove" === t2.target.getAttribute("data-trix-action"))
        return null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.attachmentEditorDidRequestRemovalOfAttachment(this.attachment);
    }
    didKeyDownCaption(t2) {
      var e2, i2;
      if ("return" === Fi[t2.keyCode])
        return t2.preventDefault(), this.savePendingCaption(), null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.attachmentEditorDidRequestDeselectingAttachment) || void 0 === i2 ? void 0 : i2.call(e2, this.attachment);
    }
    didInputCaption(t2) {
      this.pendingCaption = t2.target.value.replace(/\s/g, " ").trim();
    }
    didChangeCaption(t2) {
      return this.savePendingCaption();
    }
    didBlurCaption(t2) {
      return this.savePendingCaption();
    }
  };
  var Ni = class extends z {
    constructor(t2, i2) {
      super(...arguments), this.didFocus = this.didFocus.bind(this), this.didBlur = this.didBlur.bind(this), this.didClickAttachment = this.didClickAttachment.bind(this), this.element = t2, this.composition = i2, this.documentView = new ge(this.composition.document, { element: this.element }), f("focus", { onElement: this.element, withCallback: this.didFocus }), f("blur", { onElement: this.element, withCallback: this.didBlur }), f("click", { onElement: this.element, matchingSelector: "a[contenteditable=false]", preventDefault: true }), f("mousedown", { onElement: this.element, matchingSelector: e, withCallback: this.didClickAttachment }), f("click", { onElement: this.element, matchingSelector: "a".concat(e), preventDefault: true });
    }
    didFocus(t2) {
      var e2;
      const i2 = () => {
        var t3, e3;
        if (!this.focused)
          return this.focused = true, null === (t3 = this.delegate) || void 0 === t3 || null === (e3 = t3.compositionControllerDidFocus) || void 0 === e3 ? void 0 : e3.call(t3);
      };
      return (null === (e2 = this.blurPromise) || void 0 === e2 ? void 0 : e2.then(i2)) || i2();
    }
    didBlur(t2) {
      this.blurPromise = new Promise((t3) => St(() => {
        var e2, i2;
        x(this.element) || (this.focused = null, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionControllerDidBlur) || void 0 === i2 || i2.call(e2));
        return this.blurPromise = null, t3();
      }));
    }
    didClickAttachment(t2, e2) {
      var i2, n2;
      const r2 = this.findAttachmentForElement(e2), o2 = !!A(t2.target, { matchingSelector: "figcaption" });
      return null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionControllerDidSelectAttachment) || void 0 === n2 ? void 0 : n2.call(i2, r2, { editCaption: o2 });
    }
    getSerializableElement() {
      return this.isEditingAttachment() ? this.documentView.shadowElement : this.element;
    }
    render() {
      var t2, e2, i2, n2, r2, o2;
      (this.revision !== this.composition.revision && (this.documentView.setDocument(this.composition.document), this.documentView.render(), this.revision = this.composition.revision), this.canSyncDocumentView() && !this.documentView.isSynced()) && (null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionControllerWillSyncDocumentView) || void 0 === n2 || n2.call(i2), this.documentView.sync(), null === (r2 = this.delegate) || void 0 === r2 || null === (o2 = r2.compositionControllerDidSyncDocumentView) || void 0 === o2 || o2.call(r2));
      return null === (t2 = this.delegate) || void 0 === t2 || null === (e2 = t2.compositionControllerDidRender) || void 0 === e2 ? void 0 : e2.call(t2);
    }
    rerenderViewForObject(t2) {
      return this.invalidateViewForObject(t2), this.render();
    }
    invalidateViewForObject(t2) {
      return this.documentView.invalidateViewForObject(t2);
    }
    isViewCachingEnabled() {
      return this.documentView.isViewCachingEnabled();
    }
    enableViewCaching() {
      return this.documentView.enableViewCaching();
    }
    disableViewCaching() {
      return this.documentView.disableViewCaching();
    }
    refreshViewCache() {
      return this.documentView.garbageCollectCachedViews();
    }
    isEditingAttachment() {
      return !!this.attachmentEditor;
    }
    installAttachmentEditorForAttachment(t2, e2) {
      var i2;
      if ((null === (i2 = this.attachmentEditor) || void 0 === i2 ? void 0 : i2.attachment) === t2)
        return;
      const n2 = this.documentView.findElementForObject(t2);
      if (!n2)
        return;
      this.uninstallAttachmentEditor();
      const r2 = this.composition.document.getAttachmentPieceForAttachment(t2);
      this.attachmentEditor = new Pi(r2, n2, this.element, e2), this.attachmentEditor.delegate = this;
    }
    uninstallAttachmentEditor() {
      var t2;
      return null === (t2 = this.attachmentEditor) || void 0 === t2 ? void 0 : t2.uninstall();
    }
    didUninstallAttachmentEditor() {
      return this.attachmentEditor = null, this.render();
    }
    attachmentEditorDidRequestUpdatingAttributesForAttachment(t2, e2) {
      var i2, n2;
      return null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionControllerWillUpdateAttachment) || void 0 === n2 || n2.call(i2, e2), this.composition.updateAttributesForAttachment(t2, e2);
    }
    attachmentEditorDidRequestRemovingAttributeForAttachment(t2, e2) {
      var i2, n2;
      return null === (i2 = this.delegate) || void 0 === i2 || null === (n2 = i2.compositionControllerWillUpdateAttachment) || void 0 === n2 || n2.call(i2, e2), this.composition.removeAttributeForAttachment(t2, e2);
    }
    attachmentEditorDidRequestRemovalOfAttachment(t2) {
      var e2, i2;
      return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionControllerDidRequestRemovalOfAttachment) || void 0 === i2 ? void 0 : i2.call(e2, t2);
    }
    attachmentEditorDidRequestDeselectingAttachment(t2) {
      var e2, i2;
      return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.compositionControllerDidRequestDeselectingAttachment) || void 0 === i2 ? void 0 : i2.call(e2, t2);
    }
    canSyncDocumentView() {
      return !this.isEditingAttachment();
    }
    findAttachmentForElement(t2) {
      return this.composition.document.getAttachmentById(parseInt(t2.dataset.trixId, 10));
    }
  };
  var Oi = class extends z {
  };
  var Mi = "data-trix-mutable";
  var ji = "[".concat(Mi, "]");
  var Wi = { attributes: true, childList: true, characterData: true, characterDataOldValue: true, subtree: true };
  var Ui = class extends z {
    constructor(t2) {
      super(t2), this.didMutate = this.didMutate.bind(this), this.element = t2, this.observer = new window.MutationObserver(this.didMutate), this.start();
    }
    start() {
      return this.reset(), this.observer.observe(this.element, Wi);
    }
    stop() {
      return this.observer.disconnect();
    }
    didMutate(t2) {
      var e2, i2;
      if (this.mutations.push(...Array.from(this.findSignificantMutations(t2) || [])), this.mutations.length)
        return null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.elementDidMutate) || void 0 === i2 || i2.call(e2, this.getMutationSummary()), this.reset();
    }
    reset() {
      this.mutations = [];
    }
    findSignificantMutations(t2) {
      return t2.filter((t3) => this.mutationIsSignificant(t3));
    }
    mutationIsSignificant(t2) {
      if (this.nodeIsMutable(t2.target))
        return false;
      for (const e2 of Array.from(this.nodesModifiedByMutation(t2)))
        if (this.nodeIsSignificant(e2))
          return true;
      return false;
    }
    nodeIsSignificant(t2) {
      return t2 !== this.element && !this.nodeIsMutable(t2) && !N(t2);
    }
    nodeIsMutable(t2) {
      return A(t2, { matchingSelector: ji });
    }
    nodesModifiedByMutation(t2) {
      const e2 = [];
      switch (t2.type) {
        case "attributes":
          t2.attributeName !== Mi && e2.push(t2.target);
          break;
        case "characterData":
          e2.push(t2.target.parentNode), e2.push(t2.target);
          break;
        case "childList":
          e2.push(...Array.from(t2.addedNodes || [])), e2.push(...Array.from(t2.removedNodes || []));
      }
      return e2;
    }
    getMutationSummary() {
      return this.getTextMutationSummary();
    }
    getTextMutationSummary() {
      const { additions: t2, deletions: e2 } = this.getTextChangesFromCharacterData(), i2 = this.getTextChangesFromChildList();
      Array.from(i2.additions).forEach((e3) => {
        Array.from(t2).includes(e3) || t2.push(e3);
      }), e2.push(...Array.from(i2.deletions || []));
      const n2 = {}, r2 = t2.join("");
      r2 && (n2.textAdded = r2);
      const o2 = e2.join("");
      return o2 && (n2.textDeleted = o2), n2;
    }
    getMutationsByType(t2) {
      return Array.from(this.mutations).filter((e2) => e2.type === t2);
    }
    getTextChangesFromChildList() {
      let t2, e2;
      const i2 = [], n2 = [];
      Array.from(this.getMutationsByType("childList")).forEach((t3) => {
        i2.push(...Array.from(t3.addedNodes || [])), n2.push(...Array.from(t3.removedNodes || []));
      });
      0 === i2.length && 1 === n2.length && B(n2[0]) ? (t2 = [], e2 = ["\n"]) : (t2 = qi(i2), e2 = qi(n2));
      return { additions: t2.filter((t3, i3) => t3 !== e2[i3]).map(Wt), deletions: e2.filter((e3, i3) => e3 !== t2[i3]).map(Wt) };
    }
    getTextChangesFromCharacterData() {
      let t2, e2;
      const i2 = this.getMutationsByType("characterData");
      if (i2.length) {
        const n2 = i2[0], r2 = i2[i2.length - 1], o2 = function(t3, e3) {
          let i3, n3;
          return t3 = X.box(t3), (e3 = X.box(e3)).length < t3.length ? [n3, i3] = Vt(t3, e3) : [i3, n3] = Vt(e3, t3), { added: i3, removed: n3 };
        }(Wt(n2.oldValue), Wt(r2.target.data));
        t2 = o2.added, e2 = o2.removed;
      }
      return { additions: t2 ? [t2] : [], deletions: e2 ? [e2] : [] };
    }
  };
  var qi = function() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e2 = [];
    for (const i2 of Array.from(t2))
      switch (i2.nodeType) {
        case Node.TEXT_NODE:
          e2.push(i2.data);
          break;
        case Node.ELEMENT_NODE:
          "br" === E(i2) ? e2.push("\n") : e2.push(...Array.from(qi(i2.childNodes) || []));
      }
    return e2;
  };
  var Vi = class extends te {
    constructor(t2) {
      super(...arguments), this.file = t2;
    }
    perform(t2) {
      const e2 = new FileReader();
      return e2.onerror = () => t2(false), e2.onload = () => {
        e2.onerror = null;
        try {
          e2.abort();
        } catch (t3) {
        }
        return t2(true, this.file);
      }, e2.readAsArrayBuffer(this.file);
    }
  };
  var zi = class {
    constructor(t2) {
      this.element = t2;
    }
    shouldIgnore(t2) {
      return !!a.samsungAndroid && (this.previousEvent = this.event, this.event = t2, this.checkSamsungKeyboardBuggyModeStart(), this.checkSamsungKeyboardBuggyModeEnd(), this.buggyMode);
    }
    checkSamsungKeyboardBuggyModeStart() {
      this.insertingLongTextAfterUnidentifiedChar() && _i(this.element.innerText, this.event.data) && (this.buggyMode = true, this.event.preventDefault());
    }
    checkSamsungKeyboardBuggyModeEnd() {
      this.buggyMode && "insertText" !== this.event.inputType && (this.buggyMode = false);
    }
    insertingLongTextAfterUnidentifiedChar() {
      var t2;
      return this.isBeforeInputInsertText() && this.previousEventWasUnidentifiedKeydown() && (null === (t2 = this.event.data) || void 0 === t2 ? void 0 : t2.length) > 50;
    }
    isBeforeInputInsertText() {
      return "beforeinput" === this.event.type && "insertText" === this.event.inputType;
    }
    previousEventWasUnidentifiedKeydown() {
      var t2, e2;
      return "keydown" === (null === (t2 = this.previousEvent) || void 0 === t2 ? void 0 : t2.type) && "Unidentified" === (null === (e2 = this.previousEvent) || void 0 === e2 ? void 0 : e2.key);
    }
  };
  var _i = (t2, e2) => Ji(t2) === Ji(e2);
  var Hi = new RegExp("(".concat("\uFFFC", "|").concat(u, "|").concat(d, "|\\s)+"), "g");
  var Ji = (t2) => t2.replace(Hi, " ").trim();
  var Ki = class extends z {
    constructor(t2) {
      super(...arguments), this.element = t2, this.mutationObserver = new Ui(this.element), this.mutationObserver.delegate = this, this.flakyKeyboardDetector = new zi(this.element);
      for (const t3 in this.constructor.events)
        f(t3, { onElement: this.element, withCallback: this.handlerFor(t3) });
    }
    elementDidMutate(t2) {
    }
    editorWillSyncDocumentView() {
      return this.mutationObserver.stop();
    }
    editorDidSyncDocumentView() {
      return this.mutationObserver.start();
    }
    requestRender() {
      var t2, e2;
      return null === (t2 = this.delegate) || void 0 === t2 || null === (e2 = t2.inputControllerDidRequestRender) || void 0 === e2 ? void 0 : e2.call(t2);
    }
    requestReparse() {
      var t2, e2;
      return null === (t2 = this.delegate) || void 0 === t2 || null === (e2 = t2.inputControllerDidRequestReparse) || void 0 === e2 || e2.call(t2), this.requestRender();
    }
    attachFiles(t2) {
      const e2 = Array.from(t2).map((t3) => new Vi(t3));
      return Promise.all(e2).then((t3) => {
        this.handleInput(function() {
          var e3, i2;
          return null === (e3 = this.delegate) || void 0 === e3 || e3.inputControllerWillAttachFiles(), null === (i2 = this.responder) || void 0 === i2 || i2.insertFiles(t3), this.requestRender();
        });
      });
    }
    handlerFor(t2) {
      return (e2) => {
        e2.defaultPrevented || this.handleInput(() => {
          if (!x(this.element)) {
            if (this.flakyKeyboardDetector.shouldIgnore(e2))
              return;
            this.eventName = t2, this.constructor.events[t2].call(this, e2);
          }
        });
      };
    }
    handleInput(t2) {
      try {
        var e2;
        null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillHandleInput(), t2.call(this);
      } finally {
        var i2;
        null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerDidHandleInput();
      }
    }
    createLinkHTML(t2, e2) {
      const i2 = document.createElement("a");
      return i2.href = t2, i2.textContent = e2 || t2, i2.outerHTML;
    }
  };
  var Gi;
  Ae(Ki, "events", {});
  var { browser: $i, keyNames: Xi } = V;
  var Yi = 0;
  var Qi = class extends Ki {
    constructor() {
      super(...arguments), this.resetInputSummary();
    }
    setInputSummary() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.inputSummary.eventName = this.eventName;
      for (const e2 in t2) {
        const i2 = t2[e2];
        this.inputSummary[e2] = i2;
      }
      return this.inputSummary;
    }
    resetInputSummary() {
      this.inputSummary = {};
    }
    reset() {
      return this.resetInputSummary(), It.reset();
    }
    elementDidMutate(t2) {
      var e2, i2;
      return this.isComposing() ? null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.inputControllerDidAllowUnhandledInput) || void 0 === i2 ? void 0 : i2.call(e2) : this.handleInput(function() {
        return this.mutationIsSignificant(t2) && (this.mutationIsExpected(t2) ? this.requestRender() : this.requestReparse()), this.reset();
      });
    }
    mutationIsExpected(t2) {
      let { textAdded: e2, textDeleted: i2 } = t2;
      if (this.inputSummary.preferDocument)
        return true;
      const n2 = null != e2 ? e2 === this.inputSummary.textAdded : !this.inputSummary.textAdded, r2 = null != i2 ? this.inputSummary.didDelete : !this.inputSummary.didDelete, o2 = ["\n", " \n"].includes(e2) && !n2, s2 = "\n" === i2 && !r2;
      if (o2 && !s2 || s2 && !o2) {
        const t3 = this.getSelectedRange();
        if (t3) {
          var a2;
          const i3 = o2 ? e2.replace(/\n$/, "").length || -1 : (null == e2 ? void 0 : e2.length) || 1;
          if (null !== (a2 = this.responder) && void 0 !== a2 && a2.positionIsBlockBreak(t3[1] + i3))
            return true;
        }
      }
      return n2 && r2;
    }
    mutationIsSignificant(t2) {
      var e2;
      const i2 = Object.keys(t2).length > 0, n2 = "" === (null === (e2 = this.compositionInput) || void 0 === e2 ? void 0 : e2.getEndData());
      return i2 || !n2;
    }
    getCompositionInput() {
      if (this.isComposing())
        return this.compositionInput;
      this.compositionInput = new rn(this);
    }
    isComposing() {
      return this.compositionInput && !this.compositionInput.isEnded();
    }
    deleteInDirection(t2, e2) {
      var i2;
      return false !== (null === (i2 = this.responder) || void 0 === i2 ? void 0 : i2.deleteInDirection(t2)) ? this.setInputSummary({ didDelete: true }) : e2 ? (e2.preventDefault(), this.requestRender()) : void 0;
    }
    serializeSelectionToDataTransfer(t2) {
      var e2;
      if (!function(t3) {
        if (null == t3 || !t3.setData)
          return false;
        for (const e3 in yt) {
          const i3 = yt[e3];
          try {
            if (t3.setData(e3, i3), !t3.getData(e3) === i3)
              return false;
          } catch (t4) {
            return false;
          }
        }
        return true;
      }(t2))
        return;
      const i2 = null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.getSelectedDocument().toSerializableDocument();
      return t2.setData("application/x-trix-document", JSON.stringify(i2)), t2.setData("text/html", ge.render(i2).innerHTML), t2.setData("text/plain", i2.toString().replace(/\n$/, "")), true;
    }
    canAcceptDataTransfer(t2) {
      const e2 = {};
      return Array.from((null == t2 ? void 0 : t2.types) || []).forEach((t3) => {
        e2[t3] = true;
      }), e2.Files || e2["application/x-trix-document"] || e2["text/html"] || e2["text/plain"];
    }
    getPastedHTMLUsingHiddenElement(t2) {
      const e2 = this.getSelectedRange(), i2 = { position: "absolute", left: "".concat(window.pageXOffset, "px"), top: "".concat(window.pageYOffset, "px"), opacity: 0 }, n2 = k({ style: i2, tagName: "div", editable: true });
      return document.body.appendChild(n2), n2.focus(), requestAnimationFrame(() => {
        const i3 = n2.innerHTML;
        return R(n2), this.setSelectedRange(e2), t2(i3);
      });
    }
  };
  Ae(Qi, "events", { keydown(t2) {
    this.isComposing() || this.resetInputSummary(), this.inputSummary.didInput = true;
    const e2 = Xi[t2.keyCode];
    if (e2) {
      var i2;
      let n3 = this.keys;
      ["ctrl", "alt", "shift", "meta"].forEach((e3) => {
        var i3;
        t2["".concat(e3, "Key")] && ("ctrl" === e3 && (e3 = "control"), n3 = null === (i3 = n3) || void 0 === i3 ? void 0 : i3[e3]);
      }), null != (null === (i2 = n3) || void 0 === i2 ? void 0 : i2[e2]) && (this.setInputSummary({ keyName: e2 }), It.reset(), n3[e2].call(this, t2));
    }
    if (Rt(t2)) {
      const e3 = String.fromCharCode(t2.keyCode).toLowerCase();
      if (e3) {
        var n2;
        const i3 = ["alt", "shift"].map((e4) => {
          if (t2["".concat(e4, "Key")])
            return e4;
        }).filter((t3) => t3);
        i3.push(e3), null !== (n2 = this.delegate) && void 0 !== n2 && n2.inputControllerDidReceiveKeyboardCommand(i3) && t2.preventDefault();
      }
    }
  }, keypress(t2) {
    if (null != this.inputSummary.eventName)
      return;
    if (t2.metaKey)
      return;
    if (t2.ctrlKey && !t2.altKey)
      return;
    const e2 = en(t2);
    var i2, n2;
    return e2 ? (null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerWillPerformTyping(), null === (n2 = this.responder) || void 0 === n2 || n2.insertString(e2), this.setInputSummary({ textAdded: e2, didDelete: this.selectionIsExpanded() })) : void 0;
  }, textInput(t2) {
    const { data: e2 } = t2, { textAdded: i2 } = this.inputSummary;
    if (i2 && i2 !== e2 && i2.toUpperCase() === e2) {
      var n2;
      const t3 = this.getSelectedRange();
      return this.setSelectedRange([t3[0], t3[1] + i2.length]), null === (n2 = this.responder) || void 0 === n2 || n2.insertString(e2), this.setInputSummary({ textAdded: e2 }), this.setSelectedRange(t3);
    }
  }, dragenter(t2) {
    t2.preventDefault();
  }, dragstart(t2) {
    var e2, i2;
    return this.serializeSelectionToDataTransfer(t2.dataTransfer), this.draggedRange = this.getSelectedRange(), null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.inputControllerDidStartDrag) || void 0 === i2 ? void 0 : i2.call(e2);
  }, dragover(t2) {
    if (this.draggedRange || this.canAcceptDataTransfer(t2.dataTransfer)) {
      t2.preventDefault();
      const n2 = { x: t2.clientX, y: t2.clientY };
      var e2, i2;
      if (!kt(n2, this.draggingPoint))
        return this.draggingPoint = n2, null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.inputControllerDidReceiveDragOverPoint) || void 0 === i2 ? void 0 : i2.call(e2, this.draggingPoint);
    }
  }, dragend(t2) {
    var e2, i2;
    null === (e2 = this.delegate) || void 0 === e2 || null === (i2 = e2.inputControllerDidCancelDrag) || void 0 === i2 || i2.call(e2), this.draggedRange = null, this.draggingPoint = null;
  }, drop(t2) {
    var e2, i2;
    t2.preventDefault();
    const n2 = null === (e2 = t2.dataTransfer) || void 0 === e2 ? void 0 : e2.files, r2 = t2.dataTransfer.getData("application/x-trix-document"), o2 = { x: t2.clientX, y: t2.clientY };
    if (null === (i2 = this.responder) || void 0 === i2 || i2.setLocationRangeFromPointRange(o2), null != n2 && n2.length)
      this.attachFiles(n2);
    else if (this.draggedRange) {
      var s2, a2;
      null === (s2 = this.delegate) || void 0 === s2 || s2.inputControllerWillMoveText(), null === (a2 = this.responder) || void 0 === a2 || a2.moveTextFromRange(this.draggedRange), this.draggedRange = null, this.requestRender();
    } else if (r2) {
      var l2;
      const t3 = qe.fromJSONString(r2);
      null === (l2 = this.responder) || void 0 === l2 || l2.insertDocument(t3), this.requestRender();
    }
    this.draggedRange = null, this.draggingPoint = null;
  }, cut(t2) {
    var e2, i2;
    if (null !== (e2 = this.responder) && void 0 !== e2 && e2.selectionIsExpanded() && (this.serializeSelectionToDataTransfer(t2.clipboardData) && t2.preventDefault(), null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerWillCutText(), this.deleteInDirection("backward"), t2.defaultPrevented))
      return this.requestRender();
  }, copy(t2) {
    var e2;
    null !== (e2 = this.responder) && void 0 !== e2 && e2.selectionIsExpanded() && this.serializeSelectionToDataTransfer(t2.clipboardData) && t2.preventDefault();
  }, paste(t2) {
    const e2 = t2.clipboardData || t2.testClipboardData, i2 = { clipboard: e2 };
    if (!e2 || nn(t2))
      return void this.getPastedHTMLUsingHiddenElement((t3) => {
        var e3, n3, r3;
        return i2.type = "text/html", i2.html = t3, null === (e3 = this.delegate) || void 0 === e3 || e3.inputControllerWillPaste(i2), null === (n3 = this.responder) || void 0 === n3 || n3.insertHTML(i2.html), this.requestRender(), null === (r3 = this.delegate) || void 0 === r3 ? void 0 : r3.inputControllerDidPaste(i2);
      });
    const n2 = e2.getData("URL"), r2 = e2.getData("text/html"), o2 = e2.getData("public.url-name");
    if (n2) {
      var s2, a2, l2;
      let t3;
      i2.type = "text/html", t3 = o2 ? qt(o2).trim() : n2, i2.html = this.createLinkHTML(n2, t3), null === (s2 = this.delegate) || void 0 === s2 || s2.inputControllerWillPaste(i2), this.setInputSummary({ textAdded: t3, didDelete: this.selectionIsExpanded() }), null === (a2 = this.responder) || void 0 === a2 || a2.insertHTML(i2.html), this.requestRender(), null === (l2 = this.delegate) || void 0 === l2 || l2.inputControllerDidPaste(i2);
    } else if (Ct(e2)) {
      var c2, h2, u2;
      i2.type = "text/plain", i2.string = e2.getData("text/plain"), null === (c2 = this.delegate) || void 0 === c2 || c2.inputControllerWillPaste(i2), this.setInputSummary({ textAdded: i2.string, didDelete: this.selectionIsExpanded() }), null === (h2 = this.responder) || void 0 === h2 || h2.insertString(i2.string), this.requestRender(), null === (u2 = this.delegate) || void 0 === u2 || u2.inputControllerDidPaste(i2);
    } else if (r2) {
      var d2, g2, m2;
      i2.type = "text/html", i2.html = r2, null === (d2 = this.delegate) || void 0 === d2 || d2.inputControllerWillPaste(i2), null === (g2 = this.responder) || void 0 === g2 || g2.insertHTML(i2.html), this.requestRender(), null === (m2 = this.delegate) || void 0 === m2 || m2.inputControllerDidPaste(i2);
    } else if (Array.from(e2.types).includes("Files")) {
      var p2, f2;
      const t3 = null === (p2 = e2.items) || void 0 === p2 || null === (p2 = p2[0]) || void 0 === p2 || null === (f2 = p2.getAsFile) || void 0 === f2 ? void 0 : f2.call(p2);
      if (t3) {
        var b2, v2, A2;
        const e3 = Zi(t3);
        !t3.name && e3 && (t3.name = "pasted-file-".concat(++Yi, ".").concat(e3)), i2.type = "File", i2.file = t3, null === (b2 = this.delegate) || void 0 === b2 || b2.inputControllerWillAttachFiles(), null === (v2 = this.responder) || void 0 === v2 || v2.insertFile(i2.file), this.requestRender(), null === (A2 = this.delegate) || void 0 === A2 || A2.inputControllerDidPaste(i2);
      }
    }
    t2.preventDefault();
  }, compositionstart(t2) {
    return this.getCompositionInput().start(t2.data);
  }, compositionupdate(t2) {
    return this.getCompositionInput().update(t2.data);
  }, compositionend(t2) {
    return this.getCompositionInput().end(t2.data);
  }, beforeinput(t2) {
    this.inputSummary.didInput = true;
  }, input(t2) {
    return this.inputSummary.didInput = true, t2.stopPropagation();
  } }), Ae(Qi, "keys", { backspace(t2) {
    var e2;
    return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t2);
  }, delete(t2) {
    var e2;
    return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t2);
  }, return(t2) {
    var e2, i2;
    return this.setInputSummary({ preferDocument: true }), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 ? void 0 : i2.insertLineBreak();
  }, tab(t2) {
    var e2, i2;
    null !== (e2 = this.responder) && void 0 !== e2 && e2.canIncreaseNestingLevel() && (null === (i2 = this.responder) || void 0 === i2 || i2.increaseNestingLevel(), this.requestRender(), t2.preventDefault());
  }, left(t2) {
    var e2;
    if (this.selectionIsInCursorTarget())
      return t2.preventDefault(), null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.moveCursorInDirection("backward");
  }, right(t2) {
    var e2;
    if (this.selectionIsInCursorTarget())
      return t2.preventDefault(), null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.moveCursorInDirection("forward");
  }, control: { d(t2) {
    var e2;
    return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t2);
  }, h(t2) {
    var e2;
    return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t2);
  }, o(t2) {
    var e2, i2;
    return t2.preventDefault(), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 || i2.insertString("\n", { updatePosition: false }), this.requestRender();
  } }, shift: { return(t2) {
    var e2, i2;
    null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 || i2.insertString("\n"), this.requestRender(), t2.preventDefault();
  }, tab(t2) {
    var e2, i2;
    null !== (e2 = this.responder) && void 0 !== e2 && e2.canDecreaseNestingLevel() && (null === (i2 = this.responder) || void 0 === i2 || i2.decreaseNestingLevel(), this.requestRender(), t2.preventDefault());
  }, left(t2) {
    if (this.selectionIsInCursorTarget())
      return t2.preventDefault(), this.expandSelectionInDirection("backward");
  }, right(t2) {
    if (this.selectionIsInCursorTarget())
      return t2.preventDefault(), this.expandSelectionInDirection("forward");
  } }, alt: { backspace(t2) {
    var e2;
    return this.setInputSummary({ preferDocument: false }), null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.inputControllerWillPerformTyping();
  } }, meta: { backspace(t2) {
    var e2;
    return this.setInputSummary({ preferDocument: false }), null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.inputControllerWillPerformTyping();
  } } }), Qi.proxyMethod("responder?.getSelectedRange"), Qi.proxyMethod("responder?.setSelectedRange"), Qi.proxyMethod("responder?.expandSelectionInDirection"), Qi.proxyMethod("responder?.selectionIsInCursorTarget"), Qi.proxyMethod("responder?.selectionIsExpanded");
  var Zi = (t2) => {
    var e2;
    return null === (e2 = t2.type) || void 0 === e2 || null === (e2 = e2.match(/\/(\w+)$/)) || void 0 === e2 ? void 0 : e2[1];
  };
  var tn = !(null === (Gi = " ".codePointAt) || void 0 === Gi || !Gi.call(" ", 0));
  var en = function(t2) {
    if (t2.key && tn && t2.key.codePointAt(0) === t2.keyCode)
      return t2.key;
    {
      let e2;
      if (null === t2.which ? e2 = t2.keyCode : 0 !== t2.which && 0 !== t2.charCode && (e2 = t2.charCode), null != e2 && "escape" !== Xi[e2])
        return X.fromCodepoints([e2]).toString();
    }
  };
  var nn = function(t2) {
    const e2 = t2.clipboardData;
    if (e2) {
      if (e2.types.includes("text/html")) {
        for (const t3 of e2.types) {
          const i2 = /^CorePasteboardFlavorType/.test(t3), n2 = /^dyn\./.test(t3) && e2.getData(t3);
          if (i2 || n2)
            return true;
        }
        return false;
      }
      {
        const t3 = e2.types.includes("com.apple.webarchive"), i2 = e2.types.includes("com.apple.flat-rtfd");
        return t3 || i2;
      }
    }
  };
  var rn = class extends z {
    constructor(t2) {
      super(...arguments), this.inputController = t2, this.responder = this.inputController.responder, this.delegate = this.inputController.delegate, this.inputSummary = this.inputController.inputSummary, this.data = {};
    }
    start(t2) {
      if (this.data.start = t2, this.isSignificant()) {
        var e2, i2;
        if ("keypress" === this.inputSummary.eventName && this.inputSummary.textAdded)
          null === (i2 = this.responder) || void 0 === i2 || i2.deleteInDirection("left");
        this.selectionIsExpanded() || (this.insertPlaceholder(), this.requestRender()), this.range = null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.getSelectedRange();
      }
    }
    update(t2) {
      if (this.data.update = t2, this.isSignificant()) {
        const t3 = this.selectPlaceholder();
        t3 && (this.forgetPlaceholder(), this.range = t3);
      }
    }
    end(t2) {
      return this.data.end = t2, this.isSignificant() ? (this.forgetPlaceholder(), this.canApplyToDocument() ? (this.setInputSummary({ preferDocument: true, didInput: false }), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 || i2.setSelectedRange(this.range), null === (n2 = this.responder) || void 0 === n2 || n2.insertString(this.data.end), null === (r2 = this.responder) || void 0 === r2 ? void 0 : r2.setSelectedRange(this.range[0] + this.data.end.length)) : null != this.data.start || null != this.data.update ? (this.requestReparse(), this.inputController.reset()) : void 0) : this.inputController.reset();
      var e2, i2, n2, r2;
    }
    getEndData() {
      return this.data.end;
    }
    isEnded() {
      return null != this.getEndData();
    }
    isSignificant() {
      return !$i.composesExistingText || this.inputSummary.didInput;
    }
    canApplyToDocument() {
      var t2, e2;
      return 0 === (null === (t2 = this.data.start) || void 0 === t2 ? void 0 : t2.length) && (null === (e2 = this.data.end) || void 0 === e2 ? void 0 : e2.length) > 0 && this.range;
    }
  };
  rn.proxyMethod("inputController.setInputSummary"), rn.proxyMethod("inputController.requestRender"), rn.proxyMethod("inputController.requestReparse"), rn.proxyMethod("responder?.selectionIsExpanded"), rn.proxyMethod("responder?.insertPlaceholder"), rn.proxyMethod("responder?.selectPlaceholder"), rn.proxyMethod("responder?.forgetPlaceholder");
  var on = class extends Ki {
    constructor() {
      super(...arguments), this.render = this.render.bind(this);
    }
    elementDidMutate() {
      return this.scheduledRender ? this.composing ? null === (t2 = this.delegate) || void 0 === t2 || null === (e2 = t2.inputControllerDidAllowUnhandledInput) || void 0 === e2 ? void 0 : e2.call(t2) : void 0 : this.reparse();
      var t2, e2;
    }
    scheduleRender() {
      return this.scheduledRender ? this.scheduledRender : this.scheduledRender = requestAnimationFrame(this.render);
    }
    render() {
      var t2, e2;
      (cancelAnimationFrame(this.scheduledRender), this.scheduledRender = null, this.composing) || (null === (e2 = this.delegate) || void 0 === e2 || e2.render());
      null === (t2 = this.afterRender) || void 0 === t2 || t2.call(this), this.afterRender = null;
    }
    reparse() {
      var t2;
      return null === (t2 = this.delegate) || void 0 === t2 ? void 0 : t2.reparse();
    }
    insertString() {
      var t2;
      let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", i2 = arguments.length > 1 ? arguments[1] : void 0;
      return null === (t2 = this.delegate) || void 0 === t2 || t2.inputControllerWillPerformTyping(), this.withTargetDOMRange(function() {
        var t3;
        return null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.insertString(e2, i2);
      });
    }
    toggleAttributeIfSupported(t2) {
      var e2;
      if (dt().includes(t2))
        return null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformFormatting(t2), this.withTargetDOMRange(function() {
          var e3;
          return null === (e3 = this.responder) || void 0 === e3 ? void 0 : e3.toggleCurrentAttribute(t2);
        });
    }
    activateAttributeIfSupported(t2, e2) {
      var i2;
      if (dt().includes(t2))
        return null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerWillPerformFormatting(t2), this.withTargetDOMRange(function() {
          var i3;
          return null === (i3 = this.responder) || void 0 === i3 ? void 0 : i3.setCurrentAttribute(t2, e2);
        });
    }
    deleteInDirection(t2) {
      let { recordUndoEntry: e2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { recordUndoEntry: true };
      var i2;
      e2 && (null === (i2 = this.delegate) || void 0 === i2 || i2.inputControllerWillPerformTyping());
      const n2 = () => {
        var e3;
        return null === (e3 = this.responder) || void 0 === e3 ? void 0 : e3.deleteInDirection(t2);
      }, r2 = this.getTargetDOMRange({ minLength: 2 });
      return r2 ? this.withTargetDOMRange(r2, n2) : n2();
    }
    withTargetDOMRange(t2, e2) {
      var i2;
      return "function" == typeof t2 && (e2 = t2, t2 = this.getTargetDOMRange()), t2 ? null === (i2 = this.responder) || void 0 === i2 ? void 0 : i2.withTargetDOMRange(t2, e2.bind(this)) : (It.reset(), e2.call(this));
    }
    getTargetDOMRange() {
      var t2, e2;
      let { minLength: i2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { minLength: 0 };
      const n2 = null === (t2 = (e2 = this.event).getTargetRanges) || void 0 === t2 ? void 0 : t2.call(e2);
      if (n2 && n2.length) {
        const t3 = sn(n2[0]);
        if (0 === i2 || t3.toString().length >= i2)
          return t3;
      }
    }
    withEvent(t2, e2) {
      let i2;
      this.event = t2;
      try {
        i2 = e2.call(this);
      } finally {
        this.event = null;
      }
      return i2;
    }
  };
  Ae(on, "events", { keydown(t2) {
    if (Rt(t2)) {
      var e2;
      const i2 = hn(t2);
      null !== (e2 = this.delegate) && void 0 !== e2 && e2.inputControllerDidReceiveKeyboardCommand(i2) && t2.preventDefault();
    } else {
      let e3 = t2.key;
      t2.altKey && (e3 += "+Alt"), t2.shiftKey && (e3 += "+Shift");
      const i2 = this.constructor.keys[e3];
      if (i2)
        return this.withEvent(t2, i2);
    }
  }, paste(t2) {
    var e2;
    let i2;
    const n2 = null === (e2 = t2.clipboardData) || void 0 === e2 ? void 0 : e2.getData("URL");
    return ln(t2) ? (t2.preventDefault(), this.attachFiles(t2.clipboardData.files)) : cn(t2) ? (t2.preventDefault(), i2 = { type: "text/plain", string: t2.clipboardData.getData("text/plain") }, null === (r2 = this.delegate) || void 0 === r2 || r2.inputControllerWillPaste(i2), null === (o2 = this.responder) || void 0 === o2 || o2.insertString(i2.string), this.render(), null === (s2 = this.delegate) || void 0 === s2 ? void 0 : s2.inputControllerDidPaste(i2)) : n2 ? (t2.preventDefault(), i2 = { type: "text/html", html: this.createLinkHTML(n2) }, null === (a2 = this.delegate) || void 0 === a2 || a2.inputControllerWillPaste(i2), null === (l2 = this.responder) || void 0 === l2 || l2.insertHTML(i2.html), this.render(), null === (c2 = this.delegate) || void 0 === c2 ? void 0 : c2.inputControllerDidPaste(i2)) : void 0;
    var r2, o2, s2, a2, l2, c2;
  }, beforeinput(t2) {
    const e2 = this.constructor.inputTypes[t2.inputType];
    e2 && (this.withEvent(t2, e2), this.scheduleRender());
  }, input(t2) {
    It.reset();
  }, dragstart(t2) {
    var e2, i2;
    null !== (e2 = this.responder) && void 0 !== e2 && e2.selectionContainsAttachments() && (t2.dataTransfer.setData("application/x-trix-dragging", true), this.dragging = { range: null === (i2 = this.responder) || void 0 === i2 ? void 0 : i2.getSelectedRange(), point: un(t2) });
  }, dragenter(t2) {
    an(t2) && t2.preventDefault();
  }, dragover(t2) {
    if (this.dragging) {
      t2.preventDefault();
      const i2 = un(t2);
      var e2;
      if (!kt(i2, this.dragging.point))
        return this.dragging.point = i2, null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.setLocationRangeFromPointRange(i2);
    } else
      an(t2) && t2.preventDefault();
  }, drop(t2) {
    var e2, i2;
    if (this.dragging)
      return t2.preventDefault(), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillMoveText(), null === (i2 = this.responder) || void 0 === i2 || i2.moveTextFromRange(this.dragging.range), this.dragging = null, this.scheduleRender();
    if (an(t2)) {
      var n2;
      t2.preventDefault();
      const e3 = un(t2);
      return null === (n2 = this.responder) || void 0 === n2 || n2.setLocationRangeFromPointRange(e3), this.attachFiles(t2.dataTransfer.files);
    }
  }, dragend() {
    var t2;
    this.dragging && (null === (t2 = this.responder) || void 0 === t2 || t2.setSelectedRange(this.dragging.range), this.dragging = null);
  }, compositionend(t2) {
    this.composing && (this.composing = false, a.recentAndroid || this.scheduleRender());
  } }), Ae(on, "keys", { ArrowLeft() {
    var t2, e2;
    if (null !== (t2 = this.responder) && void 0 !== t2 && t2.shouldManageMovingCursorInDirection("backward"))
      return this.event.preventDefault(), null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.moveCursorInDirection("backward");
  }, ArrowRight() {
    var t2, e2;
    if (null !== (t2 = this.responder) && void 0 !== t2 && t2.shouldManageMovingCursorInDirection("forward"))
      return this.event.preventDefault(), null === (e2 = this.responder) || void 0 === e2 ? void 0 : e2.moveCursorInDirection("forward");
  }, Backspace() {
    var t2, e2, i2;
    if (null !== (t2 = this.responder) && void 0 !== t2 && t2.shouldManageDeletingInDirection("backward"))
      return this.event.preventDefault(), null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillPerformTyping(), null === (i2 = this.responder) || void 0 === i2 || i2.deleteInDirection("backward"), this.render();
  }, Tab() {
    var t2, e2;
    if (null !== (t2 = this.responder) && void 0 !== t2 && t2.canIncreaseNestingLevel())
      return this.event.preventDefault(), null === (e2 = this.responder) || void 0 === e2 || e2.increaseNestingLevel(), this.render();
  }, "Tab+Shift"() {
    var t2, e2;
    if (null !== (t2 = this.responder) && void 0 !== t2 && t2.canDecreaseNestingLevel())
      return this.event.preventDefault(), null === (e2 = this.responder) || void 0 === e2 || e2.decreaseNestingLevel(), this.render();
  } }), Ae(on, "inputTypes", { deleteByComposition() {
    return this.deleteInDirection("backward", { recordUndoEntry: false });
  }, deleteByCut() {
    return this.deleteInDirection("backward");
  }, deleteByDrag() {
    return this.event.preventDefault(), this.withTargetDOMRange(function() {
      var t2;
      this.deleteByDragRange = null === (t2 = this.responder) || void 0 === t2 ? void 0 : t2.getSelectedRange();
    });
  }, deleteCompositionText() {
    return this.deleteInDirection("backward", { recordUndoEntry: false });
  }, deleteContent() {
    return this.deleteInDirection("backward");
  }, deleteContentBackward() {
    return this.deleteInDirection("backward");
  }, deleteContentForward() {
    return this.deleteInDirection("forward");
  }, deleteEntireSoftLine() {
    return this.deleteInDirection("forward");
  }, deleteHardLineBackward() {
    return this.deleteInDirection("backward");
  }, deleteHardLineForward() {
    return this.deleteInDirection("forward");
  }, deleteSoftLineBackward() {
    return this.deleteInDirection("backward");
  }, deleteSoftLineForward() {
    return this.deleteInDirection("forward");
  }, deleteWordBackward() {
    return this.deleteInDirection("backward");
  }, deleteWordForward() {
    return this.deleteInDirection("forward");
  }, formatBackColor() {
    return this.activateAttributeIfSupported("backgroundColor", this.event.data);
  }, formatBold() {
    return this.toggleAttributeIfSupported("bold");
  }, formatFontColor() {
    return this.activateAttributeIfSupported("color", this.event.data);
  }, formatFontName() {
    return this.activateAttributeIfSupported("font", this.event.data);
  }, formatIndent() {
    var t2;
    if (null !== (t2 = this.responder) && void 0 !== t2 && t2.canIncreaseNestingLevel())
      return this.withTargetDOMRange(function() {
        var t3;
        return null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.increaseNestingLevel();
      });
  }, formatItalic() {
    return this.toggleAttributeIfSupported("italic");
  }, formatJustifyCenter() {
    return this.toggleAttributeIfSupported("justifyCenter");
  }, formatJustifyFull() {
    return this.toggleAttributeIfSupported("justifyFull");
  }, formatJustifyLeft() {
    return this.toggleAttributeIfSupported("justifyLeft");
  }, formatJustifyRight() {
    return this.toggleAttributeIfSupported("justifyRight");
  }, formatOutdent() {
    var t2;
    if (null !== (t2 = this.responder) && void 0 !== t2 && t2.canDecreaseNestingLevel())
      return this.withTargetDOMRange(function() {
        var t3;
        return null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.decreaseNestingLevel();
      });
  }, formatRemove() {
    this.withTargetDOMRange(function() {
      for (const i2 in null === (t2 = this.responder) || void 0 === t2 ? void 0 : t2.getCurrentAttributes()) {
        var t2, e2;
        null === (e2 = this.responder) || void 0 === e2 || e2.removeCurrentAttribute(i2);
      }
    });
  }, formatSetBlockTextDirection() {
    return this.activateAttributeIfSupported("blockDir", this.event.data);
  }, formatSetInlineTextDirection() {
    return this.activateAttributeIfSupported("textDir", this.event.data);
  }, formatStrikeThrough() {
    return this.toggleAttributeIfSupported("strike");
  }, formatSubscript() {
    return this.toggleAttributeIfSupported("sub");
  }, formatSuperscript() {
    return this.toggleAttributeIfSupported("sup");
  }, formatUnderline() {
    return this.toggleAttributeIfSupported("underline");
  }, historyRedo() {
    var t2;
    return null === (t2 = this.delegate) || void 0 === t2 ? void 0 : t2.inputControllerWillPerformRedo();
  }, historyUndo() {
    var t2;
    return null === (t2 = this.delegate) || void 0 === t2 ? void 0 : t2.inputControllerWillPerformUndo();
  }, insertCompositionText() {
    return this.composing = true, this.insertString(this.event.data);
  }, insertFromComposition() {
    return this.composing = false, this.insertString(this.event.data);
  }, insertFromDrop() {
    const t2 = this.deleteByDragRange;
    var e2;
    if (t2)
      return this.deleteByDragRange = null, null === (e2 = this.delegate) || void 0 === e2 || e2.inputControllerWillMoveText(), this.withTargetDOMRange(function() {
        var e3;
        return null === (e3 = this.responder) || void 0 === e3 ? void 0 : e3.moveTextFromRange(t2);
      });
  }, insertFromPaste() {
    var t2;
    const { dataTransfer: e2 } = this.event, i2 = { dataTransfer: e2 }, n2 = e2.getData("URL"), r2 = e2.getData("text/html");
    if (n2) {
      var o2;
      let t3;
      this.event.preventDefault(), i2.type = "text/html";
      const r3 = e2.getData("public.url-name");
      t3 = r3 ? qt(r3).trim() : n2, i2.html = this.createLinkHTML(n2, t3), null === (o2 = this.delegate) || void 0 === o2 || o2.inputControllerWillPaste(i2), this.withTargetDOMRange(function() {
        var t4;
        return null === (t4 = this.responder) || void 0 === t4 ? void 0 : t4.insertHTML(i2.html);
      }), this.afterRender = () => {
        var t4;
        return null === (t4 = this.delegate) || void 0 === t4 ? void 0 : t4.inputControllerDidPaste(i2);
      };
    } else if (Ct(e2)) {
      var s2;
      i2.type = "text/plain", i2.string = e2.getData("text/plain"), null === (s2 = this.delegate) || void 0 === s2 || s2.inputControllerWillPaste(i2), this.withTargetDOMRange(function() {
        var t3;
        return null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.insertString(i2.string);
      }), this.afterRender = () => {
        var t3;
        return null === (t3 = this.delegate) || void 0 === t3 ? void 0 : t3.inputControllerDidPaste(i2);
      };
    } else if (r2) {
      var a2;
      this.event.preventDefault(), i2.type = "text/html", i2.html = r2, null === (a2 = this.delegate) || void 0 === a2 || a2.inputControllerWillPaste(i2), this.withTargetDOMRange(function() {
        var t3;
        return null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.insertHTML(i2.html);
      }), this.afterRender = () => {
        var t3;
        return null === (t3 = this.delegate) || void 0 === t3 ? void 0 : t3.inputControllerDidPaste(i2);
      };
    } else if (null !== (t2 = e2.files) && void 0 !== t2 && t2.length) {
      var l2;
      i2.type = "File", i2.file = e2.files[0], null === (l2 = this.delegate) || void 0 === l2 || l2.inputControllerWillPaste(i2), this.withTargetDOMRange(function() {
        var t3;
        return null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.insertFile(i2.file);
      }), this.afterRender = () => {
        var t3;
        return null === (t3 = this.delegate) || void 0 === t3 ? void 0 : t3.inputControllerDidPaste(i2);
      };
    }
  }, insertFromYank() {
    return this.insertString(this.event.data);
  }, insertLineBreak() {
    return this.insertString("\n");
  }, insertLink() {
    return this.activateAttributeIfSupported("href", this.event.data);
  }, insertOrderedList() {
    return this.toggleAttributeIfSupported("number");
  }, insertParagraph() {
    var t2;
    return null === (t2 = this.delegate) || void 0 === t2 || t2.inputControllerWillPerformTyping(), this.withTargetDOMRange(function() {
      var t3;
      return null === (t3 = this.responder) || void 0 === t3 ? void 0 : t3.insertLineBreak();
    });
  }, insertReplacementText() {
    return this.insertString(this.event.dataTransfer.getData("text/plain"), { updatePosition: false });
  }, insertText() {
    var t2;
    return this.insertString(this.event.data || (null === (t2 = this.event.dataTransfer) || void 0 === t2 ? void 0 : t2.getData("text/plain")));
  }, insertTranspose() {
    return this.insertString(this.event.data);
  }, insertUnorderedList() {
    return this.toggleAttributeIfSupported("bullet");
  } });
  var sn = function(t2) {
    const e2 = document.createRange();
    return e2.setStart(t2.startContainer, t2.startOffset), e2.setEnd(t2.endContainer, t2.endOffset), e2;
  };
  var an = (t2) => {
    var e2;
    return Array.from((null === (e2 = t2.dataTransfer) || void 0 === e2 ? void 0 : e2.types) || []).includes("Files");
  };
  var ln = function(t2) {
    const e2 = t2.clipboardData;
    if (e2)
      return e2.types.includes("Files") && 1 === e2.types.length && e2.files.length >= 1;
  };
  var cn = function(t2) {
    const e2 = t2.clipboardData;
    if (e2)
      return e2.types.includes("text/plain") && 1 === e2.types.length;
  };
  var hn = function(t2) {
    const e2 = [];
    return t2.altKey && e2.push("alt"), t2.shiftKey && e2.push("shift"), e2.push(t2.key), e2;
  };
  var un = (t2) => ({ x: t2.clientX, y: t2.clientY });
  var dn = "[data-trix-attribute]";
  var gn = "[data-trix-action]";
  var mn = "".concat(dn, ", ").concat(gn);
  var pn = "[data-trix-dialog]";
  var fn2 = "".concat(pn, "[data-trix-active]");
  var bn = "".concat(pn, " [data-trix-method]");
  var vn = "".concat(pn, " [data-trix-input]");
  var An = (t2, e2) => (e2 || (e2 = yn(t2)), t2.querySelector("[data-trix-input][name='".concat(e2, "']")));
  var xn = (t2) => t2.getAttribute("data-trix-action");
  var yn = (t2) => t2.getAttribute("data-trix-attribute") || t2.getAttribute("data-trix-dialog-attribute");
  var Cn = class extends z {
    constructor(t2) {
      super(t2), this.didClickActionButton = this.didClickActionButton.bind(this), this.didClickAttributeButton = this.didClickAttributeButton.bind(this), this.didClickDialogButton = this.didClickDialogButton.bind(this), this.didKeyDownDialogInput = this.didKeyDownDialogInput.bind(this), this.element = t2, this.attributes = {}, this.actions = {}, this.resetDialogInputs(), f("mousedown", { onElement: this.element, matchingSelector: gn, withCallback: this.didClickActionButton }), f("mousedown", { onElement: this.element, matchingSelector: dn, withCallback: this.didClickAttributeButton }), f("click", { onElement: this.element, matchingSelector: mn, preventDefault: true }), f("click", { onElement: this.element, matchingSelector: bn, withCallback: this.didClickDialogButton }), f("keydown", { onElement: this.element, matchingSelector: vn, withCallback: this.didKeyDownDialogInput });
    }
    didClickActionButton(t2, e2) {
      var i2;
      null === (i2 = this.delegate) || void 0 === i2 || i2.toolbarDidClickButton(), t2.preventDefault();
      const n2 = xn(e2);
      return this.getDialog(n2) ? this.toggleDialog(n2) : null === (r2 = this.delegate) || void 0 === r2 ? void 0 : r2.toolbarDidInvokeAction(n2);
      var r2;
    }
    didClickAttributeButton(t2, e2) {
      var i2;
      null === (i2 = this.delegate) || void 0 === i2 || i2.toolbarDidClickButton(), t2.preventDefault();
      const n2 = yn(e2);
      var r2;
      this.getDialog(n2) ? this.toggleDialog(n2) : null === (r2 = this.delegate) || void 0 === r2 || r2.toolbarDidToggleAttribute(n2);
      return this.refreshAttributeButtons();
    }
    didClickDialogButton(t2, e2) {
      const i2 = A(e2, { matchingSelector: pn });
      return this[e2.getAttribute("data-trix-method")].call(this, i2);
    }
    didKeyDownDialogInput(t2, e2) {
      if (13 === t2.keyCode) {
        t2.preventDefault();
        const i2 = e2.getAttribute("name"), n2 = this.getDialog(i2);
        this.setAttribute(n2);
      }
      if (27 === t2.keyCode)
        return t2.preventDefault(), this.hideDialog();
    }
    updateActions(t2) {
      return this.actions = t2, this.refreshActionButtons();
    }
    refreshActionButtons() {
      return this.eachActionButton((t2, e2) => {
        t2.disabled = false === this.actions[e2];
      });
    }
    eachActionButton(t2) {
      return Array.from(this.element.querySelectorAll(gn)).map((e2) => t2(e2, xn(e2)));
    }
    updateAttributes(t2) {
      return this.attributes = t2, this.refreshAttributeButtons();
    }
    refreshAttributeButtons() {
      return this.eachAttributeButton((t2, e2) => (t2.disabled = false === this.attributes[e2], this.attributes[e2] || this.dialogIsVisible(e2) ? (t2.setAttribute("data-trix-active", ""), t2.classList.add("trix-active")) : (t2.removeAttribute("data-trix-active"), t2.classList.remove("trix-active"))));
    }
    eachAttributeButton(t2) {
      return Array.from(this.element.querySelectorAll(dn)).map((e2) => t2(e2, yn(e2)));
    }
    applyKeyboardCommand(t2) {
      const e2 = JSON.stringify(t2.sort());
      for (const t3 of Array.from(this.element.querySelectorAll("[data-trix-key]"))) {
        const i2 = t3.getAttribute("data-trix-key").split("+");
        if (JSON.stringify(i2.sort()) === e2)
          return b("mousedown", { onElement: t3 }), true;
      }
      return false;
    }
    dialogIsVisible(t2) {
      const e2 = this.getDialog(t2);
      if (e2)
        return e2.hasAttribute("data-trix-active");
    }
    toggleDialog(t2) {
      return this.dialogIsVisible(t2) ? this.hideDialog() : this.showDialog(t2);
    }
    showDialog(t2) {
      var e2, i2;
      this.hideDialog(), null === (e2 = this.delegate) || void 0 === e2 || e2.toolbarWillShowDialog();
      const n2 = this.getDialog(t2);
      n2.setAttribute("data-trix-active", ""), n2.classList.add("trix-active"), Array.from(n2.querySelectorAll("input[disabled]")).forEach((t3) => {
        t3.removeAttribute("disabled");
      });
      const r2 = yn(n2);
      if (r2) {
        const e3 = An(n2, t2);
        e3 && (e3.value = this.attributes[r2] || "", e3.select());
      }
      return null === (i2 = this.delegate) || void 0 === i2 ? void 0 : i2.toolbarDidShowDialog(t2);
    }
    setAttribute(t2) {
      const e2 = yn(t2), i2 = An(t2, e2);
      return i2.willValidate && !i2.checkValidity() ? (i2.setAttribute("data-trix-validate", ""), i2.classList.add("trix-validate"), i2.focus()) : (null === (n2 = this.delegate) || void 0 === n2 || n2.toolbarDidUpdateAttribute(e2, i2.value), this.hideDialog());
      var n2;
    }
    removeAttribute(t2) {
      var e2;
      const i2 = yn(t2);
      return null === (e2 = this.delegate) || void 0 === e2 || e2.toolbarDidRemoveAttribute(i2), this.hideDialog();
    }
    hideDialog() {
      const t2 = this.element.querySelector(fn2);
      var e2;
      if (t2)
        return t2.removeAttribute("data-trix-active"), t2.classList.remove("trix-active"), this.resetDialogInputs(), null === (e2 = this.delegate) || void 0 === e2 ? void 0 : e2.toolbarDidHideDialog(((t3) => t3.getAttribute("data-trix-dialog"))(t2));
    }
    resetDialogInputs() {
      Array.from(this.element.querySelectorAll(vn)).forEach((t2) => {
        t2.setAttribute("disabled", "disabled"), t2.removeAttribute("data-trix-validate"), t2.classList.remove("trix-validate");
      });
    }
    getDialog(t2) {
      return this.element.querySelector("[data-trix-dialog=".concat(t2, "]"));
    }
  };
  var Rn = class extends Oi {
    constructor(t2) {
      let { editorElement: e2, document: i2, html: n2 } = t2;
      super(...arguments), this.editorElement = e2, this.selectionManager = new Li(this.editorElement), this.selectionManager.delegate = this, this.composition = new gi(), this.composition.delegate = this, this.attachmentManager = new ui(this.composition.getAttachments()), this.attachmentManager.delegate = this, this.inputController = 2 === M.getLevel() ? new on(this.editorElement) : new Qi(this.editorElement), this.inputController.delegate = this, this.inputController.responder = this.composition, this.compositionController = new Ni(this.editorElement, this.composition), this.compositionController.delegate = this, this.toolbarController = new Cn(this.editorElement.toolbarElement), this.toolbarController.delegate = this, this.editor = new xi(this.composition, this.selectionManager, this.editorElement), i2 ? this.editor.loadDocument(i2) : this.editor.loadHTML(n2);
    }
    registerSelectionManager() {
      return It.registerSelectionManager(this.selectionManager);
    }
    unregisterSelectionManager() {
      return It.unregisterSelectionManager(this.selectionManager);
    }
    render() {
      return this.compositionController.render();
    }
    reparse() {
      return this.composition.replaceHTML(this.editorElement.innerHTML);
    }
    compositionDidChangeDocument(t2) {
      if (this.notifyEditorElement("document-change"), !this.handlingInput)
        return this.render();
    }
    compositionDidChangeCurrentAttributes(t2) {
      return this.currentAttributes = t2, this.toolbarController.updateAttributes(this.currentAttributes), this.updateCurrentActions(), this.notifyEditorElement("attributes-change", { attributes: this.currentAttributes });
    }
    compositionDidPerformInsertionAtRange(t2) {
      this.pasting && (this.pastedRange = t2);
    }
    compositionShouldAcceptFile(t2) {
      return this.notifyEditorElement("file-accept", { file: t2 });
    }
    compositionDidAddAttachment(t2) {
      const e2 = this.attachmentManager.manageAttachment(t2);
      return this.notifyEditorElement("attachment-add", { attachment: e2 });
    }
    compositionDidEditAttachment(t2) {
      this.compositionController.rerenderViewForObject(t2);
      const e2 = this.attachmentManager.manageAttachment(t2);
      return this.notifyEditorElement("attachment-edit", { attachment: e2 }), this.notifyEditorElement("change");
    }
    compositionDidChangeAttachmentPreviewURL(t2) {
      return this.compositionController.invalidateViewForObject(t2), this.notifyEditorElement("change");
    }
    compositionDidRemoveAttachment(t2) {
      const e2 = this.attachmentManager.unmanageAttachment(t2);
      return this.notifyEditorElement("attachment-remove", { attachment: e2 });
    }
    compositionDidStartEditingAttachment(t2, e2) {
      return this.attachmentLocationRange = this.composition.document.getLocationRangeOfAttachment(t2), this.compositionController.installAttachmentEditorForAttachment(t2, e2), this.selectionManager.setLocationRange(this.attachmentLocationRange);
    }
    compositionDidStopEditingAttachment(t2) {
      this.compositionController.uninstallAttachmentEditor(), this.attachmentLocationRange = null;
    }
    compositionDidRequestChangingSelectionToLocationRange(t2) {
      if (!this.loadingSnapshot || this.isFocused())
        return this.requestedLocationRange = t2, this.compositionRevisionWhenLocationRangeRequested = this.composition.revision, this.handlingInput ? void 0 : this.render();
    }
    compositionWillLoadSnapshot() {
      this.loadingSnapshot = true;
    }
    compositionDidLoadSnapshot() {
      this.compositionController.refreshViewCache(), this.render(), this.loadingSnapshot = false;
    }
    getSelectionManager() {
      return this.selectionManager;
    }
    attachmentManagerDidRequestRemovalOfAttachment(t2) {
      return this.removeAttachment(t2);
    }
    compositionControllerWillSyncDocumentView() {
      return this.inputController.editorWillSyncDocumentView(), this.selectionManager.lock(), this.selectionManager.clearSelection();
    }
    compositionControllerDidSyncDocumentView() {
      return this.inputController.editorDidSyncDocumentView(), this.selectionManager.unlock(), this.updateCurrentActions(), this.notifyEditorElement("sync");
    }
    compositionControllerDidRender() {
      this.requestedLocationRange && (this.compositionRevisionWhenLocationRangeRequested === this.composition.revision && this.selectionManager.setLocationRange(this.requestedLocationRange), this.requestedLocationRange = null, this.compositionRevisionWhenLocationRangeRequested = null), this.renderedCompositionRevision !== this.composition.revision && (this.runEditorFilters(), this.composition.updateCurrentAttributes(), this.notifyEditorElement("render")), this.renderedCompositionRevision = this.composition.revision;
    }
    compositionControllerDidFocus() {
      return this.isFocusedInvisibly() && this.setLocationRange({ index: 0, offset: 0 }), this.toolbarController.hideDialog(), this.notifyEditorElement("focus");
    }
    compositionControllerDidBlur() {
      return this.notifyEditorElement("blur");
    }
    compositionControllerDidSelectAttachment(t2, e2) {
      return this.toolbarController.hideDialog(), this.composition.editAttachment(t2, e2);
    }
    compositionControllerDidRequestDeselectingAttachment(t2) {
      const e2 = this.attachmentLocationRange || this.composition.document.getLocationRangeOfAttachment(t2);
      return this.selectionManager.setLocationRange(e2[1]);
    }
    compositionControllerWillUpdateAttachment(t2) {
      return this.editor.recordUndoEntry("Edit Attachment", { context: t2.id, consolidatable: true });
    }
    compositionControllerDidRequestRemovalOfAttachment(t2) {
      return this.removeAttachment(t2);
    }
    inputControllerWillHandleInput() {
      this.handlingInput = true, this.requestedRender = false;
    }
    inputControllerDidRequestRender() {
      this.requestedRender = true;
    }
    inputControllerDidHandleInput() {
      if (this.handlingInput = false, this.requestedRender)
        return this.requestedRender = false, this.render();
    }
    inputControllerDidAllowUnhandledInput() {
      return this.notifyEditorElement("change");
    }
    inputControllerDidRequestReparse() {
      return this.reparse();
    }
    inputControllerWillPerformTyping() {
      return this.recordTypingUndoEntry();
    }
    inputControllerWillPerformFormatting(t2) {
      return this.recordFormattingUndoEntry(t2);
    }
    inputControllerWillCutText() {
      return this.editor.recordUndoEntry("Cut");
    }
    inputControllerWillPaste(t2) {
      return this.editor.recordUndoEntry("Paste"), this.pasting = true, this.notifyEditorElement("before-paste", { paste: t2 });
    }
    inputControllerDidPaste(t2) {
      return t2.range = this.pastedRange, this.pastedRange = null, this.pasting = null, this.notifyEditorElement("paste", { paste: t2 });
    }
    inputControllerWillMoveText() {
      return this.editor.recordUndoEntry("Move");
    }
    inputControllerWillAttachFiles() {
      return this.editor.recordUndoEntry("Drop Files");
    }
    inputControllerWillPerformUndo() {
      return this.editor.undo();
    }
    inputControllerWillPerformRedo() {
      return this.editor.redo();
    }
    inputControllerDidReceiveKeyboardCommand(t2) {
      return this.toolbarController.applyKeyboardCommand(t2);
    }
    inputControllerDidStartDrag() {
      this.locationRangeBeforeDrag = this.selectionManager.getLocationRange();
    }
    inputControllerDidReceiveDragOverPoint(t2) {
      return this.selectionManager.setLocationRangeFromPointRange(t2);
    }
    inputControllerDidCancelDrag() {
      this.selectionManager.setLocationRange(this.locationRangeBeforeDrag), this.locationRangeBeforeDrag = null;
    }
    locationRangeDidChange(t2) {
      return this.composition.updateCurrentAttributes(), this.updateCurrentActions(), this.attachmentLocationRange && !wt(this.attachmentLocationRange, t2) && this.composition.stopEditingAttachment(), this.notifyEditorElement("selection-change");
    }
    toolbarDidClickButton() {
      if (!this.getLocationRange())
        return this.setLocationRange({ index: 0, offset: 0 });
    }
    toolbarDidInvokeAction(t2) {
      return this.invokeAction(t2);
    }
    toolbarDidToggleAttribute(t2) {
      if (this.recordFormattingUndoEntry(t2), this.composition.toggleCurrentAttribute(t2), this.render(), !this.selectionFrozen)
        return this.editorElement.focus();
    }
    toolbarDidUpdateAttribute(t2, e2) {
      if (this.recordFormattingUndoEntry(t2), this.composition.setCurrentAttribute(t2, e2), this.render(), !this.selectionFrozen)
        return this.editorElement.focus();
    }
    toolbarDidRemoveAttribute(t2) {
      if (this.recordFormattingUndoEntry(t2), this.composition.removeCurrentAttribute(t2), this.render(), !this.selectionFrozen)
        return this.editorElement.focus();
    }
    toolbarWillShowDialog(t2) {
      return this.composition.expandSelectionForEditing(), this.freezeSelection();
    }
    toolbarDidShowDialog(t2) {
      return this.notifyEditorElement("toolbar-dialog-show", { dialogName: t2 });
    }
    toolbarDidHideDialog(t2) {
      return this.thawSelection(), this.editorElement.focus(), this.notifyEditorElement("toolbar-dialog-hide", { dialogName: t2 });
    }
    freezeSelection() {
      if (!this.selectionFrozen)
        return this.selectionManager.lock(), this.composition.freezeSelection(), this.selectionFrozen = true, this.render();
    }
    thawSelection() {
      if (this.selectionFrozen)
        return this.composition.thawSelection(), this.selectionManager.unlock(), this.selectionFrozen = false, this.render();
    }
    canInvokeAction(t2) {
      return !!this.actionIsExternal(t2) || !(null === (e2 = this.actions[t2]) || void 0 === e2 || null === (e2 = e2.test) || void 0 === e2 || !e2.call(this));
      var e2;
    }
    invokeAction(t2) {
      return this.actionIsExternal(t2) ? this.notifyEditorElement("action-invoke", { actionName: t2 }) : null === (e2 = this.actions[t2]) || void 0 === e2 || null === (e2 = e2.perform) || void 0 === e2 ? void 0 : e2.call(this);
      var e2;
    }
    actionIsExternal(t2) {
      return /^x-./.test(t2);
    }
    getCurrentActions() {
      const t2 = {};
      for (const e2 in this.actions)
        t2[e2] = this.canInvokeAction(e2);
      return t2;
    }
    updateCurrentActions() {
      const t2 = this.getCurrentActions();
      if (!kt(t2, this.currentActions))
        return this.currentActions = t2, this.toolbarController.updateActions(this.currentActions), this.notifyEditorElement("actions-change", { actions: this.currentActions });
    }
    runEditorFilters() {
      let t2 = this.composition.getSnapshot();
      if (Array.from(this.editor.filters).forEach((e3) => {
        const { document: i3, selectedRange: n2 } = t2;
        t2 = e3.call(this.editor, t2) || {}, t2.document || (t2.document = i3), t2.selectedRange || (t2.selectedRange = n2);
      }), e2 = t2, i2 = this.composition.getSnapshot(), !wt(e2.selectedRange, i2.selectedRange) || !e2.document.isEqualTo(i2.document))
        return this.composition.loadSnapshot(t2);
      var e2, i2;
    }
    updateInputElement() {
      const t2 = function(t3, e2) {
        const i2 = li[e2];
        if (i2)
          return i2(t3);
        throw new Error("unknown content type: ".concat(e2));
      }(this.compositionController.getSerializableElement(), "text/html");
      return this.editorElement.setInputElementValue(t2);
    }
    notifyEditorElement(t2, e2) {
      switch (t2) {
        case "document-change":
          this.documentChangedSinceLastRender = true;
          break;
        case "render":
          this.documentChangedSinceLastRender && (this.documentChangedSinceLastRender = false, this.notifyEditorElement("change"));
          break;
        case "change":
        case "attachment-add":
        case "attachment-edit":
        case "attachment-remove":
          this.updateInputElement();
      }
      return this.editorElement.notify(t2, e2);
    }
    removeAttachment(t2) {
      return this.editor.recordUndoEntry("Delete Attachment"), this.composition.removeAttachment(t2), this.render();
    }
    recordFormattingUndoEntry(t2) {
      const e2 = gt(t2), i2 = this.selectionManager.getLocationRange();
      if (e2 || !Dt(i2))
        return this.editor.recordUndoEntry("Formatting", { context: this.getUndoContext(), consolidatable: true });
    }
    recordTypingUndoEntry() {
      return this.editor.recordUndoEntry("Typing", { context: this.getUndoContext(this.currentAttributes), consolidatable: true });
    }
    getUndoContext() {
      for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++)
        e2[i2] = arguments[i2];
      return [this.getLocationContext(), this.getTimeContext(), ...Array.from(e2)];
    }
    getLocationContext() {
      const t2 = this.selectionManager.getLocationRange();
      return Dt(t2) ? t2[0].index : t2;
    }
    getTimeContext() {
      return q.interval > 0 ? Math.floor((/* @__PURE__ */ new Date()).getTime() / q.interval) : 0;
    }
    isFocused() {
      var t2;
      return this.editorElement === (null === (t2 = this.editorElement.ownerDocument) || void 0 === t2 ? void 0 : t2.activeElement);
    }
    isFocusedInvisibly() {
      return this.isFocused() && !this.getLocationRange();
    }
    get actions() {
      return this.constructor.actions;
    }
  };
  Ae(Rn, "actions", { undo: { test() {
    return this.editor.canUndo();
  }, perform() {
    return this.editor.undo();
  } }, redo: { test() {
    return this.editor.canRedo();
  }, perform() {
    return this.editor.redo();
  } }, link: { test() {
    return this.editor.canActivateAttribute("href");
  } }, increaseNestingLevel: { test() {
    return this.editor.canIncreaseNestingLevel();
  }, perform() {
    return this.editor.increaseNestingLevel() && this.render();
  } }, decreaseNestingLevel: { test() {
    return this.editor.canDecreaseNestingLevel();
  }, perform() {
    return this.editor.decreaseNestingLevel() && this.render();
  } }, attachFiles: { test: () => true, perform() {
    return M.pickFiles(this.editor.insertFiles);
  } } }), Rn.proxyMethod("getSelectionManager().setLocationRange"), Rn.proxyMethod("getSelectionManager().getLocationRange");
  var Sn = Object.freeze({ __proto__: null, AttachmentEditorController: Pi, CompositionController: Ni, Controller: Oi, EditorController: Rn, InputController: Ki, Level0InputController: Qi, Level2InputController: on, ToolbarController: Cn });
  var En = Object.freeze({ __proto__: null, MutationObserver: Ui, SelectionChangeObserver: Ft });
  var kn = Object.freeze({ __proto__: null, FileVerificationOperation: Vi, ImagePreloadOperation: Ce });
  bt("trix-toolbar", "%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}");
  var Ln = class extends HTMLElement {
    connectedCallback() {
      "" === this.innerHTML && (this.innerHTML = U.getDefaultHTML());
    }
  };
  var Dn = 0;
  var wn = function(t2) {
    if (!t2.hasAttribute("contenteditable"))
      return t2.setAttribute("contenteditable", ""), function(t3) {
        let e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e2.times = 1, f(t3, e2);
      }("focus", { onElement: t2, withCallback: () => Tn(t2) });
  };
  var Tn = function(t2) {
    return Bn(t2), Fn(t2);
  };
  var Bn = function(t2) {
    var e2, i2;
    if (null !== (e2 = (i2 = document).queryCommandSupported) && void 0 !== e2 && e2.call(i2, "enableObjectResizing"))
      return document.execCommand("enableObjectResizing", false, false), f("mscontrolselect", { onElement: t2, preventDefault: true });
  };
  var Fn = function(t2) {
    var e2, i2;
    if (null !== (e2 = (i2 = document).queryCommandSupported) && void 0 !== e2 && e2.call(i2, "DefaultParagraphSeparator")) {
      const { tagName: t3 } = n.default;
      if (["div", "p"].includes(t3))
        return document.execCommand("DefaultParagraphSeparator", false, t3);
    }
  };
  var In = a.forcesObjectResizing ? { display: "inline", width: "auto" } : { display: "inline-block", width: "1px" };
  bt("trix-editor", "%t {\n    display: block;\n}\n\n%t:empty:not(:focus)::before {\n    content: attr(placeholder);\n    color: graytext;\n    cursor: text;\n    pointer-events: none;\n    white-space: pre-line;\n}\n\n%t a[contenteditable=false] {\n    cursor: text;\n}\n\n%t img {\n    max-width: 100%;\n    height: auto;\n}\n\n%t ".concat(e, " figcaption textarea {\n    resize: none;\n}\n\n%t ").concat(e, " figcaption textarea.trix-autoresize-clone {\n    position: absolute;\n    left: -9999px;\n    max-height: 0px;\n}\n\n%t ").concat(e, " figcaption[data-trix-placeholder]:empty::before {\n    content: attr(data-trix-placeholder);\n    color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n    display: ").concat(In.display, " !important;\n    width: ").concat(In.width, " !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n    vertical-align: top !important;\n    margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n    vertical-align: bottom !important;\n    margin-right: -1px !important;\n}"));
  var Pn = class extends HTMLElement {
    get trixId() {
      return this.hasAttribute("trix-id") ? this.getAttribute("trix-id") : (this.setAttribute("trix-id", ++Dn), this.trixId);
    }
    get labels() {
      const t2 = [];
      this.id && this.ownerDocument && t2.push(...Array.from(this.ownerDocument.querySelectorAll("label[for='".concat(this.id, "']")) || []));
      const e2 = A(this, { matchingSelector: "label" });
      return e2 && [this, null].includes(e2.control) && t2.push(e2), t2;
    }
    get toolbarElement() {
      var t2;
      if (this.hasAttribute("toolbar"))
        return null === (t2 = this.ownerDocument) || void 0 === t2 ? void 0 : t2.getElementById(this.getAttribute("toolbar"));
      if (this.parentNode) {
        const t3 = "trix-toolbar-".concat(this.trixId);
        this.setAttribute("toolbar", t3);
        const e2 = k("trix-toolbar", { id: t3 });
        return this.parentNode.insertBefore(e2, this), e2;
      }
    }
    get form() {
      var t2;
      return null === (t2 = this.inputElement) || void 0 === t2 ? void 0 : t2.form;
    }
    get inputElement() {
      var t2;
      if (this.hasAttribute("input"))
        return null === (t2 = this.ownerDocument) || void 0 === t2 ? void 0 : t2.getElementById(this.getAttribute("input"));
      if (this.parentNode) {
        const t3 = "trix-input-".concat(this.trixId);
        this.setAttribute("input", t3);
        const e2 = k("input", { type: "hidden", id: t3 });
        return this.parentNode.insertBefore(e2, this.nextElementSibling), e2;
      }
    }
    get editor() {
      var t2;
      return null === (t2 = this.editorController) || void 0 === t2 ? void 0 : t2.editor;
    }
    get name() {
      var t2;
      return null === (t2 = this.inputElement) || void 0 === t2 ? void 0 : t2.name;
    }
    get value() {
      var t2;
      return null === (t2 = this.inputElement) || void 0 === t2 ? void 0 : t2.value;
    }
    set value(t2) {
      var e2;
      this.defaultValue = t2, null === (e2 = this.editor) || void 0 === e2 || e2.loadHTML(this.defaultValue);
    }
    notify(t2, e2) {
      if (this.editorController)
        return b("trix-".concat(t2), { onElement: this, attributes: e2 });
    }
    setInputElementValue(t2) {
      this.inputElement && (this.inputElement.value = t2);
    }
    connectedCallback() {
      this.hasAttribute("data-trix-internal") || (wn(this), function(t2) {
        if (!t2.hasAttribute("role"))
          t2.setAttribute("role", "textbox");
      }(this), function(t2) {
        if (t2.hasAttribute("aria-label") || t2.hasAttribute("aria-labelledby"))
          return;
        const e2 = function() {
          const e3 = Array.from(t2.labels).map((e4) => {
            if (!e4.contains(t2))
              return e4.textContent;
          }).filter((t3) => t3), i2 = e3.join(" ");
          return i2 ? t2.setAttribute("aria-label", i2) : t2.removeAttribute("aria-label");
        };
        e2(), f("focus", { onElement: t2, withCallback: e2 });
      }(this), this.editorController || (b("trix-before-initialize", { onElement: this }), this.editorController = new Rn({ editorElement: this, html: this.defaultValue = this.value }), requestAnimationFrame(() => b("trix-initialize", { onElement: this }))), this.editorController.registerSelectionManager(), this.registerResetListener(), this.registerClickListener(), function(t2) {
        if (!document.querySelector(":focus") && t2.hasAttribute("autofocus") && document.querySelector("[autofocus]") === t2)
          t2.focus();
      }(this));
    }
    disconnectedCallback() {
      var t2;
      return null === (t2 = this.editorController) || void 0 === t2 || t2.unregisterSelectionManager(), this.unregisterResetListener(), this.unregisterClickListener();
    }
    registerResetListener() {
      return this.resetListener = this.resetBubbled.bind(this), window.addEventListener("reset", this.resetListener, false);
    }
    unregisterResetListener() {
      return window.removeEventListener("reset", this.resetListener, false);
    }
    registerClickListener() {
      return this.clickListener = this.clickBubbled.bind(this), window.addEventListener("click", this.clickListener, false);
    }
    unregisterClickListener() {
      return window.removeEventListener("click", this.clickListener, false);
    }
    resetBubbled(t2) {
      if (!t2.defaultPrevented && t2.target === this.form)
        return this.reset();
    }
    clickBubbled(t2) {
      if (t2.defaultPrevented)
        return;
      if (this.contains(t2.target))
        return;
      const e2 = A(t2.target, { matchingSelector: "label" });
      return e2 && Array.from(this.labels).includes(e2) ? this.focus() : void 0;
    }
    reset() {
      this.value = this.defaultValue;
    }
  };
  var Nn = { VERSION: t, config: V, core: ci, models: Di, views: wi, controllers: Sn, observers: En, operations: kn, elements: Object.freeze({ __proto__: null, TrixEditorElement: Pn, TrixToolbarElement: Ln }), filters: Object.freeze({ __proto__: null, Filter: bi, attachmentGalleryFilter: vi }) };
  Object.assign(Nn, Di), window.Trix = Nn, setTimeout(function() {
    customElements.get("trix-toolbar") || customElements.define("trix-toolbar", Ln), customElements.get("trix-editor") || customElements.define("trix-editor", Pn);
  }, 0);

  // node_modules/@rails/actiontext/app/assets/javascripts/actiontext.esm.js
  var sparkMd5 = {
    exports: {}
  };
  (function(module, exports) {
    (function(factory) {
      {
        module.exports = factory();
      }
    })(function(undefined$1) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      function md5cycle(x2, k2) {
        var a2 = x2[0], b2 = x2[1], c2 = x2[2], d2 = x2[3];
        a2 += (b2 & c2 | ~b2 & d2) + k2[0] - 680876936 | 0;
        a2 = (a2 << 7 | a2 >>> 25) + b2 | 0;
        d2 += (a2 & b2 | ~a2 & c2) + k2[1] - 389564586 | 0;
        d2 = (d2 << 12 | d2 >>> 20) + a2 | 0;
        c2 += (d2 & a2 | ~d2 & b2) + k2[2] + 606105819 | 0;
        c2 = (c2 << 17 | c2 >>> 15) + d2 | 0;
        b2 += (c2 & d2 | ~c2 & a2) + k2[3] - 1044525330 | 0;
        b2 = (b2 << 22 | b2 >>> 10) + c2 | 0;
        a2 += (b2 & c2 | ~b2 & d2) + k2[4] - 176418897 | 0;
        a2 = (a2 << 7 | a2 >>> 25) + b2 | 0;
        d2 += (a2 & b2 | ~a2 & c2) + k2[5] + 1200080426 | 0;
        d2 = (d2 << 12 | d2 >>> 20) + a2 | 0;
        c2 += (d2 & a2 | ~d2 & b2) + k2[6] - 1473231341 | 0;
        c2 = (c2 << 17 | c2 >>> 15) + d2 | 0;
        b2 += (c2 & d2 | ~c2 & a2) + k2[7] - 45705983 | 0;
        b2 = (b2 << 22 | b2 >>> 10) + c2 | 0;
        a2 += (b2 & c2 | ~b2 & d2) + k2[8] + 1770035416 | 0;
        a2 = (a2 << 7 | a2 >>> 25) + b2 | 0;
        d2 += (a2 & b2 | ~a2 & c2) + k2[9] - 1958414417 | 0;
        d2 = (d2 << 12 | d2 >>> 20) + a2 | 0;
        c2 += (d2 & a2 | ~d2 & b2) + k2[10] - 42063 | 0;
        c2 = (c2 << 17 | c2 >>> 15) + d2 | 0;
        b2 += (c2 & d2 | ~c2 & a2) + k2[11] - 1990404162 | 0;
        b2 = (b2 << 22 | b2 >>> 10) + c2 | 0;
        a2 += (b2 & c2 | ~b2 & d2) + k2[12] + 1804603682 | 0;
        a2 = (a2 << 7 | a2 >>> 25) + b2 | 0;
        d2 += (a2 & b2 | ~a2 & c2) + k2[13] - 40341101 | 0;
        d2 = (d2 << 12 | d2 >>> 20) + a2 | 0;
        c2 += (d2 & a2 | ~d2 & b2) + k2[14] - 1502002290 | 0;
        c2 = (c2 << 17 | c2 >>> 15) + d2 | 0;
        b2 += (c2 & d2 | ~c2 & a2) + k2[15] + 1236535329 | 0;
        b2 = (b2 << 22 | b2 >>> 10) + c2 | 0;
        a2 += (b2 & d2 | c2 & ~d2) + k2[1] - 165796510 | 0;
        a2 = (a2 << 5 | a2 >>> 27) + b2 | 0;
        d2 += (a2 & c2 | b2 & ~c2) + k2[6] - 1069501632 | 0;
        d2 = (d2 << 9 | d2 >>> 23) + a2 | 0;
        c2 += (d2 & b2 | a2 & ~b2) + k2[11] + 643717713 | 0;
        c2 = (c2 << 14 | c2 >>> 18) + d2 | 0;
        b2 += (c2 & a2 | d2 & ~a2) + k2[0] - 373897302 | 0;
        b2 = (b2 << 20 | b2 >>> 12) + c2 | 0;
        a2 += (b2 & d2 | c2 & ~d2) + k2[5] - 701558691 | 0;
        a2 = (a2 << 5 | a2 >>> 27) + b2 | 0;
        d2 += (a2 & c2 | b2 & ~c2) + k2[10] + 38016083 | 0;
        d2 = (d2 << 9 | d2 >>> 23) + a2 | 0;
        c2 += (d2 & b2 | a2 & ~b2) + k2[15] - 660478335 | 0;
        c2 = (c2 << 14 | c2 >>> 18) + d2 | 0;
        b2 += (c2 & a2 | d2 & ~a2) + k2[4] - 405537848 | 0;
        b2 = (b2 << 20 | b2 >>> 12) + c2 | 0;
        a2 += (b2 & d2 | c2 & ~d2) + k2[9] + 568446438 | 0;
        a2 = (a2 << 5 | a2 >>> 27) + b2 | 0;
        d2 += (a2 & c2 | b2 & ~c2) + k2[14] - 1019803690 | 0;
        d2 = (d2 << 9 | d2 >>> 23) + a2 | 0;
        c2 += (d2 & b2 | a2 & ~b2) + k2[3] - 187363961 | 0;
        c2 = (c2 << 14 | c2 >>> 18) + d2 | 0;
        b2 += (c2 & a2 | d2 & ~a2) + k2[8] + 1163531501 | 0;
        b2 = (b2 << 20 | b2 >>> 12) + c2 | 0;
        a2 += (b2 & d2 | c2 & ~d2) + k2[13] - 1444681467 | 0;
        a2 = (a2 << 5 | a2 >>> 27) + b2 | 0;
        d2 += (a2 & c2 | b2 & ~c2) + k2[2] - 51403784 | 0;
        d2 = (d2 << 9 | d2 >>> 23) + a2 | 0;
        c2 += (d2 & b2 | a2 & ~b2) + k2[7] + 1735328473 | 0;
        c2 = (c2 << 14 | c2 >>> 18) + d2 | 0;
        b2 += (c2 & a2 | d2 & ~a2) + k2[12] - 1926607734 | 0;
        b2 = (b2 << 20 | b2 >>> 12) + c2 | 0;
        a2 += (b2 ^ c2 ^ d2) + k2[5] - 378558 | 0;
        a2 = (a2 << 4 | a2 >>> 28) + b2 | 0;
        d2 += (a2 ^ b2 ^ c2) + k2[8] - 2022574463 | 0;
        d2 = (d2 << 11 | d2 >>> 21) + a2 | 0;
        c2 += (d2 ^ a2 ^ b2) + k2[11] + 1839030562 | 0;
        c2 = (c2 << 16 | c2 >>> 16) + d2 | 0;
        b2 += (c2 ^ d2 ^ a2) + k2[14] - 35309556 | 0;
        b2 = (b2 << 23 | b2 >>> 9) + c2 | 0;
        a2 += (b2 ^ c2 ^ d2) + k2[1] - 1530992060 | 0;
        a2 = (a2 << 4 | a2 >>> 28) + b2 | 0;
        d2 += (a2 ^ b2 ^ c2) + k2[4] + 1272893353 | 0;
        d2 = (d2 << 11 | d2 >>> 21) + a2 | 0;
        c2 += (d2 ^ a2 ^ b2) + k2[7] - 155497632 | 0;
        c2 = (c2 << 16 | c2 >>> 16) + d2 | 0;
        b2 += (c2 ^ d2 ^ a2) + k2[10] - 1094730640 | 0;
        b2 = (b2 << 23 | b2 >>> 9) + c2 | 0;
        a2 += (b2 ^ c2 ^ d2) + k2[13] + 681279174 | 0;
        a2 = (a2 << 4 | a2 >>> 28) + b2 | 0;
        d2 += (a2 ^ b2 ^ c2) + k2[0] - 358537222 | 0;
        d2 = (d2 << 11 | d2 >>> 21) + a2 | 0;
        c2 += (d2 ^ a2 ^ b2) + k2[3] - 722521979 | 0;
        c2 = (c2 << 16 | c2 >>> 16) + d2 | 0;
        b2 += (c2 ^ d2 ^ a2) + k2[6] + 76029189 | 0;
        b2 = (b2 << 23 | b2 >>> 9) + c2 | 0;
        a2 += (b2 ^ c2 ^ d2) + k2[9] - 640364487 | 0;
        a2 = (a2 << 4 | a2 >>> 28) + b2 | 0;
        d2 += (a2 ^ b2 ^ c2) + k2[12] - 421815835 | 0;
        d2 = (d2 << 11 | d2 >>> 21) + a2 | 0;
        c2 += (d2 ^ a2 ^ b2) + k2[15] + 530742520 | 0;
        c2 = (c2 << 16 | c2 >>> 16) + d2 | 0;
        b2 += (c2 ^ d2 ^ a2) + k2[2] - 995338651 | 0;
        b2 = (b2 << 23 | b2 >>> 9) + c2 | 0;
        a2 += (c2 ^ (b2 | ~d2)) + k2[0] - 198630844 | 0;
        a2 = (a2 << 6 | a2 >>> 26) + b2 | 0;
        d2 += (b2 ^ (a2 | ~c2)) + k2[7] + 1126891415 | 0;
        d2 = (d2 << 10 | d2 >>> 22) + a2 | 0;
        c2 += (a2 ^ (d2 | ~b2)) + k2[14] - 1416354905 | 0;
        c2 = (c2 << 15 | c2 >>> 17) + d2 | 0;
        b2 += (d2 ^ (c2 | ~a2)) + k2[5] - 57434055 | 0;
        b2 = (b2 << 21 | b2 >>> 11) + c2 | 0;
        a2 += (c2 ^ (b2 | ~d2)) + k2[12] + 1700485571 | 0;
        a2 = (a2 << 6 | a2 >>> 26) + b2 | 0;
        d2 += (b2 ^ (a2 | ~c2)) + k2[3] - 1894986606 | 0;
        d2 = (d2 << 10 | d2 >>> 22) + a2 | 0;
        c2 += (a2 ^ (d2 | ~b2)) + k2[10] - 1051523 | 0;
        c2 = (c2 << 15 | c2 >>> 17) + d2 | 0;
        b2 += (d2 ^ (c2 | ~a2)) + k2[1] - 2054922799 | 0;
        b2 = (b2 << 21 | b2 >>> 11) + c2 | 0;
        a2 += (c2 ^ (b2 | ~d2)) + k2[8] + 1873313359 | 0;
        a2 = (a2 << 6 | a2 >>> 26) + b2 | 0;
        d2 += (b2 ^ (a2 | ~c2)) + k2[15] - 30611744 | 0;
        d2 = (d2 << 10 | d2 >>> 22) + a2 | 0;
        c2 += (a2 ^ (d2 | ~b2)) + k2[6] - 1560198380 | 0;
        c2 = (c2 << 15 | c2 >>> 17) + d2 | 0;
        b2 += (d2 ^ (c2 | ~a2)) + k2[13] + 1309151649 | 0;
        b2 = (b2 << 21 | b2 >>> 11) + c2 | 0;
        a2 += (c2 ^ (b2 | ~d2)) + k2[4] - 145523070 | 0;
        a2 = (a2 << 6 | a2 >>> 26) + b2 | 0;
        d2 += (b2 ^ (a2 | ~c2)) + k2[11] - 1120210379 | 0;
        d2 = (d2 << 10 | d2 >>> 22) + a2 | 0;
        c2 += (a2 ^ (d2 | ~b2)) + k2[2] + 718787259 | 0;
        c2 = (c2 << 15 | c2 >>> 17) + d2 | 0;
        b2 += (d2 ^ (c2 | ~a2)) + k2[9] - 343485551 | 0;
        b2 = (b2 << 21 | b2 >>> 11) + c2 | 0;
        x2[0] = a2 + x2[0] | 0;
        x2[1] = b2 + x2[1] | 0;
        x2[2] = c2 + x2[2] | 0;
        x2[3] = d2 + x2[3] | 0;
      }
      function md5blk(s2) {
        var md5blks = [], i2;
        for (i2 = 0; i2 < 64; i2 += 4) {
          md5blks[i2 >> 2] = s2.charCodeAt(i2) + (s2.charCodeAt(i2 + 1) << 8) + (s2.charCodeAt(i2 + 2) << 16) + (s2.charCodeAt(i2 + 3) << 24);
        }
        return md5blks;
      }
      function md5blk_array(a2) {
        var md5blks = [], i2;
        for (i2 = 0; i2 < 64; i2 += 4) {
          md5blks[i2 >> 2] = a2[i2] + (a2[i2 + 1] << 8) + (a2[i2 + 2] << 16) + (a2[i2 + 3] << 24);
        }
        return md5blks;
      }
      function md51(s2) {
        var n2 = s2.length, state = [1732584193, -271733879, -1732584194, 271733878], i2, length, tail, tmp, lo, hi2;
        for (i2 = 64; i2 <= n2; i2 += 64) {
          md5cycle(state, md5blk(s2.substring(i2 - 64, i2)));
        }
        s2 = s2.substring(i2 - 64);
        length = s2.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i2 = 0; i2 < length; i2 += 1) {
          tail[i2 >> 2] |= s2.charCodeAt(i2) << (i2 % 4 << 3);
        }
        tail[i2 >> 2] |= 128 << (i2 % 4 << 3);
        if (i2 > 55) {
          md5cycle(state, tail);
          for (i2 = 0; i2 < 16; i2 += 1) {
            tail[i2] = 0;
          }
        }
        tmp = n2 * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi2 = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi2;
        md5cycle(state, tail);
        return state;
      }
      function md51_array(a2) {
        var n2 = a2.length, state = [1732584193, -271733879, -1732584194, 271733878], i2, length, tail, tmp, lo, hi2;
        for (i2 = 64; i2 <= n2; i2 += 64) {
          md5cycle(state, md5blk_array(a2.subarray(i2 - 64, i2)));
        }
        a2 = i2 - 64 < n2 ? a2.subarray(i2 - 64) : new Uint8Array(0);
        length = a2.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i2 = 0; i2 < length; i2 += 1) {
          tail[i2 >> 2] |= a2[i2] << (i2 % 4 << 3);
        }
        tail[i2 >> 2] |= 128 << (i2 % 4 << 3);
        if (i2 > 55) {
          md5cycle(state, tail);
          for (i2 = 0; i2 < 16; i2 += 1) {
            tail[i2] = 0;
          }
        }
        tmp = n2 * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi2 = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi2;
        md5cycle(state, tail);
        return state;
      }
      function rhex(n2) {
        var s2 = "", j2;
        for (j2 = 0; j2 < 4; j2 += 1) {
          s2 += hex_chr[n2 >> j2 * 8 + 4 & 15] + hex_chr[n2 >> j2 * 8 & 15];
        }
        return s2;
      }
      function hex(x2) {
        var i2;
        for (i2 = 0; i2 < x2.length; i2 += 1) {
          x2[i2] = rhex(x2[i2]);
        }
        return x2.join("");
      }
      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592")
        ;
      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
          function clamp(val, length) {
            val = val | 0 || 0;
            if (val < 0) {
              return Math.max(val + length, 0);
            }
            return Math.min(val, length);
          }
          ArrayBuffer.prototype.slice = function(from, to) {
            var length = this.byteLength, begin = clamp(from, length), end2 = length, num, target, targetArray, sourceArray;
            if (to !== undefined$1) {
              end2 = clamp(to, length);
            }
            if (begin > end2) {
              return new ArrayBuffer(0);
            }
            num = end2 - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }
      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }
        return str;
      }
      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i2;
        for (i2 = 0; i2 < length; i2 += 1) {
          arr[i2] = str.charCodeAt(i2);
        }
        return returnUInt8Array ? arr : buff;
      }
      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }
      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }
      function hexToBinaryString(hex2) {
        var bytes = [], length = hex2.length, x2;
        for (x2 = 0; x2 < length - 1; x2 += 2) {
          bytes.push(parseInt(hex2.substr(x2, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
      }
      function SparkMD52() {
        this.reset();
      }
      SparkMD52.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD52.prototype.appendBinary = function(contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i2;
        for (i2 = 64; i2 <= length; i2 += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i2 - 64, i2)));
        }
        this._buff = this._buff.substring(i2 - 64);
        return this;
      };
      SparkMD52.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, i2, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i2 = 0; i2 < length; i2 += 1) {
          tail[i2 >> 2] |= buff.charCodeAt(i2) << (i2 % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD52.prototype.reset = function() {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD52.prototype.getState = function() {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash.slice()
        };
      };
      SparkMD52.prototype.setState = function(state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD52.prototype.destroy = function() {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD52.prototype._finish = function(tail, length) {
        var i2 = length, tmp, lo, hi2;
        tail[i2 >> 2] |= 128 << (i2 % 4 << 3);
        if (i2 > 55) {
          md5cycle(this._hash, tail);
          for (i2 = 0; i2 < 16; i2 += 1) {
            tail[i2] = 0;
          }
        }
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi2 = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi2;
        md5cycle(this._hash, tail);
      };
      SparkMD52.hash = function(str, raw) {
        return SparkMD52.hashBinary(toUtf8(str), raw);
      };
      SparkMD52.hashBinary = function(content, raw) {
        var hash3 = md51(content), ret = hex(hash3);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD52.ArrayBuffer = function() {
        this.reset();
      };
      SparkMD52.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i2;
        this._length += arr.byteLength;
        for (i2 = 64; i2 <= length; i2 += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i2 - 64, i2)));
        }
        this._buff = i2 - 64 < length ? new Uint8Array(buff.buffer.slice(i2 - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD52.ArrayBuffer.prototype.end = function(raw) {
        var buff = this._buff, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i2, ret;
        for (i2 = 0; i2 < length; i2 += 1) {
          tail[i2 >> 2] |= buff[i2] << (i2 % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD52.ArrayBuffer.prototype.reset = function() {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD52.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD52.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD52.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD52.prototype.setState.call(this, state);
      };
      SparkMD52.ArrayBuffer.prototype.destroy = SparkMD52.prototype.destroy;
      SparkMD52.ArrayBuffer.prototype._finish = SparkMD52.prototype._finish;
      SparkMD52.ArrayBuffer.hash = function(arr, raw) {
        var hash3 = md51_array(new Uint8Array(arr)), ret = hex(hash3);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD52;
    });
  })(sparkMd5);
  var SparkMD5 = sparkMd5.exports;
  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
  var FileChecksum = class _FileChecksum {
    static create(file, callback) {
      const instance = new _FileChecksum(file);
      instance.create(callback);
    }
    constructor(file) {
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }
    create(callback) {
      this.callback = callback;
      this.md5Buffer = new SparkMD5.ArrayBuffer();
      this.fileReader = new FileReader();
      this.fileReader.addEventListener("load", (event) => this.fileReaderDidLoad(event));
      this.fileReader.addEventListener("error", (event) => this.fileReaderDidError(event));
      this.readNextChunk();
    }
    fileReaderDidLoad(event) {
      this.md5Buffer.append(event.target.result);
      if (!this.readNextChunk()) {
        const binaryDigest = this.md5Buffer.end(true);
        const base64digest = btoa(binaryDigest);
        this.callback(null, base64digest);
      }
    }
    fileReaderDidError(event) {
      this.callback(`Error reading ${this.file.name}`);
    }
    readNextChunk() {
      if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
        const start3 = this.chunkIndex * this.chunkSize;
        const end2 = Math.min(start3 + this.chunkSize, this.file.size);
        const bytes = fileSlice.call(this.file, start3, end2);
        this.fileReader.readAsArrayBuffer(bytes);
        this.chunkIndex++;
        return true;
      } else {
        return false;
      }
    }
  };
  function getMetaValue(name) {
    const element = findElement(document.head, `meta[name="${name}"]`);
    if (element) {
      return element.getAttribute("content");
    }
  }
  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    const elements = root.querySelectorAll(selector);
    return toArray(elements);
  }
  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    return root.querySelector(selector);
  }
  function dispatchEvent(element, type, eventInit = {}) {
    const { disabled } = element;
    const { bubbles, cancelable, detail } = eventInit;
    const event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};
    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }
    return event;
  }
  function toArray(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }
  var BlobRecord = class {
    constructor(file, checksum, url, customHeaders = {}) {
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      Object.keys(customHeaders).forEach((headerKey) => {
        this.xhr.setRequestHeader(headerKey, customHeaders[headerKey]);
      });
      const csrfToken = getMetaValue("csrf-token");
      if (csrfToken != void 0) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }
      this.xhr.addEventListener("load", (event) => this.requestDidLoad(event));
      this.xhr.addEventListener("error", (event) => this.requestDidError(event));
    }
    get status() {
      return this.xhr.status;
    }
    get response() {
      const { responseType, response } = this.xhr;
      if (responseType == "json") {
        return response;
      } else {
        return JSON.parse(response);
      }
    }
    create(callback) {
      this.callback = callback;
      this.xhr.send(JSON.stringify({
        blob: this.attributes
      }));
    }
    requestDidLoad(event) {
      if (this.status >= 200 && this.status < 300) {
        const { response } = this;
        const { direct_upload } = response;
        delete response.direct_upload;
        this.attributes = response;
        this.directUploadData = direct_upload;
        this.callback(null, this.toJSON());
      } else {
        this.requestDidError(event);
      }
    }
    requestDidError(event) {
      this.callback(`Error creating Blob for "${this.file.name}". Status: ${this.status}`);
    }
    toJSON() {
      const result = {};
      for (const key in this.attributes) {
        result[key] = this.attributes[key];
      }
      return result;
    }
  };
  var BlobUpload = class {
    constructor(blob) {
      this.blob = blob;
      this.file = blob.file;
      const { url, headers } = blob.directUploadData;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";
      for (const key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }
      this.xhr.addEventListener("load", (event) => this.requestDidLoad(event));
      this.xhr.addEventListener("error", (event) => this.requestDidError(event));
    }
    create(callback) {
      this.callback = callback;
      this.xhr.send(this.file.slice());
    }
    requestDidLoad(event) {
      const { status, response } = this.xhr;
      if (status >= 200 && status < 300) {
        this.callback(null, response);
      } else {
        this.requestDidError(event);
      }
    }
    requestDidError(event) {
      this.callback(`Error storing "${this.file.name}". Status: ${this.xhr.status}`);
    }
  };
  var id = 0;
  var DirectUpload = class {
    constructor(file, url, delegate, customHeaders = {}) {
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
      this.customHeaders = customHeaders;
    }
    create(callback) {
      FileChecksum.create(this.file, (error, checksum) => {
        if (error) {
          callback(error);
          return;
        }
        const blob = new BlobRecord(this.file, checksum, this.url, this.customHeaders);
        notify(this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
        blob.create((error2) => {
          if (error2) {
            callback(error2);
          } else {
            const upload = new BlobUpload(blob);
            notify(this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
            upload.create((error3) => {
              if (error3) {
                callback(error3);
              } else {
                callback(null, blob.toJSON());
              }
            });
          }
        });
      });
    }
  };
  function notify(object, methodName, ...messages) {
    if (object && typeof object[methodName] == "function") {
      return object[methodName](...messages);
    }
  }
  var DirectUploadController = class {
    constructor(input, file) {
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }
    start(callback) {
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = this.input.name;
      this.input.insertAdjacentElement("beforebegin", hiddenInput);
      this.dispatch("start");
      this.directUpload.create((error, attributes) => {
        if (error) {
          hiddenInput.parentNode.removeChild(hiddenInput);
          this.dispatchError(error);
        } else {
          hiddenInput.value = attributes.signed_id;
        }
        this.dispatch("end");
        callback(error);
      });
    }
    uploadRequestDidProgress(event) {
      const progress = event.loaded / event.total * 100;
      if (progress) {
        this.dispatch("progress", {
          progress
        });
      }
    }
    get url() {
      return this.input.getAttribute("data-direct-upload-url");
    }
    dispatch(name, detail = {}) {
      detail.file = this.file;
      detail.id = this.directUpload.id;
      return dispatchEvent(this.input, `direct-upload:${name}`, {
        detail
      });
    }
    dispatchError(error) {
      const event = this.dispatch("error", {
        error
      });
      if (!event.defaultPrevented) {
        alert(error);
      }
    }
    directUploadWillCreateBlobWithXHR(xhr) {
      this.dispatch("before-blob-request", {
        xhr
      });
    }
    directUploadWillStoreFileWithXHR(xhr) {
      this.dispatch("before-storage-request", {
        xhr
      });
      xhr.upload.addEventListener("progress", (event) => this.uploadRequestDidProgress(event));
    }
  };
  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";
  var DirectUploadsController = class {
    constructor(form) {
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter((input) => input.files.length);
    }
    start(callback) {
      const controllers = this.createDirectUploadControllers();
      const startNextController = () => {
        const controller = controllers.shift();
        if (controller) {
          controller.start((error) => {
            if (error) {
              callback(error);
              this.dispatch("end");
            } else {
              startNextController();
            }
          });
        } else {
          callback();
          this.dispatch("end");
        }
      };
      this.dispatch("start");
      startNextController();
    }
    createDirectUploadControllers() {
      const controllers = [];
      this.inputs.forEach((input) => {
        toArray(input.files).forEach((file) => {
          const controller = new DirectUploadController(input, file);
          controllers.push(controller);
        });
      });
      return controllers;
    }
    dispatch(name, detail = {}) {
      return dispatchEvent(this.form, `direct-uploads:${name}`, {
        detail
      });
    }
  };
  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = /* @__PURE__ */ new WeakMap();
  var started = false;
  function start2() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm, true);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }
  function didClick(event) {
    const { target } = event;
    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }
  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }
  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }
  function handleFormSubmissionEvent(event) {
    const form = event.target;
    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }
    const controller = new DirectUploadsController(form);
    const { inputs } = controller;
    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start((error) => {
        form.removeAttribute(processingAttribute);
        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }
  function submitForm(form) {
    let button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");
    if (button) {
      const { disabled } = button;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }
    submitButtonsByForm.delete(form);
  }
  function disable(input) {
    input.disabled = true;
  }
  function enable(input) {
    input.disabled = false;
  }
  function autostart() {
    if (window.ActiveStorage) {
      start2();
    }
  }
  setTimeout(autostart, 1);
  var AttachmentUpload = class {
    constructor(attachment, element) {
      this.attachment = attachment;
      this.element = element;
      this.directUpload = new DirectUpload(attachment.file, this.directUploadUrl, this);
    }
    start() {
      this.directUpload.create(this.directUploadDidComplete.bind(this));
    }
    directUploadWillStoreFileWithXHR(xhr) {
      xhr.upload.addEventListener("progress", (event) => {
        const progress = event.loaded / event.total * 100;
        this.attachment.setUploadProgress(progress);
      });
    }
    directUploadDidComplete(error, attributes) {
      if (error) {
        throw new Error(`Direct upload failed: ${error}`);
      }
      this.attachment.setAttributes({
        sgid: attributes.attachable_sgid,
        url: this.createBlobUrl(attributes.signed_id, attributes.filename)
      });
    }
    createBlobUrl(signedId, filename) {
      return this.blobUrlTemplate.replace(":signed_id", signedId).replace(":filename", encodeURIComponent(filename));
    }
    get directUploadUrl() {
      return this.element.dataset.directUploadUrl;
    }
    get blobUrlTemplate() {
      return this.element.dataset.blobUrlTemplate;
    }
  };
  addEventListener("trix-attachment-add", (event) => {
    const { attachment, target } = event;
    if (attachment.file) {
      const upload = new AttachmentUpload(attachment, target);
      upload.start();
    }
  });

  // app/javascript/src/jqury.js
  var import_jquery = __toESM(require_jquery());
  window.jQuery = import_jquery.default;
  window.$ = import_jquery.default;

  // node_modules/@nathanvda/cocoon/cocoon.js
  (function($3) {
    var cocoon_element_counter = 0;
    var create_new_id = function() {
      return (/* @__PURE__ */ new Date()).getTime() + cocoon_element_counter++;
    };
    var newcontent_braced = function(id2) {
      return "[" + id2 + "]$1";
    };
    var newcontent_underscord = function(id2) {
      return "_" + id2 + "_$1";
    };
    var getInsertionNodeElem = function(insertionNode, insertionTraversal, $this) {
      if (!insertionNode) {
        return $this.parent();
      }
      if (typeof insertionNode == "function") {
        if (insertionTraversal) {
          console.warn("association-insertion-traversal is ignored, because association-insertion-node is given as a function.");
        }
        return insertionNode($this);
      }
      if (typeof insertionNode == "string") {
        if (insertionTraversal) {
          return $this[insertionTraversal](insertionNode);
        } else {
          return insertionNode == "this" ? $this : $3(insertionNode);
        }
      }
    };
    $3(document).on("click", ".add_fields", function(e2) {
      e2.preventDefault();
      e2.stopPropagation();
      var $this = $3(this), assoc = $this.data("association"), assocs = $this.data("associations"), content = $this.data("association-insertion-template"), insertionMethod = $this.data("association-insertion-method") || $this.data("association-insertion-position") || "before", insertionNode = $this.data("association-insertion-node"), insertionTraversal = $this.data("association-insertion-traversal"), count = parseInt($this.data("count"), 10), regexp_braced = new RegExp("\\[new_" + assoc + "\\](.*?\\s)", "g"), regexp_underscord = new RegExp("_new_" + assoc + "_(\\w*)", "g"), new_id = create_new_id(), new_content = content.replace(regexp_braced, newcontent_braced(new_id)), new_contents = [], originalEvent = e2;
      if (new_content == content) {
        regexp_braced = new RegExp("\\[new_" + assocs + "\\](.*?\\s)", "g");
        regexp_underscord = new RegExp("_new_" + assocs + "_(\\w*)", "g");
        new_content = content.replace(regexp_braced, newcontent_braced(new_id));
      }
      new_content = new_content.replace(regexp_underscord, newcontent_underscord(new_id));
      new_contents = [new_content];
      count = isNaN(count) ? 1 : Math.max(count, 1);
      count -= 1;
      while (count) {
        new_id = create_new_id();
        new_content = content.replace(regexp_braced, newcontent_braced(new_id));
        new_content = new_content.replace(regexp_underscord, newcontent_underscord(new_id));
        new_contents.push(new_content);
        count -= 1;
      }
      var insertionNodeElem = getInsertionNodeElem(insertionNode, insertionTraversal, $this);
      if (!insertionNodeElem || insertionNodeElem.length == 0) {
        console.warn("Couldn't find the element to insert the template. Make sure your `data-association-insertion-*` on `link_to_add_association` is correct.");
      }
      $3.each(new_contents, function(i2, node) {
        var contentNode = $3(node);
        var before_insert = jQuery.Event("cocoon:before-insert");
        insertionNodeElem.trigger(before_insert, [contentNode, originalEvent]);
        if (!before_insert.isDefaultPrevented()) {
          var addedContent = insertionNodeElem[insertionMethod](contentNode);
          insertionNodeElem.trigger("cocoon:after-insert", [
            contentNode,
            originalEvent
          ]);
        }
      });
    });
    $3(document).on("click", ".remove_fields.dynamic, .remove_fields.existing", function(e2) {
      var $this = $3(this), wrapper_class = $this.data("wrapper-class") || "nested-fields", node_to_delete = $this.closest("." + wrapper_class), trigger_node = node_to_delete.parent(), originalEvent = e2;
      e2.preventDefault();
      e2.stopPropagation();
      var before_remove = jQuery.Event("cocoon:before-remove");
      trigger_node.trigger(before_remove, [node_to_delete, originalEvent]);
      if (!before_remove.isDefaultPrevented()) {
        var timeout = trigger_node.data("remove-timeout") || 0;
        setTimeout(function() {
          if ($this.hasClass("dynamic")) {
            node_to_delete.detach();
          } else {
            $this.prev("input[type=hidden]").val("1");
            node_to_delete.hide();
          }
          trigger_node.trigger("cocoon:after-remove", [
            node_to_delete,
            originalEvent
          ]);
        }, timeout);
      }
    });
    $3(document).on("ready page:load turbolinks:load", function() {
      $3(".remove_fields.existing.destroyed").each(function(i2, obj) {
        var $this = $3(this), wrapper_class = $this.data("wrapper-class") || "nested-fields";
        $this.closest("." + wrapper_class).hide();
      });
    });
  })(jQuery);

  // app/javascript/components/thems.js
  var Themes = class {
    constructor() {
      this.theme = JSON.parse(localStorage.getItem("Theme"));
      this.themes = [
        {
          color_primary: "#eb2f64",
          color_primary_light: "#FF3366",
          color_primary_dark: "#BA265D",
          name: "Pink"
        },
        // main pink
        {
          color_primary: "#3d84f7",
          color_primary_light: "#5997f9",
          color_primary_dark: "#166df9",
          name: "Blue"
        },
        // blue
        {
          color_primary: "#01c1b5",
          color_primary_light: "#80fcf4",
          color_primary_dark: "#00a095",
          name: "Ocean"
        },
        // oceanblue
        {
          color_primary: "#0400fc",
          color_primary_light: "#706dff",
          color_primary_dark: "#0200a0",
          name: "Nave blue"
        },
        // nave-blue
        {
          color_primary: "#018725",
          color_primary_light: "#00f942",
          color_primary_dark: "#00a52c",
          name: "Green"
        },
        // green
        {
          color_primary: "#480187",
          color_primary_light: "#be75ff",
          color_primary_dark: "#8702fc",
          name: "Violet"
        }
        // violet
      ];
      if (this.theme) {
        console.log(this.theme + " z konstruktora");
        let color = this.theme;
        this.loadColors(
          this.themes[color].color_primary,
          this.themes[color].color_primary_light,
          this.themes[color].color_primary_dark
        );
      }
      this.loadThemes();
    }
    loadThemes() {
      let themeItems = this.themes.reduce(
        (html, theme, index) => html += this.generateThemeList(theme, index),
        ""
      );
      let menu_themes = document.getElementById("theme-chooser");
      menu_themes.innerHTML = themeItems;
      menu_themes.addEventListener("click", (e2) => {
        console.log(e2.target.id);
        let color = e2.target.id;
        this.loadColors(
          this.themes[color].color_primary,
          this.themes[color].color_primary_light,
          this.themes[color].color_primary_dark
        );
        this.saveTheme(color);
      });
    }
    saveTheme(color) {
      localStorage.setItem("Theme", JSON.stringify(color));
    }
    generateThemeList(theme, index) {
      return `
      <li class="user-nav__user-item"><a class="user-nav__user__link" href="#" id="${index}">${theme.name}</a></li>
    `;
    }
    loadColors(col1, col2, col3) {
      document.documentElement.style.setProperty("--color-primary", col1);
      document.documentElement.style.setProperty("--color-primary-light", col2);
      document.documentElement.style.setProperty("--color-primary-dark", col3);
    }
  };
  window.onload = function() {
    let theme = new Themes();
  };

  // app/javascript/components/calendar.js
  var MyCalendarClass = class {
    constructor() {
      this.today = /* @__PURE__ */ new Date();
      this.currentMonth = this.today.getMonth();
      this.currentYear = this.today.getFullYear();
      this.resultHTML = "";
      this.monthsName = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
    }
    showToday() {
      this.today.getDate();
    }
    showCurrentMonth() {
      return this.monthsName[this.currentMonth];
    }
    showHeader(currentMonth, currentYear) {
      return `
    <div class="week" id="calendar-year-month-header">
      <i class="fa-solid fa-angles-left" onclick="cal.previous();"></i>
      <span id="calendar-year-month">${currentYear} ${this.showCurrentMonth()}</span>
      <i class="fa-solid fa-angles-right" onclick="cal.next()"></i>
    </div>
    <div class="week">
      <div class="day-number">Mon</div>
      <div class="day-number">Tue</div>
      <div class="day-number">Wen</div>
      <div class="day-number">Thu</div>
      <div class="day-number">Fri</div>
      <div class="day-number">Sat</div>
      <div class="day-number">Sun</div>
    </div>
    `;
    }
    showCalendar(month, year) {
      this.resultHTML += `<input type="hidden" id="month" value="${month}">`;
      this.resultHTML += `<input type="hidden" id="year" value="${year}">`;
      let firstDay = new Date(year, month).getDay();
      let date = 1;
      for (let i2 = 0; i2 < 6; i2++) {
        this.resultHTML += `<div class="week">`;
        for (let j2 = 0; j2 < 7; j2++) {
          if (i2 === 0 && j2 < firstDay - 1) {
            this.resultHTML += `<div class="day-number">&nbsp;</div>`;
          } else if (date > this.daysInMonth(month, year)) {
            this.resultHTML += `<div class="day-number">&nbsp;</div>`;
          } else {
            if (date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth()) {
              this.resultHTML += `<div class="day-number today-mark">${date}</div>`;
            } else {
              this.resultHTML += `<div class="day-number">${date}</div>`;
            }
            date++;
          }
        }
        this.resultHTML += `</div>`;
      }
      return this.resultHTML;
    }
    // check how many days in a month code from https://dzone.com/articles/determining-number-days-month
    daysInMonth(iMonth, iYear) {
      return 32 - new Date(iYear, iMonth, 32).getDate();
    }
    next() {
      this.currentYear = this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear;
      this.currentMonth = (this.currentMonth + 1) % 12;
      this.showFullCalendar(this.currentMonth, this.currentYear);
    }
    previous() {
      this.currentYear = this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
      this.currentMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
      this.showFullCalendar(this.currentMonth, this.currentYear);
    }
    showFullCalendar(currentMonth, currentYear) {
      document.getElementById("calendar-box").innerHTML = "";
      this.resultHTML = "";
      document.getElementById("calendar-box").innerHTML = this.showHeader(currentMonth, currentYear) + this.showCalendar(currentMonth, currentYear);
      toDo.loadTasks();
      toDo.findPTTasks();
    }
  };
  window.addEventListener("load", () => {
    cal = new MyCalendarClass();
    let date = /* @__PURE__ */ new Date();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();
    document.getElementById("calendar-today").innerText = cal.showToday();
    document.getElementById("calendar-month").innerText = cal.showCurrentMonth();
    document.getElementById("calendar-box").innerHTML = cal.showHeader(currentMonth, currentYear) + cal.showCalendar(currentMonth, currentYear);
  });

  // app/javascript/components/todolist.js
  var ToDoListClass = class {
    constructor() {
      this.tasks = JSON.parse(localStorage.getItem("TASKS"));
      console.log(this.tasks);
      if (!this.tasks) {
        this.tasks = [
          {
            task: "You can add your own tasks here.",
            isComplete: false,
            date: /* @__PURE__ */ new Date(),
            time: "No time."
          }
        ];
      }
    }
    loadTasks() {
      console.log(this.tasks);
      localStorage.setItem("TASKS", JSON.stringify(this.tasks));
      let tasksHTML = this.tasks.reduce(
        (html, task, index) => html += this.generateTaskHtml(task, index),
        ""
      );
      document.getElementById("tasks-list").innerHTML = tasksHTML;
      this.markCallendar();
    }
    toggleTaskStatus(index) {
      this.tasks[index].isComplete = !this.tasks[index].isComplete;
      this.loadTasks();
    }
    deleteTask(event, index) {
      event.preventDefault();
      this.tasks.splice(index, 1);
      this.loadTasks();
    }
    generateTaskHtml(task, index) {
      return `
      <li class="list-group-item checkbox">
        <div class="row">
          <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label>
              <input id="toggleTaskStatus" type="checkbox" onchange="toDo.toggleTaskStatus(${index})" value="" ${task.isComplete ? "checked" : ""}>
            </label>
          </div>
          <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${task.isComplete ? "complete" : ""}">
            ${task.time} - ${task.task}
          </div>
          <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
            <a class="" href="#" onClick="toDo.deleteTask(event, ${index})"><i id="deleteTask" data-id="${index}" class="delete-icon far fa-trash-alt"></i></a>
          </div>
        </div>
      </li>
    `;
    }
    markCallendar() {
      let elements = document.getElementsByClassName("day-number");
      let today = (/* @__PURE__ */ new Date()).getDate();
      for (let i2 = 0; i2 < elements.length; i2++) {
        elements[i2].classList.remove("mark-task");
        elements[i2].classList.remove("mark-task-done");
      }
      this.tasks.forEach((task) => {
        console.log(task.date);
        let day = new Date(task.date).getDate();
        console.log(day);
        for (let i2 = 0; i2 < elements.length; i2++) {
          if (elements[i2].textContent == day) {
            if (task.isComplete) {
              elements[i2].classList.add("mark-task");
              elements[i2].classList.add("mark-task-done");
            } else if (!task.isComplete && day < today) {
              elements[i2].classList.add("mark-task");
              elements[i2].classList.add("mark-task-before");
            } else {
              elements[i2].classList.add("mark-task");
            }
            elements[i2].title = task.task;
          }
        }
      });
    }
    iteratePerCallendar() {
    }
    addTaskClick() {
      let targetTask = document.getElementById("task");
      let targetTaskDate = document.getElementById("task-date");
      let targetTaskTime = document.getElementById("task-time");
      let jsdatetime = new Date(targetTaskDate.value);
      this.addTask(targetTask.value, jsdatetime, targetTaskTime.value);
    }
    addTask(task, datetime, time) {
      let targetTask = document.getElementById("task");
      let targetTaskDate = document.getElementById("task-date");
      let targetTaskTime = document.getElementById("task-time");
      time = !(time == "") ? time : "Brak godz.";
      console.log(time + " - To jeets task");
      let newTask = {
        task,
        isComplete: false,
        date: datetime,
        time
      };
      let parentDiv = document.getElementById("exampleModalLabel");
      if (task == "" || datetime == "" || datetime == "Invalid Date") {
        parentDiv.classList.add("has-error");
        task == "" ? targetTask.classList.add("is-invalid") : targetTask.classList.add("is-valid");
        datetime == "" || datetime == "Invalid Date" ? targetTaskDate.classList.add("is-invalid") : targetTaskDate.classList.add("is-valid");
      } else {
        parentDiv.classList.remove("has-error");
        parentDiv.append("");
        this.tasks.push(newTask);
        this.loadTasks();
        targetTask.value = "";
        targetTaskDate.value = "";
        targetTaskTime.value = "";
        $("exampleModal").modal("dispose");
      }
    }
  };
  window.onload = function() {
    toDo = new ToDoListClass();
    toDo.loadTasks();
  };

  // app/javascript/application.js
  $(function() {
    console.log("Hello world z korwy pierwszy start");
  });
  document.addEventListener("turbo:load", function() {
    alert("ladujesies");
  });
  $(function() {
    $('[data-toggle="popover"]').popover();
  });
  $(".dropdown-toggle").dropdown();
})();
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)

bootstrap/dist/js/bootstrap.esm.js:
  (*!
    * Bootstrap v5.3.2 (https://getbootstrap.com/)
    * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
//# sourceMappingURL=/assets/application.js.map
