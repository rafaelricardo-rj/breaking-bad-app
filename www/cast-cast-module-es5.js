function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cast-cast-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cast/cast.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cast/cast.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCastCastPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Breaking Bad</ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-button (click)=\"goToCredits()\">\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"chars.length > 0\">\n\n    <ion-list id=\"characters-list\">\n        <ion-item button detail lines=\"inset\" *ngFor=\"let character of chars\" (click)=\"openDetails(character)\">\n            <ion-avatar slot=\"start\">\n                <img src=\"{{ character.img }}\">\n            </ion-avatar>\n            <ion-label>\n                <h2>{{ character.name }}</h2>\n                <p>Birthday {{ character.birthday }}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-infinite-scroll threshold=\"15%\" id=\"infinite-scroll\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loading-spinner=\"bubbles\" loading-text=\"Loading more data...\" style=\"background-color:rgb(255, 255, 255, 0.7);\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n<!-- if there are no results from the API, apply an empty content to allow a dark layer over the background image-->\n<ion-content fullscreen=\"true\" *ngIf=\"chars.length == 0 || chars == null\"></ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/cast/cast-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/cast/cast-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CastPageRoutingModule */

  /***/
  function srcAppPagesCastCastRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CastPageRoutingModule", function () {
      return CastPageRoutingModule;
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


    var _cast_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cast.page */
    "./src/app/pages/cast/cast.page.ts");

    var routes = [{
      path: '',
      component: _cast_page__WEBPACK_IMPORTED_MODULE_3__["CastPage"]
    }];

    var CastPageRoutingModule = function CastPageRoutingModule() {
      _classCallCheck(this, CastPageRoutingModule);
    };

    CastPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CastPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/cast/cast.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/cast/cast.module.ts ***!
    \*******************************************/

  /*! exports provided: CastPageModule */

  /***/
  function srcAppPagesCastCastModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CastPageModule", function () {
      return CastPageModule;
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


    var _cast_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cast-routing.module */
    "./src/app/pages/cast/cast-routing.module.ts");
    /* harmony import */


    var _cast_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cast.page */
    "./src/app/pages/cast/cast.page.ts");

    var CastPageModule = function CastPageModule() {
      _classCallCheck(this, CastPageModule);
    };

    CastPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cast_routing_module__WEBPACK_IMPORTED_MODULE_5__["CastPageRoutingModule"]],
      declarations: [_cast_page__WEBPACK_IMPORTED_MODULE_6__["CastPage"]]
    })], CastPageModule);
    /***/
  },

  /***/
  "./src/app/pages/cast/cast.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/cast/cast.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCastCastPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgb(0, 0, 0, 0.5);\n}\n\nion-list {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\nion-item {\n  --background: rgb(255, 255, 255, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZmFlbHIvSW9uaWNQcm9qZWN0cy9icmVha2luZy1iYWQtYXBwL3NyYy9hcHAvcGFnZXMvY2FzdC9jYXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FzdC9jYXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsbUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nhc3QvY2FzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuNSk7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSwgMC43KTs7ICBcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1LCAwKTtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuNSk7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDApO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/cast/cast.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/cast/cast.page.ts ***!
    \*****************************************/

  /*! exports provided: CastPage */

  /***/
  function srcAppPagesCastCastPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CastPage", function () {
      return CastPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var _services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/loading-singleton.service */
    "./src/app/services/loading-singleton.service.ts");

    var CastPage = /*#__PURE__*/function () {
      function CastPage(router, api, toastController, helpService, loading // check this class to see the comments and find out where it comes from
      ) {
        _classCallCheck(this, CastPage);

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

      _createClass(CastPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadCharsLoading();
        }
      }, {
        key: "loadCharsLoading",
        value: function loadCharsLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.loading.show();
                    this.api.getPaginatedCharacters(this.limit, this.index).subscribe(function (res) {
                      _this.chars = _this.chars.concat(res);

                      _this.loading.dismiss();
                    }, function (erro) {
                      if (erro.status) {
                        _this.helpService.toastHttpCodeError(erro.status);
                      }
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // event parameter can be null

      }, {
        key: "loadChars",
        value: function loadChars(event) {
          var _this2 = this;

          this.api.getPaginatedCharacters(this.limit, this.index).subscribe(function (res) {
            _this2.chars = _this2.chars.concat(res);

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
          }, function (erro) {
            if (erro.status) {
              _this2.helpService.toastHttpCodeError(erro.status);
            }
          });
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          this.index += 15;
          this.loadChars(event);

          if (this.index > this.maxCharacters - 1) {
            event.target.disable = true;
          }
        }
      }, {
        key: "openDetails",
        value: function openDetails(character) {
          this.router.navigateByUrl("/tabs/cast/".concat(character.char_id));
        }
      }, {
        key: "goToCredits",
        value: function goToCredits() {
          this.router.navigateByUrl("credits");
        }
      }]);

      return CastPage;
    }();

    CastPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]
      }, {
        type: _services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_6__["LoadingSingletonService"] // check this class to see the comments and find out where it comes from

      }];
    };

    CastPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cast',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cast.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cast/cast.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cast.page.scss */
      "./src/app/pages/cast/cast.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"], _services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_6__["LoadingSingletonService"] // check this class to see the comments and find out where it comes from
    ])], CastPage);
    /***/
  }
}]);
//# sourceMappingURL=cast-cast-module-es5.js.map