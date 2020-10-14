(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-levels-levels-module"], {
    /***/
    "6ZFA":
    /*!*******************************************************!*\
      !*** ./src/app/pages/levels/levels-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: LevelsRoutingModule */

    /***/
    function ZFA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LevelsRoutingModule", function () {
        return LevelsRoutingModule;
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


      var _levels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./levels.component */
      "mGkN");

      var routes = [{
        path: '',
        component: _levels_component__WEBPACK_IMPORTED_MODULE_2__["LevelsComponent"]
      }];

      var LevelsRoutingModule = function LevelsRoutingModule() {
        _classCallCheck(this, LevelsRoutingModule);
      };

      LevelsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LevelsRoutingModule
      });
      LevelsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LevelsRoutingModule_Factory(t) {
          return new (t || LevelsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LevelsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LevelsRoutingModule, [{
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
    "TtBa":
    /*!***********************************************!*\
      !*** ./src/app/pages/levels/levels.module.ts ***!
      \***********************************************/

    /*! exports provided: LevelsModule */

    /***/
    function TtBa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LevelsModule", function () {
        return LevelsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _levels_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./levels-routing.module */
      "6ZFA");
      /* harmony import */


      var _levels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./levels.component */
      "mGkN");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var LevelsModule = function LevelsModule() {
        _classCallCheck(this, LevelsModule);
      };

      LevelsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LevelsModule
      });
      LevelsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LevelsModule_Factory(t) {
          return new (t || LevelsModule)();
        },
        imports: [[_levels_routing_module__WEBPACK_IMPORTED_MODULE_1__["LevelsRoutingModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LevelsModule, {
          declarations: [_levels_component__WEBPACK_IMPORTED_MODULE_2__["LevelsComponent"]],
          imports: [_levels_routing_module__WEBPACK_IMPORTED_MODULE_1__["LevelsRoutingModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
          exports: [_levels_component__WEBPACK_IMPORTED_MODULE_2__["LevelsComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LevelsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_levels_routing_module__WEBPACK_IMPORTED_MODULE_1__["LevelsRoutingModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            declarations: [_levels_component__WEBPACK_IMPORTED_MODULE_2__["LevelsComponent"]],
            exports: [_levels_component__WEBPACK_IMPORTED_MODULE_2__["LevelsComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "mGkN":
    /*!**************************************************!*\
      !*** ./src/app/pages/levels/levels.component.ts ***!
      \**************************************************/

    /*! exports provided: LevelsComponent */

    /***/
    function mGkN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LevelsComponent", function () {
        return LevelsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _weather_levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../weather/levels */
      "ohyA");
      /* harmony import */


      var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd */
      "0nng");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");

      function LevelsComponent_div_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LevelsComponent_div_5_div_1_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var level_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.getLevelByIdStorage(level_r8.level);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var level_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level_r8.level);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level_r8.name);
        }
      }

      function LevelsComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LevelsComponent_div_5_div_1_Template, 6, 4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.storageArray);
        }
      }

      function LevelsComponent_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LevelsComponent_div_6_div_1_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var level_r12 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.getLevelById(level_r12.level);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var level_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level_r12.level);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level_r12.name);
        }
      }

      function LevelsComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LevelsComponent_div_6_div_1_Template, 6, 4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.levels);
        }
      }

      function LevelsComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-input-group", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "maximal temperature:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 21, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "minimal temperature:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 21, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LevelsComponent_div_7_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.editThisLevel(ctx_r18.currentLevel.level, _r15.value, _r16.value, _r17.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edit Level ", ctx_r2.currentLevel.level, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.currentLevel.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.currentLevel.tempMax);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.currentLevel.tempMin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        }
      }

      var LevelsComponent = /*#__PURE__*/function () {
        function LevelsComponent() {
          _classCallCheck(this, LevelsComponent);

          this.levels = _weather_levels__WEBPACK_IMPORTED_MODULE_1__["levels"];
          this.storageItem = false;
          this.storageArray = [];
        }

        _createClass(LevelsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('levelStorage') !== null) {
              this.storageItem = true;
              this.getLevels();
            }
          } // get Level by ID level.ts

        }, {
          key: "getLevelById",
          value: function getLevelById(level) {
            this.currentLevel = _weather_levels__WEBPACK_IMPORTED_MODULE_1__["levels"].find(function (x) {
              return x.level === level;
            });
          } // get Level by ID in Local Storage

        }, {
          key: "getLevelByIdStorage",
          value: function getLevelByIdStorage(level) {
            this.currentLevel = this.storageArray.find(function (x) {
              return x.level === level;
            });
          } // edit Level with the ID which was clicked

        }, {
          key: "editThisLevel",
          value: function editThisLevel(level, name, tempMax, tempMin) {
            this.refreshLevels(level, name, tempMax, tempMin);
            this.setLocalStorage(name, level, tempMax, tempMin);
            window.alert('Edited Level ' + level);
          } // Add a new Level to StorageArray

        }, {
          key: "addThisLevel",
          value: function addThisLevel(name, level, tempMax, tempMin) {
            this.setLocalStorage(name, level, tempMax, tempMin);
            localStorage.setItem('highestLevel', level);

            _weather_levels__WEBPACK_IMPORTED_MODULE_1__["levels"].push({
              name: name,
              level: level,
              tempMax: tempMax,
              tempMin: tempMin
            });

            this.storageArray.push({
              name: name,
              level: level,
              tempMax: tempMax,
              tempMin: tempMin
            });
            window.alert('successfully added a new Level');
          } // Adding the Levels from levels.ts to the levels Array

        }, {
          key: "addLevels",
          value: function addLevels(name, level, tempMax, tempMin) {
            _weather_levels__WEBPACK_IMPORTED_MODULE_1__["levels"].push({
              name: name,
              level: level,
              tempMax: tempMax,
              tempMin: tempMin
            });
          } // Add the Level to the Storage- and levels Array

        }, {
          key: "addLevelsStorage",
          value: function addLevelsStorage(name, level, tempMax, tempMin) {
            _weather_levels__WEBPACK_IMPORTED_MODULE_1__["levels"].push({
              name: name,
              level: level,
              tempMax: tempMax,
              tempMin: tempMin
            });

            this.storageArray.push({
              name: name,
              level: level,
              tempMax: tempMax,
              tempMin: tempMin
            });
          } // Add the Storage-Items if they exist, otherwise get the normal Levels-Items

        }, {
          key: "getLevels",
          value: function getLevels() {
            var _this = this;

            if (this.storageItem === true) {
              if (localStorage.getItem('highestLevel') !== null) {
                this.s = Number(localStorage.getItem('highestLevel'));
              } else {
                this.s = 5;
                console.log(this.s);
              }

              var _loop = function _loop(i) {
                var itemStorage = JSON.parse(localStorage.getItem('levelStorage-' + (i + 1)));

                if (itemStorage !== null) {
                  _this.addLevelsStorage(itemStorage.title, i + 1, itemStorage.tempMax, itemStorage.tempMin);
                } else {
                  if (i < 5) {
                    _this.storageArray.push(_weather_levels__WEBPACK_IMPORTED_MODULE_1__["levels"].find(function (x) {
                      return x.level === i + 1;
                    }));
                  }
                }
              };

              for (var i = 0; i < this.s; i++) {
                _loop(i);
              }
            }
          } // set The added or edited Data to the local Storage

        }, {
          key: "setLocalStorage",
          value: function setLocalStorage(name, level, tempMax, tempMin) {
            var StorageItem = {
              title: name,
              level: level,
              tempMax: tempMax,
              tempMin: tempMin,
              levelTrigger: 'true'
            };
            localStorage.setItem('levelStorage', 'true');
            localStorage.setItem('levelStorage-' + level + '', JSON.stringify(StorageItem));
          } // refresh The Levels in here

        }, {
          key: "refreshLevels",
          value: function refreshLevels(level, name, tempMax, tempMin) {
            _weather_levels__WEBPACK_IMPORTED_MODULE_1__["levels"][level - 1].name = name;
            _weather_levels__WEBPACK_IMPORTED_MODULE_1__["levels"][level - 1].tempMax = tempMax;
            _weather_levels__WEBPACK_IMPORTED_MODULE_1__["levels"][level - 1].tempMin = tempMin;
            this.storageArray[level - 1].name = name;
            this.storageArray[level - 1].tempMax = tempMax;
            this.storageArray[level - 1].tempMin = tempMin;
          }
        }]);

        return LevelsComponent;
      }();

      LevelsComponent.ɵfac = function LevelsComponent_Factory(t) {
        return new (t || LevelsComponent)();
      };

      LevelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LevelsComponent,
        selectors: [["app-welcome"]],
        decls: 25,
        vars: 13,
        consts: [[1, "welcome-container"], ["nz-row", "", "nzJustify", "space-between"], ["nz-col", "", 3, "nzSpan"], [4, "ngIf"], ["nz-col", "", 3, "nzSpan", 4, "ngIf"], ["nz-row", ""], ["nz-col", "", "nz-input", "", "placeholder", "name", 2, "margin-bottom", "1em", 3, "nzSpan"], ["newName", ""], ["nz-col", "", "nz-input", "", "placeholder", "level", 2, "margin-bottom", "1em", 3, "nzSpan"], ["newLevel", ""], ["nz-col", "", "nz-input", "", "placeholder", "maximal temperature", 2, "margin-bottom", "1em", 3, "nzSpan"], ["newMaxtemp", ""], ["nz-col", "", "nz-input", "", "placeholder", "minimal temperature", 2, "margin-bottom", "1em", 3, "nzSpan"], ["newMintemp", ""], ["nz-button", "", "nzType", "primary", 3, "click"], [4, "ngFor", "ngForOf"], ["nz-row", "", "nzType", "flex", 1, "level-item", 3, "click"], ["nz-col", "", 1, "level-indicator", 3, "nzSpan"], ["nz-col", "", 1, "level-name", 3, "nzSpan"], ["nz-row", "", 1, "edit-item"], [2, "margin", "0"], ["nz-input", "", 2, "margin-bottom", "1em", 3, "value"], ["lvlName", ""], ["lvlTempMax", ""], ["lvlTempMin", ""], ["nz-button", "", "nzType", "primary", 1, "btn-submit", 2, "margin-top", "1em", 3, "click"]],
        template: function LevelsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Levels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LevelsComponent_div_5_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LevelsComponent_div_6_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LevelsComponent_div_7_Template, 20, 7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add new Level");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LevelsComponent_Template_button_click_23_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

              return ctx.addThisLevel(_r3.value, _r4.value, _r5.value, _r6.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add new Level");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.storageItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.storageItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLevel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 16);
          }
        },
        directives: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzInputDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzInputGroupComponent"]],
        styles: [".level-item[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #a09999;\n  margin-bottom: 1em;\n  overflow: hidden;\n  cursor: pointer;\n}\n.level-item[_ngcontent-%COMP%]   .level-indicator[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top, #00509a -10%, black 80%);\n  padding: 5px 10px;\n  color: white;\n}\n.level-item[_ngcontent-%COMP%]   .level-name[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  color: white;\n  background-image: linear-gradient(to top, black -10%, #00509a 80%);\n  border-left: 1px solid #757575;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGV2ZWxzL2xldmVscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSxrRUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrRUFBQTtFQUNBLDhCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZXZlbHMvbGV2ZWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxldmVsLWl0ZW0ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYTA5OTk5O1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgLmxldmVsLWluZGljYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDA1MDlhIC0xMCUsIGJsYWNrIDgwJSk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5sZXZlbC1uYW1lIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2sgLTEwJSwgIzAwNTA5YSA4MCUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNzU3NTc1O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LevelsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-welcome',
            templateUrl: './levels.component.html',
            styleUrls: ['./levels.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-levels-levels-module-es5.js.map