webpackJsonp([321],{

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditTableDetailViewModel; });
var AuditTableDetailViewModel = /** @class */ (function () {
    function AuditTableDetailViewModel() {
    }
    return AuditTableDetailViewModel;
}());

//# sourceMappingURL=AuditTableDetailViewModel.js.map

/***/ }),

/***/ 1277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditTableDetailAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_AuditTableDetailViewModel__ = __webpack_require__(1010);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AuditTableDetailModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuditTableDetailAddEditModalPage = /** @class */ (function () {
    function AuditTableDetailAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_AuditTableDetailViewModel__["a" /* AuditTableDetailViewModel */]();
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.columnname = navParams.data.item.columnname;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.mode = navParams.data.mode;
        this.CanEditTable = navParams.data.CanEditTable;
        if (this.mode === "POST")
            this.title = "新增";
        else
            this.title = "更新";
    }
    AuditTableDetailAddEditModalPage.prototype.SelectColumn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("TableDetailExtSelectModalPage", {
            schemaname: this.item.schemaname,
            tablename: this.item.tablename,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.columnname = select_data.columnname;
        });
        modal.present();
    };
    AuditTableDetailAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    AuditTableDetailAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AuditTableDetailAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AuditTableDetailAddEditModalPage");
    };
    AuditTableDetailAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page audit-table-detail-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\audit-table-detail-add-edit-modal\audit-table-detail-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm" >\n\n    <ion-row>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>欄位名稱</ion-label>\n          <ion-input type="text" readonly=true [disabled]="mode==\'PUT\'"  name="columnname" #columnname="ngModel" [(ngModel)]="item.columnname" required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditTable==true && mode==\'POST\'"  icon-right (click)="SelectColumn()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="columnname.errors && columnname.touched " class="error-message">\n          欄位名稱不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small [disabled]="CanEditTable==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\audit-table-detail-add-edit-modal\audit-table-detail-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], AuditTableDetailAddEditModalPage);
    return AuditTableDetailAddEditModalPage;
}());

//# sourceMappingURL=audit-table-detail-add-edit-modal.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditTableDetailAddEditModalPageModule", function() { return AuditTableDetailAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audit_table_detail_add_edit_modal__ = __webpack_require__(1277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuditTableDetailAddEditModalPageModule = /** @class */ (function () {
    function AuditTableDetailAddEditModalPageModule() {
    }
    AuditTableDetailAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__audit_table_detail_add_edit_modal__["a" /* AuditTableDetailAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__audit_table_detail_add_edit_modal__["a" /* AuditTableDetailAddEditModalPage */]),
            ],
        })
    ], AuditTableDetailAddEditModalPageModule);
    return AuditTableDetailAddEditModalPageModule;
}());

//# sourceMappingURL=audit-table-detail-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=321.js.map