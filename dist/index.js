(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./loader/Audio", "./loader/BallTriangle", "./loader/Bars", "./loader/Circles", "./loader/Grid", "./loader/Hearts", "./loader/Oval", "./loader/Puff", "./loader/Rings", "./loader/TailSpin", "./loader/ThreeDots", "./loader/Watch", "./loader/RevolvingDot", "./loader/CradleLoader", "./loader/Triangle", "./loader/Plane", "./loader/MutatingDot"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("./loader/Audio"), require("./loader/BallTriangle"), require("./loader/Bars"), require("./loader/Circles"), require("./loader/Grid"), require("./loader/Hearts"), require("./loader/Oval"), require("./loader/Puff"), require("./loader/Rings"), require("./loader/TailSpin"), require("./loader/ThreeDots"), require("./loader/Watch"), require("./loader/RevolvingDot"), require("./loader/CradleLoader"), require("./loader/Triangle"), require("./loader/Plane"), require("./loader/MutatingDot"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Audio, global.BallTriangle, global.Bars, global.Circles, global.Grid, global.Hearts, global.Oval, global.Puff, global.Rings, global.TailSpin, global.ThreeDots, global.Watch, global.RevolvingDot, global.CradleLoader, global.Triangle, global.Plane, global.MutatingDot);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _Audio, _BallTriangle, _Bars, _Circles, _Grid, _Hearts, _Oval, _Puff, _Rings, _TailSpin, _ThreeDots, _Watch, _RevolvingDot, _CradleLoader, _Triangle, _Plane, _MutatingDot) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Loader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.svgRenderer = function (type) {
        switch (type) {
          case "Audio":
            return _react2.default.createElement(_Audio.Audio, _this.props);
          case "Ball-Triangle":
            return _react2.default.createElement(_BallTriangle.BallTriangle, _this.props);
          case "Bars":
            return _react2.default.createElement(_Bars.Bars, _this.props);
          case "Circles":
            return _react2.default.createElement(_Circles.Circles, _this.props);
          case "Grid":
            return _react2.default.createElement(_Grid.Grid, _this.props);
          case "Hearts":
            return _react2.default.createElement(_Hearts.Hearts, _this.props);
          case "Oval":
            return _react2.default.createElement(_Oval.Oval, _this.props);
          case "Puff":
            return _react2.default.createElement(_Puff.Puff, _this.props);
          case "Rings":
            return _react2.default.createElement(_Rings.Rings, _this.props);
          case "TailSpin":
            return _react2.default.createElement(_TailSpin.TailSpin, _this.props);
          case "ThreeDots":
            return _react2.default.createElement(_ThreeDots.ThreeDots, _this.props);
          case "Watch":
            return _react2.default.createElement(_Watch.Watch, _this.props);
          case "RevolvingDot":
            return _react2.default.createElement(_RevolvingDot.RevolvingDot, _this.props);
          case "CradleLoader":
            return _react2.default.createElement(_CradleLoader.CradleLoader, _this.props);
          case "Triangle":
            return _react2.default.createElement(_Triangle.Triangle, _this.props);
          case "Plane":
            return _react2.default.createElement(_Plane.Plane, _this.props);
          case "MutatingDot":
            return _react2.default.createElement(_MutatingDot.MutatingDot, _this.props);
          default:
            return _react2.default.createElement(
              "div",
              { "aria-busy": "true" },
              _react2.default.createElement(
                "span",
                { style: { color: "Green" } },
                "Loading content, please wait."
              ),
              _react2.default.createElement(
                "small",
                null,
                _react2.default.createElement(
                  "i",
                  null,
                  _react2.default.createElement("br", null),
                  "Note:No specific svg type exist"
                )
              )
            );
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Loader, [{
      key: "render",
      value: function render() {
        var _props = this.props,
            className = _props.className,
            style = _props.style,
            type = _props.type;

        return _react2.default.createElement(
          "div",
          { "aria-busy": "true", className: className, style: style },
          this.svgRenderer(type)
        );
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  Loader.propTypes = {
    color: _propTypes2.default.string,
    type: _propTypes2.default.string,
    height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
  };
  Loader.defaultProps = {
    color: "#71238",
    type: "Audio",
    height: 80,
    width: 80,
    label: 'Loading content, please wait.'
  };
  exports.default = Loader;
});