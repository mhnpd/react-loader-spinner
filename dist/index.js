(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "ansi-colors", "./loader"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("ansi-colors"), require("./loader"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.ansiColors, global.loader);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _ansiColors, _loader) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Loader;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var componentNames = ["Audio", "BallTriangle", "Bars", "Circles", "Grid", "Hearts", "Oval", "Puff", "Rings", "TailSpin", "ThreeDots", "Watch", "RevolvingDot", "Triangle", "Plane", "MutatingDots", "CradleLoader"];

  function componentName(type) {
    if (componentNames.includes(type)) {
      return _loader.Spinner[type];
    }
    return _loader.Spinner.Audio;
  }

  function Loader(props) {
    return _react2.default.createElement(
      "div",
      { "aria-busy": "true", className: props.className, style: props.style },
      _react2.default.createElement(componentName(props.type), _extends({}, props))
    );
  }

  Loader.propTypes = {
    type: _propTypes2.default.oneOf([].concat(componentNames)),
    style: _propTypes2.default.objectOf(_propTypes2.default.string),
    className: _propTypes2.default.string,
    visible: _propTypes2.default.bool
  };

  Loader.defaultProps = {
    type: "Audio",
    style: {},
    className: "",
    visible: true
  };
});