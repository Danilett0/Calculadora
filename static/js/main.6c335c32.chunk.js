(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,_,t){"use strict";var a=t(0),n=t.n(a);t(21);_.a=function(e){var _=e.type,t=e.text,a=e.clickHandler;return n.a.createElement("button",{className:_,onClick:function(){return a(t)}},n.a.createElement("span",null,t))}},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Administrator_Desktop_calculadoraReact_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_components_Result__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_components_MathOperations__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_components_Functions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),_components_Numbers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),_components_Error__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_styles_App_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(23),_styles_App_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_7__),App=function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState2=Object(C_Users_Administrator_Desktop_calculadoraReact_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),texto=_useState2[0],setTexto=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),_useState4=Object(C_Users_Administrator_Desktop_calculadoraReact_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),errorMessage=_useState4[0],setErrorMessage=_useState4[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"react-calculator fadein"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Error__WEBPACK_IMPORTED_MODULE_6__.a,{Type:null,Message:errorMessage}),";",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Result__WEBPACK_IMPORTED_MODULE_2__.a,{value:texto}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Numbers__WEBPACK_IMPORTED_MODULE_5__.a,{onClickNumber:function(e){setTexto("".concat("0"===texto?"":texto).concat(e))}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Functions__WEBPACK_IMPORTED_MODULE_4__.a,{onContentClear:function(){setTexto("")},onDelete:function(){if(texto.length>0){var e=texto.substring(0,texto.length-1);setTexto("".concat(e))}}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MathOperations__WEBPACK_IMPORTED_MODULE_3__.a,{onClickOperation:function(e){setTexto(function(_){return"".concat(_).concat(e)})},onClickEqual:function onClickEqual(){if(texto.length)try{var expression=texto.replace(/\b0+(?=\d)/g,"");setTexto(eval(expression).toString()),setErrorMessage(null)}catch(_unused){setErrorMessage("Ops! parece que hay algo mal en tu operacion.")}}}))};__webpack_exports__.a=App},function(e,_,t){"use strict";var a=t(0),n=t.n(a),r=function(e){var _=e.value;return n.a.createElement("div",{className:"result"},_)};r.defaultProps={value:"0"},_.a=r},function(e,_,t){"use strict";var a=t(0),n=t.n(a),r=t(1);_.a=function(e){var _=e.onClickOperation,t=e.onClickEqual;return n.a.createElement("section",{className:"math-operations"},n.a.createElement(r.a,{text:"+",clickHandler:_}),n.a.createElement(r.a,{text:"-",clickHandler:_}),n.a.createElement(r.a,{text:"*",clickHandler:_}),n.a.createElement(r.a,{text:"/",clickHandler:_}),n.a.createElement(r.a,{text:"=",clickHandler:t}))}},function(e,_,t){"use strict";var a=t(0),n=t.n(a),r=t(1);_.a=function(e){var _=e.onContentClear,t=e.onDelete;return n.a.createElement("section",{className:"functions"},n.a.createElement(r.a,{type:"button-long-text",text:"clear",clickHandler:_}),n.a.createElement(r.a,{type:"button-long-text",text:"\u2190",clickHandler:t}))}},function(e,_,t){"use strict";var a=t(0),n=t.n(a),r=t(1),c=[1,2,3,4,5,6,7,8,9,0];_.a=function(e){var _=e.onClickNumber;return n.a.createElement("section",{className:"numbers"},function(e){return c.map(function(_){return n.a.createElement(r.a,{key:_,text:_.toString(),clickHandler:e})})}(_))}},function(e,_,t){"use strict";var a=t(0),n=t.n(a);_.a=function(e){var _=e.Message;return n.a.createElement("p",{style:{color:"#F34D5F",textAlign:"center"}}," ",_," ")}},function(e,_,t){e.exports=t(12)},function(e,_,t){"use strict";t.r(_);var a=t(0),n=t.n(a),r=t(4),c=t(5),o=document.getElementById("root");Object(r.createRoot)(o).render(n.a.createElement(c.a,null))},,,,,,,,,function(e,_,t){},,function(e,_,t){}],[[11,2,1]]]);
//# sourceMappingURL=main.6c335c32.chunk.js.map