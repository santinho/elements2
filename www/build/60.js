webpackJsonp([60],{

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenLayout3Module", function() { return SplashScreenLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_3__ = __webpack_require__(1256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplashScreenLayout3Module = (function () {
    function SplashScreenLayout3Module() {
    }
    SplashScreenLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_3__["a" /* SplashScreenLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_3__["a" /* SplashScreenLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_3__["a" /* SplashScreenLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SplashScreenLayout3Module);
    return SplashScreenLayout3Module;
}());

//# sourceMappingURL=splash-screen-layout-3.module.js.map

/***/ }),

/***/ 1256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreenLayout3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SplashScreenLayout3 = (function () {
    function SplashScreenLayout3() {
    }
    SplashScreenLayout3.prototype.ngOnChanges = function (changes) {
        clearInterval(this.timer);
        this.executeEvents();
    };
    SplashScreenLayout3.prototype.getData = function () {
        return this.data;
    };
    SplashScreenLayout3.prototype.getEvents = function () {
        return this.events;
    };
    SplashScreenLayout3.prototype.executeEvents = function () {
        var duration = (this.getData() && this.getData().duration) ? this.getData().duration : 10000;
        var events = null;
        if (this.getEvents()) {
            events = this.getEvents()['onRedirect'];
        }
        this.timer = setTimeout(function () {
            if (events) {
                events();
            }
        }, duration);
    };
    SplashScreenLayout3.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], SplashScreenLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], SplashScreenLayout3.prototype, "events", void 0);
    SplashScreenLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'splash-screen-layout-3',template:/*ion-inline-start:"/home/santinho/Downloads/codecanyon-19375225-ionic-2-ui-themetemplate-app-material-design-yellow-dark/Source/src/components/splash-screen/layout-3/splash-screen.html"*/'<!--Theme Down + Ken Burns-->\n\n<ion-grid>\n\n  <ion-row id="splash-background-image">\n\n    <img class="splash-screen" [src]="data.backgroundImage" />\n\n    <div class="logo-title item-fade-in">\n\n      <img class="logo" [src]="data.logo" />\n\n      <h1>{{data.title}}</h1>\n\n    </div>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"/home/santinho/Downloads/codecanyon-19375225-ionic-2-ui-themetemplate-app-material-design-yellow-dark/Source/src/components/splash-screen/layout-3/splash-screen.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SplashScreenLayout3);
    return SplashScreenLayout3;
}());

//# sourceMappingURL=splash-screen-layout-3.js.map

/***/ })

});
//# sourceMappingURL=60.js.map