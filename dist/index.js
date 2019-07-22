(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./loader"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("./loader"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.loader);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _loader) {
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

  function Loader(props) {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "div",
        { "aria-busy": "true", className: props.className, style: props.style },
        _react2.default.createElement(_loader.Spinner[props.type], _extends({}, props))
      )
    );
  }

  Loader.propTypes = {
    type: _propTypes2.default.string,
    style: _propTypes2.default.objectOf(_propTypes2.default.string),
    className: _propTypes2.default.string
  };

  Loader.defaultProps = {
    // color: "#71238",
    type: "Audio",
    style: {},
    className: ""
    // height: 80,
    // width: 80,
    // label: "Loading content, please wait."
  };
});