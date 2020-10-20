(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"], {
    /***/
    "+j1i":
    /*!****************************************************!*\
      !*** ./src/app/pages/welcome/welcome.component.ts ***!
      \****************************************************/

    /*! exports provided: WelcomeComponent */

    /***/
    function j1i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
        return WelcomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/push/ngx */
      "sJdB");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var WelcomeComponent = /*#__PURE__*/function () {
        function WelcomeComponent(push, platform) {
          _classCallCheck(this, WelcomeComponent);

          this.push = push;
          this.platform = platform;
          this.initIonic();
        }

        _createClass(WelcomeComponent, [{
          key: "initIonic",
          value: function initIonic() {
            if (this.platform.is('cordova')) {
              // to check if we have permission
              this.push.hasPermission().then(function (res) {
                if (res.isEnabled) {
                  console.log('We have permission to send push notifications');
                } else {
                  console.log('We do not have permission to send push notifications');
                }
              }); // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.

              this.push.createChannel({
                id: 'testchannel1',
                description: 'My first test channel',
                // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
                importance: 3,
                badge: false
              }).then(function () {
                return console.log('Channel created');
              }); // Delete a channel (Android O and above)

              this.push.deleteChannel('testchannel1').then(function () {
                return console.log('Channel deleted');
              }); // Return a list of currently configured channels

              this.push.listChannels().then(function (channels) {
                return console.log('List of channels', channels);
              }); // to initialize push notifications

              var options = {
                android: {},
                ios: {
                  alert: 'true',
                  badge: true,
                  sound: 'false'
                },
                windows: {},
                browser: {
                  pushServiceURL: 'http://push.api.phonegap.com/v1/push'
                }
              };
              var pushObject = this.push.init(options);
              pushObject.on('notification').subscribe(function (notification) {
                return console.log('Received a notification', notification);
              });
              pushObject.on('registration').subscribe(function (registration) {
                return console.log('Device registered', registration);
              });
              pushObject.on('error').subscribe(function (error) {
                return console.error('Error with Push plugin', error);
              });
            } else {
              console.log('nix cordova');
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WelcomeComponent;
      }();

      WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
        return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_1__["Push"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      };

      WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WelcomeComponent,
        selectors: [["app-welcome"]],
        decls: 5,
        vars: 0,
        consts: [[1, "welcome-container"]],
        template: function WelcomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "To get information about the weather of a current location click on \"weather\" in navigation.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-welcome',
            templateUrl: './welcome.component.html',
            styleUrls: ['./welcome.component.scss']
          }]
        }], function () {
          return [{
            type: _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_1__["Push"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "T2Lb":
    /*!*********************************************************!*\
      !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: WelcomeRoutingModule */

    /***/
    function T2Lb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeRoutingModule", function () {
        return WelcomeRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./welcome.component */
      "+j1i");

      var routes = [{
        path: '',
        component: _welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
      }];

      var WelcomeRoutingModule = function WelcomeRoutingModule() {
        _classCallCheck(this, WelcomeRoutingModule);
      };

      WelcomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: WelcomeRoutingModule
      });
      WelcomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function WelcomeRoutingModule_Factory(t) {
          return new (t || WelcomeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WelcomeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "TtBp":
    /*!*************************************************!*\
      !*** ./src/app/pages/welcome/welcome.module.ts ***!
      \*************************************************/

    /*! exports provided: WelcomeModule */

    /***/
    function TtBp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeModule", function () {
        return WelcomeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./welcome-routing.module */
      "T2Lb");
      /* harmony import */


      var _welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./welcome.component */
      "+j1i");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");

      var WelcomeModule = function WelcomeModule() {
        _classCallCheck(this, WelcomeModule);
      };

      WelcomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: WelcomeModule
      });
      WelcomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function WelcomeModule_Factory(t) {
          return new (t || WelcomeModule)();
        },
        imports: [[_welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomeRoutingModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WelcomeModule, {
          declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]],
          imports: [_welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomeRoutingModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"]],
          exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomeRoutingModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"]],
            declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]],
            exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-welcome-welcome-module-es5.js.map