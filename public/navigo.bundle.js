/*! For license information please see navigo.bundle.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./src/js/navigo.min.js":function(module,exports,__webpack_require__){eval('/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\n!function (e, t) {\n  "object" == ( false ? 0 : _typeof(exports)) && "object" == ( false ? 0 : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n}(this, function () {\n  return function (e) {\n    function t(o) {\n      if (n[o]) return n[o].exports;\n      var i = n[o] = {\n        exports: {},\n        id: o,\n        loaded: !1\n      };\n      return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;\n    }\n    var n = {};\n    return t.m = e, t.c = n, t.p = "", t(0);\n  }([function (e, t) {\n    "use strict";\n\n    function n(e) {\n      if (Array.isArray(e)) {\n        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];\n        return n;\n      }\n      return Array.from(e);\n    }\n    function o() {\n      return !("undefined" == typeof window || !window.history || !window.history.pushState);\n    }\n    function i(e, t, n) {\n      this.root = null, this._routes = [], this._useHash = t, this._hash = "undefined" == typeof n ? "#" : n, this._paused = !1, this._destroyed = !1, this._lastRouteResolved = null, this._notFoundHandler = null, this._defaultHandler = null, this._usePushState = !t && o(), this._onLocationChange = this._onLocationChange.bind(this), this._genericHooks = null, this._historyAPIUpdateMethod = "pushState", e ? this.root = t ? e.replace(/\\/$/, "/" + this._hash) : e.replace(/\\/$/, "") : t && (this.root = this._cLoc().split(this._hash)[0].replace(/\\/$/, "/" + this._hash)), this._listen(), this.updatePageLinks();\n    }\n    function s(e) {\n      return e instanceof RegExp ? e : e.replace(/\\/+$/, "").replace(/^\\/+/, "^/");\n    }\n    function r(e, t) {\n      return 0 === t.length ? null : e ? e.slice(1, e.length).reduce(function (e, n, o) {\n        return null === e && (e = {}), e[t[o]] = decodeURIComponent(n), e;\n      }, null) : null;\n    }\n    function a(e) {\n      var t,\n        n = [];\n      return t = e instanceof RegExp ? e : new RegExp(e.replace(i.PARAMETER_REGEXP, function (e, t, o) {\n        return n.push(o), i.REPLACE_VARIABLE_REGEXP;\n      }).replace(i.WILDCARD_REGEXP, i.REPLACE_WILDCARD) + i.FOLLOWED_BY_SLASH_REGEXP, i.MATCH_REGEXP_FLAGS), {\n        regexp: t,\n        paramNames: n\n      };\n    }\n    function u(e) {\n      return e.replace(/\\/$/, "").split("/").length;\n    }\n    function h(e, t) {\n      return u(t) - u(e);\n    }\n    function l(e) {\n      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];\n      return t.map(function (t) {\n        var n = a(s(t.route)),\n          o = n.regexp,\n          i = n.paramNames,\n          u = e.replace(/^\\/+/, "/").match(o),\n          h = r(u, i);\n        return !!u && {\n          match: u,\n          route: t,\n          params: h\n        };\n      }).filter(function (e) {\n        return e;\n      });\n    }\n    function d(e, t) {\n      return l(e, t)[0] || !1;\n    }\n    function c(e, t) {\n      var n = t.map(function (t) {\n          return "" === t.route || "*" === t.route ? e : e.split(new RegExp(t.route + "($|/)"))[0];\n        }),\n        o = s(e);\n      return n.length > 1 ? n.reduce(function (e, t) {\n        return e.length > t.length && (e = t), e;\n      }, n[0]) : 1 === n.length ? n[0] : o;\n    }\n    function f() {\n      return !!("undefined" != typeof window && "onhashchange" in window);\n    }\n    function _(e) {\n      return e.split(/\\?(.*)?$/).slice(1).join("");\n    }\n    function p(e, t, n) {\n      var i,\n        s = e,\n        r = function r(e) {\n          return e.split(/\\?(.*)?$/)[0];\n        };\n      return "undefined" == typeof n && (n = "#"), o() && !t ? s = r(e).split(n)[0] : (i = e.split(n), s = r(i.length > 1 ? i[1] : i[0])), s;\n    }\n    function v(e, t, n) {\n      return t && "object" === ("undefined" == typeof t ? "undefined" : g(t)) ? void (t.before ? t.before(function () {\n        var o = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];\n        o && (e(), t.after && t.after(n));\n      }, n) : t.after && (e(), t.after && t.after(n))) : void e();\n    }\n    function R(e, t, n) {\n      if (o() && !t) return !1;\n      if (!e.match(n)) return !1;\n      var i = e.split(n);\n      return i.length < 2 || "" === i[1];\n    }\n    Object.defineProperty(t, "__esModule", {\n      value: !0\n    });\n    var g = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {\n      return _typeof(e);\n    } : function (e) {\n      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);\n    };\n    i.prototype = {\n      helpers: {\n        match: d,\n        root: c,\n        clean: s,\n        getOnlyURL: p\n      },\n      navigate: function navigate(e, t) {\n        var n;\n        return e = e || "", this._usePushState ? (n = (t ? "" : this._getRoot() + "/") + e.replace(/^\\/+/, "/"), n = n.replace(/([^:])(\\/{2,})/g, "$1/"), history[this._historyAPIUpdateMethod]({}, "", n), this.resolve()) : "undefined" != typeof window && (e = e.replace(new RegExp("^" + this._hash), ""), window.location.href = window.location.href.replace(/#$/, "").replace(new RegExp(this._hash + ".*$"), "") + this._hash + e), this;\n      },\n      on: function on() {\n        for (var e = this, t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];\n        if ("function" == typeof n[0]) this._defaultHandler = {\n          handler: n[0],\n          hooks: n[1]\n        };else if (n.length >= 2) {\n          if ("/" === n[0]) {\n            var i = n[1];\n            "object" === g(n[1]) && (i = n[1].uses), this._defaultHandler = {\n              handler: i,\n              hooks: n[2]\n            };\n          } else this._add(n[0], n[1], n[2]);\n        } else if ("object" === g(n[0])) {\n          var s = Object.keys(n[0]).sort(h);\n          s.forEach(function (t) {\n            e.on(t, n[0][t]);\n          });\n        }\n        return this;\n      },\n      off: function off(e) {\n        return null !== this._defaultHandler && e === this._defaultHandler.handler ? this._defaultHandler = null : null !== this._notFoundHandler && e === this._notFoundHandler.handler && (this._notFoundHandler = null), this._routes = this._routes.reduce(function (t, n) {\n          return n.handler !== e && t.push(n), t;\n        }, []), this;\n      },\n      notFound: function notFound(e, t) {\n        return this._notFoundHandler = {\n          handler: e,\n          hooks: t\n        }, this;\n      },\n      resolve: function resolve(e) {\n        var t,\n          o,\n          i = this,\n          s = (e || this._cLoc()).replace(this._getRoot(), "");\n        this._useHash && (s = s.replace(new RegExp("^/" + this._hash), "/"));\n        var r = _(e || this._cLoc()),\n          a = p(s, this._useHash, this._hash);\n        return !this._paused && (this._lastRouteResolved && a === this._lastRouteResolved.url && r === this._lastRouteResolved.query ? (this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.already && this._lastRouteResolved.hooks.already(this._lastRouteResolved.params), !1) : (o = d(a, this._routes)) ? (this._callLeave(), this._lastRouteResolved = {\n          url: a,\n          query: r,\n          hooks: o.route.hooks,\n          params: o.params,\n          name: o.route.name\n        }, t = o.route.handler, v(function () {\n          v(function () {\n            o.route.route instanceof RegExp ? t.apply(void 0, n(o.match.slice(1, o.match.length))) : t(o.params, r);\n          }, o.route.hooks, o.params, i._genericHooks);\n        }, this._genericHooks, o.params), o) : this._defaultHandler && ("" === a || "/" === a || a === this._hash || R(a, this._useHash, this._hash)) ? (v(function () {\n          v(function () {\n            i._callLeave(), i._lastRouteResolved = {\n              url: a,\n              query: r,\n              hooks: i._defaultHandler.hooks\n            }, i._defaultHandler.handler(r);\n          }, i._defaultHandler.hooks);\n        }, this._genericHooks), !0) : (this._notFoundHandler && v(function () {\n          v(function () {\n            i._callLeave(), i._lastRouteResolved = {\n              url: a,\n              query: r,\n              hooks: i._notFoundHandler.hooks\n            }, i._notFoundHandler.handler(r);\n          }, i._notFoundHandler.hooks);\n        }, this._genericHooks), !1));\n      },\n      destroy: function destroy() {\n        this._routes = [], this._destroyed = !0, clearTimeout(this._listeningInterval), "undefined" != typeof window && (window.removeEventListener("popstate", this._onLocationChange), window.removeEventListener("hashchange", this._onLocationChange));\n      },\n      updatePageLinks: function updatePageLinks() {\n        var e = this;\n        "undefined" != typeof document && this._findLinks().forEach(function (t) {\n          t.hasListenerAttached || (t.addEventListener("click", function (n) {\n            var o = e.getLinkPath(t);\n            e._destroyed || (n.preventDefault(), e.navigate(o.replace(/\\/+$/, "").replace(/^\\/+/, "/")));\n          }), t.hasListenerAttached = !0);\n        });\n      },\n      generate: function generate(e) {\n        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},\n          n = this._routes.reduce(function (n, o) {\n            var i;\n            if (o.name === e) {\n              n = o.route;\n              for (i in t) n = n.toString().replace(":" + i, t[i]);\n            }\n            return n;\n          }, "");\n        return this._useHash ? this._hash + n : n;\n      },\n      link: function link(e) {\n        return this._getRoot() + e;\n      },\n      pause: function pause() {\n        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];\n        this._paused = e, e ? this._historyAPIUpdateMethod = "replaceState" : this._historyAPIUpdateMethod = "pushState";\n      },\n      resume: function resume() {\n        this.pause(!1);\n      },\n      historyAPIUpdateMethod: function historyAPIUpdateMethod(e) {\n        return "undefined" == typeof e ? this._historyAPIUpdateMethod : (this._historyAPIUpdateMethod = e, e);\n      },\n      disableIfAPINotAvailable: function disableIfAPINotAvailable() {\n        o() || this.destroy();\n      },\n      lastRouteResolved: function lastRouteResolved() {\n        return this._lastRouteResolved;\n      },\n      getLinkPath: function getLinkPath(e) {\n        return e.getAttribute("href");\n      },\n      hooks: function hooks(e) {\n        this._genericHooks = e;\n      },\n      _add: function _add(e) {\n        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,\n          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;\n        return "string" == typeof e && (e = encodeURI(e)), "object" === ("undefined" == typeof t ? "undefined" : g(t)) ? this._routes.push({\n          route: e,\n          handler: t.uses,\n          name: t.as,\n          hooks: n || t.hooks\n        }) : this._routes.push({\n          route: e,\n          handler: t,\n          hooks: n\n        }), this._add;\n      },\n      _getRoot: function _getRoot() {\n        return null !== this.root ? this.root : (this.root = c(this._cLoc().split("?")[0], this._routes), this.root);\n      },\n      _listen: function _listen() {\n        var e = this;\n        if (this._usePushState) window.addEventListener("popstate", this._onLocationChange);else if (f()) window.addEventListener("hashchange", this._onLocationChange);else {\n          var t = this._cLoc(),\n            n = void 0,\n            _o = void 0;\n          _o = function o() {\n            n = e._cLoc(), t !== n && (t = n, e.resolve()), e._listeningInterval = setTimeout(_o, 200);\n          }, _o();\n        }\n      },\n      _cLoc: function _cLoc() {\n        return "undefined" != typeof window ? "undefined" != typeof window.__NAVIGO_WINDOW_LOCATION_MOCK__ ? window.__NAVIGO_WINDOW_LOCATION_MOCK__ : s(window.location.href) : "";\n      },\n      _findLinks: function _findLinks() {\n        return [].slice.call(document.querySelectorAll("[data-navigo]"));\n      },\n      _onLocationChange: function _onLocationChange() {\n        this.resolve();\n      },\n      _callLeave: function _callLeave() {\n        this._lastRouteResolved && this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.leave && this._lastRouteResolved.hooks.leave(this._lastRouteResolved.params);\n      }\n    }, i.PARAMETER_REGEXP = /([:*])(\\w+)/g, i.WILDCARD_REGEXP = /\\*/g, i.REPLACE_VARIABLE_REGEXP = "([^/]+)", i.REPLACE_WILDCARD = "(?:.*)", i.FOLLOWED_BY_SLASH_REGEXP = "(?:/$|$)", i.MATCH_REGEXP_FLAGS = "", t["default"] = i, e.exports = t["default"];\n  }]);\n});\n\n//# sourceURL=webpack://friendlyeats-web/./src/js/navigo.min.js?')}},__webpack_module_cache__={};function __webpack_require__(n){var e=__webpack_module_cache__[n];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[n]={id:n,loaded:!1,exports:{}};return __webpack_modules__[n].call(t.exports,t,t.exports,__webpack_require__),t.loaded=!0,t.exports}__webpack_require__.nmd=n=>(n.paths=[],n.children||(n.children=[]),n);var __webpack_exports__=__webpack_require__("./src/js/navigo.min.js")})();