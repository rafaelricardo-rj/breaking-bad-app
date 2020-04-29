function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cast-details-cast-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cast-details/cast-details.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cast-details/cast-details.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCastDetailsCastDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaulthref=\"/tabs/cast\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"character\">{{ character.name }}</ion-title>\n    <ion-buttons slot=\"end\">\n      \n      <ion-button (click)=\"unfavouriteChar()\" *ngIf=\"isFavourite\">\n\n        <ion-icon name=\"heart\" slot=\"icon-only\"></ion-icon>\n\n      </ion-button>\n\n      <ion-button (click)=\"favouriteChar()\" *ngIf=\"!isFavourite\">\n\n        <ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\n      </ion-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"character\">\n  <ion-card>\n\n    <img src=\"{{character.img}}\" width=\"100%\" height=\"auto\" />\n\n    <ion-card-header>\n      <ion-card-subtitle>Character</ion-card-subtitle>\n      <ion-card-title>{{ character.name }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-icon name=\"egg-outline\" slot=\"start\"></ion-icon>\n          <ion-label>{{ character.birthday }}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"fitness-outline\" slot=\"start\"></ion-icon>\n          <ion-label>{{ character.status }}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"at-outline\" slot=\"start\"></ion-icon>\n          <ion-label>{{ character.nickname }}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"flag-outline\" slot=\"start\"></ion-icon>\n          <ion-label>{{ character.category }}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"film-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Season </ion-label>\n          <ion-label *ngFor=\"let s of character.appearance\"> {{ s }}</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-list-header>\n      <h4>Occupation</h4>\n    </ion-list-header>\n    <ion-list>\n      <ion-item *ngFor=\"let occupation of character.occupation\">{{occupation}}</ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/cast-details/cast-details-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/cast-details/cast-details-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CastDetailsPageRoutingModule */

  /***/
  function srcAppPagesCastDetailsCastDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CastDetailsPageRoutingModule", function () {
      return CastDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _cast_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cast-details.page */
    "./src/app/pages/cast-details/cast-details.page.ts");

    var routes = [{
      path: '',
      component: _cast_details_page__WEBPACK_IMPORTED_MODULE_3__["CastDetailsPage"]
    }];

    var CastDetailsPageRoutingModule = function CastDetailsPageRoutingModule() {
      _classCallCheck(this, CastDetailsPageRoutingModule);
    };

    CastDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CastDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/cast-details/cast-details.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/cast-details/cast-details.module.ts ***!
    \***********************************************************/

  /*! exports provided: CastDetailsPageModule */

  /***/
  function srcAppPagesCastDetailsCastDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CastDetailsPageModule", function () {
      return CastDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _cast_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cast-details-routing.module */
    "./src/app/pages/cast-details/cast-details-routing.module.ts");
    /* harmony import */


    var _cast_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cast-details.page */
    "./src/app/pages/cast-details/cast-details.page.ts");

    var CastDetailsPageModule = function CastDetailsPageModule() {
      _classCallCheck(this, CastDetailsPageModule);
    };

    CastDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cast_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CastDetailsPageRoutingModule"]],
      declarations: [_cast_details_page__WEBPACK_IMPORTED_MODULE_6__["CastDetailsPage"]]
    })], CastDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/cast-details/cast-details.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/cast-details/cast-details.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCastDetailsCastDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZmFlbHIvSW9uaWNQcm9qZWN0cy9icmVha2luZy1iYWQtYXBwL3NyYy9hcHAvcGFnZXMvY2FzdC1kZXRhaWxzL2Nhc3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Nhc3QtZGV0YWlscy9jYXN0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nhc3QtZGV0YWlscy9jYXN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC43KTtcbn0iLCJpb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/cast-details/cast-details.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/cast-details/cast-details.page.ts ***!
    \*********************************************************/

  /*! exports provided: CastDetailsPage */

  /***/
  function srcAppPagesCastDetailsCastDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CastDetailsPage", function () {
      return CastDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var _services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/loading-singleton.service */
    "./src/app/services/loading-singleton.service.ts");
    /* harmony import */


    var src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/favourite.service */
    "./src/app/services/favourite.service.ts");

    var CastDetailsPage = /*#__PURE__*/function () {
      function CastDetailsPage(activatedRoute, api, helpService, loading, favouriteService) {
        _classCallCheck(this, CastDetailsPage);

        this.activatedRoute = activatedRoute;
        this.api = api;
        this.helpService = helpService;
        this.loading = loading;
        this.favouriteService = favouriteService;
        this.isFavourite = false;
        this.charaId = null;
      }

      _createClass(CastDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.charaId = this.activatedRoute.snapshot.paramMap.get("id");
          this.loading.show();
          this.api.getCharacter(this.charaId).subscribe(function (res) {
            _this.character = res[0];

            _this.loading.dismiss();
          }, function (erro) {
            if (erro.status) {
              _this.helpService.toastHttpCodeError(erro.status);
            }
          });
          this.favouriteService.isFavourite(this.charaId).then(function (isFav) {
            _this.isFavourite = isFav;
          });
        }
      }, {
        key: "favouriteChar",
        value: function favouriteChar() {
          var _this2 = this;

          this.favouriteService.favouriteChar(this.charaId).then(function () {
            _this2.isFavourite = true;
          });
        }
      }, {
        key: "unfavouriteChar",
        value: function unfavouriteChar() {
          var _this3 = this;

          this.favouriteService.unfavouriteChar(this.charaId).then(function () {
            _this3.isFavourite = false;
          });
        }
      }]);

      return CastDetailsPage;
    }();

    CastDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
      }, {
        type: _services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_5__["LoadingSingletonService"]
      }, {
        type: src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_6__["FavouriteService"]
      }];
    };

    CastDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-cast-details",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cast-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cast-details/cast-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cast-details.page.scss */
      "./src/app/pages/cast-details/cast-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"], _services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_5__["LoadingSingletonService"], src_app_services_favourite_service__WEBPACK_IMPORTED_MODULE_6__["FavouriteService"]])], CastDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=cast-details-cast-details-module-es5.js.map