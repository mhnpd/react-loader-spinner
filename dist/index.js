(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./loader/Audio", "./loader/BallTriangle", "./loader/Bars", "./loader/Circles", "./loader/Grid", "./loader/Hearts", "./loader/Oval", "./loader/Puff", "./loader/Rings", "./loader/TailSpin", "./loader/ThreeDots", "./loader/Watch", "./loader/RevolvingDot", "./loader/CradleLoader", "./loader/Triangle", "./loader/Plane", "./loader/MutatingDot", "./loader"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("./loader/Audio"), require("./loader/BallTriangle"), require("./loader/Bars"), require("./loader/Circles"), require("./loader/Grid"), require("./loader/Hearts"), require("./loader/Oval"), require("./loader/Puff"), require("./loader/Rings"), require("./loader/TailSpin"), require("./loader/ThreeDots"), require("./loader/Watch"), require("./loader/RevolvingDot"), require("./loader/CradleLoader"), require("./loader/Triangle"), require("./loader/Plane"), require("./loader/MutatingDot"), require("./loader"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Audio, global.BallTriangle, global.Bars, global.Circles, global.Grid, global.Hearts, global.Oval, global.Puff, global.Rings, global.TailSpin, global.ThreeDots, global.Watch, global.RevolvingDot, global.CradleLoader, global.Triangle, global.Plane, global.MutatingDot, global.loader);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _Audio, _BallTriangle, _Bars, _Circles, _Grid, _Hearts, _Oval, _Puff, _Rings, _TailSpin, _ThreeDots, _Watch, _RevolvingDot, _CradleLoader, _Triangle, _Plane, _MutatingDot, _loader) {
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

  function Load(Component) {
    return function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          var _this2 = this;

          return _react2.default.createElement(Loader, { render: function render(mouse) {
              return _react2.default.createElement(Component, _extends({}, _this2.props, { mouse: mouse }));
            } });
        }
      }]);

      return _class;
    }(_react2.default.Component);
  }

  var Loader = function (_React$Component2) {
    _inherits(Loader, _React$Component2);

    function Loader() {
      var _ref;

      var _temp, _this3, _ret;

      _classCallCheck(this, Loader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this3), _this3.svgRenderer = function (type) {
        switch (type) {
          case "Audio":
            return _react2.default.createElement(_Audio.Audio, _this3.props);
          case "Ball-Triangle":
            return _react2.default.createElement(_BallTriangle.BallTriangle, _this3.props);
          case "Bars":
            return _react2.default.createElement(_Bars.Bars, _this3.props);
          case "Circles":
            return _react2.default.createElement(_Circles.Circles, _this3.props);
          case "Grid":
            return _react2.default.createElement(_Grid.Grid, _this3.props);
          case "Hearts":
            return _react2.default.createElement(_Hearts.Hearts, _this3.props);
          case "Oval":
            return _react2.default.createElement(_Oval.Oval, _this3.props);
          case "Puff":
            return _react2.default.createElement(_Puff.Puff, _this3.props);
          case "Rings":
            return _react2.default.createElement(_Rings.Rings, _this3.props);
          case "TailSpin":
            return _react2.default.createElement(_TailSpin.TailSpin, _this3.props);
          case "ThreeDots":
            return _react2.default.createElement(_ThreeDots.ThreeDots, _this3.props);
          case "Watch":
            return _react2.default.createElement(_Watch.Watch, _this3.props);
          case "RevolvingDot":
            return _react2.default.createElement(_RevolvingDot.RevolvingDot, _this3.props);
          case "CradleLoader":
            return _react2.default.createElement(_CradleLoader.CradleLoader, _this3.props);
          case "Triangle":
            return _react2.default.createElement(_Triangle.Triangle, _this3.props);
          case "Plane":
            return _react2.default.createElement(_Plane.Plane, _this3.props);
          case "MutatingDot":
            return _react2.default.createElement(_MutatingDot.MutatingDot, _this3.props);
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
      }, _temp), _possibleConstructorReturn(_this3, _ret);
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
          _react2.default.createElement(_loader.Spinner[type])
        );
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  Loader.propTypes = {
    color: _propTypes2.default.string,
    type: _propTypes2.default.string,
    height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    label: _propTypes2.default.string
  };
  Loader.defaultProps = {
    color: "#71238",
    type: "Audio",
    height: 80,
    width: 80,
    label: "Loading content, please wait."
  };
  exports.default = Loader;
});