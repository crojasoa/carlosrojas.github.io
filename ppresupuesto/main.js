(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XX/":
/*!**********************************************!*\
  !*** ./src/app/egresos/egresos.component.ts ***!
  \**********************************************/
/*! exports provided: EgresosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgresosComponent", function() { return EgresosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _egreso_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./egreso.service */ "GP/5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function EgresosComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EgresosComponent_div_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const egreso_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.eliminarEgreso(egreso_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const egreso_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Descripcion: ", egreso_r1.descripcion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Valor: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](8, 2, egreso_r1.valor, "EUR", "\u20AC", "1.2-2"), "");
} }
class EgresosComponent {
    constructor(egresoService) {
        this.egresoService = egresoService;
    }
    ngOnInit() {
        this.egresos = this.egresoService.egresos;
    }
    eliminarEgreso(egreso) {
        this.egresoService.eliminarEgreso(egreso);
    }
}
EgresosComponent.ɵfac = function EgresosComponent_Factory(t) { return new (t || EgresosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egreso_service__WEBPACK_IMPORTED_MODULE_1__["EgresoService"])); };
EgresosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EgresosComponent, selectors: [["app-egresos"]], decls: 4, vars: 1, consts: [[1, "modulo"], [1, "titulo"], ["class", "egresos", 4, "ngFor", "ngForOf"], [1, "egresos"], [1, "egreso", "modulo-egresos"], [1, "boton-eliminar", 3, "click"]], template: function EgresosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Egresos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EgresosComponent_div_3_Template, 11, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.egresos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".modulo-egresos[_ngcontent-%COMP%] {\n  background: #c8274a9d;\n  padding: 12px;\n  margin-top: 5px;\n}\n.modulo-egresos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: white;\n}\n.modulo-egresos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .boton-eliminar[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  padding: 4px;\n  float: right;\n  font-size: 15px;\n  background: #ce171771;\n  color: white;\n  border: 0 solid #ffffff02;\n  border-radius: 3px;\n  transition: 1s;\n  cursor: pointer;\n}\n.modulo-egresos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .boton-eliminar[_ngcontent-%COMP%]:hover {\n  background: #b32b8513;\n  font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWdyZXNvcy9lZ3Jlc29zLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRVI7QUFEUTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBR1o7QUFGWTtFQUNHLHFCQUFBO0VBQ0EsZUFBQTtBQUlmIiwiZmlsZSI6InNyYy9hcHAvZWdyZXNvcy9lZ3Jlc29zLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsby1lZ3Jlc29zXG4gICAgYmFja2dyb3VuZDogI2M4Mjc0YTlkXG4gICAgcGFkZGluZzogMTJweFxuICAgIG1hcmdpbi10b3A6IDVweFxuICAgIGRpdlxuICAgICAgICBmb250LXNpemU6IDE4cHhcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgIC5ib3Rvbi1lbGltaW5hclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHhcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweFxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHhcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjZTE3MTc3MVxuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgICAgICBib3JkZXI6IDAgc29saWQgI2ZmZmZmZjAyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHhcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDFzXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICAgICAgICAgICY6aG92ZXJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiMzJiODUxM1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgresosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-egresos',
                templateUrl: './egresos.component.html',
                styleUrls: ['./egresos.component.sass']
            }]
    }], function () { return [{ type: _egreso_service__WEBPACK_IMPORTED_MODULE_1__["EgresoService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rr/Curso/Angular/Angular11/presupuesto/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CLt0":
/*!*******************************************!*\
  !*** ./src/app/ingresos/ingreso.model.ts ***!
  \*******************************************/
/*! exports provided: Ingreso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingreso", function() { return Ingreso; });
class Ingreso {
    constructor(descripcion, valor) {
        this.descripcion = descripcion;
        this.valor = valor;
    }
}


/***/ }),

/***/ "EQYB":
/*!****************************************************!*\
  !*** ./src/app/formulario/formulario.component.ts ***!
  \****************************************************/
/*! exports provided: FormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioComponent", function() { return FormularioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _egresos_egreso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../egresos/egreso.model */ "HMLG");
/* harmony import */ var _ingresos_ingreso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ingresos/ingreso.model */ "CLt0");
/* harmony import */ var _egresos_egreso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../egresos/egreso.service */ "GP/5");
/* harmony import */ var _ingresos_ingreso_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ingresos/ingreso.service */ "cJzC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a0) { return { inputTextRed: a0 }; };
const _c1 = function (a0) { return { rojo: a0 }; };
class FormularioComponent {
    constructor(egresoService, ingresoService) {
        this.egresoService = egresoService;
        this.ingresoService = ingresoService;
        this.opcionInput = "+";
        this.color = 'btn-success';
        this.inputText = 'inputTextGreen';
    }
    ngOnInit() {
    }
    onAgregar() {
        if (this.opcionInput === '+') {
            let ingreso = new _ingresos_ingreso_model__WEBPACK_IMPORTED_MODULE_2__["Ingreso"](this.descripcionInput, this.valorInput);
            this.ingresoService.agregarIngreso(ingreso);
        }
        else if (this.opcionInput === '-') {
            let egreso = new _egresos_egreso_model__WEBPACK_IMPORTED_MODULE_1__["Egreso"](this.descripcionInput, this.valorInput);
            this.egresoService.agregarEgreso(egreso);
        }
    }
    tipoOperacion(event) {
        this.opcionInput = event.target.value;
    }
}
FormularioComponent.ɵfac = function FormularioComponent_Factory(t) { return new (t || FormularioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egresos_egreso_service__WEBPACK_IMPORTED_MODULE_3__["EgresoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ingresos_ingreso_service__WEBPACK_IMPORTED_MODULE_4__["IngresoService"])); };
FormularioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormularioComponent, selectors: [["app-formulario"]], decls: 12, vars: 11, consts: [[1, "modulo", "formulario", 3, "ngSubmit"], ["f", "ngForm"], [1, "input-group"], ["name", "opcion", "id", "opcion", 1, "form-select", "opciones", "form-select-lg", "mb-3", 3, "change"], ["value", "+", "selected", "", 1, "opcion"], ["value", "-", 1, "opcion"], ["required", "", "name", "descripcion", "type", "text", "placeholder", "Descripcion", 1, "form-control", "inputTextGreen", 3, "ngClass", "ngModel", "ngModelChange"], ["required", "", "name", "valor", "type", "number", "placeholder", "Valor", 1, "form-control", "inputTextGreen", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "boton", 3, "ngClass"]], template: function FormularioComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormularioComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.form.valid && ctx.onAgregar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormularioComponent_Template_select_change_3_listener($event) { return ctx.tipoOperacion($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_8_listener($event) { return ctx.descripcionInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_9_listener($event) { return ctx.valorInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.opcionInput == "-"))("ngModel", ctx.descripcionInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.opcionInput == "-"))("ngModel", ctx.valorInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.opcionInput == "-"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]], styles: [".formulario[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 20px;\n}\n.formulario[_ngcontent-%COMP%]   .opciones[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n}\n.formulario[_ngcontent-%COMP%]   .opciones[_ngcontent-%COMP%]   .opcion[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 14px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n}\n.formulario[_ngcontent-%COMP%]   .inputTextGreen[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 170px;\n  border: 5px solid #224b96dc;\n  color: #1f1e1e;\n  font-size: 20px;\n  border-radius: 7px;\n}\n.formulario[_ngcontent-%COMP%]   .inputTextGreen[_ngcontent-%COMP%]:focus {\n  border: 5px solid #22966fdc;\n  background: #104e2c41;\n}\n.formulario[_ngcontent-%COMP%]   .inputTextRed[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 170px;\n  border: 5px solid #5822967c;\n  text-color: white;\n  font-size: 20px;\n  border-radius: 7px;\n}\n.formulario[_ngcontent-%COMP%]   .inputTextRed[_ngcontent-%COMP%]:focus {\n  border: 5px solid #962222dc;\n  background: #4e102a41;\n}\n.boton[_ngcontent-%COMP%] {\n  height: 45px;\n  background: #20b15c7e;\n  border: 1px solid #67ffb870;\n  color: white;\n  font-weight: bold;\n  transition: 1s;\n}\n.boton[_ngcontent-%COMP%]:hover {\n  background: #6aec86c0;\n}\n.rojo[_ngcontent-%COMP%] {\n  background: #da3a3ab6;\n  border: 1px solid #ff676770;\n}\n.rojo[_ngcontent-%COMP%]:hover {\n  background: #c21616b7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBR1o7QUFGSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSVI7QUFIUTtFQUNJLDJCQUFBO0VBQ0EscUJBQUE7QUFLWjtBQUpJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTVI7QUFMUTtFQUNJLDJCQUFBO0VBQ0EscUJBQUE7QUFPWjtBQUxBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBUUo7QUFQSTtFQUNJLHFCQUFBO0FBU1I7QUFQQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7QUFVSjtBQVRJO0VBQ0kscUJBQUE7QUFXUiIsImZpbGUiOiJzcmMvYXBwL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtdWxhcmlvXG4gICAgbWFyZ2luOiBhdXRvXG4gICAgbWFyZ2luLXRvcDogMjBweFxuICAgIC5vcGNpb25lc1xuICAgICAgICB3aWR0aDogNDBweFxuICAgICAgICBoZWlnaHQ6IDQwcHhcbiAgICAgICAgZm9udC1zaXplOiAyMHB4XG4gICAgICAgIC5vcGNpb25cbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAgICAgcGFkZGluZzogMTRweFxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgIC5pbnB1dFRleHRHcmVlblxuICAgICAgICBoZWlnaHQ6IDQ1cHhcbiAgICAgICAgd2lkdGg6IDE3MHB4XG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMyMjRiOTZkY1xuICAgICAgICBjb2xvcjogIzFmMWUxZVxuICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4XG4gICAgICAgICY6Zm9jdXNcbiAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMyMjk2NmZkY1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzEwNGUyYzQxXG4gICAgLmlucHV0VGV4dFJlZFxuICAgICAgICBoZWlnaHQ6IDQ1cHhcbiAgICAgICAgd2lkdGg6IDE3MHB4XG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICM1ODIyOTY3Y1xuICAgICAgICB0ZXh0LWNvbG9yOiB3aGl0ZVxuICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4XG4gICAgICAgICY6Zm9jdXNcbiAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICM5NjIyMjJkY1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRlMTAyYTQxXG5cbi5ib3RvblxuICAgIGhlaWdodDogNDVweFxuICAgIGJhY2tncm91bmQ6ICMyMGIxNWM3ZVxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2N2ZmYjg3MFxuICAgIGNvbG9yOiB3aGl0ZVxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gICAgdHJhbnNpdGlvbjogMXNcbiAgICAmOmhvdmVyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2YWVjODZjMFxuXG4ucm9qb1xuICAgIGJhY2tncm91bmQ6ICNkYTNhM2FiNlxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjY3Njc3MFxuICAgICY6aG92ZXJcbiAgICAgICAgYmFja2dyb3VuZDogI2MyMTYxNmI3XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormularioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-formulario',
                templateUrl: './formulario.component.html',
                styleUrls: ['./formulario.component.sass']
            }]
    }], function () { return [{ type: _egresos_egreso_service__WEBPACK_IMPORTED_MODULE_3__["EgresoService"] }, { type: _ingresos_ingreso_service__WEBPACK_IMPORTED_MODULE_4__["IngresoService"] }]; }, null); })();


/***/ }),

/***/ "GP/5":
/*!*******************************************!*\
  !*** ./src/app/egresos/egreso.service.ts ***!
  \*******************************************/
/*! exports provided: EgresoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgresoService", function() { return EgresoService; });
/* harmony import */ var _egreso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./egreso.model */ "HMLG");

class EgresoService {
    constructor() {
        this.egresos = [new _egreso_model__WEBPACK_IMPORTED_MODULE_0__["Egreso"]('Meriendas', 300),
            new _egreso_model__WEBPACK_IMPORTED_MODULE_0__["Egreso"]('Camisetas', 400)];
    }
    agregarEgreso(egreso) {
        this.egresos.push(egreso);
    }
    eliminarEgreso(egreso) {
        const indice = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1);
    }
}


/***/ }),

/***/ "HMLG":
/*!*****************************************!*\
  !*** ./src/app/egresos/egreso.model.ts ***!
  \*****************************************/
/*! exports provided: Egreso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Egreso", function() { return Egreso; });
class Egreso {
    constructor(descripcion, valor) {
        this.descripcion = descripcion;
        this.valor = valor;
    }
}


/***/ }),

/***/ "HanQ":
/*!************************************************!*\
  !*** ./src/app/ingresos/ingresos.component.ts ***!
  \************************************************/
/*! exports provided: IngresosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresosComponent", function() { return IngresosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ingreso_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingreso.service */ "cJzC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function IngresosComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IngresosComponent_div_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ingreso_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.eliminarIngreso(ingreso_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingreso_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Descripcion: ", ingreso_r1.descripcion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Valor: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](8, 2, ingreso_r1.valor, "EUR", "\u20AC", "1.2-2"), "");
} }
class IngresosComponent {
    constructor(ingresoService) {
        this.ingresoService = ingresoService;
    }
    ngOnInit() {
        this.ingresos = this.ingresoService.ingresos;
    }
    eliminarIngreso(ingreso) {
        this.ingresoService.eliminarIngreso(ingreso);
    }
}
IngresosComponent.ɵfac = function IngresosComponent_Factory(t) { return new (t || IngresosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ingreso_service__WEBPACK_IMPORTED_MODULE_1__["IngresoService"])); };
IngresosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IngresosComponent, selectors: [["app-ingresos"]], decls: 4, vars: 1, consts: [[1, "modulo"], [1, "titulo"], ["class", "ingresos", 4, "ngFor", "ngForOf"], [1, "ingresos"], [1, "ingreso", "modulo-ingresos"], [1, "boton-eliminar", 3, "click"]], template: function IngresosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ingresos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IngresosComponent_div_3_Template, 11, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ingresos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".modulo-ingresos[_ngcontent-%COMP%] {\n  background: #0ca05b9d;\n  padding: 12px;\n  margin-top: 5px;\n}\n.modulo-ingresos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: white;\n}\n.modulo-ingresos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .boton-eliminar[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  padding: 4px;\n  float: right;\n  font-size: 15px;\n  background: #0a585585;\n  color: white;\n  border: 0 solid #ffffff02;\n  border-radius: 3px;\n  transition: 1s;\n  cursor: pointer;\n}\n.modulo-ingresos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .boton-eliminar[_ngcontent-%COMP%]:hover {\n  background: #0a585513;\n  font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVzb3MvaW5ncmVzb3MuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFUjtBQURRO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFHWjtBQUZZO0VBQ0cscUJBQUE7RUFDQSxlQUFBO0FBSWYiLCJmaWxlIjoic3JjL2FwcC9pbmdyZXNvcy9pbmdyZXNvcy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bG8taW5ncmVzb3NcbiAgICBiYWNrZ3JvdW5kOiAjMGNhMDViOWRcbiAgICBwYWRkaW5nOiAxMnB4XG4gICAgbWFyZ2luLXRvcDogNXB4XG4gICAgZGl2XG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxuICAgICAgICBmb250LXdlaWdodDogYm9sZFxuICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgLmJvdG9uLWVsaW1pbmFyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweFxuICAgICAgICAgICAgcGFkZGluZzogNHB4XG4gICAgICAgICAgICBmbG9hdDogcmlnaHRcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBhNTg1NTg1XG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgICAgIGJvcmRlcjogMCBzb2xpZCAjZmZmZmZmMDJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMXNcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAgICAgJjpob3ZlclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzBhNTg1NTEzXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHhcblxuICAgICAgICBcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngresosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ingresos',
                templateUrl: './ingresos.component.html',
                styleUrls: ['./ingresos.component.sass']
            }]
    }], function () { return [{ type: _ingreso_service__WEBPACK_IMPORTED_MODULE_1__["IngresoService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ingresos_ingreso_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingresos/ingreso.service */ "cJzC");
/* harmony import */ var _egresos_egreso_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./egresos/egreso.service */ "GP/5");
/* harmony import */ var _cabecero_cabecero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cabecero/cabecero.component */ "hqBT");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario/formulario.component */ "EQYB");
/* harmony import */ var _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingresos/ingresos.component */ "HanQ");
/* harmony import */ var _egresos_egresos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./egresos/egresos.component */ "+XX/");








class AppComponent {
    constructor(ingresoService, egresoService) {
        this.ingresoService = ingresoService;
        this.egresoService = egresoService;
        this.title = 'presupuesto';
        this.ingresos = [];
        this.egresos = [];
        this.ingresos = this.ingresoService.ingresos;
        this.egresos = this.egresoService.egresos;
    }
    getIngresoTotal() {
        let ingresoTotal = 0;
        this.ingresos.forEach(ingreso => {
            ingresoTotal += ingreso.valor;
        });
        return ingresoTotal;
    }
    getEgresoTotal() {
        let egresoTotal = 0;
        this.egresos.forEach(egreso => {
            egresoTotal += egreso.valor;
        });
        return egresoTotal;
    }
    getPorcentajeTotal() {
        return this.getEgresoTotal() / this.getIngresoTotal();
    }
    getPresupuestoTotal() {
        return this.getIngresoTotal() - this.getEgresoTotal();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ingresos_ingreso_service__WEBPACK_IMPORTED_MODULE_1__["IngresoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egresos_egreso_service__WEBPACK_IMPORTED_MODULE_2__["EgresoService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 4, consts: [[3, "presupuestoTotal", "ingresoTotal", "egresoTotal", "porcentajeTotal"], [1, "contenedorEI"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cabecero", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-formulario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-ingresos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-egresos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("presupuestoTotal", ctx.getPresupuestoTotal())("ingresoTotal", ctx.getIngresoTotal())("egresoTotal", ctx.getEgresoTotal())("porcentajeTotal", ctx.getPorcentajeTotal());
    } }, directives: [_cabecero_cabecero_component__WEBPACK_IMPORTED_MODULE_3__["CabeceroComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["FormularioComponent"], _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_5__["IngresosComponent"], _egresos_egresos_component__WEBPACK_IMPORTED_MODULE_6__["EgresosComponent"]], styles: [".contenedorEI[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvckVJXG4gICAgZGlzcGxheTogZmxleFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXG4gICAgd2lkdGg6IDEwMCVcbiAgICBtYXJnaW4tdG9wOiAzMnB4Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _ingresos_ingreso_service__WEBPACK_IMPORTED_MODULE_1__["IngresoService"] }, { type: _egresos_egreso_service__WEBPACK_IMPORTED_MODULE_2__["EgresoService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _cabecero_cabecero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cabecero/cabecero.component */ "hqBT");
/* harmony import */ var _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingresos/ingresos.component */ "HanQ");
/* harmony import */ var _egresos_egresos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./egresos/egresos.component */ "+XX/");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formulario/formulario.component */ "EQYB");
/* harmony import */ var _ingresos_ingreso_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ingresos/ingreso.service */ "cJzC");
/* harmony import */ var _egresos_egreso_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./egresos/egreso.service */ "GP/5");



//Componentes





//Servicios



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_ingresos_ingreso_service__WEBPACK_IMPORTED_MODULE_8__["IngresoService"], _egresos_egreso_service__WEBPACK_IMPORTED_MODULE_9__["EgresoService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _cabecero_cabecero_component__WEBPACK_IMPORTED_MODULE_4__["CabeceroComponent"],
        _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_5__["IngresosComponent"],
        _egresos_egresos_component__WEBPACK_IMPORTED_MODULE_6__["EgresosComponent"],
        _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_7__["FormularioComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _cabecero_cabecero_component__WEBPACK_IMPORTED_MODULE_4__["CabeceroComponent"],
                    _ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_5__["IngresosComponent"],
                    _egresos_egresos_component__WEBPACK_IMPORTED_MODULE_6__["EgresosComponent"],
                    _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_7__["FormularioComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [_ingresos_ingreso_service__WEBPACK_IMPORTED_MODULE_8__["IngresoService"], _egresos_egreso_service__WEBPACK_IMPORTED_MODULE_9__["EgresoService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cJzC":
/*!*********************************************!*\
  !*** ./src/app/ingresos/ingreso.service.ts ***!
  \*********************************************/
/*! exports provided: IngresoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoService", function() { return IngresoService; });
/* harmony import */ var _ingreso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingreso.model */ "CLt0");

class IngresoService {
    constructor() {
        this.ingresos = [new _ingreso_model__WEBPACK_IMPORTED_MODULE_0__["Ingreso"]('Venta de garaje', 500),
            new _ingreso_model__WEBPACK_IMPORTED_MODULE_0__["Ingreso"]('Bingo de recolecta', 400)];
    }
    calcularIngresoTotal(ingresos) {
        let totalIngreso;
        for (let i = 0; i < this.ingresos.length; i++) {
            totalIngreso += this.ingresos[i].valor;
        }
        return totalIngreso;
    }
    agregarIngreso(ingreso) {
        this.ingresos.push(ingreso);
    }
    eliminarIngreso(ingreso) {
        const indice = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice, 1);
    }
}


/***/ }),

/***/ "hqBT":
/*!************************************************!*\
  !*** ./src/app/cabecero/cabecero.component.ts ***!
  \************************************************/
/*! exports provided: CabeceroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceroComponent", function() { return CabeceroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class CabeceroComponent {
    constructor() { }
    ngOnInit() { }
}
CabeceroComponent.ɵfac = function CabeceroComponent_Factory(t) { return new (t || CabeceroComponent)(); };
CabeceroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CabeceroComponent, selectors: [["app-cabecero"]], inputs: { presupuestoTotal: "presupuestoTotal", ingresoTotal: "ingresoTotal", egresoTotal: "egresoTotal", porcentajeTotal: "porcentajeTotal" }, decls: 14, vars: 18, consts: [[1, "header", "modulo"], [1, "text-info"], [1, "lados"], [1, "ingreso"], [1, "egreso"]], template: function CabeceroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Presupuesto Disponible Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](6, 3, ctx.presupuestoTotal, "EUR", "\u20AC", "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ingreso total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](10, 8, ctx.ingresoTotal, "EUR", "\u20AC", "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Egreso total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](13, 13, ctx.egresoTotal, "EUR", "\u20AC", "1.2-2"), "");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: [".header[_ngcontent-%COMP%] {\n  margin: auto;\n  background: #084975b4;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 10px;\n  color: #f4f4f4;\n  text-align: center;\n}\n.header[_ngcontent-%COMP%]   .lados[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n.header[_ngcontent-%COMP%]   .lados[_ngcontent-%COMP%]   .ingreso[_ngcontent-%COMP%] {\n  background: #26754086;\n  padding: 10px;\n  width: 190px;\n  font-size: 20px;\n}\n.header[_ngcontent-%COMP%]   .lados[_ngcontent-%COMP%]   .egreso[_ngcontent-%COMP%] {\n  background: #af3a3a70;\n  padding: 10px;\n  width: 190px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FiZWNlcm8vY2FiZWNlcm8uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRVI7QUFESTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQUdSO0FBRlE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUlaO0FBSFE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUtaIiwiZmlsZSI6InNyYy9hcHAvY2FiZWNlcm8vY2FiZWNlcm8uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyXG4gICAgbWFyZ2luOiBhdXRvXG4gICAgYmFja2dyb3VuZDogIzA4NDk3NWI0XG4gICAgaDEsIGgyLCBwXG4gICAgICAgIG1hcmdpbjogYXV0b1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4IFxuICAgICAgICBjb2xvcjogI2Y0ZjRmNFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAubGFkb3NcbiAgICAgICAgZGlzcGxheTogZmxleFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seVxuICAgICAgICAuaW5ncmVzb1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2NzU0MDg2XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4XG4gICAgICAgICAgICB3aWR0aDogMTkwcHhcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweFxuICAgICAgICAuZWdyZXNvXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYWYzYTNhNzBcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHhcbiAgICAgICAgICAgIHdpZHRoOiAxOTBweFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CabeceroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cabecero',
                templateUrl: './cabecero.component.html',
                styleUrls: ['./cabecero.component.sass']
            }]
    }], function () { return []; }, { presupuestoTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ingresoTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], egresoTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], porcentajeTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map