// 还原的webpack打包后的文件
(function(modules) { // webpackBootstrap
  // The module cache
  var installerModules = {};
  
  function __webpack_require__(moduleId) {// moduleId就是path
    // Check if module is in cache
    if (installerModules[moduleId]) {
      return installerModules[moduleId].exports;
    }
    // Create a new module(and put it into the cache)
    var module = installerModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    }

    // Execute the module function         
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    
    // Flag the module as loaded
    module.l = true;
    
    // Return the exports of the module
    return module.exports;
  }

  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules;
  
  // expose the module cache
  __webpack_require__.c = installerModules;

 	// define getter function for harmony exports
  __webpack_require__.d = function(exports, name, getter) {
    if(!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  // define __esModule on exports
  __webpack_require__.r = function(exports) {
    if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };

 	__webpack_require__.t = function(value, mode) {
    if(mode & 1) value = __webpack_require__(value);
    if(mode & 8) return value;
    if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
    return ns;
  }

  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function(module) {
    var getter = module && module.__esModule ?
    function getDefault() { return module['default']; } :
    function getModuleExports() { return module; };
    __webpack_require__.d(getter, 'a', getter);
  	return getter;
  };

  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

  // __webpack_public_path__
  __webpack_require__.p = "";
   
  // Load entry module and return exports
  return __webpack_require__(__webpack_require__.s = "./index.js");
})
({
  "./index.js": (function(module, exports, __webpack_modules__) {
    console.log('srart require')
    var lib = __webpack_require__(/*! ./lib.js */ "./lib.js")
    console.log('end require', lib)
    lib.additional = 'test'
  }),
  "./lib.js": (function(module, exports) {
    console.log('hello, geekbang')
    exports.hello = 'world'
    exports.add = function(a, b) {
      return a + b
    }
    exports.geekbang = { hello: 'world' }
      module.exports = function minus(a, b) {
    }
    
    setTimeout(() => {
      console.log(exports);
    }, 2000)
  })
})