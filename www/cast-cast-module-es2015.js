(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cast-cast-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cast/cast.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cast/cast.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Breaking Bad</ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-button (click)=\"goToCredits()\">\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"chars.length > 0\">\n\n    <ion-list id=\"characters-list\">\n        <ion-item button detail lines=\"inset\" *ngFor=\"let character of chars\" (click)=\"openDetails(character)\">\n            <ion-avatar slot=\"start\">\n                <img src=\"{{ character.img }}\">\n            </ion-avatar>\n            <ion-label>\n                <h2>{{ character.name }}</h2>\n                <p>Birthday {{ character.birthday }}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-infinite-scroll threshold=\"15%\" id=\"infinite-scroll\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loading-spinner=\"bubbles\" loading-text=\"Loading more data...\" style=\"background-color:rgb(255, 255, 255, 0.7);\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n<!-- if there are no results from the API, apply an empty content to allow a dark layer over the background image-->\n<ion-content fullscreen=\"true\" *ngIf=\"chars.length == 0 || chars == null\"></ion-content>");

/***/ }),

/***/ "./src/app/pages/cast/cast-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cast/cast-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CastPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastPageRoutingModule", function() { return CastPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cast_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cast.page */ "./src/app/pages/cast/cast.page.ts");




const routes = [
    {
        path: '',
        component: _cast_page__WEBPACK_IMPORTED_MODULE_3__["CastPage"]
    }
];
let CastPageRoutingModule = class CastPageRoutingModule {
};
CastPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CastPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cast/cast.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/cast/cast.module.ts ***!
  \*******************************************/
/*! exports provided: CastPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastPageModule", function() { return CastPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _cast_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cast-routing.module */ "./src/app/pages/cast/cast-routing.module.ts");
/* harmony import */ var _cast_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cast.page */ "./src/app/pages/cast/cast.page.ts");







let CastPageModule = class CastPageModule {
};
CastPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cast_routing_module__WEBPACK_IMPORTED_MODULE_5__["CastPageRoutingModule"]
        ],
        declarations: [_cast_page__WEBPACK_IMPORTED_MODULE_6__["CastPage"]]
    })
], CastPageModule);



/***/ }),

/***/ "./src/app/pages/cast/cast.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/cast/cast.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: rgb(0, 0, 0, 0.5);\n}\n\nion-list {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\nion-item {\n  --background: rgb(255, 255, 255, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYnJlYWtpbmctYmFkLWFwcC9zcmMvYXBwL3BhZ2VzL2Nhc3QvY2FzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Nhc3QvY2FzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXN0L2Nhc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjUpO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUsIDAuNyk7OyAgXG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSwgMCk7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjUpO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1LCAwKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/cast/cast.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/cast/cast.page.ts ***!
  \*****************************************/
/*! exports provided: CastPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastPage", function() { return CastPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/loading-singleton.service */ "./src/app/services/loading-singleton.service.ts");







let CastPage = class CastPage {
    constructor(router, api, toastController, helpService, loading // check this class to see the comments and find out where it comes from
    ) {
        this.router = router;
        this.api = api;
        this.toastController = toastController;
        this.helpService = helpService;
        this.loading = loading;
        this.chars = [];
        /**
         * This request would give you an array of 15 characters, starting at index 0 (the 1 first id).
         */
        this.limit = 15;
        this.index = 0;
        this.maxCharacters = 63;
    }
    ngOnInit() {
        this.loadCharsLoading();
    }
    loadCharsLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading.show();
            this.api.getPaginatedCharacters(this.limit, this.index)
                .subscribe(res => {
                this.chars = this.chars.concat(res);
                this.loading.dismiss();
            }, erro => {
                if (erro.status) {
                    this.helpService.toastHttpCodeError(erro.status);
                }
            });
        });
    }
    // event parameter can be null
    loadChars(event) {
        this.api.getPaginatedCharacters(this.limit, this.index)
            .subscribe(res => {
            this.chars = this.chars.concat(res);
            if (event) {
                /**
                * Source: https://ionicframework.com/docs/api/infinite-scroll
                * Call complete() within the ionInfinite output event handler when your async operation has completed.
                * For example, the loading state is while the app is performing an asynchronous operation, such as receiving
                * more data from an AJAX request to add more items to a data list. Once the data has been received and UI updated,
                * you then call this method to signify that the loading has completed. This method will change the infinite scroll's
                * state from loading to enabled.
                */
                event.target.complete();
            }
        }, erro => {
            if (erro.status) {
                this.helpService.toastHttpCodeError(erro.status);
            }
        });
    }
    loadData(event) {
        this.index += 15;
        this.loadChars(event);
        if (this.index > this.maxCharacters - 1) {
            event.target.disable = true;
        }
    }
    openDetails(character) {
        this.router.navigateByUrl(`/tabs/cast/${character.char_id}`);
    }
    goToCredits() {
        this.router.navigateByUrl(`credits`);
    }
};
CastPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"] },
    { type: _services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_6__["LoadingSingletonService"] // check this class to see the comments and find out where it comes from
     }
];
CastPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cast',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cast.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cast/cast.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cast.page.scss */ "./src/app/pages/cast/cast.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"],
        _services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_6__["LoadingSingletonService"] // check this class to see the comments and find out where it comes from
    ])
], CastPage);



/***/ })

}]);
//# sourceMappingURL=cast-cast-module-es2015.js.map