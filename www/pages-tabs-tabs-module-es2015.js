(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar color=\"primary\" slot=\"bottom\">\n\t\n    <ion-tab-button tab=\"cast\">\n\t\n      <ion-icon name=\"people-circle-outline\"></ion-icon>\n\t\n      <ion-label>Cast</ion-label>\n\t\n    </ion-tab-button>\n\t\n    <ion-tab-button tab=\"episodes\">\n\t\n      <ion-icon name=\"videocam-outline\"></ion-icon>\n\t\n      <ion-label>Episodes</ion-label>\n\t\n    </ion-tab-button>\n\t\n    <ion-tab-button tab=\"quotes\">\n\t\n      <ion-icon name=\"chatbubble-outline\"></ion-icon>\n\t\n      <ion-label>Quotes</ion-label>\n\t\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"death\">\n\t\n      <ion-icon name=\"skull-outline\"></ion-icon>\n\t\n      <ion-label>Death</ion-label>\n\t\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/pages/tabs/tabs-page-router.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/tabs/tabs-page-router.module.ts ***!
  \*******************************************************/
/*! exports provided: TabsPageRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRouterModule", function() { return TabsPageRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'cast',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | cast-cast-module */[__webpack_require__.e("common"), __webpack_require__.e("cast-cast-module")]).then(__webpack_require__.bind(null, /*! ../cast/cast.module */ "./src/app/pages/cast/cast.module.ts")).then(m => m.CastPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => Promise.all(/*! import() | cast-details-cast-details-module */[__webpack_require__.e("common"), __webpack_require__.e("cast-details-cast-details-module")]).then(__webpack_require__.bind(null, /*! ../cast-details/cast-details.module */ "./src/app/pages/cast-details/cast-details.module.ts")).then(m => m.CastDetailsPageModule)
                    }
                ]
            },
            {
                path: 'episodes',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | episodes-episodes-module */[__webpack_require__.e("common"), __webpack_require__.e("episodes-episodes-module")]).then(__webpack_require__.bind(null, /*! ../episodes/episodes.module */ "./src/app/pages/episodes/episodes.module.ts")).then(m => m.EpisodesPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => Promise.all(/*! import() | episodes-details-episodes-details-module */[__webpack_require__.e("common"), __webpack_require__.e("episodes-details-episodes-details-module")]).then(__webpack_require__.bind(null, /*! ../episodes-details/episodes-details.module */ "./src/app/pages/episodes-details/episodes-details.module.ts")).then(m => m.EpisodesDetailsPageModule)
                    }
                ]
            },
            {
                path: 'quotes',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | quotes-quotes-module */[__webpack_require__.e("common"), __webpack_require__.e("quotes-quotes-module")]).then(__webpack_require__.bind(null, /*! ../quotes/quotes.module */ "./src/app/pages/quotes/quotes.module.ts")).then(m => m.QuotesPageModule)
                    }
                ]
            },
            {
                path: 'death',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | death-death-module */[__webpack_require__.e("common"), __webpack_require__.e("death-death-module")]).then(__webpack_require__.bind(null, /*! ../death/death.module */ "./src/app/pages/death/death.module.ts")).then(m => m.DeathPageModule)
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/cast',
        pathMatch: 'full'
    }
];
let TabsPageRouterModule = class TabsPageRouterModule {
};
TabsPageRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRouterModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");
/* harmony import */ var _tabs_page_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-page-router.module */ "./src/app/pages/tabs/tabs-page-router.module.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs_page_router_module__WEBPACK_IMPORTED_MODULE_6__["TabsPageRouterModule"],
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
    ngOnInit() {
    }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module-es2015.js.map