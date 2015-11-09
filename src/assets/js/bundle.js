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
        }
    }, {
        key: 'bindCollapseOnClick',
        value: function bindCollapseOnClick() {
            var _this = this;

            $(this.element).on('click', function () {
                if ($(window).width() < _this.breakPoint) {
                    var collapse = $(_this.element).find('.collapse__content');
                    $(_this.element).hasClass('open') ? collapse.slideUp() : collapse.slideDown();
                    $(_this.element).toggleClass('open');
                }
            });
        }
    }]);

    return Collapse;
})();

exports['default'] = Collapse;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function doneResizing() {
    $.each($('[data-collapse]'), function (key, value) {
        if ($(window).width() > 400) {
            $(value).find('.collapse__content').slideDown();
        }
    });
}

function bindOnResize() {
    var resizeId = undefined;
    $(window).on('resize', function () {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing(), 500);
    });
}

exports['default'] = function () {
    bindOnResize();
};

module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ModulesCollapseCollapseJs = require('./Modules/Collapse/Collapse.js');

var _ModulesCollapseCollapseJs2 = _interopRequireDefault(_ModulesCollapseCollapseJs);

var _ModulesWindowResizeJs = require('./Modules/Window/Resize.js');

var _ModulesWindowResizeJs2 = _interopRequireDefault(_ModulesWindowResizeJs);

$.each($('[data-collapse]'), function (key, value) {
    new _ModulesCollapseCollapseJs2['default'](value);
});

(0, _ModulesWindowResizeJs2['default'])();

},{"./Modules/Collapse/Collapse.js":1,"./Modules/Window/Resize.js":2}]},{},[3]);
