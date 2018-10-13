webpackJsonp([68],{

/***/ 1101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLayout6Module", function() { return SelectLayout6Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_layout_6__ = __webpack_require__(1254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectLayout6Module = (function () {
    function SelectLayout6Module() {
    }
    SelectLayout6Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_layout_6__["a" /* SelectLayout6 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_layout_6__["a" /* SelectLayout6 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__select_layout_6__["a" /* SelectLayout6 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SelectLayout6Module);
    return SelectLayout6Module;
}());

//# sourceMappingURL=select-layout-6.module.js.map

/***/ }),

/***/ 1254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLayout6; });
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

var SelectLayout6 = (function () {
    function SelectLayout6() {
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
    ], SelectLayout6.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], SelectLayout6.prototype, "events", void 0);
    SelectLayout6 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'select-layout-6',template:/*ion-inline-start:"/home/santinho/GIT/elements3/elements2/src/components/select/layout-6/select.html"*/'<ion-item padding-top no-lines *ngIf="data != null">\n\n    <ion-label item-title>{{data.title}}</ion-label>\n\n    <ion-select interface="popover" [(ngModel)]="data.selectedItemMonth" multiple="true">\n\n        <ion-option *ngFor="let item of data.itemsMonth; let i= index" [value]="item.id">{{item.title}}</ion-option>\n\n    </ion-select>\n\n\n\n    <ion-select interface="popover" [(ngModel)]="data.selectedItemYear" [multiple]="true">\n\n        <ion-option *ngFor="let item of data.itemsYears; let i= index" [value]="item.id">{{item.title}}</ion-option>\n\n    </ion-select>\n\n</ion-item>\n\n'/*ion-inline-end:"/home/santinho/GIT/elements3/elements2/src/components/select/layout-6/select.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SelectLayout6);
    return SelectLayout6;
}());

//# sourceMappingURL=select-layout-6.js.map

/***/ })

});
//# sourceMappingURL=68.js.map