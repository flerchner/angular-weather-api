(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weather-weather-module"],{

/***/ "1b9s":
/*!****************************************!*\
  !*** ./src/app/weather-api.service.ts ***!
  \****************************************/
/*! exports provided: WeatherApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherApiService", function() { return WeatherApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class Weather {
}
class WeatherApiService {
    constructor(http) {
        this.http = http;
    }
    getData(location, lang) {
        if (/^\d+$/.test(location)) {
            this.weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip=' + location + ',' + lang + '&units=metric&appid=3770eec4f553ea1432f25fc0f993be1d';
        }
        else {
            this.weatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&lang=' + lang + '&units=metric&appid=3770eec4f553ea1432f25fc0f993be1d';
        }
        return this.http.get(this.weatherApi);
    }
}
WeatherApiService.ɵfac = function WeatherApiService_Factory(t) { return new (t || WeatherApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WeatherApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeatherApiService, factory: WeatherApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "OADI":
/*!********************************************!*\
  !*** ./src/app/pages/weather/countries.ts ***!
  \********************************************/
/*! exports provided: countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
const countries = [
    { id: 1, code: 'AF', name: 'Afghanistan' },
    { id: 2, code: 'AL', name: 'Albania' },
    { id: 3, code: 'DZ', name: 'Algeria' },
    { id: 4, code: 'AS', name: 'American Samoa' },
    { id: 5, code: 'AD', name: 'Andorra' },
    { id: 6, code: 'AO', name: 'Angola' },
    { id: 7, code: 'AI', name: 'Anguilla' },
    { id: 8, code: 'AQ', name: 'Antarctica' },
    { id: 9, code: 'AG', name: 'Antigua and Barbuda' },
    { id: 10, code: 'AR', name: 'Argentina' },
    { id: 11, code: 'AM', name: 'Armenia' },
    { id: 12, code: 'AW', name: 'Aruba' },
    { id: 13, code: 'AU', name: 'Australia' },
    { id: 14, code: 'AT', name: 'Austria' },
    { id: 15, code: 'AZ', name: 'Azerbaijan' },
    { id: 16, code: 'BS', name: 'Bahamas' },
    { id: 17, code: 'BH', name: 'Bahrain' },
    { id: 18, code: 'BD', name: 'Bangladesh' },
    { id: 19, code: 'BB', name: 'Barbados' },
    { id: 20, code: 'BY', name: 'Belarus' },
    { id: 21, code: 'BE', name: 'Belgium' },
    { id: 22, code: 'BZ', name: 'Belize' },
    { id: 23, code: 'BJ', name: 'Benin' },
    { id: 24, code: 'BM', name: 'Bermuda' },
    { id: 25, code: 'BT', name: 'Bhutan' },
    { id: 26, code: 'BO', name: 'Bolivia Plurinational State of' },
    { id: 27, code: 'BQ', name: 'Bonaire, Sint Eustatius and Saba' },
    { id: 28, code: 'BA', name: 'Bosnia and Herzegovina' },
    { id: 29, code: 'BW', name: 'Botswana' },
    { id: 30, code: 'BV', name: 'Bouvet Island' },
    { id: 31, code: 'BR', name: 'Brazil' },
    { id: 32, code: 'IO', name: 'British Indian Ocean Territory (the)' },
    { id: 33, code: 'BN', name: 'Brunei Darussalam' },
    { id: 34, code: 'BG', name: 'Bulgaria' },
    { id: 35, code: 'BF', name: 'Burkina Faso' },
    { id: 36, code: 'BI', name: 'Burundi' },
    { id: 37, code: 'CV', name: 'Cabo Verde' },
    { id: 38, code: 'KH', name: 'Cambodia' },
    { id: 39, code: 'CM', name: 'Cameroon' },
    { id: 40, code: 'CA', name: 'Canada' },
    { id: 41, code: 'KY', name: 'Cayman Islands (the)' },
    { id: 42, code: 'CF', name: 'Central African Republic (the)' },
    { id: 43, code: 'TD', name: 'Chad' },
    { id: 44, code: 'CL', name: 'Chile' },
    { id: 45, code: 'CN', name: 'China' },
    { id: 46, code: 'CX', name: 'Christmas Island' },
    { id: 47, code: 'CC', name: 'Cocos (Keeling) Islands (the)' },
    { id: 48, code: 'CO', name: 'Colombia' },
    { id: 49, code: 'KM', name: 'Comoros (the)' },
    { id: 50, code: 'CD', name: 'Congo (the Democratic Republic of the)' },
    { id: 51, code: 'CG', name: 'congo (the)' },
    { id: 52, code: 'CK', name: 'Cook Islands (the)' },
    { id: 53, code: 'CR', name: 'Costa Rica' },
    { id: 54, code: 'HR', name: 'Croatia' },
    { id: 55, code: 'CU', name: 'Cuba' },
    { id: 56, code: 'CW', name: 'Curaçao' },
    { id: 57, code: 'CY', name: 'Cyprus' },
    { id: 58, code: 'CZ', name: 'Czechia' },
    { id: 59, code: 'CI', name: 'Côte d Ivoire' },
    { id: 60, code: 'DK', name: 'Denmark' },
    { id: 61, code: 'DJ', name: 'Djibouti' },
    { id: 62, code: 'DM', name: 'Dominica' },
    { id: 63, code: 'DO', name: 'Dominican Republic (the)' },
    { id: 64, code: 'EC', name: 'Ecuador' },
    { id: 65, code: 'EG', name: 'Egypt' },
    { id: 66, code: 'SV', name: 'El Salvador' },
    { id: 67, code: 'GQ', name: 'Equatorial Guinea' },
    { id: 68, code: 'ER', name: 'Eritrea' },
    { id: 69, code: 'EE', name: 'Estonia' },
    { id: 70, code: 'SZ', name: 'Eswatini' },
    { id: 71, code: 'ET', name: 'Ethiopia' },
    { id: 72, code: 'FK', name: 'Falkland Islands (the) [Malvinas]' },
    { id: 73, code: 'FO', name: 'Faroe Islands (the)' },
    { id: 74, code: 'FJ', name: 'Fiji' },
    { id: 75, code: 'FI', name: 'Finland' },
    { id: 76, code: 'FR', name: 'France' },
    { id: 77, code: 'GF', name: 'French Guiana' },
    { id: 78, code: 'PF', name: 'French Polynesia' },
    { id: 79, code: 'TF', name: 'French Southern Territories (the)' },
    { id: 80, code: 'GA', name: 'Gabon' },
    { id: 81, code: 'GM', name: 'Gambia (the)' },
    { id: 82, code: 'GE', name: 'Georgia' },
    { id: 83, code: 'DE', name: 'Germany' },
    { id: 84, code: 'GH', name: 'Ghana' },
    { id: 85, code: 'GI', name: 'Gibraltar' },
    { id: 86, code: 'GR', name: 'Greece' },
    { id: 87, code: 'GL', name: 'Greenland' },
    { id: 88, code: 'GD', name: 'Grenada' },
    { id: 89, code: 'GP', name: 'Guadeloupe' },
    { id: 90, code: 'GU', name: 'Guam' },
    { id: 91, code: 'GT', name: 'Guatemala' },
    { id: 92, code: 'GG', name: 'Guernsey' },
    { id: 93, code: 'GN', name: 'Guinea' },
    { id: 94, code: 'GW', name: 'Guinea-Bissau' },
    { id: 95, code: 'GY', name: 'Guyana' },
    { id: 96, code: 'HT', name: 'Haiti' },
    { id: 97, code: 'HM', name: 'Heard Island and McDonald Islands' },
    { id: 98, code: 'VA', name: 'Holy See (the)' },
    { id: 99, code: 'HN', name: 'Honduras' },
    { id: 100, code: 'HK', name: 'Hong Kong' },
    { id: 101, code: 'HU', name: 'Hungary' },
    { id: 102, code: 'IS', name: 'Iceland' },
    { id: 103, code: 'IN', name: 'India' },
    { id: 104, code: 'ID', name: 'Indonesia' },
    { id: 105, code: 'IR', name: 'Iran (Islamic Republic of)' },
    { id: 106, code: 'IQ', name: 'Iraq' },
    { id: 107, code: 'IE', name: 'Ireland' },
    { id: 108, code: 'IM', name: 'Isle of Man' },
    { id: 109, code: 'IL', name: 'Israel' },
    { id: 110, code: 'IT', name: 'Italy' },
    { id: 111, code: 'JM', name: 'Jamaica' },
    { id: 112, code: 'JP', name: 'Japan' },
    { id: 113, code: 'JE', name: 'Jersey' },
    { id: 114, code: 'JO', name: 'Jordan' },
    { id: 115, code: 'KZ', name: 'Kazakhstan' },
    { id: 116, code: 'KE', name: 'Kenya' },
    { id: 117, code: 'KI', name: 'Kiribati' },
    { id: 118, code: 'KP', name: 'Korea (the Democratic Peoples Republic of)' },
    { id: 119, code: 'KR', name: 'Korea (the Republic of)' },
    { id: 120, code: 'KW', name: 'Kuwait' },
    { id: 121, code: 'KG', name: 'Kyrgyzstan' },
    { id: 122, code: 'LA', name: 'Lao Peoples Democratic Republic (the)' },
    { id: 123, code: 'LV', name: 'Latvia' },
    { id: 124, code: 'LB', name: 'Lebanon' },
    { id: 125, code: 'LS', name: 'Lesotho' },
    { id: 126, code: 'LR', name: 'Liberia' },
    { id: 127, code: 'LY', name: 'Libya' },
    { id: 128, code: 'LI', name: 'Liechtenstein' },
    { id: 129, code: 'LT', name: 'Lithuania' },
    { id: 130, code: 'LU', name: 'Luxembourg' },
    { id: 131, code: 'MO', name: 'Macao' },
    { id: 132, code: 'MG', name: 'Madagascar' },
    { id: 133, code: 'MW', name: 'Malawi' },
    { id: 134, code: 'MY', name: 'Malaysia' },
    { id: 135, code: 'MV', name: 'Maldives' },
    { id: 136, code: 'ML', name: 'Mali' },
    { id: 137, code: 'MT', name: 'Malta' },
    { id: 138, code: 'MH', name: 'Marshall Islands (the)' },
    { id: 139, code: 'MQ', name: 'Martinique' },
    { id: 140, code: 'MR', name: 'Mauritania' },
    { id: 141, code: 'MU', name: 'Mauritius' },
    { id: 142, code: 'YT', name: 'Mayotte' },
    { id: 143, code: 'MX', name: 'Mexico' },
    { id: 144, code: 'FM', name: 'Micronesia (Federated States of)' },
    { id: 145, code: 'MD', name: 'Moldova (the Republic of)' },
    { id: 146, code: 'MC', name: 'Monaco' },
    { id: 147, code: 'MN', name: 'Mongolia' },
    { id: 148, code: 'ME', name: 'Montenegro' },
    { id: 149, code: 'MS', name: 'Montserrat' },
    { id: 150, code: 'MA', name: 'Morocco' },
    { id: 151, code: 'MZ', name: 'Mozambique' },
    { id: 152, code: 'MM', name: 'Myanmar' },
    { id: 153, code: 'NA', name: 'Namibia' },
    { id: 154, code: 'NR', name: 'Nauru' },
    { id: 155, code: 'NP', name: 'Nepal' },
    { id: 156, code: 'NL', name: 'Netherlands (the)' },
    { id: 157, code: 'NC', name: 'New Caledonia' },
    { id: 158, code: 'NZ', name: 'New Zealand' },
    { id: 159, code: 'NI', name: 'Nicaragua' },
    { id: 160, code: 'NE', name: 'Niger (the)' },
    { id: 161, code: 'NG', name: 'Nigeria' },
    { id: 162, code: 'NU', name: 'Niue' },
    { id: 163, code: 'NF', name: 'Norfolk Island' },
    { id: 164, code: 'MP', name: 'Northern Mariana Islands (the)' },
    { id: 165, code: 'NO', name: 'Norway' },
    { id: 166, code: 'OM', name: 'Oman' },
    { id: 167, code: 'PK', name: 'Pakistan' },
    { id: 168, code: 'PW', name: 'Palau' },
    { id: 169, code: 'PS', name: 'Palestine, State of' },
    { id: 170, code: 'PA', name: 'Panama' },
    { id: 171, code: 'PG', name: 'Papua New Guinea' },
    { id: 172, code: 'PY', name: 'Paraguay' },
    { id: 173, code: 'PE', name: 'Peru' },
    { id: 174, code: 'PH', name: 'Philippines (the)' },
    { id: 175, code: 'PN', name: 'Pitcairn' },
    { id: 176, code: 'PL', name: 'Poland' },
    { id: 177, code: 'PT', name: 'Portugal' },
    { id: 178, code: 'PR', name: 'Puerto Rico' },
    { id: 179, code: 'QA', name: 'Qatar' },
    { id: 180, code: 'MK', name: 'Republic of North Macedonia' },
    { id: 181, code: 'RO', name: 'Romania' },
    { id: 182, code: 'RU', name: 'Russian Federation (the)' },
    { id: 183, code: 'RW', name: 'Rwanda' },
    { id: 184, code: 'RE', name: 'Réunion' },
    { id: 185, code: 'BL', name: 'Saint Barthélemy' },
    { id: 186, code: 'SH', name: 'Saint Helena, Ascension and Tristan da Cunha' },
    { id: 187, code: 'KN', name: 'Saint Kitts and Nevis' },
    { id: 188, code: 'LC', name: 'Saint Lucia' },
    { id: 189, code: 'MF', name: 'Saint Martin (French part)' },
    { id: 190, code: 'PM', name: 'Saint Pierre and Miquelon' },
    { id: 191, code: 'VC', name: 'Saint Vincent and the Grenadines' },
    { id: 192, code: 'WS', name: 'Samoa' },
    { id: 193, code: 'SM', name: 'San Marino' },
    { id: 194, code: 'ST', name: 'Sao Tome and Principe' },
    { id: 195, code: 'SA', name: 'Saudi Arabia' },
    { id: 196, code: 'SN', name: 'Senegal' },
    { id: 197, code: 'RS', name: 'Serbia' },
    { id: 198, code: 'SC', name: 'Seychelles' },
    { id: 199, code: 'SL', name: 'Sierra Leone' },
    { id: 200, code: 'SG', name: 'Singapore' },
    { id: 201, code: 'SX', name: 'Sint Maarten (Dutch part)' },
    { id: 202, code: 'SK', name: 'Slovakia' },
    { id: 203, code: 'SI', name: 'Slovenia' },
    { id: 204, code: 'SB', name: 'Solomon Islands' },
    { id: 205, code: 'SO', name: 'Somalia' },
    { id: 206, code: 'ZA', name: 'South Africa' },
    { id: 207, code: 'GS', name: 'South Georgia and the South Sandwich Islands' },
    { id: 208, code: 'SS', name: 'South Sudan' },
    { id: 209, code: 'ES', name: 'Spain' },
    { id: 210, code: 'LK', name: 'Sri Lanka' },
    { id: 211, code: 'SD', name: 'Sudan (the)' },
    { id: 212, code: 'SR', name: 'Suriname' },
    { id: 213, code: 'SJ', name: 'Svalbard and Jan Mayen' },
    { id: 214, code: 'SE', name: 'Sweden' },
    { id: 215, code: 'CH', name: 'Switzerland' },
    { id: 216, code: 'SY', name: 'Syrian Arab Republic' },
    { id: 217, code: 'TW', name: 'Taiwan' },
    { id: 218, code: 'TJ', name: 'Tajikistan' },
    { id: 219, code: 'TZ', name: 'Tanzania, United Republic of' },
    { id: 220, code: 'TH', name: 'Thailand' },
    { id: 221, code: 'TL', name: 'Timor-Leste' },
    { id: 222, code: 'TG', name: 'Togo' },
    { id: 223, code: 'TK', name: 'Tokelau' },
    { id: 224, code: 'TO', name: 'Tonga' },
    { id: 225, code: 'TT', name: 'Trinidad and Tobago' },
    { id: 226, code: 'TN', name: 'Tunisia' },
    { id: 227, code: 'TR', name: 'Turkey' },
    { id: 228, code: 'TM', name: 'Turkmenistan' },
    { id: 229, code: 'TC', name: 'Turks and Caicos Islands (the)' },
    { id: 230, code: 'TV', name: 'Tuvalu' },
    { id: 231, code: 'UG', name: 'Uganda' },
    { id: 232, code: 'UA', name: 'Ukraine' },
    { id: 233, code: 'AE', name: 'United Arab Emirates (the)' },
    { id: 234, code: 'GB', name: 'United Kingdom of Great Britain and Northern Ireland (the)' },
    { id: 235, code: 'UM', name: 'United States Minor Outlying Islands (the)' },
    { id: 236, code: 'US', name: 'United States of America (the)' },
    { id: 237, code: 'UY', name: 'Uruguay' },
    { id: 238, code: 'UZ', name: 'Uzbekistan' },
    { id: 239, code: 'VU', name: 'Vanuatu' },
    { id: 240, code: 'VE', name: 'Venezuela (Bolivarian Republic of)' },
    { id: 241, code: 'VN', name: 'Viet Nam' },
    { id: 242, code: 'VG', name: 'Virgin Islands (British)' },
    { id: 243, code: 'VI', name: 'Virgin Islands (U.S.)' },
    { id: 244, code: 'WF', name: 'Wallis and Futuna' },
    { id: 245, code: 'EH', name: 'Western Sahara' },
    { id: 246, code: 'YE', name: 'Yemen' },
    { id: 247, code: 'ZM', name: 'Zambia' },
    { id: 248, code: 'ZW', name: 'Zimbabwe' },
    { id: 249, code: 'AX', name: 'Åland Islands' }
];


/***/ }),

/***/ "bCtM":
/*!*********************************************************!*\
  !*** ./src/app/pages/weather/weather-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WeatherRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherRoutingModule", function() { return WeatherRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _weather_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.component */ "iZgB");





const routes = [
    { path: '', component: _weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"] },
];
class WeatherRoutingModule {
}
WeatherRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WeatherRoutingModule });
WeatherRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WeatherRoutingModule_Factory(t) { return new (t || WeatherRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WeatherRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iZgB":
/*!****************************************************!*\
  !*** ./src/app/pages/weather/weather.component.ts ***!
  \****************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels */ "ohyA");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countries */ "OADI");
/* harmony import */ var _weather_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../weather-api.service */ "1b9s");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "0nng");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");










function WeatherComponent_ng_template_11_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, country_r7.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r7.code);
} }
function WeatherComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeatherComponent_ng_template_11_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.langId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherComponent_ng_template_11_option_1_Template, 3, 4, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.langId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.countries);
} }
function WeatherComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherComponent_ng_template_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx_r10.ApiCall(_r0.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Current Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.currentLevel.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.currentLevel.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.currentCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.currentWeatherinfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.currentTemp, " \u00B0C");
} }
class WeatherComponent {
    constructor(weatherApi) {
        this.weatherApi = weatherApi;
        this.levels = _levels__WEBPACK_IMPORTED_MODULE_1__["levels"];
        this.countries = _countries__WEBPACK_IMPORTED_MODULE_2__["countries"];
    }
    ngOnInit() { }
    ApiCall(locationId) {
        this.weatherApi.getData(locationId, this.langId).subscribe((data) => {
            // @ts-ignore
            this.temperature = Math.round(data.main.temp);
            // @ts-ignore
            this.currentTemp = Math.round(data.main.temp);
            // @ts-ignore
            this.currentCity = data.name;
            // @ts-ignore
            this.currentWeatherinfo = data.weather[0].main;
            this.Recommendation(this.temperature);
        });
    }
    Recommendation(temp) {
        if (temp >= 26) {
            this.dataLevel = 1;
        }
        else if (21 <= temp && temp < 26) {
            this.dataLevel = 2;
        }
        else if (15 <= temp && temp < 21) {
            this.dataLevel = 3;
        }
        else if (5 <= temp && temp < 15) {
            this.dataLevel = 4;
        }
        else if (temp < 5) {
            this.dataLevel = 5;
        }
        this.currentLevel = this.getLevelById(this.dataLevel);
    }
    getLevelById(level) {
        return _levels__WEBPACK_IMPORTED_MODULE_1__["levels"].find(x => x.level === level);
    }
}
WeatherComponent.ɵfac = function WeatherComponent_Factory(t) { return new (t || WeatherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_api_service__WEBPACK_IMPORTED_MODULE_3__["WeatherApiService"])); };
WeatherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherComponent, selectors: [["app-welcome"]], decls: 18, vars: 4, consts: [[1, "recommendation-container"], ["nz-row", ""], ["nz-col", "", 3, "nzSpan"], ["nzApiCall", "", 3, "nzAddOnBefore", "nzAddOnAfter"], ["nzSize", "large", "nz-input", "", "placeholder", "city name or zip code", 1, "inp-zip"], ["locId", ""], ["langSelect", ""], ["nzApiCallButton", ""], [2, "margin-top", "1em"], [3, "ngIf"], ["nzApiCall", "", 1, "select-lang", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["nzApiCall", "", "nz-button", "", "nzType", "primary", "nzSize", "large", 1, "btn-submit", 3, "click"], ["nz-row", "", "nzType", "flex", 1, "level-item"], ["nz-col", "", 1, "level-indicator", 3, "nzSpan"], ["nz-col", "", 1, "level-name", 3, "nzSpan"], ["nz-col", "", 1, "current-information", 3, "nzSpan"], ["nz-row", "", "nzJustify", "space-between"], ["nz-col", "", 1, "flex-c-center", 3, "nzSpan"], [2, "margin", "0px", "border-bottom", "1px solid #ccc"], [2, "margin", "0px"], [2, "margin", "0px", "text-align", "center"]], template: function WeatherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Clothing recommendation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lookup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Location: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-input-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WeatherComponent_ng_template_11_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WeatherComponent_ng_template_13_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Recommendation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WeatherComponent_ng_template_17_Template, 19, 11, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnBefore", _r1)("nzAddOnAfter", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getLevelById(ctx.dataLevel));
    } }, directives: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzInputGroupComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzInputDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LowerCasePipe"]], styles: [".level-item[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #a09999;\n  margin-bottom: 1em;\n  overflow: hidden;\n}\n.level-item[_ngcontent-%COMP%]   .level-indicator[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top, #00509a -10%, black 80%);\n  padding: 5px 10px;\n  color: white;\n}\n.level-item[_ngcontent-%COMP%]   .level-name[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  color: white;\n  background-image: linear-gradient(to top, black -10%, #00509a 80%);\n  border-left: 1px solid #757575;\n}\n.select-lang[_ngcontent-%COMP%] {\n  background-color: #fafafa !important;\n  border: honeydew !important;\n}\n.inp-zip[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  margin: 0 -12px;\n}\n.current-information[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding: 10px;\n}\n.flex-c-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0VBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0VBQUE7RUFDQSw4QkFBQTtBQUFKO0FBSUE7RUFDRSxvQ0FBQTtFQUNBLDJCQUFBO0FBREY7QUFJQTtFQUNFLGlCQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7QUFERjtBQUlBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZXZlbC1pdGVtIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2EwOTk5OTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLmxldmVsLWluZGljYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDA1MDlhIC0xMCUsIGJsYWNrIDgwJSk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5sZXZlbC1uYW1lIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2sgLTEwJSwgIzAwNTA5YSA4MCUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNzU3NTc1O1xyXG4gIH1cclxufVxyXG5cclxuLnNlbGVjdC1sYW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhIWltcG9ydGFudDtcclxuICBib3JkZXI6IGhvbmV5ZGV3IWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucC16aXAge1xyXG4gIHBhZGRpbmc6IDlweCAxMHB4O1xyXG59XHJcblxyXG4uYnRuLXN1Ym1pdCB7XHJcbiAgbWFyZ2luOiAwIC0xMnB4O1xyXG59XHJcblxyXG4uY3VycmVudC1pbmZvcm1hdGlvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5mbGV4LWMtY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './weather.component.html',
                styleUrls: ['./weather.component.scss']
            }]
    }], function () { return [{ type: _weather_api_service__WEBPACK_IMPORTED_MODULE_3__["WeatherApiService"] }]; }, null); })();


/***/ }),

/***/ "t+m9":
/*!*************************************************!*\
  !*** ./src/app/pages/weather/weather.module.ts ***!
  \*************************************************/
/*! exports provided: WeatherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherModule", function() { return WeatherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _weather_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-routing.module */ "bCtM");
/* harmony import */ var _weather_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.component */ "iZgB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "0nng");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class WeatherModule {
}
WeatherModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WeatherModule });
WeatherModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WeatherModule_Factory(t) { return new (t || WeatherModule)(); }, imports: [[_weather_routing_module__WEBPACK_IMPORTED_MODULE_1__["WeatherRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzGridModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WeatherModule, { declarations: [_weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"]], imports: [_weather_routing_module__WEBPACK_IMPORTED_MODULE_1__["WeatherRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzGridModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]], exports: [_weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_weather_routing_module__WEBPACK_IMPORTED_MODULE_1__["WeatherRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzGridModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
                declarations: [_weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"]],
                exports: [_weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-weather-weather-module-es2015.js.map