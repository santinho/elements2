webpackJsonp([15],{

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsPericiasPageModule", function() { return ElementsPericiasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elementsPericias__ = __webpack_require__(1234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ElementsPericiasPageModule = (function () {
    function ElementsPericiasPageModule() {
    }
    ElementsPericiasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__elementsPericias__["a" /* ElementsPericiasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__elementsPericias__["a" /* ElementsPericiasPage */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ElementsPericiasPageModule);
    return ElementsPericiasPageModule;
}());

//# sourceMappingURL=elementsPericias.module.js.map

/***/ }),

/***/ 1136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
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





var HomeService = (function () {
    function HomeService(af, loadingService) {
        this.af = af;
        this.loadingService = loadingService;
        this.getData = function () {
            return {
                "toolbarTitle": "Ionic3 UI Theme - Yellow Dark",
                "title": "SAVE HOURS",
                "subtitle": "OF DEVELOPING",
                "subtitle2": "and make apps fast as light!",
                "link": "http://csform.com/documentation-for-ionic-2-ui-template-app/",
                "description": "For better understanding how our template works please read documentation.",
                "background": "assets/images/background/29.jpg"
            };
        };
    }
    HomeService.prototype.load = function () {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('home')
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
                observer.next(_this.getData());
                observer.complete();
            });
        }
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__loading_service__["a" /* LoadingService */]])
    ], HomeService);
    return HomeService;
}());

//# sourceMappingURL=home-service.js.map

/***/ }),

/***/ 1234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementsPericiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_home_service__ = __webpack_require__(1136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ElementsPericiasPage = (function () {
    function ElementsPericiasPage(navCtrl, service, af) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.af = af;
        this.title = 'Talentos';
        this.node = 'Tormenta/Talentos';
        this.tipoPericias = ['Ambientais', 'Combate', 'Destino', 'Magia', 'Moreau', 'Perícia', 'Poderes Concedidos', 'Raciais', 'Tormenta'];
        this.tipoPericiasSelecionados = ['Ambientais', 'Combate', 'Destino', 'Magia', 'Moreau', 'Perícia', 'Poderes Concedidos', 'Raciais', 'Tormenta'];
        this.searchTerm = "";
        console.log('pericias');
        service.load().subscribe(function (snapshot) {
            _this.data = snapshot;
        });
        this.list = this.af.list(this.node).valueChanges();
        this.listFiltered = this.af.list(this.node).valueChanges();
    }
    ElementsPericiasPage.prototype.getItems = function (event) {
        var _this = this;
        if (!this.list) {
            this.list = this.listFiltered;
        }
        this.list.subscribe(function (listaBD) {
            var listaBDFiltrada = listaBD.slice();
            console.log('listaBDFiltrada', listaBDFiltrada);
            listaBDFiltrada = listaBDFiltrada.filter(function (item) {
                console.log('this.tipoMagiasSelecionados.indexOf(item.Nome)', _this.tipoPericiasSelecionados.indexOf(item.Nome));
                if (!(_this.tipoPericiasSelecionados.indexOf(item.Nome) > -1)) {
                    return false;
                }
                item.Lista = item.Lista.filter(function (talento) {
                    console.log('talento', talento);
                    if (talento) {
                        var nomeOK = talento['Nome'].toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
                        console.log('nomeOk', nomeOK);
                        return nomeOK;
                    }
                    return false;
                });
                return item.Lista.length > 0;
            });
            console.log('listaBDFiltrada2', listaBDFiltrada);
            _this.listFiltered = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(listaBDFiltrada);
        });
    };
    ElementsPericiasPage.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    ElementsPericiasPage.prototype.isGroupShown = function (group) {
        return group.show;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]) === "function" && _a || Object)
    ], ElementsPericiasPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ElementsPericiasPage.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ElementsPericiasPage.prototype, "events", void 0);
    ElementsPericiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'elements-page-pericias',template:/*ion-inline-start:"/home/santinho/GIT/build2/elements2/src/pages/elementsPericias/elementsPericias.html"*/'<!-- Main Menu Header -->\n\n<ion-header>\n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="icon-menu" name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-uppercase>Talentos</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<!-- Main Menu List -->\n\n<ion-content>\n\n    <ion-grid no-padding>\n\n        <ion-row *ngIf="data != null">\n\n        <!-- List -->\n\n        <ion-col col-12>\n\n        <ion-list no-padding no-margin transparent>\n\n        <ion-item padding-top no-lines *ngIf="data != null">\n\n            <ion-label>Tipo Pericias:</ion-label>\n\n            <ion-select multiple="true" interface="action-sheet" [(ngModel)]="tipoPericiasSelecionados" (ngModelChange)="getItems($event)">\n\n                <ion-option *ngFor="let tipo of tipoPericias;" [value]="tipo">{{tipo}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        </ion-list>\n\n        </ion-col>\n\n        \n\n        <ion-col col-12>\n\n            <ion-list no-margin>\n\n            \n\n            <ion-list-header no-padding no-margin transparent>\n\n                <ion-searchbar placeholder="Buscar..." [(ngModel)]="searchTerm" (ionInput)="getItems($event)" style="background-color: transparent !important;"></ion-searchbar>\n\n                \n\n            </ion-list-header>\n\n\n\n            <li *ngFor="let group of listFiltered | async">\n\n                <div *ngIf="group.Lista && group.Lista.length >0">\n\n                  <ion-item-divider no-margin header-title ion-affix [content]="content" class="dividerCaminho">\n\n                      <h2 text-uppercase text-wrap>{{group.Nome}}</h2>\n\n                  </ion-item-divider>\n\n                    <div *ngFor="let talento of group.Lista">\n\n                        <div class="collapsible-header" (click)="toggleGroup(talento)">\n\n                            <ion-item no-padding>\n\n                            <h2 padding-left item-title text-wrap>{{talento.Nome}}</h2>\n\n                            <h3 padding-left item-subtitle text-wrap>Pré-requisito: {{talento.Prerequisito}}</h3>\n\n                            </ion-item>\n\n                        </div>\n\n                        <!-- List big image Body -->\n\n                        <div class="item-accordion" [ngClass]="{\'active\': isGroupShown(talento) }" [hidden]="!isGroupShown(talento)">\n\n                            <ion-item transparent no-lines style="color: white">\n\n                                <h2 padding-left text-wrap>{{talento.Nome}}</h2>\n\n                                <br/>\n\n                                <span *ngIf="talento.Descricao"><h2 padding-left text-wrap>{{talento.Descricao}}</h2><br/></span>\n\n                                <span *ngIf="talento.Prerequisito"><h2 padding-left text-wrap >Pré-requisito: {{talento.Prerequisito}}</h2><br/></span>\n\n                                <span *ngIf="talento.Beneficio"><h2 padding-left text-wrap >Beneficio: {{talento.Beneficio}}</h2><br/></span>\n\n                                <span *ngIf="talento.Especial"><h2 padding-left text-wrap >Especial: {{talento.Especial}}</h2><br/></span>\n\n                                <span *ngIf="talento.Normal"><h2 padding-left text-wrap >Normal: {{talento.Normal}}</h2></span>\n\n                            </ion-item>\n\n                        </div>\n\n                        <!--end-->\n\n                    </div>\n\n                </div>\n\n              </li>\n\n            </ion-list>\n\n        </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/santinho/GIT/build2/elements2/src/pages/elementsPericias/elementsPericias.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_home_service__["a" /* HomeService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_home_service__["a" /* HomeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
    ], ElementsPericiasPage);
    return ElementsPericiasPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=elementsPericias.js.map

/***/ })

});
//# sourceMappingURL=15.js.map