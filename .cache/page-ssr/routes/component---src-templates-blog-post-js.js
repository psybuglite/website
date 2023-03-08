"use strict";
exports.id = "component---src-templates-blog-post-js";
exports.ids = ["component---src-templates-blog-post-js"];
exports.modules = {

/***/ "./src/templates/blog-post.js?export=default":
/*!***************************************************!*\
  !*** ./src/templates/blog-post.js?export=default ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// import '../css/blog-post.css';

function Template({
  data
}) {
  const {
    markdownRemark: post
  } = data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "blog-post-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "blog-post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, post.frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "blog-post-content",
    dangerouslySetInnerHTML: {
      __html: post.html
    }
  })));
}
const pageQuery = "913670419";

/***/ })

};
;
//# sourceMappingURL=component---src-templates-blog-post-js.js.map