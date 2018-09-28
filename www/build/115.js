webpackJsonp([115],{

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetLayout3Module", function() { return ActionSheetLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__action_sheet_layout_3__ = __webpack_require__(1197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActionSheetLayout3Module = (function () {
    function ActionSheetLayout3Module() {
    }
    ActionSheetLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__action_sheet_layout_3__["a" /* ActionSheetLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__action_sheet_layout_3__["a" /* ActionSheetLayout3 */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__action_sheet_layout_3__["a" /* ActionSheetLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ActionSheetLayout3Module);
    return ActionSheetLayout3Module;
}());

//# sourceMappingURL=action-sheet-layout-3.module.js.map

/***/ }),

/***/ 1197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSheetLayout3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionSheetLayout3 = (function () {
    function ActionSheetLayout3(actionSheetCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.slider = {};
    }
    ActionSheetLayout3.prototype.slideHasChanged = function (slider, index) {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            }
            else {
                this.data.splice(index, 1);
            }
        }
    };
    ActionSheetLayout3.prototype.onClickEvent = function (index) {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    };
    ActionSheetLayout3.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ActionSheetLayout3.prototype.ngOnChanges = function (changes) {
    };
    ActionSheetLayout3.prototype.presentActionSheet = function (item, index) {
        var that = this;
        this.data.actionSheet.buttons.forEach(function (element) {
            element["handler"] = function () {
                that.onEvent("onItemClickActionSheet", { "button": element, "item": item }, null);
            };
        });
        var actionSheet = this.actionSheetCtrl.create(this.data.actionSheet);
        actionSheet.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ActionSheetLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ActionSheetLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ActionSheetLayout3.prototype, "content", void 0);
    ActionSheetLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'action-sheet-layout-3',template:/*ion-inline-start:"D:\Pessoal\elements2\src\components\action-sheet\layout-3\action-sheet.html"*/'<!-- Theme Action Sheet - With Text Header -->\n\n<ion-content>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <ion-row *ngIf="data != null">\n\n            <!-- Cards Full Image-->\n\n            <ion-col col-12 col-md-6 col-xl-4 *ngFor="let item of data.items;let i = index">\n\n                <ion-card (click)="onEvent(\'onItemClick\', item, $event)">\n\n                  <ion-item no-lines>\n\n                      <!-- Card Categoty-->\n\n                      <span new-category text-uppercase>{{item.category}}</span>\n\n                      <!-- Card Title-->\n\n                      <h2 card-title text-capitalize>{{item.title}}</h2>\n\n                      <!-- Card Subtitle-->\n\n                      <h3 card-subtitle text-wrap>{{item.subtitle}}</h3>\n\n                      <!-- Card Action Sheet Button-->\n\n                      <button item-end clear ion-button color="primary" button-action-shit (click)="presentActionSheet(data)">\n\n                          <ion-icon name="{{data.shareIcon}}"></ion-icon>\n\n                      </button>\n\n                  </ion-item>\n\n                  <!-- Card Big Image-->\n\n                  <img images-filter [src]="item.image" />\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Pessoal\elements2\src\components\action-sheet\layout-3\action-sheet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ActionSheetLayout3);
    return ActionSheetLayout3;
}());

//# sourceMappingURL=action-sheet-layout-3.js.map

/***/ })

});
//# sourceMappingURL=115.js.map