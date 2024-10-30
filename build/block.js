/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(8);
var defined = __webpack_require__(9);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(36);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_adv_divider__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_dualheading__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_progress_bar__ = __webpack_require__(16);




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);



var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    ColorPalette = _wp$editor.ColorPalette,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextareaControl = _wp$components.TextareaControl,
    TextControl = _wp$components.TextControl,
    DropdownMenu = _wp$components.DropdownMenu,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    TabPanel = _wp$components.TabPanel,
    ToggleControl = _wp$components.ToggleControl,
    Dashicon = _wp$components.Dashicon,
    Tooltip = _wp$components.Tooltip;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('wts-bp-gb/advanced-divider', {
    // Block Title
    title: __('BP - Advanced Divider'),
    // Block Description
    description: __('Advanced Divider'),
    // Block Category
    category: 'layout',
    // Block Icon
    icon: 'image-flip-vertical',

    keywords: [__('Divider'), __('Text Separator'), __('Separator')],

    attributes: {
        textSeparator: {
            type: 'string'
        },
        text_html_tag: {
            type: 'string',
            default: 'h1'
        },
        text_color: {
            type: 'string'
        },
        text_align: {
            type: 'string',
            default: 'center'
        },
        text_size: {
            type: 'number',
            default: 18
        },
        divider_style: {
            type: 'string',
            default: 'solid'
        },
        divider_weight: {
            type: 'number',
            default: 1
        },
        divider_width: {
            type: 'number',
            default: 100
        },
        divider_color: {
            type: 'string'
        },
        divider_align: {
            type: 'string',
            default: 'center'
        }
    },
    edit: function edit(props) {
        var onChangeText = function onChangeText(value) {
            props.setAttributes({ textSeparator: value });
        };
        var onChangeTag = function onChangeTag(value) {
            props.setAttributes({ text_html_tag: value });
        };
        var onChangeTextColor = function onChangeTextColor(value) {
            props.setAttributes({ text_color: value });
        };
        var onChangeTextAlign = function onChangeTextAlign(value) {
            props.setAttributes({ text_align: value });
        };
        var onChangeTextSize = function onChangeTextSize(value) {
            props.setAttributes({ text_size: value });
        };
        var onChangeDivider = function onChangeDivider(value) {
            props.setAttributes({ divider_style: value });
        };
        var onChangeDividerWeight = function onChangeDividerWeight(value) {
            props.setAttributes({ divider_weight: value });
        };
        var onChangeDividerWidth = function onChangeDividerWidth(value) {
            props.setAttributes({ divider_width: value });
        };
        var onChangeDividerColor = function onChangeDividerColor(colorValue) {
            props.setAttributes({ divider_color: colorValue });
        };
        var onChangeDividerAlign = function onChangeDividerAlign(value) {
            if (value == 'center') {
                props.setAttributes({ divider_align: 'none' });
            } else {
                props.setAttributes({ divider_align: value });
            }
        };
        var maindivclass = "wts-bpg-textseparator title-yes sep-align-" + props.attributes.text_align;
        var text_style = "color:" + props.attributes.text_color + ", font-size: " + props.attributes.text_size;
        return [!!props.isSelected && wp.element.createElement(
            InspectorControls,
            null,
            wp.element.createElement(
                PanelBody,
                { title: __('Text Settings') },
                wp.element.createElement(SelectControl, {
                    label: __('Html Tag'),
                    options: [{ value: 'h1', label: 'H1' }, { value: 'h2', label: 'H2' }, { value: 'h3', label: 'H3' }, { value: 'h4', label: 'H4' }, { value: 'h5', label: 'H5' }, { value: 'h6', label: 'H6' }],
                    onChange: onChangeTag,
                    value: props.attributes.text_html_tag
                }),
                wp.element.createElement(ColorPalette, { onChange: onChangeTextColor, label: 'Text Color' }),
                wp.element.createElement(AlignmentToolbar, { onChange: onChangeTextAlign }),
                wp.element.createElement(RangeControl, { label: 'Text Size', min: 2, max: 50, onChange: onChangeTextSize, value: props.attributes.text_size })
            ),
            wp.element.createElement(
                PanelBody,
                { title: __('Divider Settings'), initialOpen: false },
                wp.element.createElement(SelectControl, {
                    label: __('Divider Style'),
                    options: [{ value: 'solid', label: 'Solid' }, { value: 'double', label: 'Double' }, { value: 'dotted', label: 'Dotted' }, { value: 'dashed', label: 'Dashed' }],
                    onChange: onChangeDivider,
                    value: props.attributes.divider_style
                }),
                wp.element.createElement(RangeControl, { label: 'Divider Weight', min: 1, max: 10, 'default': '1', onChange: onChangeDividerWeight, value: props.attributes.divider_weight }),
                wp.element.createElement(RangeControl, { label: 'Divider Width', min: 1, max: 100, 'default': '100', onChange: onChangeDividerWidth, value: props.attributes.divider_width }),
                wp.element.createElement(ColorPalette, { onChange: onChangeDividerColor }),
                wp.element.createElement(AlignmentToolbar, { onChange: onChangeDividerAlign })
            )
        ), wp.element.createElement(
            'div',
            { className: props.className, style: { overflow: 'hidden' } },
            wp.element.createElement(
                'div',
                { className: maindivclass, style: { width: props.attributes.divider_width + "%", float: props.attributes.divider_align } },
                wp.element.createElement(
                    'div',
                    { className: 'bpg-sep-holder sep-left' },
                    wp.element.createElement('div', { className: 'bpg-sep-lines', style: { borderTopWidth: props.attributes.divider_weight + "px", borderTopStyle: props.attributes.divider_style, borderTopColor: props.attributes.divider_color } })
                ),
                wp.element.createElement(RichText, { tagName: props.attributes.text_html_tag, placeholder: __('Write a Heading'),
                    value: props.attributes.textSeparator, className: 'bpg-separator-title', onChange: onChangeText,
                    style: { color: props.attributes.text_color, fontSize: props.attributes.text_size + 'px' } }),
                wp.element.createElement(
                    'div',
                    { className: 'bpg-sep-holder sep-right' },
                    wp.element.createElement('div', { className: 'bpg-sep-lines', style: { borderTopWidth: props.attributes.divider_weight + "px", borderTopStyle: props.attributes.divider_style, borderTopColor: props.attributes.divider_color } })
                )
            ),
            wp.element.createElement('div', { className: 'clr' })
        )];
    },

    save: function save(props) {
        var divClass = "wts-bpg-textseparator title-yes sep-align-" + props.attributes.text_align;
        return wp.element.createElement(
            'div',
            { className: props.className, style: { overflow: 'hidden' } },
            wp.element.createElement(
                'div',
                { className: divClass, style: { width: props.attributes.divider_width + "%", float: props.attributes.divider_align } },
                wp.element.createElement(
                    'div',
                    { className: 'bpg-sep-holder sep-left' },
                    wp.element.createElement('div', { className: 'bpg-sep-lines', style: { borderTopWidth: props.attributes.divider_weight + "px", borderTopStyle: props.attributes.divider_style, borderTopColor: props.attributes.divider_color } })
                ),
                wp.element.createElement(RichText.Content, { tagName: props.attributes.text_html_tag, className: 'bpg-separator-title', style: { color: props.attributes.text_color, fontSize: props.attributes.text_size + "px    " }, value: props.attributes.textSeparator }),
                wp.element.createElement(
                    'div',
                    { className: 'bpg-sep-holder sep-right' },
                    wp.element.createElement('div', { className: 'bpg-sep-lines', style: { borderTopWidth: props.attributes.divider_weight + "px", borderTopStyle: props.attributes.divider_style, borderTopColor: props.attributes.divider_color } })
                )
            )
        );
    }
}));

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);



var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    ColorPalette = _wp$editor.ColorPalette,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextareaControl = _wp$components.TextareaControl,
    TextControl = _wp$components.TextControl,
    Dashicon = _wp$components.Dashicon,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('wts-bp-gb/dualheading', {
    // Block Title
    title: __('BP - Dual Heading'),
    // Block Description
    description: __('Add dual color headings'),
    // Block Category
    category: 'common',
    // Block Icon
    icon: 'star-half',

    keywords: [__('heading'), __('dual heading'), __('title')],

    attributes: {
        dualHeading1: {
            type: 'string',
            default: 'I LOVE'
        },
        dualHeading2: {
            type: 'string',
            default: 'GUTENBERG'
        },
        headingColor1: {
            type: 'string'
        },
        headingColor2: {
            type: 'string'
        },
        headingAlign: {
            type: 'string',
            default: 'center'
        },
        headingSize: {
            type: 'number',
            default: 20
        },
        text_html_tag: {
            type: 'string',
            default: 'h3'
        }
    },

    edit: function edit(props) {
        var onChangeText = function onChangeText(value) {
            props.setAttributes({ dualHeading1: value });
        };
        var onChangeText2 = function onChangeText2(value) {
            props.setAttributes({ dualHeading2: value });
        };
        var onChangeHeadColor1 = function onChangeHeadColor1(colorValue) {
            props.setAttributes({ headingColor1: colorValue });
        };
        var onChangeHeadColor2 = function onChangeHeadColor2(colorValue) {
            props.setAttributes({ headingColor2: colorValue });
        };
        var onChangeTag = function onChangeTag(value) {
            props.setAttributes({ text_html_tag: value });
        };
        var onChangeTextAlign = function onChangeTextAlign(value) {
            props.setAttributes({ headingAlign: value });
        };
        var onChangeTextSize = function onChangeTextSize(value) {
            props.setAttributes({ headingSize: value });
        };

        var Titletag = '' + props.attributes.text_html_tag;
        return [!!props.isSelected && wp.element.createElement(
            InspectorControls,
            null,
            wp.element.createElement(
                PanelBody,
                { title: __('Heading Text') },
                wp.element.createElement(SelectControl, {
                    label: __('Html Tag'),
                    options: [{ value: 'h1', label: 'H1' }, { value: 'h2', label: 'H2' }, { value: 'h3', label: 'H3' }, { value: 'h4', label: 'H4' }, { value: 'h5', label: 'H5' }, { value: 'h6', label: 'H6' }],
                    onChange: onChangeTag,
                    value: props.attributes.text_html_tag
                }),
                wp.element.createElement(AlignmentToolbar, { onChange: onChangeTextAlign, value: props.attributes.headingAlign }),
                wp.element.createElement(RangeControl, { label: 'Heading Size', min: 2, max: 100, onChange: onChangeTextSize, value: props.attributes.headingSize })
            ),
            wp.element.createElement(
                PanelBody,
                { title: __('Heading 1 Color'), initialOpen: false },
                wp.element.createElement(ColorPalette, { onChange: onChangeHeadColor1, value: props.attributes.headingColor1 })
            ),
            wp.element.createElement(
                PanelBody,
                { title: __('Heading 2 Color'), initialOpen: false },
                wp.element.createElement(ColorPalette, { onChange: onChangeHeadColor2, value: props.attributes.headingColor2 })
            )
        ), wp.element.createElement(
            'div',
            { className: props.className },
            wp.element.createElement(
                Titletag,
                { style: { textAlign: props.attributes.headingAlign, backgroundColor: props.attributes.bgColor } },
                wp.element.createElement(
                    'div',
                    { className: 'bpg-st-split-text', style: { color: props.attributes.headingColor1, fontSize: props.attributes.headingSize + 'px' } },
                    props.attributes.dualHeading1
                ),
                wp.element.createElement(
                    'div',
                    { className: 'bpg-st-rest-text', style: { color: props.attributes.headingColor2, fontSize: props.attributes.headingSize + 'px' } },
                    props.attributes.dualHeading2
                )
            )
        ), props.isSelected && wp.element.createElement(TextControl, {
            placeholder: 'Headinh 1',
            value: props.attributes.dualHeading1,
            onChange: onChangeText
        }), props.isSelected && wp.element.createElement(TextControl, {
            placeholder: 'Heading 2',
            value: props.attributes.dualHeading2
            //onChange = { ( skillPercentage ) => props.setAttributes( { progress_percentage: skillPercentage } )  }
            , onChange: onChangeText2
        })];
    },
    save: function save(props) {
        var Titletag = '' + props.attributes.text_html_tag;
        return wp.element.createElement(
            'div',
            { className: props.className },
            wp.element.createElement(
                Titletag,
                { style: { textAlign: props.attributes.headingAlign, backgroundColor: props.attributes.bgColor } },
                wp.element.createElement(
                    'div',
                    { className: 'bpg-st-split-text', style: { color: props.attributes.headingColor1, fontSize: props.attributes.headingSize + 'px' } },
                    props.attributes.dualHeading1
                ),
                wp.element.createElement(
                    'div',
                    { className: 'bpg-st-rest-text', style: { color: props.attributes.headingColor2, fontSize: props.attributes.headingSize + 'px' } },
                    props.attributes.dualHeading2
                )
            )
        );
    }
}));

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(18);




var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    ColorPalette = _wp$editor.ColorPalette,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelColor = _wp$components.PanelColor,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    Dashicon = _wp$components.Dashicon,
    Tooltip = _wp$components.Tooltip,
    RangeControl = _wp$components.RangeControl;


/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('wts-bp-gb/progress-bar', {
    // Block Title
    title: __('BP - Progress Bar'),
    // Block Description
    description: __('Progress Bar'),
    // Block Category
    category: 'common',
    // Block Icon
    icon: __WEBPACK_IMPORTED_MODULE_2__icons__["a" /* ProgressBarIcon */],

    keywords: [__('progress bar'), __('strength'), __('bar')],
    attributes: {
        progress_text: {
            type: 'string',
            default: 'My Skill'
        },
        progress_percentage: {
            type: 'number',
            default: 75
        },
        text_color: {
            type: 'string'
        },
        percentage_color: {
            type: 'string'
        },
        text_bgcolor: {
            type: 'string'
        },
        main_bgcolor: {
            type: 'string'
        },
        show_percentage: {
            type: 'string',
            default: 'true'
        },
        percentage_span: {
            type: 'string',
            default: '<span class="bpg-progress-percentage">75%</span>'
        }
    },
    edit: function edit(props) {
        var onChangeShowPercentage = function onChangeShowPercentage(value) {
            props.setAttributes({ show_percentage: value });

            if (value) {
                props.setAttributes({ percentage_span: '<span class="bpg-progress-percentage">' + props.attributes.progress_percentage + '%</span>' });
            } else {
                props.setAttributes({ percentage_span: '' });
            }
        };
        var onChangePercentage = function onChangePercentage(value) {
            props.setAttributes({ progress_percentage: value });
            if (props.attributes.show_percentage) {
                props.setAttributes({ percentage_span: '<span class="bpg-progress-percentage">' + value + '%</span>' });
            } else {
                props.setAttributes({ percentage_span: '' });
            }
        };
        return [!!props.isSelected && wp.element.createElement(
            InspectorControls,
            null,
            wp.element.createElement(
                PanelColor,
                { title: __('Skill Text Color'), initialOpen: false, colorValue: props.attributes.text_color },
                wp.element.createElement(ColorPalette, { onChange: function onChange(colorValue) {
                        return props.setAttributes({ text_color: colorValue });
                    }, value: props.attributes.text_color })
            ),
            wp.element.createElement(
                PanelBody,
                { title: __('Percentage Settings'), initialOpen: false },
                wp.element.createElement(ToggleControl, { label: __('Show Percentage'),
                    checked: props.attributes.show_percentage,
                    onChange: onChangeShowPercentage }),
                wp.element.createElement(RangeControl, { label: 'Progeress', min: 1, max: 100, onChange: onChangePercentage, value: props.attributes.progress_percentage })
            ),
            wp.element.createElement(
                PanelColor,
                { title: __('Progress Color'), initialOpen: false, colorValue: props.attributes.text_bgcolor },
                wp.element.createElement(ColorPalette, { onChange: function onChange(colorValue) {
                        return props.setAttributes({ text_bgcolor: colorValue });
                    }, value: props.attributes.text_bgcolor })
            ),
            wp.element.createElement(
                PanelColor,
                { title: __('Background Color'), initialOpen: false, colorValue: props.attributes.main_bgcolor },
                wp.element.createElement(ColorPalette, { onChange: function onChange(colorValue) {
                        return props.setAttributes({ main_bgcolor: colorValue });
                    }, value: props.attributes.main_bgcolor })
            )
        ), wp.element.createElement(
            'div',
            { 'class': props.className },
            wp.element.createElement(
                'div',
                { 'class': 'bpg-progress-bar-wrapper', style: { backgroundColor: props.attributes.main_bgcolor } },
                wp.element.createElement(
                    'div',
                    { 'class': 'bpg-progress-bar', 'data-percentage': props.attributes.progress_percentage, style: { width: props.attributes.progress_percentage + '%', backgroundColor: props.attributes.text_bgcolor } },
                    wp.element.createElement(
                        'span',
                        { 'class': 'bpg-progress-text', style: { color: props.attributes.text_color } },
                        props.attributes.progress_text
                    ),
                    wp.element.createElement('span', { style: { color: props.attributes.text_color }, dangerouslySetInnerHTML: { __html: props.attributes.percentage_span } })
                )
            )
        ), props.isSelected && wp.element.createElement(TextControl, {
            placeholder: 'Skill',
            value: props.attributes.progress_text,
            onChange: function onChange(skill) {
                return props.setAttributes({ progress_text: skill });
            }
        })];
    },
    save: function save(props) {
        return wp.element.createElement(
            'div',
            { 'class': props.className },
            wp.element.createElement(
                'div',
                { 'class': 'bpg-progress-bar-wrapper', style: { backgroundColor: props.attributes.main_bgcolor } },
                wp.element.createElement(
                    'div',
                    { 'class': 'bpg-progress-bar', 'data-percentage': props.attributes.progress_percentage + '%', style: { width: '0%', backgroundColor: props.attributes.text_bgcolor } },
                    wp.element.createElement(
                        'span',
                        { 'class': 'bpg-progress-text', style: { color: props.attributes.text_color } },
                        props.attributes.progress_text
                    ),
                    wp.element.createElement('span', { style: { color: props.attributes.text_color }, dangerouslySetInnerHTML: { __html: props.attributes.percentage_span } })
                )
            )
        );
    }

}));

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

var iconNum = 1;
var iconID = function iconID() {
  return "bpg-icon-" + iconNum++;
};
var Gradient = function Gradient(props) {
  return wp.element.createElement(
    "defs",
    null,
    wp.element.createElement(
      "linearGradient",
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { gradientTransform: "rotate(-90)" }),
      wp.element.createElement("stop", { offset: "0%", stopColor: "#A900F6", stopOpacity: "1" }),
      wp.element.createElement("stop", { offset: "100%", stopColor: "#5D9FFF", stopOpacity: "1" })
    )
  );
};
var ProgressBarIcon = function ProgressBarIcon() {
  var id = iconID();
  return (
    /*<svg className="dashicon" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <Gradient id={ id } />
    </svg> */
    wp.element.createElement(
      "svg",
      { width: "20", height: "20", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
      wp.element.createElement(
        "g",
        null,
        wp.element.createElement(
          "title",
          null,
          "Layer 1"
        ),
        wp.element.createElement("rect", { id: "svg_2", height: "3", width: "16", y: "3.750037", x: "3.875001", "fill-opacity": "null", "stroke-opacity": "null", "stroke-width": "1.5", stroke: "#000", fill: "none" }),
        wp.element.createElement("rect", { id: "svg_3", height: "3", width: "16", y: "10.625007", x: "4", "fill-opacity": "null", "stroke-opacity": "null", "stroke-width": "1.5", stroke: "#000", fill: "none" }),
        wp.element.createElement("rect", { id: "svg_4", height: "3", width: "16", y: "17.499977", x: "4", "fill-opacity": "null", "stroke-opacity": "null", "stroke-width": "1.5", stroke: "#000", fill: "none" }),
        wp.element.createElement("rect", { id: "svg_5", height: "0.749997", width: "9.499958", y: "5.000032", x: "5.187531", "fill-opacity": "null", "stroke-opacity": "null", "stroke-width": "1.5", stroke: "#000", fill: "none" }),
        wp.element.createElement("rect", { stroke: "#000", id: "svg_7", height: "0.749997", width: "5.624975", y: "11.375005", x: "5.062531", "fill-opacity": "null", "stroke-opacity": "null", "stroke-width": "1.5", fill: "none" }),
        wp.element.createElement("rect", { stroke: "#000", id: "svg_8", height: "0.749997", width: "10.749953", y: "18.499974", x: "5.31253", "fill-opacity": "null", "stroke-opacity": "null", "stroke-width": "1.5", fill: "none" })
      )
    )
  );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(20);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(23);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(33) });


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(2);
var ctx = __webpack_require__(24);
var hide = __webpack_require__(26);
var has = __webpack_require__(6);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(25);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(27);
var createDesc = __webpack_require__(32);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(28);
var IE8_DOM_DEFINE = __webpack_require__(29);
var toPrimitive = __webpack_require__(31);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(5)(function () {
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(34);
var gOPS = __webpack_require__(45);
var pIE = __webpack_require__(46);
var toObject = __webpack_require__(47);
var IObject = __webpack_require__(8);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(5)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(35);
var enumBugKeys = __webpack_require__(44);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6);
var toIObject = __webpack_require__(7);
var arrayIndexOf = __webpack_require__(37)(false);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(7);
var toLength = __webpack_require__(38);
var toAbsoluteIndex = __webpack_require__(39);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(10);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(10);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(41)('keys');
var uid = __webpack_require__(43);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(42) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 45 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(9);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ })
/******/ ]);