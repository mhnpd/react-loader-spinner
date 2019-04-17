(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Bars = mod.exports;
  }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Bars = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Bars = exports.Bars = function Bars(svg) {
    return _react2.default.createElement(
      "svg",
      {
        width: svg.width,
        height: svg.height,
        fill: svg.color,
        viewBox: "0 0 135 140",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": svg.label
      },
      _react2.default.createElement(
        "rect",
        { y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.5s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.5s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "30", y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.25s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.25s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "60", width: "15", height: "140", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "90", y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.25s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.25s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "120", y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.5s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.5s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      )
    );
  };
});