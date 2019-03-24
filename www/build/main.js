webpackJsonp([83],{

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (message) {
        var toastItem = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].TOAST;
        toastItem["message"] = message;
        var toast = this.toastCtrl.create(toastItem);
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = Object.freeze({
    "IS_FIREBASE_ENABLED": false,
    "SHOW_START_WIZARD": false,
    "SUBSCRIBE": true,
    "TOAST": {
        "duration": 1000,
        "position": "buttom"
    },
    "FIREBASE_CONFIG": {
        "apiKey": "AIzaSyCqrGGPf5TJK0kwVqn8Z5-HnKJcx6wS9Tg",
        "authDomain": "elements-arton.firebaseapp.com",
        "databaseURL": "https://elements-arton.firebaseio.com",
        "projectId": "elements-arton",
        "storageBucket": "elements-arton.appspot.com",
        "messagingSenderId": "715361864172"
    },
    "MAP_KEY": {
        "apiKey": "AIzaSyCqrGGPf5TJK0kwVqn8Z5-HnKJcx6wS9Tg"
    }
});
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 247;

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/action-sheet/layout-1/action-sheet-layout-1.module": [
		1038,
		12
	],
	"../components/action-sheet/layout-2/action-sheet-layout-2.module": [
		1039,
		11
	],
	"../components/action-sheet/layout-3/action-sheet-layout-3.module": [
		1040,
		82
	],
	"../components/check-box/layout-1/check-box-layout-1.module": [
		1041,
		81
	],
	"../components/check-box/layout-2/check-box-layout-2.module": [
		1042,
		80
	],
	"../components/check-box/layout-3/check-box-layout-3.module": [
		1043,
		79
	],
	"../components/check-box/layout-4/check-box-layout-4.module": [
		1044,
		78
	],
	"../components/full-screen-gallery/full-screen-gallery.module": [
		1045,
		77
	],
	"../components/image-gallery/layout-1/image-gallery-layout-1.module": [
		1046,
		76
	],
	"../components/image-gallery/layout-2/image-gallery-layout-2.module": [
		1047,
		75
	],
	"../components/image-gallery/layout-3/image-gallery-layout-3.module": [
		1048,
		74
	],
	"../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module": [
		1049,
		73
	],
	"../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module": [
		1050,
		72
	],
	"../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module": [
		1051,
		71
	],
	"../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module": [
		1052,
		70
	],
	"../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module": [
		1053,
		69
	],
	"../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module": [
		1054,
		68
	],
	"../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module": [
		1055,
		67
	],
	"../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module": [
		1056,
		66
	],
	"../components/list-view/drag-and-drop/layout-4/drag-and-drop-layout-4.module": [
		1057,
		65
	],
	"../components/list-view/expandable/layout-1/expandable-layout-1.module": [
		1058,
		64
	],
	"../components/list-view/expandable/layout-2/expandable-layout-2.module": [
		1059,
		63
	],
	"../components/list-view/expandable/layout-3/expandable-layout-3.module": [
		1060,
		62
	],
	"../components/list-view/google-card/layout-1/google-card-layout-1.module": [
		1061,
		61
	],
	"../components/list-view/google-card/layout-2/google-card-layout-2.module": [
		1062,
		60
	],
	"../components/list-view/google-card/layout-3/google-card-layout-3.module": [
		1063,
		59
	],
	"../components/list-view/google-card/layout-4/google-card-layout-4.module": [
		1064,
		58
	],
	"../components/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module": [
		1065,
		6
	],
	"../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module": [
		1066,
		5
	],
	"../components/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module": [
		1067,
		4
	],
	"../components/list-view/sticky-list-header/layout-4/sticky-list-header-layout-4.module": [
		1068,
		3
	],
	"../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module": [
		1069,
		57
	],
	"../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module": [
		1070,
		56
	],
	"../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module": [
		1071,
		55
	],
	"../components/list-view/swipe-to-dismiss/layout-4/swipe-to-dismiss-layout-4.module": [
		1072,
		54
	],
	"../components/login/layout-1/login-layout-1.module": [
		1073,
		53
	],
	"../components/login/layout-2/login-layout-2.module": [
		1074,
		52
	],
	"../components/maps/layout-1/maps-layout-1.module": [
		1075,
		0
	],
	"../components/maps/layout-2/maps-layout-2.module": [
		1076,
		2
	],
	"../components/maps/layout-3/maps-layout-3.module": [
		1077,
		1
	],
	"../components/parallax/layout-1/parallax-layout-1.module": [
		1078,
		10
	],
	"../components/parallax/layout-2/parallax-layout-2.module": [
		1079,
		9
	],
	"../components/parallax/layout-3/parallax-layout-3.module": [
		1080,
		8
	],
	"../components/parallax/layout-4/parallax-layout-4.module": [
		1081,
		7
	],
	"../components/qrcode/layout-1/qrcode-layout-1.module": [
		1082,
		51
	],
	"../components/radio-button/layout-1/radio-button-layout-1.module": [
		1083,
		50
	],
	"../components/radio-button/layout-2/radio-button-layout-2.module": [
		1085,
		49
	],
	"../components/radio-button/layout-3/radio-button-layout-3.module": [
		1084,
		48
	],
	"../components/range/layout-1/range-layout-1.module": [
		1086,
		47
	],
	"../components/range/layout-2/range-layout-2.module": [
		1087,
		46
	],
	"../components/range/layout-3/range-layout-3.module": [
		1088,
		45
	],
	"../components/range/layout-4/range-layout-4.module": [
		1089,
		44
	],
	"../components/register/layout-1/register-layout-1.module": [
		1090,
		43
	],
	"../components/register/layout-2/register-layout-2.module": [
		1091,
		42
	],
	"../components/search-bar/layout-1/search-bar-layout-1.module": [
		1092,
		41
	],
	"../components/search-bar/layout-2/search-bar-layout-2.module": [
		1093,
		40
	],
	"../components/search-bar/layout-3/search-bar-layout-3.module": [
		1094,
		39
	],
	"../components/select/layout-1/select-layout-1.module": [
		1095,
		38
	],
	"../components/select/layout-2/select-layout-2.module": [
		1096,
		37
	],
	"../components/select/layout-3/select-layout-3.module": [
		1097,
		36
	],
	"../components/select/layout-4/select-layout-4.module": [
		1098,
		35
	],
	"../components/select/layout-5/select-layout-5.module": [
		1099,
		34
	],
	"../components/select/layout-6/select-layout-6.module": [
		1100,
		33
	],
	"../components/spinner/spinner.module": [
		1101,
		32
	],
	"../components/splash-screen/layout-1/splash-screen-layout-1.module": [
		1102,
		31
	],
	"../components/splash-screen/layout-2/splash-screen-layout-2.module": [
		1104,
		30
	],
	"../components/splash-screen/layout-3/splash-screen-layout-3.module": [
		1103,
		29
	],
	"../components/sub-image-gallery/sub-image-gallery.module": [
		1105,
		28
	],
	"../components/tabs/layout-1/tabs-layout-1.module": [
		1107,
		27
	],
	"../components/tabs/layout-2/tabs-layout-2.module": [
		1106,
		26
	],
	"../components/tabs/layout-3/tabs-layout-3.module": [
		1108,
		25
	],
	"../components/toggle/layout-1/toggle-layout-1.module": [
		1109,
		24
	],
	"../components/toggle/layout-2/toggle-layout-2.module": [
		1110,
		23
	],
	"../components/toggle/layout-3/toggle-layout-3.module": [
		1111,
		22
	],
	"../components/wizard/layout-1/wizard-layout-1.module": [
		1112,
		21
	],
	"../components/wizard/layout-2/wizard-layout-2.module": [
		1113,
		20
	],
	"../components/wizard/layout-3/wizard-layout-3.module": [
		1114,
		19
	],
	"../pages/elementsClasses/elementsClasses.module": [
		1115,
		18
	],
	"../pages/elementsHome/elementsHome.module": [
		1116,
		17
	],
	"../pages/elementsMagias/elementsMagias.module": [
		1117,
		16
	],
	"../pages/elementsPericias/elementsPericias.module": [
		1118,
		15
	],
	"../pages/elementsRacas/elementsRacas.module": [
		1119,
		14
	],
	"../pages/home/home.module": [
		1120,
		13
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 292;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingService.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    LoadingService.prototype.hide = function () {
        this.loading.dismiss();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(614);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_toast_service__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_loading_service__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_barcode_scanner__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_analytics__ = __webpack_require__(1037);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var firebaseAppConfig = {
    apiKey: "AIzaSyCqrGGPf5TJK0kwVqn8Z5-HnKJcx6wS9Tg",
    authDomain: "elements-arton.firebaseapp.com",
    databaseURL: "https://elements-arton.firebaseio.com",
    projectId: "elements-arton",
    storageBucket: "elements-arton.appspot.com",
    messagingSenderId: "715361864172"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../components/action-sheet/layout-1/action-sheet-layout-1.module#ActionSheetLayout1Module', name: 'ActionSheetLayout1', segment: 'action-sheet-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/action-sheet/layout-2/action-sheet-layout-2.module#ActionSheetLayout2Module', name: 'ActionSheetLayout2', segment: 'action-sheet-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/action-sheet/layout-3/action-sheet-layout-3.module#ActionSheetLayout3Module', name: 'ActionSheetLayout3', segment: 'action-sheet-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-1/check-box-layout-1.module#CheckBoxLayout1Module', name: 'CheckBoxLayout1', segment: 'check-box-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-2/check-box-layout-2.module#CheckBoxLayout2Module', name: 'CheckBoxLayout2', segment: 'check-box-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-3/check-box-layout-3.module#CheckBoxLayout3Module', name: 'CheckBoxLayout3', segment: 'check-box-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-4/check-box-layout-4.module#CheckBoxLayout4Module', name: 'CheckBoxLayout4', segment: 'check-box-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/full-screen-gallery/full-screen-gallery.module#FullScreenGalleryModule', name: 'FullScreenGallery', segment: 'full-screen-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-1/image-gallery-layout-1.module#ImageGalleryLayout1Module', name: 'ImageGalleryLayout1', segment: 'image-gallery-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-2/image-gallery-layout-2.module#ImageGalleryLayout2Module', name: 'ImageGalleryLayout2', segment: 'image-gallery-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-3/image-gallery-layout-3.module#ImageGalleryLayout3Module', name: 'ImageGalleryLayout3', segment: 'image-gallery-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module#AppearanceAnimationLayout1Module', name: 'AppearanceAnimationLayout1', segment: 'appearance-animation-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module#AppearanceAnimationLayout2Module', name: 'AppearanceAnimationLayout2', segment: 'appearance-animation-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module#AppearanceAnimationLayout3Module', name: 'AppearanceAnimationLayout3', segment: 'appearance-animation-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module#AppearanceAnimationLayout4Module', name: 'AppearanceAnimationLayout4', segment: 'appearance-animation-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module#AppearanceAnimationLayout5Module', name: 'AppearanceAnimationLayout5', segment: 'appearance-animation-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module#DragAndDropLayout1Module', name: 'DragAndDropLayout1', segment: 'drag-and-drop-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module#DragAndDropLayout2Module', name: 'DragAndDropLayout2', segment: 'drag-and-drop-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module#DragAndDropLayout3Module', name: 'DragAndDropLayout3', segment: 'drag-and-drop-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-4/drag-and-drop-layout-4.module#DragAndDropLayout4Module', name: 'DragAndDropLayout4', segment: 'drag-and-drop-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-1/expandable-layout-1.module#ExpandableLayout1Module', name: 'ExpandableLayout1', segment: 'expandable-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-2/expandable-layout-2.module#ExpandableLayout2Module', name: 'ExpandableLayout2', segment: 'expandable-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-3/expandable-layout-3.module#ExpandableLayout3Module', name: 'ExpandableLayout3', segment: 'expandable-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-1/google-card-layout-1.module#GoogleCardLayout1Module', name: 'GoogleCardLayout1', segment: 'google-card-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-2/google-card-layout-2.module#GoogleCardLayout2Module', name: 'GoogleCardLayout2', segment: 'google-card-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-3/google-card-layout-3.module#GoogleCardLayout3Module', name: 'GoogleCardLayout3', segment: 'google-card-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-4/google-card-layout-4.module#GoogleCardLayout4Module', name: 'GoogleCardLayout4', segment: 'google-card-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module#StickyListHeaderLayout1Module', name: 'StickyListHeaderLayout1', segment: 'sticky-list-header-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module#StickyListHeaderLayout2Module', name: 'StickyListHeaderLayout2', segment: 'sticky-list-header-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module#StickyListHeaderLayout3Module', name: 'StickyListHeaderLayout3', segment: 'sticky-list-header-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-4/sticky-list-header-layout-4.module#StickyListHeaderLayout4Module', name: 'StickyListHeaderLayout4', segment: 'sticky-list-header-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module#SwipeToDismissLayout1Module', name: 'SwipeToDismissLayout1', segment: 'swipe-to-dismiss-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module#SwipeToDismissLayout2Module', name: 'SwipeToDismissLayout2', segment: 'swipe-to-dismiss-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module#SwipeToDismissLayout3Module', name: 'SwipeToDismissLayout3', segment: 'swipe-to-dismiss-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-4/swipe-to-dismiss-layout-4.module#SwipeToDismissLayout4Module', name: 'SwipeToDismissLayout4', segment: 'swipe-to-dismiss-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/layout-1/login-layout-1.module#LoginLayout1Module', name: 'LoginLayout1', segment: 'login-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/layout-2/login-layout-2.module#LoginLayout2Module', name: 'LoginLayout2', segment: 'login-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-1/maps-layout-1.module#MapsLayout1Module', name: 'MapsLayout1', segment: 'maps-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-2/maps-layout-2.module#MapsLayout2Module', name: 'MapsLayout2', segment: 'maps-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-3/maps-layout-3.module#MapsLayout3Module', name: 'MapsLayout3', segment: 'maps-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-1/parallax-layout-1.module#ParallaxLayout1Module', name: 'ParallaxLayout1', segment: 'parallax-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-2/parallax-layout-2.module#ParallaxLayout2Module', name: 'ParallaxLayout2', segment: 'parallax-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-3/parallax-layout-3.module#ParallaxLayout3Module', name: 'ParallaxLayout3', segment: 'parallax-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-4/parallax-layout-4.module#ParallaxLayout4Module', name: 'ParallaxLayout4', segment: 'parallax-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/qrcode/layout-1/qrcode-layout-1.module#QRcodeLayout1Module', name: 'QRcodeLayout1', segment: 'qrcode-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-1/radio-button-layout-1.module#RadioButtonLayout1Module', name: 'RadioButtonLayout1', segment: 'radio-button-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-3/radio-button-layout-3.module#RadioButtonLayout3Module', name: 'RadioButtonLayout3', segment: 'radio-button-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-2/radio-button-layout-2.module#RadioButtonLayout2Module', name: 'RadioButtonLayout2', segment: 'radio-button-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-1/range-layout-1.module#RangeLayout1Module', name: 'RangeLayout1', segment: 'range-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-2/range-layout-2.module#RangeLayout2Module', name: 'RangeLayout2', segment: 'range-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-3/range-layout-3.module#RangeLayout3Module', name: 'RangeLayout3', segment: 'range-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-4/range-layout-4.module#RangeLayout4Module', name: 'RangeLayout4', segment: 'range-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-1/register-layout-1.module#RegisterLayout1Module', name: 'RegisterLayout1', segment: 'register-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-2/register-layout-2.module#RegisterLayout2Module', name: 'RegisterLayout2', segment: 'register-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-1/search-bar-layout-1.module#SearchBarLayout1Module', name: 'SearchBarLayout1', segment: 'search-bar-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-2/search-bar-layout-2.module#SearchBarLayout2Module', name: 'SearchBarLayout2', segment: 'search-bar-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-3/search-bar-layout-3.module#SearchBarLayout3Module', name: 'SearchBarLayout3', segment: 'search-bar-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-1/select-layout-1.module#SelectLayout1Module', name: 'SelectLayout1', segment: 'select-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-2/select-layout-2.module#SelectLayout2Module', name: 'SelectLayout2', segment: 'select-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-3/select-layout-3.module#SelectLayout3Module', name: 'SelectLayout3', segment: 'select-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-4/select-layout-4.module#SelectLayout4Module', name: 'SelectLayout4', segment: 'select-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-5/select-layout-5.module#SelectLayout5Module', name: 'SelectLayout5', segment: 'select-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-6/select-layout-6.module#SelectLayout6Module', name: 'SelectLayout6', segment: 'select-layout-6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/spinner/spinner.module#SpinnerModule', name: 'Spinner', segment: 'spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-1/splash-screen-layout-1.module#SplashScreenLayout1Module', name: 'SplashScreenLayout1', segment: 'splash-screen-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-3/splash-screen-layout-3.module#SplashScreenLayout3Module', name: 'SplashScreenLayout3', segment: 'splash-screen-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-2/splash-screen-layout-2.module#SplashScreenLayout2Module', name: 'SplashScreenLayout2', segment: 'splash-screen-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/sub-image-gallery/sub-image-gallery.module#SubImageGalleryModule', name: 'SubImageGallery', segment: 'sub-image-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-2/tabs-layout-2.module#TabsLayout2Module', name: 'TabsLayout2', segment: 'tabs-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-1/tabs-layout-1.module#TabsLayout1Module', name: 'TabsLayout1', segment: 'tabs-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-3/tabs-layout-3.module#TabsLayout3Module', name: 'TabsLayout3', segment: 'tabs-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-1/toggle-layout-1.module#ToggleLayout1Module', name: 'ToggleLayout1', segment: 'toggle-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-2/toggle-layout-2.module#ToggleLayout2Module', name: 'ToggleLayout2', segment: 'toggle-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-3/toggle-layout-3.module#ToggleLayout3Module', name: 'ToggleLayout3', segment: 'toggle-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-1/wizard-layout-1.module#WizardLayout1Module', name: 'WizardLayout1', segment: 'wizard-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-2/wizard-layout-2.module#WizardLayout2Module', name: 'WizardLayout2', segment: 'wizard-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-3/wizard-layout-3.module#WizardLayout3Module', name: 'WizardLayout3', segment: 'wizard-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elementsClasses/elementsClasses.module#ElementsClassesPageModule', name: 'ElementsClassesPage', segment: 'elementsClasses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elementsHome/elementsHome.module#ElementsHomePageModule', name: 'ElementsHomePage', segment: 'elementsHome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elementsMagias/elementsMagias.module#ElementsMagiasPageModule', name: 'ElementsMagiasPage', segment: 'elementsMagias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elementsPericias/elementsPericias.module#ElementsPericiasPageModule', name: 'ElementsPericiasPage', segment: 'elementsPericias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/elementsRacas/elementsRacas.module#ElementsRacasPageModule', name: 'ElementsRacasPage', segment: 'elementsRacas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAppConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["a" /* AngularFirestoreModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_10__services_loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_service__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_settings__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, menu, menuService, modalCtrl) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.menuService = menuService;
        this.modalCtrl = modalCtrl;
        this.rootPage = "ElementsHomePage";
        this.initializeApp();
        this.pages = menuService.getAllThemes();
        this.leftMenuTitle = menuService.getTitle();
        this.menuService.load(null).subscribe(function (snapshot) {
            _this.params = snapshot;
        });
        if (__WEBPACK_IMPORTED_MODULE_4__services_app_settings__["a" /* AppSettings */].SHOW_START_WIZARD) {
            this.presentProfileModal();
        }
    }
    MyApp.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create("IntroPage");
        profileModal.present();
    };
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Splashscreen */].hide();
            localStorage.setItem("mailChimpLocal", "true");
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        // navigate to the new page if it is not the current page
        if (page.singlePage) {
            this.menu.open();
            this.nav.push(this.getPageForOpen(page.theme), {
                service: this.getServiceForPage(page.theme),
                page: page,
                componentName: page.theme
            });
        }
        else {
            this.nav.setRoot("ItemsPage", {
                componentName: page.theme
            });
        }
    };
    ;
    MyApp.prototype.abrePagina = function (page) {
        console.log(page);
        this.nav.push(page);
    };
    MyApp.prototype.getPageForOpen = function (value) {
        return null;
    };
    MyApp.prototype.getServiceForPage = function (value) {
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/santinho/GIT/build2/elements2/src/app/app.html"*/'<ion-split-pane when="md">\n\n  <ion-menu [content]="content" *ngIf="params != null">\n\n    <!-- Menu Main Top -->\n\n    <ion-header padding background-size header-background-image\n\n    [ngStyle]="{\'background-image\': \'url(\' + params.background + \')\'}">\n\n      <ion-thumbnail>\n\n        <img src="assets/images/criticoIco512.png">\n\n      </ion-thumbnail>\n\n      <h2 item-title text-center></h2>\n\n    </ion-header>\n\n    \n\n    <!-- Menu Main List -->\n\n    <ion-content>\n\n      <ion-list no-margin no-padding>\n\n        <button menuClose ion-item item-title no-padding main-menu (click)="abrePagina(\'ElementsClassesPage\')">\n\n          <ion-icon padding-left>\n\n            <i class="icon icon-format-align-justify"></i>\n\n          </ion-icon>\n\n          Classes\n\n        </button>\n\n        <button menuClose ion-item item-title no-padding main-menu (click)="abrePagina(\'ElementsRacasPage\')">\n\n            <ion-icon padding-left>\n\n              <i class="icon icon-format-align-justify"></i>\n\n            </ion-icon>\n\n            Raças\n\n        </button>\n\n        <button menuClose ion-item item-title no-padding main-menu (click)="abrePagina(\'ElementsMagiasPage\')">\n\n            <ion-icon padding-left>\n\n              <i class="icon icon-format-align-justify"></i>\n\n            </ion-icon>\n\n            Magias\n\n        </button>\n\n        <button menuClose ion-item item-title no-padding main-menu (click)="abrePagina(\'ElementsPericiasPage\')">\n\n            <ion-icon padding-left>\n\n              <i class="icon icon-format-align-justify"></i>\n\n            </ion-icon>\n\n            Talentos\n\n        </button>\n\n        <!-- <button menuClose ion-item item-title no-padding main-menu (click)="abrePagina(\'ElementsLojasPage\')">\n\n            <ion-icon padding-left>\n\n              <i class="icon icon-format-align-justify"></i>\n\n            </ion-icon>\n\n            Lojas\n\n        </button>\n\n        <button menuClose ion-item item-title no-padding main-menu (click)="abrePagina(\'ElementsRegrasPage\')">\n\n            <ion-icon padding-left>\n\n              <i class="icon icon-format-align-justify"></i>\n\n            </ion-icon>\n\n            Regras\n\n        </button> -->\n\n      </ion-list>\n\n        <!-- <ion-list no-margin no-padding>\n\n          <button menuClose ion-item item-title no-padding main-menu *ngFor="let p of pages" (click)="openPage(p)">\n\n          <ion-icon padding-left>\n\n            <i class="icon {{p.icon}}"></i>\n\n          </ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n        </ion-list> -->\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n  <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>\n\n'/*ion-inline-end:"/home/santinho/GIT/build2/elements2/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuService = (function () {
    function MenuService(af) {
        var _this = this;
        this.af = af;
        this.getId = function () { return 'menu'; };
        this.getTitle = function () { return 'UIAppTemplate'; };
        this.getAllThemes = function () {
            return [
                { "title": "List Views", "theme": "listViews", "icon": "icon-format-align-justify", "listView": true, "component": "", "singlePage": false },
                { "title": "Parallax", "theme": "parallax", "icon": "icon-format-line-spacing", "listView": false, "component": "", "singlePage": false },
                { "title": "Login Pages", "theme": "login", "icon": "icon-lock-open-outline", "listView": false, "component": "", "singlePage": false },
                { "title": "Register Pages", "theme": "register", "icon": "icon-comment-account", "listView": false, "component": "", "singlePage": false },
                { "title": "Image Gallery", "theme": "imageGallery", "icon": "icon-apps", "listView": false, "component": "", "singlePage": false },
                { "title": "Splash Screen", "theme": "splashScreens", "icon": "icon-logout", "listView": false, "component": "", "singlePage": false },
                { "title": "Check Boxs", "theme": "checkBoxes", "icon": "icon-checkbox-marked", "listView": false, "component": "", "singlePage": false },
                { "title": "Search Bars", "theme": "searchBars", "icon": "icon-magnify", "listView": false, "component": "", "singlePage": false },
                { "title": "Typo + small components", "theme": "textViews", "icon": "icon-tumblr", "listView": false, "component": "", "singlePage": false },
                { "title": "Wizard", "theme": "wizard", "icon": "icon-cellphone-settings", "listView": false, "component": "", "singlePage": false },
                { "title": "Spinner", "theme": "spinner", "icon": "icon-image-filter-tilt-shift", "listView": false, "component": "", "singlePage": false },
                { "title": "Tabs", "theme": "tabs", "icon": "icon-view-array", "listView": false, "component": "", "singlePage": false },
                { "title": "Maps", "theme": "maps", "icon": "icon-google-maps", "listView": false, "component": "", "singlePage": false },
                { "title": "QRCode", "theme": "qrcode", "icon": "icon-qrcode", "listView": false, "component": "", "singlePage": false },
                { "title": "Radio Button", "theme": "radioButton", "icon": "icon-radiobox-marked", "listView": false, "component": "", "singlePage": false },
                { "title": "Range", "theme": "range", "icon": "icon-toggle-switch-off", "listView": false, "component": "", "singlePage": false },
                { "title": "Toggle", "theme": "toggle", "icon": "icon-toggle-switch", "listView": false, "component": "", "singlePage": false },
                { "title": "Select", "theme": "select", "icon": "icon-menu-down", "listView": true, "component": "", "singlePage": false },
                { "title": "Action Sheet", "theme": "actionSheet", "icon": "icon-dots-horizontal", "listView": false, "component": "", "singlePage": false }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {
                "background": "assets/images/topo.png",
                "image": "assets/images/logo/criticoIco512.png",
                "title": "Ionic3 UI Theme - Yellow Dark"
            };
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: {},
                events: _this.getEventsForTheme(item)
            };
        };
    }
    MenuService.prototype.load = function (item) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('menu')
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu-service.js.map

/***/ })

},[609]);
//# sourceMappingURL=main.js.map