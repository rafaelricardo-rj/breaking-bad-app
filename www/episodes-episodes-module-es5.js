function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episodes-episodes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEpisodesEpisodesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Episodes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"eps.length > 0\">\n    <ion-list class=\"episodes-list\">\n        <ion-list-header>\n            <ion-chip color=\"danger\">\n                <ion-label>Season 1</ion-label>\n            </ion-chip>\n        </ion-list-header>\n        <ion-item button detail lines=\"inset\" *ngFor=\"let episode of eps | myfilter:{season:1}\" (click)=\"openDetails(episode)\">\n            <ion-label>\n                <h2>{{ episode.title }}</h2>\n                <p>Air date: {{ episode.title }}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-list class=\"episodes-list\">\n        <ion-list-header>\n            <ion-chip color=\"danger\">\n                <ion-label>Season 2</ion-label>\n            </ion-chip>\n        </ion-list-header>\n        <ion-item button detail lines=\"inset\" *ngFor=\"let episode of eps | myfilter:{season:2}\" (click)=\"openDetails(episode)\">\n            <ion-label>\n                <h2>{{ episode.title }}</h2>\n                <p>Air date: {{ episode.title }}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-list class=\"episodes-list\">\n        <ion-list-header>\n            <ion-chip color=\"danger\">\n                <ion-label>Season 3</ion-label>\n            </ion-chip>\n        </ion-list-header>\n        <ion-item button detail lines=\"inset\" *ngFor=\"let episode of eps | myfilter:{season:3}\" (click)=\"openDetails(episode)\">\n            <ion-label>\n                <h2>{{ episode.title }}</h2>\n                <p>Air date: {{ episode.title }}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-list class=\"episodes-list\">\n        <ion-list-header>\n            <ion-chip color=\"danger\">\n                <ion-label>Season 4</ion-label>\n            </ion-chip>\n        </ion-list-header>\n        <ion-item button detail lines=\"inset\" *ngFor=\"let episode of eps | myfilter:{season:4}\" (click)=\"openDetails(episode)\">\n            <ion-label>\n                <h2>{{ episode.title }}</h2>\n                <p>Air date: {{ episode.title }}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-list class=\"episodes-list\">\n        <ion-list-header>\n            <ion-chip color=\"danger\">\n                <ion-label>Season 5</ion-label>\n            </ion-chip>\n        </ion-list-header>\n        <ion-item button detail lines=\"inset\" *ngFor=\"let episode of eps | myfilter:{season:5}\" (click)=\"openDetails(episode)\">\n            <ion-label>\n                <h2>{{ episode.title }}</h2>\n                <p>Air date: {{ episode.title }}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<!-- if there are no results from the API, apply an empty content to allow a dark layer over the background image-->\n<ion-content fullscreen=\"true\" *ngIf=\"eps.length == 0 || eps == null\"></ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/episodes/episodes-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/episodes/episodes-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: EpisodesPageRoutingModule */

  /***/
  function srcAppPagesEpisodesEpisodesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodesPageRoutingModule", function () {
      return EpisodesPageRoutingModule;
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


    var _episodes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./episodes.page */
    "./src/app/pages/episodes/episodes.page.ts");

    var routes = [{
      path: '',
      component: _episodes_page__WEBPACK_IMPORTED_MODULE_3__["EpisodesPage"]
    }];

    var EpisodesPageRoutingModule = function EpisodesPageRoutingModule() {
      _classCallCheck(this, EpisodesPageRoutingModule);
    };

    EpisodesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EpisodesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/episodes/episodes.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/episodes/episodes.module.ts ***!
    \***************************************************/

  /*! exports provided: EpisodesPageModule */

  /***/
  function srcAppPagesEpisodesEpisodesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodesPageModule", function () {
      return EpisodesPageModule;
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


    var _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./episodes-routing.module */
    "./src/app/pages/episodes/episodes-routing.module.ts");
    /* harmony import */


    var _episodes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./episodes.page */
    "./src/app/pages/episodes/episodes.page.ts");
    /* harmony import */


    var _pipes_my_filter_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pipes/my-filter-pipe.pipe */
    "./src/app/pipes/my-filter-pipe.pipe.ts");

    var EpisodesPageModule = function EpisodesPageModule() {
      _classCallCheck(this, EpisodesPageModule);
    };

    EpisodesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodesPageRoutingModule"]],
      declarations: [_episodes_page__WEBPACK_IMPORTED_MODULE_6__["EpisodesPage"], _pipes_my_filter_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__["MyFilterPipePipe"]]
    })], EpisodesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/episodes/episodes.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/episodes/episodes.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEpisodesEpisodesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgb(0, 0, 0, 0.5);\n}\n\nion-list {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\nion-item {\n  --background: rgb(255, 255, 255, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZmFlbHIvSW9uaWNQcm9qZWN0cy9icmVha2luZy1iYWQtYXBwL3NyYy9hcHAvcGFnZXMvZXBpc29kZXMvZXBpc29kZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lcGlzb2Rlcy9lcGlzb2Rlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lcGlzb2Rlcy9lcGlzb2Rlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuNSk7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSwgMC43KTsgIFxufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDApO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwgMC41KTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSwgMCk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/episodes/episodes.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/episodes/episodes.page.ts ***!
    \*************************************************/

  /*! exports provided: EpisodesPage */

  /***/
  function srcAppPagesEpisodesEpisodesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodesPage", function () {
      return EpisodesPage;
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

    var EpisodesPage = /*#__PURE__*/function () {
      function EpisodesPage(router, api, helpService, loading) {
        _classCallCheck(this, EpisodesPage);

        this.router = router;
        this.api = api;
        this.helpService = helpService;
        this.loading = loading;
        this.eps = [];
      }

      _createClass(EpisodesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading.show();
          this.episodes = this.api.getEpisodesAll();
          this.episodes.subscribe(function (res) {
            _this.eps = _this.eps.concat(res);

            _this.loading.dismiss();
          }, function (erro) {
            if (erro.status) {
              _this.helpService.toastHttpCodeError(erro.status);
            }
          });
        }
      }, {
        key: "openDetails",
        value: function openDetails(episode) {
          this.router.navigateByUrl("/tabs/episodes/".concat(episode.episode_id));
        }
      }]);

      return EpisodesPage;
    }();

    EpisodesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
      }, {
        type: _services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_5__["LoadingSingletonService"]
      }];
    };

    EpisodesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-episodes",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./episodes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./episodes.page.scss */
      "./src/app/pages/episodes/episodes.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"], _services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_5__["LoadingSingletonService"]])], EpisodesPage);
    /***/
  },

  /***/
  "./src/app/pipes/my-filter-pipe.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/pipes/my-filter-pipe.pipe.ts ***!
    \**********************************************/

  /*! exports provided: MyFilterPipePipe */

  /***/
  function srcAppPipesMyFilterPipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyFilterPipePipe", function () {
      return MyFilterPipePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /*
    * got this in https://www.codegrepper.com/code-examples/whatever/angular+filter+ngfor
    * there are no name about this article in the site
    */


    var MyFilterPipePipe = /*#__PURE__*/function () {
      function MyFilterPipePipe() {
        _classCallCheck(this, MyFilterPipePipe);
      }

      _createClass(MyFilterPipePipe, [{
        key: "transform",
        value: function transform(items, filter) {
          if (!items || !filter) {
            return items;
          } // filter items array, items which match and return true will be
          // kept, false will be filtered out


          return items.filter(function (item) {
            return item.season.indexOf(filter.season) !== -1;
          });
        }
      }]);

      return MyFilterPipePipe;
    }();

    MyFilterPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'myfilter',
      pure: false
    })], MyFilterPipePipe);
    /***/
  }
}]);
//# sourceMappingURL=episodes-episodes-module-es5.js.map