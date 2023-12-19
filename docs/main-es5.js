function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 26,
      vars: 0,
      consts: [[1, "about-us"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-sm-12", "col-md-12", "order-lg-1", "order-2"], [1, "about-us-info-2"], [1, "fa-solid", "fa-diagram-predecessor"], [1, "fa-solid", "fa-compress"], [1, "fa-solid", "fa-podcast"], [1, "col-lg-6", "col-sm-12", "col-md-12", "order-lg-2", "order-1"], ["src", "assets\\img\\about (1).jpg", "alt", "", 1, "img-fluid"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nihil ratione quas velit autem provident voluptatum repellendus culpa aut nesciunt.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Ullamco laboris nisi ut aliquip consequat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Magnam soluta odio exercitationem reprehenderi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Voluptatem et qui exercitationem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".about-us[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n\r\n  margin-top: 71px;\r\n}\r\n\r\n\r\n.about-us[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  padding-top: 40px;\r\n  font-size: 27px;\r\n  color: rgb(0,31,141);\r\n\r\n}\r\n\r\n\r\n.about-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  color: rgb(25,51,92);\r\n}\r\n\r\n\r\n.about-us[_ngcontent-%COMP%]   .about-us-info-2[_ngcontent-%COMP%] {\r\n\r\n  width: 100%;\r\n  height: auto;\r\n\r\n}\r\n\r\n\r\n.about-us[_ngcontent-%COMP%]   .about-us-info-2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .about-us[_ngcontent-%COMP%]   .about-us-info-2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .about-us[_ngcontent-%COMP%]   .about-us-info-2[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  color: rgb(0,31,141);\r\n}\r\n\r\n\r\n.about-us[_ngcontent-%COMP%]   .about-us-info-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: rgb(25,51,92);\r\n}\r\n\r\n\r\n.about-us[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  padding-top: 40px;\r\n}\r\n\r\n\r\n@media (max-width : 750px) {\r\n\r\n  .about-us[_ngcontent-%COMP%]   .about-us-info-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .about-us[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .about-us[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n    padding-top: 60px;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media (min-width : 751px) and (max-width : 950px) {\r\n\r\n  .about-us[_ngcontent-%COMP%]   .about-us-info-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .about-us[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .about-us[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n    padding-top: 60px;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNCQUFzQjs7O0FBR3RCO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9COztBQUV0Qjs7O0FBR0E7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOzs7QUFHQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTs7QUFFZDs7O0FBRUE7OztFQUdFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7OztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COzs7QUFHQTs7RUFFRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFRjs7O0FBRUE7O0VBRUU7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKiAgYWJvdXQgY29tcG9uZW50ICAqL1xyXG5cclxuXHJcbi5hYm91dC11cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICBtYXJnaW4tdG9wOiA3MXB4O1xyXG59XHJcblxyXG4uYWJvdXQtdXMgaDIge1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBjb2xvcjogcmdiKDAsMzEsMTQxKTtcclxuXHJcbn1cclxuXHJcblxyXG4uYWJvdXQtdXMgcCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGNvbG9yOiByZ2IoMjUsNTEsOTIpO1xyXG59XHJcblxyXG5cclxuLmFib3V0LXVzIC5hYm91dC11cy1pbmZvLTIge1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG59XHJcblxyXG4uYWJvdXQtdXMgLmFib3V0LXVzLWluZm8tMiBoMyxcclxuLmFib3V0LXVzIC5hYm91dC11cy1pbmZvLTIgaDQsXHJcbi5hYm91dC11cyAuYWJvdXQtdXMtaW5mby0yIGg1IHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IHJnYigwLDMxLDE0MSk7XHJcbn1cclxuXHJcbi5hYm91dC11cyAuYWJvdXQtdXMtaW5mby0yIGkge1xyXG4gIGNvbG9yOiByZ2IoMjUsNTEsOTIpO1xyXG59XHJcblxyXG5cclxuLmFib3V0LXVzIC5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoIDogNzUwcHgpIHtcclxuXHJcbiAgLmFib3V0LXVzIC5hYm91dC11cy1pbmZvLTIgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LXVzIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5hYm91dC11cyAuaW1nLWZsdWlkIHtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoIDogNzUxcHgpIGFuZCAobWF4LXdpZHRoIDogOTUwcHgpIHtcclxuXHJcbiAgLmFib3V0LXVzIC5hYm91dC11cy1pbmZvLTIgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LXVzIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5hYm91dC11cyAuaW1nLWZsdWlkIHtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pricing/pricing.component */
    "./src/app/pricing/pricing.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");

    var routes = [{
      path: "home",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: "about",
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: "services",
      component: _services_services_component__WEBPACK_IMPORTED_MODULE_0__["ServicesComponent"]
    }, {
      path: "pricing",
      component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__["PricingComponent"]
    }, {
      path: "contact",
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    }, {
      path: "**",
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'logis';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts");
    /* harmony import */


    var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pricing/pricing.component */
    "./src/app/pricing/pricing.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__["PricingComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__["PricingComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 34,
      vars: 0,
      consts: [[1, "contact-us"], [1, "container"], [1, "col-12"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.318097025198!2d31.256931815451413!3d30.056415224961132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458409cf8ce9fa5%3A0xad253eb7c1e47780!2sEl-Gaish%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1662510653103!5m2!1sen!2seg", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], [1, "contact-us-info"], [1, "row"], [1, "col-lg-4", "col-sm-12", "col-md-12"], [1, "contact-info-1"], [1, "fa-solid", "fa-location-dot"], [1, "fa-solid", "fa-envelope"], [1, "fa-solid", "fa-mobile"], [1, "col-lg-8", "col-sm-12", "col-md-12"], [1, "contact-info-2"], [1, "login"], ["type", "text", "placeholder", "Your Name", 1, "input-1"], ["type", "email", "placeholder", "Your Email", 1, "input-1"], ["type", "text", "placeholder", "Subject"], ["name", "", "cols", "68", "rows", "5"], [1, "btn"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Location:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "A108 Adam Street, New York, NY 535022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "info@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Call:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "+1 5589 55488 55");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Send Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".contact-us[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n\r\n  margin-top: 72px;\r\n}\r\n\r\n\r\n\r\n.contact-us[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 40vh;\r\n  margin-top: 50px;\r\n\r\n}\r\n\r\n\r\n\r\n.contact-us[_ngcontent-%COMP%]   .contact-us-info[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 30px;\r\n\r\n}\r\n\r\n\r\n\r\n.contact-us[_ngcontent-%COMP%]   .contact-us-info[_ngcontent-%COMP%]   .contact-info-1[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  width: 100%;\r\n  height: auto;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n.contact-us[_ngcontent-%COMP%]   .contact-us-info[_ngcontent-%COMP%]   .contact-info-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color:#023b6d ;\r\n  margin-top: 12px;\r\n  margin-left: 15px;\r\n  font-size: 18px;\r\n}\r\n\r\n\r\n\r\n.contact-us[_ngcontent-%COMP%]   .contact-us-info[_ngcontent-%COMP%]   .contact-info-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color:  #0d42ff;\r\n}\r\n\r\n\r\n\r\n.contact-us[_ngcontent-%COMP%]   .contact-us-info[_ngcontent-%COMP%]   .contact-info-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-left: 30px;\r\n  color:  #00a6eb;\r\n}\r\n\r\n\r\n\r\n.contact-us[_ngcontent-%COMP%]   .contact-us-info[_ngcontent-%COMP%]   .contact-info-2[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  width: 100%;\r\n  height: auto;\r\n  margin-bottom: 30px;\r\n\r\n}\r\n\r\n\r\n\r\n.contact-us[_ngcontent-%COMP%]   .contact-us-info[_ngcontent-%COMP%]   .contact-info-2[_ngcontent-%COMP%]   .input-1[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n  height: auto;\r\n  margin-left: 10px;\r\n  margin-bottom: 15px;\r\n  padding: 8px;\r\n\r\n}\r\n\r\n\r\n\r\n.contact-us[_ngcontent-%COMP%]   .contact-us-info[_ngcontent-%COMP%]   .contact-info-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 98%;\r\n  height: auto;\r\n  margin-bottom: 15px;\r\n  margin-left: 8px;\r\n  padding: 8px;\r\n}\r\n\r\n\r\n\r\n.contact-us[_ngcontent-%COMP%]   .contact-us-info[_ngcontent-%COMP%]   .contact-info-2[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  width: 98%;\r\n  height: auto;\r\n  margin-left: 8px;\r\n  padding: 8px;\r\n\r\n}\r\n\r\n\r\n\r\n.contact-us[_ngcontent-%COMP%]   .contact-us-info[_ngcontent-%COMP%]   .contact-info-2[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  margin-left: 290px;\r\n  background-color: #0d42ff;\r\n  color: white;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n\r\n}\r\n\r\n\r\n\r\n@media (max-width : 750px) {\r\n\r\n  .contact-us[_ngcontent-%COMP%]   .contact-us-info[_ngcontent-%COMP%]   .contact-info-2[_ngcontent-%COMP%]   .input-1[_ngcontent-%COMP%] {\r\n    width: 97%;\r\n    height: auto;\r\n\r\n\r\n  }\r\n\r\n  .contact-us[_ngcontent-%COMP%]   .contact-us-info[_ngcontent-%COMP%]   .contact-info-2[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    margin-left: 110px;\r\n\r\n\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxzQkFBc0I7Ozs7QUFJdEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7RUFFWixnQkFBZ0I7QUFDbEI7Ozs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCOztBQUVsQjs7OztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7O0FBRWxCOzs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7Ozs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7Ozs7QUFFQTtFQUNFLGVBQWU7QUFDakI7Ozs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOzs7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7O0FBRXJCOzs7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTs7QUFFZDs7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7OztBQUdBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTs7QUFFZDs7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7QUFFckI7Ozs7QUFHQTs7RUFFRTtJQUNFLFVBQVU7SUFDVixZQUFZOzs7RUFHZDs7RUFFQTtJQUNFLGtCQUFrQjs7O0VBR3BCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8qIGNvbnRhY3QgY29tcG9uZW50ICovXHJcblxyXG5cclxuXHJcbi5jb250YWN0LXVzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gIG1hcmdpbi10b3A6IDcycHg7XHJcbn1cclxuXHJcbi5jb250YWN0LXVzIGlmcmFtZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHZoO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG59XHJcblxyXG5cclxuLmNvbnRhY3QtdXMgLmNvbnRhY3QtdXMtaW5mbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG59XHJcblxyXG4uY29udGFjdC11cyAuY29udGFjdC11cy1pbmZvIC5jb250YWN0LWluZm8tMSB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LXVzIC5jb250YWN0LXVzLWluZm8gLmNvbnRhY3QtaW5mby0xIGgyIHtcclxuICBjb2xvcjojMDIzYjZkIDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmNvbnRhY3QtdXMgLmNvbnRhY3QtdXMtaW5mbyAuY29udGFjdC1pbmZvLTEgaDIgaSB7XHJcbiAgY29sb3I6ICAjMGQ0MmZmO1xyXG59XHJcblxyXG5cclxuLmNvbnRhY3QtdXMgLmNvbnRhY3QtdXMtaW5mbyAuY29udGFjdC1pbmZvLTEgcCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgY29sb3I6ICAjMDBhNmViO1xyXG59XHJcblxyXG5cclxuLmNvbnRhY3QtdXMgLmNvbnRhY3QtdXMtaW5mbyAuY29udGFjdC1pbmZvLTIge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxufVxyXG5cclxuLmNvbnRhY3QtdXMgLmNvbnRhY3QtdXMtaW5mbyAuY29udGFjdC1pbmZvLTIgLmlucHV0LTEge1xyXG4gIHdpZHRoOiA0OCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG5cclxufVxyXG5cclxuLmNvbnRhY3QtdXMgLmNvbnRhY3QtdXMtaW5mbyAuY29udGFjdC1pbmZvLTIgaW5wdXQge1xyXG4gIHdpZHRoOiA5OCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcblxyXG4uY29udGFjdC11cyAuY29udGFjdC11cy1pbmZvIC5jb250YWN0LWluZm8tMiB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcblxyXG59XHJcblxyXG5cclxuLmNvbnRhY3QtdXMgLmNvbnRhY3QtdXMtaW5mbyAuY29udGFjdC1pbmZvLTIgLmJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI5MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDQyZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aCA6IDc1MHB4KSB7XHJcblxyXG4gIC5jb250YWN0LXVzIC5jb250YWN0LXVzLWluZm8gLmNvbnRhY3QtaW5mby0yIC5pbnB1dC0xIHtcclxuICAgIHdpZHRoOiA5NyU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG5cclxuICB9XHJcblxyXG4gIC5jb250YWN0LXVzIC5jb250YWN0LXVzLWluZm8gLmNvbnRhY3QtaW5mby0yIC5idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xyXG5cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 62,
      vars: 0,
      consts: [[1, "end-content"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-sm-12", "col-md-6"], [1, "social-icon"], [1, "fa-brands", "fa-facebook"], [1, "fa-brands", "fa-twitter"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-linkedin"], [1, "col-lg-2", "col-sm-6", "col-md-6"], [1, "info-me", "text-center", "pt-5", "mt-4"], ["href", "https://www.facebook.com/profile.php?id=100007884046851&mibextid=ZbWKwL"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Logis ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cras fermentum odio eu feugiat lide par naso tierra. Justo eget ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " nada terra videa magna derita valies darta donna mare fermentum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " iaculis eu non diam phasellus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Useful Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Aboutus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Privacy policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Our Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Web Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Marketing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Graphic Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "A108 Street");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "New York");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "United States.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Phone:+1555548 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Email:info@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\xA9 Copyright Logis. All Rights Reserved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Developer by : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Omar waheed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".end-content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 75vh;\r\n  margin-top: 0px;\r\n  background-color: rgb(14,29,52);\r\n\r\n}\r\n\r\n\r\n\r\n.end-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  padding-top: 60px;\r\n  color: white;\r\n  font-size: 25px;\r\n}\r\n\r\n\r\n\r\n.end-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 15px;\r\n}\r\n\r\n\r\n\r\n.end-content[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n\r\n}\r\n\r\n\r\n\r\n.end-content[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 20px;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n  margin: 0px 8px;\r\n}\r\n\r\n\r\n\r\n.end-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  padding-top: 50px;\r\n  color: white;\r\n  font-size: 20px;\r\n}\r\n\r\n\r\n\r\n.end-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  width: 100%;\r\n  height: auto;\r\n\r\n}\r\n\r\n\r\n\r\n.end-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  color: white;\r\n  padding: 6px;\r\n  margin: 4px;\r\n}\r\n\r\n\r\n\r\n.end-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 17px;\r\n  padding-top: 10px;\r\n}\r\n\r\n\r\n\r\n.end-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  color: white;\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n\r\n\r\n.end-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n\r\n}\r\n\r\n\r\n\r\n@media (max-width : 750px) {\r\n  .end-content[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    padding-bottom:  15px;\r\n    overflow: hidden;\r\n\r\n  }\r\n\r\n  .end-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n  }\r\n\r\n  .end-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n  }\r\n\r\n  .end-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    padding-top: 25px;\r\n  }\r\n\r\n \r\n\r\n  .end-content[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media (min-width : 751px) and (max-width : 950px) {\r\n\r\n  .end-content[_ngcontent-%COMP%] {\r\n    height: 80vh;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7Ozs7QUFJWjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLCtCQUErQjs7QUFFakM7Ozs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7Ozs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztBQUVkOzs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOzs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7O0FBRWQ7Ozs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQUNiOzs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlOztBQUVqQjs7OztBQUVBO0VBQ0UscUJBQXFCOztBQUV2Qjs7OztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7Ozs7RUFJQTtJQUNFLFVBQVU7RUFDWjs7OztBQUlGOzs7O0FBRUE7O0VBRUU7SUFDRSxZQUFZO0VBQ2Q7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAgZm9vdGVyICovXHJcblxyXG5cclxuXHJcbi5lbmQtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3NXZoO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQsMjksNTIpO1xyXG5cclxufVxyXG5cclxuLmVuZC1jb250ZW50IGgyIHtcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uZW5kLWNvbnRlbnQgcCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmVuZC1jb250ZW50IC5zb2NpYWwtaWNvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLmVuZC1jb250ZW50IC5zb2NpYWwtaWNvbiBpIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAwcHggOHB4O1xyXG59XHJcblxyXG4uZW5kLWNvbnRlbnQgaDMge1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5lbmQtY29udGVudCB1bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuXHJcbn1cclxuXHJcbi5lbmQtY29udGVudCBsaSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG59XHJcblxyXG4uZW5kLWNvbnRlbnQgaDUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5lbmQtY29udGVudCBoNiB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuXHJcbi5lbmQtY29udGVudCBoNiBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aCA6IDc1MHB4KSB7XHJcbiAgLmVuZC1jb250ZW50IHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAgMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIH1cclxuXHJcbiAgLmVuZC1jb250ZW50IGgyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICB9XHJcblxyXG4gIC5lbmQtY29udGVudCBwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICB9XHJcblxyXG4gIC5lbmQtY29udGVudCBoMyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICB9XHJcblxyXG4gXHJcblxyXG4gIC5lbmQtY29udGVudCAuY29sLXNtLTYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoIDogNzUxcHgpIGFuZCAobWF4LXdpZHRoIDogOTUwcHgpIHtcclxuXHJcbiAgLmVuZC1jb250ZW50IHtcclxuICAgIGhlaWdodDogODB2aDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 49,
      vars: 0,
      consts: [[1, "home"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-sm-12", "col-md-12", "order-lg-1", "order-2"], [1, "btn"], [1, "col-lg-6", "col-sm-12", "col-md-12", "order-lg-2", "order-1"], ["src", "assets\\img\\hero-img.svg", "alt", "", 1, "img-fluid"], [1, "info-1"], [1, "col-lg-4", "col-sm-12", "col-md-6"], [1, "info-body-1"], [1, "fa-solid", "fa-truck-ramp-box"], [1, "fa-solid", "fa-arrow-right-long"], [1, "info-body-2"], [1, "fa-solid", "fa-cart-flatbed-suitcase"], [1, "info-body-3"], [1, "fa-solid", "fa-cart-shopping"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Your Lightning Fast ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Delivery Partner.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Facere distinctio molestiae nisi fugit tenetur repellat non praesentium ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " eum voluptatem eum maiores eaque id optio ullam occaecati odio est.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Lorem ipsum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi obcaecati architecto .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Learn More ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Dolor Sitema.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ad. Voluptas, natus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Learn More ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Sed ut perspiciatis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde possimus aut deleniti?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Learn More ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".home[_ngcontent-%COMP%] {\r\n  margin-top: 72px;\r\n  background-color: rgb(14,29,52);\r\n  background-image: url('hero-bg.png');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  height: 100vh;\r\n\r\n}\r\n\r\n\r\n.home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  padding-top: 180px;\r\n  margin-bottom: 20px;\r\n  color: white;\r\n  font-size: 40px;\r\n}\r\n\r\n\r\n.home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\r\n  color: white;\r\n  font-size: 16px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n\r\n.home[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  \r\n  padding: 10px;\r\n  background-color: rgb(13,66,255);\r\n  color: white;\r\n  width: 23%;\r\n}\r\n\r\n\r\n.home[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 25px;\r\n  margin-left: 50px;\r\n\r\n}\r\n\r\n\r\n.info-1[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 20px;\r\n}\r\n\r\n\r\n.info-1[_ngcontent-%COMP%]   .info-body-1[_ngcontent-%COMP%], .info-1[_ngcontent-%COMP%]   .info-body-2[_ngcontent-%COMP%], .info-1[_ngcontent-%COMP%]   .info-body-3[_ngcontent-%COMP%] {\r\n  margin-top: 25px;\r\n  text-align: center;\r\n  background-color: #ecf5ff;\r\n  cursor: pointer;\r\n  margin-bottom: 20px;\r\n\r\n}\r\n\r\n\r\n.info-1[_ngcontent-%COMP%]   .info-body-1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .info-1[_ngcontent-%COMP%]   .info-body-2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .info-1[_ngcontent-%COMP%]   .info-body-3[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  font-size: 22px;\r\n  color: rgb(14,29,52);\r\n  margin-bottom: 12px;\r\n}\r\n\r\n\r\n.info-1[_ngcontent-%COMP%]   .info-body-1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .info-1[_ngcontent-%COMP%]   .info-body-2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .info-1[_ngcontent-%COMP%]   .info-body-3[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: rgb(13,66,255);\r\n}\r\n\r\n\r\n.info-1[_ngcontent-%COMP%]   .info-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .info-1[_ngcontent-%COMP%]   .info-body-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .info-1[_ngcontent-%COMP%]   .info-body-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: rgb(13,66,255);\r\n  font-size: 17px;\r\n}\r\n\r\n\r\n.info-1[_ngcontent-%COMP%]   .info-body-1[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .info-1[_ngcontent-%COMP%]   .info-body-2[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .info-1[_ngcontent-%COMP%]   .info-body-3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  background-color: rgb(13,66,255);\r\n  margin-bottom: 25px;\r\n  color: white;\r\n\r\n}\r\n\r\n\r\n.info-1[_ngcontent-%COMP%]   .info-body-1[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .info-1[_ngcontent-%COMP%]   .info-body-2[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .info-1[_ngcontent-%COMP%]   .info-body-3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: white;\r\n\r\n}\r\n\r\n\r\n@media (max-width : 750px) {\r\n\r\n  .home[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    margin-left: 130px;\r\n    width: 35%;\r\n\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n    margin-left: 0px;\r\n    margin-top: 40px;\r\n\r\n\r\n  }\r\n\r\n\r\n\r\n}\r\n\r\n\r\n@media (min-width :751px) and (max-width:950px) {\r\n\r\n  .home[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    text-align: center;\r\n  }\r\n\r\n\r\n\r\n  .home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    padding-top: 100px;\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    margin-left: 100px;\r\n    width: 35%;\r\n\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n    margin-left: 0px;\r\n    margin-top: 40px;\r\n\r\n\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLG9DQUF3RTtFQUN4RSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxhQUFhOztBQUVmOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7OztBQUVBOztFQUVFLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCOztBQUVuQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7O0FBRUE7OztFQUdFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7O0FBRXJCOzs7QUFJQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOzs7QUFHQTs7O0VBR0UscUJBQXFCO0FBQ3ZCOzs7QUFHQTs7O0VBR0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7OztBQUVBOzs7RUFHRSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLFlBQVk7O0FBRWQ7OztBQUVBOzs7RUFHRSxZQUFZOztBQUVkOzs7QUFNQTs7RUFFRTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7O0VBRTdCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVOztFQUVaOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7O0VBR2xCOzs7O0FBSUY7OztBQUVBOztFQUVFO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixrQkFBa0I7RUFDcEI7Ozs7RUFJQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7O0VBRVo7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCOzs7RUFHbEI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5ob21lIHtcclxuICBtYXJnaW4tdG9wOiA3MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwyOSw1Mik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKEQ6XFxmaXJzdC1wcm9qZWN0XFxsb2dpc1xcc3JjXFxhc3NldHNcXGltZ1xcaGVyby1iZy5wbmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxufVxyXG5cclxuXHJcbi5ob21lIGgxIHtcclxuICBwYWRkaW5nLXRvcDogMTgwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4uaG9tZSBwIHtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaG9tZSAuYnRuIHtcclxuICAvKiBtYXJnaW4tbGVmdDogNjBweDsgKi9cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMyw2NiwyNTUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMjMlO1xyXG59XHJcblxyXG4uaG9tZSAuaW1nLWZsdWlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuXHJcbn1cclxuXHJcbi5pbmZvLTEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaW5mby0xICAuaW5mby1ib2R5LTEsXHJcbi5pbmZvLTEgIC5pbmZvLWJvZHktMixcclxuLmluZm8tMSAgLmluZm8tYm9keS0zIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmNWZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uaW5mby0xIC5pbmZvLWJvZHktMSBoMyxcclxuLmluZm8tMSAuaW5mby1ib2R5LTIgaDMsXHJcbi5pbmZvLTEgLmluZm8tYm9keS0zIGgzIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IHJnYigxNCwyOSw1Mik7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuXHJcbi5pbmZvLTEgLmluZm8tYm9keS0xIGgzIGksXHJcbi5pbmZvLTEgLmluZm8tYm9keS0yIGgzIGksXHJcbi5pbmZvLTEgLmluZm8tYm9keS0zIGgzIGkge1xyXG4gIGNvbG9yOiByZ2IoMTMsNjYsMjU1KTtcclxufVxyXG5cclxuXHJcbi5pbmZvLTEgLmluZm8tYm9keS0xIHAsXHJcbi5pbmZvLTEgLmluZm8tYm9keS0yIHAsXHJcbi5pbmZvLTEgLmluZm8tYm9keS0zIHAge1xyXG4gIGNvbG9yOiByZ2IoMTMsNjYsMjU1KTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5pbmZvLTEgLmluZm8tYm9keS0xIC5idG4sXHJcbi5pbmZvLTEgLmluZm8tYm9keS0yIC5idG4sXHJcbi5pbmZvLTEgLmluZm8tYm9keS0zIC5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMyw2NiwyNTUpO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuLmluZm8tMSAuaW5mby1ib2R5LTEgLmJ0biBpLFxyXG4uaW5mby0xIC5pbmZvLWJvZHktMiAuYnRuIGksXHJcbi5pbmZvLTEgLmluZm8tYm9keS0zIC5idG4gaSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoIDogNzUwcHgpIHtcclxuXHJcbiAgLmhvbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gIH1cclxuXHJcbiAgLmhvbWUgaDEge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIC5ob21lIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuaG9tZSAuYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMzBweDtcclxuICAgIHdpZHRoOiAzNSU7XHJcblxyXG4gIH1cclxuXHJcbiAgLmhvbWUgLmltZy1mbHVpZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGggOjc1MXB4KSBhbmQgKG1heC13aWR0aDo5NTBweCkge1xyXG5cclxuICAuaG9tZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLmhvbWUgaDEge1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuaG9tZSBwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcblxyXG4gIC5ob21lIC5idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDM1JTtcclxuXHJcbiAgfVxyXG5cclxuICAuaG9tZSAuaW1nLWZsdWlkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG5cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 23,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "fa-solid", "fa-bars-staggered"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], ["routerLink", "/home", 1, "nav-link"], [1, "nav-item"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/services", 1, "nav-link"], ["routerLink", "/pricing", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".navbar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: rgb(38,51,72);\r\n  position: fixed;\r\n  top: 0 !important;\r\n  left: 0 !important;\r\n  right: 0 !important;\r\n  z-index: 9999999999999999999999 !important;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  color: white;\r\n  margin-left: 15px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%]   {\r\n  color: white !important;\r\n  font-size: 25px !important;\r\n  margin-top: 32px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n  margin-right: 30px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n\r\n  margin-right: 20px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n  padding: 8px;\r\n\r\n}\r\n\r\n@media (max-width :750px) {\r\n\r\n  .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]  {\r\n    text-align: center !important;\r\n  }\r\n\r\n\r\n\r\n\r\n}\r\n\r\n@media (min-width :751px) and (max-width : 950px) {\r\n\r\n\r\n  .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]  {\r\n    text-align: center !important;\r\n  }\r\n\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxhQUFhOztBQUViO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7O0FBRWQ7O0FBTUE7O0VBRUU7SUFDRSw2QkFBNkI7RUFDL0I7Ozs7O0FBS0Y7O0FBS0E7OztFQUdFO0lBQ0UsNkJBQTZCO0VBQy9COzs7O0FBSUYiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5cclxuLyogIGhlYWRlciAgKi9cclxuXHJcbi5uYXZiYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsNTEsNzIpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDAgIWltcG9ydGFudDtcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5OTk5OTk5OTk5ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItdG9nZ2xlciAubmF2YmFyLXRvZ2dsZXItaWNvbiAgIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItbmF2IHtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0ge1xyXG5cclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogOHB4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoIDo3NTBweCkge1xyXG5cclxuICAubmF2YmFyIC5uYXZiYXItbmF2ICB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aCA6NzUxcHgpIGFuZCAobWF4LXdpZHRoIDogOTUwcHgpIHtcclxuXHJcblxyXG4gIC5uYXZiYXIgLm5hdmJhci1uYXYgIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 5,
      vars: 0,
      consts: [[1, "not-found"], [1, "container"], ["src", "assets\\img\\404.png", "alt", "", 1, "img-fluid"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Oops......This Page Not Found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".not-found[_ngcontent-%COMP%] {\r\n  margin-top: 72px;\r\n  width: 100%;\r\n  height: auto;\r\n  text-align: center;\r\n  padding-bottom: 20px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.not-found[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 65%;\r\n  height: auto;\r\n  margin-top: 50px;\r\n  margin-bottom: 30px;\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.not-found[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  color: #000;\r\n  text-decoration: underline;\r\n  margin-top: 25px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width : 750px) {\r\n\r\n\r\n  .not-found[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n@media (min-width : 751px) and (max-width : 950px) {\r\n\r\n  .not-found[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEseUJBQXlCOzs7OztBQUt6QjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBb0I7O0FBRXRCOzs7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjs7QUFFckI7Ozs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsZ0JBQWdCOztBQUVsQjs7Ozs7QUFHQTs7O0VBR0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTs7RUFFZDs7QUFFRjs7Ozs7QUFHQTs7RUFFRTtJQUNFLFdBQVc7SUFDWCxZQUFZOztFQUVkOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKiAgbm90LWZvdW5kIGNvbXBvbmVudCAqL1xyXG5cclxuXHJcblxyXG5cclxuLm5vdC1mb3VuZCB7XHJcbiAgbWFyZ2luLXRvcDogNzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLm5vdC1mb3VuZCAuaW1nLWZsdWlkIHtcclxuICB3aWR0aDogNjUlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuXHJcbn1cclxuXHJcbi5ub3QtZm91bmQgaDMge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoIDogNzUwcHgpIHtcclxuXHJcblxyXG4gIC5ub3QtZm91bmQgLmltZy1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoIDogNzUxcHgpIGFuZCAobWF4LXdpZHRoIDogOTUwcHgpIHtcclxuXHJcbiAgLm5vdC1mb3VuZCAuaW1nLWZsdWlkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pricing/pricing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pricing/pricing.component.ts ***!
    \**********************************************/

  /*! exports provided: PricingComponent */

  /***/
  function srcAppPricingPricingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingComponent", function () {
      return PricingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PricingComponent = /*#__PURE__*/function () {
      function PricingComponent() {
        _classCallCheck(this, PricingComponent);
      }

      _createClass(PricingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PricingComponent;
    }();

    PricingComponent.ɵfac = function PricingComponent_Factory(t) {
      return new (t || PricingComponent)();
    };

    PricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PricingComponent,
      selectors: [["app-pricing"]],
      decls: 80,
      vars: 0,
      consts: [[1, "pricing"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-sm-12", "col-md-6"], [1, "pricing-info-1"], [1, "fa-solid", "fa-check"], [1, "fa-solid", "fa-xmark"], [1, "btn"], [1, "pricing-info-2"], [1, "pricing-info-3"]],
      template: function PricingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Free Plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "$0 / ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Quam adipiscing vitae proin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Nec feugiat nisl pretium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Nulla at volutpat diam uteera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Pharetra massa massa ultricies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Massa ultricies mi quis hendrerit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Buy Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Business Plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "$29 / ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Quam adipiscing vitae proin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Nec feugiat nisl pretium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Nulla at volutpat diam uteera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Pharetra massa massa ultricies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Massa ultricies mi quis hendrerit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Buy Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Developer Plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "$49 / ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Quam adipiscing vitae proin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Nec feugiat nisl pretium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Nulla at volutpat diam uteera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Pharetra massa massa ultricies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Massa ultricies mi quis hendrerit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Buy Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".pricing[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 72px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-1[_ngcontent-%COMP%], .pricing[_ngcontent-%COMP%]   .pricing-info-2[_ngcontent-%COMP%], .pricing[_ngcontent-%COMP%]   .pricing-info-3[_ngcontent-%COMP%] {\r\n  margin-top: 60px;\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: rgb(245,248,253);\r\n  border: 1px solid #132848;\r\n  border-radius: 25px;\r\n  cursor: pointer;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  padding-top: 35px;\r\n  margin-left: 15px;\r\n  margin-bottom: 15px;\r\n  color: #132848;\r\n  font-size: 22px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 19px;\r\n  padding-left: 15px;\r\n  color: rgb(13,66,255);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #132848;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  padding-left: 15px;\r\n  font-size: 18px;\r\n  color: #132848;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: green;\r\n  font-size: 15px;\r\n  padding-right: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]  {\r\n  padding-left: 15px;\r\n  font-size: 17px;\r\n  color: #132848;\r\n  margin-bottom: 15px;\r\n  text-decoration: line-through;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  text-decoration: line-through;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: red;\r\n  font-size: 15px;\r\n  padding-right: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-1[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  margin-left: 130px;\r\n  margin-bottom: 30px;\r\n  margin-top: 30px;\r\n  border: 1px solid rgb(13,66,255);\r\n  color: rgb(13,66,255);\r\n  transition: 1s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-1[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(13,66,255);\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  padding-top: 35px;\r\n  margin-left: 15px;\r\n  margin-bottom: 15px;\r\n  color: #132848;\r\n  font-size: 22px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 19px;\r\n  padding-left: 15px;\r\n  color: rgb(13,66,255);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #132848;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  padding-left: 15px;\r\n  font-size: 18px;\r\n  color: #132848;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: green;\r\n  font-size: 15px;\r\n  padding-right: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-2[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  margin-left: 130px;\r\n  margin-bottom: 30px;\r\n  margin-top: 30px;\r\n  border: 1px solid #132848;\r\n  background-color: rgb(13,66,255);\r\n  color: white;\r\n  transition: 1s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-3[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  padding-top: 35px;\r\n  margin-left: 15px;\r\n  margin-bottom: 15px;\r\n  color: #132848;\r\n  font-size: 22px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 19px;\r\n  padding-left: 15px;\r\n  color: rgb(13,66,255);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #132848;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-3[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  padding-left: 15px;\r\n  font-size: 18px;\r\n  color: #132848;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-3[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: green;\r\n  font-size: 15px;\r\n  padding-right: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-3[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]  {\r\n  padding-left: 15px;\r\n  font-size: 17px;\r\n  color: #132848;\r\n  margin-bottom: 15px;\r\n  text-decoration: line-through;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-3[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: red;\r\n  font-size: 15px;\r\n  padding-right: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  margin-left: 130px;\r\n  margin-bottom: 30px;\r\n  margin-top: 30px;\r\n  border: 1px solid rgb(13,66,255);\r\n  color: rgb(13,66,255);\r\n  transition: 1s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing[_ngcontent-%COMP%]   .pricing-info-3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(13,66,255);\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width:750px) {\r\n\r\n  .pricing[_ngcontent-%COMP%]   .pricing-info-1[_ngcontent-%COMP%], .pricing[_ngcontent-%COMP%]   .pricing-info-2[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (min-width :751px) and (max-width:950px) {\r\n\r\n  .pricing[_ngcontent-%COMP%]   .pricing-info-1[_ngcontent-%COMP%], .pricing[_ngcontent-%COMP%]   .pricing-info-2[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCOzs7Ozs7QUFNeEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7Ozs7O0FBSUE7OztFQUdFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7Ozs7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7O0FBRWpCOzs7Ozs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOzs7Ozs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7Ozs7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOzs7Ozs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOzs7Ozs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7Ozs7OztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COzs7Ozs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOzs7Ozs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7Ozs7O0FBR0E7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtBQUNkOzs7Ozs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOzs7Ozs7QUFHQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOzs7Ozs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7Ozs7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOzs7Ozs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOzs7Ozs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGNBQWM7QUFDaEI7Ozs7OztBQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7O0FBRWpCOzs7Ozs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOzs7Ozs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7Ozs7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOzs7Ozs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOzs7Ozs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7Ozs7OztBQUlBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7Ozs7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOzs7Ozs7QUFHQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0FBQ2Q7Ozs7OztBQUdBOztFQUVFOztFQUVBLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7O0FBR0E7O0VBRUU7O0lBRUUsa0JBQWtCO0VBQ3BCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAgcHJpY2luZyBjb21wb25lbnQgICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuLnByaWNpbmcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiA3MnB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5wcmljaW5nIC5wcmljaW5nLWluZm8tMSxcclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0yLFxyXG4ucHJpY2luZyAucHJpY2luZy1pbmZvLTMge1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsMjQ4LDI1Myk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzEzMjg0ODtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ucHJpY2luZyAucHJpY2luZy1pbmZvLTEgaDMge1xyXG4gIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgY29sb3I6ICMxMzI4NDg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG5cclxufVxyXG5cclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0xIHAge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgY29sb3I6IHJnYigxMyw2NiwyNTUpO1xyXG59XHJcblxyXG5cclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0xIHAgc3BhbiB7XHJcbiAgY29sb3I6ICMxMzI4NDg7XHJcbn1cclxuXHJcblxyXG4ucHJpY2luZyAucHJpY2luZy1pbmZvLTEgaDQge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMxMzI4NDg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0xIGg0IGkge1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuXHJcbi5wcmljaW5nIC5wcmljaW5nLWluZm8tMSBoNSAge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6ICMxMzI4NDg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0xIGg1IHNwYW4ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4ucHJpY2luZyAucHJpY2luZy1pbmZvLTEgaDUgaSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0xIC5idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzLDY2LDI1NSk7XHJcbiAgY29sb3I6IHJnYigxMyw2NiwyNTUpO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG5cclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0xIC5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMyw2NiwyNTUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0yIGgzIHtcclxuICBwYWRkaW5nLXRvcDogMzVweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGNvbG9yOiAjMTMyODQ4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuXHJcbi5wcmljaW5nIC5wcmljaW5nLWluZm8tMiBwIHtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGNvbG9yOiByZ2IoMTMsNjYsMjU1KTtcclxufVxyXG5cclxuXHJcbi5wcmljaW5nIC5wcmljaW5nLWluZm8tMiBwIHNwYW4ge1xyXG4gIGNvbG9yOiAjMTMyODQ4O1xyXG59XHJcblxyXG5cclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0yIGg0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMTMyODQ4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5wcmljaW5nIC5wcmljaW5nLWluZm8tMiBoNCBpIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4ucHJpY2luZyAucHJpY2luZy1pbmZvLTIgLmJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMTMyODQ4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMyw2NiwyNTUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuXHJcblxyXG4ucHJpY2luZyAucHJpY2luZy1pbmZvLTMgaDMge1xyXG4gIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgY29sb3I6ICMxMzI4NDg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG5cclxufVxyXG5cclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0zIHAge1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgY29sb3I6IHJnYigxMyw2NiwyNTUpO1xyXG59XHJcblxyXG5cclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0zIHAgc3BhbiB7XHJcbiAgY29sb3I6ICMxMzI4NDg7XHJcbn1cclxuXHJcblxyXG4ucHJpY2luZyAucHJpY2luZy1pbmZvLTMgaDQge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMxMzI4NDg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0zIGg0IGkge1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuXHJcbi5wcmljaW5nIC5wcmljaW5nLWluZm8tMyBoNSAge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6ICMxMzI4NDg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuXHJcblxyXG4ucHJpY2luZyAucHJpY2luZy1pbmZvLTMgaDUgaSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0zIC5idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzLDY2LDI1NSk7XHJcbiAgY29sb3I6IHJnYigxMyw2NiwyNTUpO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG5cclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0zIC5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMyw2NiwyNTUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc1MHB4KSB7XHJcblxyXG4gIC5wcmljaW5nIC5wcmljaW5nLWluZm8tMSxcclxuLnByaWNpbmcgLnByaWNpbmctaW5mby0yIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aCA6NzUxcHgpIGFuZCAobWF4LXdpZHRoOjk1MHB4KSB7XHJcblxyXG4gIC5wcmljaW5nIC5wcmljaW5nLWluZm8tMSxcclxuICAucHJpY2luZyAucHJpY2luZy1pbmZvLTIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pricing',
          templateUrl: './pricing.component.html',
          styleUrls: ['./pricing.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/services.component.ts":
  /*!************************************************!*\
    !*** ./src/app/services/services.component.ts ***!
    \************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };

    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-services"]],
      decls: 110,
      vars: 0,
      consts: [[1, "services"], [1, "container"], [1, "col-12", "text-center"], [1, "row"], [1, "col-lg-4", "col-sm-12", "col-md-6"], [1, "services-info-1"], ["src", "assets\\img\\storage-service.jpg", "alt", "", 1, "img-fluid"], [1, "services-info-2"], ["src", "assets\\img\\logistics-service.jpg", "alt", "", 1, "img-fluid"], [1, "services-info-3"], ["src", "assets\\img\\cargo-service.jpg", "alt", "", 1, "img-fluid"], [1, "services-info-4"], ["src", "assets\\img\\trucking-service.jpg", "alt", "", 1, "img-fluid"], [1, "services-info-5"], ["src", "assets\\img\\packaging-service.jpg", "alt", "", 1, "img-fluid"], [1, "services-info-6"], ["src", "assets\\img\\warehousing-service.jpg", "alt", "", 1, "img-fluid"], [1, "col-12"], [1, "services-info-7"], [1, "col-lg-6", "col-sm-12", "col-md-12"], ["src", "assets\\img\\features-1.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-6", "col-sm-12", "col-md-12", "order-lg-2", "order-1"], [1, "fa-solid", "fa-check"], [1, "services-info-8"], [1, "col-lg-6", "col-sm-12", "col-md-12", "order-lg-1", "order-2"], ["src", "assets\\img\\features-2.jpg", "alt", "", 1, "img-fluid"], [1, "services-info-9"], ["src", "assets\\img\\features-3.jpg", "alt", "", 1, "img-fluid"], [1, "services-info-10"], ["src", "assets\\img\\features-4.jpg", "alt", "", 1, "img-fluid"]],
      template: function ServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OUR SERVICES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "STORAGE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, fuga?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "LOGISTICS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, corrupti.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CARGO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cum!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "TRUCKING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nam.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "PACKAGING ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, nam!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "WAREHOUSING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, unde?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Voluptatem dignissimos provident quasi corporis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Ullamco laboris nisi ut aliquip ex ea commodo consequat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Duis aute irure dolor in reprehenderit in voluptate velit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Ullam est qui quos consequatur eos accusamus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Corporis temporibus maiores provident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Ullamco laboris nisi ut aliquip ex ea commodo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Duis aute irure dolor in reprehenderit in voluptate velit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".services[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 73px;\r\n\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  padding-top: 70px;\r\n  margin-bottom: 60px;\r\n  text-decoration: underline;\r\n  font-size: 25px;\r\n  color: #001f8d;\r\n\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-1[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-2[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-3[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-4[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-5[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-6[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: rgb(245,248,253);\r\n  border: 1px solid #132848;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  margin-bottom: 25px;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-1[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-2[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-3[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-4[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-5[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-6[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-bottom: 15px;\r\n  transition: 1s;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-1[_ngcontent-%COMP%]:hover   .img-fluid[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-2[_ngcontent-%COMP%]:hover   .img-fluid[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-3[_ngcontent-%COMP%]:hover   .img-fluid[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-4[_ngcontent-%COMP%]:hover   .img-fluid[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-5[_ngcontent-%COMP%]:hover   .img-fluid[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-6[_ngcontent-%COMP%]:hover   .img-fluid[_ngcontent-%COMP%] {\r\n\r\n  transform: scale(1.1);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-3[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-4[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-5[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-6[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: #132848;\r\n  font-size: 20px;\r\n  transition: 1s;\r\n\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-1[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-2[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-3[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-4[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-5[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-6[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\r\n\r\n  color: #001f8d;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-5[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-6[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #132848;\r\n  transition: 1s;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-1[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-2[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-3[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-4[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-5[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-6[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\r\n\r\n  color: #001f8d;\r\n}\r\n\r\n\r\n.services-info-7[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 20px;\r\n\r\n}\r\n\r\n\r\n.services-info-7[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: rebeccapurple;\r\n}\r\n\r\n\r\n.services-info-7[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  padding-top: 25px;\r\n  color: #132848;\r\n  font-size: 22px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n\r\n.services-info-7[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #001f8d;\r\n  font-size: 17px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n\r\n.services-info-7[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #132848;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-8[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 30px;\r\n\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-8[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-8[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  padding-top: 25px;\r\n  color: #132848;\r\n  font-size: 22px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-8[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #132848;\r\n  font-size: 17px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-9[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  \r\n  margin-top: 30px;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-9[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-9[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: #132848;\r\n  font-size: 22px;\r\n  padding-top: 25px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-9[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  color: #132848;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-9[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-9[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #132848;\r\n  font-size: 18px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-9[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .services-info-9[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #001f8d;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-10[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 30px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-10[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #001f8d;\r\n  font-size: 22px;\r\n  padding-top: 25px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]   .services-info-10[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #132848;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlCQUF5Qjs7O0FBR3pCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7O0FBRWxCOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixjQUFjOztBQUVoQjs7O0FBR0E7Ozs7OztFQU1FLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7O0FBRWxCOzs7QUFFQTs7Ozs7O0VBTUUsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7O0FBSUE7Ozs7Ozs7RUFPRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOzs7QUFHQTs7Ozs7O0VBTUUsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjOztBQUVoQjs7O0FBRUE7Ozs7Ozs7RUFPRSxjQUFjO0FBQ2hCOzs7QUFHQTs7Ozs7O0VBTUUsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOzs7QUFHQTs7Ozs7OztFQU9FLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7O0FBRWxCOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0JBQStCO0FBQ2pDOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCOztBQUVsQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7OztBQUVBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOzs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxjQUFjOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8qICBzZXJ2aWNlcyBjb21wb25lbnQgICovXHJcblxyXG5cclxuLnNlcnZpY2VzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNzNweDtcclxuXHJcbn1cclxuXHJcbi5zZXJ2aWNlcyBoNCB7XHJcbiAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6ICMwMDFmOGQ7XHJcblxyXG59XHJcblxyXG5cclxuLnNlcnZpY2VzIC5zZXJ2aWNlcy1pbmZvLTEsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0yLFxyXG4uc2VydmljZXMgLnNlcnZpY2VzLWluZm8tMyxcclxuLnNlcnZpY2VzIC5zZXJ2aWNlcy1pbmZvLTQsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby01LFxyXG4uc2VydmljZXMgLnNlcnZpY2VzLWluZm8tNiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsMjQ4LDI1Myk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzEzMjg0ODtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0xIC5pbWctZmx1aWQsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0yIC5pbWctZmx1aWQsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0zIC5pbWctZmx1aWQsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby00IC5pbWctZmx1aWQsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby01IC5pbWctZmx1aWQsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby02IC5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG5cclxuXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0xOmhvdmVyIC5pbWctZmx1aWQsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0yOmhvdmVyIC5pbWctZmx1aWQsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0zOmhvdmVyIC5pbWctZmx1aWQsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby00OmhvdmVyIC5pbWctZmx1aWQsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby01OmhvdmVyIC5pbWctZmx1aWQsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby02OmhvdmVyIC5pbWctZmx1aWQge1xyXG5cclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0xIGgzLFxyXG4uc2VydmljZXMgLnNlcnZpY2VzLWluZm8tMiBoMyxcclxuLnNlcnZpY2VzIC5zZXJ2aWNlcy1pbmZvLTMgaDMsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby00IGgzLFxyXG4uc2VydmljZXMgLnNlcnZpY2VzLWluZm8tNSBoMyxcclxuLnNlcnZpY2VzIC5zZXJ2aWNlcy1pbmZvLTYgaDMge1xyXG4gIGNvbG9yOiAjMTMyODQ4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0cmFuc2l0aW9uOiAxcztcclxuXHJcbn1cclxuXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0xOmhvdmVyIGgzLFxyXG4uc2VydmljZXMgLnNlcnZpY2VzLWluZm8tMjpob3ZlciBoMyxcclxuLnNlcnZpY2VzIC5zZXJ2aWNlcy1pbmZvLTM6aG92ZXIgaDMsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby00OmhvdmVyIGgzLFxyXG4uc2VydmljZXMgLnNlcnZpY2VzLWluZm8tNTpob3ZlciBoMyxcclxuLnNlcnZpY2VzIC5zZXJ2aWNlcy1pbmZvLTY6aG92ZXIgaDMge1xyXG5cclxuICBjb2xvcjogIzAwMWY4ZDtcclxufVxyXG5cclxuXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0xIHAsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0yIHAsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0zIHAsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby00IHAsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby01IHAsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby02IHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzEzMjg0ODtcclxuICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0xOmhvdmVyIHAsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0yOmhvdmVyIHAsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0zOmhvdmVyIHAsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby00OmhvdmVyIHAsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby01OmhvdmVyIHAsXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby02OmhvdmVyIHAge1xyXG5cclxuICBjb2xvcjogIzAwMWY4ZDtcclxufVxyXG5cclxuXHJcbi5zZXJ2aWNlcy1pbmZvLTcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLnNlcnZpY2VzLWluZm8tNyAuaW1nLWZsdWlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcclxufVxyXG5cclxuLnNlcnZpY2VzLWluZm8tNyBoMyB7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgY29sb3I6ICMxMzI4NDg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcy1pbmZvLTcgcCB7XHJcbiAgY29sb3I6ICMwMDFmOGQ7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uc2VydmljZXMtaW5mby03IHAgaSB7XHJcbiAgY29sb3I6ICMxMzI4NDg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby04IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbn1cclxuXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby04IC5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnNlcnZpY2VzIC5zZXJ2aWNlcy1pbmZvLTggaDMge1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIGNvbG9yOiAjMTMyODQ4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uc2VydmljZXMgLnNlcnZpY2VzLWluZm8tOCBwIHtcclxuICBjb2xvcjogIzEzMjg0ODtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcblxyXG4uc2VydmljZXMgLnNlcnZpY2VzLWluZm8tOSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7ICovXHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIC5zZXJ2aWNlcy1pbmZvLTkgLmltZy1mbHVpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc2VydmljZXMgLnNlcnZpY2VzLWluZm8tOSBoMyB7XHJcbiAgY29sb3I6ICMxMzI4NDg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby05IHAge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBjb2xvcjogIzEzMjg0ODtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uc2VydmljZXMgLnNlcnZpY2VzLWluZm8tOSBoNSxcclxuLnNlcnZpY2VzIC5zZXJ2aWNlcy1pbmZvLTkgaDYge1xyXG4gIGNvbG9yOiAjMTMyODQ4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uc2VydmljZXMgLnNlcnZpY2VzLWluZm8tOSBoNSBpLFxyXG4uc2VydmljZXMgLnNlcnZpY2VzLWluZm8tOSBoNiBpIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMwMDFmOGQ7XHJcbn1cclxuXHJcblxyXG4uc2VydmljZXMgLnNlcnZpY2VzLWluZm8tMTAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcyAuc2VydmljZXMtaW5mby0xMCBoNCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDAxZjhkO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uc2VydmljZXMgLnNlcnZpY2VzLWluZm8tMTAgcCB7XHJcbiAgY29sb3I6ICMxMzI4NDg7XHJcblxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-services',
          templateUrl: './services.component.html',
          styleUrls: ['./services.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\first-project\logis\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map