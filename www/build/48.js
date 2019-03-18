webpackJsonp([48],{

/***/ 1085:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonLayout3Module", function() { return RadioButtonLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radio_button_layout_3__ = __webpack_require__(1202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RadioButtonLayout3Module = (function () {
    function RadioButtonLayout3Module() {
    }
    RadioButtonLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__radio_button_layout_3__["a" /* RadioButtonLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__radio_button_layout_3__["a" /* RadioButtonLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__radio_button_layout_3__["a" /* RadioButtonLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], RadioButtonLayout3Module);
    return RadioButtonLayout3Module;
}());

//# sourceMappingURL=radio-button-layout-3.module.js.map

/***/ }),

/***/ 1202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButtonLayout3; });
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

var RadioButtonLayout3 = (function () {
    function RadioButtonLayout3() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], RadioButtonLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], RadioButtonLayout3.prototype, "events", void 0);
    RadioButtonLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'radio-button-layout-3',template:/*ion-inline-start:"/home/santinho/GIT/build/elements2/src/components/radio-button/layout-3/radio-button.html"*/'<!--Themes Radio Button - Simple 2-->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-list radio-group [(ngModel)]="data.selectedItem">\n\n      <!--Content -->\n\n      <ion-item lines *ngFor="let item of data.items; let i= index">\n\n        <ion-radio item-start [value]="item.id" (ionSelect)="onEvent(\'onSelect\',item)"></ion-radio>\n\n        <!--Content Title-->\n\n        <ion-label item-title>{{item.title}}</ion-label>\n\n        <!--Content Subtitle-->\n\n        <ion-label item-end text-right item-subtitle>{{item.subtitle}}</ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/santinho/GIT/build/elements2/src/components/radio-button/layout-3/radio-button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RadioButtonLayout3);
    return RadioButtonLayout3;
}());

//# sourceMappingURL=radio-button-layout-3.js.map

/***/ })

});
//# sourceMappingURL=48.js.map