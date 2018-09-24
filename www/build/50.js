webpackJsonp([50],{

/***/ 1119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsMagiasPageModule", function() { return ElementsMagiasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elementsMagias__ = __webpack_require__(1269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ElementsMagiasPageModule = (function () {
    function ElementsMagiasPageModule() {
    }
    ElementsMagiasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__elementsMagias__["a" /* ElementsMagiasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__elementsMagias__["a" /* ElementsMagiasPage */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ElementsMagiasPageModule);
    return ElementsMagiasPageModule;
}());

//# sourceMappingURL=elementsMagias.module.js.map

/***/ }),

/***/ 1269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementsMagiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_home_service__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(236);
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





var ElementsMagiasPage = (function () {
    function ElementsMagiasPage(navCtrl, service, af) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.af = af;
        this.title = 'Magias';
        this.lvls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.tipoMagias = ['Água', 'Ar', 'Combate', 'Destruição', 'Energia', 'Ether', 'Gelo', 'Natureza', 'Poison', 'Putridao', 'Sangue', 'Terra', 'Utilidade'];
        this.tipoMagiasSelecionados = ['Água', 'Ar', 'Combate', 'Destruição', 'Energia', 'Ether', 'Gelo', 'Natureza', 'Poison', 'Putridao', 'Sangue', 'Terra', 'Utilidade'];
        this.nivelCaminho = ['Iniciante', 'Intermediario', 'Avançado', 'Mestre', 'Arquimago', 'Epicmago'];
        this.searchTerm = "";
        service.load().subscribe(function (snapshot) {
            _this.data = snapshot;
        });
        this.list = this.af.list('Magias').valueChanges();
        this.listFiltered = this.af.list('Magias').valueChanges();
    }
    ElementsMagiasPage.prototype.getItems = function (event) {
        var _this = this;
        if (!this.list) {
            this.list = this.listFiltered;
        }
        this.list.subscribe(function (listaBD) {
            var listaBDFiltrada = listaBD.filter(function (item) {
                var nomeOK = item['Nome'].toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
                var tipoOK = _this.tipoMagiasSelecionados.indexOf(item['Caminho']) > -1;
                return nomeOK && tipoOK;
            });
            _this.listFiltered = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(listaBDFiltrada);
        });
    };
    ElementsMagiasPage.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    ElementsMagiasPage.prototype.isGroupShown = function (group) {
        return group.show;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ElementsMagiasPage.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ElementsMagiasPage.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]) === "function" && _a || Object)
    ], ElementsMagiasPage.prototype, "content", void 0);
    ElementsMagiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'elements-page-magias',template:/*ion-inline-start:"D:\Pessoal\elements2\src\pages\elementsMagias\elementsMagias.html"*/'<!-- Main Menu Header -->\n\n<ion-header>\n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="icon-menu" name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-uppercase>Magias</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<!-- Main Menu List -->\n\n<ion-content>\n\n    <ion-grid no-padding>\n\n        <ion-row *ngIf="data != null">\n\n        <!-- List -->\n\n        <ion-col col-12>\n\n        <ion-list no-padding no-margin transparent>\n\n        <ion-item padding-top no-lines *ngIf="data != null">\n\n            <ion-label>Caminhos:</ion-label>\n\n            <ion-select multiple="true" interface="action-sheet" [(ngModel)]="tipoClassesSelecionados">\n\n                <ion-option *ngFor="let tipo of tipoClasses;" [value]="tipo">{{tipo}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        </ion-list>\n\n        </ion-col>\n\n        \n\n        <ion-col col-12>\n\n            <ion-list no-margin>\n\n            \n\n            <ion-list-header no-padding no-margin transparent>\n\n                <ion-searchbar placeholder="Buscar..." [(ngModel)]="searchTerm" (ionInput)="getItems($event)" style="background-color: transparent !important;"></ion-searchbar>\n\n                \n\n            </ion-list-header>\n\n\n\n            <li *ngFor="let group of listFiltered | async">\n\n              <!-- List big image Header -->\n\n              <ion-item-divider no-margin header-title ion-affix [content]="content" style="color: white; background-color: #4a000063!important">\n\n                <h2 text-uppercase>{{group.NomeCaminho}}</h2>\n\n              </ion-item-divider>\n\n              <div *ngFor="let n of nivelCaminho">\n\n                <div *ngIf="group[n]!=null">\n\n                    <ion-item-divider no-margin header-title ion-affix [content]="content" style="color: white; background-color: #80808040!important">\n\n                        <h2 text-uppercase>{{n}}</h2>\n\n                    </ion-item-divider>\n\n                    <div *ngFor="let magia of group[n]">\n\n                        <div class="collapsible-header" (click)="toggleGroup(group)">\n\n                            <ion-item no-padding>\n\n                            <h2 padding-left item-title>{{magia.nomeMagia}}</h2>\n\n                            <h3 padding-left item-subtitle>HP:{{magia.nomeMagia}} Perícia:{{magia.nomeMagia}}</h3>\n\n                            </ion-item>\n\n                        </div>\n\n                        <!-- List big image Body -->\n\n                        <div class="item-accordion" [ngClass]="{\'active\': isGroupShown(magia) }" [hidden]="!isGroupShown(magia)">\n\n                            <ion-item transparent no-lines style="color: white">\n\n                                <h2 padding-left>HP: {{magia.nomeMagia}}</h2>\n\n                                <h2 padding-left>Perícia: {{magia.nomeMagia}}</h2>\n\n                                <h2 padding-left>Crítico: {{magia.nomeMagia}}</h2>\n\n                                <br/>\n\n                                <h2 padding-left>Vantagens: {{magia.nomeMagia}}</h2>\n\n                                <h2 padding-left>Desvantagens: {{magia.nomeMagia}}</h2>\n\n                            </ion-item>\n\n                        </div>\n\n                        <!--end-->\n\n                    </div>\n\n                </div>\n\n              </div>\n\n            </li>\n\n            </ion-list>\n\n        </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Pessoal\elements2\src\pages\elementsMagias\elementsMagias.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_home_service__["a" /* HomeService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_home_service__["a" /* HomeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
    ], ElementsMagiasPage);
    return ElementsMagiasPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=elementsMagias.js.map

/***/ })

});
//# sourceMappingURL=50.js.map