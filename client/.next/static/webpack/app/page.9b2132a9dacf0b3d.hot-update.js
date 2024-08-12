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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_formData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/formData */ \"(app-pages-browser)/./src/app/config/formData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst FormContainer = ()=>{\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        setUserData({\n            ...userData,\n            [e.target.name]: e.target.value\n        });\n        console.log(userData);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const emailPattern = _config_formData__WEBPACK_IMPORTED_MODULE_2__.formData.email;\n        // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/;\n        if (!emailPattern.test(userData.email)) {\n            setError(\"Please enter a valid email address.\");\n            return;\n        }\n        // If the email is valid, submit the form\n        console.log(\"Form submitted\", userData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[50vw] bg-slate-700 my-[6vw] mx-auto p-10 flex flex-col items-center justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Form Container\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"py-6 h-[20vw] flex flex-col items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Name:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"name\",\n                                onChange: handleChange,\n                                className: \"text-slate-800 my-4\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Email:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"email\",\n                                onChange: handleChange,\n                                className: \"text-slate-800 my-4\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-red-500\",\n                        children: errorMessage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"block bg-slate-400 px-3 py-2\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Documents\\\\Github\\\\opengig\\\\client\\\\src\\\\app\\\\components\\\\form.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FormContainer, \"ACNRKpXDvUt2xHOpheAqx6etM5c=\");\n_c = FormContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormContainer);\nvar _c;\n$RefreshReg$(_c, \"FormContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDd0M7QUFDTTtBQUU5QyxNQUFNRyxnQkFBZ0I7O0lBQ3BCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1PLGVBQWUsQ0FBQ0M7UUFDcEJKLFlBQVk7WUFBRSxHQUFHRCxRQUFRO1lBQUUsQ0FBQ0ssRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUM7UUFFM0RDLFFBQVFDLEdBQUcsQ0FBQ1Y7SUFDZDtJQUVBLE1BQU1XLGVBQWUsQ0FBQ047UUFDcEJBLEVBQUVPLGNBQWM7UUFFaEIsTUFBTUMsZUFBZWYsc0RBQVFBLENBQUNnQixLQUFLO1FBQ25DLDBFQUEwRTtRQUUxRSxJQUFJLENBQUNELGFBQWFFLElBQUksQ0FBQ2YsU0FBU2MsS0FBSyxHQUFHO1lBQ3RDRSxTQUFTO1lBQ1Q7UUFDRjtRQUVBLHlDQUF5QztRQUN6Q1AsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQlY7SUFDaEM7SUFFQSxxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0YsV0FBVTs7a0NBQ2QsOERBQUNHOzs0QkFBTTswQ0FFTCw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xoQixNQUFLO2dDQUNMaUIsVUFBVXBCO2dDQUNWYyxXQUFVOzs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNHOzs0QkFBTTswQ0FFTCw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xoQixNQUFLO2dDQUNMaUIsVUFBVXBCO2dDQUNWYyxXQUFVOzs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNPO3dCQUFLUCxXQUFVO2tDQUFnQmhCOzs7Ozs7a0NBQ2hDLDhEQUFDd0I7d0JBQU9SLFdBQVU7a0NBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekQ7R0FwRE1uQjtLQUFBQTtBQXNETiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9ybS5qcz80YWU4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZm9ybURhdGEgfSBmcm9tIFwiLi4vY29uZmlnL2Zvcm1EYXRhXCI7XHJcblxyXG5jb25zdCBGb3JtQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFVzZXJEYXRhKHsgLi4udXNlckRhdGEsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codXNlckRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZW1haWxQYXR0ZXJuID0gZm9ybURhdGEuZW1haWw7XHJcbiAgICAvLyBjb25zdCBlbWFpbFBhdHRlcm4gPSAvXlthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsNn0kLztcclxuXHJcbiAgICBpZiAoIWVtYWlsUGF0dGVybi50ZXN0KHVzZXJEYXRhLmVtYWlsKSkge1xyXG4gICAgICBzZXRFcnJvcihcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdGhlIGVtYWlsIGlzIHZhbGlkLCBzdWJtaXQgdGhlIGZvcm1cclxuICAgIGNvbnNvbGUubG9nKFwiRm9ybSBzdWJtaXR0ZWRcIiwgdXNlckRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzUwdnddIGJnLXNsYXRlLTcwMCBteS1bNnZ3XSBteC1hdXRvIHAtMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIDxoMT5Gb3JtIENvbnRhaW5lcjwvaDE+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB5LTYgaC1bMjB2d10gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgTmFtZTpcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS04MDAgbXktNFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgRW1haWw6XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTgwMCBteS00XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57ZXJyb3JNZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJsb2NrIGJnLXNsYXRlLTQwMCBweC0zIHB5LTJcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250YWluZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZm9ybURhdGEiLCJGb3JtQ29udGFpbmVyIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJlbWFpbFBhdHRlcm4iLCJlbWFpbCIsInRlc3QiLCJzZXRFcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/form.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/config/formData.js":
/*!************************************!*\
  !*** ./src/app/config/formData.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formData: function() { return /* binding */ formData; }\n/* harmony export */ });\nconst formData = {\n    name: \"\",\n    email: \"/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/\"\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29uZmlnL2Zvcm1EYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxXQUFXO0lBQ3RCQyxNQUFNO0lBQ05DLE9BQU87QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29uZmlnL2Zvcm1EYXRhLmpzPzI4ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZvcm1EYXRhID0ge1xyXG4gIG5hbWU6IFwiXCIsXHJcbiAgZW1haWw6IFwiL15bYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS4tXSsuW2EtekEtWl17Miw2fSQvXCIsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJmb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/config/formData.js\n"));

/***/ })

});