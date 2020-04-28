(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-credits-credits-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/credits/credits.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/credits/credits.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaulthref=\"/tabs/cast\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Credits</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\">\n              <h6>Walter White</h6>\n              <p class=\"subtitleCredits\">Icon Designer</p>\n              <p><a href=\"https://icon-library.net/icon/walter-white-icon-4.html\">Walter White Icon #97022</a></p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item>\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\">\n              <h6>NAL/Chequered Ink</h6>\n              <p class=\"subtitleCredits\">Font Designer</p>\n              <p><a href=\"https://www.dafont.com/pt/heart-breaking-bad.font\">Heart Breaking Bad Font</a></p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item>\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\">\n              <h6>Unknown</h6>\n              <p class=\"subtitleCredits\">Background Wallpaper Designer</p>\n              <p><a href=\"https://www.google.com/search?q=breaking%20bad&tbm=isch&tbs=rimg%3ACeBNT2KZo7UbImDtWPWkh77-X-afQcCp4KdTIGlXFzHGZSe07IJnZ9KQdN_1-zMFHbwha3nPswXwybutlHIRspgKm5eJfTI65EXK-rlKSpPx3cVN-3wcc9JR9F6vgagD7Yty1AFdHPcEmF70qEgntWPWkh77-XxFgkzsHktlLJioSCeafQcCp4KdTEZEdtCtLf5V8KhIJIGlXFzHGZScRFGHcIFGj0HsqEgm07IJnZ9KQdBEJNRrLJfo3dioSCd_1-zMFHbwhaEaGzh8Du2bmuKhIJ3nPswXwybusR1y7PBwZPruoqEgllHIRspgKm5RHLj9UhQqeXqCoSCeJfTI65EXK-Ed56Ild7-z6HKhIJrlKSpPx3cVMRfUvPiRN3J9wqEgl-3wcc9JR9FxHygzuS2C5GaioSCavgagD7Yty1EXB6yFkC-ijsKhIJAFdHPcEmF70RoWfe8uJY3fthL1TrRzn5pT0&client=firefox-b-d&hl=pt-BR&ved=0CB0QuIIBahcKEwjwiYbBqYnpAhUAAAAAHQAAAAAQCw&biw=1908&bih=950\">Breaking Bad Images(Google Search)</a></p>\n              <p class=\"subtitleCredits\">ps. I did not find the author. If someone knows the author, please contact-me.</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item>\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\">\n              <h6>Rafael Ricardo</h6>\n              <p class=\"subtitleCredits\">App Developer</p>\n              <p><a href=\"https://github.com/rafaelricardo-rj/breaking-bad-app\">GitHub link to this project</a></p>\n              <p class=\"subtitleCredits\">Contact: rafael_rikardo@yahoo.com.br</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item>\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\">\n              <h6>Technologies</h6>\n              <ul class=\"subtitleCredits\">\n                <li>Ionic Framework</li>\n                <li>Angular</li>\n                <li>Cordova</li>\n              </ul>\n              <p>For more information access the GitHub</p>\n              <p><a href=\"https://github.com/rafaelricardo-rj/breaking-bad-app\">https://github.com/rafaelricardo-rj/breaking-bad-app</a></p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/credits/credits-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/credits/credits-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CreditsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsPageRoutingModule", function() { return CreditsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _credits_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credits.page */ "./src/app/pages/credits/credits.page.ts");




const routes = [
    {
        path: '',
        component: _credits_page__WEBPACK_IMPORTED_MODULE_3__["CreditsPage"]
    }
];
let CreditsPageRoutingModule = class CreditsPageRoutingModule {
};
CreditsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreditsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/credits/credits.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/credits/credits.module.ts ***!
  \*************************************************/
/*! exports provided: CreditsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsPageModule", function() { return CreditsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _credits_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credits-routing.module */ "./src/app/pages/credits/credits-routing.module.ts");
/* harmony import */ var _credits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credits.page */ "./src/app/pages/credits/credits.page.ts");







let CreditsPageModule = class CreditsPageModule {
};
CreditsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _credits_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreditsPageRoutingModule"]
        ],
        declarations: [_credits_page__WEBPACK_IMPORTED_MODULE_6__["CreditsPage"]]
    })
], CreditsPageModule);



/***/ }),

/***/ "./src/app/pages/credits/credits.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/credits/credits.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #FFFFFF;\n}\n\n.subtitleCredits {\n  color: grey;\n  margin-top: -7px;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYnJlYWtpbmctYmFkLWFwcC9zcmMvYXBwL3BhZ2VzL2NyZWRpdHMvY3JlZGl0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWRpdHMvY3JlZGl0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUFhLGdCQUFBO0VBQ2IsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWRpdHMvY3JlZGl0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG5cbi5zdWJ0aXRsZUNyZWRpdHMge1xuICAgIGNvbG9yOiBncmV5OyBtYXJnaW4tdG9wOiAtN3B4O1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG5cbi5zdWJ0aXRsZUNyZWRpdHMge1xuICBjb2xvcjogZ3JleTtcbiAgbWFyZ2luLXRvcDogLTdweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/credits/credits.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/credits/credits.page.ts ***!
  \***********************************************/
/*! exports provided: CreditsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsPage", function() { return CreditsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreditsPage = class CreditsPage {
    constructor() { }
    ngOnInit() {
    }
};
CreditsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-credits',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./credits.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/credits/credits.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./credits.page.scss */ "./src/app/pages/credits/credits.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreditsPage);



/***/ })

}]);
//# sourceMappingURL=pages-credits-credits-module-es2015.js.map