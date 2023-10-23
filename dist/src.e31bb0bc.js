// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"block/model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRight = exports.restartGame = exports.startGame = exports.$items = exports.$container = void 0;

var _modal = require("./modal");

var _utils = require("./utils");

var _index = require("../index");

const $container = document.querySelector('.container');
exports.$container = $container;
const $items = document.querySelector('.items');
exports.$items = $items;
let TIME, deadline; //close first modal window and open $container game

const startGame = t => {
  TIME = t;
  (0, _utils.changeDisplay)(_modal.modal, 'none');
  (0, _utils.changeDisplay)($container, 'block');
  deadline = setTimeout(() => {
    _modal.title.textContent = 'GameOver';
    _modal.button.textContent = 'Restart';
    (0, _utils.removeAndAddClass)(_modal.button, 'go', 'restart');
    (0, _utils.changeDisplay)(_modal.modal, 'block');
  }, TIME);
  updateClock(TIME);
};

exports.startGame = startGame;
let inter;

function updateClock(timer) {
  const time = document.querySelector('.title__timer');
  let currentTime = timer;
  inter = setInterval(() => {
    currentTime -= 100;

    if (currentTime <= 0) {
      clearInterval(inter);
    }

    time.textContent = currentTime;
  }, 100);
} //button click restart


const restartGame = () => {
  document.body.removeChild(_modal.modal);
  (0, _modal.createModal)();
  (0, _utils.changeDisplay)($container, 'none');
};

exports.restartGame = restartGame;
let currentItem, previusItem, parentCurrent, parentPrevius;

const checkRight = item => {
  //check currentItem and previous in ===
  //TODO: в гл. меню можно выбрать режимы.Сделать рандомный разброс карточек!!! :+)
  if (!currentItem && !previusItem) {
    parentCurrent = (0, _utils.removeOverlay)(parentCurrent, item);
    const text = parentCurrent.querySelector('.item__title');
    currentItem = text.textContent;
  } //have one card
  else if (currentItem && !previusItem) {
      parentPrevius = (0, _utils.removeOverlay)(parentPrevius, item);
      const text = parentPrevius.querySelector('.item__title');
      previusItem = text.textContent;
      setTimeout(() => {
        if (currentItem && previusItem) {
          if (currentItem == previusItem) {
            (0, _utils.customRemoveChild)([parentCurrent, parentPrevius], $items);
            currentItem = '', previusItem = '', parentCurrent = '', parentPrevius = '';

            if ($items.querySelectorAll('.item').length == 0) {
              if (_index.currentLevel == _index.allLevels) {
                clearTimeout(deadline);
                clearInterval(inter);
                _modal.title.textContent = 'You victory in all levels!';
                _modal.button.textContent = 'Restart 1 Level';
                (0, _utils.removeAndAddClass)(_modal.button, 'next', 'restartOne');
                (0, _utils.changeDisplay)(_modal.modal, 'block');
                TIME = '';
              } else {
                clearTimeout(deadline);
                clearInterval(inter);
                _modal.title.textContent = 'Victory!';
                _modal.button.textContent = 'NextLevel';
                (0, _utils.removeAndAddClass)(_modal.button, 'go', 'next');
                (0, _utils.changeDisplay)(_modal.modal, 'block');
                TIME = '';
              }
            }
          } else {
            parentCurrent.appendChild((0, _utils.createElement)('div', 'overlay'));
            parentPrevius.appendChild((0, _utils.createElement)('div', 'overlay'));
            currentItem = '', previusItem = '', parentCurrent = '', parentPrevius = '';
          }
        }
      }, 700);
    }
};

exports.checkRight = checkRight;
},{"./modal":"block/modal.js","./utils":"block/utils.js","../index":"index.js"}],"block/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restartAll = exports.createAllItems = exports.randomSortArray = exports.customRemoveChild = exports.deleteValues = exports.removeOverlay = exports.removeAndAddClass = exports.changeDisplay = exports.customAppendChild = exports.createElement = void 0;

var _model = require("./model");

var _modal = require("./modal");

const createElement = (tag, classEl, text = '') => {
  const elem = document.createElement(tag);
  elem.classList.add(classEl);
  elem.textContent = text;
  return elem;
};

exports.createElement = createElement;

const customAppendChild = (array, item) => {
  array.forEach(el => {
    item.appendChild(el);
  });
};

exports.customAppendChild = customAppendChild;

const changeDisplay = (item, display) => {
  item.style.display = display;
};

exports.changeDisplay = changeDisplay;

const removeAndAddClass = (item, remove, add) => {
  item.classList.remove(remove);
  item.classList.add(add);
};

exports.removeAndAddClass = removeAndAddClass;

const removeOverlay = (parentPrevius, item) => {
  parentPrevius = item.parentNode;
  parentPrevius.removeChild(item);
  return parentPrevius;
};

exports.removeOverlay = removeOverlay;

const deleteValues = (...rest) => {
  rest = '';
  return rest;
};

exports.deleteValues = deleteValues;

const customRemoveChild = (array, item) => {
  array.forEach(el => {
    item.removeChild(el);
  });
};

exports.customRemoveChild = customRemoveChild;

const randomSortArray = array => {
  array.sort(() => {
    return Math.random() - 0.5;
  });
  return array;
};

exports.randomSortArray = randomSortArray;

const createAllItems = array => {
  for (let i = 0; i < array.length; i++) {
    const el = createElement('div', 'item');
    customAppendChild([createElement('div', 'overlay'), createElement('div', 'item__title', array[i])], el);

    _model.$items.appendChild(el);
  }
};

exports.createAllItems = createAllItems;

const restartAll = level => {
  level = 0;
  document.body.removeChild(_modal.modal);
  (0, _modal.createModal)();
  return level;
};

exports.restartAll = restartAll;
},{"./model":"block/model.js","./modal":"block/modal.js"}],"block/modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModal = createModal;
exports.overlay = exports.button = exports.title = exports.modal = void 0;

var _utils = require("./utils");

let modal, title, button, overlay;
exports.overlay = overlay;
exports.button = button;
exports.title = title;
exports.modal = modal;

function createModal() {
  let elem;
  exports.modal = modal = (0, _utils.createElement)('div', 'modalN');
  modal.innerHTML = '';
  (0, _utils.customAppendChild)([elem = (0, _utils.createElement)('div', 'modal__window'), exports.overlay = overlay = (0, _utils.createElement)('div', 'overlayI')], modal);
  (0, _utils.customAppendChild)([exports.title = title = (0, _utils.createElement)('div', 'modal__title', 'StartGame!'), exports.button = button = (0, _utils.createElement)('button', 'btn', 'Go')], elem);
  button.classList.add('go');
  document.body.appendChild(modal);
}
},{"./utils":"block/utils.js"}],"block/cards.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextLevel = void 0;

var _model = require("./model");

var _utils = require("./utils");

var _modal = require("./modal");

const nextLevel = currentlevel => {
  if (currentlevel == 0) {
    const allText = (0, _utils.randomSortArray)([1, 1, 2, 2]),
          time = 60000; // time for timer ms

    _model.$items.innerHTML = '';
    _modal.modal.style.display = 'none';
    (0, _utils.createAllItems)(allText);
    return time;
  } else if (currentlevel == 1) {
    const allText = (0, _utils.randomSortArray)([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]),
          time = 30000;
    _model.$items.innerHTML = '';
    _modal.modal.style.display = 'none';
    (0, _utils.createAllItems)(allText);
    return time;
  } else if (currentlevel == 2) {
    const allText = (0, _utils.randomSortArray)([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]),
          time = 25000;
    _model.$items.innerHTML = '';
    _modal.modal.style.display = 'none';
    (0, _utils.createAllItems)(allText);
    return time;
  } else if (currentlevel == 3) {
    const allText = (0, _utils.randomSortArray)([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]),
          time = 10000;
    _model.$items.innerHTML = '';
    _modal.modal.style.display = 'none';
    (0, _utils.createAllItems)(allText);
    return time;
  }
};

exports.nextLevel = nextLevel;
},{"./model":"block/model.js","./utils":"block/utils.js","./modal":"block/modal.js"}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allLevels = exports.currentLevel = void 0;

var _modal = require("./block/modal");

var _model = require("./block/model");

var _cards = require("./block/cards");

var _utils = require("./block/utils");

(0, _modal.createModal)();
let currentLevel = 0,
    allLevels = 3;
exports.allLevels = allLevels;
exports.currentLevel = currentLevel;
document.body.addEventListener('click', e => {
  if (e.target.classList.contains('go')) {
    (0, _model.startGame)((0, _cards.nextLevel)(currentLevel));
  } else if (e.target.classList.contains('restart')) {
    (0, _model.restartGame)();
  } else if (e.target.classList.contains('overlay')) {
    (0, _model.checkRight)(e.target);
  } else if (e.target.classList.contains('next')) {
    exports.currentLevel = currentLevel = currentLevel + 1;
    (0, _model.startGame)((0, _cards.nextLevel)(currentLevel));
  } else if (e.target.classList.contains('restartOne')) {
    exports.currentLevel = currentLevel = (0, _utils.restartAll)(currentLevel);
  }
});
},{"./block/modal":"block/modal.js","./block/model":"block/model.js","./block/cards":"block/cards.js","./block/utils":"block/utils.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "13659" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map