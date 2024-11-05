
      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiree4b1"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiree4b1"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("55CHf", function(module, exports) {
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
(function(modules, entry, mainEntry, parcelRequireName, globalName) {
    /* eslint-disable no-undef */ var globalObject = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof $parcel$global !== "undefined" ? $parcel$global : {};
    /* eslint-enable no-undef */ // Save the require from previous bundle to this closure if any
    var previousRequire = typeof globalObject[parcelRequireName] === "function" && globalObject[parcelRequireName];
    var cache = previousRequire.cache || {};
    // Do not use `require` to prevent Webpack from trying to bundle this call
    var nodeRequire = typeof module.require === "function" && module.require.bind(module);
    function newRequire(name, jumped) {
        if (!cache[name]) {
            if (!modules[name]) {
                // if we cannot find the module within our internal map or
                // cache jump to the current global require ie. the last bundle
                // that was added to the page.
                var currentRequire = typeof globalObject[parcelRequireName] === "function" && globalObject[parcelRequireName];
                if (!jumped && currentRequire) return currentRequire(name, true);
                // If there are other bundles on this page the require from the
                // previous one is saved to 'previousRequire'. Repeat this as
                // many times as there are bundles until the module is found or
                // we exhaust the require chain.
                if (previousRequire) return previousRequire(name, true);
                // Try the node require function if it exists.
                if (nodeRequire && typeof name === "string") return nodeRequire(name);
                var err = new Error("Cannot find module '" + name + "'");
                err.code = "MODULE_NOT_FOUND";
                throw err;
            }
            localRequire.resolve = resolve;
            localRequire.cache = {};
            var module1 = cache[name] = new newRequire.Module(name);
            modules[name][0].call(module1.exports, localRequire, module1, module1.exports, this);
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
    newRequire.register = function(id, exports) {
        modules[id] = [
            function(require, module1) {
                module1.exports = exports;
            },
            {}
        ];
    };
    Object.defineProperty(newRequire, "root", {
        get: function() {
            return globalObject[parcelRequireName];
        }
    });
    globalObject[parcelRequireName] = newRequire;
    for(var i = 0; i < entry.length; i++)newRequire(entry[i]);
    if (mainEntry) {
        // Expose entry point to Node, AMD or browser globals
        // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
        var mainExports = newRequire(mainEntry);
        module.exports = mainExports;
    }
})({
    "lQsD6": [
        function(require, module1, exports) {
            var global1 = arguments[3];
            var HMR_HOST = null;
            var HMR_PORT = null;
            var HMR_SECURE = false;
            var HMR_ENV_HASH = "d6ea1d42532a7575";
            var HMR_USE_SSE = false;
            module1.bundle.HMR_BUNDLE_ID = "62ba0103a8f04b30";
            "use strict";
            /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
            var OldModule = module1.bundle.Module;
            function Module(moduleName) {
                OldModule.call(this, moduleName);
                this.hot = {
                    data: module1.bundle.hotData[moduleName],
                    _acceptCallbacks: [],
                    _disposeCallbacks: [],
                    accept: function(fn) {
                        this._acceptCallbacks.push(fn || function() {});
                    },
                    dispose: function(fn) {
                        this._disposeCallbacks.push(fn);
                    }
                };
                module1.bundle.hotData[moduleName] = undefined;
            }
            module1.bundle.Module = Module;
            module1.bundle.hotData = {};
            var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
            function getHostname() {
                return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
            }
            function getPort() {
                return HMR_PORT || location.port;
            }
            // eslint-disable-next-line no-redeclare
            var parent = module1.bundle.parent;
            if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
                var hostname = getHostname();
                var port = getPort();
                var protocol = HMR_SECURE || location.protocol == "https:" && ![
                    "localhost",
                    "127.0.0.1",
                    "0.0.0.0"
                ].includes(hostname) ? "wss" : "ws";
                var ws;
                if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
                else try {
                    ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
                } catch (err) {
                    if (err.message) console.error(err.message);
                    ws = {};
                }
                // Web extension context
                var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
                // Safari doesn't support sourceURL in error stacks.
                // eval may also be disabled via CSP, so do a quick check.
                var supportsSourceURL = false;
                try {
                    (0, eval)('throw new Error("test"); //# sourceURL=test.js');
                } catch (err) {
                    supportsSourceURL = err.stack.includes("test.js");
                }
                // $FlowFixMe
                ws.onmessage = async function(event /*: {data: string, ...} */ ) {
                    checkedAssets = {} /*: {|[string]: boolean|} */ ;
                    assetsToAccept = [];
                    assetsToDispose = [];
                    var data /*: HMRMessage */  = JSON.parse(event.data);
                    if (data.type === "update") {
                        // Remove error overlay if there is one
                        if (typeof document !== "undefined") removeErrorOverlay();
                        let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
                        // Handle HMR Update
                        let handled = assets.every((asset)=>{
                            return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module1.bundle.root, asset.id, asset.depsByBundle);
                        });
                        if (handled) {
                            console.clear();
                            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                            if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                            await hmrApplyUpdates(assets);
                            // Dispose all old assets.
                            let processedAssets = {} /*: {|[string]: boolean|} */ ;
                            for(let i = 0; i < assetsToDispose.length; i++){
                                let id = assetsToDispose[i][1];
                                if (!processedAssets[id]) {
                                    hmrDispose(assetsToDispose[i][0], id);
                                    processedAssets[id] = true;
                                }
                            }
                            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                            processedAssets = {};
                            for(let i = 0; i < assetsToAccept.length; i++){
                                let id = assetsToAccept[i][1];
                                if (!processedAssets[id]) {
                                    hmrAccept(assetsToAccept[i][0], id);
                                    processedAssets[id] = true;
                                }
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
                            var overlay = createErrorOverlay(data.diagnostics.html);
                            // $FlowFixMe
                            document.body.appendChild(overlay);
                        }
                    }
                };
                if (ws instanceof WebSocket) {
                    ws.onerror = function(e) {
                        if (e.message) console.error(e.message);
                    };
                    ws.onclose = function() {
                        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
                    };
                }
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
                var href = link.getAttribute("href");
                if (!href) return;
                var newLink = link.cloneNode();
                newLink.onload = function() {
                    if (link.parentNode !== null) link.parentNode.removeChild(link);
                };
                newLink.setAttribute("href", href.split("?")[0] + "?" + Date.now());
                // $FlowFixMe
                link.parentNode.insertBefore(newLink, link.nextSibling);
            }
            var cssTimeout = null;
            function reloadCSS() {
                if (cssTimeout) return;
                cssTimeout = setTimeout(function() {
                    var links = document.querySelectorAll('link[rel="stylesheet"]');
                    for(var i = 0; i < links.length; i++){
                        // $FlowFixMe[incompatible-type]
                        var href /*: string */  = links[i].getAttribute("href");
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
                global1.parcelHotUpdate = Object.create(null);
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
                                // Web extension fix
                                if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global1 instanceof ServiceWorkerGlobalScope) {
                                    extCtx.runtime.reload();
                                    return;
                                }
                                throw err;
                            });
                        });
                        scriptsToRemove = await Promise.all(promises);
                    }
                    assets.forEach(function(asset) {
                        hmrApply(module1.bundle.root, asset);
                    });
                } finally{
                    delete global1.parcelHotUpdate;
                    if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
                        if (script) {
                            var _document$head2;
                            (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
                        }
                    });
                }
            }
            function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
                                let parents = getParents(module1.bundle.root, id);
                                if (parents.length === 1) hmrDelete(module1.bundle.root, id);
                            }
                        }
                        if (supportsSourceURL) // support for source maps is better with eval.
                        (0, eval)(asset.output);
                        // $FlowFixMe
                        let fn = global1.parcelHotUpdate[asset.id];
                        modules[asset.id] = [
                            fn,
                            deps
                        ];
                    } else if (bundle.parent) hmrApply(bundle.parent, asset);
                }
            }
            function hmrDelete(bundle, id) {
                let modules = bundle.modules;
                if (!modules) return;
                if (modules[id]) {
                    // Collect dependencies that will become orphaned when this module is deleted.
                    let deps = modules[id][1];
                    let orphans = [];
                    for(let dep in deps){
                        let parents = getParents(module1.bundle.root, deps[dep]);
                        if (parents.length === 1) orphans.push(deps[dep]);
                    }
                    // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
                    delete modules[id];
                    delete bundle.cache[id];
                    // Now delete the orphans.
                    orphans.forEach((id)=>{
                        hmrDelete(module1.bundle.root, id);
                    });
                } else if (bundle.parent) hmrDelete(bundle.parent, id);
            }
            function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
                if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
                // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
                let parents = getParents(module1.bundle.root, id);
                let accepted = false;
                while(parents.length > 0){
                    let v = parents.shift();
                    let a = hmrAcceptCheckOne(v[0], v[1], null);
                    if (a) accepted = true;
                    else {
                        // Otherwise, queue the parents in the next level upward.
                        let p = getParents(module1.bundle.root, v[1]);
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
            function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
                assetsToDispose.push([
                    bundle,
                    id
                ]);
                if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
                    assetsToAccept.push([
                        bundle,
                        id
                    ]);
                    return true;
                }
            }
            function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
                var cached = bundle.cache[id];
                bundle.hotData[id] = {};
                if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
                if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
                    cb(bundle.hotData[id]);
                });
                delete bundle.cache[id];
            }
            function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
                // Execute the module.
                bundle(id);
                // Run the accept callbacks in the new version of the module.
                var cached = bundle.cache[id];
                if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
                    var assetsToAlsoAccept = cb(function() {
                        return getParents(module1.bundle.root, id);
                    });
                    if (assetsToAlsoAccept && assetsToAccept.length) {
                        assetsToAlsoAccept.forEach(function(a) {
                            hmrDispose(a[0], a[1]);
                        });
                        // $FlowFixMe[method-unbinding]
                        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
                    }
                });
            }
        },
        {}
    ],
    "5AKj5": [
        function(require, module1, exports) {
            // Import dependencies using ESM syntax
            var _datePickersJs = require("./modules/datePickers.js");
            var _vehicleSelectionJs = require("./modules/vehicleSelection.js");
            var _extrasJs = require("./modules/extras.js");
            var _apiExchangeJs = require("./modules/apiExchange.js");
            var _calculationsJs = require("./modules/calculations.js");
            var _apiChoiceJs = require("./modules/apiChoice.js");
            "use strict";
            // Initialize Webflow
            window.Webflow ||= [];
            window.Webflow.push(()=>{
                const initializeBookingForm = async ()=>{
                    try {
                        const form = document.querySelector("#booking_form");
                        if (!form) throw new Error("Booking form not found");
                        form.classList.add("loading");
                        await (0, _apiChoiceJs.populateCountrySelect)();
                        await Promise.all([
                            (0, _datePickersJs.initializeDatePickers)(),
                            (0, _vehicleSelectionJs.initializeVehicleSelection)(),
                            (0, _extrasJs.initializeExtras)(),
                            (0, _apiExchangeJs.initializeCurrencyToggle)()
                        ]);
                        handleFormSubmission();
                        (0, _calculationsJs.calculateTotals)();
                        form.classList.remove("loading");
                    } catch (error) {
                        console.error("Error initializing booking form:", error);
                        showError("There was an error loading the booking form. Please refresh the page.");
                    }
                };
                const handleFormSubmission = ()=>{
                    const form = document.querySelector("#wf-form-Booking-form");
                    if (!form) return;
                    form.addEventListener("submit", async (e)=>{
                        e.preventDefault();
                        try {
                            form.classList.add("submitting");
                            if (!validateForm(form)) throw new Error("Please fill in all required fields");
                            const formData = new FormData(form);
                            showSuccess("Booking submitted successfully!");
                        } catch (error) {
                            console.error("Form submission error:", error);
                            showError(error.message);
                        } finally{
                            form.classList.remove("submitting");
                        }
                    });
                };
                const validateForm = (form)=>{
                    return true;
                };
                const showError = (message)=>{
                    const errorAlert = document.querySelector(".error-alert-bg");
                    if (errorAlert) {
                        errorAlert.querySelector(".error-alert-text").textContent = message;
                        errorAlert.classList.remove("is-hidden");
                        setTimeout(()=>errorAlert.classList.add("is-hidden"), 5000);
                    }
                };
                const showSuccess = (message)=>{
                    const successAlert = document.querySelector(".success-alert-bg");
                    if (successAlert) {
                        successAlert.querySelector(".success-alert-text").textContent = message;
                        successAlert.classList.remove("is-hidden");
                        setTimeout(()=>successAlert.classList.add("is-hidden"), 5000);
                    }
                };
                initializeBookingForm();
            });
        },
        {
            "./modules/datePickers.js": "cpLd6",
            "./modules/vehicleSelection.js": "klq0i",
            "./modules/extras.js": "4LoZB",
            "./modules/apiExchange.js": "5WDZW",
            "./modules/calculations.js": "i5q6O",
            "./modules/apiChoice.js": "iJK5J"
        }
    ],
    "cpLd6": [
        function(require, module1, exports) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports);
            parcelHelpers.export(exports, "initializeDatePickers", ()=>initializeDatePickers);
            var _flatpickr = require("flatpickr");
            var _flatpickrDefault = parcelHelpers.interopDefault(_flatpickr);
            var _displayCalculations = require("./displayCalculations");
            // Add this function to handle pickup location visibility and values
            function initializePickupLocation() {
                // Get DOM elements
                const pickupConfirmation = document.querySelector("#pickup-confirmation");
                const pickupLocation = document.querySelector("#i-pickup-location");
                const returnLocation = document.querySelector("#i-return-location");
                const deliveryFeeElement = document.querySelector("#v-calc-delivery-fee");
                const vPickupLocation = document.querySelector("#v-pickup-location");
                const vReturnLocation = document.querySelector("#v-return-location");
                // Set initial state - hidden by default
                pickupLocation.closest(".input-dropdown").style.display = "none";
                returnLocation.closest(".input-dropdown").style.display = "none";
                // Add event listener to select fields to update display values
                pickupLocation.addEventListener("change", function() {
                    // Only update if a real option is selected (not the placeholder)
                    if (this.selectedIndex !== 0) vPickupLocation.textContent = this.options[this.selectedIndex].text;
                });
                returnLocation.addEventListener("change", function() {
                    // Only update if a real option is selected (not the placeholder)
                    if (this.selectedIndex !== 0) vReturnLocation.textContent = this.options[this.selectedIndex].text;
                });
                // Add event listener to checkbox
                pickupConfirmation.addEventListener("change", function() {
                    // Toggle visibility based on checkbox state
                    const displayStyle = this.checked ? "block" : "none";
                    pickupLocation.closest(".input-dropdown").style.display = displayStyle;
                    returnLocation.closest(".input-dropdown").style.display = displayStyle;
                    // Set delivery fee based on checkbox state
                    deliveryFeeElement.textContent = this.checked ? "250.00" : "0.00";
                    if (!this.checked) {
                        // Reset values when unchecked
                        pickupLocation.selectedIndex = 0;
                        returnLocation.selectedIndex = 0;
                        vPickupLocation.textContent = "-";
                        vReturnLocation.textContent = "-";
                    }
                });
            }
            // Helper function to set select value based on text
            function setSelectValue(selectElement, text) {
                for (let option of selectElement.options)if (option.text === text) {
                    selectElement.value = option.value;
                    break;
                }
            }
            function initializeDatePickers() {
                let pickupDateInstance;
                let returnDateInstance;
                // Pickup Date Configuration
                const pickupDateConfig = {
                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                    minDate: "today",
                    time_24hr: true,
                    minuteIncrement: 30,
                    onChange: function(selectedDates, dateStr) {
                        // Update return date min date when pickup date changes
                        if (returnDateInstance) {
                            returnDateInstance.set("minDate", dateStr);
                            // If return date is earlier than new pickup date, clear it
                            const returnDate = returnDateInstance.selectedDates[0];
                            if (returnDate && returnDate < selectedDates[0]) {
                                returnDateInstance.clear();
                                showDateAlert("Return date cannot be earlier than pickup date. Please select a new return date.");
                            }
                        }
                        (0, _displayCalculations.updateDateDisplay)();
                    }
                };
                // Return Date Configuration
                const returnDateConfig = {
                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                    minDate: "today",
                    time_24hr: true,
                    minuteIncrement: 30,
                    onChange: function(selectedDates, dateStr) {
                        const pickupDate = pickupDateInstance.selectedDates[0];
                        // Validate return date is after pickup date
                        if (pickupDate && selectedDates[0] < pickupDate) {
                            returnDateInstance.clear();
                            showDateAlert("Return date cannot be earlier than pickup date. Please select a valid date.");
                            return;
                        }
                        (0, _displayCalculations.updateDateDisplay)();
                    }
                };
                // Initialize pickup and return date pickers
                pickupDateInstance = (0, _flatpickrDefault.default)("#i-pickup-date", pickupDateConfig);
                returnDateInstance = (0, _flatpickrDefault.default)("#i-return-date", returnDateConfig);
                // Date of Birth Configuration
                const dobConfig = {
                    dateFormat: "Y-m-d",
                    maxDate: new Date(),
                    yearRange: [
                        1900,
                        new Date().getFullYear()
                    ]
                };
                // Expiration Date Configuration
                const expirationConfig = {
                    dateFormat: "Y-m-d",
                    minDate: "today"
                };
                // Initialize other date pickers
                (0, _flatpickrDefault.default)("#i-date-of-birth", dobConfig);
                (0, _flatpickrDefault.default)("#i-expiration-date", expirationConfig);
                // Add this line at the end of the function
                initializePickupLocation();
            }
            // Function to show date validation alert
            function showDateAlert(message) {
                // Find the return date error alert element
                const errorAlert = document.querySelector("#i-return-date").closest(".f-field-wrapper").querySelector(".error-alert-bg");
                // Update error message
                errorAlert.querySelector(".error-alert-text").textContent = message;
                // Show the error
                errorAlert.classList.remove("is-hidden");
                // Hide the error after 5 seconds
                setTimeout(()=>{
                    errorAlert.classList.add("is-hidden");
                }, 5000);
            }
        },
        {
            "flatpickr": "llQu5",
            "./displayCalculations": "6230i",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "llQu5": [
        function(require, module1, exports) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports);
            var _options = require("./types/options");
            var _default = require("./l10n/default");
            var _defaultDefault = parcelHelpers.interopDefault(_default);
            var _utils = require("./utils");
            var _dom = require("./utils/dom");
            var _dates = require("./utils/dates");
            var _formatting = require("./utils/formatting");
            var _polyfills = require("./utils/polyfills");
            var __assign = function() {
                __assign = Object.assign || function(t) {
                    for(var s, i = 1, n = arguments.length; i < n; i++){
                        s = arguments[i];
                        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            var __spreadArrays = function() {
                for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
                for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
                return r;
            };
            var DEBOUNCED_CHANGE_MS = 300;
            function FlatpickrInstance(element, instanceConfig) {
                var self1 = {
                    config: __assign(__assign({}, _options.defaults), flatpickr.defaultConfig),
                    l10n: _defaultDefault.default
                };
                self1.parseDate = (0, _dates.createDateParser)({
                    config: self1.config,
                    l10n: self1.l10n
                });
                self1._handlers = [];
                self1.pluginElements = [];
                self1.loadedPlugins = [];
                self1._bind = bind;
                self1._setHoursFromDate = setHoursFromDate;
                self1._positionCalendar = positionCalendar;
                self1.changeMonth = changeMonth;
                self1.changeYear = changeYear;
                self1.clear = clear;
                self1.close = close;
                self1.onMouseOver = onMouseOver;
                self1._createElement = _dom.createElement;
                self1.createDay = createDay;
                self1.destroy = destroy;
                self1.isEnabled = isEnabled;
                self1.jumpToDate = jumpToDate;
                self1.updateValue = updateValue;
                self1.open = open;
                self1.redraw = redraw;
                self1.set = set;
                self1.setDate = setDate;
                self1.toggle = toggle;
                function setupHelperFunctions() {
                    self1.utils = {
                        getDaysInMonth: function(month, yr) {
                            if (month === void 0) month = self1.currentMonth;
                            if (yr === void 0) yr = self1.currentYear;
                            if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
                            return self1.l10n.daysInMonth[month];
                        }
                    };
                }
                function init() {
                    self1.element = self1.input = element;
                    self1.isOpen = false;
                    parseConfig();
                    setupLocale();
                    setupInputs();
                    setupDates();
                    setupHelperFunctions();
                    if (!self1.isMobile) build();
                    bindEvents();
                    if (self1.selectedDates.length || self1.config.noCalendar) {
                        if (self1.config.enableTime) setHoursFromDate(self1.config.noCalendar ? self1.latestSelectedDateObj : undefined);
                        updateValue(false);
                    }
                    setCalendarWidth();
                    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                    if (!self1.isMobile && isSafari) positionCalendar();
                    triggerEvent("onReady");
                }
                function getClosestActiveElement() {
                    var _a;
                    return ((_a = self1.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
                }
                function bindToInstance(fn) {
                    return fn.bind(self1);
                }
                function setCalendarWidth() {
                    var config = self1.config;
                    if (config.weekNumbers === false && config.showMonths === 1) return;
                    else if (config.noCalendar !== true) window.requestAnimationFrame(function() {
                        if (self1.calendarContainer !== undefined) {
                            self1.calendarContainer.style.visibility = "hidden";
                            self1.calendarContainer.style.display = "block";
                        }
                        if (self1.daysContainer !== undefined) {
                            var daysWidth = (self1.days.offsetWidth + 1) * config.showMonths;
                            self1.daysContainer.style.width = daysWidth + "px";
                            self1.calendarContainer.style.width = daysWidth + (self1.weekWrapper !== undefined ? self1.weekWrapper.offsetWidth : 0) + "px";
                            self1.calendarContainer.style.removeProperty("visibility");
                            self1.calendarContainer.style.removeProperty("display");
                        }
                    });
                }
                function updateTime(e) {
                    if (self1.selectedDates.length === 0) {
                        var defaultDate = self1.config.minDate === undefined || (0, _dates.compareDates)(new Date(), self1.config.minDate) >= 0 ? new Date() : new Date(self1.config.minDate.getTime());
                        var defaults = (0, _dates.getDefaultHours)(self1.config);
                        defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
                        self1.selectedDates = [
                            defaultDate
                        ];
                        self1.latestSelectedDateObj = defaultDate;
                    }
                    if (e !== undefined && e.type !== "blur") timeWrapper(e);
                    var prevValue = self1._input.value;
                    setHoursFromInputs();
                    updateValue();
                    if (self1._input.value !== prevValue) self1._debouncedChange();
                }
                function ampm2military(hour, amPM) {
                    return hour % 12 + 12 * (0, _utils.int)(amPM === self1.l10n.amPM[1]);
                }
                function military2ampm(hour) {
                    switch(hour % 24){
                        case 0:
                        case 12:
                            return 12;
                        default:
                            return hour % 12;
                    }
                }
                function setHoursFromInputs() {
                    if (self1.hourElement === undefined || self1.minuteElement === undefined) return;
                    var hours = (parseInt(self1.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self1.minuteElement.value, 10) || 0) % 60, seconds = self1.secondElement !== undefined ? (parseInt(self1.secondElement.value, 10) || 0) % 60 : 0;
                    if (self1.amPM !== undefined) hours = ampm2military(hours, self1.amPM.textContent);
                    var limitMinHours = self1.config.minTime !== undefined || self1.config.minDate && self1.minDateHasTime && self1.latestSelectedDateObj && (0, _dates.compareDates)(self1.latestSelectedDateObj, self1.config.minDate, true) === 0;
                    var limitMaxHours = self1.config.maxTime !== undefined || self1.config.maxDate && self1.maxDateHasTime && self1.latestSelectedDateObj && (0, _dates.compareDates)(self1.latestSelectedDateObj, self1.config.maxDate, true) === 0;
                    if (self1.config.maxTime !== undefined && self1.config.minTime !== undefined && self1.config.minTime > self1.config.maxTime) {
                        var minBound = (0, _dates.calculateSecondsSinceMidnight)(self1.config.minTime.getHours(), self1.config.minTime.getMinutes(), self1.config.minTime.getSeconds());
                        var maxBound = (0, _dates.calculateSecondsSinceMidnight)(self1.config.maxTime.getHours(), self1.config.maxTime.getMinutes(), self1.config.maxTime.getSeconds());
                        var currentTime = (0, _dates.calculateSecondsSinceMidnight)(hours, minutes, seconds);
                        if (currentTime > maxBound && currentTime < minBound) {
                            var result = (0, _dates.parseSeconds)(minBound);
                            hours = result[0];
                            minutes = result[1];
                            seconds = result[2];
                        }
                    } else {
                        if (limitMaxHours) {
                            var maxTime = self1.config.maxTime !== undefined ? self1.config.maxTime : self1.config.maxDate;
                            hours = Math.min(hours, maxTime.getHours());
                            if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
                            if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
                        }
                        if (limitMinHours) {
                            var minTime = self1.config.minTime !== undefined ? self1.config.minTime : self1.config.minDate;
                            hours = Math.max(hours, minTime.getHours());
                            if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
                            if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
                        }
                    }
                    setHours(hours, minutes, seconds);
                }
                function setHoursFromDate(dateObj) {
                    var date = dateObj || self1.latestSelectedDateObj;
                    if (date && date instanceof Date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
                }
                function setHours(hours, minutes, seconds) {
                    if (self1.latestSelectedDateObj !== undefined) self1.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
                    if (!self1.hourElement || !self1.minuteElement || self1.isMobile) return;
                    self1.hourElement.value = (0, _utils.pad)(!self1.config.time_24hr ? (12 + hours) % 12 + 12 * (0, _utils.int)(hours % 12 === 0) : hours);
                    self1.minuteElement.value = (0, _utils.pad)(minutes);
                    if (self1.amPM !== undefined) self1.amPM.textContent = self1.l10n.amPM[(0, _utils.int)(hours >= 12)];
                    if (self1.secondElement !== undefined) self1.secondElement.value = (0, _utils.pad)(seconds);
                }
                function onYearInput(event) {
                    var eventTarget = (0, _dom.getEventTarget)(event);
                    var year = parseInt(eventTarget.value) + (event.delta || 0);
                    if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) changeYear(year);
                }
                function bind(element, event, handler, options) {
                    if (event instanceof Array) return event.forEach(function(ev) {
                        return bind(element, ev, handler, options);
                    });
                    if (element instanceof Array) return element.forEach(function(el) {
                        return bind(el, event, handler, options);
                    });
                    element.addEventListener(event, handler, options);
                    self1._handlers.push({
                        remove: function() {
                            return element.removeEventListener(event, handler, options);
                        }
                    });
                }
                function triggerChange() {
                    triggerEvent("onChange");
                }
                function bindEvents() {
                    if (self1.config.wrap) [
                        "open",
                        "close",
                        "toggle",
                        "clear"
                    ].forEach(function(evt) {
                        Array.prototype.forEach.call(self1.element.querySelectorAll("[data-" + evt + "]"), function(el) {
                            return bind(el, "click", self1[evt]);
                        });
                    });
                    if (self1.isMobile) {
                        setupMobile();
                        return;
                    }
                    var debouncedResize = (0, _utils.debounce)(onResize, 50);
                    self1._debouncedChange = (0, _utils.debounce)(triggerChange, DEBOUNCED_CHANGE_MS);
                    if (self1.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self1.daysContainer, "mouseover", function(e) {
                        if (self1.config.mode === "range") onMouseOver((0, _dom.getEventTarget)(e));
                    });
                    bind(self1._input, "keydown", onKeyDown);
                    if (self1.calendarContainer !== undefined) bind(self1.calendarContainer, "keydown", onKeyDown);
                    if (!self1.config.inline && !self1.config.static) bind(window, "resize", debouncedResize);
                    if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);
                    else bind(window.document, "mousedown", documentClick);
                    bind(window.document, "focus", documentClick, {
                        capture: true
                    });
                    if (self1.config.clickOpens === true) {
                        bind(self1._input, "focus", self1.open);
                        bind(self1._input, "click", self1.open);
                    }
                    if (self1.daysContainer !== undefined) {
                        bind(self1.monthNav, "click", onMonthNavClick);
                        bind(self1.monthNav, [
                            "keyup",
                            "increment"
                        ], onYearInput);
                        bind(self1.daysContainer, "click", selectDate);
                    }
                    if (self1.timeContainer !== undefined && self1.minuteElement !== undefined && self1.hourElement !== undefined) {
                        var selText = function(e) {
                            return (0, _dom.getEventTarget)(e).select();
                        };
                        bind(self1.timeContainer, [
                            "increment"
                        ], updateTime);
                        bind(self1.timeContainer, "blur", updateTime, {
                            capture: true
                        });
                        bind(self1.timeContainer, "click", timeIncrement);
                        bind([
                            self1.hourElement,
                            self1.minuteElement
                        ], [
                            "focus",
                            "click"
                        ], selText);
                        if (self1.secondElement !== undefined) bind(self1.secondElement, "focus", function() {
                            return self1.secondElement && self1.secondElement.select();
                        });
                        if (self1.amPM !== undefined) bind(self1.amPM, "click", function(e) {
                            updateTime(e);
                        });
                    }
                    if (self1.config.allowInput) bind(self1._input, "blur", onBlur);
                }
                function jumpToDate(jumpDate, triggerChange) {
                    var jumpTo = jumpDate !== undefined ? self1.parseDate(jumpDate) : self1.latestSelectedDateObj || (self1.config.minDate && self1.config.minDate > self1.now ? self1.config.minDate : self1.config.maxDate && self1.config.maxDate < self1.now ? self1.config.maxDate : self1.now);
                    var oldYear = self1.currentYear;
                    var oldMonth = self1.currentMonth;
                    try {
                        if (jumpTo !== undefined) {
                            self1.currentYear = jumpTo.getFullYear();
                            self1.currentMonth = jumpTo.getMonth();
                        }
                    } catch (e) {
                        e.message = "Invalid date supplied: " + jumpTo;
                        self1.config.errorHandler(e);
                    }
                    if (triggerChange && self1.currentYear !== oldYear) {
                        triggerEvent("onYearChange");
                        buildMonthSwitch();
                    }
                    if (triggerChange && (self1.currentYear !== oldYear || self1.currentMonth !== oldMonth)) triggerEvent("onMonthChange");
                    self1.redraw();
                }
                function timeIncrement(e) {
                    var eventTarget = (0, _dom.getEventTarget)(e);
                    if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
                }
                function incrementNumInput(e, delta, inputElem) {
                    var target = e && (0, _dom.getEventTarget)(e);
                    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
                    var event = createEvent("increment");
                    event.delta = delta;
                    input && input.dispatchEvent(event);
                }
                function build() {
                    var fragment = window.document.createDocumentFragment();
                    self1.calendarContainer = (0, _dom.createElement)("div", "flatpickr-calendar");
                    self1.calendarContainer.tabIndex = -1;
                    if (!self1.config.noCalendar) {
                        fragment.appendChild(buildMonthNav());
                        self1.innerContainer = (0, _dom.createElement)("div", "flatpickr-innerContainer");
                        if (self1.config.weekNumbers) {
                            var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                            self1.innerContainer.appendChild(weekWrapper);
                            self1.weekNumbers = weekNumbers;
                            self1.weekWrapper = weekWrapper;
                        }
                        self1.rContainer = (0, _dom.createElement)("div", "flatpickr-rContainer");
                        self1.rContainer.appendChild(buildWeekdays());
                        if (!self1.daysContainer) {
                            self1.daysContainer = (0, _dom.createElement)("div", "flatpickr-days");
                            self1.daysContainer.tabIndex = -1;
                        }
                        buildDays();
                        self1.rContainer.appendChild(self1.daysContainer);
                        self1.innerContainer.appendChild(self1.rContainer);
                        fragment.appendChild(self1.innerContainer);
                    }
                    if (self1.config.enableTime) fragment.appendChild(buildTime());
                    (0, _dom.toggleClass)(self1.calendarContainer, "rangeMode", self1.config.mode === "range");
                    (0, _dom.toggleClass)(self1.calendarContainer, "animate", self1.config.animate === true);
                    (0, _dom.toggleClass)(self1.calendarContainer, "multiMonth", self1.config.showMonths > 1);
                    self1.calendarContainer.appendChild(fragment);
                    var customAppend = self1.config.appendTo !== undefined && self1.config.appendTo.nodeType !== undefined;
                    if (self1.config.inline || self1.config.static) {
                        self1.calendarContainer.classList.add(self1.config.inline ? "inline" : "static");
                        if (self1.config.inline) {
                            if (!customAppend && self1.element.parentNode) self1.element.parentNode.insertBefore(self1.calendarContainer, self1._input.nextSibling);
                            else if (self1.config.appendTo !== undefined) self1.config.appendTo.appendChild(self1.calendarContainer);
                        }
                        if (self1.config.static) {
                            var wrapper = (0, _dom.createElement)("div", "flatpickr-wrapper");
                            if (self1.element.parentNode) self1.element.parentNode.insertBefore(wrapper, self1.element);
                            wrapper.appendChild(self1.element);
                            if (self1.altInput) wrapper.appendChild(self1.altInput);
                            wrapper.appendChild(self1.calendarContainer);
                        }
                    }
                    if (!self1.config.static && !self1.config.inline) (self1.config.appendTo !== undefined ? self1.config.appendTo : window.document.body).appendChild(self1.calendarContainer);
                }
                function createDay(className, date, _dayNumber, i) {
                    var dateIsEnabled = isEnabled(date, true), dayElement = (0, _dom.createElement)("span", className, date.getDate().toString());
                    dayElement.dateObj = date;
                    dayElement.$i = i;
                    dayElement.setAttribute("aria-label", self1.formatDate(date, self1.config.ariaDateFormat));
                    if (className.indexOf("hidden") === -1 && (0, _dates.compareDates)(date, self1.now) === 0) {
                        self1.todayDateElem = dayElement;
                        dayElement.classList.add("today");
                        dayElement.setAttribute("aria-current", "date");
                    }
                    if (dateIsEnabled) {
                        dayElement.tabIndex = -1;
                        if (isDateSelected(date)) {
                            dayElement.classList.add("selected");
                            self1.selectedDateElem = dayElement;
                            if (self1.config.mode === "range") {
                                (0, _dom.toggleClass)(dayElement, "startRange", self1.selectedDates[0] && (0, _dates.compareDates)(date, self1.selectedDates[0], true) === 0);
                                (0, _dom.toggleClass)(dayElement, "endRange", self1.selectedDates[1] && (0, _dates.compareDates)(date, self1.selectedDates[1], true) === 0);
                                if (className === "nextMonthDay") dayElement.classList.add("inRange");
                            }
                        }
                    } else dayElement.classList.add("flatpickr-disabled");
                    if (self1.config.mode === "range") {
                        if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
                    }
                    if (self1.weekNumbers && self1.config.showMonths === 1 && className !== "prevMonthDay" && i % 7 === 6) self1.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self1.config.getWeek(date) + "</span>");
                    triggerEvent("onDayCreate", dayElement);
                    return dayElement;
                }
                function focusOnDayElem(targetNode) {
                    targetNode.focus();
                    if (self1.config.mode === "range") onMouseOver(targetNode);
                }
                function getFirstAvailableDay(delta) {
                    var startMonth = delta > 0 ? 0 : self1.config.showMonths - 1;
                    var endMonth = delta > 0 ? self1.config.showMonths : -1;
                    for(var m = startMonth; m != endMonth; m += delta){
                        var month = self1.daysContainer.children[m];
                        var startIndex = delta > 0 ? 0 : month.children.length - 1;
                        var endIndex = delta > 0 ? month.children.length : -1;
                        for(var i = startIndex; i != endIndex; i += delta){
                            var c = month.children[i];
                            if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
                        }
                    }
                    return undefined;
                }
                function getNextAvailableDay(current, delta) {
                    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self1.currentMonth;
                    var endMonth = delta > 0 ? self1.config.showMonths : -1;
                    var loopDelta = delta > 0 ? 1 : -1;
                    for(var m = givenMonth - self1.currentMonth; m != endMonth; m += loopDelta){
                        var month = self1.daysContainer.children[m];
                        var startIndex = givenMonth - self1.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
                        var numMonthDays = month.children.length;
                        for(var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta){
                            var c = month.children[i];
                            if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
                        }
                    }
                    self1.changeMonth(loopDelta);
                    focusOnDay(getFirstAvailableDay(loopDelta), 0);
                    return undefined;
                }
                function focusOnDay(current, offset) {
                    var activeElement = getClosestActiveElement();
                    var dayFocused = isInView(activeElement || document.body);
                    var startElem = current !== undefined ? current : dayFocused ? activeElement : self1.selectedDateElem !== undefined && isInView(self1.selectedDateElem) ? self1.selectedDateElem : self1.todayDateElem !== undefined && isInView(self1.todayDateElem) ? self1.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
                    if (startElem === undefined) self1._input.focus();
                    else if (!dayFocused) focusOnDayElem(startElem);
                    else getNextAvailableDay(startElem, offset);
                }
                function buildMonthDays(year, month) {
                    var firstOfMonth = (new Date(year, month, 1).getDay() - self1.l10n.firstDayOfWeek + 7) % 7;
                    var prevMonthDays = self1.utils.getDaysInMonth((month - 1 + 12) % 12, year);
                    var daysInMonth = self1.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self1.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
                    var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
                    for(; dayNumber <= prevMonthDays; dayNumber++, dayIndex++)days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
                    for(dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++)days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
                    for(var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self1.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++)days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
                    var dayContainer = (0, _dom.createElement)("div", "dayContainer");
                    dayContainer.appendChild(days);
                    return dayContainer;
                }
                function buildDays() {
                    if (self1.daysContainer === undefined) return;
                    (0, _dom.clearNode)(self1.daysContainer);
                    if (self1.weekNumbers) (0, _dom.clearNode)(self1.weekNumbers);
                    var frag = document.createDocumentFragment();
                    for(var i = 0; i < self1.config.showMonths; i++){
                        var d = new Date(self1.currentYear, self1.currentMonth, 1);
                        d.setMonth(self1.currentMonth + i);
                        frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
                    }
                    self1.daysContainer.appendChild(frag);
                    self1.days = self1.daysContainer.firstChild;
                    if (self1.config.mode === "range" && self1.selectedDates.length === 1) onMouseOver();
                }
                function buildMonthSwitch() {
                    if (self1.config.showMonths > 1 || self1.config.monthSelectorType !== "dropdown") return;
                    var shouldBuildMonth = function(month) {
                        if (self1.config.minDate !== undefined && self1.currentYear === self1.config.minDate.getFullYear() && month < self1.config.minDate.getMonth()) return false;
                        return !(self1.config.maxDate !== undefined && self1.currentYear === self1.config.maxDate.getFullYear() && month > self1.config.maxDate.getMonth());
                    };
                    self1.monthsDropdownContainer.tabIndex = -1;
                    self1.monthsDropdownContainer.innerHTML = "";
                    for(var i = 0; i < 12; i++){
                        if (!shouldBuildMonth(i)) continue;
                        var month = (0, _dom.createElement)("option", "flatpickr-monthDropdown-month");
                        month.value = new Date(self1.currentYear, i).getMonth().toString();
                        month.textContent = (0, _formatting.monthToStr)(i, self1.config.shorthandCurrentMonth, self1.l10n);
                        month.tabIndex = -1;
                        if (self1.currentMonth === i) month.selected = true;
                        self1.monthsDropdownContainer.appendChild(month);
                    }
                }
                function buildMonth() {
                    var container = (0, _dom.createElement)("div", "flatpickr-month");
                    var monthNavFragment = window.document.createDocumentFragment();
                    var monthElement;
                    if (self1.config.showMonths > 1 || self1.config.monthSelectorType === "static") monthElement = (0, _dom.createElement)("span", "cur-month");
                    else {
                        self1.monthsDropdownContainer = (0, _dom.createElement)("select", "flatpickr-monthDropdown-months");
                        self1.monthsDropdownContainer.setAttribute("aria-label", self1.l10n.monthAriaLabel);
                        bind(self1.monthsDropdownContainer, "change", function(e) {
                            var target = (0, _dom.getEventTarget)(e);
                            var selectedMonth = parseInt(target.value, 10);
                            self1.changeMonth(selectedMonth - self1.currentMonth);
                            triggerEvent("onMonthChange");
                        });
                        buildMonthSwitch();
                        monthElement = self1.monthsDropdownContainer;
                    }
                    var yearInput = (0, _dom.createNumberInput)("cur-year", {
                        tabindex: "-1"
                    });
                    var yearElement = yearInput.getElementsByTagName("input")[0];
                    yearElement.setAttribute("aria-label", self1.l10n.yearAriaLabel);
                    if (self1.config.minDate) yearElement.setAttribute("min", self1.config.minDate.getFullYear().toString());
                    if (self1.config.maxDate) {
                        yearElement.setAttribute("max", self1.config.maxDate.getFullYear().toString());
                        yearElement.disabled = !!self1.config.minDate && self1.config.minDate.getFullYear() === self1.config.maxDate.getFullYear();
                    }
                    var currentMonth = (0, _dom.createElement)("div", "flatpickr-current-month");
                    currentMonth.appendChild(monthElement);
                    currentMonth.appendChild(yearInput);
                    monthNavFragment.appendChild(currentMonth);
                    container.appendChild(monthNavFragment);
                    return {
                        container: container,
                        yearElement: yearElement,
                        monthElement: monthElement
                    };
                }
                function buildMonths() {
                    (0, _dom.clearNode)(self1.monthNav);
                    self1.monthNav.appendChild(self1.prevMonthNav);
                    if (self1.config.showMonths) {
                        self1.yearElements = [];
                        self1.monthElements = [];
                    }
                    for(var m = self1.config.showMonths; m--;){
                        var month = buildMonth();
                        self1.yearElements.push(month.yearElement);
                        self1.monthElements.push(month.monthElement);
                        self1.monthNav.appendChild(month.container);
                    }
                    self1.monthNav.appendChild(self1.nextMonthNav);
                }
                function buildMonthNav() {
                    self1.monthNav = (0, _dom.createElement)("div", "flatpickr-months");
                    self1.yearElements = [];
                    self1.monthElements = [];
                    self1.prevMonthNav = (0, _dom.createElement)("span", "flatpickr-prev-month");
                    self1.prevMonthNav.innerHTML = self1.config.prevArrow;
                    self1.nextMonthNav = (0, _dom.createElement)("span", "flatpickr-next-month");
                    self1.nextMonthNav.innerHTML = self1.config.nextArrow;
                    buildMonths();
                    Object.defineProperty(self1, "_hidePrevMonthArrow", {
                        get: function() {
                            return self1.__hidePrevMonthArrow;
                        },
                        set: function(bool) {
                            if (self1.__hidePrevMonthArrow !== bool) {
                                (0, _dom.toggleClass)(self1.prevMonthNav, "flatpickr-disabled", bool);
                                self1.__hidePrevMonthArrow = bool;
                            }
                        }
                    });
                    Object.defineProperty(self1, "_hideNextMonthArrow", {
                        get: function() {
                            return self1.__hideNextMonthArrow;
                        },
                        set: function(bool) {
                            if (self1.__hideNextMonthArrow !== bool) {
                                (0, _dom.toggleClass)(self1.nextMonthNav, "flatpickr-disabled", bool);
                                self1.__hideNextMonthArrow = bool;
                            }
                        }
                    });
                    self1.currentYearElement = self1.yearElements[0];
                    updateNavigationCurrentMonth();
                    return self1.monthNav;
                }
                function buildTime() {
                    self1.calendarContainer.classList.add("hasTime");
                    if (self1.config.noCalendar) self1.calendarContainer.classList.add("noCalendar");
                    var defaults = (0, _dates.getDefaultHours)(self1.config);
                    self1.timeContainer = (0, _dom.createElement)("div", "flatpickr-time");
                    self1.timeContainer.tabIndex = -1;
                    var separator = (0, _dom.createElement)("span", "flatpickr-time-separator", ":");
                    var hourInput = (0, _dom.createNumberInput)("flatpickr-hour", {
                        "aria-label": self1.l10n.hourAriaLabel
                    });
                    self1.hourElement = hourInput.getElementsByTagName("input")[0];
                    var minuteInput = (0, _dom.createNumberInput)("flatpickr-minute", {
                        "aria-label": self1.l10n.minuteAriaLabel
                    });
                    self1.minuteElement = minuteInput.getElementsByTagName("input")[0];
                    self1.hourElement.tabIndex = self1.minuteElement.tabIndex = -1;
                    self1.hourElement.value = (0, _utils.pad)(self1.latestSelectedDateObj ? self1.latestSelectedDateObj.getHours() : self1.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
                    self1.minuteElement.value = (0, _utils.pad)(self1.latestSelectedDateObj ? self1.latestSelectedDateObj.getMinutes() : defaults.minutes);
                    self1.hourElement.setAttribute("step", self1.config.hourIncrement.toString());
                    self1.minuteElement.setAttribute("step", self1.config.minuteIncrement.toString());
                    self1.hourElement.setAttribute("min", self1.config.time_24hr ? "0" : "1");
                    self1.hourElement.setAttribute("max", self1.config.time_24hr ? "23" : "12");
                    self1.hourElement.setAttribute("maxlength", "2");
                    self1.minuteElement.setAttribute("min", "0");
                    self1.minuteElement.setAttribute("max", "59");
                    self1.minuteElement.setAttribute("maxlength", "2");
                    self1.timeContainer.appendChild(hourInput);
                    self1.timeContainer.appendChild(separator);
                    self1.timeContainer.appendChild(minuteInput);
                    if (self1.config.time_24hr) self1.timeContainer.classList.add("time24hr");
                    if (self1.config.enableSeconds) {
                        self1.timeContainer.classList.add("hasSeconds");
                        var secondInput = (0, _dom.createNumberInput)("flatpickr-second");
                        self1.secondElement = secondInput.getElementsByTagName("input")[0];
                        self1.secondElement.value = (0, _utils.pad)(self1.latestSelectedDateObj ? self1.latestSelectedDateObj.getSeconds() : defaults.seconds);
                        self1.secondElement.setAttribute("step", self1.minuteElement.getAttribute("step"));
                        self1.secondElement.setAttribute("min", "0");
                        self1.secondElement.setAttribute("max", "59");
                        self1.secondElement.setAttribute("maxlength", "2");
                        self1.timeContainer.appendChild((0, _dom.createElement)("span", "flatpickr-time-separator", ":"));
                        self1.timeContainer.appendChild(secondInput);
                    }
                    if (!self1.config.time_24hr) {
                        self1.amPM = (0, _dom.createElement)("span", "flatpickr-am-pm", self1.l10n.amPM[(0, _utils.int)((self1.latestSelectedDateObj ? self1.hourElement.value : self1.config.defaultHour) > 11)]);
                        self1.amPM.title = self1.l10n.toggleTitle;
                        self1.amPM.tabIndex = -1;
                        self1.timeContainer.appendChild(self1.amPM);
                    }
                    return self1.timeContainer;
                }
                function buildWeekdays() {
                    if (!self1.weekdayContainer) self1.weekdayContainer = (0, _dom.createElement)("div", "flatpickr-weekdays");
                    else (0, _dom.clearNode)(self1.weekdayContainer);
                    for(var i = self1.config.showMonths; i--;){
                        var container = (0, _dom.createElement)("div", "flatpickr-weekdaycontainer");
                        self1.weekdayContainer.appendChild(container);
                    }
                    updateWeekdays();
                    return self1.weekdayContainer;
                }
                function updateWeekdays() {
                    if (!self1.weekdayContainer) return;
                    var firstDayOfWeek = self1.l10n.firstDayOfWeek;
                    var weekdays = __spreadArrays(self1.l10n.weekdays.shorthand);
                    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
                    for(var i = self1.config.showMonths; i--;)self1.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
                }
                function buildWeeks() {
                    self1.calendarContainer.classList.add("hasWeeks");
                    var weekWrapper = (0, _dom.createElement)("div", "flatpickr-weekwrapper");
                    weekWrapper.appendChild((0, _dom.createElement)("span", "flatpickr-weekday", self1.l10n.weekAbbreviation));
                    var weekNumbers = (0, _dom.createElement)("div", "flatpickr-weeks");
                    weekWrapper.appendChild(weekNumbers);
                    return {
                        weekWrapper: weekWrapper,
                        weekNumbers: weekNumbers
                    };
                }
                function changeMonth(value, isOffset) {
                    if (isOffset === void 0) isOffset = true;
                    var delta = isOffset ? value : value - self1.currentMonth;
                    if (delta < 0 && self1._hidePrevMonthArrow === true || delta > 0 && self1._hideNextMonthArrow === true) return;
                    self1.currentMonth += delta;
                    if (self1.currentMonth < 0 || self1.currentMonth > 11) {
                        self1.currentYear += self1.currentMonth > 11 ? 1 : -1;
                        self1.currentMonth = (self1.currentMonth + 12) % 12;
                        triggerEvent("onYearChange");
                        buildMonthSwitch();
                    }
                    buildDays();
                    triggerEvent("onMonthChange");
                    updateNavigationCurrentMonth();
                }
                function clear(triggerChangeEvent, toInitial) {
                    if (triggerChangeEvent === void 0) triggerChangeEvent = true;
                    if (toInitial === void 0) toInitial = true;
                    self1.input.value = "";
                    if (self1.altInput !== undefined) self1.altInput.value = "";
                    if (self1.mobileInput !== undefined) self1.mobileInput.value = "";
                    self1.selectedDates = [];
                    self1.latestSelectedDateObj = undefined;
                    if (toInitial === true) {
                        self1.currentYear = self1._initialDate.getFullYear();
                        self1.currentMonth = self1._initialDate.getMonth();
                    }
                    if (self1.config.enableTime === true) {
                        var _a = (0, _dates.getDefaultHours)(self1.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
                        setHours(hours, minutes, seconds);
                    }
                    self1.redraw();
                    if (triggerChangeEvent) triggerEvent("onChange");
                }
                function close() {
                    self1.isOpen = false;
                    if (!self1.isMobile) {
                        if (self1.calendarContainer !== undefined) self1.calendarContainer.classList.remove("open");
                        if (self1._input !== undefined) self1._input.classList.remove("active");
                    }
                    triggerEvent("onClose");
                }
                function destroy() {
                    if (self1.config !== undefined) triggerEvent("onDestroy");
                    for(var i = self1._handlers.length; i--;)self1._handlers[i].remove();
                    self1._handlers = [];
                    if (self1.mobileInput) {
                        if (self1.mobileInput.parentNode) self1.mobileInput.parentNode.removeChild(self1.mobileInput);
                        self1.mobileInput = undefined;
                    } else if (self1.calendarContainer && self1.calendarContainer.parentNode) {
                        if (self1.config.static && self1.calendarContainer.parentNode) {
                            var wrapper = self1.calendarContainer.parentNode;
                            wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                            if (wrapper.parentNode) {
                                while(wrapper.firstChild)wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                                wrapper.parentNode.removeChild(wrapper);
                            }
                        } else self1.calendarContainer.parentNode.removeChild(self1.calendarContainer);
                    }
                    if (self1.altInput) {
                        self1.input.type = "text";
                        if (self1.altInput.parentNode) self1.altInput.parentNode.removeChild(self1.altInput);
                        delete self1.altInput;
                    }
                    if (self1.input) {
                        self1.input.type = self1.input._type;
                        self1.input.classList.remove("flatpickr-input");
                        self1.input.removeAttribute("readonly");
                    }
                    [
                        "_showTimeInput",
                        "latestSelectedDateObj",
                        "_hideNextMonthArrow",
                        "_hidePrevMonthArrow",
                        "__hideNextMonthArrow",
                        "__hidePrevMonthArrow",
                        "isMobile",
                        "isOpen",
                        "selectedDateElem",
                        "minDateHasTime",
                        "maxDateHasTime",
                        "days",
                        "daysContainer",
                        "_input",
                        "_positionElement",
                        "innerContainer",
                        "rContainer",
                        "monthNav",
                        "todayDateElem",
                        "calendarContainer",
                        "weekdayContainer",
                        "prevMonthNav",
                        "nextMonthNav",
                        "monthsDropdownContainer",
                        "currentMonthElement",
                        "currentYearElement",
                        "navigationCurrentMonth",
                        "selectedDateElem",
                        "config"
                    ].forEach(function(k) {
                        try {
                            delete self1[k];
                        } catch (_) {}
                    });
                }
                function isCalendarElem(elem) {
                    return self1.calendarContainer.contains(elem);
                }
                function documentClick(e) {
                    if (self1.isOpen && !self1.config.inline) {
                        var eventTarget_1 = (0, _dom.getEventTarget)(e);
                        var isCalendarElement = isCalendarElem(eventTarget_1);
                        var isInput = eventTarget_1 === self1.input || eventTarget_1 === self1.altInput || self1.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self1.input) || ~e.path.indexOf(self1.altInput));
                        var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
                        var isIgnored = !self1.config.ignoredFocusElements.some(function(elem) {
                            return elem.contains(eventTarget_1);
                        });
                        if (lostFocus && isIgnored) {
                            if (self1.config.allowInput) self1.setDate(self1._input.value, false, self1.config.altInput ? self1.config.altFormat : self1.config.dateFormat);
                            if (self1.timeContainer !== undefined && self1.minuteElement !== undefined && self1.hourElement !== undefined && self1.input.value !== "" && self1.input.value !== undefined) updateTime();
                            self1.close();
                            if (self1.config && self1.config.mode === "range" && self1.selectedDates.length === 1) self1.clear(false);
                        }
                    }
                }
                function changeYear(newYear) {
                    if (!newYear || self1.config.minDate && newYear < self1.config.minDate.getFullYear() || self1.config.maxDate && newYear > self1.config.maxDate.getFullYear()) return;
                    var newYearNum = newYear, isNewYear = self1.currentYear !== newYearNum;
                    self1.currentYear = newYearNum || self1.currentYear;
                    if (self1.config.maxDate && self1.currentYear === self1.config.maxDate.getFullYear()) self1.currentMonth = Math.min(self1.config.maxDate.getMonth(), self1.currentMonth);
                    else if (self1.config.minDate && self1.currentYear === self1.config.minDate.getFullYear()) self1.currentMonth = Math.max(self1.config.minDate.getMonth(), self1.currentMonth);
                    if (isNewYear) {
                        self1.redraw();
                        triggerEvent("onYearChange");
                        buildMonthSwitch();
                    }
                }
                function isEnabled(date, timeless) {
                    var _a;
                    if (timeless === void 0) timeless = true;
                    var dateToCheck = self1.parseDate(date, undefined, timeless);
                    if (self1.config.minDate && dateToCheck && (0, _dates.compareDates)(dateToCheck, self1.config.minDate, timeless !== undefined ? timeless : !self1.minDateHasTime) < 0 || self1.config.maxDate && dateToCheck && (0, _dates.compareDates)(dateToCheck, self1.config.maxDate, timeless !== undefined ? timeless : !self1.maxDateHasTime) > 0) return false;
                    if (!self1.config.enable && self1.config.disable.length === 0) return true;
                    if (dateToCheck === undefined) return false;
                    var bool = !!self1.config.enable, array = (_a = self1.config.enable) !== null && _a !== void 0 ? _a : self1.config.disable;
                    for(var i = 0, d = void 0; i < array.length; i++){
                        d = array[i];
                        if (typeof d === "function" && d(dateToCheck)) return bool;
                        else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;
                        else if (typeof d === "string") {
                            var parsed = self1.parseDate(d, undefined, true);
                            return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
                        } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
                    }
                    return !bool;
                }
                function isInView(elem) {
                    if (self1.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self1.daysContainer.contains(elem);
                    return false;
                }
                function onBlur(e) {
                    var isInput = e.target === self1._input;
                    var valueChanged = self1._input.value.trimEnd() !== getDateStr();
                    if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) self1.setDate(self1._input.value, true, e.target === self1.altInput ? self1.config.altFormat : self1.config.dateFormat);
                }
                function onKeyDown(e) {
                    var eventTarget = (0, _dom.getEventTarget)(e);
                    var isInput = self1.config.wrap ? element.contains(eventTarget) : eventTarget === self1._input;
                    var allowInput = self1.config.allowInput;
                    var allowKeydown = self1.isOpen && (!allowInput || !isInput);
                    var allowInlineKeydown = self1.config.inline && isInput && !allowInput;
                    if (e.keyCode === 13 && isInput) {
                        if (allowInput) {
                            self1.setDate(self1._input.value, true, eventTarget === self1.altInput ? self1.config.altFormat : self1.config.dateFormat);
                            self1.close();
                            return eventTarget.blur();
                        } else self1.open();
                    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
                        var isTimeObj = !!self1.timeContainer && self1.timeContainer.contains(eventTarget);
                        switch(e.keyCode){
                            case 13:
                                if (isTimeObj) {
                                    e.preventDefault();
                                    updateTime();
                                    focusAndClose();
                                } else selectDate(e);
                                break;
                            case 27:
                                e.preventDefault();
                                focusAndClose();
                                break;
                            case 8:
                            case 46:
                                if (isInput && !self1.config.allowInput) {
                                    e.preventDefault();
                                    self1.clear();
                                }
                                break;
                            case 37:
                            case 39:
                                if (!isTimeObj && !isInput) {
                                    e.preventDefault();
                                    var activeElement = getClosestActiveElement();
                                    if (self1.daysContainer !== undefined && (allowInput === false || activeElement && isInView(activeElement))) {
                                        var delta_1 = e.keyCode === 39 ? 1 : -1;
                                        if (!e.ctrlKey) focusOnDay(undefined, delta_1);
                                        else {
                                            e.stopPropagation();
                                            changeMonth(delta_1);
                                            focusOnDay(getFirstAvailableDay(1), 0);
                                        }
                                    }
                                } else if (self1.hourElement) self1.hourElement.focus();
                                break;
                            case 38:
                            case 40:
                                e.preventDefault();
                                var delta = e.keyCode === 40 ? 1 : -1;
                                if (self1.daysContainer && eventTarget.$i !== undefined || eventTarget === self1.input || eventTarget === self1.altInput) {
                                    if (e.ctrlKey) {
                                        e.stopPropagation();
                                        changeYear(self1.currentYear - delta);
                                        focusOnDay(getFirstAvailableDay(1), 0);
                                    } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
                                } else if (eventTarget === self1.currentYearElement) changeYear(self1.currentYear - delta);
                                else if (self1.config.enableTime) {
                                    if (!isTimeObj && self1.hourElement) self1.hourElement.focus();
                                    updateTime(e);
                                    self1._debouncedChange();
                                }
                                break;
                            case 9:
                                if (isTimeObj) {
                                    var elems = [
                                        self1.hourElement,
                                        self1.minuteElement,
                                        self1.secondElement,
                                        self1.amPM
                                    ].concat(self1.pluginElements).filter(function(x) {
                                        return x;
                                    });
                                    var i = elems.indexOf(eventTarget);
                                    if (i !== -1) {
                                        var target = elems[i + (e.shiftKey ? -1 : 1)];
                                        e.preventDefault();
                                        (target || self1._input).focus();
                                    }
                                } else if (!self1.config.noCalendar && self1.daysContainer && self1.daysContainer.contains(eventTarget) && e.shiftKey) {
                                    e.preventDefault();
                                    self1._input.focus();
                                }
                                break;
                            default:
                                break;
                        }
                    }
                    if (self1.amPM !== undefined && eventTarget === self1.amPM) switch(e.key){
                        case self1.l10n.amPM[0].charAt(0):
                        case self1.l10n.amPM[0].charAt(0).toLowerCase():
                            self1.amPM.textContent = self1.l10n.amPM[0];
                            setHoursFromInputs();
                            updateValue();
                            break;
                        case self1.l10n.amPM[1].charAt(0):
                        case self1.l10n.amPM[1].charAt(0).toLowerCase():
                            self1.amPM.textContent = self1.l10n.amPM[1];
                            setHoursFromInputs();
                            updateValue();
                            break;
                    }
                    if (isInput || isCalendarElem(eventTarget)) triggerEvent("onKeyDown", e);
                }
                function onMouseOver(elem, cellClass) {
                    if (cellClass === void 0) cellClass = "flatpickr-day";
                    if (self1.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled"))) return;
                    var hoverDate = elem ? elem.dateObj.getTime() : self1.days.firstElementChild.dateObj.getTime(), initialDate = self1.parseDate(self1.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self1.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self1.selectedDates[0].getTime());
                    var containsDisabled = false;
                    var minRange = 0, maxRange = 0;
                    for(var t = rangeStartDate; t < rangeEndDate; t += _dates.duration.DAY)if (!isEnabled(new Date(t), true)) {
                        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
                        if (t < initialDate && (!minRange || t > minRange)) minRange = t;
                        else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
                    }
                    var hoverableCells = Array.from(self1.rContainer.querySelectorAll("*:nth-child(-n+" + self1.config.showMonths + ") > ." + cellClass));
                    hoverableCells.forEach(function(dayElem) {
                        var date = dayElem.dateObj;
                        var timestamp = date.getTime();
                        var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
                        if (outOfRange) {
                            dayElem.classList.add("notAllowed");
                            [
                                "inRange",
                                "startRange",
                                "endRange"
                            ].forEach(function(c) {
                                dayElem.classList.remove(c);
                            });
                            return;
                        } else if (containsDisabled && !outOfRange) return;
                        [
                            "startRange",
                            "inRange",
                            "endRange",
                            "notAllowed"
                        ].forEach(function(c) {
                            dayElem.classList.remove(c);
                        });
                        if (elem !== undefined) {
                            elem.classList.add(hoverDate <= self1.selectedDates[0].getTime() ? "startRange" : "endRange");
                            if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");
                            else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
                            if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && (0, _dates.isBetween)(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
                        }
                    });
                }
                function onResize() {
                    if (self1.isOpen && !self1.config.static && !self1.config.inline) positionCalendar();
                }
                function open(e, positionElement) {
                    if (positionElement === void 0) positionElement = self1._positionElement;
                    if (self1.isMobile === true) {
                        if (e) {
                            e.preventDefault();
                            var eventTarget = (0, _dom.getEventTarget)(e);
                            if (eventTarget) eventTarget.blur();
                        }
                        if (self1.mobileInput !== undefined) {
                            self1.mobileInput.focus();
                            self1.mobileInput.click();
                        }
                        triggerEvent("onOpen");
                        return;
                    } else if (self1._input.disabled || self1.config.inline) return;
                    var wasOpen = self1.isOpen;
                    self1.isOpen = true;
                    if (!wasOpen) {
                        self1.calendarContainer.classList.add("open");
                        self1._input.classList.add("active");
                        triggerEvent("onOpen");
                        positionCalendar(positionElement);
                    }
                    if (self1.config.enableTime === true && self1.config.noCalendar === true) {
                        if (self1.config.allowInput === false && (e === undefined || !self1.timeContainer.contains(e.relatedTarget))) setTimeout(function() {
                            return self1.hourElement.select();
                        }, 50);
                    }
                }
                function minMaxDateSetter(type) {
                    return function(date) {
                        var dateObj = self1.config["_" + type + "Date"] = self1.parseDate(date, self1.config.dateFormat);
                        var inverseDateObj = self1.config["_" + (type === "min" ? "max" : "min") + "Date"];
                        if (dateObj !== undefined) self1[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
                        if (self1.selectedDates) {
                            self1.selectedDates = self1.selectedDates.filter(function(d) {
                                return isEnabled(d);
                            });
                            if (!self1.selectedDates.length && type === "min") setHoursFromDate(dateObj);
                            updateValue();
                        }
                        if (self1.daysContainer) {
                            redraw();
                            if (dateObj !== undefined) self1.currentYearElement[type] = dateObj.getFullYear().toString();
                            else self1.currentYearElement.removeAttribute(type);
                            self1.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
                        }
                    };
                }
                function parseConfig() {
                    var boolOpts = [
                        "wrap",
                        "weekNumbers",
                        "allowInput",
                        "allowInvalidPreload",
                        "clickOpens",
                        "time_24hr",
                        "enableTime",
                        "noCalendar",
                        "altInput",
                        "shorthandCurrentMonth",
                        "inline",
                        "static",
                        "enableSeconds",
                        "disableMobile"
                    ];
                    var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
                    var formats = {};
                    self1.config.parseDate = userConfig.parseDate;
                    self1.config.formatDate = userConfig.formatDate;
                    Object.defineProperty(self1.config, "enable", {
                        get: function() {
                            return self1.config._enable;
                        },
                        set: function(dates) {
                            self1.config._enable = parseDateRules(dates);
                        }
                    });
                    Object.defineProperty(self1.config, "disable", {
                        get: function() {
                            return self1.config._disable;
                        },
                        set: function(dates) {
                            self1.config._disable = parseDateRules(dates);
                        }
                    });
                    var timeMode = userConfig.mode === "time";
                    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                        var defaultDateFormat = flatpickr.defaultConfig.dateFormat || _options.defaults.dateFormat;
                        formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
                    }
                    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
                        var defaultAltFormat = flatpickr.defaultConfig.altFormat || _options.defaults.altFormat;
                        formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
                    }
                    Object.defineProperty(self1.config, "minDate", {
                        get: function() {
                            return self1.config._minDate;
                        },
                        set: minMaxDateSetter("min")
                    });
                    Object.defineProperty(self1.config, "maxDate", {
                        get: function() {
                            return self1.config._maxDate;
                        },
                        set: minMaxDateSetter("max")
                    });
                    var minMaxTimeSetter = function(type) {
                        return function(val) {
                            self1.config[type === "min" ? "_minTime" : "_maxTime"] = self1.parseDate(val, "H:i:S");
                        };
                    };
                    Object.defineProperty(self1.config, "minTime", {
                        get: function() {
                            return self1.config._minTime;
                        },
                        set: minMaxTimeSetter("min")
                    });
                    Object.defineProperty(self1.config, "maxTime", {
                        get: function() {
                            return self1.config._maxTime;
                        },
                        set: minMaxTimeSetter("max")
                    });
                    if (userConfig.mode === "time") {
                        self1.config.noCalendar = true;
                        self1.config.enableTime = true;
                    }
                    Object.assign(self1.config, formats, userConfig);
                    for(var i = 0; i < boolOpts.length; i++)self1.config[boolOpts[i]] = self1.config[boolOpts[i]] === true || self1.config[boolOpts[i]] === "true";
                    (0, _options.HOOKS).filter(function(hook) {
                        return self1.config[hook] !== undefined;
                    }).forEach(function(hook) {
                        self1.config[hook] = (0, _utils.arrayify)(self1.config[hook] || []).map(bindToInstance);
                    });
                    self1.isMobile = !self1.config.disableMobile && !self1.config.inline && self1.config.mode === "single" && !self1.config.disable.length && !self1.config.enable && !self1.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    for(var i = 0; i < self1.config.plugins.length; i++){
                        var pluginConf = self1.config.plugins[i](self1) || {};
                        for(var key in pluginConf){
                            if ((0, _options.HOOKS).indexOf(key) > -1) self1.config[key] = (0, _utils.arrayify)(pluginConf[key]).map(bindToInstance).concat(self1.config[key]);
                            else if (typeof userConfig[key] === "undefined") self1.config[key] = pluginConf[key];
                        }
                    }
                    if (!userConfig.altInputClass) self1.config.altInputClass = getInputElem().className + " " + self1.config.altInputClass;
                    triggerEvent("onParseConfig");
                }
                function getInputElem() {
                    return self1.config.wrap ? element.querySelector("[data-input]") : element;
                }
                function setupLocale() {
                    if (typeof self1.config.locale !== "object" && typeof flatpickr.l10ns[self1.config.locale] === "undefined") self1.config.errorHandler(new Error("flatpickr: invalid locale " + self1.config.locale));
                    self1.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self1.config.locale === "object" ? self1.config.locale : self1.config.locale !== "default" ? flatpickr.l10ns[self1.config.locale] : undefined);
                    _formatting.tokenRegex.D = "(" + self1.l10n.weekdays.shorthand.join("|") + ")";
                    _formatting.tokenRegex.l = "(" + self1.l10n.weekdays.longhand.join("|") + ")";
                    _formatting.tokenRegex.M = "(" + self1.l10n.months.shorthand.join("|") + ")";
                    _formatting.tokenRegex.F = "(" + self1.l10n.months.longhand.join("|") + ")";
                    _formatting.tokenRegex.K = "(" + self1.l10n.amPM[0] + "|" + self1.l10n.amPM[1] + "|" + self1.l10n.amPM[0].toLowerCase() + "|" + self1.l10n.amPM[1].toLowerCase() + ")";
                    var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
                    if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) self1.config.time_24hr = self1.l10n.time_24hr;
                    self1.formatDate = (0, _dates.createDateFormatter)(self1);
                    self1.parseDate = (0, _dates.createDateParser)({
                        config: self1.config,
                        l10n: self1.l10n
                    });
                }
                function positionCalendar(customPositionElement) {
                    if (typeof self1.config.position === "function") return void self1.config.position(self1, customPositionElement);
                    if (self1.calendarContainer === undefined) return;
                    triggerEvent("onPreCalendarPosition");
                    var positionElement = customPositionElement || self1._positionElement;
                    var calendarHeight = Array.prototype.reduce.call(self1.calendarContainer.children, function(acc, child) {
                        return acc + child.offsetHeight;
                    }, 0), calendarWidth = self1.calendarContainer.offsetWidth, configPos = self1.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
                    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
                    (0, _dom.toggleClass)(self1.calendarContainer, "arrowTop", !showOnTop);
                    (0, _dom.toggleClass)(self1.calendarContainer, "arrowBottom", showOnTop);
                    if (self1.config.inline) return;
                    var left = window.pageXOffset + inputBounds.left;
                    var isCenter = false;
                    var isRight = false;
                    if (configPosHorizontal === "center") {
                        left -= (calendarWidth - inputBounds.width) / 2;
                        isCenter = true;
                    } else if (configPosHorizontal === "right") {
                        left -= calendarWidth - inputBounds.width;
                        isRight = true;
                    }
                    (0, _dom.toggleClass)(self1.calendarContainer, "arrowLeft", !isCenter && !isRight);
                    (0, _dom.toggleClass)(self1.calendarContainer, "arrowCenter", isCenter);
                    (0, _dom.toggleClass)(self1.calendarContainer, "arrowRight", isRight);
                    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
                    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
                    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
                    (0, _dom.toggleClass)(self1.calendarContainer, "rightMost", rightMost);
                    if (self1.config.static) return;
                    self1.calendarContainer.style.top = top + "px";
                    if (!rightMost) {
                        self1.calendarContainer.style.left = left + "px";
                        self1.calendarContainer.style.right = "auto";
                    } else if (!centerMost) {
                        self1.calendarContainer.style.left = "auto";
                        self1.calendarContainer.style.right = right + "px";
                    } else {
                        var doc = getDocumentStyleSheet();
                        if (doc === undefined) return;
                        var bodyWidth = window.document.body.offsetWidth;
                        var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                        var centerBefore = ".flatpickr-calendar.centerMost:before";
                        var centerAfter = ".flatpickr-calendar.centerMost:after";
                        var centerIndex = doc.cssRules.length;
                        var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                        (0, _dom.toggleClass)(self1.calendarContainer, "rightMost", false);
                        (0, _dom.toggleClass)(self1.calendarContainer, "centerMost", true);
                        doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                        self1.calendarContainer.style.left = centerLeft + "px";
                        self1.calendarContainer.style.right = "auto";
                    }
                }
                function getDocumentStyleSheet() {
                    var editableSheet = null;
                    for(var i = 0; i < document.styleSheets.length; i++){
                        var sheet = document.styleSheets[i];
                        if (!sheet.cssRules) continue;
                        try {
                            sheet.cssRules;
                        } catch (err) {
                            continue;
                        }
                        editableSheet = sheet;
                        break;
                    }
                    return editableSheet != null ? editableSheet : createStyleSheet();
                }
                function createStyleSheet() {
                    var style = document.createElement("style");
                    document.head.appendChild(style);
                    return style.sheet;
                }
                function redraw() {
                    if (self1.config.noCalendar || self1.isMobile) return;
                    buildMonthSwitch();
                    updateNavigationCurrentMonth();
                    buildDays();
                }
                function focusAndClose() {
                    self1._input.focus();
                    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) setTimeout(self1.close, 0);
                    else self1.close();
                }
                function selectDate(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var isSelectable = function(day) {
                        return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
                    };
                    var t = (0, _dom.findParent)((0, _dom.getEventTarget)(e), isSelectable);
                    if (t === undefined) return;
                    var target = t;
                    var selectedDate = self1.latestSelectedDateObj = new Date(target.dateObj.getTime());
                    var shouldChangeMonth = (selectedDate.getMonth() < self1.currentMonth || selectedDate.getMonth() > self1.currentMonth + self1.config.showMonths - 1) && self1.config.mode !== "range";
                    self1.selectedDateElem = target;
                    if (self1.config.mode === "single") self1.selectedDates = [
                        selectedDate
                    ];
                    else if (self1.config.mode === "multiple") {
                        var selectedIndex = isDateSelected(selectedDate);
                        if (selectedIndex) self1.selectedDates.splice(parseInt(selectedIndex), 1);
                        else self1.selectedDates.push(selectedDate);
                    } else if (self1.config.mode === "range") {
                        if (self1.selectedDates.length === 2) self1.clear(false, false);
                        self1.latestSelectedDateObj = selectedDate;
                        self1.selectedDates.push(selectedDate);
                        if ((0, _dates.compareDates)(selectedDate, self1.selectedDates[0], true) !== 0) self1.selectedDates.sort(function(a, b) {
                            return a.getTime() - b.getTime();
                        });
                    }
                    setHoursFromInputs();
                    if (shouldChangeMonth) {
                        var isNewYear = self1.currentYear !== selectedDate.getFullYear();
                        self1.currentYear = selectedDate.getFullYear();
                        self1.currentMonth = selectedDate.getMonth();
                        if (isNewYear) {
                            triggerEvent("onYearChange");
                            buildMonthSwitch();
                        }
                        triggerEvent("onMonthChange");
                    }
                    updateNavigationCurrentMonth();
                    buildDays();
                    updateValue();
                    if (!shouldChangeMonth && self1.config.mode !== "range" && self1.config.showMonths === 1) focusOnDayElem(target);
                    else if (self1.selectedDateElem !== undefined && self1.hourElement === undefined) self1.selectedDateElem && self1.selectedDateElem.focus();
                    if (self1.hourElement !== undefined) self1.hourElement !== undefined && self1.hourElement.focus();
                    if (self1.config.closeOnSelect) {
                        var single = self1.config.mode === "single" && !self1.config.enableTime;
                        var range = self1.config.mode === "range" && self1.selectedDates.length === 2 && !self1.config.enableTime;
                        if (single || range) focusAndClose();
                    }
                    triggerChange();
                }
                var CALLBACKS = {
                    locale: [
                        setupLocale,
                        updateWeekdays
                    ],
                    showMonths: [
                        buildMonths,
                        setCalendarWidth,
                        buildWeekdays
                    ],
                    minDate: [
                        jumpToDate
                    ],
                    maxDate: [
                        jumpToDate
                    ],
                    positionElement: [
                        updatePositionElement
                    ],
                    clickOpens: [
                        function() {
                            if (self1.config.clickOpens === true) {
                                bind(self1._input, "focus", self1.open);
                                bind(self1._input, "click", self1.open);
                            } else {
                                self1._input.removeEventListener("focus", self1.open);
                                self1._input.removeEventListener("click", self1.open);
                            }
                        }
                    ]
                };
                function set(option, value) {
                    if (option !== null && typeof option === "object") {
                        Object.assign(self1.config, option);
                        for(var key in option)if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(function(x) {
                            return x();
                        });
                    } else {
                        self1.config[option] = value;
                        if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function(x) {
                            return x();
                        });
                        else if ((0, _options.HOOKS).indexOf(option) > -1) self1.config[option] = (0, _utils.arrayify)(value);
                    }
                    self1.redraw();
                    updateValue(true);
                }
                function setSelectedDate(inputDate, format) {
                    var dates = [];
                    if (inputDate instanceof Array) dates = inputDate.map(function(d) {
                        return self1.parseDate(d, format);
                    });
                    else if (inputDate instanceof Date || typeof inputDate === "number") dates = [
                        self1.parseDate(inputDate, format)
                    ];
                    else if (typeof inputDate === "string") switch(self1.config.mode){
                        case "single":
                        case "time":
                            dates = [
                                self1.parseDate(inputDate, format)
                            ];
                            break;
                        case "multiple":
                            dates = inputDate.split(self1.config.conjunction).map(function(date) {
                                return self1.parseDate(date, format);
                            });
                            break;
                        case "range":
                            dates = inputDate.split(self1.l10n.rangeSeparator).map(function(date) {
                                return self1.parseDate(date, format);
                            });
                            break;
                        default:
                            break;
                    }
                    else self1.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
                    self1.selectedDates = self1.config.allowInvalidPreload ? dates : dates.filter(function(d) {
                        return d instanceof Date && isEnabled(d, false);
                    });
                    if (self1.config.mode === "range") self1.selectedDates.sort(function(a, b) {
                        return a.getTime() - b.getTime();
                    });
                }
                function setDate(date, triggerChange, format) {
                    if (triggerChange === void 0) triggerChange = false;
                    if (format === void 0) format = self1.config.dateFormat;
                    if (date !== 0 && !date || date instanceof Array && date.length === 0) return self1.clear(triggerChange);
                    setSelectedDate(date, format);
                    self1.latestSelectedDateObj = self1.selectedDates[self1.selectedDates.length - 1];
                    self1.redraw();
                    jumpToDate(undefined, triggerChange);
                    setHoursFromDate();
                    if (self1.selectedDates.length === 0) self1.clear(false);
                    updateValue(triggerChange);
                    if (triggerChange) triggerEvent("onChange");
                }
                function parseDateRules(arr) {
                    return arr.slice().map(function(rule) {
                        if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) return self1.parseDate(rule, undefined, true);
                        else if (rule && typeof rule === "object" && rule.from && rule.to) return {
                            from: self1.parseDate(rule.from, undefined),
                            to: self1.parseDate(rule.to, undefined)
                        };
                        return rule;
                    }).filter(function(x) {
                        return x;
                    });
                }
                function setupDates() {
                    self1.selectedDates = [];
                    self1.now = self1.parseDate(self1.config.now) || new Date();
                    var preloadedDate = self1.config.defaultDate || ((self1.input.nodeName === "INPUT" || self1.input.nodeName === "TEXTAREA") && self1.input.placeholder && self1.input.value === self1.input.placeholder ? null : self1.input.value);
                    if (preloadedDate) setSelectedDate(preloadedDate, self1.config.dateFormat);
                    self1._initialDate = self1.selectedDates.length > 0 ? self1.selectedDates[0] : self1.config.minDate && self1.config.minDate.getTime() > self1.now.getTime() ? self1.config.minDate : self1.config.maxDate && self1.config.maxDate.getTime() < self1.now.getTime() ? self1.config.maxDate : self1.now;
                    self1.currentYear = self1._initialDate.getFullYear();
                    self1.currentMonth = self1._initialDate.getMonth();
                    if (self1.selectedDates.length > 0) self1.latestSelectedDateObj = self1.selectedDates[0];
                    if (self1.config.minTime !== undefined) self1.config.minTime = self1.parseDate(self1.config.minTime, "H:i");
                    if (self1.config.maxTime !== undefined) self1.config.maxTime = self1.parseDate(self1.config.maxTime, "H:i");
                    self1.minDateHasTime = !!self1.config.minDate && (self1.config.minDate.getHours() > 0 || self1.config.minDate.getMinutes() > 0 || self1.config.minDate.getSeconds() > 0);
                    self1.maxDateHasTime = !!self1.config.maxDate && (self1.config.maxDate.getHours() > 0 || self1.config.maxDate.getMinutes() > 0 || self1.config.maxDate.getSeconds() > 0);
                }
                function setupInputs() {
                    self1.input = getInputElem();
                    if (!self1.input) {
                        self1.config.errorHandler(new Error("Invalid input element specified"));
                        return;
                    }
                    self1.input._type = self1.input.type;
                    self1.input.type = "text";
                    self1.input.classList.add("flatpickr-input");
                    self1._input = self1.input;
                    if (self1.config.altInput) {
                        self1.altInput = (0, _dom.createElement)(self1.input.nodeName, self1.config.altInputClass);
                        self1._input = self1.altInput;
                        self1.altInput.placeholder = self1.input.placeholder;
                        self1.altInput.disabled = self1.input.disabled;
                        self1.altInput.required = self1.input.required;
                        self1.altInput.tabIndex = self1.input.tabIndex;
                        self1.altInput.type = "text";
                        self1.input.setAttribute("type", "hidden");
                        if (!self1.config.static && self1.input.parentNode) self1.input.parentNode.insertBefore(self1.altInput, self1.input.nextSibling);
                    }
                    if (!self1.config.allowInput) self1._input.setAttribute("readonly", "readonly");
                    updatePositionElement();
                }
                function updatePositionElement() {
                    self1._positionElement = self1.config.positionElement || self1._input;
                }
                function setupMobile() {
                    var inputType = self1.config.enableTime ? self1.config.noCalendar ? "time" : "datetime-local" : "date";
                    self1.mobileInput = (0, _dom.createElement)("input", self1.input.className + " flatpickr-mobile");
                    self1.mobileInput.tabIndex = 1;
                    self1.mobileInput.type = inputType;
                    self1.mobileInput.disabled = self1.input.disabled;
                    self1.mobileInput.required = self1.input.required;
                    self1.mobileInput.placeholder = self1.input.placeholder;
                    self1.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
                    if (self1.selectedDates.length > 0) self1.mobileInput.defaultValue = self1.mobileInput.value = self1.formatDate(self1.selectedDates[0], self1.mobileFormatStr);
                    if (self1.config.minDate) self1.mobileInput.min = self1.formatDate(self1.config.minDate, "Y-m-d");
                    if (self1.config.maxDate) self1.mobileInput.max = self1.formatDate(self1.config.maxDate, "Y-m-d");
                    if (self1.input.getAttribute("step")) self1.mobileInput.step = String(self1.input.getAttribute("step"));
                    self1.input.type = "hidden";
                    if (self1.altInput !== undefined) self1.altInput.type = "hidden";
                    try {
                        if (self1.input.parentNode) self1.input.parentNode.insertBefore(self1.mobileInput, self1.input.nextSibling);
                    } catch (_a) {}
                    bind(self1.mobileInput, "change", function(e) {
                        self1.setDate((0, _dom.getEventTarget)(e).value, false, self1.mobileFormatStr);
                        triggerEvent("onChange");
                        triggerEvent("onClose");
                    });
                }
                function toggle(e) {
                    if (self1.isOpen === true) return self1.close();
                    self1.open(e);
                }
                function triggerEvent(event, data) {
                    if (self1.config === undefined) return;
                    var hooks = self1.config[event];
                    if (hooks !== undefined && hooks.length > 0) for(var i = 0; hooks[i] && i < hooks.length; i++)hooks[i](self1.selectedDates, self1.input.value, self1, data);
                    if (event === "onChange") {
                        self1.input.dispatchEvent(createEvent("change"));
                        self1.input.dispatchEvent(createEvent("input"));
                    }
                }
                function createEvent(name) {
                    var e = document.createEvent("Event");
                    e.initEvent(name, true, true);
                    return e;
                }
                function isDateSelected(date) {
                    for(var i = 0; i < self1.selectedDates.length; i++){
                        var selectedDate = self1.selectedDates[i];
                        if (selectedDate instanceof Date && (0, _dates.compareDates)(selectedDate, date) === 0) return "" + i;
                    }
                    return false;
                }
                function isDateInRange(date) {
                    if (self1.config.mode !== "range" || self1.selectedDates.length < 2) return false;
                    return (0, _dates.compareDates)(date, self1.selectedDates[0]) >= 0 && (0, _dates.compareDates)(date, self1.selectedDates[1]) <= 0;
                }
                function updateNavigationCurrentMonth() {
                    if (self1.config.noCalendar || self1.isMobile || !self1.monthNav) return;
                    self1.yearElements.forEach(function(yearElement, i) {
                        var d = new Date(self1.currentYear, self1.currentMonth, 1);
                        d.setMonth(self1.currentMonth + i);
                        if (self1.config.showMonths > 1 || self1.config.monthSelectorType === "static") self1.monthElements[i].textContent = (0, _formatting.monthToStr)(d.getMonth(), self1.config.shorthandCurrentMonth, self1.l10n) + " ";
                        else self1.monthsDropdownContainer.value = d.getMonth().toString();
                        yearElement.value = d.getFullYear().toString();
                    });
                    self1._hidePrevMonthArrow = self1.config.minDate !== undefined && (self1.currentYear === self1.config.minDate.getFullYear() ? self1.currentMonth <= self1.config.minDate.getMonth() : self1.currentYear < self1.config.minDate.getFullYear());
                    self1._hideNextMonthArrow = self1.config.maxDate !== undefined && (self1.currentYear === self1.config.maxDate.getFullYear() ? self1.currentMonth + 1 > self1.config.maxDate.getMonth() : self1.currentYear > self1.config.maxDate.getFullYear());
                }
                function getDateStr(specificFormat) {
                    var format = specificFormat || (self1.config.altInput ? self1.config.altFormat : self1.config.dateFormat);
                    return self1.selectedDates.map(function(dObj) {
                        return self1.formatDate(dObj, format);
                    }).filter(function(d, i, arr) {
                        return self1.config.mode !== "range" || self1.config.enableTime || arr.indexOf(d) === i;
                    }).join(self1.config.mode !== "range" ? self1.config.conjunction : self1.l10n.rangeSeparator);
                }
                function updateValue(triggerChange) {
                    if (triggerChange === void 0) triggerChange = true;
                    if (self1.mobileInput !== undefined && self1.mobileFormatStr) self1.mobileInput.value = self1.latestSelectedDateObj !== undefined ? self1.formatDate(self1.latestSelectedDateObj, self1.mobileFormatStr) : "";
                    self1.input.value = getDateStr(self1.config.dateFormat);
                    if (self1.altInput !== undefined) self1.altInput.value = getDateStr(self1.config.altFormat);
                    if (triggerChange !== false) triggerEvent("onValueUpdate");
                }
                function onMonthNavClick(e) {
                    var eventTarget = (0, _dom.getEventTarget)(e);
                    var isPrevMonth = self1.prevMonthNav.contains(eventTarget);
                    var isNextMonth = self1.nextMonthNav.contains(eventTarget);
                    if (isPrevMonth || isNextMonth) changeMonth(isPrevMonth ? -1 : 1);
                    else if (self1.yearElements.indexOf(eventTarget) >= 0) eventTarget.select();
                    else if (eventTarget.classList.contains("arrowUp")) self1.changeYear(self1.currentYear + 1);
                    else if (eventTarget.classList.contains("arrowDown")) self1.changeYear(self1.currentYear - 1);
                }
                function timeWrapper(e) {
                    e.preventDefault();
                    var isKeyDown = e.type === "keydown", eventTarget = (0, _dom.getEventTarget)(e), input = eventTarget;
                    if (self1.amPM !== undefined && eventTarget === self1.amPM) self1.amPM.textContent = self1.l10n.amPM[(0, _utils.int)(self1.amPM.textContent === self1.l10n.amPM[0])];
                    var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
                    var newValue = curValue + step * delta;
                    if (typeof input.value !== "undefined" && input.value.length === 2) {
                        var isHourElem = input === self1.hourElement, isMinuteElem = input === self1.minuteElement;
                        if (newValue < min) {
                            newValue = max + newValue + (0, _utils.int)(!isHourElem) + ((0, _utils.int)(isHourElem) && (0, _utils.int)(!self1.amPM));
                            if (isMinuteElem) incrementNumInput(undefined, -1, self1.hourElement);
                        } else if (newValue > max) {
                            newValue = input === self1.hourElement ? newValue - max - (0, _utils.int)(!self1.amPM) : min;
                            if (isMinuteElem) incrementNumInput(undefined, 1, self1.hourElement);
                        }
                        if (self1.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) self1.amPM.textContent = self1.l10n.amPM[(0, _utils.int)(self1.amPM.textContent === self1.l10n.amPM[0])];
                        input.value = (0, _utils.pad)(newValue);
                    }
                }
                init();
                return self1;
            }
            function _flatpickr(nodeList, config) {
                var nodes = Array.prototype.slice.call(nodeList).filter(function(x) {
                    return x instanceof HTMLElement;
                });
                var instances = [];
                for(var i = 0; i < nodes.length; i++){
                    var node = nodes[i];
                    try {
                        if (node.getAttribute("data-fp-omit") !== null) continue;
                        if (node._flatpickr !== undefined) {
                            node._flatpickr.destroy();
                            node._flatpickr = undefined;
                        }
                        node._flatpickr = FlatpickrInstance(node, config || {});
                        instances.push(node._flatpickr);
                    } catch (e) {
                        console.error(e);
                    }
                }
                return instances.length === 1 ? instances[0] : instances;
            }
            if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
                HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
                    return _flatpickr(this, config);
                };
                HTMLElement.prototype.flatpickr = function(config) {
                    return _flatpickr([
                        this
                    ], config);
                };
            }
            var flatpickr = function(selector, config) {
                if (typeof selector === "string") return _flatpickr(window.document.querySelectorAll(selector), config);
                else if (selector instanceof Node) return _flatpickr([
                    selector
                ], config);
                else return _flatpickr(selector, config);
            };
            flatpickr.defaultConfig = {};
            flatpickr.l10ns = {
                en: __assign({}, _defaultDefault.default),
                default: __assign({}, _defaultDefault.default)
            };
            flatpickr.localize = function(l10n) {
                flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
            };
            flatpickr.setDefaults = function(config) {
                flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
            };
            flatpickr.parseDate = (0, _dates.createDateParser)({});
            flatpickr.formatDate = (0, _dates.createDateFormatter)({});
            flatpickr.compareDates = _dates.compareDates;
            if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") jQuery.fn.flatpickr = function(config) {
                return _flatpickr(this, config);
            };
            Date.prototype.fp_incr = function(days) {
                return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
            };
            if (typeof window !== "undefined") window.flatpickr = flatpickr;
            exports.default = flatpickr;
        },
        {
            "./types/options": "bXtBt",
            "./l10n/default": "fxflw",
            "./utils": "tqkc0",
            "./utils/dom": "eoD9c",
            "./utils/dates": "hioKU",
            "./utils/formatting": "i6nZP",
            "./utils/polyfills": "2RVlY",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "bXtBt": [
        function(require, module1, exports) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports);
            parcelHelpers.export(exports, "HOOKS", ()=>HOOKS);
            parcelHelpers.export(exports, "defaults", ()=>defaults);
            var HOOKS = [
                "onChange",
                "onClose",
                "onDayCreate",
                "onDestroy",
                "onKeyDown",
                "onMonthChange",
                "onOpen",
                "onParseConfig",
                "onReady",
                "onValueUpdate",
                "onYearChange",
                "onPreCalendarPosition"
            ];
            var defaults = {
                _disable: [],
                allowInput: false,
                allowInvalidPreload: false,
                altFormat: "F j, Y",
                altInput: false,
                altInputClass: "form-control input",
                animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
                ariaDateFormat: "F j, Y",
                autoFillDefaultTime: true,
                clickOpens: true,
                closeOnSelect: true,
                conjunction: ", ",
                dateFormat: "Y-m-d",
                defaultHour: 12,
                defaultMinute: 0,
                defaultSeconds: 0,
                disable: [],
                disableMobile: false,
                enableSeconds: false,
                enableTime: false,
                errorHandler: function(err) {
                    return typeof console !== "undefined" && console.warn(err);
                },
                getWeek: function(givenDate) {
                    var date = new Date(givenDate.getTime());
                    date.setHours(0, 0, 0, 0);
                    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
                    var week1 = new Date(date.getFullYear(), 0, 4);
                    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
                },
                hourIncrement: 1,
                ignoredFocusElements: [],
                inline: false,
                locale: "default",
                minuteIncrement: 5,
                mode: "single",
                monthSelectorType: "dropdown",
                nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
                noCalendar: false,
                now: new Date(),
                onChange: [],
                onClose: [],
                onDayCreate: [],
                onDestroy: [],
                onKeyDown: [],
                onMonthChange: [],
                onOpen: [],
                onParseConfig: [],
                onReady: [],
                onValueUpdate: [],
                onYearChange: [],
                onPreCalendarPosition: [],
                plugins: [],
                position: "auto",
                positionElement: undefined,
                prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
                shorthandCurrentMonth: false,
                showMonths: 1,
                static: false,
                time_24hr: false,
                weekNumbers: false,
                wrap: false
            };
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "gkKU3": [
        function(require, module1, exports) {
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
                    if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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
        },
        {}
    ],
    "fxflw": [
        function(require, module1, exports) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports);
            parcelHelpers.export(exports, "english", ()=>english);
            var english = {
                weekdays: {
                    shorthand: [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ],
                    longhand: [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ]
                },
                months: {
                    shorthand: [
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
                    ],
                    longhand: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ]
                },
                daysInMonth: [
                    31,
                    28,
                    31,
                    30,
                    31,
                    30,
                    31,
                    31,
                    30,
                    31,
                    30,
                    31
                ],
                firstDayOfWeek: 0,
                ordinal: function(nth) {
                    var s = nth % 100;
                    if (s > 3 && s < 21) return "th";
                    switch(s % 10){
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th";
                    }
                },
                rangeSeparator: " to ",
                weekAbbreviation: "Wk",
                scrollTitle: "Scroll to increment",
                toggleTitle: "Click to toggle",
                amPM: [
                    "AM",
                    "PM"
                ],
                yearAriaLabel: "Year",
                monthAriaLabel: "Month",
                hourAriaLabel: "Hour",
                minuteAriaLabel: "Minute",
                time_24hr: false
            };
            exports.default = english;
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "tqkc0": [
        function(require, module1, exports) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports);
            parcelHelpers.export(exports, "pad", ()=>pad);
            parcelHelpers.export(exports, "int", ()=>int);
            parcelHelpers.export(exports, "debounce", ()=>debounce);
            parcelHelpers.export(exports, "arrayify", ()=>arrayify);
            var pad = function(number, length) {
                if (length === void 0) length = 2;
                return ("000" + number).slice(length * -1);
            };
            var int = function(bool) {
                return bool === true ? 1 : 0;
            };
            function debounce(fn, wait) {
                var t;
                return function() {
                    var _this = this;
                    var args = arguments;
                    clearTimeout(t);
                    t = setTimeout(function() {
                        return fn.apply(_this, args);
                    }, wait);
                };
            }
            var arrayify = function(obj) {
                return obj instanceof Array ? obj : [
                    obj
                ];
            };
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "eoD9c": [
        function(require, module1, exports) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports);
            parcelHelpers.export(exports, "toggleClass", ()=>toggleClass);
            parcelHelpers.export(exports, "createElement", ()=>createElement);
            parcelHelpers.export(exports, "clearNode", ()=>clearNode);
            parcelHelpers.export(exports, "findParent", ()=>findParent);
            parcelHelpers.export(exports, "createNumberInput", ()=>createNumberInput);
            parcelHelpers.export(exports, "getEventTarget", ()=>getEventTarget);
            function toggleClass(elem, className, bool) {
                if (bool === true) return elem.classList.add(className);
                elem.classList.remove(className);
            }
            function createElement(tag, className, content) {
                var e = window.document.createElement(tag);
                className = className || "";
                content = content || "";
                e.className = className;
                if (content !== undefined) e.textContent = content;
                return e;
            }
            function clearNode(node) {
                while(node.firstChild)node.removeChild(node.firstChild);
            }
            function findParent(node, condition) {
                if (condition(node)) return node;
                else if (node.parentNode) return findParent(node.parentNode, condition);
                return undefined;
            }
            function createNumberInput(inputClassName, opts) {
                var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
                if (navigator.userAgent.indexOf("MSIE 9.0") === -1) numInput.type = "number";
                else {
                    numInput.type = "text";
                    numInput.pattern = "\\d*";
                }
                if (opts !== undefined) for(var key in opts)numInput.setAttribute(key, opts[key]);
                wrapper.appendChild(numInput);
                wrapper.appendChild(arrowUp);
                wrapper.appendChild(arrowDown);
                return wrapper;
            }
            function getEventTarget(event) {
                try {
                    if (typeof event.composedPath === "function") {
                        var path = event.composedPath();
                        return path[0];
                    }
                    return event.target;
                } catch (error) {
                    return event.target;
                }
            }
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "hioKU": [
        function(require, module1, exports) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports);
            parcelHelpers.export(exports, "createDateFormatter", ()=>createDateFormatter);
            parcelHelpers.export(exports, "createDateParser", ()=>createDateParser);
            parcelHelpers.export(exports, "compareDates", ()=>compareDates);
            parcelHelpers.export(exports, "compareTimes", ()=>compareTimes);
            parcelHelpers.export(exports, "isBetween", ()=>isBetween);
            parcelHelpers.export(exports, "calculateSecondsSinceMidnight", ()=>calculateSecondsSinceMidnight);
            parcelHelpers.export(exports, "parseSeconds", ()=>parseSeconds);
            parcelHelpers.export(exports, "duration", ()=>duration);
            parcelHelpers.export(exports, "getDefaultHours", ()=>getDefaultHours);
            var _formatting = require("./formatting");
            var _options = require("../types/options");
            var _default = require("../l10n/default");
            var createDateFormatter = function(_a) {
                var _b = _a.config, config = _b === void 0 ? _options.defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? _default.english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
                return function(dateObj, frmt, overrideLocale) {
                    var locale = overrideLocale || l10n;
                    if (config.formatDate !== undefined && !isMobile) return config.formatDate(dateObj, frmt, locale);
                    return frmt.split("").map(function(c, i, arr) {
                        return _formatting.formats[c] && arr[i - 1] !== "\\" ? (0, _formatting.formats)[c](dateObj, locale, config) : c !== "\\" ? c : "";
                    }).join("");
                };
            };
            var createDateParser = function(_a) {
                var _b = _a.config, config = _b === void 0 ? _options.defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? _default.english : _c;
                return function(date, givenFormat, timeless, customLocale) {
                    if (date !== 0 && !date) return undefined;
                    var locale = customLocale || l10n;
                    var parsedDate;
                    var dateOrig = date;
                    if (date instanceof Date) parsedDate = new Date(date.getTime());
                    else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);
                    else if (typeof date === "string") {
                        var format = givenFormat || (config || _options.defaults).dateFormat;
                        var datestr = String(date).trim();
                        if (datestr === "today") {
                            parsedDate = new Date();
                            timeless = true;
                        } else if (config && config.parseDate) parsedDate = config.parseDate(date, format);
                        else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);
                        else {
                            var matched = void 0, ops = [];
                            for(var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++){
                                var token = format[i];
                                var isBackSlash = token === "\\";
                                var escaped = format[i - 1] === "\\" || isBackSlash;
                                if (_formatting.tokenRegex[token] && !escaped) {
                                    regexStr += _formatting.tokenRegex[token];
                                    var match = new RegExp(regexStr).exec(date);
                                    if (match && (matched = true)) ops[token !== "Y" ? "push" : "unshift"]({
                                        fn: _formatting.revFormat[token],
                                        val: match[++matchIndex]
                                    });
                                } else if (!isBackSlash) regexStr += ".";
                            }
                            parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
                            ops.forEach(function(_a) {
                                var fn = _a.fn, val = _a.val;
                                return parsedDate = fn(parsedDate, val, locale) || parsedDate;
                            });
                            parsedDate = matched ? parsedDate : undefined;
                        }
                    }
                    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                        config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                        return undefined;
                    }
                    if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
                    return parsedDate;
                };
            };
            function compareDates(date1, date2, timeless) {
                if (timeless === void 0) timeless = true;
                if (timeless !== false) return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
                return date1.getTime() - date2.getTime();
            }
            function compareTimes(date1, date2) {
                return 3600 * (date1.getHours() - date2.getHours()) + 60 * (date1.getMinutes() - date2.getMinutes()) + date1.getSeconds() - date2.getSeconds();
            }
            var isBetween = function(ts, ts1, ts2) {
                return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
            };
            var calculateSecondsSinceMidnight = function(hours, minutes, seconds) {
                return hours * 3600 + minutes * 60 + seconds;
            };
            var parseSeconds = function(secondsSinceMidnight) {
                var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
                return [
                    hours,
                    minutes,
                    secondsSinceMidnight - hours * 3600 - minutes * 60
                ];
            };
            var duration = {
                DAY: 86400000
            };
            function getDefaultHours(config) {
                var hours = config.defaultHour;
                var minutes = config.defaultMinute;
                var seconds = config.defaultSeconds;
                if (config.minDate !== undefined) {
                    var minHour = config.minDate.getHours();
                    var minMinutes = config.minDate.getMinutes();
                    var minSeconds = config.minDate.getSeconds();
                    if (hours < minHour) hours = minHour;
                    if (hours === minHour && minutes < minMinutes) minutes = minMinutes;
                    if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
                }
                if (config.maxDate !== undefined) {
                    var maxHr = config.maxDate.getHours();
                    var maxMinutes = config.maxDate.getMinutes();
                    hours = Math.min(hours, maxHr);
                    if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
                    if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
                }
                return {
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds
                };
            }
        },
        {
            "./formatting": "i6nZP",
            "../types/options": "bXtBt",
            "../l10n/default": "fxflw",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "i6nZP": [
        function(require, module1, exports) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports);
            parcelHelpers.export(exports, "monthToStr", ()=>monthToStr);
            parcelHelpers.export(exports, "revFormat", ()=>revFormat);
            parcelHelpers.export(exports, "tokenRegex", ()=>tokenRegex);
            parcelHelpers.export(exports, "formats", ()=>formats);
            var _utils = require("../utils");
            var doNothing = function() {
                return undefined;
            };
            var monthToStr = function(monthNumber, shorthand, locale) {
                return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
            };
            var revFormat = {
                D: doNothing,
                F: function(dateObj, monthName, locale) {
                    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
                },
                G: function(dateObj, hour) {
                    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
                },
                H: function(dateObj, hour) {
                    dateObj.setHours(parseFloat(hour));
                },
                J: function(dateObj, day) {
                    dateObj.setDate(parseFloat(day));
                },
                K: function(dateObj, amPM, locale) {
                    dateObj.setHours(dateObj.getHours() % 12 + 12 * (0, _utils.int)(new RegExp(locale.amPM[1], "i").test(amPM)));
                },
                M: function(dateObj, shortMonth, locale) {
                    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
                },
                S: function(dateObj, seconds) {
                    dateObj.setSeconds(parseFloat(seconds));
                },
                U: function(_, unixSeconds) {
                    return new Date(parseFloat(unixSeconds) * 1000);
                },
                W: function(dateObj, weekNum, locale) {
                    var weekNumber = parseInt(weekNum);
                    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
                    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
                    return date;
                },
                Y: function(dateObj, year) {
                    dateObj.setFullYear(parseFloat(year));
                },
                Z: function(_, ISODate) {
                    return new Date(ISODate);
                },
                d: function(dateObj, day) {
                    dateObj.setDate(parseFloat(day));
                },
                h: function(dateObj, hour) {
                    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
                },
                i: function(dateObj, minutes) {
                    dateObj.setMinutes(parseFloat(minutes));
                },
                j: function(dateObj, day) {
                    dateObj.setDate(parseFloat(day));
                },
                l: doNothing,
                m: function(dateObj, month) {
                    dateObj.setMonth(parseFloat(month) - 1);
                },
                n: function(dateObj, month) {
                    dateObj.setMonth(parseFloat(month) - 1);
                },
                s: function(dateObj, seconds) {
                    dateObj.setSeconds(parseFloat(seconds));
                },
                u: function(_, unixMillSeconds) {
                    return new Date(parseFloat(unixMillSeconds));
                },
                w: doNothing,
                y: function(dateObj, year) {
                    dateObj.setFullYear(2000 + parseFloat(year));
                }
            };
            var tokenRegex = {
                D: "",
                F: "",
                G: "(\\d\\d|\\d)",
                H: "(\\d\\d|\\d)",
                J: "(\\d\\d|\\d)\\w+",
                K: "",
                M: "",
                S: "(\\d\\d|\\d)",
                U: "(.+)",
                W: "(\\d\\d|\\d)",
                Y: "(\\d{4})",
                Z: "(.+)",
                d: "(\\d\\d|\\d)",
                h: "(\\d\\d|\\d)",
                i: "(\\d\\d|\\d)",
                j: "(\\d\\d|\\d)",
                l: "",
                m: "(\\d\\d|\\d)",
                n: "(\\d\\d|\\d)",
                s: "(\\d\\d|\\d)",
                u: "(.+)",
                w: "(\\d\\d|\\d)",
                y: "(\\d{2})"
            };
            var formats = {
                Z: function(date) {
                    return date.toISOString();
                },
                D: function(date, locale, options) {
                    return locale.weekdays.shorthand[formats.w(date, locale, options)];
                },
                F: function(date, locale, options) {
                    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
                },
                G: function(date, locale, options) {
                    return (0, _utils.pad)(formats.h(date, locale, options));
                },
                H: function(date) {
                    return (0, _utils.pad)(date.getHours());
                },
                J: function(date, locale) {
                    return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
                },
                K: function(date, locale) {
                    return locale.amPM[(0, _utils.int)(date.getHours() > 11)];
                },
                M: function(date, locale) {
                    return monthToStr(date.getMonth(), true, locale);
                },
                S: function(date) {
                    return (0, _utils.pad)(date.getSeconds());
                },
                U: function(date) {
                    return date.getTime() / 1000;
                },
                W: function(date, _, options) {
                    return options.getWeek(date);
                },
                Y: function(date) {
                    return (0, _utils.pad)(date.getFullYear(), 4);
                },
                d: function(date) {
                    return (0, _utils.pad)(date.getDate());
                },
                h: function(date) {
                    return date.getHours() % 12 ? date.getHours() % 12 : 12;
                },
                i: function(date) {
                    return (0, _utils.pad)(date.getMinutes());
                },
                j: function(date) {
                    return date.getDate();
                },
                l: function(date, locale) {
                    return locale.weekdays.longhand[date.getDay()];
                },
                m: function(date) {
                    return (0, _utils.pad)(date.getMonth() + 1);
                },
                n: function(date) {
                    return date.getMonth() + 1;
                },
                s: function(date) {
                    return date.getSeconds();
                },
                u: function(date) {
                    return date.getTime();
                },
                w: function(date) {
                    return date.getDay();
                },
                y: function(date) {
                    return String(date.getFullYear()).substring(2);
                }
            };
        },
        {
            "../utils": "tqkc0",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "2RVlY": [
        function(require, module1, exports) {
            "use strict";
            if (typeof Object.assign !== "function") Object.assign = function(target) {
                var args = [];
                for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
                if (!target) throw TypeError("Cannot convert undefined or null to object");
                var _loop_1 = function(source) {
                    if (source) Object.keys(source).forEach(function(key) {
                        return target[key] = source[key];
                    });
                };
                for(var _a = 0, args_1 = args; _a < args_1.length; _a++){
                    var source = args_1[_a];
                    _loop_1(source);
                }
                return target;
            };
        },
        {}
    ],
    "6230i": [
        function(require, module1, exports) {
            /**
 * Updates the display elements with the selected dates and calculates duration
 * @param {string} pickupDateId - ID of the pickup date input element
 * @param {string} returnDateId - ID of the return date input element
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports);
            parcelHelpers.export(exports, "updateDateDisplay", ()=>updateDateDisplay);
            const updateDateDisplay = ()=>{
                // Get the date input elements
                const pickupDateInput = document.querySelector("#i-pickup-date");
                const returnDateInput = document.querySelector("#i-return-date");
                // Get the display elements
                const pickupDateDisplay = document.querySelector("#v-pickup-date");
                const returnDateDisplay = document.querySelector("#v-return-date");
                const durationDisplay = document.querySelector("#v-calc-duration");
                // Update the display elements with formatted dates
                if (pickupDateInput.value) {
                    const pickupDate = new Date(pickupDateInput.value);
                    pickupDateDisplay.textContent = formatDateTime(pickupDate);
                }
                if (returnDateInput.value) {
                    const returnDate = new Date(returnDateInput.value);
                    returnDateDisplay.textContent = formatDateTime(returnDate);
                }
                // Calculate and display duration if both dates are set
                if (pickupDateInput.value && returnDateInput.value) {
                    const duration = calculateDuration(new Date(pickupDateInput.value), new Date(returnDateInput.value));
                    durationDisplay.textContent = duration;
                }
            };
            /**
 * Formats a date object to a readable string
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */ const formatDateTime = (date)=>{
                return date.toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                });
            };
            /**
 * Calculates the duration in days between two dates
 * @param {Date} pickupDate - The pickup date
 * @param {Date} returnDate - The return date
 * @returns {number} Number of days between dates
 */ const calculateDuration = (pickupDate, returnDate)=>{
                const diffTime = returnDate - pickupDate;
                const diffDays = Math.ceil(diffTime / 86400000);
                return diffDays;
            };
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "klq0i": [
        function(require, module1, exports) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports);
            parcelHelpers.export(exports, "initializeVehicleSelection", ()=>initializeVehicleSelection);
            var _calculations = require("./calculations");
            const initializeVehicleSelection = ()=>{
                const vehicleInputs = document.querySelectorAll('input[name="vehicle"]');
                vehicleInputs.forEach((input)=>{
                    input.addEventListener("change", (e)=>{
                        const vehicleName = e.target.closest(".f-radio-field").querySelector(".vehicle-name").textContent;
                        const vehiclePrice = parseFloat(e.target.value);
                        // Update vehicle display
                        document.querySelector("#v-vehicle-name").textContent = vehicleName;
                        document.querySelector("#v-calc-vehicle-price").textContent = vehiclePrice.toFixed(2);
                        (0, _calculations.calculateTotals)();
                    });
                });
            };
        },
        {
            "./calculations": "i5q6O",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "i5q6O": [
        function(require, module1, exports) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports);
            parcelHelpers.export(exports, "calculateTotals", ()=>calculateTotals);
            var _extras = require("./extras");
            // Constants
            const TAX_RATE = 0.15;
            const SELECTORS = {
                vehiclePrice: "#v-calc-vehicle-price",
                duration: "#v-calc-duration",
                deliveryFee: "#v-calc-delivery-fee",
                totalExtra: "#v-calc-total-extra",
                tax: "#v-calc-tax",
                subtotal: "#v-calc-subtotal",
                total: "#v-calc-total"
            };
            // Helper function to safely get numeric values from elements
            const getNumericValue = (selector, defaultValue = 0, parseFunc = parseFloat)=>{
                try {
                    const element = document.querySelector(selector);
                    if (!element) return defaultValue;
                    const value = parseFunc(element?.textContent || defaultValue);
                    return isNaN(value) ? defaultValue : value;
                } catch (error) {
                    return defaultValue;
                }
            };
            // Helper function to safely update element text
            const updateElement = (selector, value)=>{
                try {
                    const element = document.querySelector(selector);
                    if (element) element.textContent = value.toFixed(2);
                } catch (error) {
                // Silent error handling
                }
            };
            const calculateTotals = ()=>{
                try {
                    // Get base values
                    const baseValues = {
                        vehiclePrice: getNumericValue(SELECTORS.vehiclePrice),
                        duration: getNumericValue(SELECTORS.duration, 0, parseInt),
                        deliveryFee: getNumericValue(SELECTORS.deliveryFee)
                    };
                    // Calculate components
                    const calculations = {
                        extrasTotal: (0, _extras.calculateExtrasTotal)(),
                        vehicleCost: baseValues.vehiclePrice * baseValues.duration
                    };
                    // Calculate totals
                    const subtotal = calculations.vehicleCost + calculations.extrasTotal + baseValues.deliveryFee;
                    const tax = subtotal * TAX_RATE;
                    const total = subtotal + tax;
                    // Update all displays
                    const updates = {
                        [SELECTORS.totalExtra]: calculations.extrasTotal,
                        [SELECTORS.tax]: tax,
                        [SELECTORS.subtotal]: subtotal,
                        [SELECTORS.total]: total
                    };
                    // Batch update DOM elements
                    Object.entries(updates).forEach(([selector, value])=>{
                        updateElement(selector, value);
                    });
                    return {
                        subtotal: subtotal,
                        tax: tax,
                        total: total
                    };
                } catch (error) {
                    return {
                        subtotal: 0,
                        tax: 0,
                        total: 0
                    };
                }
            };
        },
        {
            "./extras": "4LoZB",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "4LoZB": [
        function(require, module1, exports) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports);
            parcelHelpers.export(exports, "calculateExtrasTotal", ()=>calculateExtrasTotal);
            parcelHelpers.export(exports, "initializeExtras", ()=>initializeExtras);
            parcelHelpers.export(exports, "getExtraPrice", ()=>getExtraPrice);
            var _calculations = require("./calculations");
            // Optimized EXTRAS array with proper mapping
            const EXTRAS = [
                {
                    id: 1,
                    name: "NAD-45-000.00-Excess-Waiver",
                    baseFee: 45000,
                    perDay: false,
                    displayName: "NAD 45,000.00 Excess Waiver"
                },
                {
                    id: 2,
                    name: "Tyre-Glass-Waiver",
                    baseFee: 165,
                    perDay: true,
                    displayName: "Tyre & Glass Waiver @ 165.00 p.d"
                },
                {
                    id: 3,
                    name: "Cross-Border-Charge",
                    baseFee: 100,
                    perDay: false,
                    displayName: "Cross Border Charge @ 100.00"
                },
                {
                    id: 4,
                    name: "Satellite-Phone-N-6000-Excess",
                    baseFee: 140,
                    perDay: true,
                    displayName: "Satellite Phone (N$6000 Excess) @ 140.00 p.d"
                },
                {
                    id: 5,
                    name: "Satellite-Phone-Zero-Excess",
                    baseFee: 170,
                    perDay: true,
                    displayName: "Satellite Phone (Zero Excess) @ 170.00 p.d"
                },
                {
                    id: 6,
                    name: "Camping-Equipment---Double-Cab",
                    baseFee: 170,
                    perDay: true,
                    displayName: "Camping Equipment - Double Cab @ NAD 170.00 p.d"
                },
                {
                    id: 7,
                    name: "Roof-Tents-Required",
                    baseFee: 60,
                    perDay: true,
                    displayName: "Roof Tents Required @ NAD 60.00 p.d"
                },
                {
                    id: 8,
                    name: "Engel-40L-Fridge-Freezer",
                    baseFee: 90,
                    perDay: true,
                    displayName: "Engel 40L Fridge/Freezer @ 90.00 p.d"
                },
                {
                    id: 9,
                    name: "Bedding-incl.-1x-sleeping-bag-1x-pillow",
                    baseFee: 20,
                    perDay: true,
                    displayName: "Bedding (incl. 1x sleeping bag + 1x pillow) @ 20.00 p.d"
                },
                {
                    id: 10,
                    name: "GPS-System",
                    baseFee: 75,
                    perDay: true,
                    displayName: "GPS System @ 75.00 p.d"
                },
                {
                    id: 11,
                    name: "SAT-Phone-Minutes",
                    baseFee: 825,
                    perDay: false,
                    displayName: "SAT Phone Minutes @ 825.00 once.off"
                },
                {
                    id: 12,
                    name: "Kitchen-wash-up-kit-small-dish-wash-liquid-2x-drying-cloth-2x-sponge-2x-cleaning-cloth-extras",
                    baseFee: 150,
                    perDay: false,
                    displayName: "Kitchen wash up kit @ 150.00 once.off"
                },
                {
                    id: 13,
                    name: "Ground-Tent",
                    baseFee: 0,
                    perDay: false,
                    displayName: "Free Ground Tent"
                },
                {
                    id: 14,
                    name: "Jerry-Can",
                    baseFee: 10,
                    perDay: true,
                    displayName: "Jerry Can @ 10.00 p.d"
                },
                {
                    id: 15,
                    name: "Baby-Seat",
                    baseFee: 0,
                    perDay: false,
                    displayName: "Free Baby Seat"
                }
            ].map((extra)=>({
                    ...extra,
                    key: `extra-${extra.id}`,
                    inputId: `i-extra-${extra.id}`,
                    countId: `i-count-extra-${extra.id}`,
                    displayId: `v-calc-extra-${extra.id}`,
                    // Add validation helpers
                    getElements () {
                        return {
                            checkbox: document.querySelector(`#${this.inputId}`),
                            quantity: document.querySelector(`#${this.countId}`),
                            display: document.querySelector(`#${this.displayId}`)
                        };
                    },
                    isValid () {
                        const elements = this.getElements();
                        return elements.checkbox && elements.quantity && elements.display;
                    }
                }));
            const updateExtraCalculation = (extraId)=>{
                const extra = EXTRAS.find((e)=>e.id === extraId);
                if (!extra || !extra.isValid()) return;
                const elements = extra.getElements();
                const quantity = parseInt(elements.quantity.value) || 0;
                const duration = parseInt(document.querySelector("#v-calc-duration")?.textContent) || 0;
                const cost = extra.perDay ? extra.baseFee * quantity * duration : extra.baseFee * quantity;
                elements.display.textContent = cost.toFixed(2);
                // Update total extras after individual calculation
                updateExtrasTotal();
            };
            // New function to update extras total display
            const updateExtrasTotal = ()=>{
                const totalElement = document.querySelector("#v-calc-total-extra");
                if (!totalElement) return;
                const total = EXTRAS.reduce((sum, extra)=>{
                    if (!extra.isValid()) return sum;
                    const elements = extra.getElements();
                    if (!elements.checkbox.checked || elements.display.textContent === "-") return sum;
                    return sum + parseFloat(elements.display.textContent || "0");
                }, 0);
                totalElement.textContent = total.toFixed(2);
            };
            const calculateExtrasTotal = ()=>{
                const total = EXTRAS.reduce((sum, extra)=>{
                    if (!extra.isValid()) return sum;
                    const elements = extra.getElements();
                    if (!elements.checkbox.checked || elements.display.textContent === "-") return sum;
                    return sum + parseFloat(elements.display.textContent || "0");
                }, 0);
                // Update the display element
                const totalElement = document.querySelector("#v-calc-total-extra");
                if (totalElement) totalElement.textContent = total.toFixed(2);
                return total;
            };
            const initializeExtras = ()=>{
                EXTRAS.forEach((extra)=>{
                    if (!extra.isValid()) return;
                    const elements = extra.getElements();
                    elements.checkbox.addEventListener("change", ()=>{
                        if (elements.checkbox.checked) {
                            elements.quantity.value = elements.quantity.value || "1";
                            updateExtraCalculation(extra.id);
                        } else {
                            elements.quantity.value = "";
                            elements.display.textContent = "-";
                            updateExtrasTotal();
                        }
                        (0, _calculations.calculateTotals)();
                    });
                    elements.quantity.addEventListener("change", ()=>{
                        if (elements.checkbox.checked) {
                            updateExtraCalculation(extra.id);
                            (0, _calculations.calculateTotals)();
                        }
                    });
                });
                updateExtrasTotal();
            };
            const getExtraPrice = (extraName)=>{
                const extra = EXTRAS.find((e)=>e.name === extraName);
                return extra ? extra.baseFee : 0;
            };
        },
        {
            "./calculations": "i5q6O",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "5WDZW": [
        function(require, module1, exports) {
            /**
 * API Exchange Module
 * Handles currency conversion functionality with real-time exchange rates
 * @module apiExchange
 */ /**
 * Exchange rates configuration
 * @constant {Object}
 * @property {number} NAD - Base currency (Namibian Dollar)
 * @property {number} USD - US Dollar rate
 * @property {number} EUR - Euro rate
 * @property {number} GBP - British Pound rate
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports);
            parcelHelpers.export(exports, "initializeCurrencyToggle", ()=>initializeCurrencyToggle);
            parcelHelpers.export(exports, "updateCurrencyDisplay", ()=>updateCurrencyDisplay);
            /**
 * Optimize the fetchExchangeRates function with better error handling
 * @exports fetchExchangeRates
 * @param {string} baseCurrency - The base currency code
 * @returns {Promise<Object>} - The exchange rates for the specified base currency
 * @throws {Error} If an error occurs while fetching exchange rates
 */ parcelHelpers.export(exports, "fetchExchangeRates", ()=>fetchExchangeRates);
            let EXCHANGE_RATES = {
                NAD: 1,
                USD: 0.054,
                EUR: 0.049,
                GBP: 0.042
            };
            /**
 * Currency display configuration
 * @constant {Object}
 */ const CURRENCY_CONFIG = {
                NAD: {
                    symbol: "N$",
                    decimals: 2
                },
                USD: {
                    symbol: "$",
                    decimals: 2
                },
                EUR: {
                    symbol: "\u20AC",
                    decimals: 2
                },
                GBP: {
                    symbol: "\xa3",
                    decimals: 2
                }
            };
            // At the top of the file, add rate update tracking
            const RATE_UPDATE_INTERVAL = 3600000; // 1 hour in milliseconds
            let lastRateUpdate = 0;
            // Add rate updating functionality
            async function updateExchangeRates() {
                const now = Date.now();
                if (now - lastRateUpdate < RATE_UPDATE_INTERVAL) return; // Skip if rates were updated recently
                const rates = await fetchExchangeRates();
                if (rates) {
                    EXCHANGE_RATES = {
                        ...rates
                    };
                    lastRateUpdate = now;
                }
            }
            const initializeCurrencyToggle = async ()=>{
                try {
                    await updateExchangeRates(); // Get fresh rates on initialization
                    const currencyInputs = document.querySelectorAll('input[name="currency-group"]');
                    if (!currencyInputs.length) throw new Error("No currency inputs found");
                    const nadRadio = document.getElementById("i-currency-nad");
                    if (nadRadio) {
                        nadRadio.checked = true;
                        updateCurrencyDisplay("NAD");
                    }
                    // Use event delegation for better performance
                    const currencyGroup = document.querySelector('[name="currency-group"]').closest("form");
                    if (currencyGroup) currencyGroup.addEventListener("change", (e)=>{
                        if (e.target.name === "currency-group") handleCurrencyChange(e);
                    });
                } catch (error) {
                    console.error("Failed to initialize currency toggle:", error);
                    showErrorMessage("Currency initialization failed");
                }
            };
            /**
 * Handles currency change events
 * @param {Event} e - Change event
 * @private
 */ function handleCurrencyChange(e) {
                const newCurrency = e.target.value;
                updateCurrencyDisplay(newCurrency);
            }
            const updateCurrencyDisplay = (newCurrency)=>{
                try {
                    validateCurrency(newCurrency);
                    updatePriceElements(newCurrency);
                    updateCurrencySymbols(newCurrency);
                } catch (error) {
                    console.error("Error updating currency:", error);
                    showErrorMessage(`Failed to update currency: ${error.message}`);
                }
            };
            /**
 * Shows error message to user
 * @param {string} message - Error message to display
 * @private
 */ function showErrorMessage(message) {
                const errorAlert = document.querySelector(".error-alert-bg");
                if (errorAlert) {
                    errorAlert.querySelector(".error-alert-text").textContent = message;
                    errorAlert.classList.remove("is-hidden");
                    setTimeout(()=>errorAlert.classList.add("is-hidden"), 5000);
                }
            }
            /**
 * Validates the currency code
 * @param {string} currency - The currency code to validate
 * @throws {Error} If currency is invalid
 */ function validateCurrency(currency) {
                const rate = EXCHANGE_RATES[currency];
                if (!rate) throw new Error(`Invalid currency: ${currency}`);
            }
            /**
 * Updates all price elements with converted values
 * @param {string} currency - The currency to convert to
 */ function updatePriceElements(currency) {
                const rate = EXCHANGE_RATES[currency];
                const config = CURRENCY_CONFIG[currency];
                // First, handle all individual price elements
                document.querySelectorAll('[id^="v-calc-"]').forEach((element)=>{
                    // Skip non-price elements
                    if (element.id === "v-calc-duration") return;
                    if (element.textContent === "-") return;
                    // Store original NAD value on first conversion
                    if (!element.hasAttribute("data-original-price") && element.textContent !== "-") element.setAttribute("data-original-price", element.textContent);
                    // Get the original NAD price
                    const originalPrice = parseFloat(element.getAttribute("data-original-price"));
                    if (!isNaN(originalPrice)) {
                        // Handle different element types
                        if (element.id === "v-calc-vehicle-price") {
                            const convertedPrice = (originalPrice * rate).toFixed(config.decimals);
                            element.textContent = convertedPrice;
                        } else if (element.id.startsWith("v-calc-extra-")) {
                            const convertedPrice = (originalPrice * rate).toFixed(config.decimals);
                            element.textContent = convertedPrice;
                        } else if (element.id === "v-calc-delivery-fee") {
                            const convertedPrice = (originalPrice * rate).toFixed(config.decimals);
                            element.textContent = convertedPrice;
                        }
                    }
                });
                // Then, recalculate totals after all individual prices are converted
                calculateTotalExtras(rate, config.decimals);
                calculateFinalTotals(rate, config.decimals);
            }
            /**
 * Calculate total extras in the current currency
 * @param {number} rate - Current exchange rate
 * @param {number} decimals - Number of decimal places
 */ function calculateTotalExtras(rate, decimals) {
                const totalExtrasElement = document.querySelector("#v-calc-total-extra");
                if (!totalExtrasElement) return;
                let totalExtras = 0;
                document.querySelectorAll('[id^="v-calc-extra-"]').forEach((extraElement)=>{
                    if (extraElement.textContent !== "-") {
                        const originalPrice = parseFloat(extraElement.getAttribute("data-original-price"));
                        if (!isNaN(originalPrice)) totalExtras += originalPrice;
                    }
                });
                // Convert total extras to current currency
                const convertedTotal = (totalExtras * rate).toFixed(decimals);
                totalExtrasElement.textContent = convertedTotal;
                // Store original NAD value
                if (!totalExtrasElement.hasAttribute("data-original-price")) totalExtrasElement.setAttribute("data-original-price", totalExtras.toString());
            }
            /**
 * Calculate final totals (subtotal, tax, total) in the current currency
 * @param {number} rate - Current exchange rate
 * @param {number} decimals - Number of decimal places
 */ function calculateFinalTotals(rate, decimals) {
                const elements = {
                    subtotal: document.querySelector("#v-calc-subtotal"),
                    tax: document.querySelector("#v-calc-tax"),
                    total: document.querySelector("#v-calc-total")
                };
                // Get original NAD values
                const vehiclePrice = parseFloat(document.querySelector("#v-calc-vehicle-price")?.getAttribute("data-original-price") || "0");
                const duration = parseInt(document.querySelector("#v-calc-duration")?.textContent || "0");
                const deliveryFee = parseFloat(document.querySelector("#v-calc-delivery-fee")?.getAttribute("data-original-price") || "0");
                const totalExtras = parseFloat(document.querySelector("#v-calc-total-extra")?.getAttribute("data-original-price") || "0");
                // Calculate in NAD first
                const subtotalNAD = vehiclePrice * duration + deliveryFee + totalExtras;
                const taxNAD = subtotalNAD * 0.15; // 15% tax rate
                const totalNAD = subtotalNAD + taxNAD;
                // Convert and display
                if (elements.subtotal) {
                    elements.subtotal.textContent = (subtotalNAD * rate).toFixed(decimals);
                    elements.subtotal.setAttribute("data-original-price", subtotalNAD.toString());
                }
                if (elements.tax) {
                    elements.tax.textContent = (taxNAD * rate).toFixed(decimals);
                    elements.tax.setAttribute("data-original-price", taxNAD.toString());
                }
                if (elements.total) {
                    elements.total.textContent = (totalNAD * rate).toFixed(decimals);
                    elements.total.setAttribute("data-original-price", totalNAD.toString());
                }
            }
            /**
 * Updates all currency symbols in the UI
 * @param {string} currency - The new currency symbol to display
 */ function updateCurrencySymbols(currency) {
                document.querySelectorAll(".currency-symbol").forEach((element)=>{
                    element.textContent = currency;
                });
            }
            const API_KEY = "f8eb8575dc0df45769f9bc6c"; // Replace with your actual API key
            const BASE_URL = "https://v6.exchangerate-api.com/v6";
            async function fetchExchangeRates(baseCurrency = "NAD") {
                try {
                    const controller = new AbortController();
                    const timeoutId = setTimeout(()=>controller.abort(), 5000); // 5 second timeout
                    const response = await fetch(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`, {
                        signal: controller.signal
                    });
                    clearTimeout(timeoutId);
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    const data = await response.json();
                    if (data.result === "success") return data.conversion_rates;
                    else throw new Error(data["error-type"] || "Failed to fetch exchange rates");
                } catch (error) {
                    if (error.name === "AbortError") console.error("Request timed out");
                    else console.error("Error fetching exchange rates:", error);
                    return null;
                }
            }
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "iJK5J": [
        function(require, module1, exports) {
            /**
 * API Choice Module
 * Handles country selection functionality using the REST Countries API
 * @module apiChoice
 */ /**
 * Fetches country data from the REST Countries API
 * @async
 * @returns {Promise<Array>} Array of country objects, or empty array if fetch fails
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports);
            parcelHelpers.export(exports, "populateCountrySelect", ()=>populateCountrySelect);
            async function fetchCountries() {
                const API_URL = "https://restcountries.com/v3.1/all";
                try {
                    const response = await fetch(API_URL);
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    const data = await response.json();
                    return data;
                } catch (error) {
                    console.error("Error fetching countries:", error);
                    return [];
                }
            }
            const populateCountrySelect = async ()=>{
                const countrySelect = document.querySelector("#i-country");
                if (!countrySelect) {
                    console.warn("Country select element not found");
                    return;
                }
                try {
                    // Initialize Choices.js dropdown with configuration
                    const choices = new Choices(countrySelect, {
                        searchEnabled: true,
                        searchPlaceholderValue: "Search for a country",
                        placeholder: true,
                        placeholderValue: "Select a country",
                        removeItemButton: true,
                        silent: true
                    });
                    // Fetch and format country data
                    const countries = await fetchCountries();
                    const formattedChoices = formatCountryChoices(countries);
                    // Update the dropdown with formatted choices
                    choices.setChoices(formattedChoices, "value", "label", true);
                } catch (error) {
                    console.error("Error initializing country select:", error);
                }
            };
            /**
 * Formats country data for the Choices.js dropdown
 * @param {Array} countries - Array of country objects from the API
 * @returns {Array} Formatted array of choice objects
 */ function formatCountryChoices(countries) {
                return countries.sort((a, b)=>a.name.common.localeCompare(b.name.common)).map((country)=>({
                        value: country.cca2,
                        label: country.name.common
                    }));
            }
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ]
}, [
    "lQsD6",
    "5AKj5"
], "5AKj5", "parcelRequiree4b1");

});


parcelRequire("55CHf");

//# sourceMappingURL=app.js.map
