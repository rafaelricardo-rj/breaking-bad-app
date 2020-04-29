function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["death-death-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death/death.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death/death.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDeathDeathPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Deaths</ion-title>\n  </ion-toolbar>\n  <div id=\"background-searchbar\">\n    <ion-searchbar (ionInput)=\"filterDeaths($event)\"></ion-searchbar>\n  </div>\n</ion-header>\n\n<ion-content *ngIf=\"deathsArray.length > 0\" class=\"{{background}}\">\n  \n  <ion-list>\n    <ion-item *ngFor=\"let d of deathsArray\">\n      <ion-avatar slot=\"start\">\n          <img src=\"{{ charsImages[d.death] == null ? noPicUrl : charsImages[d.death]}}\">\n      </ion-avatar>\n      <ion-label>\n          <h2>{{ d.death }}</h2>\n          <p>Responsible: {{ d.responsible }}</p>\n          <p>Deaths: {{d.number_of_deaths}}</p>\n      </ion-label>\n  </ion-item>\n</ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/death/death-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/death/death-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: DeathPageRoutingModule */

  /***/
  function srcAppPagesDeathDeathRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathPageRoutingModule", function () {
      return DeathPageRoutingModule;
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


    var _death_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./death.page */
    "./src/app/pages/death/death.page.ts");

    var routes = [{
      path: '',
      component: _death_page__WEBPACK_IMPORTED_MODULE_3__["DeathPage"]
    }];

    var DeathPageRoutingModule = function DeathPageRoutingModule() {
      _classCallCheck(this, DeathPageRoutingModule);
    };

    DeathPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeathPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/death/death.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/death/death.module.ts ***!
    \*********************************************/

  /*! exports provided: DeathPageModule */

  /***/
  function srcAppPagesDeathDeathModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathPageModule", function () {
      return DeathPageModule;
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


    var _death_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./death-routing.module */
    "./src/app/pages/death/death-routing.module.ts");
    /* harmony import */


    var _death_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./death.page */
    "./src/app/pages/death/death.page.ts");

    var DeathPageModule = function DeathPageModule() {
      _classCallCheck(this, DeathPageModule);
    };

    DeathPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _death_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathPageRoutingModule"]],
      declarations: [_death_page__WEBPACK_IMPORTED_MODULE_6__["DeathPage"]]
    })], DeathPageModule);
    /***/
  },

  /***/
  "./src/app/pages/death/death.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/death/death.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDeathDeathPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgb(0, 0, 0, 0.5);\n  background: url(/assets/img/coffin-dancers3.gif) no-repeat center/cover fixed;\n}\n\nion-list {\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\nion-item {\n  --background: rgb(255, 255, 255, 0);\n}\n\nion-searchbar {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n#background-searchbar {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvYnJlYWtpbmctYmFkLWFwcC9zcmMvYXBwL3BhZ2VzL2RlYXRoL2RlYXRoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGVhdGgvZGVhdGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSw2RUFBQTtBQ0NKOztBREVBO0VBQ0ksMENBQUE7QUNDSjs7QURFQTtFQUNJLG1DQUFBO0FDQ0o7O0FERUE7RUFDSSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlYXRoL2RlYXRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjUpO1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9jb2ZmaW4tZGFuY2VyczMuZ2lmKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkOyBcbn1cblxuaW9uLWxpc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSwgMC42KTsgXG59XG4gIFxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuXG5pb24tc2VhcmNoYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbiNiYWNrZ3JvdW5kLXNlYXJjaGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwgMC41KTtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2NvZmZpbi1kYW5jZXJzMy5naWYpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuXG4jYmFja2dyb3VuZC1zZWFyY2hiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/death/death.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/death/death.page.ts ***!
    \*******************************************/

  /*! exports provided: DeathPage */

  /***/
  function srcAppPagesDeathDeathPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathPage", function () {
      return DeathPage;
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


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var src_app_services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/loading-singleton.service */
    "./src/app/services/loading-singleton.service.ts");
    /* harmony import */


    var src_app_services_characters_images_singleton_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/characters-images-singleton.service */
    "./src/app/services/characters-images-singleton.service.ts");

    var DeathPage = /*#__PURE__*/function () {
      function DeathPage(api, helpService, loading, charsImg) {
        _classCallCheck(this, DeathPage);

        this.api = api;
        this.helpService = helpService;
        this.loading = loading;
        this.charsImg = charsImg;
        this.deathsArray = [];
        this.charsImages = this.charsImg.getImageUrl();
        this.noPicUrl = "assets/img/no-pic.png";
      }

      _createClass(DeathPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDeaths();
        }
      }, {
        key: "loadDeaths",
        value: function loadDeaths() {
          var _this = this;

          this.loading.show();
          this.deaths = this.api.getDeaths();
          this.deaths.subscribe(function (res) {
            _this.deathsArray = res;

            _this.loading.dismiss();
          }, function (erro) {
            if (erro.status) {
              _this.helpService.toastHttpCodeError(erro.status);
            }
          });
        }
        /**
         * Adapted from Simon Grimm code watched on Youtube - Link https://www.youtube.com/watch?v=Nc1RqvDY-B8
         * @param ev
         */

      }, {
        key: "filterDeaths",
        value: function filterDeaths(ev) {
          var _this2 = this;

          var val = ev.target.value;

          if (val && val.trim() != '' && val.length > 2) {
            //console.log(val);
            this.deaths.subscribe(function (res) {
              return _this2.deathsArray = res.filter(function (res) {
                return res.death.toLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            });
          } else {
            this.deaths.subscribe(function (res) {
              return _this2.deathsArray = res;
            });
          }
        }
      }]);

      return DeathPage;
    }();

    DeathPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: src_app_services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_4__["LoadingSingletonService"]
      }, {
        type: src_app_services_characters_images_singleton_service__WEBPACK_IMPORTED_MODULE_5__["CharactersImagesSingletonService"]
      }];
    };

    DeathPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-death',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./death.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death/death.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./death.page.scss */
      "./src/app/pages/death/death.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"], src_app_services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_4__["LoadingSingletonService"], src_app_services_characters_images_singleton_service__WEBPACK_IMPORTED_MODULE_5__["CharactersImagesSingletonService"]])], DeathPage);
    /***/
  }
}]);
//# sourceMappingURL=death-death-module-es5.js.map