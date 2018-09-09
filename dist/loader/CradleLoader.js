(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./css/CradleLoader.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./css/CradleLoader.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.CradleLoader);
    global.CradleLoader = mod.exports;
  }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CradleLoader = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var CradleLoader = exports.CradleLoader = function CradleLoader() {
    return _react2.default.createElement(
      "div",
      { "aria-busy": "true", "aria-label": "Loading", role: "progressbar", className: "container" },
      _react2.default.createElement(
        "div",
        { className: "swing" },
        _react2.default.createElement("div", { className: "swing-l" }),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", { className: "swing-r" })
      ),
      _react2.default.createElement(
        "div",
        { className: "shadow" },
        _react2.default.createElement("div", { className: "shadow-l" }),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", { className: "shadow-r" })
      )
    );
  };
});