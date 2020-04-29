(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["death-death-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death/death.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death/death.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Deaths</ion-title>\n  </ion-toolbar>\n  <div id=\"background-searchbar\">\n    <ion-searchbar (ionInput)=\"filterDeaths($event)\"></ion-searchbar>\n  </div>\n</ion-header>\n\n<ion-content *ngIf=\"deathsArray.length > 0\" class=\"{{background}}\">\n  \n  <ion-list>\n    <ion-item *ngFor=\"let d of deathsArray\">\n      <ion-avatar slot=\"start\">\n          <img src=\"{{ charsImages[d.death] == null ? noPicUrl : charsImages[d.death]}}\">\n      </ion-avatar>\n      <ion-label>\n          <h2>{{ d.death }}</h2>\n          <p>Responsible: {{ d.responsible }}</p>\n          <p>Deaths: {{d.number_of_deaths}}</p>\n      </ion-label>\n  </ion-item>\n</ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/death/death-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/death/death-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DeathPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathPageRoutingModule", function() { return DeathPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _death_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./death.page */ "./src/app/pages/death/death.page.ts");




const routes = [
    {
        path: '',
        component: _death_page__WEBPACK_IMPORTED_MODULE_3__["DeathPage"]
    }
];
let DeathPageRoutingModule = class DeathPageRoutingModule {
};
DeathPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeathPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/death/death.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/death/death.module.ts ***!
  \*********************************************/
/*! exports provided: DeathPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathPageModule", function() { return DeathPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _death_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./death-routing.module */ "./src/app/pages/death/death-routing.module.ts");
/* harmony import */ var _death_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./death.page */ "./src/app/pages/death/death.page.ts");







let DeathPageModule = class DeathPageModule {
};
DeathPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _death_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathPageRoutingModule"]
        ],
        declarations: [_death_page__WEBPACK_IMPORTED_MODULE_6__["DeathPage"]]
    })
], DeathPageModule);



/***/ }),

/***/ "./src/app/pages/death/death.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/death/death.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: rgb(0, 0, 0, 0.5);\n  background: url(/assets/img/coffin-dancers3.gif) no-repeat center/cover fixed;\n}\n\nion-list {\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\nion-item {\n  --background: rgb(255, 255, 255, 0);\n}\n\nion-searchbar {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n#background-searchbar {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZmFlbHIvSW9uaWNQcm9qZWN0cy9icmVha2luZy1iYWQtYXBwL3NyYy9hcHAvcGFnZXMvZGVhdGgvZGVhdGgucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZWF0aC9kZWF0aC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLDZFQUFBO0FDQ0o7O0FERUE7RUFDSSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0ksbUNBQUE7QUNDSjs7QURFQTtFQUNJLDBDQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVhdGgvZGVhdGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuNSk7XG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2NvZmZpbi1kYW5jZXJzMy5naWYpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7IFxufVxuXG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDI1NSwgMjU1LCAwLjYpOyBcbn1cbiAgXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbmlvbi1zZWFyY2hiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuI2JhY2tncm91bmQtc2VhcmNoYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xufVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjUpO1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvY29mZmluLWRhbmNlcnMzLmdpZikgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbiNiYWNrZ3JvdW5kLXNlYXJjaGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/death/death.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/death/death.page.ts ***!
  \*******************************************/
/*! exports provided: DeathPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathPage", function() { return DeathPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var src_app_services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loading-singleton.service */ "./src/app/services/loading-singleton.service.ts");
/* harmony import */ var src_app_services_characters_images_singleton_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/characters-images-singleton.service */ "./src/app/services/characters-images-singleton.service.ts");






let DeathPage = class DeathPage {
    constructor(api, helpService, loading, charsImg) {
        this.api = api;
        this.helpService = helpService;
        this.loading = loading;
        this.charsImg = charsImg;
        this.deathsArray = [];
        this.charsImages = this.charsImg.getImageUrl();
        this.noPicUrl = "assets/img/no-pic.png";
    }
    ngOnInit() {
        this.loadDeaths();
    }
    loadDeaths() {
        this.loading.show();
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe((res) => {
            this.deathsArray = res;
            this.loading.dismiss();
        }, (erro) => {
            if (erro.status) {
                this.helpService.toastHttpCodeError(erro.status);
            }
        });
    }
    /**
     * Adapted from Simon Grimm code watched on Youtube - Link https://www.youtube.com/watch?v=Nc1RqvDY-B8
     * @param ev
     */
    filterDeaths(ev) {
        const val = ev.target.value;
        if (val && val.trim() != '' && val.length > 2) {
            //console.log(val);
            this.deaths.subscribe(res => this.deathsArray = res.filter(res => res.death.toLowerCase().indexOf(val.toLowerCase()) > -1));
        }
        else {
            this.deaths.subscribe(res => this.deathsArray = res);
        }
    }
};
DeathPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] },
    { type: src_app_services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_4__["LoadingSingletonService"] },
    { type: src_app_services_characters_images_singleton_service__WEBPACK_IMPORTED_MODULE_5__["CharactersImagesSingletonService"] }
];
DeathPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-death',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./death.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death/death.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./death.page.scss */ "./src/app/pages/death/death.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
        src_app_services_loading_singleton_service__WEBPACK_IMPORTED_MODULE_4__["LoadingSingletonService"],
        src_app_services_characters_images_singleton_service__WEBPACK_IMPORTED_MODULE_5__["CharactersImagesSingletonService"]])
], DeathPage);



/***/ })

}]);
//# sourceMappingURL=death-death-module-es2015.js.map