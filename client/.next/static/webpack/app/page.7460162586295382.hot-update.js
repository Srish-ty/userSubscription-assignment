"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/form.js":
/*!************************************!*\
  !*** ./src/app/components/form.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_formData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/formData */ \"(app-pages-browser)/./src/app/config/formData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst FormContainer = ()=>{\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        setUserData({\n            ...userData,\n            [e.target.name]: e.target.value\n        });\n        console.log(userData);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const emailPattern = _config_formData__WEBPACK_IMPORTED_MODULE_2__.formData.email;\n        // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/;\n        if (!emailPattern.test(userData.email)) {\n            setErrorMessage(\"Please enter a valid email address.\");\n            return;\n        }\n        console.log(\"Form submitted\", userData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[50vw] bg-slate-700 my-[6vw] mx-auto p-10 flex flex-col items-center justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Form Container\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"py-6 h-[20vw] flex flex-col items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Name:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"name\",\n                                onChange: handleChange,\n                                className: \"text-slate-800 my-4\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Email:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"email\",\n                                onChange: handleChange,\n                                className: \"text-slate-800 my-4\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-red-500\",\n                        children: errorMessage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"block bg-slate-400 px-3 py-2\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FormContainer, \"ACNRKpXDvUt2xHOpheAqx6etM5c=\");\n_c = FormContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormContainer);\nvar _c;\n$RefreshReg$(_c, \"FormContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDd0M7QUFDTTtBQUU5QyxNQUFNRyxnQkFBZ0I7O0lBQ3BCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1PLGVBQWUsQ0FBQ0M7UUFDcEJKLFlBQVk7WUFBRSxHQUFHRCxRQUFRO1lBQUUsQ0FBQ0ssRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUM7UUFFM0RDLFFBQVFDLEdBQUcsQ0FBQ1Y7SUFDZDtJQUVBLE1BQU1XLGVBQWUsQ0FBQ047UUFDcEJBLEVBQUVPLGNBQWM7UUFFaEIsTUFBTUMsZUFBZWYsc0RBQVFBLENBQUNnQixLQUFLO1FBQ25DLDBFQUEwRTtRQUUxRSxJQUFJLENBQUNELGFBQWFFLElBQUksQ0FBQ2YsU0FBU2MsS0FBSyxHQUFHO1lBQ3RDWCxnQkFBZ0I7WUFDaEI7UUFDRjtRQUNBTSxRQUFRQyxHQUFHLENBQUMsa0JBQWtCVjtJQUNoQztJQUVBLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFLRixXQUFVOztrQ0FDZCw4REFBQ0c7OzRCQUFNOzBDQUVMLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTGYsTUFBSztnQ0FDTGdCLFVBQVVuQjtnQ0FDVmEsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDRzs7NEJBQU07MENBRUwsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMZixNQUFLO2dDQUNMZ0IsVUFBVW5CO2dDQUNWYSxXQUFVOzs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNPO3dCQUFLUCxXQUFVO2tDQUFnQmY7Ozs7OztrQ0FDaEMsOERBQUN1Qjt3QkFBT1IsV0FBVTtrQ0FBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl6RDtHQWxETWxCO0tBQUFBO0FBb0ROLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtLmpzPzRhZTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmb3JtRGF0YSB9IGZyb20gXCIuLi9jb25maWcvZm9ybURhdGFcIjtcclxuXHJcbmNvbnN0IEZvcm1Db250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0VXNlckRhdGEoeyAuLi51c2VyRGF0YSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBlbWFpbFBhdHRlcm4gPSBmb3JtRGF0YS5lbWFpbDtcclxuICAgIC8vIGNvbnN0IGVtYWlsUGF0dGVybiA9IC9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Miw2fSQvO1xyXG5cclxuICAgIGlmICghZW1haWxQYXR0ZXJuLnRlc3QodXNlckRhdGEuZW1haWwpKSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcIkZvcm0gc3VibWl0dGVkXCIsIHVzZXJEYXRhKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs1MHZ3XSBiZy1zbGF0ZS03MDAgbXktWzZ2d10gbXgtYXV0byBwLTEwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICA8aDE+Rm9ybSBDb250YWluZXI8L2gxPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJweS02IGgtWzIwdnddIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIE5hbWU6XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtODAwIG15LTRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIEVtYWlsOlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS04MDAgbXktNFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+e2Vycm9yTWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJibG9jayBiZy1zbGF0ZS00MDAgcHgtMyBweS0yXCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29udGFpbmVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImZvcm1EYXRhIiwiRm9ybUNvbnRhaW5lciIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZW1haWxQYXR0ZXJuIiwiZW1haWwiLCJ0ZXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInNwYW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/form.js\n"));

/***/ })

});