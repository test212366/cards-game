// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "currentLevel", ()=>currentLevel);
parcelHelpers.export(exports, "allLevels", ()=>allLevels);
var _modal = require("./block/modal");
var _model = require("./block/model");
var _cards = require("./block/cards");
var _utils = require("./block/utils");
(0, _modal.createModal)();
let currentLevel = 0, allLevels = 3;
document.body.addEventListener("click", (e)=>{
    if (e.target.classList.contains("go")) (0, _model.startGame)((0, _cards.nextLevel)(currentLevel));
    else if (e.target.classList.contains("restart")) (0, _model.restartGame)();
    else if (e.target.classList.contains("overlay")) (0, _model.checkRight)(e.target);
    else if (e.target.classList.contains("next")) {
        currentLevel++;
        (0, _model.startGame)((0, _cards.nextLevel)(currentLevel));
    } else if (e.target.classList.contains("restartOne")) currentLevel = (0, _utils.restartAll)(currentLevel);
});

},{"./block/modal":"hIwOn","./block/model":"dDFvm","./block/cards":"2sA5h","./block/utils":"1Lh98","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIwOn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "modal", ()=>modal);
parcelHelpers.export(exports, "title", ()=>title);
parcelHelpers.export(exports, "button", ()=>button);
parcelHelpers.export(exports, "overlay", ()=>overlay);
parcelHelpers.export(exports, "createModal", ()=>createModal);
var _utils = require("./utils");
let modal, title, button, overlay;
function createModal() {
    let elem;
    modal = (0, _utils.createElement)("div", "modalN");
    modal.innerHTML = "";
    (0, _utils.customAppendChild)([
        elem = (0, _utils.createElement)("div", "modal__window"),
        overlay = (0, _utils.createElement)("div", "overlayI")
    ], modal);
    (0, _utils.customAppendChild)([
        title = (0, _utils.createElement)("div", "modal__title", "StartGame!"),
        button = (0, _utils.createElement)("button", "btn", "Go")
    ], elem);
    button.classList.add("go");
    document.body.appendChild(modal);
}

},{"./utils":"1Lh98","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Lh98":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "customAppendChild", ()=>customAppendChild);
parcelHelpers.export(exports, "changeDisplay", ()=>changeDisplay);
parcelHelpers.export(exports, "removeAndAddClass", ()=>removeAndAddClass);
parcelHelpers.export(exports, "removeOverlay", ()=>removeOverlay);
parcelHelpers.export(exports, "deleteValues", ()=>deleteValues);
parcelHelpers.export(exports, "customRemoveChild", ()=>customRemoveChild);
parcelHelpers.export(exports, "randomSortArray", ()=>randomSortArray);
parcelHelpers.export(exports, "createAllItems", ()=>createAllItems);
parcelHelpers.export(exports, "restartAll", ()=>restartAll);
var _model = require("./model");
var _modal = require("./modal");
const createElement = (tag, classEl, text = "")=>{
    const elem = document.createElement(tag);
    elem.classList.add(classEl);
    elem.textContent = text;
    return elem;
};
const customAppendChild = (array, item)=>{
    array.forEach((el)=>{
        item.appendChild(el);
    });
};
const changeDisplay = (item, display)=>{
    item.style.display = display;
};
const removeAndAddClass = (item, remove, add)=>{
    item.classList.remove(remove);
    item.classList.add(add);
};
const removeOverlay = (parentPrevius, item)=>{
    parentPrevius = item.parentNode;
    parentPrevius.removeChild(item);
    return parentPrevius;
};
const deleteValues = (...rest)=>{
    rest = "";
    return rest;
};
const customRemoveChild = (array, item)=>{
    array.forEach((el)=>{
        item.removeChild(el);
    });
};
const randomSortArray = (array)=>{
    array.sort(()=>{
        return Math.random() - 0.5;
    });
    return array;
};
const createAllItems = (array)=>{
    for(let i = 0; i < array.length; i++){
        const el = createElement("div", "item");
        customAppendChild([
            createElement("div", "overlay"),
            createElement("div", "item__title", array[i])
        ], el);
        (0, _model.$items).appendChild(el);
    }
};
const restartAll = (level)=>{
    level = 0;
    document.body.removeChild((0, _modal.modal));
    (0, _modal.createModal)();
    return level;
};

},{"./model":"dDFvm","./modal":"hIwOn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDFvm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$container", ()=>$container);
parcelHelpers.export(exports, "$items", ()=>$items);
parcelHelpers.export(exports, "startGame", ()=>startGame);
parcelHelpers.export(exports, "restartGame", ()=>restartGame);
parcelHelpers.export(exports, "checkRight", ()=>checkRight);
var _modal = require("./modal");
var _utils = require("./utils");
var _index = require("../index");
const $container = document.querySelector(".container");
const $items = document.querySelector(".items");
let TIME, deadline;
const startGame = (t)=>{
    TIME = t;
    (0, _utils.changeDisplay)((0, _modal.modal), "none");
    (0, _utils.changeDisplay)($container, "block");
    deadline = setTimeout(()=>{
        (0, _modal.title).textContent = "GameOver";
        (0, _modal.button).textContent = "Restart";
        (0, _utils.removeAndAddClass)((0, _modal.button), "go", "restart");
        (0, _utils.changeDisplay)((0, _modal.modal), "block");
    }, TIME);
    updateClock(TIME);
};
let inter;
function updateClock(timer) {
    const time = document.querySelector(".title__timer");
    let currentTime = timer;
    inter = setInterval(()=>{
        currentTime -= 100;
        if (currentTime <= 0) clearInterval(inter);
        time.textContent = currentTime;
    }, 100);
} //button click restart
const restartGame = ()=>{
    document.body.removeChild((0, _modal.modal));
    (0, _modal.createModal)();
    (0, _utils.changeDisplay)($container, "none");
};
let currentItem, previusItem, parentCurrent, parentPrevius;
const checkRight = (item)=>{
    //check currentItem and previous in ===
    //TODO: в гл. меню можно выбрать режимы.Сделать рандомный разброс карточек!!! :+)
    if (!currentItem && !previusItem) {
        parentCurrent = (0, _utils.removeOverlay)(parentCurrent, item);
        const text = parentCurrent.querySelector(".item__title");
        currentItem = text.textContent;
    } else if (currentItem && !previusItem) {
        parentPrevius = (0, _utils.removeOverlay)(parentPrevius, item);
        const text = parentPrevius.querySelector(".item__title");
        previusItem = text.textContent;
        setTimeout(()=>{
            if (currentItem && previusItem) {
                if (currentItem == previusItem) {
                    (0, _utils.customRemoveChild)([
                        parentCurrent,
                        parentPrevius
                    ], $items);
                    currentItem = "", previusItem = "", parentCurrent = "", parentPrevius = "";
                    if ($items.querySelectorAll(".item").length == 0) {
                        if ((0, _index.currentLevel) == (0, _index.allLevels)) {
                            clearTimeout(deadline);
                            clearInterval(inter);
                            (0, _modal.title).textContent = "You victory in all levels!";
                            (0, _modal.button).textContent = "Restart 1 Level";
                            (0, _utils.removeAndAddClass)((0, _modal.button), "next", "restartOne");
                            (0, _utils.changeDisplay)((0, _modal.modal), "block");
                            TIME = "";
                        } else {
                            clearTimeout(deadline);
                            clearInterval(inter);
                            (0, _modal.title).textContent = "Victory!";
                            (0, _modal.button).textContent = "NextLevel";
                            (0, _utils.removeAndAddClass)((0, _modal.button), "go", "next");
                            (0, _utils.changeDisplay)((0, _modal.modal), "block");
                            TIME = "";
                        }
                    }
                } else {
                    parentCurrent.appendChild((0, _utils.createElement)("div", "overlay"));
                    parentPrevius.appendChild((0, _utils.createElement)("div", "overlay"));
                    currentItem = "", previusItem = "", parentCurrent = "", parentPrevius = "";
                }
            }
        }, 700);
    }
};

},{"./modal":"hIwOn","./utils":"1Lh98","../index":"8lqZg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2sA5h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nextLevel", ()=>nextLevel);
var _model = require("./model");
var _utils = require("./utils");
var _modal = require("./modal");
const nextLevel = (currentlevel)=>{
    if (currentlevel == 0) {
        const allText = (0, _utils.randomSortArray)([
            1,
            1,
            2,
            2
        ]), time = 60000;
        // time for timer ms
        (0, _model.$items).innerHTML = "";
        (0, _modal.modal).style.display = "none";
        (0, _utils.createAllItems)(allText);
        return time;
    } else if (currentlevel == 1) {
        const allText = (0, _utils.randomSortArray)([
            1,
            1,
            2,
            2,
            3,
            3,
            4,
            4,
            5,
            5,
            6,
            6
        ]), time = 30000;
        (0, _model.$items).innerHTML = "";
        (0, _modal.modal).style.display = "none";
        (0, _utils.createAllItems)(allText);
        return time;
    } else if (currentlevel == 2) {
        const allText = (0, _utils.randomSortArray)([
            1,
            1,
            2,
            2,
            3,
            3,
            4,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            8,
            8
        ]), time = 45000;
        (0, _model.$items).innerHTML = "";
        (0, _modal.modal).style.display = "none";
        (0, _utils.createAllItems)(allText);
        return time;
    } else if (currentlevel == 3) {
        const allText = (0, _utils.randomSortArray)([
            1,
            1,
            2,
            2,
            3,
            3,
            4,
            4,
            5,
            5
        ]), time = 10000;
        (0, _model.$items).innerHTML = "";
        (0, _modal.modal).style.display = "none";
        (0, _utils.createAllItems)(allText);
        return time;
    }
};

},{"./model":"dDFvm","./utils":"1Lh98","./modal":"hIwOn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequiref536")

//# sourceMappingURL=index.975ef6c8.js.map
