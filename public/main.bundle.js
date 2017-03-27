webpackJsonp([1,4],{

/***/ 1017:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(433);


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateCharName = function (char) {
        if (char.name == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/validate.service.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerCharacter = function (char) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/create-char', char, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getStudyHallInfo = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/studyhall', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAchievements = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/achievement', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.setUserChar = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/setchar', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getCharacter = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/getchar', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getLevels = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/level', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateChar = function (char) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/update-char', char, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.setCharLocalStorage = function (data) {
        localStorage.setItem('character', JSON.stringify(data));
    };
    AuthService.prototype.getCharacterLocalStorage = function () {
        var char = localStorage.getItem('character');
        return char;
    };
    AuthService.prototype.updateUserLocal = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getUserLocaldata = function () {
        var user = localStorage.getItem('user');
        return user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/auth.service.js.map

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 432;


/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(551);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/main.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(739),
            styles: [__webpack_require__(725)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/app.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_arena_arena_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_studyhall_studyhall_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_character_creation_character_creation_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_achievement_achievement_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_fight_fight_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_faq_faq_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_settings_settings_component__ = __webpack_require__(563);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'studyhall', component: __WEBPACK_IMPORTED_MODULE_13__components_studyhall_studyhall_component__["a" /* StudyhallComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'arena', component: __WEBPACK_IMPORTED_MODULE_12__components_arena_arena_component__["a" /* ArenaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'create-char', component: __WEBPACK_IMPORTED_MODULE_14__components_character_creation_character_creation_component__["a" /* CharacterCreationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'achievement', component: __WEBPACK_IMPORTED_MODULE_15__components_achievement_achievement_component__["a" /* AchievementComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'fight', component: __WEBPACK_IMPORTED_MODULE_20__components_fight_fight_component__["a" /* FightComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_21__components_faq_faq_component__["a" /* FaqComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_22__components_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_arena_arena_component__["a" /* ArenaComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_studyhall_studyhall_component__["a" /* StudyhallComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_character_creation_character_creation_component__["a" /* CharacterCreationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_achievement_achievement_component__["a" /* AchievementComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_fight_fight_component__["a" /* FightComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_settings_settings_component__["a" /* SettingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/app.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AchievementComponent = (function () {
    function AchievementComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.notDoneAchievements = [];
        this.doneAchievements = [];
        this.bool = [];
    }
    AchievementComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.authService.getUserLocaldata();
        var obj = JSON.parse(user);
        this.authService.getCharacter(obj).subscribe(function (char) {
            if (char.success) {
                for (var i = 0; i < char.char.achievements.length; i++) {
                    _this.bool[i] = char.char.achievements[i].collected;
                }
                _this.checkIfuserGotAnyNewAchievements(char.char);
                _this.printAchievements();
            }
            else {
                console.log(char.msg);
            }
        });
    };
    AchievementComponent.prototype.printAchievements = function () {
        var char = JSON.parse(this.authService.getCharacterLocalStorage());
        for (var i = 0; i < char.achievements.length; i++) {
            var temp = char.achievements[i];
            if (this.bool[i]) {
                this.doneAchievements.push(temp);
            }
            else {
                this.notDoneAchievements.push(temp);
            }
        }
    };
    AchievementComponent.prototype.checkIfuserGotAnyNewAchievements = function (char) {
        var _this = this;
        var win = char.combatRecord[0].wins;
        var loss = char.combatRecord[0].losses;
        var totalFights = win + loss;
        var charAchievements = char.achievements;
        this.authService.setCharLocalStorage(char);
        for (var i = 0; i < charAchievements.length; i++) {
            if ((charAchievements[i].name === 'Created character') && !this.bool[i]) {
                this.bool[i] = true;
                var upChar = {
                    "achiev": true,
                    "_id": char._id,
                    "name": "Created character"
                };
                this.authService.updateChar(upChar).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show('You got a new Achievement', { cssClass: 'alert-success', timeout: 3000 });
                        var upXP = {
                            "xp": 10,
                            "_id": char._id
                        };
                        _this.authService.updateChar(upXP).subscribe(function (data) {
                            if (data.success) {
                                console.log('YAAAY XP');
                            }
                            else {
                                console.log(data.msg);
                            }
                        });
                    }
                    else {
                        console.log(data.msg);
                    }
                });
            }
            if (totalFights >= 1 && (charAchievements[i].name === "Baby steps") && !this.bool[i]) {
                this.bool[i] = true;
                var upChar = {
                    "achiev": true,
                    "_id": char._id,
                    "name": "Baby steps"
                };
                this.authService.updateChar(upChar).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show('You got a new Achievement', { cssClass: 'alert-success', timeout: 3000 });
                        var upXP = {
                            "xp": 10,
                            "_id": char._id
                        };
                        _this.authService.updateChar(upXP).subscribe(function (data) {
                            if (data.success) {
                                console.log('YAAAY XP');
                            }
                            else {
                                console.log(data.msg);
                            }
                        });
                    }
                    else {
                        console.log(data.msg);
                    }
                });
            }
            else if (totalFights >= 15 && (charAchievements[i].name === "They grow up so fast") && !this.bool[i]) {
                this.bool[i] = true;
                var upChar = {
                    "achiev": true,
                    "_id": char._id,
                    "name": "They grow up so fast"
                };
                this.authService.updateChar(upChar).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show('You got a new Achievement', { cssClass: 'alert-success', timeout: 3000 });
                        var upXP = {
                            "xp": 100,
                            "_id": char._id
                        };
                        _this.authService.updateChar(upXP).subscribe(function (data) {
                            if (data.success) {
                                console.log('YAAAY XP');
                            }
                            else {
                                console.log(data.msg);
                            }
                        });
                    }
                    else {
                        console.log(data.msg);
                    }
                });
            }
            if (win >= 1 && (charAchievements[i].name === "Cheap shot") && !this.bool[i]) {
                this.bool[i] = true;
                var upChar = {
                    "achiev": true,
                    "_id": char._id,
                    "name": "Cheap shot"
                };
                this.authService.updateChar(upChar).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show('You got a new Achievement', { cssClass: 'alert-success', timeout: 3000 });
                        var upXP = {
                            "xp": 10,
                            "_id": char._id
                        };
                        _this.authService.updateChar(upXP).subscribe(function (data) {
                            if (data.success) {
                                console.log('YAAAY XP');
                            }
                            else {
                                console.log(data.msg);
                            }
                        });
                    }
                    else {
                        console.log(data.msg);
                    }
                });
            }
            else if (win >= 20 && (charAchievements[i].name === "Scalping") && !this.bool[i]) {
                this.bool[i] = true;
                var upChar = {
                    "achiev": true,
                    "_id": char._id,
                    "name": "Scalping"
                };
                this.authService.updateChar(upChar).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show('You got a new Achievement', { cssClass: 'alert-success', timeout: 3000 });
                        var upXP = {
                            "xp": 150,
                            "_id": char._id
                        };
                        _this.authService.updateChar(upXP).subscribe(function (data) {
                            if (data.success) {
                                console.log('YAAAY XP');
                            }
                            else {
                                console.log(data.msg);
                            }
                        });
                    }
                    else {
                        console.log(data.msg);
                    }
                });
            }
            else if (win >= 1337 && (charAchievements[i].name === "Ear collerctor") && !this.bool[i]) {
                this.bool[i] = true;
                var upChar = {
                    "achiev": true,
                    "_id": char._id,
                    "name": "Ear collerctor"
                };
                this.authService.updateChar(upChar).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show('You got a new Achievement', { cssClass: 'alert-success', timeout: 3000 });
                        var upXP = {
                            "xp": 1000,
                            "_id": char._id
                        };
                        _this.authService.updateChar(upXP).subscribe(function (data) {
                            if (data.success) {
                                console.log('YAAAY XP');
                            }
                            else {
                                console.log(data.msg);
                            }
                        });
                    }
                    else {
                        console.log(data.msg);
                    }
                });
            }
        }
    };
    AchievementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-achievement',
            template: __webpack_require__(740),
            styles: [__webpack_require__(726)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], AchievementComponent);
    return AchievementComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/achievement.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArenaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArenaComponent = (function () {
    function ArenaComponent(authService) {
        this.authService = authService;
    }
    ArenaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = JSON.parse(this.authService.getUserLocaldata());
        this.authService.getCharacter(user).subscribe(function (data) {
            if (data.success) {
                _this.hp = data.char.combat[0].health;
                _this.image = data.char.charImage;
                _this.name = data.char.charName;
                _this.level = data.char.playerLvl;
                _this.title = data.char.playerTitle;
                _this.dmg = data.char.combat[0].damage;
                _this.wins = data.char.combatRecord[0].wins;
                _this.losses = data.char.combatRecord[0].losses;
                _this.myXp = data.char.xp;
            }
            else {
                console.log(data);
            }
        });
        this.authService.getLevels().subscribe(function (data) {
            if (data.success) {
                console.log(data.level[_this.level]);
                _this.totalXp = data.level[_this.level].xp;
            }
        });
        this.calculateXp();
    };
    ArenaComponent.prototype.calculateXp = function () {
        this.xpWidth = this.myXp / this.totalXp * 100;
    };
    ArenaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-arena',
            template: __webpack_require__(741),
            styles: [__webpack_require__(727)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], ArenaComponent);
    return ArenaComponent;
    var _a;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/arena.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterCreationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CharacterCreationComponent = (function () {
    function CharacterCreationComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.imgPaths = [
            { src: 'http://webshare.mah.se/ae3529/img1.png', alt: 'img1' },
            { src: 'http://webshare.mah.se/ae3529/img2.png', alt: 'img2' },
            { src: 'http://webshare.mah.se/ae3529/img3.png', alt: 'img3' },
            { src: 'http://webshare.mah.se/ae3529/img4.png', alt: 'img4' }
        ];
    }
    CharacterCreationComponent.prototype.ngOnInit = function () {
        this.imageIndex = 0;
        this.img = this.imgPaths[this.imageIndex];
        if (!this.authService.loggedIn()) {
            this.router.navigate(['/']);
        }
        else {
            this.user = JSON.parse(this.authService.getUserLocaldata());
            if (this.user.character != undefined) {
                this.router.navigate(['/dashboard']);
            }
        }
    };
    CharacterCreationComponent.prototype.moveLeft = function () {
        if (this.imageIndex <= 0) {
            this.imageIndex = 3;
            this.img = this.imgPaths[this.imageIndex];
        }
        else {
            this.imageIndex--;
            this.img = this.imgPaths[this.imageIndex];
        }
    };
    CharacterCreationComponent.prototype.moveRight = function () {
        if (this.imageIndex >= 3) {
            this.imageIndex = 0;
            this.img = this.imgPaths[this.imageIndex];
        }
        else {
            this.imageIndex++;
            this.img = this.imgPaths[this.imageIndex];
        }
    };
    CharacterCreationComponent.prototype.onCharacterSubmit = function () {
        var _this = this;
        var char = {
            name: this.name,
            image: this.imgPaths[this.imageIndex].src
        };
        if (!this.validateService.validateCharName(char)) {
            this.flashMessage.show('You have to choose a name for your character', { ccsClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.registerCharacter(char).subscribe(function (data) {
            if (data.success) {
                _this.authService.setCharLocalStorage(data);
                _this.user = JSON.parse(_this.authService.getUserLocaldata());
                var updateUser = {
                    username: _this.user.username,
                    character: data.newChar._id
                };
                _this.authService.setUserChar(updateUser).subscribe(function (data) {
                    if (data.success) {
                        console.log(data);
                    }
                });
                _this.flashMessage.show('You have registered a character', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show('REGISTER FAILED', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/create-char']);
            }
        });
    };
    CharacterCreationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-character-creation',
            template: __webpack_require__(742),
            styles: [__webpack_require__(728)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], CharacterCreationComponent);
    return CharacterCreationComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/character-creation.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = JSON.parse(this.authService.getUserLocaldata());
        this.authService.getCharacter(user).subscribe(function (data) {
            if (data.success) {
                _this.hp = data.char.combat[0].health;
                _this.image = data.char.charImage;
                _this.name = data.char.charName;
                _this.level = data.char.playerLvl;
                _this.xp = data.char.xp;
                _this.id = data.char._id;
            }
            else {
                console.log(data);
            }
        });
        this.authService.getLevels().subscribe(function (data) {
            if (data.success) {
                console.log(data.level[_this.level]);
                _this.totalXp = data.level[_this.level].xp;
                _this.newDmg = data.level[_this.level].damage;
                _this.newHp = data.level[_this.level].health;
                _this.calculateLevel();
            }
        });
    };
    DashboardComponent.prototype.calculateLevel = function () {
        var _this = this;
        if (this.xp >= this.totalXp) {
            this.level++;
            var level = {
                lvl: this.level,
                _id: this.id
            };
            this.authService.updateChar(level).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('You successfully leveled up one level', { cssClass: 'alert-success', timeout: 3000 });
                    var combat = {
                        combat: true,
                        dmg: _this.newDmg,
                        hp: _this.newHp,
                        _id: _this.id
                    };
                    _this.authService.updateChar(combat).subscribe(function (data) {
                        if (data.success) {
                            console.log(data);
                        }
                        else {
                            console.log(data.msg);
                        }
                    });
                }
                else {
                    console.log(data.msg);
                }
            });
        }
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(743),
            styles: [__webpack_require__(729)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/dashboard.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = (function () {
    function FaqComponent() {
        this.faqs = [
            { question: "How do i register an account?", answer: "* When you start your thingy at Mah you will get registerd automaticly *" },
            { question: "Do I need social media to play the game?", answer: "* No, but you need to be a student at Mah *" },
            { question: "Can I use multiple accounts?", answer: "* No, you get one account *" },
            { question: "How do i change my e-mail?", answer: "* You have to contact the system admin *" },
            { question: "How do i delete my account?", answer: "* You can't *" },
            { question: "Where do i fight?", answer: "* Login, go the arena and challenge the computer *" },
            { question: "How do I fight?", answer: "* During a duel you have 3 options: Strike your opponent, Defend your opponent's attack or launch a wild Haymaker. Strike does full damage versus Strike and Haymaker. Haymaker does strong damage versus Strike and Haymaker. Defend greatly reduces the damage taken from Strike and fully evades the Haymaker. While evading you even get to counter your opponent and deal some damage *" }
        ];
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(744),
            styles: [__webpack_require__(730)]
        }), 
        __metadata('design:paramtypes', [])
    ], FaqComponent);
    return FaqComponent;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/faq.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FightComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FightComponent = (function () {
    function FightComponent(authService) {
        this.authService = authService;
        this.gameResult = "";
        this.shufflingResults = new Array();
        this.computerResult = new Array();
        this.value = "";
        this.set = "";
        this.isValid = false;
    }
    FightComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = JSON.parse(this.authService.getUserLocaldata());
        this.authService.getCharacter(user).subscribe(function (data) {
            if (data.success) {
                _this.hp = data.char.combat[0].health;
                _this.img = data.char.charImage;
                _this.name = data.char.charName;
                _this.damage = data.char.combat[0].damage;
                _this.computerDmg = _this.damage;
                _this.maxHp = _this.hp;
                _this.compMaxHp = _this.maxHp + 40;
                _this.compHp = _this.compMaxHp;
                _this.wins = data.char.combatRecord[0].wins;
                _this.loss = data.char.combatRecord[0].losses;
                _this.id = data.char._id;
            }
            else {
            }
        });
    };
    FightComponent.prototype.doStartGame = function (playerOne, playerTwo) {
        //console.log(playerOne);
        this.shufflingResults = new Array();
        this.gameResult = "";
        this.startShuffling();
        this.startTimer();
        this.isValid = true;
        if (!this.gameStarted) {
            this.hp = this.maxHp;
            this.compHp = this.compMaxHp;
            this.winner = "";
            this.gameStarted = true;
            this.playerMove = "";
            this.compMove = "";
        }
    };
    FightComponent.prototype.setMove = function (val) {
        this.onElementSelected(val);
        //this.doStartGame();
    };
    FightComponent.prototype.isValidForm = function () {
        return this.isValid;
    };
    FightComponent.prototype.startTimer = function () {
        var _this = this;
        var tick = 10;
        var number = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(2000, 1000);
        this.subscription = number.subscribe(function (x) {
            _this.timer = tick - x;
            if (x == 10) {
                _this.establishTheWinner();
                _this.subscription.unsubscribe();
                _this.shufflingResults = new Array();
                _this.gameResult = "";
                _this.startShuffling();
                _this.startTimer();
            }
        });
    };
    FightComponent.prototype.onElementSelected = function (playerResult) {
        this.shufflingResults.push(playerResult);
        this.isAlivePlayer = true;
        this.establishTheWinner();
    };
    FightComponent.prototype.establishTheWinner = function () {
        var _this = this;
        if ((this.shufflingResults[0] == "strike") && (this.computerResult[0] == "strike")) {
            this.hp = (this.hp - 0.95 * this.damage);
            this.compHp = (this.compHp - 0.95 * this.computerDmg);
        }
        if ((this.shufflingResults[0] == "haymaker") && (this.computerResult[0] == "protect")) {
            this.hp = (this.hp - 0.35 * this.damage);
        }
        if ((this.shufflingResults[0] == "protect") && (this.computerResult[0] == "strike")) {
            this.hp = (this.hp - 0.20 * this.computerDmg);
        }
        if ((this.shufflingResults[0] == "strike") && (this.computerResult[0] == "protect")) {
            this.compHp = (this.compHp - 0.20 * this.damage);
        }
        if ((this.shufflingResults[0] == "haymaker") && (this.computerResult[0] == "strike")) {
            this.compHp = (this.compHp - 1.5 * this.damage);
            this.hp = (this.hp - 0.95 * this.damage);
        }
        if ((this.shufflingResults[0] == "protect") && (this.computerResult[0] == "haymaker")) {
            this.compHp = (this.compHp - 0.35 * this.damage);
        }
        if ((this.shufflingResults[0] == "strike") && (this.computerResult[0] == "haymaker")) {
            this.hp = (this.hp - 1.5 * this.damage);
            this.compHp = (this.compHp - 0.95 * this.damage);
        }
        if ((this.shufflingResults[0] == "haymaker") && (this.computerResult[0] == "haymaker")) {
            this.hp = (this.hp - 1.5 * this.damage);
            this.compHp = (this.compHp - 1.5 * this.damage);
        }
        if ((this.shufflingResults[0] == "protect") && (this.computerResult[0] == "protect")) {
        }
        if ((this.shufflingResults[0] == undefined) && (this.computerResult[0] == "strike") || (this.computerResult[0] == "protect") || (this.computerResult[0] == "haymaker")) {
            //  console.log(this.shufflingResults[0]);
            console.log("NO MOVE");
            this.hp = (this.hp - 0.10 * this.damage);
        }
        if (this.isAlivePlayer == true && this.isAliveComp == true) {
            this.playerMove = this.shufflingResults[0];
            this.compMove = this.computerResult[0];
        }
        this.computerResult = new Array();
        this.isAlivePlayer = false;
        this.isAliveComp = false;
        if (this.compHp <= 0) {
            this.subscription.unsubscribe();
            this.winner = this.name + " wins!!";
            this.wins += 1;
            this.gameStarted = false;
            this.isValid = false;
            var char = {
                combatStats: true,
                _id: this.id,
                wins: this.wins,
                losses: this.loss
            };
            this.authService.updateChar(char).subscribe(function (data) {
                if (data.success) {
                    var xp = {
                        xp: 100,
                        _id: _this.id
                    };
                    _this.authService.updateChar(xp).subscribe(function (data) {
                        if (data.success) {
                            console.log(data);
                        }
                        else {
                            console.log(data);
                        }
                    });
                }
                else {
                    console.log(data);
                }
            });
            //console.log(this.wins);
            return this.winner;
        }
        if (this.hp <= 0) {
            this.subscription.unsubscribe();
            this.winner = "Computer wins!!";
            this.loss += 1;
            this.gameStarted = false;
            this.isValid = false;
            var char = {
                combatStats: true,
                _id: this.id,
                wins: this.wins,
                losses: this.loss
            };
            this.authService.updateChar(char).subscribe(function (data) {
                if (data.success) {
                    console.log(data);
                }
                else {
                    console.log(data);
                }
            });
            //  console.log(this.loss);
            return this.winner;
        }
        if (this.hp <= 0 && this.compHp <= 0) {
            this.subscription.unsubscribe();
            this.winner = "Draw";
            var char = {
                combatStats: true,
                _id: this.id,
                wins: this.wins,
                losses: this.loss
            };
            this.authService.updateChar(char).subscribe(function (data) {
                if (data.success) {
                    var xp = {
                        xp: 15,
                        _id: _this.id
                    };
                    _this.authService.updateChar(xp).subscribe(function (data) {
                        if (data.success) {
                            console.log(data);
                        }
                        else {
                            console.log(data);
                        }
                    });
                }
                else {
                    console.log(data);
                }
            });
            //  console.log(this.loss);
            return this.winner;
        }
        this.getHp();
        this.getCompHp();
    };
    FightComponent.prototype.getHp = function () {
        return this.hp;
    };
    FightComponent.prototype.getCompHp = function () {
        return this.compHp;
    };
    FightComponent.prototype.startShuffling = function () {
        var _this = this;
        var elements = ["strike", "protect", "haymaker"];
        var shufflingCounter = 0;
        var SHUFFLING_MAX = 30;
        var interval = setInterval(function () {
            if (shufflingCounter < SHUFFLING_MAX) {
                var randomIndex = Math.floor(Math.random() * 3);
                _this.value = elements[randomIndex];
                shufflingCounter++;
                if (shufflingCounter = 30) {
                    _this.computerResult.push(_this.value);
                    _this.isAliveComp = true;
                }
            }
            else {
                clearInterval(interval);
            }
        }, 100);
    };
    FightComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fight',
            template: __webpack_require__(745),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], FightComponent);
    return FightComponent;
    var _a;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/fight.component.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/dashboard']);
        }
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(746),
            styles: [__webpack_require__(732)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/home.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                if (data.user.character != undefined) {
                    _this.router.navigate(['dashboard']);
                }
                else {
                    _this.router.navigate(['create-char']);
                }
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(747),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/login.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(748),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/navbar.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            console.log(_this.user);
            _this.authService.updateUserLocal(_this.user);
            _this.authService.getCharacter(_this.user).subscribe(function (data) {
                if (data.success) {
                    _this.image = data.char.charImage;
                }
            }, function (err) {
                console.log(err);
                return false;
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(749),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/profile.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('YOU ARE MISSSING SOME VALUES', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('PLIX USE CORRECT EMAIL', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('YOU ARE REGISTERD', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.show('REGISTER FAILED', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(750),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/register.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(751),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsComponent);
    return SettingsComponent;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/settings.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyhallComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudyhallComponent = (function () {
    function StudyhallComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.handedIn = [
            { course: 'Datavetenskap', assignment: 'Lab 1', passed: false, handedIn: true, msg: 'Need to fix if statment' },
            { course: 'Datavetenskap', assignment: 'Lab 2', passed: true, handedIn: true, msg: 'Well done' },
            { course: 'OOP', assignment: 'Lab 1', passed: true, handedIn: true, msg: 'Well done' },
            { course: 'OOP', assignment: 'Lab 2', passed: true, handedIn: true, msg: 'Well done' },
            { course: 'OOP', assignment: 'Lab 3', passed: true, handedIn: true, msg: 'Well done' },
            { course: 'OOP', assignment: 'Lab 4', passed: false, handedIn: true, msg: 'It crashed when i try to run it, fix!' }
        ];
        this.notDone = [
            { course: 'Datavetenskap', assignment: 'Project report', handedIn: false, date: '1/4' },
            { course: 'Datavetenskap', assignment: 'Lab 3', handedIn: false, date: '8/4' },
            { course: 'Datavetenskap', assignment: 'Lab 4', handedIn: false, date: '16/4' },
            { course: 'Datavetenskap', assignment: 'Text writing', handedIn: false, date: '24/4' },
            { course: 'OOP', assignment: 'Project report', handedIn: false, date: '28/4' },
            { course: 'OOP', assignment: 'Lab 5', handedIn: false, date: '3/4' },
            { course: 'OOP', assignment: 'Lab 6', handedIn: false, date: '8/4' },
            { course: 'OOP', assignment: 'Lab 7', handedIn: false, date: '14/4' },
            { course: 'OOP', assignment: 'Group assignment', handedIn: false, date: '20/4' }
        ];
    }
    StudyhallComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = JSON.parse(this.authService.getUserLocaldata());
        this.authService.getCharacter(user).subscribe(function (data) {
            if (data.success) {
                _this.myXp = data.char.xp;
                _this.level = data.char.playerLvl;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        this.authService.getLevels().subscribe(function (data) {
            if (data.success) {
                console.log(data.level[_this.level]);
                _this.totalXp = data.level[_this.level].xp;
            }
        });
        this.calculateXp();
        /*
        this.authService.getStudyHallInfo().subscribe(data => {
          this.mySqlData = data.mySql;
    
          for(var i =0; i<this.mySqlData.length; i++){
            console.log(this.mySqlData[i]);
          }
        },
      err => {
        console.log(err);
        return false;
      });*/
    };
    StudyhallComponent.prototype.calculateXp = function () {
        this.xpWidth = this.myXp / this.totalXp * 100;
    };
    StudyhallComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-studyhall',
            template: __webpack_require__(752),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], StudyhallComponent);
    return StudyhallComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/studyhall.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(autService, router) {
        this.autService = autService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.autService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/auth.guard.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/davve/Documents/mah_gamified/client-src/src/environment.js.map

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "#twitter{\n  float: right;\n}\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "#image{\n  display: block;\n  margin: auto;\n  width: 50%;\n}\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "#image{\n  display: block;\n  margin: auto;\n  width: 20%;\n}\n"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = ".top-buffer {\n  margin-top:20px;\n}\n\n@media(max-width:767px){\n  #arenaTitle{\n    margin-left: 20%;\n  }\n\n  #arenaImg{\n    width: 35%;\n    display: block;\n    margin: auto;\n  }\n\n  #studyTitle{\n    margin-left: 20%;\n  }\n\n  #studyhallImg{\n    display: block;\n    margin: auto;\n    width: 30%;\n  }\n\n  #profileImg{\n    display: block;\n    margin: auto;\n    width: 20%;\n  }\n\n  #char{\n    text-align: center;\n  }\n\n  #lvl{\n    text-align: center;\n  }\n  .hpbar{\n    width: 30%;\n    margin: auto;\n    padding-bottom: 5%;\n  }\n}\n\n@media(min-width: 768px){\n  #arenaImg{\n    width: 40%;\n  }\n\n  #studyTitle{\n    float:right;\n    display: block;\n    padding-right: 5%;\n  }\n\n  #studyhallImg{\n    float: right;\n    width: 35%;\n  }\n\n  #profileImg{\n    display: block;\n    margin: auto;\n    width: 15%;\n  }\n\n  #char{\n    text-align: center;\n  }\n\n  #lvl{\n    text-align: center;\n  }\n\n  .hpbar{\n    width: 25%;\n    margin: auto;\n    padding-bottom: 5%;\n  }\n\n}\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "/* Small devices (tablets, 768px and up) */\n@media (max-width: 767px) {\n  #char{\n    width: 40%;\n    padding: 5%;\n    float: left;\n  }\n  #charComp{\n    width: 40%;\n    padding: 5%;\n    float: right;\n  }\n  .buttons{\n    padding: 3%;\n  }\n}\n\n.container{\n  background-image: url(\"http://webshare.mah.se/ae3529/winter.jpg\");\n}\n#char{\n  width: 40%;\n  padding: 5%;\n}\n#charComp{\n  width: 40%;\n  padding: 5%;\n  float: right;\n}\n.name{\n  text-align: center;\n}\n#cMove{\n  text-align: center;\n}\n#pMove{\n  text-align: center;\n}\n#buttons{\n  background-color: black;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n}\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "button{\n  width: 40%;\n  display: block;\n  margin: auto;\n  margin-top: 20px;\n}\n\nh4{\n  margin-top: 50px;\n}\n"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "label{\n  float: left;\n}\n\nform{\n  width: 60%;\n  display: block;\n  margin: auto;\n}\n"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "#profileImage{\n  display: block;\n  margin: auto;\n  width: 20%;\n}\n"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "input{\n  width: 100%;\n  display: block;\n  margin: auto;\n}\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "\n  <h2 class=\"page-header\">Achievements</h2>\n  <div *ngIf=\"doneAchievements\" class=\"col-md-12\">\n    <ul *ngFor=\"let doneAchievement of doneAchievements\" class=\"list-group\">\n      <li class=\"list-group-item list-group-item-success\"><strong>{{doneAchievement.name}}</strong>\n        <br> {{doneAchievement.description}}\n        <br> {{doneAchievement.reward}} XP\n      <a id=\"twitter\" href=\"https://twitter.com/intent/tweet?button_hashtag=MaHGamified\" class=\"twitter-hashtag-button\" data-show-count=\"false\">#Gamified</a><script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script></li>\n    </ul>\n  </div>\n  <div *ngIf=\"notDoneAchievements\" class=\"col-md-12\">\n    <ul *ngFor=\"let achievement of notDoneAchievements\" class=\"list-group\" >\n      <li class=\"list-group-item disabled\"><strong>{{achievement.name}}</strong>\n        <br> {{achievement.description}}\n        <br> {{achievement.reward}} XP</li>\n    </ul>\n  </div>\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"page-header\">Arena</h2>\n  <div class=\"row top-buffer\">\n    <div class=\"col-md-6 \">\n      <h3>Character stats</h3>\n      <ul class=\"list-group\" >\n        <li class=\"list-group-item\">Wins: {{wins}} - Losses: {{losses}} <br>\n        Title: {{title}} <br>\n        Level: {{level}} <br>\n        Damage: {{dmg}} - Health: {{hp}} </li>\n      </ul>\n      <h4>Your xp:</h4>\n      <div class=\"progress\">\n        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\"\n          aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"xpWidth + '%'\">\n            {{myXp}}/{{totalXp}} XP\n        </div>\n      </div>\n      <button [routerLink]=\"['/fight']\" type=\"button\" class=\"btn btn-info btn-block\">Fight a friend</button>\n      <button [routerLink]=\"['/dashboard']\" type=\"button\" class=\"btn btn-info btn-block\">Back</button>\n    </div>\n    <div class=\"col-md-6 \">\n      <h3>Character name: {{name}}</h3>\n        <img id=\"image\" src=\"{{image}}\" alt=\"img\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register your character</h2>\n<p>This is where you create your character! GLHF</p>\n<form (submit)=\"onCharacterSubmit()\">\n  <div class=\"form-group\">\n    <label>Character Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"char-image\">\n      <img id=\"image\" src={{img.src}} alt={{img.alt}}>\n      <a class=\"left carousel-control\" (click)=\"moveLeft()\" role=\"button\" data-slide=\"prev\">\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"right carousel-control\" (click)=\"moveRight()\" role=\"button\" data-slide=\"next\">\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Confirm\">\n</form>\n"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Homepage</h2>\n<div class=\"row top-buffer\">\n  <div id=\"arena\" class=\"col-xs-12 col-sm-6 col-md-6 \">\n    <h3 id=\"arenaTitle\">Arena</h3>\n    <a [routerLink]=\"['/arena']\"><img id=\"arenaImg\" src=\"http://webshare.mah.se/ae3529/arena.png\" alt=\"arena\"></a>\n  </div>\n  <h3 id=\"studyTitle\">Studyhall</h3>\n  <div  class=\"col-xs-12 col-sm-6 col-md-6 \">\n    <a [routerLink]=\"['/studyhall']\"><img id=\"studyhallImg\" src=\"http://webshare.mah.se/ae3529/studyhall.png\" alt=\"arena\"></a>\n\n  </div>\n</div>\n<div class=\"row top-buffer\">\n  <div id=\"profile\" class=\"col-xs-12 col-md-12\" >\n    <h3 id=\"char\">{{name}}</h3>\n      <p id=\"lvl\">Lvl: {{level}}</p>\n    <a [routerLink]=\"['/profile']\"><img id=\"profileImg\" src=\"{{image}}\" alt=\"img1\"></a>\n\n    <div class=\"hpbar\">\n      <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\"\n      aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\">\n      {{hp}}/{{hp}} HP\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">F.A.Q</h2>\n<div class=\"col-md-12\">\n  <ul *ngFor=\"let faq of faqs\" class=\"list-group\">\n    <li class=\"list-group-item list-group-item-info\">\n      <strong>{{faq.question}}</strong>\n      <br> {{faq.answer}}\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "<script src=\"/socket.io/socket.io.js\"></script>\n<script>\n  var socket = io();\n</script>\n<div class= \"container\">\n  <div class =\"row\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12 text-center\">\n    <h3>Fight Mode</h3>\n    <h3>{{winner}}</h3>\n    <button [disabled]=\"isValidForm()\" (click)=\"doStartGame('playerOne', 'computer')\">Start Game</button>\n    <h3>{{timer}}</h3>\n  </div>\n</div>\n<div class=\"row\" id=\"vs\">\n  <div class=\"col-xs-12 col-sm-6 col-md-6\">\n    <p class=\"name\">{{name}}</p>\n      <p id= \"pMove\"><strong>{{playerMove}}</strong></p>\n  <div class=\"progressPlayer\">\n    <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"0\"\n        aria-valuemin=\"0\" aria-valuemax=\"100\"  [style.width]=\"(hp/maxHp)*100 + '%'\">\n        {{hp}}/{{maxHp}} HP\n    </div>\n      <a><img id=\"char\" src=\"{{img}}\" alt=\"img1\"></a>\n  </div>\n</div>\n<div class=\"row\" id=\"comp\">\n  <div class=\"col-xs-12 col-sm-6 col-md-6\">\n    <p class=\"name\">Computer</p>\n      <p id= \"cMove\"><strong>{{compMove}}</strong></p>\n      <div class=\"progressComputer\">\n        <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"0\"\n          aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"(compHp/compMaxHp)*100 + '%'\">\n          {{compHp}}/{{compMaxHp}} HP\n        </div>\n          <a><img id=\"charComp\" src=\"http://webshare.mah.se/ae3529/boss.png\" alt=\"boss\"></a>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" id=\"buttons\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 text-center\">\n      <div class=\"buttons\">\n          <button (click)=\"setMove('strike')\"><img src=\"http://webshare.mah.se/ae3529/strike_40x40.png\"></button>\n          <button (click)=\"setMove('protect')\"><img src=\"http://webshare.mah.se/ae3529/protect_40x40.png\"></button>\n          <button (click)=\"setMove('haymaker')\"><img src=\"http://webshare.mah.se/ae3529/haymaker_40x40.png\"></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Hello my name is mr David</h1>\n  <p class=\"lead\"> Welcome to Malmö högskolas gamification application</p>\n  <app-login></app-login>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <p>Check the frequently asked questions</p>\n    <button [routerLink]=\"['/faq']\" class=\"btn btn-primary btn-block\">FAQ</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12 text-center\">\n    <h4>Creators</h4>\n    <p>David and Anders</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n    <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">GAMIFIED</a>\n          </div>\n          <div id=\"navbar\" class=\"navbar-collapse collapse-in\" area-expanded=\"true\" style>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n                <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n                <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n            </ul>\n          </div><!--/.nav-collapse -->\n        </div>\n      </nav>\n  </div>\n"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\" >\n      <img id=\"profileImage\" src=\"{{image}}\" alt=\"img1\">\n    </div>\n  </div>\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\" >\n      <button [routerLink]=\"['/settings']\" type=\"button\" class=\"btn btn-info btn-block\">Account settings</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"page-header\">Account settings</h2>\n  <p>This is where you can change your email or password.\n  <div class=\"row\">\n    <div class=\"col-md-12\" >\n      <form (submit)=\"updateUser()\">\n        <div class=\"form-group\">\n          <label>Change email</label>\n          <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n          <label>Change password</label>\n          <input type=\"text\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\" >\n      <h4>Got any questions? Check out the FAQ!</h4>\n      <button [routerLink]=\"['/faq']\" type=\"button\" class=\"btn btn-info btn-block\">FAQ</button>\n      <button [routerLink]=\"['/profile']\" type=\"button\" class=\"btn btn-info btn-block\">Back</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"page-header\">Study Hall</h2>\n  <div class=\"row top-buffer\">\n    <div class=\"col-md-6 \">\n      <h3>User stats</h3>\n      <ul class=\"list-group\" >\n        <li class=\"list-group-item\">Assignments turned in: 6 <br>\n          Assignments passed: 4 <br>\n        Classes passed: 0 <br>\n      </ul>\n      <h4>Your xp:</h4>\n      <div class=\"progress\">\n        <div #progress class=\"progress-bar\" role=\"progressbar\" [style.width]=\"xpWidth + '%'\">\n          {{myXp}}/{{totalXp}} XP\n        </div>\n      </div>\n    </div>\n  <div class=\"row top-buffer\">\n    <div class=\"col-md-6 \">\n      <h3>Achievements</h3>\n      <p>Check your achievements</p>\n      <button [routerLink]=\"['/achievement']\" type=\"button\" class=\"btn btn-info btn-block\">Achievements</button>\n      <button [routerLink]=\"['/dashboard']\" type=\"button\" class=\"btn btn-info btn-block\">Back</button>\n    </div>\n  </div>\n    <div *ngIf=\"handedIn\" class=\"col-md-12\">\n      <h3>Assignments to correct</h3>\n      <ul *ngFor=\"let chi of handedIn\" class=\"list-group\" >\n        <li *ngIf=\"!chi.passed\" class=\"list-group-item list-group-item-danger\">Course: {{chi.course}}<br>\n        Assignment: {{chi.assignment}}<br>\n        Message: {{chi.msg}}</li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"handedIn\" class=\"col-md-12\">\n      <h3>Assignments complete</h3>\n      <ul *ngFor=\"let chi of handedIn\" class=\"list-group\" >\n        <li *ngIf=\"chi.passed\" class=\"list-group-item list-group-item-success\">Course: {{chi.course}}<br>\n        Assignment: {{chi.assignment}}<br>\n        Message: {{chi.msg}}<br>\n        Awarded: 20 xp</li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"notDone\" class=\"col-md-12\">\n      <h3>Due dates for Assignments</h3>\n      <ul *ngFor=\"let cnd of notDone\" class=\"list-group\" >\n        <li class=\"list-group-item list-group-item-info\">Course: {{cnd.course}}<br>\n        Assignment: {{cnd.assignment}}<br>Turn in assignment: {{cnd.date}}</li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ })

},[1017]);
//# sourceMappingURL=main.bundle.map