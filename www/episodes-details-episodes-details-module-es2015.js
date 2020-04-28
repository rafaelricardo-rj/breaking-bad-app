(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episodes-details-episodes-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes-details/episodes-details.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes-details/episodes-details.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaulthref=\"/tabs/episodes\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"episode\">{{ episode.title }}</ion-title>\n    <ion-buttons slot=\"end\">\n      \n      <ion-button (click)=\"unfavouriteEpisode()\" *ngIf=\"isFavourite\">\n\n        <ion-icon name=\"heart\" slot=\"icon-only\"></ion-icon>\n\n      </ion-button>\n\n      <ion-button (click)=\"favouriteEpisode()\" *ngIf=\"!isFavourite\">\n\n        <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\n      </ion-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"episode\">\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-icon name=\"film-outline\" slot=\"start\"></ion-icon>\n          <ion-label>{{ episode.season }}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n          <ion-label>{{ episode.air_date }}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Season: {{ episode.episode }}</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Characters</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor=\"let character of episode.characters\">{{character}}</ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/episodes-details/episodes-details-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/episodes-details/episodes-details-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: EpisodesDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesDetailsPageRoutingModule", function() { return EpisodesDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _episodes_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./episodes-details.page */ "./src/app/pages/episodes-details/episodes-details.page.ts");




const routes = [
    {
        path: '',
        component: _episodes_details_page__WEBPACK_IMPORTED_MODULE_3__["EpisodesDetailsPage"]
    }
];
let EpisodesDetailsPageRoutingModule = class EpisodesDetailsPageRoutingModule {
};
EpisodesDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EpisodesDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/episodes-details/episodes-details.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/episodes-details/episodes-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: EpisodesDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesDetailsPageModule", function() { return EpisodesDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _episodes_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./episodes-details-routing.module */ "./src/app/pages/episodes-details/episodes-details-routing.module.ts");
/* harmony import */ var _episodes_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./episodes-details.page */ "./src/app/pages/episodes-details/episodes-details.page.ts");







let EpisodesDetailsPageModule = class EpisodesDetailsPageModule {
};
EpisodesDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _episodes_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodesDetailsPageRoutingModule"]
        ],
        declarations: [_episodes_details_page__WEBPACK_IMPORTED_MODULE_6__["EpisodesDetailsPage"]]
    })
], EpisodesDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/episodes-details/episodes-details.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/episodes-details/episodes-details.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwaXNvZGVzLWRldGFpbHMvZXBpc29kZXMtZGV0YWlscy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/episodes-details/episodes-details.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/episodes-details/episodes-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: EpisodesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesDetailsPage", function() { return EpisodesDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var src_app_services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading-singleton.service */ "./src/app/services/loading-singleton.service.ts");
/* harmony import */ var src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/favourite.service */ "./src/app/services/favourite.service.ts");







let EpisodesDetailsPage = class EpisodesDetailsPage {
    constructor(activatedRoute, api, helpService, loading, favouriteService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.helpService = helpService;
        this.loading = loading;
        this.favouriteService = favouriteService;
        this.isFavourite = false;
        this.epiId = null;
    }
    ngOnInit() {
        this.epiId = this.activatedRoute.snapshot.paramMap.get("id");
        this.loading.show();
        this.api.getEpisode(this.epiId).subscribe((res) => {
            this.episode = res[0];
            this.loading.dismiss();
        }, (erro) => {
            if (erro.status) {
                this.helpService.toastHttpCodeError(erro.status);
            }
        });
        this.favouriteService.isFavouriteEpi(this.epiId).then((isFav) => {
            this.isFavourite = isFav;
        });
    }
    favouriteEpisode() {
        this.favouriteService.favouriteEpisode(this.epiId).then(() => {
            this.isFavourite = true;
        });
    }
    unfavouriteEpisode() {
        this.favouriteService.unfavouriteEpisode(this.epiId).then(() => {
            this.isFavourite = false;
        });
    }
};
EpisodesDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] },
    { type: src_app_services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_5__["LoadingSingletonService"] },
    { type: src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_6__["FavouriteService"] }
];
EpisodesDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-episodes-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./episodes-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes-details/episodes-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./episodes-details.page.scss */ "./src/app/pages/episodes-details/episodes-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"],
        src_app_services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_5__["LoadingSingletonService"],
        src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_6__["FavouriteService"]])
], EpisodesDetailsPage);



/***/ })

}]);
//# sourceMappingURL=episodes-details-episodes-details-module-es2015.js.map