(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Collapse = (function () {
    function Collapse(element) {
        _classCallCheck(this, Collapse);

        this.breakPoint = 400;
        this.element = element;

        this.init();
    }

    _createClass(Collapse, [{
        key: 'init',
        value: function init() {
            this.bindCollapseOnClick();
            this.bindOnResize();
        }
    }, {
        key: 'bindOnResize',
        value: function bindOnResize() {
            var _this = this;

            $(window).on('resize', function () {
                clearTimeout(resizeId);
                resizeId = setTimeout(_this.doneResizing(), 500);
            });
        }
    }, {
        key: 'doneResizing',
        value: function doneResizing() {
            if ($(window).width() < this.breakPoint) {
                console.log('done resizing');
            }
        }
    }, {
        key: 'bindCollapseOnClick',
        value: function bindCollapseOnClick() {
            if ($(window).width() < this.breakPoint) {
                //do stuff
            }
        }
    }]);

    return Collapse;
})();

exports['default'] = function () {
    $.each($('[data-collapse]'), function (key, value) {
        new Collapse(value);
    });
};

module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ModulesCollapseCollapseJs = require('./Modules/Collapse/Collapse.js');

var _ModulesCollapseCollapseJs2 = _interopRequireDefault(_ModulesCollapseCollapseJs);

},{"./Modules/Collapse/Collapse.js":1}]},{},[2]);
