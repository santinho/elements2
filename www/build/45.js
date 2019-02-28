webpackJsonp([45],{

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPage1Module", function() { return TabPage1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_page_1__ = __webpack_require__(1331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabPage1Module = (function () {
    function TabPage1Module() {
    }
    TabPage1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab_page_1__["a" /* TabPage1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_page_1__["a" /* TabPage1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tab_page_1__["a" /* TabPage1 */]
            ]
        })
    ], TabPage1Module);
    return TabPage1Module;
}());

//# sourceMappingURL=tab-page-1.module.js.map

/***/ }),

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_service__ = __webpack_require__(606);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsService = (function () {
    function TabsService(af, loadingService) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.getId = function () { return 'tabs'; };
        this.getTitle = function () { return 'Tabs'; };
        this.getAllThemes = function () {
            return [
                { "title": "Footer tab - text", "theme": "layout1" },
                { "title": "Footer tab - icons", "theme": "layout2" },
                { "title": "Header tab - text", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.charAt(0).toUpperCase() +
                menuItem.slice(1)]();
        };
        this.getDataForTab1 = function () {
            return {
                "backgroundImage": "assets/images/avatar-large/5.jpg",
                "title": "Fragment Example 1",
                "description": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            };
        };
        this.getDataForTab2 = function () {
            return {
                "backgroundImage": "assets/images/avatar-large/6.jpg",
                "title": "Fragment Example 2",
                "description": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            };
        };
        this.getDataForTab3 = function () {
            return {
                "backgroundImage": "assets/images/avatar-large/7.jpg",
                "title": "Fragment Example 3",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            };
        };
        this.getDataForTab4 = function () {
            return {
                "backgroundImage": "assets/images/avatar-large/5.jpg",
                "title": "Fragment Example 4",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            };
        };
        this.getDataForTab5 = function () {
            return {
                "backgroundImage": "assets/images/avatar-large/6.jpg",
                "title": "Fragment Example 5",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's."
            };
        };
        this.getDataForTab6 = function () {
            return {
                "backgroundImage": "assets/images/avatar-large/7.jpg",
                "title": "Fragment Example 6",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            };
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
    }
    TabsService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('tab/' + item)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ;
    TabsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__loading_service__["a" /* LoadingService */]])
    ], TabsService);
    return TabsService;
}());

//# sourceMappingURL=tabs-service.js.map

/***/ }),

/***/ 1331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPage1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_native__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tabs_service__ = __webpack_require__(1171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabPage1 = (function () {
    function TabPage1(tabsService) {
        var _this = this;
        this.tabsService = tabsService;
        this.params = {};
        this.tabsService.load("tab1").subscribe(function (snapshot) {
            _this.params = snapshot;
        });
    }
    TabPage1.prototype.ngOnChanges = function (changes) {
        this.params = changes['data'].currentValue;
    };
    TabPage1.prototype.onItemClick = function (item) {
        if (window.location.hostname === "localhost") {
            console.log("Folow");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_ionic_native__["e" /* Toast */].show("Folow", '1000', 'bottom').subscribe(function (toast) { });
        }
    };
    TabPage1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Gogs\Santinho\elements2\src\pages\tab-page-1\tab-page-1.html"*/'<!---Settings TAB lauout-1-->\n\n<ion-content class="content-background-images">\n\n    <div background-size class="tab-1"\n\n    [ngStyle]="{\'background-image\': \'url(\' + params.backgroundImage + \')\'}" *ngIf=" params != null">\n\n        <div padding class="tab-decription">\n\n            <h2 tabs-title text-center>{{params.title}}</h2>\n\n            <p tabs-subtitle text-center>{{params.description}}</p>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Gogs\Santinho\elements2\src\pages\tab-page-1\tab-page-1.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_tabs_service__["a" /* TabsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_tabs_service__["a" /* TabsService */]])
    ], TabPage1);
    return TabPage1;
}());

//# sourceMappingURL=tab-page-1.js.map

/***/ })

});
//# sourceMappingURL=45.js.map