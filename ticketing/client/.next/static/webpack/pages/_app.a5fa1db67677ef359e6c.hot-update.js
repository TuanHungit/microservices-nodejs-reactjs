webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducer/auth.js":
/*!*******************************!*\
  !*** ./store/reducer/auth.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _action_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action/actionTypes */ "./store/action/actionTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  userId: null,
  email: null,
  error: null,
  authRedirectPath: '/'
};

var authLogin = function authLogin(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    error: null,
    userId: action.userId,
    email: action.email
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_SIGNUP"]:
      return authLogin(state, action);

    case _action_actionTypes__WEBPACK_IMPORTED_MODULE_1__["AUTH_FAILED"]:
      return _objectSpread({}, state);

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlci9hdXRoLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJJZCIsImVtYWlsIiwiZXJyb3IiLCJhdXRoUmVkaXJlY3RQYXRoIiwiYXV0aExvZ2luIiwic3RhdGUiLCJhY3Rpb24iLCJyZWR1Y2VyIiwidHlwZSIsImFjdGlvblR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFFBQU0sRUFBRSxJQURXO0FBRW5CQyxPQUFLLEVBQUUsSUFGWTtBQUduQkMsT0FBSyxFQUFFLElBSFk7QUFJbkJDLGtCQUFnQixFQUFFO0FBSkMsQ0FBckI7O0FBTUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ25DLHlDQUNLRCxLQURMO0FBRUVILFNBQUssRUFBRSxJQUZUO0FBR0VGLFVBQU0sRUFBRU0sTUFBTSxDQUFDTixNQUhqQjtBQUlFQyxTQUFLLEVBQUVLLE1BQU0sQ0FBQ0w7QUFKaEI7QUFNRCxDQVBEOztBQVFBLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNGLEtBQWlDLHVFQUF6Qk4sWUFBeUI7QUFBQSxNQUFYTyxNQUFXOztBQUNoRCxVQUFRQSxNQUFNLENBQUNFLElBQWY7QUFDRSxTQUFLQywrREFBTDtBQUNFLGFBQU9MLFNBQVMsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLENBQWhCOztBQUNGLFNBQUtHLCtEQUFMO0FBQ0UsK0JBQVlKLEtBQVo7O0FBQ0Y7QUFDRSwrQkFBWUEsS0FBWjtBQU5KO0FBUUQsQ0FURDs7QUFXZUUsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hNWZhMWRiNjc2NzdlZjM1OWU2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSAnLi4vYWN0aW9uL2FjdGlvblR5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VySWQ6IG51bGwsXHJcbiAgZW1haWw6IG51bGwsXHJcbiAgZXJyb3I6IG51bGwsXHJcbiAgYXV0aFJlZGlyZWN0UGF0aDogJy8nLFxyXG59O1xyXG5jb25zdCBhdXRoTG9naW4gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgdXNlcklkOiBhY3Rpb24udXNlcklkLFxyXG4gICAgZW1haWw6IGFjdGlvbi5lbWFpbCxcclxuICB9O1xyXG59O1xyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkFVVEhfU0lHTlVQOlxyXG4gICAgICByZXR1cm4gYXV0aExvZ2luKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5BVVRIX0ZBSUxFRDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==