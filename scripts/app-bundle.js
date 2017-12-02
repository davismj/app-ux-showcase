define('routes',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var coreFeatures = {
        title: 'Core Features'
    };
    var components = {
        title: 'Components'
    };
    exports.routes = [
        { route: '', redirect: 'introduction' },
        { route: 'introduction', moduleId: './home', name: 'introduction', title: 'Introduction' },
        { settings: { category: coreFeatures }, route: 'swatches', moduleId: './core-features/swatches', name: 'swatches', title: 'Swatches', nav: true },
        { settings: { category: coreFeatures }, route: 'theming', moduleId: './core-features/theming', name: 'theming', title: 'Theming', nav: true },
        { settings: { category: components }, route: 'buttons', moduleId: './components/buttons', name: 'buttons', title: 'Buttons', nav: true },
        { settings: { category: components }, route: 'checkbox', moduleId: './components/checkbox', name: 'checkbox', title: 'Checkbox', nav: true },
        { settings: { category: components }, route: 'forms', moduleId: './components/forms', name: 'forms', title: 'Forms', nav: true },
        { settings: { category: components }, route: 'inputs', moduleId: './components/inputs', name: 'inputs', title: 'Inputs', nav: true },
        { settings: { category: components }, route: 'textarea', moduleId: './components/textarea', name: 'textarea', title: 'Textarea', nav: true },
        { settings: { category: components }, route: 'chips', moduleId: './components/chips', name: 'chips', title: 'Chips', nav: true },
        { settings: { category: components }, route: 'icons', moduleId: './components/icons', name: 'icons', title: 'Icons', nav: true },
        { settings: { category: components }, route: 'list', moduleId: './components/list', name: 'list', title: 'List', nav: true }
    ];
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-ux", "aurelia-dependency-injection", "./routes"], function (require, exports, aurelia_ux_1, aurelia_dependency_injection_1, routes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(ux) {
            ux.design.primary = '#704794';
            ux.design.accent = '#e62787';
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.map(routes_1.routes);
        };
        App = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_ux_1.AureliaUX),
            __metadata("design:paramtypes", [Object])
        ], App);
        return App;
    }());
    exports.App = App;
    var CategoriesValueConverter = (function () {
        function CategoriesValueConverter() {
        }
        CategoriesValueConverter.prototype.toView = function (navModels) {
            var categories = new Map();
            for (var _i = 0, navModels_1 = navModels; _i < navModels_1.length; _i++) {
                var model = navModels_1[_i];
                var routes_2 = categories.get(model.settings.category);
                if (!routes_2) {
                    categories.set(model.settings.category, routes_2 = []);
                }
                routes_2.push(model);
            }
            return categories;
        };
        return CategoriesValueConverter;
    }());
    exports.CategoriesValueConverter = CategoriesValueConverter;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('home',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home() {
        }
        return Home;
    }());
    exports.Home = Home;
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Promise.config({
        longStackTraces: environment_1.default.debug,
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-validation')
            .plugin('aurelia-ux');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('components/buttons',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Buttons = (function () {
        function Buttons() {
        }
        return Buttons;
    }());
    exports.Buttons = Buttons;
});

define('components/checkbox',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Checkbox = (function () {
        function Checkbox() {
            this.products = ['Motherboard', 'CPU', 'Memory'];
            this.productObjects = [
                { id: 0, name: 'Motherboard' },
                { id: 1, name: 'CPU' },
                { id: 2, name: 'Memory' },
            ];
            this.selectedProductsWithMatcher = [
                { id: 1, name: 'CPU' },
                { id: 2, name: 'Memory' }
            ];
            this.productMatcher = function (a, b) { return a.id === b.id; };
            this.selectedStringProducts = [];
            this.selectedProductObjects = [];
        }
        return Checkbox;
    }());
    exports.Checkbox = Checkbox;
});

define('components/chips',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Chips = (function () {
        function Chips() {
        }
        return Chips;
    }());
    exports.Chips = Chips;
});

define('components/forms-form-renderer',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AureliaUXFormRenderer = (function () {
        function AureliaUXFormRenderer() {
        }
        AureliaUXFormRenderer.prototype.render = function (instruction) {
            for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
                var _b = _a[_i], result = _b.result, elements = _b.elements;
                for (var _c = 0, elements_1 = elements; _c < elements_1.length; _c++) {
                    var element_1 = elements_1[_c];
                    this.remove(element_1, result);
                }
            }
            for (var _d = 0, _e = instruction.render; _d < _e.length; _d++) {
                var _f = _e[_d], result = _f.result, elements = _f.elements;
                for (var _g = 0, elements_2 = elements; _g < elements_2.length; _g++) {
                    var element_2 = elements_2[_g];
                    this.add(element_2, result);
                }
            }
        };
        AureliaUXFormRenderer.prototype.add = function (element, result) {
            if (result.valid) {
                return;
            }
            element.classList.add('has-error');
            var uxField = element.closest('ux-field');
            if (!uxField) {
                return;
            }
            var inputInfoHintText = uxField.querySelector('ux-input-info');
            if (!inputInfoHintText) {
                return;
            }
            var message = document.createElement('span');
            message.className = 'error-text';
            message.textContent = result.message;
            message.id = "validation-message-" + result.id;
            inputInfoHintText.insertBefore(message, inputInfoHintText.firstChild);
        };
        AureliaUXFormRenderer.prototype.remove = function (element, result) {
            if (result.valid) {
                return;
            }
            element.classList.remove('has-error');
            var uxField = element.closest('ux-field');
            if (!uxField) {
                return;
            }
            var inputInfoHintText = uxField.querySelector('ux-input-info');
            if (!inputInfoHintText) {
                return;
            }
            var message = inputInfoHintText.querySelector("#validation-message-" + result.id);
            if (message) {
                inputInfoHintText.removeChild(message);
                if (inputInfoHintText.querySelectorAll('.help-block.validation-message').length === 0) {
                    inputInfoHintText.classList.remove('has-error');
                }
            }
        };
        return AureliaUXFormRenderer;
    }());
    exports.AureliaUXFormRenderer = AureliaUXFormRenderer;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/forms',["require", "exports", "aurelia-validation", "aurelia-dependency-injection", "./forms-form-renderer"], function (require, exports, aurelia_validation_1, aurelia_dependency_injection_1, forms_form_renderer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Forms = (function () {
        function Forms(controllerFactory) {
            this.controllerFactory = controllerFactory;
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.controller = null;
            this.controller = controllerFactory.createForCurrentScope();
            this.controller.addRenderer(new forms_form_renderer_1.AureliaUXFormRenderer());
        }
        Forms.prototype.submit = function () {
            this.controller.validate().then(function (value) {
                if (value.valid) {
                    alert('Form submitted!');
                }
                else {
                }
            });
        };
        Forms = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_validation_1.ValidationControllerFactory),
            __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory])
        ], Forms);
        return Forms;
    }());
    exports.Forms = Forms;
    aurelia_validation_1.ValidationRules
        .ensure('firstName').required().minLength(2)
        .ensure('lastName').required().minLength(2)
        .ensure('email').required().email()
        .on(Forms);
});

define('components/icons',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Icons = (function () {
        function Icons() {
        }
        return Icons;
    }());
    exports.Icons = Icons;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/inputs',["require", "exports", "aurelia-validation", "aurelia-dependency-injection"], function (require, exports, aurelia_validation_1, aurelia_dependency_injection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Inputs = (function () {
        function Inputs(controllerFactory) {
            this.controllerFactory = controllerFactory;
            this.firstName = '';
            this.email = '';
            this.controller = null;
            this.controller = controllerFactory.createForCurrentScope();
        }
        Inputs.prototype.submit = function () {
            this.controller.validate();
        };
        Inputs = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_validation_1.ValidationControllerFactory),
            __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory])
        ], Inputs);
        return Inputs;
    }());
    exports.Inputs = Inputs;
    aurelia_validation_1.ValidationRules
        .ensure('firstName').required()
        .ensure('email').required().email()
        .on(Inputs);
});

define('components/list',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var List = (function () {
        function List() {
        }
        return List;
    }());
    exports.List = List;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/textarea',["require", "exports", "aurelia-validation", "aurelia-dependency-injection"], function (require, exports, aurelia_validation_1, aurelia_dependency_injection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextArea = (function () {
        function TextArea(controllerFactory) {
            this.controllerFactory = controllerFactory;
            this.firstName = '';
            this.description = '';
            this.controller = null;
            this.controller = controllerFactory.createForCurrentScope();
        }
        TextArea.prototype.submit = function () {
            this.controller.validate();
        };
        TextArea = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_validation_1.ValidationControllerFactory),
            __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory])
        ], TextArea);
        return TextArea;
    }());
    exports.TextArea = TextArea;
    aurelia_validation_1.ValidationRules
        .ensure('firstName')
        .required()
        .ensure('description')
        .required()
        .minLength(20)
        .maxLength(500)
        .on(TextArea);
});

define('core-features/swatches',["require", "exports", "aurelia-ux"], function (require, exports, aurelia_ux_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Swatches = (function () {
        function Swatches() {
            this.swatches = makeSwatches();
        }
        return Swatches;
    }());
    exports.Swatches = Swatches;
    function makeSwatches() {
        return Object.keys(aurelia_ux_1.swatches).map(function (key) {
            var value = aurelia_ux_1.swatches[key];
            if (typeof value === 'string') {
                return null;
            }
            else {
                return {
                    name: key,
                    colors: makeSwatch(value),
                    p500: value.p500
                };
            }
        }).filter(function (x) { return x !== null; });
    }
    function makeSwatch(swatch) {
        return Object.keys(swatch).map(function (key) {
            return {
                name: key,
                value: swatch[key]
            };
        }).sort(sortColors);
    }
    function sortColors(a, b) {
        if (a.name.startsWith('p')) {
            if (b.name.startsWith('p')) {
                var aNum = parseInt(a.name.substring(1));
                var bNum = parseInt(b.name.substring(1));
                return aNum > bNum ? 1 : -1;
            }
            else {
                return -1;
            }
        }
        else {
            if (b.name.startsWith('p')) {
                return 1;
            }
            else {
                var aNum = parseInt(a.name.substring(1));
                var bNum = parseInt(b.name.substring(1));
                return aNum > bNum ? 1 : -1;
            }
        }
    }
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('core-features/theming',["require", "exports", "aurelia-ux", "aurelia-dependency-injection"], function (require, exports, aurelia_ux_1, aurelia_dependency_injection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Theming = (function () {
        function Theming(ux) {
            this.ux = ux;
            this.currentProperty = 'primary';
        }
        Theming = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_ux_1.AureliaUX),
            __metadata("design:paramtypes", [aurelia_ux_1.AureliaUX])
        ], Theming);
        return Theming;
    }());
    exports.Theming = Theming;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/aurelia-ux',["require", "exports", "aurelia-dependency-injection", "./hosts/cordova", "./hosts/web", "./hosts/electron", "./ux-configuration"], function (require, exports, aurelia_dependency_injection_1, cordova_1, web_1, electron_1, ux_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AureliaUX = (function () {
        function AureliaUX(use, container) {
            this.use = use;
            this.availableHosts = [
                container.get(cordova_1.Cordova),
                container.get(electron_1.Electron),
                container.get(web_1.Web)
            ];
        }
        AureliaUX.prototype.start = function (config) {
            var _this = this;
            var found = this.availableHosts.find(function (x) { return x.isAvailable; });
            if (found === undefined) {
                throw new Error('Could not determine host environment');
            }
            this.host = found;
            return this.host.start(config).then(function (platform) {
                _this.platform = platform;
                _this.design = platform.design;
            });
        };
        return AureliaUX;
    }());
    AureliaUX = __decorate([
        aurelia_dependency_injection_1.inject(ux_configuration_1.UXConfiguration, aurelia_dependency_injection_1.Container)
    ], AureliaUX);
    exports.AureliaUX = AureliaUX;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/hosts/cordova',["require", "exports", "aurelia-dependency-injection", "aurelia-pal", "../platforms/ios", "../platforms/android"], function (require, exports, aurelia_dependency_injection_1, aurelia_pal_1, ios_1, android_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Cordova = (function () {
        function Cordova(container) {
            this.container = container;
            this.type = 'cordova';
        }
        Object.defineProperty(Cordova.prototype, "isAvailable", {
            get: function () {
                return !!aurelia_pal_1.PLATFORM.global.cordova;
            },
            enumerable: true,
            configurable: true
        });
        Cordova.prototype.start = function () {
            var _this = this;
            return new Promise(function (resolve) {
                aurelia_pal_1.DOM.addEventListener('deviceready', function () {
                    switch (_this.getPlatformType()) {
                        case 'ios':
                            resolve(_this.container.get(ios_1.IOS));
                            break;
                        default:
                            resolve(_this.container.get(android_1.Android));
                            break;
                    }
                }, false);
            });
        };
        Cordova.prototype.getPlatformType = function () {
            var device = aurelia_pal_1.PLATFORM.global.device || { platform: 'android' };
            return device.platform.toLowerCase();
        };
        return Cordova;
    }());
    Cordova = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_dependency_injection_1.Container)
    ], Cordova);
    exports.Cordova = Cordova;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/platforms/ios',["require", "exports", "aurelia-dependency-injection", "../designs/ios-design"], function (require, exports, aurelia_dependency_injection_1, ios_design_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IOS = (function () {
        function IOS(design) {
            this.design = design;
            this.type = 'ios';
        }
        return IOS;
    }());
    IOS = __decorate([
        aurelia_dependency_injection_1.inject(ios_design_1.IOSDesign)
    ], IOS);
    exports.IOS = IOS;
});

define('aurelia-ux/designs/ios-design',["require", "exports", "../colors/swatches", "../colors/shadows"], function (require, exports, swatches_1, shadows_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IOSDesign = (function () {
        function IOSDesign() {
            this.type = 'ios';
            this.primary = swatches_1.swatches.indigo.p500;
            this.primaryForeground = swatches_1.swatches.white;
            this.primaryLight = swatches_1.swatches.indigo.p100;
            this.primaryLightForeground = swatches_1.swatches.grey.p500;
            this.primaryDark = swatches_1.swatches.indigo.p700;
            this.primaryDarkForeground = swatches_1.swatches.white;
            this.accent = swatches_1.swatches.pink.a200;
            this.accentForeground = swatches_1.swatches.white;
            this.accentLight = swatches_1.swatches.pink.a100;
            this.accentLightForeground = swatches_1.swatches.white;
            this.accentDark = swatches_1.swatches.pink.a400;
            this.accentDarkForeground = swatches_1.swatches.white;
            this.elevationNone = shadows_1.shadows.depth_0;
            this.elevation2dp = shadows_1.shadows.depth_2dp;
            this.elevation3dp = shadows_1.shadows.depth_3dp;
            this.elevation4dp = shadows_1.shadows.depth_4dp;
            this.elevation6dp = shadows_1.shadows.depth_6dp;
            this.elevation8dp = shadows_1.shadows.depth_8dp;
            this.elevation16dp = shadows_1.shadows.depth_16dp;
            this.elevation24dp = shadows_1.shadows.depth_24dp;
            this.elevationFocus = shadows_1.shadows.depth_focus;
        }
        return IOSDesign;
    }());
    exports.IOSDesign = IOSDesign;
});

define('aurelia-ux/colors/swatches',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.swatches = {
        red: {
            p50: '#FFEBEE',
            p100: '#FFCDD2',
            p200: '#EF9A9A',
            p300: '#E57373',
            p400: '#EF5350',
            p500: '#F44336',
            p600: '#E53935',
            p700: '#D32F2F',
            p800: '#C62828',
            p900: '#B71C1C',
            a100: '#FF8A80',
            a200: '#FF5252',
            a400: '#FF1744',
            a700: '#D50000'
        },
        pink: {
            p50: '#FCE4EC',
            p100: '#F8BBD0',
            p200: '#F48FB1',
            p300: '#F06292',
            p400: '#EC407A',
            p500: '#E91E63',
            p600: '#D81B60',
            p700: '#C2185B',
            p800: '#AD1457',
            p900: '#880E4F',
            a100: '#FF80AB',
            a200: '#FF4081',
            a400: '#F50057',
            a700: '#C51162'
        },
        purple: {
            p50: '#F3E5F5',
            p100: '#E1BEE7',
            p200: '#CE93D8',
            p300: '#BA68C8',
            p400: '#AB47BC',
            p500: '#9C27B0',
            p600: '#8E24AA',
            p700: '#7B1FA2',
            p800: '#6A1B9A',
            p900: '#4A148C',
            a100: '#EA80FC',
            a200: '#E040FB',
            a400: '#D500F9',
            a700: '#AA00FF'
        },
        deepPurple: {
            p50: '#EDE7F6',
            p100: '#D1C4E9',
            p200: '#B39DDB',
            p300: '#9575CD',
            p400: '#7E57C2',
            p500: '#673AB7',
            p600: '#5E35B1',
            p700: '#512DA8',
            p800: '#4527A0',
            p900: '#311B92',
            a100: '#B388FF',
            a200: '#7C4DFF',
            a400: '#651FFF',
            a700: '#6200EA'
        },
        indigo: {
            p50: '#E8EAF6',
            p100: '#C5CAE9',
            p200: '#9FA8DA',
            p300: '#7986CB',
            p400: '#5C6BC0',
            p500: '#3F51B5',
            p600: '#3949AB',
            p700: '#303F9F',
            p800: '#283593',
            p900: '#1A237E',
            a100: '#8C9EFF',
            a200: '#536DFE',
            a400: '#3D5AFE',
            a700: '#304FFE'
        },
        blue: {
            p50: '#E3F2FD',
            p100: '#BBDEFB',
            p200: '#90CAF9',
            p300: '#64B5F6',
            p400: '#42A5F5',
            p500: '#2196F3',
            p600: '#1E88E5',
            p700: '#1976D2',
            p800: '#1565C0',
            p900: '#0D47A1',
            a100: '#82B1FF',
            a200: '#448AFF',
            a400: '#2979FF',
            a700: '#2962FF'
        },
        lightBlue: {
            p50: '#E1F5FE',
            p100: '#B3E5FC',
            p200: '#81D4FA',
            p300: '#4FC3F7',
            p400: '#29B6F6',
            p500: '#03A9F4',
            p600: '#039BE5',
            p700: '#0288D1',
            p800: '#0277BD',
            p900: '#01579B',
            a100: '#80D8FF',
            a200: '#40C4FF',
            a400: '#00B0FF',
            a700: '#0091EA'
        },
        cyan: {
            p50: '#E0F7FA',
            p100: '#B2EBF2',
            p200: '#80DEEA',
            p300: '#4DD0E1',
            p400: '#26C6DA',
            p500: '#00BCD4',
            p600: '#00ACC1',
            p700: '#0097A7',
            p800: '#00838F',
            p900: '#006064',
            a100: '#84FFFF',
            a200: '#18FFFF',
            a400: '#00E5FF',
            a700: '#00B8D4'
        },
        teal: {
            p50: '#E0F2F1',
            p100: '#B2DFDB',
            p200: '#80CBC4',
            p300: '#4DB6AC',
            p400: '#26A69A',
            p500: '#009688',
            p600: '#00897B',
            p700: '#00796B',
            p800: '#00695C',
            p900: '#004D40',
            a100: '#A7FFEB',
            a200: '#64FFDA',
            a400: '#1DE9B6',
            a700: '#00BFA5'
        },
        green: {
            p50: '#E8F5E9',
            p100: '#C8E6C9',
            p200: '#A5D6A7',
            p300: '#81C784',
            p400: '#66BB6A',
            p500: '#4CAF50',
            p600: '#43A047',
            p700: '#388E3C',
            p800: '#2E7D32',
            p900: '#1B5E20',
            a100: '#B9F6CA',
            a200: '#69F0AE',
            a400: '#00E676',
            a700: '#00C853'
        },
        lightGreen: {
            p50: '#F1F8E9',
            p100: '#DCEDC8',
            p200: '#C5E1A5',
            p300: '#AED581',
            p400: '#9CCC65',
            p500: '#8BC34A',
            p600: '#7CB342',
            p700: '#689F38',
            p800: '#558B2F',
            p900: '#33691E',
            a100: '#CCFF90',
            a200: '#B2FF59',
            a400: '#76FF03',
            a700: '#64DD17'
        },
        lime: {
            p50: '#F9FBE7',
            p100: '#F0F4C3',
            p200: '#E6EE9C',
            p300: '#DCE775',
            p400: '#D4E157',
            p500: '#CDDC39',
            p600: '#C0CA33',
            p700: '#AFB42B',
            p800: '#9E9D24',
            p900: '#827717',
            a100: '#F4FF81',
            a200: '#EEFF41',
            a400: '#C6FF00',
            a700: '#AEEA00'
        },
        yellow: {
            p50: '#FFFDE7',
            p100: '#FFF9C4',
            p200: '#FFF59D',
            p300: '#FFF176',
            p400: '#FFEE58',
            p500: '#FFEB3B',
            p600: '#FDD835',
            p700: '#FBC02D',
            p800: '#F9A825',
            p900: '#F57F17',
            a100: '#FFFF8D',
            a200: '#FFFF00',
            a400: '#FFEA00',
            a700: '#FFD600'
        },
        amber: {
            p50: '#FFF8E1',
            p100: '#FFECB3',
            p200: '#FFE082',
            p300: '#FFD54F',
            p400: '#FFCA28',
            p500: '#FFC107',
            p600: '#FFB300',
            p700: '#FFA000',
            p800: '#FF8F00',
            p900: '#FF6F00',
            a100: '#FFE57F',
            a200: '#FFD740',
            a400: '#FFC400',
            a700: '#FFAB00'
        },
        orange: {
            p50: '#FFF3E0',
            p100: '#FFE0B2',
            p200: '#FFCC80',
            p300: '#FFB74D',
            p400: '#FFA726',
            p500: '#FF9800',
            p600: '#FB8C00',
            p700: '#F57C00',
            p800: '#EF6C00',
            p900: '#E65100',
            a100: '#FFD180',
            a200: '#FFAB40',
            a400: '#FF9100',
            a700: '#FF6D00'
        },
        deepOrange: {
            p50: '#FBE9E7',
            p100: '#FFCCBC',
            p200: '#FFAB91',
            p300: '#FF8A65',
            p400: '#FF7043',
            p500: '#FF5722',
            p600: '#F4511E',
            p700: '#E64A19',
            p800: '#D84315',
            p900: '#BF360C',
            a100: '#FF9E80',
            a200: '#FF6E40',
            a400: '#FF3D00',
            a700: '#DD2C00'
        },
        brown: {
            p50: '#EFEBE9',
            p100: '#D7CCC8',
            p200: '#BCAAA4',
            p300: '#A1887F',
            p400: '#8D6E63',
            p500: '#795548',
            p600: '#6D4C41',
            p700: '#5D4037',
            p800: '#4E342E',
            p900: '#3E2723'
        },
        grey: {
            p50: '#FAFAFA',
            p100: '#F5F5F5',
            p200: '#EEEEEE',
            p300: '#E0E0E0',
            p400: '#BDBDBD',
            p500: '#9E9E9E',
            p600: '#757575',
            p700: '#616161',
            p800: '#424242',
            p900: '#212121'
        },
        blueGrey: {
            p50: '#ECEFF1',
            p100: '#CFD8DC',
            p200: '#B0BEC5',
            p300: '#90A4AE',
            p400: '#78909C',
            p500: '#607D8B',
            p600: '#546E7A',
            p700: '#455A64',
            p800: '#37474F',
            p900: '#263238'
        },
        black: '#000000',
        white: '#FFFFFF'
    };
});

define('aurelia-ux/colors/shadows',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shadows = {
        depth_0: 'none',
        depth_2dp: '0 2px 2px 0 rgba(0, 0, 0, 0.14),' +
            '0 3px 1px -2px rgba(0, 0, 0, 0.2),' +
            '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        depth_3dp: '0 3px 4px 0 rgba(0, 0, 0, 0.14),' +
            '0 3px 3px -2px rgba(0, 0, 0, 0.2),' +
            '0 1px 8px 0 rgba(0, 0, 0, 0.12)',
        depth_4dp: '0 4px 5px 0 rgba(0, 0, 0, 0.14),' +
            '0 1px 10px 0 rgba(0, 0, 0, 0.12),' +
            '0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        depth_6dp: '0 6px 10px 0 rgba(0, 0, 0, 0.14),' +
            '0 1px 18px 0 rgba(0, 0, 0, 0.12),' +
            '0 3px 5px -1px rgba(0, 0, 0, 0.2)',
        depth_8dp: '0 8px 10px 1px rgba(0, 0, 0, 0.14),' +
            '0 3px 14px 2px rgba(0, 0, 0, 0.12),' +
            '0 5px 5px -3px rgba(0, 0, 0, 0.2)',
        depth_16dp: '0 16px 24px 2px rgba(0, 0, 0, 0.14),' +
            '0 6px 30px 5px rgba(0, 0, 0, 0.12),' +
            '0 8px 10px -5px rgba(0, 0, 0, 0.2)',
        depth_24dp: '0 9px 46px  8px rgba(0, 0, 0, 0.14),' +
            '0 11px 15px -7px rgba(0, 0, 0, 0.12),' +
            '0 24px 38px  3px rgba(0, 0, 0, 0.2)',
        depth_focus: '0 0 8px rgba(0,0,0,.18),' +
            '0 8px 16px rgba(0,0,0,.36)'
    };
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/platforms/android',["require", "exports", "aurelia-dependency-injection", "../designs/material-design"], function (require, exports, aurelia_dependency_injection_1, material_design_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Android = (function () {
        function Android(design) {
            this.design = design;
            this.type = 'android';
        }
        return Android;
    }());
    Android = __decorate([
        aurelia_dependency_injection_1.inject(material_design_1.MaterialDesign)
    ], Android);
    exports.Android = Android;
});

define('aurelia-ux/designs/material-design',["require", "exports", "../colors/swatches", "../colors/shadows"], function (require, exports, swatches_1, shadows_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MaterialDesign = (function () {
        function MaterialDesign() {
            this.type = 'material';
            this.primary = swatches_1.swatches.indigo.p500;
            this.primaryForeground = swatches_1.swatches.white;
            this.primaryLight = swatches_1.swatches.indigo.p100;
            this.primaryLightForeground = swatches_1.swatches.grey.p500;
            this.primaryDark = swatches_1.swatches.indigo.p700;
            this.primaryDarkForeground = swatches_1.swatches.white;
            this.accent = swatches_1.swatches.pink.a200;
            this.accentForeground = swatches_1.swatches.white;
            this.accentLight = swatches_1.swatches.pink.a100;
            this.accentLightForeground = swatches_1.swatches.white;
            this.accentDark = swatches_1.swatches.pink.a400;
            this.accentDarkForeground = swatches_1.swatches.white;
            this.elevationNone = shadows_1.shadows.depth_0;
            this.elevation2dp = shadows_1.shadows.depth_2dp;
            this.elevation3dp = shadows_1.shadows.depth_3dp;
            this.elevation4dp = shadows_1.shadows.depth_4dp;
            this.elevation6dp = shadows_1.shadows.depth_6dp;
            this.elevation8dp = shadows_1.shadows.depth_8dp;
            this.elevation16dp = shadows_1.shadows.depth_16dp;
            this.elevation24dp = shadows_1.shadows.depth_24dp;
            this.elevationFocus = shadows_1.shadows.depth_focus;
        }
        return MaterialDesign;
    }());
    exports.MaterialDesign = MaterialDesign;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/hosts/web',["require", "exports", "aurelia-dependency-injection", "../designs/material-design"], function (require, exports, aurelia_dependency_injection_1, material_design_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Web = (function () {
        function Web(design) {
            this.design = design;
            this.type = 'web';
            this.isAvailable = true;
        }
        Web.prototype.start = function () {
            var _this = this;
            return Promise.resolve().then(function () { return _this; });
        };
        return Web;
    }());
    Web = __decorate([
        aurelia_dependency_injection_1.inject(material_design_1.MaterialDesign)
    ], Web);
    exports.Web = Web;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/hosts/electron',["require", "exports", "aurelia-dependency-injection", "../designs/material-design", "./web", "aurelia-pal"], function (require, exports, aurelia_dependency_injection_1, material_design_1, web_1, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Electron = (function () {
        function Electron() {
            this.type = 'electron';
        }
        Object.defineProperty(Electron.prototype, "isAvailable", {
            get: function () {
                var p = aurelia_pal_1.PLATFORM.global.process;
                return p && p.versions && p.versions.electron;
            },
            enumerable: true,
            configurable: true
        });
        Electron.prototype.start = function (config) {
            return Promise.resolve().then(function () { return config.container.get(web_1.Web); });
        };
        return Electron;
    }());
    Electron = __decorate([
        aurelia_dependency_injection_1.inject(material_design_1.MaterialDesign)
    ], Electron);
    exports.Electron = Electron;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/ux-configuration',["require", "exports", "aurelia-dependency-injection", "aurelia-loader", "aurelia-templating", "./styles/dynamic-styles", "aurelia-templating-binding"], function (require, exports, aurelia_dependency_injection_1, aurelia_loader_1, aurelia_templating_1, dynamic_styles_1, aurelia_templating_binding_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UXConfiguration = (function () {
        function UXConfiguration(loader, viewEngine) {
            this.loader = loader;
            this.viewEngine = viewEngine;
        }
        UXConfiguration.prototype.defaultConfiguration = function () {
            this.styleLoaderPlugin();
            this.commandHandler();
            return this;
        };
        UXConfiguration.prototype.styleLoaderPlugin = function () {
            this.viewEngine.addResourcePlugin('.css#ux', {
                fetch: function (address) {
                    return Promise.resolve(dynamic_styles_1.createDynamicStyleModule(address.replace('.css#ux', '.css')));
                }
            });
            this.loader.addPlugin('ux-styles', {
                fetch: function (address) {
                    return Promise.resolve(dynamic_styles_1.createDynamicStyleModule(address + '.css'));
                }
            });
            return this;
        };
        UXConfiguration.prototype.commandHandler = function () {
            var proto = aurelia_templating_binding_1.SyntaxInterpreter.prototype;
            var original = proto.handleUnknownCommand;
            /* tslint:disable:only-arrow-functions */
            proto.handleUnknownCommand = function (r, e, i, ei, c) {
                if (i.attrName === 'styles') {
                    i.attrName = 'class';
                    i.attrValue = '$styles.' + i.command.replace(/\-/g, '_');
                    return this['one-way'](r, e, i, ei, c);
                }
                else {
                    return original.call(this, r, e, i, ei, c);
                }
            };
            /* tslint:enable:only-arrow-functions */
            return this;
        };
        return UXConfiguration;
    }());
    UXConfiguration = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_loader_1.Loader, aurelia_templating_1.ViewEngine)
    ], UXConfiguration);
    exports.UXConfiguration = UXConfiguration;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/styles/dynamic-styles',["require", "exports", "./decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nextThemeId = 0;
    function getNextDynamicThemeId() {
        return 'DynamicTheme' + (++nextThemeId);
    }
    function createDynamicStyleModule(styleUrl) {
        var DynamicTheme = (function () {
            function DynamicTheme() {
            }
            return DynamicTheme;
        }());
        DynamicTheme = __decorate([
            decorators_1.styles(),
            decorators_1.useStyles(styleUrl)
        ], DynamicTheme);
        return _a = {},
            _a[getNextDynamicThemeId()] = DynamicTheme,
            _a;
        var _a;
    }
    exports.createDynamicStyleModule = createDynamicStyleModule;
});

define('aurelia-ux/styles/decorators',["require", "exports", "./style-resource", "aurelia-templating", "./style-strategy", "aurelia-metadata", "./style-locator"], function (require, exports, style_resource_1, aurelia_templating_1, style_strategy_1, aurelia_metadata_1, style_locator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Decorator: Indicates that the target is a styles class.
     */
    function styles() {
        return aurelia_templating_1.resource(new style_resource_1.StyleResource());
    }
    exports.styles = styles;
    /**
     * Decorator: Associates a custom style strategy.
     * @param strategy The style strategy instance.
     */
    function useStyleStrategy(strategy) {
        return function (target) {
            aurelia_metadata_1.metadata.define(style_locator_1.StyleLocator.styleStrategyMetadataKey, strategy, target);
        };
    }
    exports.useStyleStrategy = useStyleStrategy;
    /**
     * Decorator: Provides a relative path to styles.
     * @param pathOrDesignMap The path to the styles or an object with keys for different
     * designs and values containing the paths to the styles.
     */
    function useStyles(pathOrDesignMap) {
        return useStyleStrategy(new style_strategy_1.RelativeStyleStrategy(pathOrDesignMap));
    }
    exports.useStyles = useStyles;
    /**
     * Decorator: Provides a style template, directly inline.
     * @param cssOrDesignmap The css or an object with keys for different designs
     * and values containing the css for each design.
     */
    function inlineStyles(cssOrDesignmap) {
        return useStyleStrategy(new style_strategy_1.InlineStyleStrategy(cssOrDesignmap));
    }
    exports.inlineStyles = inlineStyles;
});

define('aurelia-ux/styles/style-resource',["require", "exports", "aurelia-metadata", "./style-locator", "./style-engine"], function (require, exports, aurelia_metadata_1, style_locator_1, style_engine_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StyleResource = (function () {
        function StyleResource() {
        }
        StyleResource.prototype.initialize = function (container, target) {
            this.styleObjectType = target;
            this.container = container;
            this.hooks = new StyleViewEngineHooks(container.get(style_engine_1.StyleEngine));
        };
        StyleResource.prototype.register = function (registry) {
            registry.registerViewEngineHooks(this.hooks);
        };
        StyleResource.prototype.load = function (container) {
            var _this = this;
            var styleStrategy = container.get(style_locator_1.StyleLocator)
                .getStyleStrategy(this.styleObjectType);
            if (!styleStrategy.moduleId) {
                styleStrategy.moduleId = aurelia_metadata_1.Origin.get(this.styleObjectType).moduleId;
            }
            return styleStrategy.loadStyleFactory(container, this.styleObjectType).then(function (styleFactory) {
                _this.factory = styleFactory;
                _this.hooks.factory = _this.factory;
                return _this;
            });
        };
        return StyleResource;
    }());
    exports.StyleResource = StyleResource;
    var StyleViewEngineHooks = (function () {
        function StyleViewEngineHooks(engine) {
            this.engine = engine;
        }
        StyleViewEngineHooks.prototype.beforeBind = function (view) {
            this.engine.getOrCreateStyleController(view, this.factory).bind(view);
        };
        StyleViewEngineHooks.prototype.beforeUnbind = function (view) {
            this.engine.getOrCreateStyleController(view, this.factory).unbind();
        };
        return StyleViewEngineHooks;
    }());
});

define('aurelia-ux/styles/style-locator',["require", "exports", "aurelia-metadata", "./style-strategy"], function (require, exports, aurelia_metadata_1, style_strategy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Locates a style for an object.
     */
    var StyleLocator = (function () {
        function StyleLocator() {
        }
        /**
         * Gets the style strategy for the value.
         * @param value The value to locate the style strategy for.
         * @return The located StyleStrategy instance.
         */
        StyleLocator.prototype.getStyleStrategy = function (value) {
            if (typeof value === 'object' && 'getStyleStrategy' in value) {
                var origin_1 = aurelia_metadata_1.Origin.get(value.constructor);
                value = value.getStyleStrategy();
                if (typeof value === 'string') {
                    value = new style_strategy_1.RelativeStyleStrategy(value);
                }
                style_strategy_1.styleStrategy.assert(value);
                if (origin_1.moduleId) {
                    value.makeRelativeTo(origin_1.moduleId);
                }
                return value;
            }
            if (typeof value === 'string') {
                value = new style_strategy_1.RelativeStyleStrategy(value);
            }
            if (style_strategy_1.styleStrategy.validate(value)) {
                return value;
            }
            if (typeof value !== 'function') {
                value = value.constructor;
            }
            var origin = aurelia_metadata_1.Origin.get(value);
            var strategy = aurelia_metadata_1.metadata.get(StyleLocator.styleStrategyMetadataKey, value);
            if (!strategy) {
                if (!origin.moduleId) {
                    throw new Error('Cannot determine default style strategy for object.');
                }
                strategy = this.createFallbackStyleStrategy(origin);
            }
            else if (origin.moduleId) {
                strategy.moduleId = origin.moduleId;
            }
            return strategy;
        };
        /**
         * Creates a fallback Style Strategy. Used when unable to locate a configured strategy.
         * The default implementation returns and instance of ConventionalStyleStrategy.
         * @param origin The origin of the view model to return the strategy for.
         * @return The fallback StyleStrategy.
         */
        StyleLocator.prototype.createFallbackStyleStrategy = function (origin) {
            return new style_strategy_1.ConventionalStyleStrategy(this, origin);
        };
        /**
         * Conventionally converts a view model origin to a style url.
         * Used by the ConventionalStyleStrategy.
         * @param origin The origin of the view model to convert.
         * @return The view url.
         */
        StyleLocator.prototype.convertOriginToStyleUrl = function (origin) {
            var moduleId = origin.moduleId;
            var id = (moduleId.endsWith('.js') || moduleId.endsWith('.ts'))
                ? moduleId.substring(0, moduleId.length - 3)
                : moduleId;
            return id + '.css';
        };
        return StyleLocator;
    }());
    /**
     * The metadata key for storing/finding style strategies associated with an class/object.
     */
    StyleLocator.styleStrategyMetadataKey = 'aurelia:style-strategy';
    exports.StyleLocator = StyleLocator;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/styles/style-strategy',["require", "exports", "aurelia-metadata", "aurelia-pal", "./style-locator", "aurelia-path", "./style-compiler", "aurelia-loader", "../aurelia-ux"], function (require, exports, aurelia_metadata_1, aurelia_pal_1, style_locator_1, aurelia_path_1, style_compiler_1, aurelia_loader_1, aurelia_ux_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Decorator: Indicates that the decorated class/object is a style strategy.
     */
    exports.styleStrategy = aurelia_metadata_1.protocol.create('aurelia:style-strategy', {
        validate: function (target) {
            if (!(typeof target.loadStyleFactory === 'function')) {
                return 'Style strategies must implement: loadStyleFactory(): Promise<StyleFactory>';
            }
            return true;
        },
        compose: function (target) {
            if (!(typeof target.makeRelativeTo === 'function')) {
                target.makeRelativeTo = aurelia_pal_1.PLATFORM.noop;
            }
        }
    });
    var cssUrlMatcher = /url\((?!['"]data)([^)]+)\)/gi;
    function fixupCSSUrls(address, css) {
        if (typeof css !== 'string') {
            throw new Error("Failed loading required CSS file: " + address);
        }
        return css.replace(cssUrlMatcher, function (_, p1) {
            var quote = p1.charAt(0);
            if (quote === '\'' || quote === '"') {
                p1 = p1.substr(1, p1.length - 2);
            }
            return 'url(\'' + aurelia_path_1.relativeToFile(p1, address) + '\')';
        });
    }
    /**
     * A style strategy that loads a style relative to its associated view-model.
     */
    var RelativeStyleStrategy = (function () {
        /**
         * Creates an instance of RelativeStyleStrategy.
         * @param path The relative path to the styles.
         */
        function RelativeStyleStrategy(pathOrDesignMap) {
            this.pathOrDesignMap = pathOrDesignMap;
            this.absolutePath = null;
        }
        /**
         * Loads a style factory.
         */
        RelativeStyleStrategy.prototype.loadStyleFactory = function (container, styleObjectType) {
            var _this = this;
            if (this.absolutePath === null && this.moduleId) {
                var path = resolveForDesign(this.pathOrDesignMap, container);
                if (!path) {
                    this.absolutePath = container.get(style_locator_1.StyleLocator)
                        .convertOriginToStyleUrl(new aurelia_metadata_1.Origin(this.moduleId, 'default'));
                }
                else {
                    this.absolutePath = aurelia_path_1.relativeToFile(path, this.moduleId);
                }
            }
            var styleUrl = this.absolutePath || resolveForDesign(this.pathOrDesignMap, container);
            return container.get(aurelia_loader_1.Loader)
                .loadText(styleUrl)
                .catch(function () { return null; })
                .then(function (text) {
                text = fixupCSSUrls(styleUrl, text);
                _this.css = text;
                var compiler = container.get(style_compiler_1.StyleCompiler);
                return compiler.compile(styleObjectType, _this.css);
            });
        };
        /**
         * Makes the view loaded by this strategy relative to the provided file path.
         * @param file The path to load the view relative to.
         */
        RelativeStyleStrategy.prototype.makeRelativeTo = function (file) {
            if (this.absolutePath === null) {
                this.absolutePath = aurelia_path_1.relativeToFile(this.path, file);
            }
        };
        return RelativeStyleStrategy;
    }());
    RelativeStyleStrategy = __decorate([
        exports.styleStrategy()
    ], RelativeStyleStrategy);
    exports.RelativeStyleStrategy = RelativeStyleStrategy;
    /**
     * A styles strategy based on naming conventions.
     */
    var ConventionalStyleStrategy = (function () {
        /**
         * Creates an instance of ConventionalStyleStrategy.
         * @param viewLocator The view locator service for conventionally locating the view.
         * @param origin The origin of the view model to conventionally load the view for.
         */
        function ConventionalStyleStrategy(styleLocator, origin) {
            this.moduleId = origin.moduleId;
            this.styleUrl = styleLocator.convertOriginToStyleUrl(origin);
        }
        /**
         * Loads a style factory.
         */
        ConventionalStyleStrategy.prototype.loadStyleFactory = function (container, styleObjectType) {
            var _this = this;
            return container.get(aurelia_loader_1.Loader)
                .loadText(this.styleUrl)
                .catch(function () { return null; })
                .then(function (text) {
                text = fixupCSSUrls(_this.styleUrl, text);
                _this.css = text;
                var compiler = container.get(style_compiler_1.StyleCompiler);
                return compiler.compile(styleObjectType, _this.css);
            });
        };
        return ConventionalStyleStrategy;
    }());
    ConventionalStyleStrategy = __decorate([
        exports.styleStrategy()
    ], ConventionalStyleStrategy);
    exports.ConventionalStyleStrategy = ConventionalStyleStrategy;
    /**
     * A styles strategy that allows the component author to inline css.
     */
    var InlineStyleStrategy = (function () {
        /**
         * Creates an instance of InlineStyleStrategy.
         */
        function InlineStyleStrategy(cssOrDesignMap) {
            this.cssOrDesignMap = cssOrDesignMap;
        }
        /**
         * Loads a style factory.
         */
        InlineStyleStrategy.prototype.loadStyleFactory = function (container, styleObjectType) {
            var css = resolveForDesign(this.cssOrDesignMap, container);
            this.transformedCSS = fixupCSSUrls(this.moduleId, css);
            var compiler = container.get(style_compiler_1.StyleCompiler);
            return Promise.resolve(compiler.compile(styleObjectType, this.transformedCSS));
        };
        return InlineStyleStrategy;
    }());
    InlineStyleStrategy = __decorate([
        exports.styleStrategy()
    ], InlineStyleStrategy);
    exports.InlineStyleStrategy = InlineStyleStrategy;
    function resolveForDesign(valueOrDesignMap, container) {
        if (typeof valueOrDesignMap === 'string') {
            return valueOrDesignMap;
        }
        else {
            var designType = container.get(aurelia_ux_1.AureliaUX).design.type;
            return valueOrDesignMap[designType];
        }
    }
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/styles/style-compiler',["require", "exports", "aurelia-templating", "aurelia-dependency-injection", "./style-factory"], function (require, exports, aurelia_templating_1, aurelia_dependency_injection_1, style_factory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var classMatcher = /styles.([A-Za-z1-9\-_]+)/g;
    var StyleCompiler = (function () {
        function StyleCompiler(bindingLanguage, viewResources) {
            this.bindingLanguage = bindingLanguage;
            this.viewResources = viewResources;
        }
        StyleCompiler.prototype.compile = function (styleObjectType, css) {
            var styles = Object.create(null);
            var transformed = css.replace(classMatcher, function (_, capture) {
                var name = capture.replace(/\-/g, '_');
                styles[name] = true;
                return '.${$styles.' + name + ' & oneTime}';
            });
            var expression = this.bindingLanguage.inspectTextContent(this.viewResources, transformed);
            if (expression === null) {
                expression = new PlainCSSBindingExpression(transformed);
            }
            else {
                expression['targetProperty'] = 'innerHTML';
            }
            return new style_factory_1.StyleFactory(styleObjectType, styles, expression);
        };
        return StyleCompiler;
    }());
    StyleCompiler = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_templating_1.BindingLanguage, aurelia_templating_1.ViewResources)
    ], StyleCompiler);
    exports.StyleCompiler = StyleCompiler;
    var PlainCSSBindingExpression = (function () {
        function PlainCSSBindingExpression(css) {
            this.css = css;
        }
        PlainCSSBindingExpression.prototype.createBinding = function (styleElement) {
            return new CSSBinding(this.css, styleElement);
        };
        return PlainCSSBindingExpression;
    }());
    var CSSBinding = (function () {
        function CSSBinding(css, styleElement) {
            this.css = css;
            this.styleElement = styleElement;
        }
        CSSBinding.prototype.bind = function () {
            this.styleElement.innerHTML = this.css;
        };
        CSSBinding.prototype.unbind = function () {
            this.styleElement.innerHTML = '';
        };
        return CSSBinding;
    }());
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/styles/style-factory',["require", "exports", "./style-controller", "../aurelia-ux", "aurelia-binding", "aurelia-metadata", "../colors/swatches", "../colors/shadows"], function (require, exports, style_controller_1, aurelia_ux_1, aurelia_binding_1, aurelia_metadata_1, swatches_1, shadows_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StyleFactory = (function () {
        function StyleFactory(styleObjectType, styles, expression) {
            this.styleObjectType = styleObjectType;
            this.styles = styles;
            this.expression = expression;
            this.themeKey = aurelia_binding_1.camelCase(aurelia_metadata_1.Origin.get(styleObjectType).moduleMember);
        }
        StyleFactory.prototype.getOrCreateDefault = function (container) {
            if (this.defaultController === undefined) {
                this.defaultController = this.create(container);
                this.defaultController.isDefault = true;
            }
            return this.defaultController;
        };
        StyleFactory.prototype.create = function (container, destination, bindingContext) {
            var $styles = {};
            var ux = container.get(aurelia_ux_1.AureliaUX);
            if (bindingContext) {
                var baseStyles = this.getOrCreateDefault(container).bindingContext;
                Object.setPrototypeOf(bindingContext, baseStyles);
            }
            else {
                bindingContext = container.get(this.styleObjectType);
            }
            Object.keys(this.styles).forEach(function (key) {
                $styles[key] = generateRandomClass(key);
            });
            return new style_controller_1.StyleController(this, bindingContext, new StyleOverrideContext(ux, $styles, bindingContext), this.expression, destination);
        };
        return StyleFactory;
    }());
    exports.StyleFactory = StyleFactory;
    var currentNumber = 0;
    function generateRandomClass(key) {
        return key + '_au_ux_' + nextNumber();
    }
    function nextNumber() {
        return ++currentNumber;
    }
    var StyleOverrideContext = (function () {
        function StyleOverrideContext($ux, $styles, bindingContext) {
            this.$ux = $ux;
            this.$styles = $styles;
            this.bindingContext = bindingContext;
            this.$on = '(min-width: 0)';
            this.$off = '(max-width: 0)';
            this.$swatches = swatches_1.swatches;
            this.$shadows = shadows_1.shadows;
        }
        Object.defineProperty(StyleOverrideContext.prototype, "$platform", {
            get: function () {
                return this.$ux.platform;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StyleOverrideContext.prototype, "$design", {
            get: function () {
                return this.$ux.design;
            },
            enumerable: true,
            configurable: true
        });
        return StyleOverrideContext;
    }());
    __decorate([
        aurelia_binding_1.computedFrom('$ux.platform')
    ], StyleOverrideContext.prototype, "$platform", null);
    __decorate([
        aurelia_binding_1.computedFrom('$ux.design')
    ], StyleOverrideContext.prototype, "$design", null);
});

define('aurelia-ux/styles/style-controller',["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StyleController = (function () {
        function StyleController(factory, bindingContext, overrideContext, expression, destination) {
            this.factory = factory;
            this.bindingContext = bindingContext;
            this.overrideContext = overrideContext;
            this.expression = expression;
            this.destination = destination;
            this.isDefault = false;
            this.bindingInstance = null;
            this.count = 0;
            this.onRemove = aurelia_pal_1.PLATFORM.noop;
        }
        StyleController.prototype.bind = function (view) {
            var overrideContext = view.overrideContext;
            var $styles = overrideContext['$styles'] || {};
            overrideContext['$' + this.factory.themeKey] = this.bindingContext;
            overrideContext['$design'] = this.overrideContext.$design;
            overrideContext['$styles'] = Object.assign($styles, this.overrideContext.$styles);
            if (this.count === 0) {
                this.ensureStyleElementIsAddedToDocument();
                this.count = 1;
                this.bindingInstance.bind(this);
            }
            else {
                this.count++;
            }
        };
        StyleController.prototype.unbind = function () {
            this.count--;
            if (this.count === 0) {
                this.removeStyleElement();
                this.bindingInstance.unbind();
            }
        };
        StyleController.prototype.ensureStyleElementIsAddedToDocument = function () {
            if (this.styleElement === undefined) {
                this.styleElement = aurelia_pal_1.DOM.injectStyles('', this.destination);
                this.bindingInstance = this.expression.createBinding(this.styleElement);
            }
            else if (!this.styleElement.parentNode) {
                this.styleElementParent.appendChild(this.styleElement);
            }
        };
        StyleController.prototype.removeStyleElement = function () {
            this.styleElementParent = this.styleElement.parentNode;
            aurelia_pal_1.DOM.removeNode(this.styleElement);
            this.onRemove();
        };
        return StyleController;
    }());
    exports.StyleController = StyleController;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/styles/style-engine',["require", "exports", "aurelia-metadata", "aurelia-dependency-injection", "aurelia-pal", "aurelia-binding"], function (require, exports, aurelia_metadata_1, aurelia_dependency_injection_1, aurelia_pal_1, aurelia_binding_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StyleEngine = (function () {
        function StyleEngine(container) {
            this.container = container;
            this.controllers = new Map();
        }
        StyleEngine.prototype.getThemeKeyForComponent = function (obj) {
            return aurelia_binding_1.camelCase(aurelia_metadata_1.Origin.get(obj.constructor).moduleMember + 'Theme');
        };
        StyleEngine.prototype.applyTheme = function (themable, theme) {
            var _this = this;
            var themeKey = this.getThemeKeyForComponent(themable);
            var currentController = themable.view[themeKey];
            var bindingContext;
            var newController;
            if (!theme) {
                if (currentController !== currentController.factory.defaultController) {
                    currentController.unbind();
                    newController = currentController.factory.defaultController;
                    themable.view[themeKey] = newController;
                    newController.bind(themable.view);
                }
                return;
            }
            if (typeof theme === 'string') {
                bindingContext = themable.resources.getValue(theme) || themable.view.container.get(theme);
            }
            else {
                bindingContext = theme;
            }
            if (this.getShadowDOMRoot(themable.view) !== null) {
                currentController.unbind();
                currentController.bindingContext = bindingContext;
                currentController.bind(themable.view);
            }
            else {
                newController = this.controllers.get(bindingContext);
                if (!newController) {
                    newController = currentController.factory.create(this.container, null, bindingContext);
                }
                currentController.unbind();
                themable.view[themeKey] = newController;
                newController.bind(themable.view);
                this.controllers.set(bindingContext, newController);
                newController.onRemove = function () {
                    _this.controllers.delete(bindingContext);
                };
            }
        };
        StyleEngine.prototype.getOrCreateStyleController = function (view, factory) {
            var controller = view[factory.themeKey];
            if (controller === undefined) {
                var shadowDOMRoot = this.getShadowDOMRoot(view);
                if (shadowDOMRoot === null) {
                    view[factory.themeKey] = controller = factory.getOrCreateDefault(this.container);
                }
                else {
                    view[factory.themeKey] = controller = factory.create(view.container, shadowDOMRoot);
                }
            }
            return controller;
        };
        StyleEngine.prototype.getShadowDOMRoot = function (view) {
            var root = view.container.get(aurelia_pal_1.DOM.boundary);
            if (root && root.host instanceof Element) {
                return root;
            }
            return null;
        };
        return StyleEngine;
    }());
    StyleEngine = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_dependency_injection_1.Container)
    ], StyleEngine);
    exports.StyleEngine = StyleEngine;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/button/ux-button-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxButtonTheme = (function () {
        function UxButtonTheme() {
            this.type = 'raised'; // flat, raised or fab
            this.size = 'medium'; // small, medium or large
            this.effect = 'ripple'; // ripple or none
        }
        return UxButtonTheme;
    }());
    UxButtonTheme = __decorate([
        decorators_1.styles()
    ], UxButtonTheme);
    exports.UxButtonTheme = UxButtonTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/input/ux-input-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxInputTheme = (function () {
        function UxInputTheme() {
            this.background = 'transparent';
        }
        return UxInputTheme;
    }());
    UxInputTheme = __decorate([
        decorators_1.styles()
    ], UxInputTheme);
    exports.UxInputTheme = UxInputTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/input-info/ux-input-info-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxInputInfoTheme = (function () {
        function UxInputInfoTheme() {
        }
        return UxInputInfoTheme;
    }());
    UxInputInfoTheme = __decorate([
        decorators_1.styles()
    ], UxInputInfoTheme);
    exports.UxInputInfoTheme = UxInputInfoTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/textarea/ux-textarea-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxTextareaTheme = (function () {
        function UxTextareaTheme() {
            this.background = 'transparent';
        }
        return UxTextareaTheme;
    }());
    UxTextareaTheme = __decorate([
        decorators_1.styles()
    ], UxTextareaTheme);
    exports.UxTextareaTheme = UxTextareaTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/form/ux-form-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxFormTheme = (function () {
        function UxFormTheme() {
            this.background = 'transparent';
        }
        return UxFormTheme;
    }());
    UxFormTheme = __decorate([
        decorators_1.styles()
    ], UxFormTheme);
    exports.UxFormTheme = UxFormTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/form/ux-field-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxFieldTheme = (function () {
        function UxFieldTheme() {
            this.labelColor = '#444';
            this.labelFontSize = '12px';
        }
        return UxFieldTheme;
    }());
    UxFieldTheme = __decorate([
        decorators_1.styles()
    ], UxFieldTheme);
    exports.UxFieldTheme = UxFieldTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/chip-input/ux-chip-input-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxChipInputTheme = (function () {
        function UxChipInputTheme() {
            this.background = 'transparent';
        }
        return UxChipInputTheme;
    }());
    UxChipInputTheme = __decorate([
        decorators_1.styles()
    ], UxChipInputTheme);
    exports.UxChipInputTheme = UxChipInputTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/chip-input/ux-tag-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxTagTheme = (function () {
        function UxTagTheme() {
        }
        return UxTagTheme;
    }());
    UxTagTheme = __decorate([
        decorators_1.styles()
    ], UxTagTheme);
    exports.UxTagTheme = UxTagTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/chip-input/ux-chip-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxChipTheme = (function () {
        function UxChipTheme() {
            this.background = '#e0e0e0';
            this.foreground = '#757575';
        }
        return UxChipTheme;
    }());
    UxChipTheme = __decorate([
        decorators_1.styles()
    ], UxChipTheme);
    exports.UxChipTheme = UxChipTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/checkbox/ux-checkbox-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxCheckboxTheme = (function () {
        function UxCheckboxTheme() {
            this.effect = 'ripple'; // ripple or none
        }
        return UxCheckboxTheme;
    }());
    UxCheckboxTheme = __decorate([
        decorators_1.styles()
    ], UxCheckboxTheme);
    exports.UxCheckboxTheme = UxCheckboxTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/icons/ux-icon-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxIconTheme = (function () {
        function UxIconTheme() {
            this.size = '24px';
        }
        return UxIconTheme;
    }());
    UxIconTheme = __decorate([
        decorators_1.styles()
    ], UxIconTheme);
    exports.UxIconTheme = UxIconTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/list/ux-list-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxListTheme = (function () {
        function UxListTheme() {
        }
        return UxListTheme;
    }());
    UxListTheme = __decorate([
        decorators_1.styles()
    ], UxListTheme);
    exports.UxListTheme = UxListTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/list/ux-list-item-theme',["require", "exports", "../styles/decorators"], function (require, exports, decorators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxListItemTheme = (function () {
        function UxListItemTheme() {
        }
        return UxListItemTheme;
    }());
    UxListItemTheme = __decorate([
        decorators_1.styles()
    ], UxListItemTheme);
    exports.UxListItemTheme = UxListItemTheme;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/button/ux-button',["require", "exports", "aurelia-templating", "aurelia-dependency-injection", "../styles/style-engine", "../designs/design-attributes", "../effects/paper-ripple"], function (require, exports, aurelia_templating_1, aurelia_dependency_injection_1, style_engine_1, design_attributes_1, paper_ripple_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxButton = (function () {
        function UxButton(resources, styleEngine) {
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.type = null;
            this.size = null;
            this.effect = null;
            this.disabled = false;
            this.theme = null;
            this.ripple = null;
        }
        UxButton.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxButton.prototype.bind = function () {
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
            // ensure we cast empty string as true
            if (typeof this.disabled === 'string' && this.disabled === '') {
                this.disabled = true;
            }
            if (this.disabled) {
                this.button.setAttribute('disabled', '');
            }
        };
        UxButton.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        UxButton.prototype.disabledChanged = function (newValue) {
            // ensure we cast empty string as true
            if (typeof newValue === 'string' && newValue === '') {
                newValue = true;
            }
            if (newValue) {
                this.button.setAttribute('disabled', '');
            }
            else {
                this.button.removeAttribute('disabled');
            }
        };
        UxButton.prototype.onMouseDown = function (e) {
            if (this.button.classList.contains('ripple')) {
                if (this.ripple === null) {
                    this.ripple = new paper_ripple_1.PaperRipple();
                    this.button.appendChild(this.ripple.$);
                }
                if (this.button.classList.contains('fab') || this.button.classList.contains('icon')) {
                    this.ripple.center = true;
                    this.ripple.round = true;
                }
                this.ripple.downAction(e);
            }
            return true;
        };
        UxButton.prototype.onMouseUp = function () {
            if (this.button.classList.contains('ripple') && this.ripple !== null) {
                this.ripple.upAction();
            }
            return true;
        };
        return UxButton;
    }());
    __decorate([
        aurelia_templating_1.bindable
    ], UxButton.prototype, "type", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxButton.prototype, "size", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxButton.prototype, "effect", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxButton.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxButton.prototype, "theme", void 0);
    UxButton = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_templating_1.ViewResources, style_engine_1.StyleEngine),
        aurelia_templating_1.customElement('ux-button'),
        aurelia_templating_1.processAttributes(design_attributes_1.processDesignAttributes)
    ], UxButton);
    exports.UxButton = UxButton;
});

define('aurelia-ux/designs/design-attributes',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function processDesignAttributes(_, __, node, attributes, ___) {
        var prefix = 'material-'; // TODO: get this from somewhere
        var length = prefix.length;
        // tslint:disable:prefer-const
        for (var i = 0, ii = attributes.length; i < ii; ++i) {
            var current = attributes[i];
            if (current.name.indexOf(prefix) === 0) {
                var realName = current.name.substring(length);
                node.setAttribute(realName, current.value);
            }
        }
        // tslint:enable:prefer-const
        return true;
    }
    exports.processDesignAttributes = processDesignAttributes;
});

define('aurelia-ux/effects/paper-ripple',["require", "exports", "./paper-wave", "aurelia-pal"], function (require, exports, paper_wave_1, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Provides all the logic to produce ripple visual effect.
     * Other elements can use it to simulate rippling effect emanating from the point of contact.
     */
    var PaperRipple = (function () {
        /**
         * Initializes a new instance of the `PaperRipple` class with the specified `config` object.
         */
        function PaperRipple(cfg) {
            if (cfg === void 0) { cfg = {}; }
            this.waves = [];
            this.initialOpacity = cfg.initialOpacity || 0.25;
            this.opacityDecayVelocity = cfg.opacityDecayVelocity || 0.8;
            this.initTarget(cfg && cfg.nodeType ? cfg : cfg.target && cfg.target.nodeType ? cfg.target : null);
            this.recenters = cfg.recenters || this.recenters;
            this.center = cfg.center || this.center;
            this.round = cfg.round || this.round;
        }
        Object.defineProperty(PaperRipple.prototype, "recenters", {
            /**
             * Determines whether all the waves should be re-centered towards the center of the container.
             * @returns If `true`, waves will exhibit a gravitational pull towards the center of the container as they fade away.
             */
            get: function () {
                return this.$.hasAttribute('recenters');
            },
            /**
             * Sets the value that indicates whether all the waves should be re-centered towards the center of the container.
             * @returns Nothing.
             */
            set: function (newValue) {
                if (newValue) {
                    this.$.setAttribute('recenters', '');
                }
                else {
                    this.$.removeAttribute('recenters');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperRipple.prototype, "center", {
            /**
             * Determines whether all the waves should start a movement from the center of the container.
             * @returns If `true`, waves will center inside its container
             */
            get: function () {
                return this.$.hasAttribute('center');
            },
            /**
             * Sets the value that indicates whether all the waves should start a movement from the center of the container.
             * @returns Nothing.
             */
            set: function (newValue) {
                if (newValue) {
                    this.$.setAttribute('center', '');
                }
                else {
                    this.$.removeAttribute('center');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperRipple.prototype, "round", {
            /**
             * Determines whether ripple effect should apply within a circle.
             * @returns If `true`, ripple effect will apply within a circle.
             */
            get: function () {
                return this.$.classList.contains('paper-ripple--round');
            },
            /**
             * Sets the value that indicates whether ripple effect should apply within a circle.
             * @returns Nothing.
             */
            set: function (newValue) {
                this.$.classList.toggle('paper-ripple--round', newValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperRipple.prototype, "shouldKeepAnimating", {
            /**
             * Determines whether the ripple should keep animating or not.
             * @returns `true`, if so, otherwise `false`.
             */
            get: function () {
                return this.waves.some(function (wave) { return !wave.isAnimationComplete; });
            },
            enumerable: true,
            configurable: true
        });
        PaperRipple.prototype.initTarget = function (target) {
            if (target === void 0) { target = null; }
            var doc = aurelia_pal_1.PLATFORM.global.document;
            this.$ = target || doc.createElement('div');
            this.$.classList.add('paper-ripple');
            if (!this.$background) {
                this.$background = target &&
                    target.querySelector('.paper-ripple__background') || doc.createElement('div');
                this.$background.classList.add('paper-ripple__background');
                this.$.appendChild(this.$background);
            }
            if (!this.$waves) {
                this.$waves = target &&
                    target.querySelector('.paper-ripple__waves') || doc.createElement('div');
                this.$waves.classList.add('paper-ripple__waves');
                this.$.appendChild(this.$waves);
            }
            return this;
        };
        /**
         * Adds new wave to the list of visual ripples.
         * @returns Current instance for method chaining.
         */
        PaperRipple.prototype.addWave = function () {
            var wave = new paper_wave_1.PaperWave(this);
            this.$waves.appendChild(wave.$);
            this.$background.style.backgroundColor = wave.color;
            this.waves.push(wave);
            return wave;
        };
        /**
         * Produces a ripple-down effect.
         *
         * @param  ev Object containing coordinates of the point of contact.
         * @returns Current instance for method chaining.
         */
        PaperRipple.prototype.downAction = function (ev) {
            var wave = this.addWave();
            wave.downAction(ev);
            this.animate();
            return this;
        };
        /**
         * Produces a ripple-up effect.
         * @returns {PaperRipple} Current instance for method chaining.
         */
        PaperRipple.prototype.upAction = function () {
            this.waves.forEach(function (wave) { wave.upAction(); });
            this.animate();
            return this;
        };
        /**
         * Removes given wave from the list of visual ripples.
         * @param wave - The wave to remove.
         * @returns Current instance for method chaining.
         */
        PaperRipple.prototype.removeWave = function (wave) {
            var waveIndex = this.waves.indexOf(wave);
            if (waveIndex < 0) {
                return this;
            }
            this.waves.splice(waveIndex, 1);
            wave.remove();
            return this;
        };
        /**
         * Animates all the waves in the list of visual ripples.
         * @returns Current instance for method chaining.
         */
        PaperRipple.prototype.animate = function () {
            // tslint:disable:prefer-const
            for (var i = 0, l = this.waves.length; i < l; i++) {
                var wave = this.waves[i];
                if (wave) {
                    wave.draw();
                    this.$background.style.opacity = wave.outerOpacity.toString();
                    if (wave.isWaveFullyOpaque && !wave.isMaxRadiusReached) {
                        this.removeWave(wave);
                    }
                }
            }
            // tslint:enable:prefer-const
            if (!this.shouldKeepAnimating && this.waves.length === 0) {
                this.$background.style.backgroundColor = null;
            }
            else {
                aurelia_pal_1.PLATFORM.requestAnimationFrame(this.animate.bind(this));
            }
            return this;
        };
        return PaperRipple;
    }());
    exports.PaperRipple = PaperRipple;
});

define('aurelia-ux/effects/paper-wave',["require", "exports", "aurelia-pal", "./element-rect"], function (require, exports, aurelia_pal_1, element_rect_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable:variable-name
    var _window = aurelia_pal_1.PLATFORM.global;
    var _doc = _window.document;
    var _now = aurelia_pal_1.PLATFORM.performance.now.bind(aurelia_pal_1.PLATFORM.performance);
    // tslint:enable:variable-name
    /**
     * Provides all the logic to produce a one-time rippling effect.
     */
    var PaperWave = (function () {
        /**
         * Initializes a new instance of the `PaperWave` class with the specified `PaperRipple` instance.
         */
        function PaperWave(options) {
            this.color = _window.getComputedStyle(options.$).color;
            this.containerRect = new element_rect_1.ElementRect(options.$);
            this.recenters = options.recenters || false;
            this.center = options.center || false;
            this.initialOpacity = options.initialOpacity || 0.25;
            this.opacityDecayVelocity = options.opacityDecayVelocity || 0.8;
            this.$wave = _doc.createElement('div');
            this.$wave.classList.add('paper-ripple__wave');
            this.$wave.style.backgroundColor = this.color;
            this.$ = _doc.createElement('div');
            this.$.classList.add('paper-ripple__wave-container');
            this.$.appendChild(this.$wave);
            this.resetDefaults();
        }
        Object.defineProperty(PaperWave.prototype, "touchDownElapsed", {
            /**
             * Gets the time in milliseconds elapsed from the moment where interaction with the wave was started.
             * @returns The time in milliseconds.
             */
            get: function () {
                if (!this.touchDownStarted) {
                    return 0;
                }
                var elapsed = _now() - this.touchDownStarted;
                if (this.touchUpStarted) {
                    elapsed -= this.touchUpElapsed;
                }
                return elapsed;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperWave.prototype, "touchUpElapsed", {
            /**
             * Gets the time in milliseconds elapsed from the moment where interaction with the wave was ended.
             * @returns The time in milliseconds.
             */
            get: function () {
                return this.touchUpStarted ? _now() - this.touchUpStarted : 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperWave.prototype, "touchDownElapsedSeconds", {
            /**
             * Gets the time in seconds elapsed since the moment where interaction with the wave was started.
             * @returns The time in seconds.
             */
            get: function () {
                return this.touchDownElapsed / 1000;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperWave.prototype, "touchUpElapsedSeconds", {
            /**
             * Gets the time in seconds elapsed since the moment where interaction with the wave was ended.
             * @returns The time in seconds.
             */
            get: function () {
                return this.touchUpElapsed / 1000;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperWave.prototype, "mouseInteractionSeconds", {
            /**
             * Gets the total interaction time.
             * @returns The time in seconds
             */
            get: function () {
                return this.touchDownElapsedSeconds + this.touchUpElapsedSeconds;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperWave.prototype, "radius", {
            /**
             * Gets the wave's radius at the current time.
             *
             * @returns {Number} The value of the wave's radius.
             */
            get: function () {
                var radius = Math.min(Math.sqrt(Math.pow(this.containerRect.width, 2) + Math.pow(this.containerRect.height, 2)), PaperWave.MAX_RADIUS) * 1.1 + 5;
                var elapsed = 1.1 - 0.2 * (radius / PaperWave.MAX_RADIUS);
                var currentTime = this.mouseInteractionSeconds / elapsed;
                var actualRadius = radius * (1 - Math.pow(80, -currentTime));
                return Math.abs(actualRadius);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperWave.prototype, "opacity", {
            /**
             * Gets the wave's opacity at the current time.
             * @returns The value of the wave's opacity.
             */
            get: function () {
                if (!this.touchUpStarted) {
                    return this.initialOpacity;
                }
                return Math.max(0, this.initialOpacity - this.touchUpElapsedSeconds * this.opacityDecayVelocity);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperWave.prototype, "outerOpacity", {
            /**
             * Gets the wave's outer opacity at the current time.
             * @returns The value of the wave's outer opacity.
             */
            get: function () {
                return Math.max(0, Math.min(this.touchUpElapsedSeconds * 0.3, this.opacity));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperWave.prototype, "isWaveFullyOpaque", {
            /**
             * Determines whether the wave is fully opaque or not.
             * @returns `true`, if so, otherwise `false`.
             */
            get: function () {
                return this.opacity < 0.01 && this.radius >= Math.min(this.maxRadius, PaperWave.MAX_RADIUS);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperWave.prototype, "isMaxRadiusReached", {
            /**
             * Determines whether the wave reached its max radius or not.
             * @returns `true`, if so, otherwise `false`.
             */
            get: function () {
                return this.opacity >= this.initialOpacity && this.radius >= Math.min(this.maxRadius, PaperWave.MAX_RADIUS);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperWave.prototype, "isAnimationComplete", {
            /**
             * Determines whether the animation of rippling effect completed or not.
             * @returns `true`, if so, otherwise `false`.
             */
            get: function () {
                return this.touchUpStarted ? this.isWaveFullyOpaque : this.isMaxRadiusReached;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperWave.prototype, "translationFraction", {
            /**
             * Gets the wave's translation fraction value.
             * @returns The value of the wave's translation fraction.
             */
            get: function () {
                return Math.min(1, this.radius / this.containerRect.size * 2 / Math.sqrt(2));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperWave.prototype, "currentPosition", {
            /**
             * Gets the wave's current position.
             * @returns {{x: Number, y: Number}} Object containing coordinates of the wave's current position.
             */
            get: function () {
                var translateFraction = this.translationFraction;
                var x = this.startPosition.x;
                var y = this.startPosition.y;
                if (this.endPosition.x) {
                    x = this.startPosition.x + translateFraction * (this.endPosition.x - this.startPosition.x);
                }
                if (this.endPosition.y) {
                    y = this.startPosition.y + translateFraction * (this.endPosition.y - this.startPosition.y);
                }
                return { x: x, y: y };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaperWave.prototype, "isTouchDown", {
            /**
             * Determines whether the pointing device is still in interaction with the current wave.
             *
             * @returns {Boolean} `true`, if so, otherwise `false`.
             */
            get: function () {
                return this.touchDownStarted && !this.touchUpStarted;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Resets all the wave's values.
         * @returns Current instance for method chaining.
         */
        PaperWave.prototype.resetDefaults = function () {
            this.maxRadius = 0;
            this.touchDownStarted = 0;
            this.touchUpStarted = 0;
            this.startPosition = { x: 0, y: 0 };
            this.endPosition = { x: 0, y: 0 };
            return this;
        };
        /**
         * Performs updating of the wave's values.
         * @returns Current instance for method chaining.
         */
        PaperWave.prototype.draw = function () {
            var scaleFactor = this.radius / (this.containerRect.size / 2);
            var containerCenter = this.containerRect.center;
            var currentPos = this.currentPosition;
            var deltaPos = {
                x: currentPos.x - containerCenter.x,
                y: currentPos.y - containerCenter.y
            };
            this.$wave.style.opacity = this.opacity.toString();
            // cssString = 'translate(' + deltaPos.x + 'px, ' + deltaPos.y + 'px)';
            // this.$.style.webkitTransform = cssString;
            // this.$.style.mozTransform = cssString;
            // this.$.style.msTransform = cssString;
            // this.$.style.oTransform = cssString;
            this.$.style.transform = 'translate3d(' + deltaPos.x + 'px, ' + deltaPos.y + 'px, 0)';
            // cssString = 'scale(' + scaleFactor + ',' + scaleFactor + ')';
            // this.$wave.style.webkitTransform = cssString;
            // this.$wave.style.mozTransform = cssString;
            // this.$wave.style.msTransform = cssString;
            // this.$wave.style.oTransform = cssString;
            this.$wave.style.transform = 'scale3d(' + scaleFactor + ',' + scaleFactor + ', 1)';
            return this;
        };
        /**
         * Performs ripple-down effect on the current wave.
         * @param An object containing coordinates of interaction point to set start position of ripple effect.
         * @returns Current instance for method chaining.
         */
        PaperWave.prototype.downAction = function (event) {
            if (event === void 0) { event = null; }
            var containerCenter = this.containerRect.center;
            this.resetDefaults();
            this.touchDownStarted = _now();
            this.startPosition = this.center || !event ?
                containerCenter :
                {
                    x: (event.clientX || event.x) - this.containerRect.boundingRect.left,
                    y: (event.clientY || event.y) - this.containerRect.boundingRect.top
                };
            this.endPosition = this.recenters ? containerCenter : this.endPosition;
            this.maxRadius = this.containerRect.distanceToFarthestCorner(this.startPosition);
            this.$.style.top = (this.containerRect.height - this.containerRect.size) / 2 + 'px';
            this.$.style.left = (this.containerRect.width - this.containerRect.size) / 2 + 'px';
            this.$.style.width = this.containerRect.size + 'px';
            this.$.style.height = this.containerRect.size + 'px';
            return this;
        };
        /**
         * Performs ripple-up effect on the current wave.
         * @returns Current instance for method chaining.
         */
        PaperWave.prototype.upAction = function () {
            if (!this.isTouchDown) {
                return this;
            }
            this.touchUpStarted = _now();
            return this;
        };
        /**
         * Removes the wave from a DOM.
         * @returns Current instance for method chaining.
         */
        PaperWave.prototype.remove = function () {
            this.$.parentNode.removeChild(this.$);
            return this;
        };
        return PaperWave;
    }());
    /**
     * Represents the max possible value of the wave's radius.
     */
    PaperWave.MAX_RADIUS = 300;
    exports.PaperWave = PaperWave;
});

define('aurelia-ux/effects/element-rect',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Provides the utilities for getting element's metrics.
     */
    var ElementRect = (function () {
        /**
         * Initializes a new instance of the `ElementRect` class with the specified `element`.
         */
        function ElementRect(element) {
            this.element = element;
            this.width = this.boundingRect.width;
            this.height = this.boundingRect.height;
            this.size = Math.max(this.width, this.height);
        }
        Object.defineProperty(ElementRect.prototype, "center", {
            /**
             * Returns the center coordinates of the current element.
             */
            get: function () {
                return {
                    x: this.width / 2,
                    y: this.height / 2
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ElementRect.prototype, "boundingRect", {
            /**
             * Returns the size of the current element and its position relative to the viewport.
             */
            get: function () {
                return this.element.getBoundingClientRect();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Calculates euclidean distance between two points.
         * @param point1 - Start point
         * @param point2 - End point
         * @returns Distance between two points.
         */
        ElementRect.euclideanDistance = function (point1, point2) {
            return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
        };
        /**
         * Calculates the distance between given point and farthest corner of the current element.
         * @param The point object containing x and y coordinates.
         * @returns Distance from a point to the container's farthest corner.
         */
        ElementRect.prototype.distanceToFarthestCorner = function (_a) {
            var _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c;
            return Math.max(ElementRect.euclideanDistance({ x: x, y: y }, { x: 0, y: 0 }), ElementRect.euclideanDistance({ x: x, y: y }, { x: this.width, y: 0 }), ElementRect.euclideanDistance({ x: x, y: y }, { x: 0, y: this.height }), ElementRect.euclideanDistance({ x: x, y: y }, { x: this.width, y: this.height }));
        };
        /**
         * Determines if the specified point is contained within this element.
         * @param {(Event|Object)} ev - The object containing coordinates of the point.
         * @param {Number} ev.x - The `x` coordinate of the point.
         * @param {Number} ev.y - The `y` coordinate of the point.
         * @param {Number} ev.clientX - The `x` coordinate of the point.
         * @param {Number} ev.clientY - The `y` coordinate of the point.
         * @returns {Boolean} Returns `true` if the `x` and `y` coordinates of point is a
         * point inside this element's rectangle, otherwise `false`.
         */
        ElementRect.prototype.contains = function (ev) {
            var l = this.boundingRect.left;
            var t = this.boundingRect.top;
            var w = this.boundingRect.width;
            var h = this.boundingRect.height;
            var x = ev.x || ev.clientX || 0;
            var y = ev.y || ev.clientY || 0;
            return x >= l && x <= l + w && y >= t && y <= t + h;
        };
        return ElementRect;
    }());
    exports.ElementRect = ElementRect;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/input/ux-input',["require", "exports", "aurelia-templating", "aurelia-pal", "aurelia-binding", "aurelia-dependency-injection", "../styles/style-engine", "../designs/design-attributes"], function (require, exports, aurelia_templating_1, aurelia_pal_1, aurelia_binding_1, aurelia_dependency_injection_1, style_engine_1, design_attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxInput = (function () {
        function UxInput(element, resources, styleEngine) {
            this.element = element;
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.autofocus = null;
            this.disabled = false;
            this.readonly = false;
            this.theme = null;
            this.value = undefined;
        }
        UxInput.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxInput.prototype.bind = function () {
            var _this = this;
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
            if (this.autofocus || this.autofocus === '') {
                setTimeout(function () {
                    _this.textbox.focus();
                }, 0);
            }
            if (this.element.hasAttribute('required')) {
                this.textbox.setAttribute('required', '');
                this.element.removeAttribute('required');
            }
            if (this.element.hasAttribute('placeholder')) {
                var attributeValue = this.element.getAttribute('placeholder');
                if (attributeValue) {
                    this.textbox.setAttribute('placeholder', attributeValue);
                    this.element.removeAttribute('placeholder');
                }
            }
            if (this.element.hasAttribute('step')) {
                var attributeValue = this.element.getAttribute('step');
                if (attributeValue) {
                    this.textbox.setAttribute('step', attributeValue);
                    this.element.removeAttribute('step');
                }
            }
            if ([
                'text',
                'password',
                'number',
                'email',
                'url',
                'tel',
                'search'
            ].includes(this.type)) {
                this.textbox.setAttribute('type', this.type);
            }
            if (this.min) {
                this.textbox.setAttribute('min', this.min.toString());
            }
            if (this.max) {
                this.textbox.setAttribute('max', this.max.toString());
            }
            if (this.minlength) {
                this.textbox.setAttribute('minlength', this.minlength.toString());
            }
            if (this.maxlength) {
                this.textbox.setAttribute('maxlength', this.maxlength.toString());
            }
            if (this.disabled || this.disabled === '') {
                this.textbox.setAttribute('disabled', '');
            }
            if (this.readonly || this.readonly === '') {
                this.textbox.setAttribute('readonly', '');
            }
        };
        UxInput.prototype.attached = function () {
            var _this = this;
            var blurEvent = aurelia_pal_1.DOM.createCustomEvent('blur', { bubbles: true });
            this.textbox.addEventListener('focus', function () {
                _this.element.classList.add('focused');
            });
            this.textbox.addEventListener('blur', function () {
                _this.element.classList.remove('focused');
                _this.element.dispatchEvent(blurEvent);
            });
        };
        UxInput.prototype.detached = function () {
            var _this = this;
            var blurEvent = aurelia_pal_1.DOM.createCustomEvent('blur', { bubbles: true });
            this.textbox.removeEventListener('focus', function () {
                _this.element.classList.add('focused');
            });
            this.textbox.removeEventListener('blur', function () {
                _this.element.classList.remove('focused');
                _this.element.dispatchEvent(blurEvent);
            });
        };
        UxInput.prototype.disabledChanged = function (newValue) {
            if (newValue === true || newValue === '') {
                this.textbox.setAttribute('disabled', 'true');
            }
            else {
                this.textbox.removeAttribute('disabled');
            }
        };
        UxInput.prototype.readonlyChanged = function (newValue) {
            if (newValue === true || newValue === '') {
                this.textbox.setAttribute('readonly', 'true');
            }
            else {
                this.textbox.removeAttribute('readonly');
            }
        };
        UxInput.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        UxInput.prototype.typeChanged = function (newValue) {
            if (newValue !== 'text' && newValue !== 'password' && newValue !== 'number') {
                this.type = 'text';
            }
        };
        UxInput.prototype.valueChanged = function (newValue) {
            if (this.type === 'number' && !isNaN(newValue) && newValue !== '') {
                if (this.min && newValue < this.min) {
                    this.value = this.min;
                }
                if (this.max && newValue > this.max) {
                    this.value = this.max;
                }
                if (isNaN(newValue)) {
                    this.value = '';
                }
            }
        };
        return UxInput;
    }());
    __decorate([
        aurelia_templating_1.bindable
    ], UxInput.prototype, "autofocus", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxInput.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxInput.prototype, "maxlength", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxInput.prototype, "minlength", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxInput.prototype, "min", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxInput.prototype, "max", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxInput.prototype, "readonly", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxInput.prototype, "theme", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxInput.prototype, "type", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
    ], UxInput.prototype, "value", void 0);
    UxInput = __decorate([
        aurelia_dependency_injection_1.inject(Element, aurelia_templating_1.ViewResources, style_engine_1.StyleEngine),
        aurelia_templating_1.customElement('ux-input'),
        aurelia_templating_1.processAttributes(design_attributes_1.processDesignAttributes)
    ], UxInput);
    exports.UxInput = UxInput;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/input-info/ux-input-info',["require", "exports", "aurelia-templating", "aurelia-dependency-injection", "../styles/style-engine", "../designs/design-attributes"], function (require, exports, aurelia_templating_1, aurelia_dependency_injection_1, style_engine_1, design_attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxInputInfo = (function () {
        function UxInputInfo(element, resources, styleEngine) {
            this.element = element;
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.uxInputCounter = null;
            this.theme = null;
        }
        UxInputInfo.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxInputInfo.prototype.bind = function () {
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
            if (this.target === undefined) {
                this.findAndSetTarget(this.element);
            }
        };
        UxInputInfo.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        UxInputInfo.prototype.findAndSetTarget = function (element) {
            var inputElement = element.previousElementSibling;
            if (!inputElement) {
                return;
            }
            if (inputElement.nodeName === 'UX-INPUT' || inputElement.nodeName === 'UX-TEXTAREA') {
                this.target = inputElement.au.controller.viewModel;
            }
        };
        return UxInputInfo;
    }());
    __decorate([
        aurelia_templating_1.bindable
    ], UxInputInfo.prototype, "target", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxInputInfo.prototype, "uxInputCounter", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxInputInfo.prototype, "theme", void 0);
    UxInputInfo = __decorate([
        aurelia_dependency_injection_1.inject(Element, aurelia_templating_1.ViewResources, style_engine_1.StyleEngine),
        aurelia_templating_1.customElement('ux-input-info'),
        aurelia_templating_1.processAttributes(design_attributes_1.processDesignAttributes)
    ], UxInputInfo);
    exports.UxInputInfo = UxInputInfo;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/textarea/ux-textarea',["require", "exports", "aurelia-templating", "aurelia-pal", "aurelia-binding", "aurelia-dependency-injection", "../styles/style-engine", "../designs/design-attributes"], function (require, exports, aurelia_templating_1, aurelia_pal_1, aurelia_binding_1, aurelia_dependency_injection_1, style_engine_1, design_attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxTextarea = (function () {
        function UxTextarea(element, styleEngine, resources) {
            this.element = element;
            this.styleEngine = styleEngine;
            this.resources = resources;
            this.autofocus = null;
            this.autoResize = null;
            this.disabled = false;
            this.readonly = false;
            this.theme = null;
            this.value = undefined;
        }
        UxTextarea.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxTextarea.prototype.bind = function () {
            var _this = this;
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
            if (this.autofocus || this.autofocus === '') {
                setTimeout(function () {
                    _this.textbox.focus();
                }, 0);
            }
            if (this.element.hasAttribute('placeholder')) {
                var attributeValue = this.element.getAttribute('placeholder');
                if (attributeValue) {
                    this.textbox.setAttribute('placeholder', attributeValue);
                    this.element.removeAttribute('placeholder');
                }
            }
            if (this.element.hasAttribute('required')) {
                this.textbox.setAttribute('required', '');
                this.element.removeAttribute('required');
            }
            if (this.cols) {
                this.textbox.setAttribute('cols', this.cols.toString());
                this.element.removeAttribute('cols');
            }
            if (this.rows) {
                this.textbox.setAttribute('rows', this.rows.toString());
                this.element.removeAttribute('rows');
            }
            if (this.minlength) {
                this.textbox.setAttribute('minlength', this.minlength.toString());
            }
            if (this.maxlength) {
                this.textbox.setAttribute('maxlength', this.maxlength.toString());
            }
            if (this.disabled || this.disabled === '') {
                this.textbox.setAttribute('disabled', '');
            }
            if (this.readonly || this.readonly === '') {
                this.textbox.setAttribute('readonly', '');
            }
        };
        UxTextarea.prototype.attached = function () {
            var _this = this;
            var blurEvent = aurelia_pal_1.DOM.createCustomEvent('blur', { bubbles: true });
            this.textbox.addEventListener('focus', function () {
                _this.element.classList.add('focused');
            });
            this.textbox.addEventListener('blur', function () {
                _this.element.classList.remove('focused');
                _this.element.dispatchEvent(blurEvent);
            });
        };
        UxTextarea.prototype.detached = function () {
            var _this = this;
            var blurEvent = aurelia_pal_1.DOM.createCustomEvent('blur', { bubbles: true });
            this.textbox.removeEventListener('focus', function () {
                _this.element.classList.add('focused');
            });
            this.textbox.removeEventListener('blur', function () {
                _this.element.classList.remove('focused');
                _this.element.dispatchEvent(blurEvent);
            });
        };
        UxTextarea.prototype.disabledChanged = function (newValue) {
            if (newValue === true || newValue === '') {
                this.textbox.setAttribute('disabled', 'true');
            }
            else {
                this.textbox.removeAttribute('disabled');
            }
        };
        UxTextarea.prototype.readonlyChanged = function (newValue) {
            if (newValue === true || newValue === '') {
                this.textbox.setAttribute('readonly', 'true');
            }
            else {
                this.textbox.removeAttribute('readonly');
            }
        };
        UxTextarea.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        UxTextarea.prototype.valueChanged = function () {
            if (this.autoResize !== null) {
                this.textbox.style.height = 'auto';
                this.textbox.style.height = this.textbox.scrollHeight + 2 + "px";
            }
        };
        return UxTextarea;
    }());
    __decorate([
        aurelia_templating_1.bindable
    ], UxTextarea.prototype, "autofocus", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxTextarea.prototype, "autoResize", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxTextarea.prototype, "cols", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxTextarea.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxTextarea.prototype, "maxlength", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxTextarea.prototype, "minlength", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxTextarea.prototype, "readonly", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxTextarea.prototype, "rows", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxTextarea.prototype, "theme", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
    ], UxTextarea.prototype, "value", void 0);
    UxTextarea = __decorate([
        aurelia_dependency_injection_1.inject(Element, style_engine_1.StyleEngine, aurelia_templating_1.ViewResources),
        aurelia_templating_1.customElement('ux-textarea'),
        aurelia_templating_1.processAttributes(design_attributes_1.processDesignAttributes)
    ], UxTextarea);
    exports.UxTextarea = UxTextarea;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/form/ux-form',["require", "exports", "aurelia-templating", "aurelia-pal", "aurelia-dependency-injection", "../styles/style-engine", "../designs/design-attributes"], function (require, exports, aurelia_templating_1, aurelia_pal_1, aurelia_dependency_injection_1, style_engine_1, design_attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxForm = (function () {
        function UxForm(element, resources, styleEngine) {
            this.element = element;
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.theme = null;
            this.bindSubmitToEnter = false;
        }
        UxForm.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxForm.prototype.bind = function () {
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
            if (this.submitOnEnter !== undefined) {
                this.bindSubmitToEnter = true;
            }
        };
        UxForm.prototype.attached = function () {
            var _this = this;
            if (this.bindSubmitToEnter) {
                this.element.addEventListener('keyup', function (e) {
                    if (e.keyCode === 13) {
                        _this.submitForm();
                    }
                });
            }
        };
        UxForm.prototype.detached = function () {
            var _this = this;
            if (this.bindSubmitToEnter) {
                this.element.removeEventListener('keyup', function (e) {
                    if (e.keyCode === 13) {
                        _this.submitForm();
                    }
                });
            }
        };
        UxForm.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        UxForm.prototype.submitForm = function () {
            var submitEvent = aurelia_pal_1.DOM.createCustomEvent('submit', { bubbles: true, target: this.element });
            this.element.dispatchEvent(submitEvent);
        };
        return UxForm;
    }());
    __decorate([
        aurelia_templating_1.bindable
    ], UxForm.prototype, "theme", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxForm.prototype, "submitOnEnter", void 0);
    UxForm = __decorate([
        aurelia_dependency_injection_1.inject(Element, aurelia_templating_1.ViewResources, style_engine_1.StyleEngine),
        aurelia_templating_1.customElement('ux-form'),
        aurelia_templating_1.processAttributes(design_attributes_1.processDesignAttributes)
    ], UxForm);
    exports.UxForm = UxForm;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/form/ux-field',["require", "exports", "aurelia-templating", "aurelia-dependency-injection", "../styles/style-engine", "../designs/design-attributes"], function (require, exports, aurelia_templating_1, aurelia_dependency_injection_1, style_engine_1, design_attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxField = (function () {
        function UxField(element, resources, styleEngine) {
            this.element = element;
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.theme = null;
        }
        UxField.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxField.prototype.bind = function () {
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
        };
        UxField.prototype.attached = function () {
            if (this.label && !this.element.querySelector('label')) {
                var newLabel = document.createElement('label');
                newLabel.textContent = this.label;
                this.element.insertBefore(newLabel, this.element.firstChild);
            }
        };
        UxField.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        return UxField;
    }());
    __decorate([
        aurelia_templating_1.bindable
    ], UxField.prototype, "theme", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxField.prototype, "label", void 0);
    UxField = __decorate([
        aurelia_dependency_injection_1.inject(Element, aurelia_templating_1.ViewResources, style_engine_1.StyleEngine),
        aurelia_templating_1.customElement('ux-field'),
        aurelia_templating_1.processAttributes(design_attributes_1.processDesignAttributes)
    ], UxField);
    exports.UxField = UxField;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/chip-input/ux-chip-input',["require", "exports", "aurelia-templating", "aurelia-pal", "aurelia-binding", "aurelia-dependency-injection", "../styles/style-engine", "../designs/design-attributes"], function (require, exports, aurelia_templating_1, aurelia_pal_1, aurelia_binding_1, aurelia_dependency_injection_1, style_engine_1, design_attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxChipInput = (function () {
        function UxChipInput(element, resources, styleEngine) {
            this.element = element;
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.disabled = false;
            this.readonly = false;
            this.theme = null;
            this.separator = ', ';
            this.value = undefined;
            this.chips = new Array();
        }
        UxChipInput.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxChipInput.prototype.bind = function () {
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
            if (this.element.hasAttribute('placeholder')) {
                var attributeValue = this.element.getAttribute('placeholder');
                if (attributeValue) {
                    this.textbox.setAttribute('placeholder', attributeValue);
                    this.element.removeAttribute('placeholder');
                }
            }
            if (this.value) {
                this.chips = this.value.split(this.separator);
            }
            if (this.disabled || this.disabled === '') {
                this.textbox.setAttribute('disabled', '');
                this.chiprepeat.removeAttribute('deletable');
                this.tagrepeat.removeAttribute('deletable');
            }
            if (this.readonly || this.readonly === '') {
                this.textbox.setAttribute('readonly', '');
                this.chiprepeat.removeAttribute('deletable');
                this.tagrepeat.removeAttribute('deletable');
            }
        };
        UxChipInput.prototype.attached = function () {
            var _this = this;
            var blurEvent = aurelia_pal_1.DOM.createCustomEvent('blur', { bubbles: true });
            this.textbox.addEventListener('focus', function () {
                _this.element.classList.add('focused');
            });
            this.textbox.addEventListener('blur', function () {
                _this.addChip();
                _this.element.classList.remove('focused');
                _this.element.dispatchEvent(blurEvent);
            });
        };
        UxChipInput.prototype.detached = function () {
            var _this = this;
            var blurEvent = aurelia_pal_1.DOM.createCustomEvent('blur', { bubbles: true });
            this.textbox.removeEventListener('focus', function () {
                _this.element.classList.add('focused');
            });
            this.textbox.removeEventListener('blur', function () {
                _this.addChip();
                _this.element.classList.remove('focused');
                _this.element.dispatchEvent(blurEvent);
            });
        };
        UxChipInput.prototype.handleKeyup = function (event) {
            var key = event.which || event.keyCode;
            if (key === 13) {
                this.addChip();
            }
            if (key === 37) {
                if (this.chips && this.textbox.value === '') {
                    var chip = this.chips.pop();
                    if (chip !== undefined) {
                        this.textbox.value = chip;
                    }
                }
            }
        };
        UxChipInput.prototype.addChip = function () {
            if (this.textbox.value.length) {
                if (!this.chips) {
                    this.chips = new Array();
                }
                this.chips.push(this.textbox.value);
                this.textbox.value = '';
                this.chipsChanged();
            }
        };
        UxChipInput.prototype.editChip = function (value) {
            if (this.textbox.value.length === 0) {
                this.removeChip(value);
                this.textbox.value = value;
                this.chipsChanged();
            }
        };
        UxChipInput.prototype.removeChip = function (value) {
            var chipIndex = this.chips.indexOf(value, 0);
            if (chipIndex > -1) {
                this.chips.splice(chipIndex, 1);
                this.chipsChanged();
            }
        };
        UxChipInput.prototype.chipsChanged = function () {
            var chipValue = this.chips.join(this.separator);
            if (chipValue === '') {
                chipValue = null;
            }
            if (chipValue !== this.value) {
                this.value = chipValue;
            }
        };
        UxChipInput.prototype.valueChanged = function (newValue) {
            if (newValue && newValue !== this.chips.join(this.separator)) {
                this.chips = newValue.split(this.separator);
            }
        };
        UxChipInput.prototype.disabledChanged = function (newValue) {
            if (newValue === true || newValue === '') {
                this.textbox.setAttribute('disabled', 'true');
                this.chiprepeat.removeAttribute('deletable');
                this.tagrepeat.removeAttribute('deletable');
            }
            else {
                this.textbox.removeAttribute('disabled');
                this.chiprepeat.setAttribute('deletable', '');
                this.tagrepeat.setAttribute('deletable', '');
            }
        };
        UxChipInput.prototype.readonlyChanged = function (newValue) {
            if (newValue === true || newValue === '') {
                this.textbox.setAttribute('readonly', 'true');
                this.chiprepeat.removeAttribute('deletable');
                this.tagrepeat.removeAttribute('deletable');
            }
            else {
                this.textbox.removeAttribute('readonly');
                this.chiprepeat.setAttribute('deletable', '');
                this.tagrepeat.setAttribute('deletable', '');
            }
        };
        UxChipInput.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        return UxChipInput;
    }());
    __decorate([
        aurelia_templating_1.bindable
    ], UxChipInput.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxChipInput.prototype, "readonly", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxChipInput.prototype, "theme", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxChipInput.prototype, "type", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxChipInput.prototype, "separator", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
    ], UxChipInput.prototype, "value", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
    ], UxChipInput.prototype, "chips", void 0);
    UxChipInput = __decorate([
        aurelia_dependency_injection_1.inject(Element, aurelia_templating_1.ViewResources, style_engine_1.StyleEngine),
        aurelia_templating_1.customElement('ux-chip-input'),
        aurelia_templating_1.processAttributes(design_attributes_1.processDesignAttributes)
    ], UxChipInput);
    exports.UxChipInput = UxChipInput;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/chip-input/ux-tag',["require", "exports", "aurelia-templating", "aurelia-pal", "aurelia-binding", "aurelia-dependency-injection", "../styles/style-engine", "../designs/design-attributes"], function (require, exports, aurelia_templating_1, aurelia_pal_1, aurelia_binding_1, aurelia_dependency_injection_1, style_engine_1, design_attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxTag = (function () {
        function UxTag(element, resources, styleEngine) {
            this.element = element;
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.theme = null;
            this.value = undefined;
        }
        UxTag.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxTag.prototype.bind = function () {
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
        };
        UxTag.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        UxTag.prototype.closeTag = function () {
            var closeEvent = aurelia_pal_1.DOM.createCustomEvent('close', { bubbles: false });
            this.element.dispatchEvent(closeEvent);
        };
        return UxTag;
    }());
    __decorate([
        aurelia_templating_1.bindable
    ], UxTag.prototype, "theme", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxTag.prototype, "type", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
    ], UxTag.prototype, "value", void 0);
    UxTag = __decorate([
        aurelia_dependency_injection_1.inject(Element, aurelia_templating_1.ViewResources, style_engine_1.StyleEngine),
        aurelia_templating_1.customElement('ux-tag'),
        aurelia_templating_1.processAttributes(design_attributes_1.processDesignAttributes)
    ], UxTag);
    exports.UxTag = UxTag;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/chip-input/ux-chip',["require", "exports", "aurelia-templating", "aurelia-pal", "aurelia-binding", "aurelia-dependency-injection", "../styles/style-engine", "../designs/design-attributes"], function (require, exports, aurelia_templating_1, aurelia_pal_1, aurelia_binding_1, aurelia_dependency_injection_1, style_engine_1, design_attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxChip = (function () {
        function UxChip(element, resources, styleEngine) {
            this.element = element;
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.theme = null;
            this.value = undefined;
        }
        UxChip.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxChip.prototype.bind = function () {
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
        };
        UxChip.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        UxChip.prototype.closeChip = function () {
            var closeEvent = aurelia_pal_1.DOM.createCustomEvent('close', { bubbles: false });
            this.element.dispatchEvent(closeEvent);
        };
        return UxChip;
    }());
    __decorate([
        aurelia_templating_1.bindable
    ], UxChip.prototype, "theme", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxChip.prototype, "type", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
    ], UxChip.prototype, "value", void 0);
    UxChip = __decorate([
        aurelia_dependency_injection_1.inject(Element, aurelia_templating_1.ViewResources, style_engine_1.StyleEngine),
        aurelia_templating_1.customElement('ux-chip'),
        aurelia_templating_1.processAttributes(design_attributes_1.processDesignAttributes)
    ], UxChip);
    exports.UxChip = UxChip;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/checkbox/ux-checkbox',["require", "exports", "aurelia-templating", "aurelia-binding", "aurelia-dependency-injection", "../styles/style-engine", "../effects/paper-ripple", "../designs/design-attributes"], function (require, exports, aurelia_templating_1, aurelia_binding_1, aurelia_dependency_injection_1, style_engine_1, paper_ripple_1, design_attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxCheckbox = (function () {
        function UxCheckbox(element, resources, styleEngine) {
            this.element = element;
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.disabled = null;
            this.effect = null;
            this.matcher = function (a, b) { return a === b; };
            this.tabindex = 0;
            this.theme = null;
            this.checked = false;
            this.value = null;
            this.uncheckedValue = null;
            this.ripple = null;
        }
        Object.defineProperty(UxCheckbox.prototype, "isDisabled", {
            get: function () {
                var ret = this.disabled;
                if (typeof this.disabled === 'string' &&
                    (this.disabled === '' || this.disabled.toString().toLocaleLowerCase() === 'disabled')) {
                    ret = true;
                }
                return ret;
            },
            enumerable: true,
            configurable: true
        });
        UxCheckbox.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxCheckbox.prototype.bind = function () {
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
            if (this.checked) {
                this.checkedChanged();
            }
            // ensure we cast empty string as true
            if (typeof this.disabled === 'string' && this.disabled === '') {
                this.disabled = true;
            }
            if (this.disabled && !this.element.classList.contains('disabled')) {
                this.element.classList.add('disabled');
            }
            else if (this.element.classList.contains('disabled')) {
                this.element.classList.remove('disabled');
            }
        };
        UxCheckbox.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        UxCheckbox.prototype.disabledChanged = function (newValue) {
            // ensure we cast empty string as true
            if (typeof newValue === 'string' && newValue === '') {
                newValue = true;
            }
            if (newValue && !this.element.classList.contains('disabled')) {
                this.element.classList.add('disabled');
            }
            else if (this.element.classList.contains('disabled')) {
                this.element.classList.remove('disabled');
            }
        };
        UxCheckbox.prototype.checkedChanged = function () {
            var _this = this;
            var elementValue = this.model ? this.model : this.value;
            var isChecked = this.checked;
            if (Array.isArray(this.checked)) {
                isChecked = this.checked.some(function (item) { return _this.matcher(item, elementValue); });
            }
            if (isChecked && isChecked !== this.uncheckedValue) {
                this.element.classList.add('checked');
                this.element.setAttribute('aria-checked', 'true');
            }
            else {
                this.element.classList.remove('checked');
                this.element.setAttribute('aria-checked', 'false');
            }
        };
        UxCheckbox.prototype.toggleCheckbox = function () {
            var _this = this;
            if (this.isDisabled) {
                return;
            }
            var elementValue = this.model ? this.model : this.value;
            if (Array.isArray(this.checked)) {
                var index = this.checked.findIndex(function (item) { return _this.matcher(item, elementValue); });
                if (index === -1) {
                    this.checked.push(elementValue);
                }
                else if (index !== -1) {
                    this.checked.splice(index, 1);
                }
                this.checkedChanged();
            }
            else if (elementValue != null && typeof elementValue !== 'boolean') {
                if (this.checked && this.checked !== this.uncheckedValue) {
                    if (this.uncheckedValue != null) {
                        this.checked = this.uncheckedValue;
                    }
                    else {
                        this.checked = null;
                    }
                }
                else {
                    this.checked = elementValue;
                }
            }
            else {
                this.checked = !this.checked;
            }
        };
        UxCheckbox.prototype.onKeyup = function (e) {
            var key = e.which || e.keyCode;
            if (key === 13) {
                this.toggleCheckbox();
            }
        };
        UxCheckbox.prototype.onMouseDown = function (e) {
            if (e.button !== 0 || this.isDisabled) {
                return;
            }
            if (this.checkbox.classList.contains('ripple')) {
                if (this.ripple === null) {
                    this.ripple = new paper_ripple_1.PaperRipple();
                    var container = this.element.querySelector('.ripplecontainer');
                    if (container != null) {
                        container.appendChild(this.ripple.$);
                    }
                }
                this.ripple.center = true;
                this.ripple.round = true;
                this.ripple.downAction(e);
            }
            this.toggleCheckbox();
            e.preventDefault();
        };
        UxCheckbox.prototype.onMouseUp = function (e) {
            if (e.button !== 0 || this.isDisabled) {
                return;
            }
            if (this.checkbox.classList.contains('ripple') && this.ripple !== null) {
                this.ripple.upAction();
            }
        };
        return UxCheckbox;
    }());
    __decorate([
        aurelia_templating_1.bindable
    ], UxCheckbox.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxCheckbox.prototype, "effect", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxCheckbox.prototype, "label", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxCheckbox.prototype, "matcher", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxCheckbox.prototype, "model", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxCheckbox.prototype, "tabindex", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxCheckbox.prototype, "theme", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay }),
        aurelia_templating_1.bindable
    ], UxCheckbox.prototype, "checked", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay }),
        aurelia_templating_1.bindable
    ], UxCheckbox.prototype, "value", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay }),
        aurelia_templating_1.bindable
    ], UxCheckbox.prototype, "uncheckedValue", void 0);
    __decorate([
        aurelia_binding_1.computedFrom('disabled')
    ], UxCheckbox.prototype, "isDisabled", null);
    UxCheckbox = __decorate([
        aurelia_dependency_injection_1.inject(Element, aurelia_templating_1.ViewResources, style_engine_1.StyleEngine),
        aurelia_templating_1.customElement('ux-checkbox'),
        aurelia_templating_1.processAttributes(design_attributes_1.processDesignAttributes)
    ], UxCheckbox);
    exports.UxCheckbox = UxCheckbox;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/icons/ux-icon',["require", "exports", "aurelia-templating", "aurelia-logging", "aurelia-binding", "aurelia-dependency-injection", "../styles/style-engine", "../designs/design-attributes", "./ux-icon-map"], function (require, exports, aurelia_templating_1, aurelia_logging_1, aurelia_binding_1, aurelia_dependency_injection_1, style_engine_1, design_attributes_1, ux_icon_map_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxIcon = (function () {
        function UxIcon(element, resources, styleEngine, logger) {
            this.element = element;
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.logger = logger;
            this.icon = undefined;
        }
        UxIcon.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxIcon.prototype.bind = function () {
            if (this.size) {
                this.theme.size = this.size;
            }
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
            if (this.icon) {
                this.changeIcon(this.icon);
            }
        };
        UxIcon.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        UxIcon.prototype.iconChanged = function (newValue) {
            this.changeIcon(newValue);
        };
        UxIcon.prototype.changeIcon = function (icon) {
            var iconSet = ux_icon_map_1.default.Map.find(function (set) { return set.name === icon; });
            if (iconSet) {
                // todo: add logic to switch set being used based on design language
                // after adding icon sets for said languages such as ios
                this.element.innerHTML = iconSet.material;
            }
            else {
                this.logger.error('ux-icon: no matching icon found', this.element);
            }
        };
        return UxIcon;
    }());
    __decorate([
        aurelia_templating_1.bindable
    ], UxIcon.prototype, "size", void 0);
    __decorate([
        aurelia_templating_1.bindable
    ], UxIcon.prototype, "theme", void 0);
    __decorate([
        aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
    ], UxIcon.prototype, "icon", void 0);
    UxIcon = __decorate([
        aurelia_dependency_injection_1.inject(Element, aurelia_templating_1.ViewResources, style_engine_1.StyleEngine, aurelia_logging_1.Logger),
        aurelia_templating_1.customElement('ux-icon'),
        aurelia_templating_1.processAttributes(design_attributes_1.processDesignAttributes)
    ], UxIcon);
    exports.UxIcon = UxIcon;
});

define('aurelia-ux/icons/ux-icon-map',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IconMap = (function () {
        function IconMap() {
        }
        Object.defineProperty(IconMap, "Map", {
            get: function () {
                // tslint:disable:max-line-length
                return [
                    {
                        name: '3d_rotation',
                        material: '<svg viewBox="0 0 24 24"><path d="M7.52 21.48A10.487 10.487 0 0 1 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08a1.07 1.07 0 0 1-.4-.24.99.99 0 0 1-.26-.37c-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56a1.67 1.67 0 0 0-.23-.51c-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31a2.098 2.098 0 0 0 .89-.75c.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96a1.78 1.78 0 0 0-.51-.69c-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49a.87.87 0 0 1-.25.37c-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></svg>'
                    },
                    {
                        name: 'accessibility',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></svg>'
                    },
                    {
                        name: 'accessible',
                        material: '<svg viewBox="0 0 24 24"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1a5 5 0 1 0 5.9 5.9h-2.07z"></path></svg>'
                    },
                    {
                        name: 'account_balance',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></svg>'
                    },
                    {
                        name: 'account_balance_wallet',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14c1.1 0 2 .9 2 2v1h-9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>'
                    },
                    {
                        name: 'account_box',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 5v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></svg>'
                    },
                    {
                        name: 'account_circle',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"></path></svg>'
                    },
                    {
                        name: 'add_shopping_cart',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></svg>'
                    },
                    {
                        name: 'alarm',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>'
                    },
                    {
                        name: 'alarm_add',
                        material: '<svg viewBox="0 0 24 24"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></svg>'
                    },
                    {
                        name: 'alarm_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92a9 9 0 0 0-9-9c-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8A8.964 8.964 0 0 0 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></svg>'
                    },
                    {
                        name: 'alarm_on',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></svg>'
                    },
                    {
                        name: 'all_out',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></svg>'
                    },
                    {
                        name: 'android',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></svg>'
                    },
                    {
                        name: 'announcement',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></svg>'
                    },
                    {
                        name: 'aspect_ratio',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></svg>'
                    },
                    {
                        name: 'assessment',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></svg>'
                    },
                    {
                        name: 'assignment',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></svg>'
                    },
                    {
                        name: 'assignment_ind',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></svg>'
                    },
                    {
                        name: 'assignment_late',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>'
                    },
                    {
                        name: 'assignment_return',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></svg>'
                    },
                    {
                        name: 'assignment_returned',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></svg>'
                    },
                    {
                        name: 'assignment_turned_in',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>'
                    },
                    {
                        name: 'autorenew',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.87 5.87 0 0 1 6 12c0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></svg>'
                    },
                    {
                        name: 'backup',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></svg>'
                    },
                    {
                        name: 'book',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></svg>'
                    },
                    {
                        name: 'bookmark',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'bookmark_border',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg>'
                    },
                    {
                        name: 'bug_report',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 8h-2.81a5.985 5.985 0 0 0-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></svg>'
                    },
                    {
                        name: 'build',
                        material: '<svg viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></svg>'
                    },
                    {
                        name: 'cached',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6a5.87 5.87 0 0 1-2.8-.7l-1.46 1.46A7.93 7.93 0 0 0 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0 0 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></svg>'
                    },
                    {
                        name: 'camera_enhance',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></svg>'
                    },
                    {
                        name: 'card_giftcard',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68A3.01 3.01 0 0 0 9 2C7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></svg>'
                    },
                    {
                        name: 'card_membership',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></svg>'
                    },
                    {
                        name: 'card_travel',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></svg>'
                    },
                    {
                        name: 'change_history',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></svg>'
                    },
                    {
                        name: 'check_circle',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>'
                    },
                    {
                        name: 'chrome_reader_mode',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></svg>'
                    },
                    {
                        name: 'class',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></svg>'
                    },
                    {
                        name: 'code',
                        material: '<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></svg>'
                    },
                    {
                        name: 'compare_arrows',
                        material: '<svg viewBox="0 0 24 24"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></svg>'
                    },
                    {
                        name: 'copyright',
                        material: '<svg viewBox="0 0 24 24"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'credit_card',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></svg>'
                    },
                    {
                        name: 'dashboard',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg>'
                    },
                    {
                        name: 'date_range',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></svg>'
                    },
                    {
                        name: 'delete',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>'
                    },
                    {
                        name: 'delete_forever',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></svg>'
                    },
                    {
                        name: 'description',
                        material: '<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></svg>'
                    },
                    {
                        name: 'dns',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>'
                    },
                    {
                        name: 'done',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>'
                    },
                    {
                        name: 'done_all',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></svg>'
                    },
                    {
                        name: 'donut_large',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></svg>'
                    },
                    {
                        name: 'donut_small',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></svg>'
                    },
                    {
                        name: 'eject',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></svg>'
                    },
                    {
                        name: 'euro_symbol',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 18.5A6.48 6.48 0 0 1 9.24 15H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24A6.49 6.49 0 0 1 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.955 8.955 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06a8.262 8.262 0 0 0 0 2H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></svg>'
                    },
                    {
                        name: 'event',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></svg>'
                    },
                    {
                        name: 'event_seat',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></svg>'
                    },
                    {
                        name: 'exit_to_app',
                        material: '<svg viewBox="0 0 24 24"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'explore',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></svg>'
                    },
                    {
                        name: 'extension',
                        material: '<svg viewBox="0 0 24 24"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5a2.7 2.7 0 0 1 2.7-2.7 2.7 2.7 0 0 1 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z"></path></svg>'
                    },
                    {
                        name: 'face',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0 0 10.41 3.97c.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'favorite',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>'
                    },
                    {
                        name: 'favorite_border',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>'
                    },
                    {
                        name: 'feedback',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></svg>'
                    },
                    {
                        name: 'find_in_page',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></svg>'
                    },
                    {
                        name: 'find_replace',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05A6.976 6.976 0 0 0 11 4c-3.53 0-6.43 2.61-6.92 6H6.1A5 5 0 0 1 11 6zm5.64 9.14A6.89 6.89 0 0 0 17.92 12H15.9a5 5 0 0 1-4.9 4c-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05A6.976 6.976 0 0 0 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></svg>'
                    },
                    {
                        name: 'fingerprint',
                        material: '<svg viewBox="0 0 24 24"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41a.51.51 0 0 1-.68-.2.506.506 0 0 1 .2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67a.49.49 0 0 1-.44.28zM3.5 9.72a.5.5 0 0 1-.41-.79c.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25a.5.5 0 0 1-.12.7.5.5 0 0 1-.7-.12 9.388 9.388 0 0 0-3.39-2.94c-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07a.47.47 0 0 1-.35-.15c-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1a7.297 7.297 0 0 1-2.17-5.22c0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29a11.14 11.14 0 0 1-.73-3.96c0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></svg>'
                    },
                    {
                        name: 'flight_land',
                        material: '<svg viewBox="0 0 24 24"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></svg>'
                    },
                    {
                        name: 'flight_takeoff',
                        material: '<svg viewBox="0 0 24 24"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></svg>'
                    },
                    {
                        name: 'flip_to_back',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8a2 2 0 0 0-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7a2 2 0 0 0 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12a2 2 0 0 0 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></svg>'
                    },
                    {
                        name: 'flip_to_front',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3a2 2 0 0 0 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></svg>'
                    },
                    {
                        name: 'g_translate',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74a9.18 9.18 0 0 1-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></svg>'
                    },
                    {
                        name: 'gavel',
                        material: '<svg viewBox="0 0 24 24"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></svg>'
                    },
                    {
                        name: 'get_app',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>'
                    },
                    {
                        name: 'gif',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></svg>'
                    },
                    {
                        name: 'grade',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>'
                    },
                    {
                        name: 'group_work',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zM9.5 8a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0zm6.5 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>'
                    },
                    {
                        name: 'help',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg>'
                    },
                    {
                        name: 'help_outline',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14a4 4 0 0 0-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4z"></path></svg>'
                    },
                    {
                        name: 'highlight_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'history',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg>'
                    },
                    {
                        name: 'home',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>'
                    },
                    {
                        name: 'hourglass_empty',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></svg>'
                    },
                    {
                        name: 'hourglass_full',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></svg>'
                    },
                    {
                        name: 'http',
                        material: '<svg viewBox="0 0 24 24"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></svg>'
                    },
                    {
                        name: 'https',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></svg>'
                    },
                    {
                        name: 'important_devices',
                        material: '<svg viewBox="0 0 24 24"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12a2 2 0 0 0 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4a2 2 0 0 0-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></svg>'
                    },
                    {
                        name: 'info',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>'
                    },
                    {
                        name: 'info_outline',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></svg>'
                    },
                    {
                        name: 'input',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14a2 2 0 0 0-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></svg>'
                    },
                    {
                        name: 'invert_colors',
                        material: '<svg viewBox="0 0 24 24"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0 0 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></svg>'
                    },
                    {
                        name: 'label',
                        material: '<svg viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></svg>'
                    },
                    {
                        name: 'label_outline',
                        material: '<svg viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></svg>'
                    },
                    {
                        name: 'language',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>'
                    },
                    {
                        name: 'launch',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>'
                    },
                    {
                        name: 'lightbulb_outline',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>'
                    },
                    {
                        name: 'line_style',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></svg>'
                    },
                    {
                        name: 'line_weight',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></svg>'
                    },
                    {
                        name: 'list',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></svg>'
                    },
                    {
                        name: 'lock',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></svg>'
                    },
                    {
                        name: 'lock_open',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></svg>'
                    },
                    {
                        name: 'lock_outline',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></svg>'
                    },
                    {
                        name: 'loyalty',
                        material: '<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27A2.5 2.5 0 0 1 10.5 11c.69 0 1.32.28 1.77.74l.73.72.73-.73a2.5 2.5 0 0 1 3.54 3.54z"></path></svg>'
                    },
                    {
                        name: 'markunread_mailbox',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'motorcycle',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg>'
                    },
                    {
                        name: 'note_add',
                        material: '<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></svg>'
                    },
                    {
                        name: 'offline_pin',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></svg>'
                    },
                    {
                        name: 'opacity',
                        material: '<svg viewBox="0 0 24 24"><path d="M17.66 8L12 2.35 6.34 8A8.02 8.02 0 0 0 4 13.64c0 2 .78 4.11 2.34 5.67a7.99 7.99 0 0 0 11.32 0c1.56-1.56 2.34-3.67 2.34-5.67S19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></svg>'
                    },
                    {
                        name: 'open_in_browser',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></svg>'
                    },
                    {
                        name: 'open_in_new',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>'
                    },
                    {
                        name: 'open_with',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></svg>'
                    },
                    {
                        name: 'pageview',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.5 9a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></svg>'
                    },
                    {
                        name: 'pan_tool',
                        material: '<svg viewBox="0 0 24 24"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></svg>'
                    },
                    {
                        name: 'payment',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></svg>'
                    },
                    {
                        name: 'perm_camera_mic',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></svg>'
                    },
                    {
                        name: 'perm_contact_calendar',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></svg>'
                    },
                    {
                        name: 'perm_data_setting',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83a3.908 3.908 0 0 0 0 .98l-1.06.83a.26.26 0 0 0-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>'
                    },
                    {
                        name: 'perm_device_information',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></svg>'
                    },
                    {
                        name: 'perm_identity',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 5.9a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></svg>'
                    },
                    {
                        name: 'perm_media',
                        material: '<svg viewBox="0 0 24 24"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></svg>'
                    },
                    {
                        name: 'perm_phone_msg',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.074 15.074 0 0 1-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></svg>'
                    },
                    {
                        name: 'perm_scan_wifi',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></svg>'
                    },
                    {
                        name: 'pets',
                        material: '<svg viewBox="0 0 24 24"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></svg>'
                    },
                    {
                        name: 'picture_in_picture',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></svg>'
                    },
                    {
                        name: 'picture_in_picture_alt',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></svg>'
                    },
                    {
                        name: 'play_for_work',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></svg>'
                    },
                    {
                        name: 'polymer',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></svg>'
                    },
                    {
                        name: 'power_settings_new',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42A6.92 6.92 0 0 1 19 12c0 3.87-3.13 7-7 7A6.995 6.995 0 0 1 7.58 6.58L6.17 5.17A8.932 8.932 0 0 0 3 12a9 9 0 0 0 18 0c0-2.74-1.23-5.18-3.17-6.83z"></path></svg>'
                    },
                    {
                        name: 'pregnant_woman',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9a3.285 3.285 0 0 0-2-3c0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></svg>'
                    },
                    {
                        name: 'print',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></svg>'
                    },
                    {
                        name: 'query_builder',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>'
                    },
                    {
                        name: 'question_answer',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></svg>'
                    },
                    {
                        name: 'receipt',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></svg>'
                    },
                    {
                        name: 'record_voice_over',
                        material: '<svg viewBox="0 0 24 24"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></svg>'
                    },
                    {
                        name: 'redeem',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68A3.01 3.01 0 0 0 9 2C7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></svg>'
                    },
                    {
                        name: 'remove_shopping_cart',
                        material: '<svg viewBox="0 0 24 24"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38A1.997 1.997 0 0 0 17 22c.67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'reorder',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></svg>'
                    },
                    {
                        name: 'report_problem',
                        material: '<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg>'
                    },
                    {
                        name: 'restore',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg>'
                    },
                    {
                        name: 'restore_page',
                        material: '<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5a3.5 3.5 0 0 0-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></svg>'
                    },
                    {
                        name: 'room',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>'
                    },
                    {
                        name: 'rounded_corner',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></svg>'
                    },
                    {
                        name: 'rowing',
                        material: '<svg viewBox="0 0 24 24"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75a3 3 0 0 1-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></svg>'
                    },
                    {
                        name: 'schedule',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>'
                    },
                    {
                        name: 'search',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>'
                    },
                    {
                        name: 'settings',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></svg>'
                    },
                    {
                        name: 'settings_applications',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42a.353.353 0 0 1 .08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16a.353.353 0 0 1-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></svg>'
                    },
                    {
                        name: 'settings_backup_restore',
                        material: '<svg viewBox="0 0 24 24"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9a9 9 0 0 0-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7a6.995 6.995 0 0 1-11.06 5.7l-1.42 1.44A9 9 0 1 0 12 3z"></path></svg>'
                    },
                    {
                        name: 'settings_bluetooth',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></svg>'
                    },
                    {
                        name: 'settings_brightness',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></svg>'
                    },
                    {
                        name: 'settings_cell',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></svg>'
                    },
                    {
                        name: 'settings_ethernet',
                        material: '<svg viewBox="0 0 24 24"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></svg>'
                    },
                    {
                        name: 'settings_input_antenna',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29a2.5 2.5 0 0 0-5 0c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2a9 9 0 0 1 18 0h2c0-6.07-4.93-11-11-11z"></path></svg>'
                    },
                    {
                        name: 'settings_input_component',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></svg>'
                    },
                    {
                        name: 'settings_input_composite',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></svg>'
                    },
                    {
                        name: 'settings_input_hdmi',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></svg>'
                    },
                    {
                        name: 'settings_input_svideo',
                        material: '<svg viewBox="0 0 24 24"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></svg>'
                    },
                    {
                        name: 'settings_overscan',
                        material: '<svg viewBox="0 0 24 24"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></svg>'
                    },
                    {
                        name: 'settings_phone',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.074 15.074 0 0 1-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></svg>'
                    },
                    {
                        name: 'settings_power',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45A5.97 5.97 0 0 1 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44A7.96 7.96 0 0 0 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8a7.96 7.96 0 0 0-3.44-6.56zM15 24h2v-2h-2v2z"></path></svg>'
                    },
                    {
                        name: 'settings_remote',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41a5.022 5.022 0 0 1 7.08 0l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></svg>'
                    },
                    {
                        name: 'settings_voice',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></svg>'
                    },
                    {
                        name: 'shop',
                        material: '<svg viewBox="0 0 24 24"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></svg>'
                    },
                    {
                        name: 'shop_two',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></svg>'
                    },
                    {
                        name: 'shopping_basket',
                        material: '<svg viewBox="0 0 24 24"><path d="M17.21 9l-4.38-6.56a.993.993 0 0 0-.83-.42c-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>'
                    },
                    {
                        name: 'shopping_cart',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'speaker_notes',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></svg>'
                    },
                    {
                        name: 'speaker_notes_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'spellcheck',
                        material: '<svg viewBox="0 0 24 24"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></svg>'
                    },
                    {
                        name: 'stars',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></svg>'
                    },
                    {
                        name: 'store',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></svg>'
                    },
                    {
                        name: 'subject',
                        material: '<svg viewBox="0 0 24 24"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></svg>'
                    },
                    {
                        name: 'supervisor_account',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7a2.5 2.5 0 0 0 0 5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></svg>'
                    },
                    {
                        name: 'swap_horiz',
                        material: '<svg viewBox="0 0 24 24"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></svg>'
                    },
                    {
                        name: 'swap_vert',
                        material: '<svg viewBox="0 0 24 24"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></svg>'
                    },
                    {
                        name: 'swap_vertical_circle',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></svg>'
                    },
                    {
                        name: 'system_update_alt',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'tab',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></svg>'
                    },
                    {
                        name: 'tab_unselected',
                        material: '<svg viewBox="0 0 24 24"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></svg>'
                    },
                    {
                        name: 'theaters',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></svg>'
                    },
                    {
                        name: 'thumb_down',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></svg>'
                    },
                    {
                        name: 'thumb_up',
                        material: '<svg viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></svg>'
                    },
                    {
                        name: 'thumbs_up_down',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></svg>'
                    },
                    {
                        name: 'timeline',
                        material: '<svg viewBox="0 0 24 24"><path d="M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 0 1-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56A1.7 1.7 0 0 1 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></svg>'
                    },
                    {
                        name: 'toc',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></svg>'
                    },
                    {
                        name: 'today',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg>'
                    },
                    {
                        name: 'toll',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12a5.99 5.99 0 0 1 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09A5.99 5.99 0 0 1 3 12z"></path></svg>'
                    },
                    {
                        name: 'touch_app',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></svg>'
                    },
                    {
                        name: 'track_changes',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.07 4.93l-1.41 1.41A8.014 8.014 0 0 1 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10a9.97 9.97 0 0 0-2.93-7.07z"></path></svg>'
                    },
                    {
                        name: 'translate',
                        material: '<svg viewBox="0 0 24 24"><path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></svg>'
                    },
                    {
                        name: 'trending_down',
                        material: '<svg viewBox="0 0 24 24"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></svg>'
                    },
                    {
                        name: 'trending_flat',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 12l-4-4v3H3v2h15v3z"></path></svg>'
                    },
                    {
                        name: 'trending_up',
                        material: '<svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>'
                    },
                    {
                        name: 'turned_in',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'turned_in_not',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg>'
                    },
                    {
                        name: 'update',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1a6.875 6.875 0 0 0 0 9.79 7.02 7.02 0 0 0 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58a8.987 8.987 0 0 1 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></svg>'
                    },
                    {
                        name: 'verified_user',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>'
                    },
                    {
                        name: 'view_agenda',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></svg>'
                    },
                    {
                        name: 'view_array',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></svg>'
                    },
                    {
                        name: 'view_carousel',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></svg>'
                    },
                    {
                        name: 'view_column',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></svg>'
                    },
                    {
                        name: 'view_day',
                        material: '<svg viewBox="0 0 24 24"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></svg>'
                    },
                    {
                        name: 'view_headline',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></svg>'
                    },
                    {
                        name: 'view_list',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></svg>'
                    },
                    {
                        name: 'view_module',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></svg>'
                    },
                    {
                        name: 'view_quilt',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></svg>'
                    },
                    {
                        name: 'view_stream',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></svg>'
                    },
                    {
                        name: 'view_week',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></svg>'
                    },
                    {
                        name: 'visibility',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>'
                    },
                    {
                        name: 'visibility_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></svg>'
                    },
                    {
                        name: 'watch_later',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></svg>'
                    },
                    {
                        name: 'work',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></svg>'
                    },
                    {
                        name: 'youtube_searched_for',
                        material: '<svg viewBox="0 0 24 24"><path d="M17.01 14h-.8l-.27-.27a6.45 6.45 0 0 0 1.57-4.23c0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51a4.5 4.5 0 0 1 9 0 4.507 4.507 0 0 1-6.32 4.12L7.71 15.1a6.474 6.474 0 0 0 7.52-.67l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></svg>'
                    },
                    {
                        name: 'zoom_in',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></svg>'
                    },
                    {
                        name: 'zoom_out',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></svg>'
                    },
                    {
                        name: 'add_alert',
                        material: '<svg viewBox="0 0 24 24"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72A6.873 6.873 0 0 0 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></svg>'
                    },
                    {
                        name: 'error',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>'
                    },
                    {
                        name: 'error_outline',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'warning',
                        material: '<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg>'
                    },
                    {
                        name: 'add_to_queue',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm0 14H3V5h18v12zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3h3z"></path></svg>'
                    },
                    {
                        name: 'airplay',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'album',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path></svg>'
                    },
                    {
                        name: 'art_track',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"></path></svg>'
                    },
                    {
                        name: 'av_timer',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9a9 9 0 0 0 0-18h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"></path></svg>'
                    },
                    {
                        name: 'branding_watermark',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z"></path></svg>'
                    },
                    {
                        name: 'call_to_action',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"></path></svg>'
                    },
                    {
                        name: 'closed_caption',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"></path></svg>'
                    },
                    {
                        name: 'equalizer',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path></svg>'
                    },
                    {
                        name: 'explicit',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"></path></svg>'
                    },
                    {
                        name: 'fast_forward',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path></svg>'
                    },
                    {
                        name: 'fast_rewind',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path></svg>'
                    },
                    {
                        name: 'featured_play_list',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z"></path></svg>'
                    },
                    {
                        name: 'featured_video',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z"></path></svg>'
                    },
                    {
                        name: 'fiber_dvr',
                        material: '<svg viewBox="0 0 24 24"><path d="M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 11.5c0 .6-.4 1.15-.9 1.4L21 15h-1.5l-.85-2H17.5v2H16V9h3.5c.85 0 1.5.65 1.5 1.5v1z"></path></svg>'
                    },
                    {
                        name: 'fiber_manual_record',
                        material: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"></circle></svg>'
                    },
                    {
                        name: 'fiber_new',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"></path></svg>'
                    },
                    {
                        name: 'fiber_pin',
                        material: '<svg viewBox="0 0 24 24"><path d="M5.5 10.5h2v1h-2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM9 11.5c0 .85-.65 1.5-1.5 1.5h-2v2H4V9h3.5c.85 0 1.5.65 1.5 1.5v1zm3.5 3.5H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z"></path></svg>'
                    },
                    {
                        name: 'fiber_smart_record',
                        material: '<svg viewBox="0 0 24 24"><g><circle cx="9" cy="12" r="8"></circle><path d="M17 4.26v2.09a5.99 5.99 0 0 1 0 11.3v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"></path></g></svg>'
                    },
                    {
                        name: 'forward_10',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></svg>'
                    },
                    {
                        name: 'forward_30',
                        material: '<svg viewBox="0 0 24 24"><path d="M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z"></path></svg>'
                    },
                    {
                        name: 'forward_5',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z"></path></svg>'
                    },
                    {
                        name: 'games',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"></path></svg>'
                    },
                    {
                        name: 'hd',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"></path></svg>'
                    },
                    {
                        name: 'hearing',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55A4 4 0 0 0 21 18h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0z"></path></svg>'
                    },
                    {
                        name: 'high_quality',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z"></path></svg>'
                    },
                    {
                        name: 'library_add',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></svg>'
                    },
                    {
                        name: 'library_books',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"></path></svg>'
                    },
                    {
                        name: 'library_music',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path></svg>'
                    },
                    {
                        name: 'loop',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></svg>'
                    },
                    {
                        name: 'mic',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></svg>'
                    },
                    {
                        name: 'mic_none',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></svg>'
                    },
                    {
                        name: 'mic_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path></svg>'
                    },
                    {
                        name: 'movie',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path></svg>'
                    },
                    {
                        name: 'music_video',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03A3.003 3.003 0 0 1 11 18c-1.66 0-3-1.34-3-3z"></path></svg>'
                    },
                    {
                        name: 'new_releases',
                        material: '<svg viewBox="0 0 24 24"><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>'
                    },
                    {
                        name: 'not_interested',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></svg>'
                    },
                    {
                        name: 'note',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"></path></svg>'
                    },
                    {
                        name: 'pause',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>'
                    },
                    {
                        name: 'pause_circle_filled',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"></path></svg>'
                    },
                    {
                        name: 'pause_circle_outline',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"></path></svg>'
                    },
                    {
                        name: 'play_arrow',
                        material: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>'
                    },
                    {
                        name: 'play_circle_filled',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>'
                    },
                    {
                        name: 'play_circle_outline',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'playlist_add',
                        material: '<svg viewBox="0 0 24 24"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path></svg>'
                    },
                    {
                        name: 'playlist_add_check',
                        material: '<svg viewBox="0 0 24 24"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"></path></svg>'
                    },
                    {
                        name: 'playlist_play',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"></path></svg>'
                    },
                    {
                        name: 'queue',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></svg>'
                    },
                    {
                        name: 'queue_music',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"></path></svg>'
                    },
                    {
                        name: 'queue_play_next',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5a2 2 0 0 0-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"></path></svg>'
                    },
                    {
                        name: 'radio',
                        material: '<svg viewBox="0 0 24 24"><path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"></path></svg>'
                    },
                    {
                        name: 'recent_actors',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z"></path></svg>'
                    },
                    {
                        name: 'remove_from_queue',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z"></path></svg>'
                    },
                    {
                        name: 'repeat',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path></svg>'
                    },
                    {
                        name: 'repeat_one',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"></path></svg>'
                    },
                    {
                        name: 'replay_10',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></svg>'
                    },
                    {
                        name: 'replay',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></svg>'
                    },
                    {
                        name: 'replay_30',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></svg>'
                    },
                    {
                        name: 'replay_5',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z"></path></svg>'
                    },
                    {
                        name: 'shuffle',
                        material: '<svg viewBox="0 0 24 24"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"></path></svg>'
                    },
                    {
                        name: 'skip_next',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></svg>'
                    },
                    {
                        name: 'skip_previous',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></svg>'
                    },
                    {
                        name: 'slow_motion_video',
                        material: '<svg viewBox="0 0 24 24"><path d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69A7.94 7.94 0 0 1 11 4.07zM5.69 7.1L4.26 5.68A9.95 9.95 0 0 0 2.05 11h2.02a7.94 7.94 0 0 1 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43A7.868 7.868 0 0 1 4.07 13zm1.61 6.74A9.98 9.98 0 0 0 11 21.95v-2.02a7.94 7.94 0 0 1-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z"></path></svg>'
                    },
                    {
                        name: 'snooze',
                        material: '<svg viewBox="0 0 24 24"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z"></path></svg>'
                    },
                    {
                        name: 'sort_by_alpha',
                        material: '<svg viewBox="0 0 24 24"><path d="M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"></path></svg>'
                    },
                    {
                        name: 'stop',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 6h12v12H6z"></path></svg>'
                    },
                    {
                        name: 'subscriptions',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"></path></svg>'
                    },
                    {
                        name: 'subtitles',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"></path></svg>'
                    },
                    {
                        name: 'surround_sound',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41A7.91 7.91 0 0 1 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41A7.91 7.91 0 0 1 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'video_call',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path></svg>'
                    },
                    {
                        name: 'video_label',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"></path></svg>'
                    },
                    {
                        name: 'video_library',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></svg>'
                    },
                    {
                        name: 'videocam',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></svg>'
                    },
                    {
                        name: 'videocam_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"></path></svg>'
                    },
                    {
                        name: 'volume_down',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.5 12A4.5 4.5 0 0 0 16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"></path></svg>'
                    },
                    {
                        name: 'volume_mute',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 9v6h4l5 5V4l-5 5H7z"></path></svg>'
                    },
                    {
                        name: 'volume_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></svg>'
                    },
                    {
                        name: 'volume_up',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>'
                    },
                    {
                        name: 'web',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path></svg>'
                    },
                    {
                        name: 'web_asset',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm0 14H5V8h14v10z"></path></svg>'
                    },
                    {
                        name: 'business',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></svg>'
                    },
                    {
                        name: 'call',
                        material: '<svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>'
                    },
                    {
                        name: 'call_end',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.956.956 0 0 1-.29-.7c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28a11.27 11.27 0 0 0-2.67-1.85.996.996 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"></path></svg>'
                    },
                    {
                        name: 'call_made',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"></path></svg>'
                    },
                    {
                        name: 'call_merge',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"></path></svg>'
                    },
                    {
                        name: 'call_missed',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z"></path></svg>'
                    },
                    {
                        name: 'call_missed_outgoing',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"></path></svg>'
                    },
                    {
                        name: 'call_received',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"></path></svg>'
                    },
                    {
                        name: 'call_split',
                        material: '<svg viewBox="0 0 24 24"><path d="M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z"></path></svg>'
                    },
                    {
                        name: 'chat',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"></path></svg>'
                    },
                    {
                        name: 'chat_bubble',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'chat_bubble_outline',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"></path></svg>'
                    },
                    {
                        name: 'clear_all',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"></path></svg>'
                    },
                    {
                        name: 'comment',
                        material: '<svg viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path></svg>'
                    },
                    {
                        name: 'contact_mail',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z"></path></svg>'
                    },
                    {
                        name: 'contact_phone',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99A7.512 7.512 0 0 1 16.28 14c-.18-.64-.28-1.31-.28-2s.1-1.36.28-2a7.474 7.474 0 0 1 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"></path></svg>'
                    },
                    {
                        name: 'contacts',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"></path></svg>'
                    },
                    {
                        name: 'dialer_sip',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 3h-1v5h1V3zm-2 2h-2V4h2V3h-3v3h2v1h-2v1h3V5zm3-2v5h1V6h2V3h-3zm2 2h-1V4h1v1zm0 10.5c-1.25 0-2.45-.2-3.57-.57a.998.998 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21c.27-.26.35-.65.24-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"></path></svg>'
                    },
                    {
                        name: 'dialpad',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'email',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>'
                    },
                    {
                        name: 'forum',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></svg>'
                    },
                    {
                        name: 'import_contacts',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"></path></svg>'
                    },
                    {
                        name: 'import_export',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"></path></svg>'
                    },
                    {
                        name: 'invert_colors_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M20.65 20.87l-2.35-2.35-6.3-6.29-3.56-3.57-1.42-1.41L4.27 4.5 3 5.77l2.78 2.78a8.005 8.005 0 0 0 .56 10.69A7.98 7.98 0 0 0 12 21.58c1.79 0 3.57-.59 5.03-1.78l2.7 2.7L21 21.23l-.35-.36zM12 19.59c-1.6 0-3.11-.62-4.24-1.76A5.945 5.945 0 0 1 6 13.59c0-1.32.43-2.57 1.21-3.6L12 14.77v4.82zM12 5.1v4.58l7.25 7.26c1.37-2.96.84-6.57-1.6-9.01L12 2.27l-3.7 3.7 1.41 1.41L12 5.1z"></path></svg>'
                    },
                    {
                        name: 'live_help',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg>'
                    },
                    {
                        name: 'location_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 6.5A2.5 2.5 0 0 1 14.5 9c0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7a7 7 0 0 0-5.04 2.15l3.19 3.19c.46-.52 1.11-.84 1.85-.84zm4.37 9.6l-4.63-4.63-.11-.11L3.27 3 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21 20 19.73l-3.63-3.63z"></path></svg>'
                    },
                    {
                        name: 'location_on',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>'
                    },
                    {
                        name: 'mail_outline',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></svg>'
                    },
                    {
                        name: 'message',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path></svg>'
                    },
                    {
                        name: 'no_sim',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"></path></svg>'
                    },
                    {
                        name: 'phone',
                        material: '<svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>'
                    },
                    {
                        name: 'phonelink_erase',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 8.2l-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'phonelink_lock',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-8.2 10V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3zm-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V11z"></path></svg>'
                    },
                    {
                        name: 'phonelink_ring',
                        material: '<svg viewBox="0 0 24 24"><path d="M20.1 7.7l-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5zM18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3zM14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H4V4h10v16z"></path></svg>'
                    },
                    {
                        name: 'phonelink_setup',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.8 12.5v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.2-.3-.1l-1.3.4c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.3-.2H7c-.1 0-.2.1-.3.2l-.2 1.3c-.3.1-.6.3-.9.5l-1.3-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.2-.1.3-.1.4l1 1.7c.1.1.2.2.3.1l1.4-.4c.3.2.6.4.9.5l.2 1.3c-.1.1.1.2.2.2h2c.1 0 .2-.1.3-.2l.2-1.3c.3-.1.6-.3.9-.5l1.3.5c.1 0 .2 0 .3-.1l1-1.7c.1-.1 0-.2-.1-.3l-1.1-.9zM8 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'portable_wifi_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M17.56 14.24c.28-.69.44-1.45.44-2.24 0-3.31-2.69-6-6-6-.79 0-1.55.16-2.24.44l1.62 1.62c.2-.03.41-.06.62-.06a4 4 0 0 1 3.95 4.63l1.61 1.61zM12 4c4.42 0 8 3.58 8 8 0 1.35-.35 2.62-.95 3.74l1.47 1.47A9.86 9.86 0 0 0 22 12c0-5.52-4.48-10-10-10-1.91 0-3.69.55-5.21 1.47l1.46 1.46A8.04 8.04 0 0 1 12 4zM3.27 2.5L2 3.77l2.1 2.1C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02.01.01 7.51 7.51L21 20.23 4.27 3.5l-1-1z"></path></svg>'
                    },
                    {
                        name: 'present_to_all',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z"></path></svg>'
                    },
                    {
                        name: 'ring_volume',
                        material: '<svg viewBox="0 0 24 24"><path d="M23.71 16.67A16.97 16.97 0 0 0 12 12C7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.66 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71a.99.99 0 0 0-.29-.7zM21.16 6.26l-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM13 2h-2v5h2V2zM6.4 9.81L7.81 8.4 4.26 4.84 2.84 6.26c.11.03 3.56 3.55 3.56 3.55z"></path></svg>'
                    },
                    {
                        name: 'rss_feed',
                        material: '<svg viewBox="0 0 24 24"><circle cx="6.18" cy="17.82" r="2.18"></circle><path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path></svg>'
                    },
                    {
                        name: 'screen_share',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z"></path></svg>'
                    },
                    {
                        name: 'speaker_phone',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 7.07L8.43 8.5c.91-.91 2.18-1.48 3.57-1.48s2.66.57 3.57 1.48L17 7.07C15.72 5.79 13.95 5 12 5s-3.72.79-5 2.07zM12 1C8.98 1 6.24 2.23 4.25 4.21l1.41 1.41C7.28 4 9.53 3 12 3s4.72 1 6.34 2.62l1.41-1.41A10.963 10.963 0 0 0 12 1zm2.86 9.01L9.14 10C8.51 10 8 10.51 8 11.14v9.71c0 .63.51 1.14 1.14 1.14h5.71c.63 0 1.14-.51 1.14-1.14v-9.71c.01-.63-.5-1.13-1.13-1.13zM15 20H9v-8h6v8z"></path></svg>'
                    },
                    {
                        name: 'stay_current_landscape',
                        material: '<svg viewBox="0 0 24 24"><path d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"></path></svg>'
                    },
                    {
                        name: 'stay_current_portrait',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></svg>'
                    },
                    {
                        name: 'stay_primary_landscape',
                        material: '<svg viewBox="0 0 24 24"><path d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"></path></svg>'
                    },
                    {
                        name: 'stay_primary_portrait',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></svg>'
                    },
                    {
                        name: 'stop_screen_share',
                        material: '<svg viewBox="0 0 24 24"><path d="M21.22 18.02l2 2H24v-2h-2.78zm.77-2l.01-10a2 2 0 0 0-2-2H7.22l5.23 5.23c.18-.04.36-.07.55-.1V7.02l4 3.73-1.58 1.47 5.54 5.54c.61-.33 1.03-.99 1.03-1.74zM2.39 1.73L1.11 3l1.54 1.54c-.4.36-.65.89-.65 1.48v10a2 2 0 0 0 2 2H0v2h18.13l2.71 2.71 1.27-1.27L2.39 1.73zM7 15.02c.31-1.48.92-2.95 2.07-4.06l1.59 1.59c-1.54.38-2.7 1.18-3.66 2.47z"></path></svg>'
                    },
                    {
                        name: 'swap_calls',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z"></path></svg>'
                    },
                    {
                        name: 'textsms',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"></path></svg>'
                    },
                    {
                        name: 'voicemail',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.5 6C15.46 6 13 8.46 13 11.5c0 1.33.47 2.55 1.26 3.5H9.74A5.45 5.45 0 0 0 11 11.5C11 8.46 8.54 6 5.5 6S0 8.46 0 11.5 2.46 17 5.5 17h13c3.04 0 5.5-2.46 5.5-5.5S21.54 6 18.5 6zm-13 9C3.57 15 2 13.43 2 11.5S3.57 8 5.5 8 9 9.57 9 11.5 7.43 15 5.5 15zm13 0c-1.93 0-3.5-1.57-3.5-3.5S16.57 8 18.5 8 22 9.57 22 11.5 20.43 15 18.5 15z"></path></svg>'
                    },
                    {
                        name: 'vpn_key',
                        material: '<svg viewBox="0 0 24 24"><path d="M12.65 10A5.99 5.99 0 0 0 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 0 0 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>'
                    },
                    {
                        name: 'add',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>'
                    },
                    {
                        name: 'add_box',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>'
                    },
                    {
                        name: 'add_circle',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>'
                    },
                    {
                        name: 'add_circle_outline',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'archive',
                        material: '<svg viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68A1.45 1.45 0 0 0 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></svg>'
                    },
                    {
                        name: 'backspace',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></svg>'
                    },
                    {
                        name: 'block',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'clear',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>'
                    },
                    {
                        name: 'content_copy',
                        material: '<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg>'
                    },
                    {
                        name: 'content_cut',
                        material: '<svg viewBox="0 0 24 24"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></svg>'
                    },
                    {
                        name: 'content_paste',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></svg>'
                    },
                    {
                        name: 'create',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>'
                    },
                    {
                        name: 'delete_sweep',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></svg>'
                    },
                    {
                        name: 'drafts',
                        material: '<svg viewBox="0 0 24 24"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></svg>'
                    },
                    {
                        name: 'filter_list',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></svg>'
                    },
                    {
                        name: 'flag',
                        material: '<svg viewBox="0 0 24 24"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></svg>'
                    },
                    {
                        name: 'font_download',
                        material: '<svg viewBox="0 0 24 24"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></svg>'
                    },
                    {
                        name: 'forward',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></svg>'
                    },
                    {
                        name: 'gesture',
                        material: '<svg viewBox="0 0 24 24"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></svg>'
                    },
                    {
                        name: 'inbox',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></svg>'
                    },
                    {
                        name: 'link',
                        material: '<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>'
                    },
                    {
                        name: 'low_priority',
                        material: '<svg viewBox="0 0 24 24"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></svg>'
                    },
                    {
                        name: 'mail',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>'
                    },
                    {
                        name: 'markunread',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>'
                    },
                    {
                        name: 'move_to_inbox',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></svg>'
                    },
                    {
                        name: 'next_week',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></svg>'
                    },
                    {
                        name: 'redo',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></svg>'
                    },
                    {
                        name: 'remove',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"></path></svg>'
                    },
                    {
                        name: 'remove_circle',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></svg>'
                    },
                    {
                        name: 'remove_circle_outline',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'reply',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></svg>'
                    },
                    {
                        name: 'reply_all',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></svg>'
                    },
                    {
                        name: 'report',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></svg>'
                    },
                    {
                        name: 'save',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></svg>'
                    },
                    {
                        name: 'select_all',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></svg>'
                    },
                    {
                        name: 'send',
                        material: '<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>'
                    },
                    {
                        name: 'sort',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></svg>'
                    },
                    {
                        name: 'text_format',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></svg>'
                    },
                    {
                        name: 'unarchive',
                        material: '<svg viewBox="0 0 24 24"><path d="M20.55 5.22l-1.39-1.68A1.51 1.51 0 0 0 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></svg>'
                    },
                    {
                        name: 'undo',
                        material: '<svg viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></svg>'
                    },
                    {
                        name: 'weekend',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'access_alarm',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>'
                    },
                    {
                        name: 'access_alarms',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 5.7l-4.6-3.9-1.3 1.5 4.6 3.9L22 5.7zM7.9 3.4L6.6 1.9 2 5.7l1.3 1.5 4.6-3.8zM12.5 8H11v6l4.7 2.9.8-1.2-4-2.4V8zM12 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"></path></svg>'
                    },
                    {
                        name: 'access_time',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>'
                    },
                    {
                        name: 'add_alarm',
                        material: '<svg viewBox="0 0 24 24"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></svg>'
                    },
                    {
                        name: 'airplanemode_active',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path></svg>'
                    },
                    {
                        name: 'airplanemode_inactive',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v3.68l7.83 7.83L21 16v-2l-8-5zM3 5.27l4.99 4.99L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-3.73L18.73 21 20 19.73 4.27 4 3 5.27z"></path></svg>'
                    },
                    {
                        name: 'battery_20',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z"></path><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z"></path></svg>'
                    },
                    {
                        name: 'battery_30',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z"></path><path d="M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z"></path></svg>'
                    },
                    {
                        name: 'battery_50',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V13h10V5.33z"></path><path d="M7 13v7.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13H7z"></path></svg>'
                    },
                    {
                        name: 'battery_60',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10V5.33z"></path><path d="M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11H7z"></path></svg>'
                    },
                    {
                        name: 'battery_80',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h10V5.33z"></path><path d="M7 9v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9H7z"></path></svg>'
                    },
                    {
                        name: 'battery_90',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h10V5.33z"></path><path d="M7 8v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8H7z"></path></svg>'
                    },
                    {
                        name: 'battery_alert',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z"></path></svg>'
                    },
                    {
                        name: 'battery_charging_20',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z"></path><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z"></path></svg>'
                    },
                    {
                        name: 'battery_charging_30',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v9.17h2L13 7v5.5h2l-1.07 2H17V5.33C17 4.6 16.4 4 15.67 4z"></path><path d="M11 20v-5.5H7v6.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V14.5h-3.07L11 20z"></path></svg>'
                    },
                    {
                        name: 'battery_charging_50',
                        material: '<svg viewBox="0 0 24 24"><path d="M14.47 13.5L11 20v-5.5H9l.53-1H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5h-2.53z"></path><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53L13 7v5.5h2l-.53 1H17V5.33C17 4.6 16.4 4 15.67 4z"></path></svg>'
                    },
                    {
                        name: 'battery_charging_60',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h3.87L13 7v4h4V5.33C17 4.6 16.4 4 15.67 4z"></path><path d="M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11h-4v1.5z"></path></svg>'
                    },
                    {
                        name: 'battery_charging_80',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h4.93L13 7v2h4V5.33C17 4.6 16.4 4 15.67 4z"></path><path d="M13 12.5h2L11 20v-5.5H9L11.93 9H7v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9h-4v3.5z"></path></svg>'
                    },
                    {
                        name: 'battery_charging_90',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h5.47L13 7v1h4V5.33C17 4.6 16.4 4 15.67 4z"></path><path d="M13 12.5h2L11 20v-5.5H9L12.47 8H7v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8h-4v4.5z"></path></svg>'
                    },
                    {
                        name: 'battery_charging_full',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"></path></svg>'
                    },
                    {
                        name: 'battery_full',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"></path></svg>'
                    },
                    {
                        name: 'battery_std',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"></path></svg>'
                    },
                    {
                        name: 'battery_unknown',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zm-2.72 13.95h-1.9v-1.9h1.9v1.9zm1.35-5.26s-.38.42-.67.71c-.48.48-.83 1.15-.83 1.6h-1.6c0-.83.46-1.52.93-2l.93-.94A1.498 1.498 0 0 0 12 9.5c-.83 0-1.5.67-1.5 1.5H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .66-.27 1.26-.7 1.69z"></path></svg>'
                    },
                    {
                        name: 'bluetooth',
                        material: '<svg viewBox="0 0 24 24"><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"></path></svg>'
                    },
                    {
                        name: 'bluetooth_connected',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 12l-2-2-2 2 2 2 2-2zm10.71-4.29L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88zM19 10l-2 2 2 2 2-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'bluetooth_disabled',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 5.83l1.88 1.88-1.6 1.6 1.41 1.41 3.02-3.02L12 2h-1v5.03l2 2v-3.2zM5.41 4L4 5.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l4.29-4.29 2.3 2.29L20 18.59 5.41 4zM13 18.17v-3.76l1.88 1.88L13 18.17z"></path></svg>'
                    },
                    {
                        name: 'bluetooth_searching',
                        material: '<svg viewBox="0 0 24 24"><path d="M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2a9.936 9.936 0 0 0 1.54-5.31c-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z"></path></svg>'
                    },
                    {
                        name: 'brightness_auto',
                        material: '<svg viewBox="0 0 24 24"><path d="M10.85 12.65h2.3L12 9l-1.15 3.65zM20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM14.3 16l-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9h-1.9z"></path></svg>'
                    },
                    {
                        name: 'brightness_high',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>'
                    },
                    {
                        name: 'brightness_low',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>'
                    },
                    {
                        name: 'brightness_medium',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>'
                    },
                    {
                        name: 'data_usage',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53A6.95 6.95 0 0 1 12 19z"></path></svg>'
                    },
                    {
                        name: 'developer_mode',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"></path></svg>'
                    },
                    {
                        name: 'devices',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></svg>'
                    },
                    {
                        name: 'dvr',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z"></path></svg>'
                    },
                    {
                        name: 'gps_fixed',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>'
                    },
                    {
                        name: 'gps_not_fixed',
                        material: '<svg viewBox="0 0 24 24"><path d="M20.94 11A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>'
                    },
                    {
                        name: 'gps_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M20.94 11A8.994 8.994 0 0 0 13 3.06V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5A6.995 6.995 0 0 1 19 12c0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04A8.914 8.914 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27a6.995 6.995 0 0 1-9.81-9.81l9.81 9.81z"></path></svg>'
                    },
                    {
                        name: 'graphic_eq',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z"></path></svg>'
                    },
                    {
                        name: 'location_disabled',
                        material: '<svg viewBox="0 0 24 24"><path d="M20.94 11A8.994 8.994 0 0 0 13 3.06V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5A6.995 6.995 0 0 1 19 12c0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04A8.914 8.914 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27a6.995 6.995 0 0 1-9.81-9.81l9.81 9.81z"></path></svg>'
                    },
                    {
                        name: 'location_searching',
                        material: '<svg viewBox="0 0 24 24"><path d="M20.94 11A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>'
                    },
                    {
                        name: 'network_cell',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M2 22h20V2z"></path><path d="M17 7L2 22h15z"></path></svg>'
                    },
                    {
                        name: 'network_wifi',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path><path d="M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z"></path></svg>'
                    },
                    {
                        name: 'nfc',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM18 6h-5c-1.1 0-2 .9-2 2v2.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V8h3v8H8V8h2V6H6v12h12V6z"></path></svg>'
                    },
                    {
                        name: 'screen_lock_landscape',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10zm-9-1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1a2 2 0 1 0-4 0v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1z"></path></svg>'
                    },
                    {
                        name: 'screen_lock_portrait',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 16h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1a2 2 0 1 0-4 0v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm.8-6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"></path></svg>'
                    },
                    {
                        name: 'screen_lock_rotation',
                        material: '<svg viewBox="0 0 24 24"><path d="M23.25 12.77l-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L4.51 8.17l5.66-5.66 2.1 2.1 1.41-1.41L11.23.75a1.49 1.49 0 0 0-2.12 0L2.75 7.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zM8.47 20.48A10.487 10.487 0 0 1 2.5 12H1c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.82-1.33 1.33zM16 9h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1v-.5a2.5 2.5 0 0 0-5 0V3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V3h-3.4v-.5z"></path></svg>'
                    },
                    {
                        name: 'screen_rotation',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77a1.49 1.49 0 0 0-2.12 0L1.75 8.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29A10.487 10.487 0 0 1 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"></path></svg>'
                    },
                    {
                        name: 'sd_storage',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"></path></svg>'
                    },
                    {
                        name: 'settings_system_daydream',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 16h6.5a2.5 2.5 0 0 0 0-5h-.05c-.24-1.69-1.69-3-3.45-3-1.4 0-2.6.83-3.16 2.02h-.16A2.994 2.994 0 0 0 6 13c0 1.66 1.34 3 3 3zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></svg>'
                    },
                    {
                        name: 'signal_cellular_0_bar',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M2 22h20V2z"></path></svg>'
                    },
                    {
                        name: 'signal_cellular_1_bar',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M2 22h20V2z"></path><path d="M12 12L2 22h10z"></path></svg>'
                    },
                    {
                        name: 'signal_cellular_2_bar',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M2 22h20V2z"></path><path d="M14 10L2 22h12z"></path></svg>'
                    },
                    {
                        name: 'signal_cellular_3_bar',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M2 22h20V2z"></path><path d="M17 7L2 22h15z"></path></svg>'
                    },
                    {
                        name: 'signal_cellular_4_bar',
                        material: '<svg viewBox="0 0 24 24"><path d="M2 22h20V2z"></path></svg>'
                    },
                    {
                        name: 'signal_cellular_connected_no_internet_0_bar',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"></path><path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z"></path></svg>'
                    },
                    {
                        name: 'signal_cellular_connected_no_internet_1_bar',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"></path><path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z"></path></svg>'
                    },
                    {
                        name: 'signal_cellular_connected_no_internet_2_bar',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"></path><path d="M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z"></path></svg>'
                    },
                    {
                        name: 'signal_cellular_connected_no_internet_3_bar',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"></path><path d="M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z"></path></svg>'
                    },
                    {
                        name: 'signal_cellular_connected_no_internet_4_bar',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z"></path></svg>'
                    },
                    {
                        name: 'signal_cellular_no_sim',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"></path></svg>'
                    },
                    {
                        name: 'signal_cellular_null',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z"></path></svg>'
                    },
                    {
                        name: 'signal_cellular_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 1l-8.59 8.59L21 18.18V1zM4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73 4.77 4.5z"></path></svg>'
                    },
                    {
                        name: 'signal_wifi_0_bar',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path></svg>'
                    },
                    {
                        name: 'signal_wifi_1_bar',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path><path d="M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z"></path></svg>'
                    },
                    {
                        name: 'signal_wifi_1_bar_lock',
                        material: '<svg viewBox="0 0 24 24"><path d="M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z"></path><path d="M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z" opacity=".3"></path><path d="M6.7 14.9l5.3 6.6 3.5-4.3v-2.6c0-.2 0-.5.1-.7-.9-.5-2.2-.9-3.6-.9-3 0-5.1 1.7-5.3 1.9z"></path></svg>'
                    },
                    {
                        name: 'signal_wifi_2_bar',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path><path d="M4.79 12.52l7.2 8.98H12l.01-.01 7.2-8.98C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z"></path></svg>'
                    },
                    {
                        name: 'signal_wifi_2_bar_lock',
                        material: '<svg viewBox="0 0 24 24"><path d="M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z"></path><path d="M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z" opacity=".3"></path><path d="M4.8 12.5l7.2 9 3.5-4.4v-2.6c0-1.3.5-2.5 1.4-3.4C15.6 10.5 14 10 12 10c-4.1 0-6.8 2.2-7.2 2.5z"></path></svg>'
                    },
                    {
                        name: 'signal_wifi_3_bar',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path><path d="M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z"></path></svg>'
                    },
                    {
                        name: 'signal_wifi_3_bar_lock',
                        material: '<svg viewBox="0 0 24 24"><path opacity=".3" d="M12 3C5.3 3 .8 6.7.4 7l3.2 3.9L12 21.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7.3-.1.5-.2.8-.2.3-.1.6-.1.9-.1.4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4z"></path><path d="M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-10 5.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7C17.3 9 14.9 8 12 8c-4.8 0-8 2.6-8.5 2.9"></path></svg>'
                    },
                    {
                        name: 'signal_wifi_4_bar',
                        material: '<svg viewBox="0 0 24 24"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"></path></svg>'
                    },
                    {
                        name: 'signal_wifi_4_bar_lock',
                        material: '<svg viewBox="0 0 24 24"><path d="M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.4v-2.6z"></path></svg>'
                    },
                    {
                        name: 'signal_wifi_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z"></path></svg>'
                    },
                    {
                        name: 'storage',
                        material: '<svg viewBox="0 0 24 24"><path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"></path></svg>'
                    },
                    {
                        name: 'usb',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2 0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95a2.2 2.2 0 0 0 4.4 0c0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7h-4z"></path></svg>'
                    },
                    {
                        name: 'wallpaper',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9l-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z"></path></svg>'
                    },
                    {
                        name: 'widgets',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"></path></svg>'
                    },
                    {
                        name: 'wifi_lock',
                        material: '<svg viewBox="0 0 24 24"><path d="M20.5 9.5c.28 0 .55.04.81.08L24 6c-3.34-2.51-7.5-4-12-4S3.34 3.49 0 6l12 16 3.5-4.67V14.5c0-2.76 2.24-5 5-5zM23 16v-1.5a2.5 2.5 0 0 0-5 0V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z"></path></svg>'
                    },
                    {
                        name: 'wifi_tethering',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z"></path></svg>'
                    },
                    {
                        name: 'attach_file',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path></svg>'
                    },
                    {
                        name: 'attach_money',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path></svg>'
                    },
                    {
                        name: 'border_all',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"></path></svg>'
                    },
                    {
                        name: 'border_bottom',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 4h-2v2h2v-2zM9 3H7v2h2V3zm4 8h-2v2h2v-2zM5 3H3v2h2V3zm8 4h-2v2h2V7zm4 4h-2v2h2v-2zm-4-8h-2v2h2V3zm4 0h-2v2h2V3zm2 10h2v-2h-2v2zm0 4h2v-2h-2v2zM5 7H3v2h2V7zm14-4v2h2V3h-2zm0 6h2V7h-2v2zM5 11H3v2h2v-2zM3 21h18v-2H3v2zm2-6H3v2h2v-2z"></path></svg>'
                    },
                    {
                        name: 'border_clear',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 5h2V3H7v2zm0 8h2v-2H7v2zm0 8h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8 0h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2V7H3v2zm0-4h2V3H3v2zm8 8h2v-2h-2v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm-8 0h2V7h-2v2zm8-6v2h2V3h-2zm-8 2h2V3h-2v2zm4 16h2v-2h-2v2zm0-8h2v-2h-2v2zm0-8h2V3h-2v2z"></path></svg>'
                    },
                    {
                        name: 'border_color',
                        material: '<svg viewBox="0 0 24 24"><path d="M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96a.996.996 0 0 0 0-1.41L18.37.29a.996.996 0 0 0-1.41 0L15 2.25 18.75 6l1.96-1.96z"></path><path fill-opacity=".36" d="M0 20h24v4H0z"></path></svg>'
                    },
                    {
                        name: 'border_horizontal',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 21h2v-2H3v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zm4 4h2v-2H7v2zM5 3H3v2h2V3zm4 0H7v2h2V3zm8 0h-2v2h2V3zm-4 4h-2v2h2V7zm0-4h-2v2h2V3zm6 14h2v-2h-2v2zm-8 4h2v-2h-2v2zm-8-8h18v-2H3v2zM19 3v2h2V3h-2zm0 6h2V7h-2v2zm-8 8h2v-2h-2v2zm4 4h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></svg>'
                    },
                    {
                        name: 'border_inner',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 21h2v-2H3v2zm4 0h2v-2H7v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zM9 3H7v2h2V3zM5 3H3v2h2V3zm12 0h-2v2h2V3zm2 6h2V7h-2v2zm0-6v2h2V3h-2zm-4 18h2v-2h-2v2zM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3zm6 18h2v-2h-2v2zm0-4h2v-2h-2v2z"></path></svg>'
                    },
                    {
                        name: 'border_left',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 21h2v-2h-2v2zm0-4h2v-2h-2v2zm0-12h2V3h-2v2zm0 4h2V7h-2v2zm0 4h2v-2h-2v2zm-4 8h2v-2H7v2zM7 5h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2V3H3v18zM19 9h2V7h-2v2zm-4 12h2v-2h-2v2zm4-4h2v-2h-2v2zm0-14v2h2V3h-2zm0 10h2v-2h-2v2zm0 8h2v-2h-2v2zm-4-8h2v-2h-2v2zm0-8h2V3h-2v2z"></path></svg>'
                    },
                    {
                        name: 'border_outer',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z"></path></svg>'
                    },
                    {
                        name: 'border_right',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 21h2v-2H7v2zM3 5h2V3H3v2zm4 0h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2v-2H3v2zm8 0h2v-2h-2v2zm-8-8h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm8 8h2v-2h-2v2zm4-4h2v-2h-2v2zm4-10v18h2V3h-2zm-4 18h2v-2h-2v2zm0-16h2V3h-2v2zm-4 8h2v-2h-2v2zm0-8h2V3h-2v2zm0 4h2V7h-2v2z"></path></svg>'
                    },
                    {
                        name: 'border_style',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z"></path></svg>'
                    },
                    {
                        name: 'border_top',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 21h2v-2H7v2zm0-8h2v-2H7v2zm4 0h2v-2h-2v2zm0 8h2v-2h-2v2zm-8-4h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2v-2H3v2zm0-4h2V7H3v2zm8 8h2v-2h-2v2zm8-8h2V7h-2v2zm0 4h2v-2h-2v2zM3 3v2h18V3H3zm16 14h2v-2h-2v2zm-4 4h2v-2h-2v2zM11 9h2V7h-2v2zm8 12h2v-2h-2v2zm-4-8h2v-2h-2v2z"></path></svg>'
                    },
                    {
                        name: 'border_vertical',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 9h2V7H3v2zm0-4h2V3H3v2zm4 16h2v-2H7v2zm0-8h2v-2H7v2zm-4 0h2v-2H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2zM7 5h2V3H7v2zm12 12h2v-2h-2v2zm-8 4h2V3h-2v18zm8 0h2v-2h-2v2zm0-8h2v-2h-2v2zm0-10v2h2V3h-2zm0 6h2V7h-2v2zm-4-4h2V3h-2v2zm0 16h2v-2h-2v2zm0-8h2v-2h-2v2z"></path></svg>'
                    },
                    {
                        name: 'bubble_chart',
                        material: '<svg viewBox="0 0 24 24"><circle cx="7.2" cy="14.4" r="3.2"></circle><circle cx="14.8" cy="18" r="2"></circle><circle cx="15.2" cy="8.8" r="4.8"></circle></svg>'
                    },
                    {
                        name: 'drag_handle',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"></path></svg>'
                    },
                    {
                        name: 'format_align_center',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"></path></svg>'
                    },
                    {
                        name: 'format_align_justify',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"></path></svg>'
                    },
                    {
                        name: 'format_align_left',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></path></svg>'
                    },
                    {
                        name: 'format_align_right',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"></path></svg>'
                    },
                    {
                        name: 'format_bold',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"></path></svg>'
                    },
                    {
                        name: 'format_clear',
                        material: '<svg viewBox="0 0 24 24"><path d="M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z"></path></svg>'
                    },
                    {
                        name: 'format_color_fill',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15a1.49 1.49 0 0 0 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z"></path><path fill-opacity=".36" d="M0 20h24v4H0z"></path></svg>'
                    },
                    {
                        name: 'format_color_reset',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31zm-.88 3.12L12.5 12.5 5.27 5.27 4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.96-1.5l2.63 2.63 1.27-1.27-2.74-2.74z"></path></svg>'
                    },
                    {
                        name: 'format_color_text',
                        material: '<svg viewBox="0 0 24 24"><path fill-opacity=".36" d="M0 20h24v4H0z"></path><path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"></path></svg>'
                    },
                    {
                        name: 'format_indent_decrease',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"></path></svg>'
                    },
                    {
                        name: 'format_indent_increase',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"></path></svg>'
                    },
                    {
                        name: 'format_italic',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"></path></svg>'
                    },
                    {
                        name: 'format_line_spacing',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z"></path></svg>'
                    },
                    {
                        name: 'format_list_bulleted',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"></path></svg>'
                    },
                    {
                        name: 'format_list_numbered',
                        material: '<svg viewBox="0 0 24 24"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"></path></svg>'
                    },
                    {
                        name: 'format_paint',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"></path></svg>'
                    },
                    {
                        name: 'format_quote',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg>'
                    },
                    {
                        name: 'format_shapes',
                        material: '<svg viewBox="0 0 24 24"><path d="M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z"></path></svg>'
                    },
                    {
                        name: 'format_size',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"></path></svg>'
                    },
                    {
                        name: 'format_strikethrough',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"></path></svg>'
                    },
                    {
                        name: 'format_textdirection_l_to_r',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8l-4-4v3H5v2h12v3l4-4z"></path></svg>'
                    },
                    {
                        name: 'format_textdirection_r_to_l',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z"></path></svg>'
                    },
                    {
                        name: 'format_underlined',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"></path></svg>'
                    },
                    {
                        name: 'functions',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"></path></svg>'
                    },
                    {
                        name: 'highlight',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z"></path></svg>'
                    },
                    {
                        name: 'insert_chart',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></svg>'
                    },
                    {
                        name: 'insert_comment',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path></svg>'
                    },
                    {
                        name: 'insert_drive_file',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"></path></svg>'
                    },
                    {
                        name: 'insert_emoticon',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></svg>'
                    },
                    {
                        name: 'insert_invitation',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></svg>'
                    },
                    {
                        name: 'insert_link',
                        material: '<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>'
                    },
                    {
                        name: 'insert_photo',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></svg>'
                    },
                    {
                        name: 'linear_scale',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5a2.5 2.5 0 0 0 0 5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5a2.5 2.5 0 0 0 0-5z"></path></svg>'
                    },
                    {
                        name: 'merge_type',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"></path></svg>'
                    },
                    {
                        name: 'mode_comment',
                        material: '<svg viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"></path></svg>'
                    },
                    {
                        name: 'mode_edit',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>'
                    },
                    {
                        name: 'monetization_on',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path></svg>'
                    },
                    {
                        name: 'money_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27zM5.33 4.06L4.06 5.33 7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22 1.27-1.27L5.33 4.06z"></path></svg>'
                    },
                    {
                        name: 'multiline_chart',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 6.92l-1.41-1.41-2.85 3.21C15.68 6.4 12.83 5 9.61 5 6.72 5 4.07 6.16 2 8l1.42 1.42C5.12 7.93 7.27 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24-4-4L2 16.99l1.5 1.5 6-6.01 4 4 4.05-4.55c.75 1.35 1.25 2.9 1.44 4.55H21c-.22-2.3-.95-4.39-2.04-6.14L22 6.92z"></path></svg>'
                    },
                    {
                        name: 'pie_chart',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"></path></svg>'
                    },
                    {
                        name: 'pie_chart_outlined',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H13V4.07zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94zm9 7.93V13h6.93A8.002 8.002 0 0 1 13 19.93z"></path></svg>'
                    },
                    {
                        name: 'publish',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"></path></svg>'
                    },
                    {
                        name: 'short_text',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 9h16v2H4zm0 4h10v2H4z"></path></svg>'
                    },
                    {
                        name: 'show_chart',
                        material: '<svg viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"></path></svg>'
                    },
                    {
                        name: 'space_bar',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 9v4H6V9H4v6h16V9z"></path></svg>'
                    },
                    {
                        name: 'strikethrough_s',
                        material: '<svg viewBox="0 0 24 24"><path d="M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67.26-.5.63-.93 1.11-1.29a5.73 5.73 0 0 1 1.7-.83c.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43.25.55.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68-.2-.19-.45-.33-.75-.44-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13-.29.09-.53.21-.72.36-.19.16-.34.34-.44.55-.1.21-.15.43-.15.66 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2.37.17.66.34.87.51.21.17.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42a1.92 1.92 0 0 1-.59-.75c-.14-.31-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58.16.45.37.85.65 1.21.28.35.6.66.98.92.37.26.78.48 1.22.65.44.17.9.3 1.38.39.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21z"></path></svg>'
                    },
                    {
                        name: 'text_fields',
                        material: '<svg viewBox="0 0 24 24"><path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"></path></svg>'
                    },
                    {
                        name: 'title',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 4v3h5.5v12h3V7H19V4z"></path></svg>'
                    },
                    {
                        name: 'vertical_align_bottom',
                        material: '<svg viewBox="0 0 24 24"><path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"></path></svg>'
                    },
                    {
                        name: 'vertical_align_center',
                        material: '<svg viewBox="0 0 24 24"><path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"></path></svg>'
                    },
                    {
                        name: 'vertical_align_top',
                        material: '<svg viewBox="0 0 24 24"><path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"></path></svg>'
                    },
                    {
                        name: 'wrap_text',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"></path></svg>'
                    },
                    {
                        name: 'attachment',
                        material: '<svg viewBox="0 0 24 24"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5a2.5 2.5 0 0 1 0-5H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></svg>'
                    },
                    {
                        name: 'cloud',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></svg>'
                    },
                    {
                        name: 'cloud_circle',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01A3.98 3.98 0 0 1 12 7a4 4 0 0 1 4 4h.5a2.5 2.5 0 0 1 0 5z"></path></svg>'
                    },
                    {
                        name: 'cloud_done',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></svg>'
                    },
                    {
                        name: 'cloud_download',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></svg>'
                    },
                    {
                        name: 'cloud_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46a5.497 5.497 0 0 1 8.05 4.87v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></svg>'
                    },
                    {
                        name: 'cloud_queue',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71A5.5 5.5 0 0 1 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></svg>'
                    },
                    {
                        name: 'cloud_upload',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></svg>'
                    },
                    {
                        name: 'create_new_folder',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></svg>'
                    },
                    {
                        name: 'file_download',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>'
                    },
                    {
                        name: 'file_upload',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></svg>'
                    },
                    {
                        name: 'folder',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></svg>'
                    },
                    {
                        name: 'folder_open',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></svg>'
                    },
                    {
                        name: 'folder_shared',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></svg>'
                    },
                    {
                        name: 'cast',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11z"></path></svg>'
                    },
                    {
                        name: 'cast_connected',
                        material: '<svg viewBox="0 0 24 24"><path d="M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'computer',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path></svg>'
                    },
                    {
                        name: 'desktop_mac',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"></path></svg>'
                    },
                    {
                        name: 'desktop_windows',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"></path></svg>'
                    },
                    {
                        name: 'developer_board',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"></path></svg>'
                    },
                    {
                        name: 'device_hub',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"></path></svg>'
                    },
                    {
                        name: 'devices_other',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z"></path></svg>'
                    },
                    {
                        name: 'dock',
                        material: '<svg viewBox="0 0 24 24"><path d="M8 23h8v-2H8v2zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z"></path></svg>'
                    },
                    {
                        name: 'gamepad',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"></path></svg>'
                    },
                    {
                        name: 'headset',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z"></path></svg>'
                    },
                    {
                        name: 'headset_mic',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 0 0-9-9z"></path></svg>'
                    },
                    {
                        name: 'keyboard',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"></path></svg>'
                    },
                    {
                        name: 'keyboard_arrow_down',
                        material: '<svg viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></svg>'
                    },
                    {
                        name: 'keyboard_arrow_left',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path></svg>'
                    },
                    {
                        name: 'keyboard_arrow_right',
                        material: '<svg viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg>'
                    },
                    {
                        name: 'keyboard_arrow_up',
                        material: '<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>'
                    },
                    {
                        name: 'keyboard_backspace',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"></path></svg>'
                    },
                    {
                        name: 'keyboard_capslock',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z"></path></svg>'
                    },
                    {
                        name: 'keyboard_hide',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 3h2v2h-2V6zm0 3h2v2h-2V9zM8 6h2v2H8V6zm0 3h2v2H8V9zm-1 2H5V9h2v2zm0-3H5V6h2v2zm9 7H8v-2h8v2zm0-4h-2V9h2v2zm0-3h-2V6h2v2zm3 3h-2V9h2v2zm0-3h-2V6h2v2zm-7 15l4-4H8l4 4z"></path></svg>'
                    },
                    {
                        name: 'keyboard_return',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>'
                    },
                    {
                        name: 'keyboard_tab',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"></path></svg>'
                    },
                    {
                        name: 'keyboard_voice',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></svg>'
                    },
                    {
                        name: 'laptop',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path></svg>'
                    },
                    {
                        name: 'laptop_chromebook',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"></path></svg>'
                    },
                    {
                        name: 'laptop_mac',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>'
                    },
                    {
                        name: 'laptop_windows',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"></path></svg>'
                    },
                    {
                        name: 'memory',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path></svg>'
                    },
                    {
                        name: 'mouse',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z"></path></svg>'
                    },
                    {
                        name: 'phone_android',
                        material: '<svg viewBox="0 0 24 24"><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"></path></svg>'
                    },
                    {
                        name: 'phone_iphone',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.5 1h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path></svg>'
                    },
                    {
                        name: 'phonelink',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></svg>'
                    },
                    {
                        name: 'phonelink_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 6V4H6.82l2 2H22zM1.92 1.65L.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.27-1.27L3.89 3.62 1.92 1.65zM4 6.27L14.73 17H4V6.27zM23 8h-6c-.55 0-1 .45-1 1v4.18l2 2V10h4v7h-2.18l3 3H23c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z"></path></svg>'
                    },
                    {
                        name: 'power_input',
                        material: '<svg viewBox="0 0 24 24"><path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"></path></svg>'
                    },
                    {
                        name: 'router',
                        material: '<svg viewBox="0 0 24 24"><path d="M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z"></path></svg>'
                    },
                    {
                        name: 'scanner',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm12 0H9v-2h10v2z"></path></svg>'
                    },
                    {
                        name: 'security',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>'
                    },
                    {
                        name: 'sim_card',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.99 4c0-1.1-.89-2-1.99-2h-8L4 8v12c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2l-.01-16zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z"></path></svg>'
                    },
                    {
                        name: 'smartphone',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></svg>'
                    },
                    {
                        name: 'speaker',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2a2 2 0 0 1 0-4zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>'
                    },
                    {
                        name: 'speaker_group',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM14 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path><circle cx="14" cy="12.5" r="2.5"></circle><path d="M6 5H4v16a2 2 0 0 0 2 2h10v-2H6V5z"></path></svg>'
                    },
                    {
                        name: 'tablet',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"></path></svg>'
                    },
                    {
                        name: 'tablet_android',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"></path></svg>'
                    },
                    {
                        name: 'tablet_mac',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.5 0h-14A2.5 2.5 0 0 0 2 2.5v19A2.5 2.5 0 0 0 4.5 24h14a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"></path></svg>'
                    },
                    {
                        name: 'toys',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z"></path></svg>'
                    },
                    {
                        name: 'tv',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path></svg>'
                    },
                    {
                        name: 'videogame_asset',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>'
                    },
                    {
                        name: 'watch',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73A7.976 7.976 0 0 0 20 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z"></path></svg>'
                    },
                    {
                        name: 'add_a_photo',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"></path></svg>'
                    },
                    {
                        name: 'add_to_photos',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></svg>'
                    },
                    {
                        name: 'adjust',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"></path></svg>'
                    },
                    {
                        name: 'assistant',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z"></path></svg>'
                    },
                    {
                        name: 'assistant_photo',
                        material: '<svg viewBox="0 0 24 24"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></svg>'
                    },
                    {
                        name: 'audiotrack',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 3v9.28a4.39 4.39 0 0 0-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"></path></svg>'
                    },
                    {
                        name: 'blur_circular',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-3-3c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3-6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm3 6c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-4c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm2-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-3.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path></svg>'
                    },
                    {
                        name: 'blur_linear',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"></path></svg>'
                    },
                    {
                        name: 'blur_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-.2 4.48l.2.02c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5l.02.2c.09.67.61 1.19 1.28 1.28zM14 3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-4 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm11 7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 13.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM2.5 5.27l3.78 3.78L6 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l2.81 2.81c-.71.11-1.25.73-1.25 1.47 0 .83.67 1.5 1.5 1.5.74 0 1.36-.54 1.47-1.25l2.81 2.81A.875.875 0 0 0 14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l3.78 3.78L20 20.23 3.77 4 2.5 5.27zM10 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm11-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 11c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"></path></svg>'
                    },
                    {
                        name: 'blur_on',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></svg>'
                    },
                    {
                        name: 'brightness_1',
                        material: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg>'
                    },
                    {
                        name: 'brightness_2',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path></svg>'
                    },
                    {
                        name: 'brightness_3',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"></path></svg>'
                    },
                    {
                        name: 'brightness_4',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>'
                    },
                    {
                        name: 'brightness_5',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>'
                    },
                    {
                        name: 'brightness_6',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>'
                    },
                    {
                        name: 'brightness_7',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>'
                    },
                    {
                        name: 'broken_image',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"></path></svg>'
                    },
                    {
                        name: 'brush',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2a4 4 0 0 0 4-4c0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 0 0 0-1.41z"></path></svg>'
                    },
                    {
                        name: 'burst_mode',
                        material: '<svg viewBox="0 0 24 24"><path d="M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z"></path></svg>'
                    },
                    {
                        name: 'camera',
                        material: '<svg viewBox="0 0 24 24"><path d="M9.4 10.5l4.77-8.26a9.984 9.984 0 0 0-8.49 2.01l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25A9.91 9.91 0 0 0 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75A9.958 9.958 0 0 0 2.2 14h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76a9.984 9.984 0 0 0 8.49-2.01l-3.66-6.35-.93 1.6z"></path></svg>'
                    },
                    {
                        name: 'camera_alt',
                        material: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"></circle><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></svg>'
                    },
                    {
                        name: 'camera_front',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8zm5-8H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2z"></path></svg>'
                    },
                    {
                        name: 'camera_rear',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6z"></path></svg>'
                    },
                    {
                        name: 'camera_roll',
                        material: '<svg viewBox="0 0 24 24"><path d="M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5h-8zm-2 13h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2z"></path></svg>'
                    },
                    {
                        name: 'center_focus_strong',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"></path></svg>'
                    },
                    {
                        name: 'center_focus_weak',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>'
                    },
                    {
                        name: 'collections',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path></svg>'
                    },
                    {
                        name: 'collections_bookmark',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z"></path></svg>'
                    },
                    {
                        name: 'color_lens',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>'
                    },
                    {
                        name: 'colorize',
                        material: '<svg viewBox="0 0 24 24"><path d="M20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12a1 1 0 0 0 .01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"></path></svg>'
                    },
                    {
                        name: 'compare',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'control_point',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'control_point_duplicate',
                        material: '<svg viewBox="0 0 24 24"><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16A6.99 6.99 0 0 1 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>'
                    },
                    {
                        name: 'crop_16_9',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"></path></svg>'
                    },
                    {
                        name: 'crop',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"></path></svg>'
                    },
                    {
                        name: 'crop_3_2',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z"></path></svg>'
                    },
                    {
                        name: 'crop_5_4',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"></path></svg>'
                    },
                    {
                        name: 'crop_7_5',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"></path></svg>'
                    },
                    {
                        name: 'crop_din',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path></svg>'
                    },
                    {
                        name: 'crop_free',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'crop_landscape',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"></path></svg>'
                    },
                    {
                        name: 'crop_original',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"></path></svg>'
                    },
                    {
                        name: 'crop_portrait',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z"></path></svg>'
                    },
                    {
                        name: 'crop_rotate',
                        material: '<svg viewBox="0 0 24 24"><path d="M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8a2 2 0 0 0-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8a2 2 0 0 0 2 2h8v2h2v-2h2v-2H8z"></path></svg>'
                    },
                    {
                        name: 'crop_square',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"></path></svg>'
                    },
                    {
                        name: 'dehaze',
                        material: '<svg viewBox="0 0 24 24"><path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"></path></svg>'
                    },
                    {
                        name: 'details',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"></path></svg>'
                    },
                    {
                        name: 'edit',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>'
                    },
                    {
                        name: 'exposure',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 17v2h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm5-15H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 5h6v2H5V5zm15 15H4L20 4v16z"></path></svg>'
                    },
                    {
                        name: 'exposure_neg_1',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z"></path></svg>'
                    },
                    {
                        name: 'exposure_neg_2',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17s.19-.79.19-1.18c0-.53-.09-1.02-.27-1.46a2.94 2.94 0 0 0-.78-1.11c-.34-.31-.77-.54-1.26-.71A5.72 5.72 0 0 0 16.47 5c-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H21v-1.71h-5.95zM2 11v2h8v-2H2z"></path></svg>'
                    },
                    {
                        name: 'exposure_plus_1',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z"></path></svg>'
                    },
                    {
                        name: 'exposure_plus_2',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17.13-.39.19-.79.19-1.18 0-.53-.09-1.02-.27-1.46a2.94 2.94 0 0 0-.78-1.11c-.34-.31-.77-.54-1.26-.71A5.72 5.72 0 0 0 17.47 5c-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71h-5.95zM8 7H6v4H2v2h4v4h2v-4h4v-2H8V7z"></path></svg>'
                    },
                    {
                        name: 'exposure_zero',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.14 12.5c0 1-.1 1.85-.3 2.55-.2.7-.48 1.27-.83 1.7-.36.44-.79.75-1.3.95-.51.2-1.07.3-1.7.3-.62 0-1.18-.1-1.69-.3-.51-.2-.95-.51-1.31-.95-.36-.44-.65-1.01-.85-1.7-.2-.7-.3-1.55-.3-2.55v-2.04c0-1 .1-1.85.3-2.55.2-.7.48-1.26.84-1.69.36-.43.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29.51.19.95.5 1.31.93.36.43.64.99.84 1.69.2.7.3 1.54.3 2.55v2.04zm-2.11-2.36c0-.64-.05-1.18-.13-1.62-.09-.44-.22-.79-.4-1.06-.17-.27-.39-.46-.64-.58-.25-.13-.54-.19-.86-.19-.32 0-.61.06-.86.18s-.47.31-.64.58c-.17.27-.31.62-.4 1.06s-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62.09.45.23.81.4 1.09s.39.48.64.61.54.19.87.19c.33 0 .62-.06.87-.19s.46-.33.63-.61c.17-.28.3-.64.39-1.09.09-.45.13-.99.13-1.62v-2.66z"></path></svg>'
                    },
                    {
                        name: 'filter_1',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path></svg>'
                    },
                    {
                        name: 'filter',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.96 10.29l-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path></svg>'
                    },
                    {
                        name: 'filter_2',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-4-4h-4v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4v2h4v2h-2a2 2 0 0 0-2 2v4h6v-2z"></path></svg>'
                    },
                    {
                        name: 'filter_3',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7a2 2 0 0 0-2-2h-4v2h4v2h-2v2h2v2h-4v2h4a2 2 0 0 0 2-2z"></path></svg>'
                    },
                    {
                        name: 'filter_4',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path></svg>'
                    },
                    {
                        name: 'filter_5',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-2a2 2 0 0 0-2-2h-2V7h4V5h-6v6h4v2h-4v2h4a2 2 0 0 0 2-2z"></path></svg>'
                    },
                    {
                        name: 'filter_6',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V7h4V5h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm0-4h2v2h-2v-2z"></path></svg>'
                    },
                    {
                        name: 'filter_7',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2l4-8V5h-6v2h4l-4 8h2z"></path></svg>'
                    },
                    {
                        name: 'filter_8',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2a2 2 0 0 0 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13a2 2 0 0 0 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z"></path></svg>'
                    },
                    {
                        name: 'filter_9',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM15 5h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2h-4v2h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 4h-2V7h2v2z"></path></svg>'
                    },
                    {
                        name: 'filter_9_plus',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 7V8a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v1H9v2h3a2 2 0 0 0 2-2zm-3-3V8h1v1h-1zm10-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14v6z"></path></svg>'
                    },
                    {
                        name: 'filter_b_and_w',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16l-7-8v8H5l7-8V5h7v14z"></path></svg>'
                    },
                    {
                        name: 'filter_center_focus',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>'
                    },
                    {
                        name: 'filter_drama',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4a7.48 7.48 0 0 0-6.64 4.04A5.996 5.996 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"></path></svg>'
                    },
                    {
                        name: 'filter_frames',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12"></path></svg>'
                    },
                    {
                        name: 'filter_hdr',
                        material: '<svg viewBox="0 0 24 24"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path></svg>'
                    },
                    {
                        name: 'filter_none',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path></svg>'
                    },
                    {
                        name: 'filter_tilt_shift',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69A7.94 7.94 0 0 1 11 4.07zm7.32.19A9.95 9.95 0 0 0 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1a7.94 7.94 0 0 1 1.62 3.9zM5.69 7.1L4.26 5.68A9.95 9.95 0 0 0 2.05 11h2.02a7.94 7.94 0 0 1 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43A7.868 7.868 0 0 1 4.07 13zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43a9.98 9.98 0 0 0 2.21-5.32h-2.02a7.945 7.945 0 0 1-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19A9.98 9.98 0 0 0 11 21.95v-2.02a7.94 7.94 0 0 1-3.9-1.62l-1.42 1.43z"></path></svg>'
                    },
                    {
                        name: 'filter_vintage',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.7 12.4a6.06 6.06 0 0 0-.86-.4c.29-.11.58-.24.86-.4a6.012 6.012 0 0 0 3-5.19 6.007 6.007 0 0 0-6 0c-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55a6.008 6.008 0 0 0-6 0 5.97 5.97 0 0 0 3 5.19c.28.16.57.29.86.4-.29.11-.58.24-.86.4a6.012 6.012 0 0 0-3 5.19 6.007 6.007 0 0 0 6 0c.28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54a6.008 6.008 0 0 0 6 0 6.012 6.012 0 0 0-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>'
                    },
                    {
                        name: 'flare',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z"></path></svg>'
                    },
                    {
                        name: 'flash_auto',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 2v12h3v9l7-12H9l4-9H3zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2zm-2.15 5.65L18 4l1.15 3.65h-2.3z"></path></svg>'
                    },
                    {
                        name: 'flash_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z"></path></svg>'
                    },
                    {
                        name: 'flash_on',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"></path></svg>'
                    },
                    {
                        name: 'flip',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z"></path></svg>'
                    },
                    {
                        name: 'gradient',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"></path></svg>'
                    },
                    {
                        name: 'grain',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'grid_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M8 4v1.45l2 2V4h4v4h-3.45l2 2H14v1.45l2 2V10h4v4h-3.45l2 2H20v1.45l2 2V4c0-1.1-.9-2-2-2H4.55l2 2H8zm8 0h4v4h-4V4zM1.27 1.27L0 2.55l2 2V20c0 1.1.9 2 2 2h15.46l2 2 1.27-1.27L1.27 1.27zM10 12.55L11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.54V20zm2 0v-1.46L17.46 20H16z"></path></svg>'
                    },
                    {
                        name: 'grid_on',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"></path></svg>'
                    },
                    {
                        name: 'hdr_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M17.5 15v-2h1.1l.9 2H21l-.9-2.1c.5-.2.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5H16v4.9l1.1 1.1h.4zm0-4.5h2v1h-2v-1zm-4.5 0v.4l1.5 1.5v-1.9c0-.8-.7-1.5-1.5-1.5h-1.9l1.5 1.5h.4zm-3.5-1l-7-7-1.1 1L6.9 9h-.4v2h-2V9H3v6h1.5v-2.5h2V15H8v-4.9l1.5 1.5V15h3.4l7.6 7.6 1.1-1.1-12.1-12z"></path></svg>'
                    },
                    {
                        name: 'hdr_on',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 11.5v-1c0-.8-.7-1.5-1.5-1.5H16v6h1.5v-2h1.1l.9 2H21l-.9-2.1c.5-.3.9-.8.9-1.4zm-1.5 0h-2v-1h2v1zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5v2zM13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5h-2v-3h2v3z"></path></svg>'
                    },
                    {
                        name: 'hdr_strong',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>'
                    },
                    {
                        name: 'hdr_weak',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm12-2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>'
                    },
                    {
                        name: 'healing',
                        material: '<svg viewBox="0 0 24 24"><path d="M17.73 12.02l3.98-3.98a.996.996 0 0 0 0-1.41l-4.34-4.34a.996.996 0 0 0-1.41 0l-3.98 3.98L8 2.29a1 1 0 0 0-1.41 0L2.25 6.63a.996.996 0 0 0 0 1.41l3.98 3.98L2.25 16a.996.996 0 0 0 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34a.996.996 0 0 0 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z"></path></svg>'
                    },
                    {
                        name: 'image',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></svg>'
                    },
                    {
                        name: 'image_aspect_ratio',
                        material: '<svg viewBox="0 0 24 24"><path d="M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"></path></svg>'
                    },
                    {
                        name: 'iso',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14zm-2-2v-1.5h-5V17h5z"></path></svg>'
                    },
                    {
                        name: 'landscape',
                        material: '<svg viewBox="0 0 24 24"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path></svg>'
                    },
                    {
                        name: 'leak_add',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 3H3v3c1.66 0 3-1.34 3-3zm8 0h-2a9 9 0 0 1-9 9v2c6.08 0 11-4.93 11-11zm-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7zm0 18h2a9 9 0 0 1 9-9v-2c-6.07 0-11 4.93-11 11zm8 0h3v-3c-1.66 0-3 1.34-3 3zm-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7z"></path></svg>'
                    },
                    {
                        name: 'leak_remove',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 3H8c0 .37-.04.72-.12 1.06l1.59 1.59C9.81 4.84 10 3.94 10 3zM3 4.27l2.84 2.84C5.03 7.67 4.06 8 3 8v2c1.61 0 3.09-.55 4.27-1.46L8.7 9.97A8.99 8.99 0 0 1 3 12v2c2.71 0 5.19-.99 7.11-2.62l2.5 2.5A11.044 11.044 0 0 0 10 21h2c0-2.16.76-4.14 2.03-5.69l1.43 1.43A6.922 6.922 0 0 0 14 21h2c0-1.06.33-2.03.89-2.84L19.73 21 21 19.73 4.27 3 3 4.27zM14 3h-2c0 1.5-.37 2.91-1.02 4.16l1.46 1.46C13.42 6.98 14 5.06 14 3zm5.94 13.12c.34-.08.69-.12 1.06-.12v-2c-.94 0-1.84.19-2.66.52l1.6 1.6zm-4.56-4.56l1.46 1.46A8.98 8.98 0 0 1 21 12v-2c-2.06 0-3.98.58-5.62 1.56z"></path></svg>'
                    },
                    {
                        name: 'lens',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path></svg>'
                    },
                    {
                        name: 'linked_camera',
                        material: '<svg viewBox="0 0 24 24"><circle cx="12" cy="14" r="3.2"></circle><path d="M16 3.33A4.67 4.67 0 0 1 20.67 8H22c0-3.31-2.69-6-6-6v1.33M16 6c1.11 0 2 .89 2 2h1.33A3.33 3.33 0 0 0 16 4.67V6"></path><path d="M17 9c0-1.11-.89-2-2-2V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-5zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></svg>'
                    },
                    {
                        name: 'looks',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 10c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0-4C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11z"></path></svg>'
                    },
                    {
                        name: 'looks_3',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.01 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15a2 2 0 0 1-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4a2 2 0 0 1 2 2v1.5z"></path></svg>'
                    },
                    {
                        name: 'looks_4',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z"></path></svg>'
                    },
                    {
                        name: 'looks_5',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H9v-2h4v-2H9V7h6v2z"></path></svg>'
                    },
                    {
                        name: 'looks_6',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 15h2v-2h-2v2zm8-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4v2z"></path></svg>'
                    },
                    {
                        name: 'looks_one',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"></path></svg>'
                    },
                    {
                        name: 'looks_two',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8a2 2 0 0 1-2 2h-2v2h4v2H9v-4a2 2 0 0 1 2-2h2V9H9V7h4a2 2 0 0 1 2 2v2z"></path></svg>'
                    },
                    {
                        name: 'loupe',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.51-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'monochrome_photos',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8v12zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2z"></path></svg>'
                    },
                    {
                        name: 'movie_creation',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path></svg>'
                    },
                    {
                        name: 'movie_filter',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 4l2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z"></path></svg>'
                    },
                    {
                        name: 'music_note',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path></svg>'
                    },
                    {
                        name: 'nature',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 16.12a7 7 0 0 0 6.17-6.95c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 11 16.06V20H5v2h14v-2h-6v-3.88z"></path></svg>'
                    },
                    {
                        name: 'nature_people',
                        material: '<svg viewBox="0 0 24 24"><path d="M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 14 16.06V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88a7 7 0 0 0 6.17-6.95zM4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z"></path></svg>'
                    },
                    {
                        name: 'navigate_before',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>'
                    },
                    {
                        name: 'navigate_next',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>'
                    },
                    {
                        name: 'palette',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>'
                    },
                    {
                        name: 'panorama',
                        material: '<svg viewBox="0 0 24 24"><path d="M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z"></path></svg>'
                    },
                    {
                        name: 'panorama_fish_eye',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'panorama_horizontal',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 6.54v10.91c-2.6-.77-5.28-1.16-8-1.16-2.72 0-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16 2.72.01 5.4-.38 8-1.16M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7c-3.09 0-6.18-.55-9.12-1.64A.94.94 0 0 0 2.57 4c-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64 3.09 0 6.18.55 9.12 1.64.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63z"></path></svg>'
                    },
                    {
                        name: 'panorama_vertical',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12 0-3.09.55-6.18 1.64-9.12a.94.94 0 0 0 .06-.31c0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12c0 3.09-.55 6.18-1.64 9.12-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31zM6.54 20c.77-2.6 1.16-5.28 1.16-8 0-2.72-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8 0 2.72.39 5.4 1.16 8H6.54z"></path></svg>'
                    },
                    {
                        name: 'panorama_wide_angle',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 6c2.45 0 4.71.2 7.29.64A21 21 0 0 1 20 12a21 21 0 0 1-.71 5.36c-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64A21 21 0 0 1 4 12a21 21 0 0 1 .71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4z"></path></svg>'
                    },
                    {
                        name: 'photo',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path></svg>'
                    },
                    {
                        name: 'photo_album',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.86L18 19H6z"></path></svg>'
                    },
                    {
                        name: 'photo_camera',
                        material: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"></circle><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></svg>'
                    },
                    {
                        name: 'photo_filter',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.02 10v9H5V5h9V3H5.02c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2zM17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12z"></path></svg>'
                    },
                    {
                        name: 'photo_library',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path></svg>'
                    },
                    {
                        name: 'photo_size_select_actual',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"></path></svg>'
                    },
                    {
                        name: 'photo_size_select_large',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 15h2v2h-2v-2zm0-4h2v2h-2v-2zm2 8h-2v2c1 0 2-1 2-2zM13 3h2v2h-2V3zm8 4h2v2h-2V7zm0-4v2h2c0-1-1-2-2-2zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3C2 3 1 4 1 5h2V3zm6 0h2v2H9V3zM5 3h2v2H5V3zm-4 8v8c0 1.1.9 2 2 2h12V11H1zm2 8l2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z"></path></svg>'
                    },
                    {
                        name: 'photo_size_select_small',
                        material: '<svg viewBox="0 0 24 24"><path d="M23 15h-2v2h2v-2zm0-4h-2v2h2v-2zm0 8h-2v2c1 0 2-1 2-2zM15 3h-2v2h2V3zm8 4h-2v2h2V7zm-2-4v2h2c0-1-1-2-2-2zM3 21h8v-6H1v4c0 1.1.9 2 2 2zM3 7H1v2h2V7zm12 12h-2v2h2v-2zm4-16h-2v2h2V3zm0 16h-2v2h2v-2zM3 3C2 3 1 4 1 5h2V3zm0 8H1v2h2v-2zm8-8H9v2h2V3zM7 3H5v2h2V3z"></path></svg>'
                    },
                    {
                        name: 'picture_as_pdf',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"></path></svg>'
                    },
                    {
                        name: 'portrait',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path></svg>'
                    },
                    {
                        name: 'remove_red_eye',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>'
                    },
                    {
                        name: 'rotate_90_degrees_ccw',
                        material: '<svg viewBox="0 0 24 24"><path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26A8.95 8.95 0 0 0 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05a7.007 7.007 0 0 1 0 9.9 6.973 6.973 0 0 1-7.79 1.44l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64a8.98 8.98 0 0 0 0-12.72z"></path></svg>'
                    },
                    {
                        name: 'rotate_left',
                        material: '<svg viewBox="0 0 24 24"><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"></path></svg>'
                    },
                    {
                        name: 'rotate_right',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"></path></svg>'
                    },
                    {
                        name: 'slideshow',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path></svg>'
                    },
                    {
                        name: 'straighten',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"></path></svg>'
                    },
                    {
                        name: 'style',
                        material: '<svg viewBox="0 0 24 24"><path d="M2.53 19.65l1.34.56v-9.03l-2.43 5.86a2.02 2.02 0 0 0 1.09 2.61zm19.5-3.7L17.07 3.98a2.013 2.013 0 0 0-1.81-1.23c-.26 0-.53.04-.79.15L7.1 5.95a2 2 0 0 0-1.08 2.6l4.96 11.97a1.998 1.998 0 0 0 2.6 1.08l7.36-3.05a1.994 1.994 0 0 0 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"></path></svg>'
                    },
                    {
                        name: 'switch_camera',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"></path></svg>'
                    },
                    {
                        name: 'switch_video',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13l-4 4zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"></path></svg>'
                    },
                    {
                        name: 'tag_faces',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></svg>'
                    },
                    {
                        name: 'texture',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"></path></svg>'
                    },
                    {
                        name: 'timelapse',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.24 7.76A5.974 5.974 0 0 0 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0a5.99 5.99 0 0 0-.01-8.48zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'timer_10',
                        material: '<svg viewBox="0 0 24 24"><path d="M0 7.72V9.4l3-1V18h2V6h-.25L0 7.72zm23.78 6.65c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38a6.64 6.64 0 0 1-.87-.23 2.61 2.61 0 0 1-.55-.25.717.717 0 0 1-.28-.3.978.978 0 0 1 .01-.8c.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95a2.517 2.517 0 0 0-.93-1.97c-.3-.25-.66-.44-1.09-.59C21.49 9.07 21 9 20.46 9c-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.69.23.96c.15.28.36.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24a1.333 1.333 0 0 1-.59-1.11h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02zm-9.96-7.32c-.34-.4-.75-.7-1.23-.88-.47-.18-1.01-.27-1.59-.27-.58 0-1.11.09-1.59.27-.48.18-.89.47-1.23.88-.34.41-.6.93-.79 1.59-.18.65-.28 1.45-.28 2.39v1.92c0 .94.09 1.74.28 2.39.19.66.45 1.19.8 1.6.34.41.75.71 1.23.89.48.18 1.01.28 1.59.28.59 0 1.12-.09 1.59-.28.48-.18.88-.48 1.22-.89.34-.41.6-.94.78-1.6.18-.65.28-1.45.28-2.39v-1.92c0-.94-.09-1.74-.28-2.39-.18-.66-.44-1.19-.78-1.59zm-.92 6.17c0 .6-.04 1.11-.12 1.53-.08.42-.2.76-.36 1.02-.16.26-.36.45-.59.57-.23.12-.51.18-.82.18-.3 0-.58-.06-.82-.18s-.44-.31-.6-.57c-.16-.26-.29-.6-.38-1.02-.09-.42-.13-.93-.13-1.53v-2.5c0-.6.04-1.11.13-1.52.09-.41.21-.74.38-1 .16-.25.36-.43.6-.55.24-.11.51-.17.81-.17.31 0 .58.06.81.17.24.11.44.29.6.55.16.25.29.58.37.99.08.41.13.92.13 1.52v2.51z"></path></svg>'
                    },
                    {
                        name: 'timer',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>'
                    },
                    {
                        name: 'timer_3',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.61 12.97c-.16-.24-.36-.46-.62-.65a3.38 3.38 0 0 0-.93-.48c.3-.14.57-.3.8-.5.23-.2.42-.41.57-.64.15-.23.27-.46.34-.71.08-.24.11-.49.11-.73 0-.55-.09-1.04-.28-1.46-.18-.42-.44-.77-.78-1.06-.33-.28-.73-.5-1.2-.64-.45-.13-.97-.2-1.53-.2-.55 0-1.06.08-1.52.24-.47.17-.87.4-1.2.69-.33.29-.6.63-.78 1.03-.2.39-.29.83-.29 1.29h1.98c0-.26.05-.49.14-.69.09-.2.22-.38.38-.52.17-.14.36-.25.58-.33.22-.08.46-.12.73-.12.61 0 1.06.16 1.36.47.3.31.44.75.44 1.32 0 .27-.04.52-.12.74-.08.22-.21.41-.38.57-.17.16-.38.28-.63.37-.25.09-.55.13-.89.13H6.72v1.57H7.9c.34 0 .64.04.91.11.27.08.5.19.69.35.19.16.34.36.44.61.1.24.16.54.16.87 0 .62-.18 1.09-.53 1.42-.35.33-.84.49-1.45.49-.29 0-.56-.04-.8-.13-.24-.08-.44-.2-.61-.36-.17-.16-.3-.34-.39-.56-.09-.22-.14-.46-.14-.72H4.19c0 .55.11 1.03.32 1.45.21.42.5.77.86 1.05s.77.49 1.24.63.96.21 1.48.21c.57 0 1.09-.08 1.58-.23.49-.15.91-.38 1.26-.68.36-.3.64-.66.84-1.1.2-.43.3-.93.3-1.48 0-.29-.04-.58-.11-.86-.08-.25-.19-.51-.35-.76zm9.26 1.4c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38a6.64 6.64 0 0 1-.87-.23 2.61 2.61 0 0 1-.55-.25.717.717 0 0 1-.28-.3c-.05-.11-.08-.24-.08-.39a.946.946 0 0 1 .36-.75c.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95a2.517 2.517 0 0 0-.93-1.97c-.3-.25-.66-.44-1.09-.59-.43-.15-.92-.22-1.46-.22-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.68.23.96c.15.28.37.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24a1.333 1.333 0 0 1-.59-1.11h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02z"></path></svg>'
                    },
                    {
                        name: 'timer_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.04 4.55l-1.42 1.42a9.012 9.012 0 0 0-10.57-.49l1.46 1.46C9.53 6.35 10.73 6 12 6c3.87 0 7 3.13 7 7 0 1.27-.35 2.47-.94 3.49l1.45 1.45A8.878 8.878 0 0 0 21 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42-1.41-1.42zM15 1H9v2h6V1zm-4 8.44l2 2V8h-2v1.44zM3.02 4L1.75 5.27 4.5 8.03A8.905 8.905 0 0 0 3 13c0 4.97 4.02 9 9 9 1.84 0 3.55-.55 4.98-1.5l2.5 2.5 1.27-1.27-7.71-7.71L3.02 4zM12 20c-3.87 0-7-3.13-7-7 0-1.28.35-2.48.95-3.52l9.56 9.56c-1.03.61-2.23.96-3.51.96z"></path></svg>'
                    },
                    {
                        name: 'tonality',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z"></path></svg>'
                    },
                    {
                        name: 'transform',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z"></path></svg>'
                    },
                    {
                        name: 'tune',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg>'
                    },
                    {
                        name: 'view_comfy',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z"></path></svg>'
                    },
                    {
                        name: 'view_compact',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"></path></svg>'
                    },
                    {
                        name: 'vignette',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z"></path></svg>'
                    },
                    {
                        name: 'wb_auto',
                        material: '<svg viewBox="0 0 24 24"><path d="M6.85 12.65h2.3L8 9l-1.15 3.65zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76A7.97 7.97 0 0 0 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9H22zm-11.7 9l-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9h-1.9z"></path></svg>'
                    },
                    {
                        name: 'wb_cloudy',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path></svg>'
                    },
                    {
                        name: 'wb_incandescent',
                        material: '<svg viewBox="0 0 24 24"><path d="M3.55 18.54l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8zM11 22.45h2V19.5h-2v2.95zM4 10.5H1v2h3v-2zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm5 4.19v2h3v-2h-3zm-2.76 7.66l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4z"></path></svg>'
                    },
                    {
                        name: 'wb_iridescent',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 14.5h14v-6H5v6zM11 .55V3.5h2V.55h-2zm8.04 2.5l-1.79 1.79 1.41 1.41 1.8-1.79-1.42-1.41zM13 22.45V19.5h-2v2.95h2zm7.45-3.91l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM3.55 4.46l1.79 1.79 1.41-1.41-1.79-1.79-1.41 1.41zm1.41 15.49l1.79-1.8-1.41-1.41-1.79 1.79 1.41 1.42z"></path></svg>'
                    },
                    {
                        name: 'wb_sunny',
                        material: '<svg viewBox="0 0 24 24"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"></path></svg>'
                    },
                    {
                        name: 'add_location',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z"></path></svg>'
                    },
                    {
                        name: 'beenhere',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"></path></svg>'
                    },
                    {
                        name: 'directions',
                        material: '<svg viewBox="0 0 24 24"><path d="M21.71 11.29l-9-9a.996.996 0 0 0-1.41 0l-9 9a.996.996 0 0 0 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 0 0 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path></svg>'
                    },
                    {
                        name: 'directions_bike',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"></path></svg>'
                    },
                    {
                        name: 'directions_boat',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99a8.752 8.752 0 0 0 8 0c1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42a1.007 1.007 0 0 0-.66 1.28L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"></path></svg>'
                    },
                    {
                        name: 'directions_bus',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"></path></svg>'
                    },
                    {
                        name: 'directions_car',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></svg>'
                    },
                    {
                        name: 'directions_railway',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z"></path></svg>'
                    },
                    {
                        name: 'directions_run',
                        material: '<svg viewBox="0 0 24 24"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"></path></svg>'
                    },
                    {
                        name: 'directions_subway',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"></path></svg>'
                    },
                    {
                        name: 'directions_transit',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"></path></svg>'
                    },
                    {
                        name: 'directions_walk',
                        material: '<svg viewBox="0 0 24 24"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"></path></svg>'
                    },
                    {
                        name: 'edit_location',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.56 10H9v-1.44l3.35-3.34 1.43 1.43L10.44 12zm4.45-4.45l-.7.7-1.44-1.44.7-.7a.38.38 0 0 1 .54 0l.9.9c.15.15.15.39 0 .54z"></path></svg>'
                    },
                    {
                        name: 'ev_station',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5a2.5 2.5 0 0 0 5 0V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z"></path></svg>'
                    },
                    {
                        name: 'flight',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path></svg>'
                    },
                    {
                        name: 'hotel',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4z"></path></svg>'
                    },
                    {
                        name: 'layers',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"></path></svg>'
                    },
                    {
                        name: 'layers_clear',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z"></path></svg>'
                    },
                    {
                        name: 'local_activity',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"></path></svg>'
                    },
                    {
                        name: 'local_airport',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path></svg>'
                    },
                    {
                        name: 'local_atm',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"></path></svg>'
                    },
                    {
                        name: 'local_bar',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"></path></svg>'
                    },
                    {
                        name: 'local_cafe',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 3H4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z"></path></svg>'
                    },
                    {
                        name: 'local_car_wash',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 5c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zm-5 0c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zM7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5zm11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 18c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 13l1.5-4.5h11L19 13H5z"></path></svg>'
                    },
                    {
                        name: 'local_convenience_store',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z"></path></svg>'
                    },
                    {
                        name: 'local_dining',
                        material: '<svg viewBox="0 0 24 24"><path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path></svg>'
                    },
                    {
                        name: 'local_drink',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"></path></svg>'
                    },
                    {
                        name: 'local_florist',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 22a9 9 0 0 0 9-9 9 9 0 0 0-9 9zM5.6 10.25a2.5 2.5 0 0 0 3.92 2.06l-.02.19a2.5 2.5 0 0 0 5 0l-.02-.19c.4.28.89.44 1.42.44a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25a2.49 2.49 0 0 0 1.43-2.25 2.5 2.5 0 0 0-3.92-2.06l.02-.19a2.5 2.5 0 1 0-5 0l.02.19c-.4-.28-.89-.44-1.42-.44a2.5 2.5 0 0 0-2.5 2.5c0 1 .59 1.85 1.43 2.25a2.49 2.49 0 0 0-1.43 2.25zM12 5.5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5zM3 13a9 9 0 0 0 9 9 9 9 0 0 0-9-9z"></path></svg>'
                    },
                    {
                        name: 'local_gas_station',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5a2.5 2.5 0 0 0 5 0V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>'
                    },
                    {
                        name: 'local_grocery_store',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'local_hospital',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"></path></svg>'
                    },
                    {
                        name: 'local_hotel',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4z"></path></svg>'
                    },
                    {
                        name: 'local_laundry_service',
                        material: '<svg viewBox="0 0 24 24"><path d="M9.17 16.83a4.008 4.008 0 0 0 5.66 0 4.008 4.008 0 0 0 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>'
                    },
                    {
                        name: 'local_library',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path></svg>'
                    },
                    {
                        name: 'local_mall',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"></path></svg>'
                    },
                    {
                        name: 'local_movies',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></svg>'
                    },
                    {
                        name: 'local_offer',
                        material: '<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path></svg>'
                    },
                    {
                        name: 'local_parking',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"></path></svg>'
                    },
                    {
                        name: 'local_pharmacy',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"></path></svg>'
                    },
                    {
                        name: 'local_phone',
                        material: '<svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>'
                    },
                    {
                        name: 'local_pizza',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>'
                    },
                    {
                        name: 'local_play',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"></path></svg>'
                    },
                    {
                        name: 'local_post_office',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>'
                    },
                    {
                        name: 'local_printshop',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></svg>'
                    },
                    {
                        name: 'local_see',
                        material: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"></circle><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></svg>'
                    },
                    {
                        name: 'local_shipping',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>'
                    },
                    {
                        name: 'local_taxi',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></svg>'
                    },
                    {
                        name: 'map',
                        material: '<svg viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"></path></svg>'
                    },
                    {
                        name: 'my_location',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>'
                    },
                    {
                        name: 'navigation',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></svg>'
                    },
                    {
                        name: 'near_me',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"></path></svg>'
                    },
                    {
                        name: 'person_pin',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3A2.7 2.7 0 0 1 14.7 8a2.7 2.7 0 0 1-2.7 2.7A2.7 2.7 0 0 1 9.3 8 2.7 2.7 0 0 1 12 5.3zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"></path></svg>'
                    },
                    {
                        name: 'person_pin_circle',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05A4.783 4.783 0 0 1 12 14z"></path></svg>'
                    },
                    {
                        name: 'pin_drop',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2a2 2 0 0 1-4 0zM5 20v2h14v-2H5z"></path></svg>'
                    },
                    {
                        name: 'place',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>'
                    },
                    {
                        name: 'rate_review',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"></path></svg>'
                    },
                    {
                        name: 'restaurant',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"></path></svg>'
                    },
                    {
                        name: 'restaurant_menu',
                        material: '<svg viewBox="0 0 24 24"><path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path></svg>'
                    },
                    {
                        name: 'satellite',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.99h3C8 6.65 6.66 8 5 8V4.99zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12zm0 6l3.5-4.5 2.5 3.01L14.5 12l4.5 6H5z"></path></svg>'
                    },
                    {
                        name: 'store_mall_directory',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></svg>'
                    },
                    {
                        name: 'streetview',
                        material: '<svg viewBox="0 0 24 24"><path d="M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z"></path><circle cx="18" cy="6" r="5"></circle><path d="M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82A6.435 6.435 0 0 1 11.5 6z"></path></svg>'
                    },
                    {
                        name: 'subway',
                        material: '<svg viewBox="0 0 24 24"><circle cx="15.5" cy="16" r="1"></circle><circle cx="8.5" cy="16" r="1"></circle><path d="M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12A2.63 2.63 0 0 1 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3v6.88z"></path></svg>'
                    },
                    {
                        name: 'terrain',
                        material: '<svg viewBox="0 0 24 24"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path></svg>'
                    },
                    {
                        name: 'traffic',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-5a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 0 4z"></path></svg>'
                    },
                    {
                        name: 'train',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>'
                    },
                    {
                        name: 'tram',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 16.94V8.5c0-2.79-2.61-3.4-6.01-3.49l.76-1.51H17V2H7v1.5h4.75l-.76 1.52C7.86 5.11 5 5.73 5 8.5v8.44c0 1.45 1.19 2.66 2.59 2.97L6 21.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 20h-.08c1.69 0 2.58-1.37 2.58-3.06zm-7 1.56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-4.5H7V9h10v5z"></path></svg>'
                    },
                    {
                        name: 'transfer_within_a_station',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5zm3.02 4.25H14v1.5h5.51V23L22 20.5 19.51 18zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75"></path></svg>'
                    },
                    {
                        name: 'zoom_out_map',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"></path></svg>'
                    },
                    {
                        name: 'apps',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></svg>'
                    },
                    {
                        name: 'arrow_back',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>'
                    },
                    {
                        name: 'arrow_downward',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>'
                    },
                    {
                        name: 'arrow_drop_down',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"></path></svg>'
                    },
                    {
                        name: 'arrow_drop_down_circle',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></svg>'
                    },
                    {
                        name: 'arrow_drop_up',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"></path></svg>'
                    },
                    {
                        name: 'arrow_forward',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>'
                    },
                    {
                        name: 'arrow_upward',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>'
                    },
                    {
                        name: 'cancel',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>'
                    },
                    {
                        name: 'check',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>'
                    },
                    {
                        name: 'chevron_left',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>'
                    },
                    {
                        name: 'chevron_right',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>'
                    },
                    {
                        name: 'close',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>'
                    },
                    {
                        name: 'expand_less',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>'
                    },
                    {
                        name: 'expand_more',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>'
                    },
                    {
                        name: 'first_page',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></svg>'
                    },
                    {
                        name: 'fullscreen',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg>'
                    },
                    {
                        name: 'fullscreen_exit',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></svg>'
                    },
                    {
                        name: 'last_page',
                        material: '<svg viewBox="0 0 24 24"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></svg>'
                    },
                    {
                        name: 'menu',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>'
                    },
                    {
                        name: 'more_horiz',
                        material: '<svg viewBox="0 0 24 24"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'more_vert',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'refresh',
                        material: '<svg viewBox="0 0 24 24"><path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></svg>'
                    },
                    {
                        name: 'subdirectory_arrow_left',
                        material: '<svg viewBox="0 0 24 24"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></svg>'
                    },
                    {
                        name: 'subdirectory_arrow_right',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></svg>'
                    },
                    {
                        name: 'unfold_less',
                        material: '<svg viewBox="0 0 24 24"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></svg>'
                    },
                    {
                        name: 'unfold_more',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></svg>'
                    },
                    {
                        name: 'adb',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>'
                    },
                    {
                        name: 'airline_seat_flat',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 11v2H9V7h9a4 4 0 0 1 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9a3 3 0 0 0-.04-4.24 3 3 0 0 0-4.24.04 3 3 0 0 0 .04 4.24 3 3 0 0 0 4.24-.04z"></path></svg>'
                    },
                    {
                        name: 'airline_seat_flat_angled',
                        material: '<svg viewBox="0 0 24 24"><path d="M22.25 14.29l-.69 1.89L9.2 11.71l2.08-5.66 8.56 3.09a4 4 0 0 1 2.41 5.15zM1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86-.69 1.89zm5.8-1.94a3.01 3.01 0 0 0 1.41-4A3.005 3.005 0 0 0 4.7 4.8a2.99 2.99 0 0 0-1.4 4 2.99 2.99 0 0 0 4 1.4z"></path></svg>'
                    },
                    {
                        name: 'airline_seat_individual_suite',
                        material: '<svg viewBox="0 0 24 24"><path d="M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6a4 4 0 0 0-4-4z"></path></svg>'
                    },
                    {
                        name: 'airline_seat_legroom_extra',
                        material: '<svg viewBox="0 0 24 24"><path d="M4 12V3H2v9c0 2.76 2.24 5 5 5h6v-2H7c-1.66 0-3-1.34-3-3zm18.83 5.24c-.38-.72-1.29-.97-2.03-.63l-1.09.5-3.41-6.98a2.01 2.01 0 0 0-1.79-1.12L11 9V3H5v8c0 1.66 1.34 3 3 3h7l3.41 7 3.72-1.7c.77-.36 1.1-1.3.7-2.06z"></path></svg>'
                    },
                    {
                        name: 'airline_seat_legroom_normal',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 12V3H3v9c0 2.76 2.24 5 5 5h6v-2H8c-1.66 0-3-1.34-3-3zm15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v7h4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"></path></svg>'
                    },
                    {
                        name: 'airline_seat_legroom_reduced',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.97 19.2c.18.96-.55 1.8-1.47 1.8H14v-3l1-4H9c-1.65 0-3-1.35-3-3V3h6v6h5c1.1 0 2 .9 2 2l-2 7h1.44c.73 0 1.39.49 1.53 1.2zM5 12V3H3v9c0 2.76 2.24 5 5 5h4v-2H8c-1.66 0-3-1.34-3-3z"></path></svg>'
                    },
                    {
                        name: 'airline_seat_recline_extra',
                        material: '<svg viewBox="0 0 24 24"><path d="M5.35 5.64c-.9-.64-1.12-1.88-.49-2.79a2.01 2.01 0 0 1 2.79-.49c.9.64 1.12 1.88.49 2.79-.64.9-1.88 1.12-2.79.49zM16 19H8.93a2.99 2.99 0 0 1-2.96-2.54L4 7H2l1.99 9.76A5.01 5.01 0 0 0 8.94 21H16v-2zm.23-4h-4.88l-1.03-4.1c1.58.89 3.28 1.54 5.15 1.22V9.99c-1.63.31-3.44-.27-4.69-1.25L9.14 7.47c-.23-.18-.49-.3-.76-.38a2.21 2.21 0 0 0-.99-.06h-.02a2.268 2.268 0 0 0-1.84 2.61l1.35 5.92A3.008 3.008 0 0 0 9.83 18h6.85l3.82 3 1.5-1.5-5.77-4.5z"></path></svg>'
                    },
                    {
                        name: 'airline_seat_recline_normal',
                        material: '<svg viewBox="0 0 24 24"><path d="M7.59 5.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07z"></path></svg>'
                    },
                    {
                        name: 'bluetooth_audio',
                        material: '<svg viewBox="0 0 24 24"><path d="M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32zm5.29-5.3l-1.26 1.26c.63 1.21.98 2.57.98 4.02s-.36 2.82-.98 4.02l1.2 1.2a9.936 9.936 0 0 0 1.54-5.31c-.01-1.89-.55-3.67-1.48-5.19zm-3.82 1L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM11 5.83l1.88 1.88L11 9.59V5.83zm1.88 10.46L11 18.17v-3.76l1.88 1.88z"></path></svg>'
                    },
                    {
                        name: 'confirmation_number',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 10V6a2 2 0 0 0-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z"></path></svg>'
                    },
                    {
                        name: 'disc_full',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 16h2v-2h-2v2zm0-9v5h2V7h-2zM10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>'
                    },
                    {
                        name: 'do_not_disturb',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></svg>'
                    },
                    {
                        name: 'do_not_disturb_alt',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM4 12c0-4.4 3.6-8 8-8 1.8 0 3.5.6 4.9 1.7L5.7 16.9A7.88 7.88 0 0 1 4 12zm8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'do_not_disturb_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 11v2h-1.46l4.68 4.68A9.92 9.92 0 0 0 22 12c0-5.52-4.48-10-10-10-2.11 0-4.07.66-5.68 1.78L13.54 11H17zM2.27 2.27L1 3.54l2.78 2.78A9.92 9.92 0 0 0 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78L20.46 23l1.27-1.27L11 11 2.27 2.27zM7 13v-2h1.46l2 2H7z"></path></svg>'
                    },
                    {
                        name: 'do_not_disturb_on',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></svg>'
                    },
                    {
                        name: 'drive_eta',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"></path></svg>'
                    },
                    {
                        name: 'enhanced_encryption',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM16 16h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"></path></svg>'
                    },
                    {
                        name: 'event_available',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"></path></svg>'
                    },
                    {
                        name: 'event_busy',
                        material: '<svg viewBox="0 0 24 24"><path d="M9.31 17l2.44-2.44L14.19 17l1.06-1.06-2.44-2.44 2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06 2.44 2.44-2.44 2.44L9.31 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"></path></svg>'
                    },
                    {
                        name: 'event_note',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"></path></svg>'
                    },
                    {
                        name: 'folder_special',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2.06 11L15 15.28 12.06 17l.78-3.33-2.59-2.24 3.41-.29L15 8l1.34 3.14 3.41.29-2.59 2.24.78 3.33z"></path></svg>'
                    },
                    {
                        name: 'live_tv',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8a2 2 0 0 0-2-2zm0 14H3V8h18v12zM9 10v8l7-4z"></path></svg>'
                    },
                    {
                        name: 'mms',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6H5z"></path></svg>'
                    },
                    {
                        name: 'more',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>'
                    },
                    {
                        name: 'network_check',
                        material: '<svg viewBox="0 0 24 24"><path d="M15.9 5c-.17 0-.32.09-.41.23l-.07.15-5.18 11.65c-.16.29-.26.61-.26.96 0 1.11.9 2.01 2.01 2.01.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM1 9l2 2c2.88-2.88 6.79-4.08 10.53-3.62l1.19-2.68C9.89 3.84 4.74 5.27 1 9zm20 2l2-2a15.367 15.367 0 0 0-5.59-3.57l-.53 2.82c1.5.62 2.9 1.53 4.12 2.75zm-4 4l2-2c-.8-.8-1.7-1.42-2.66-1.89l-.55 2.92c.42.27.83.59 1.21.97zM5 13l2 2a7.1 7.1 0 0 1 4.03-2l1.28-2.88c-2.63-.08-5.3.87-7.31 2.88z"></path></svg>'
                    },
                    {
                        name: 'network_locked',
                        material: '<svg viewBox="0 0 24 24"><path d="M19.5 10c.17 0 .33.03.5.05V1L1 20h13v-3c0-.89.39-1.68 1-2.23v-.27c0-2.48 2.02-4.5 4.5-4.5zm2.5 6v-1.5a2.5 2.5 0 0 0-5 0V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z"></path></svg>'
                    },
                    {
                        name: 'no_encryption',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 21.78L4.22 5 3 6.22l2.04 2.04C4.42 8.6 4 9.25 4 10v10c0 1.1.9 2 2 2h12c.23 0 .45-.05.66-.12L19.78 23 21 21.78zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H9.66L20 18.34V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.56 0-4.64 1.93-4.94 4.4L8.9 7.24V6z"></path></svg>'
                    },
                    {
                        name: 'ondemand_video',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"></path></svg>'
                    },
                    {
                        name: 'personal_video',
                        material: '<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm0 14H3V5h18v12z"></path></svg>'
                    },
                    {
                        name: 'phone_bluetooth_speaker',
                        material: '<svg viewBox="0 0 24 24"><path d="M14.71 9.5L17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6 14 8.79l.71.71zM18 2.91l.94.94-.94.94V2.91zm0 4.3l.94.94-.94.94V7.21zm2 8.29c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"></path></svg>'
                    },
                    {
                        name: 'phone_forwarded',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 11l5-5-5-5v3h-4v4h4v3zm2 4.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"></path></svg>'
                    },
                    {
                        name: 'phone_in_talk',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"></path></svg>'
                    },
                    {
                        name: 'phone_locked',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM20 4v-.5a2.5 2.5 0 0 0-5 0V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4z"></path></svg>'
                    },
                    {
                        name: 'phone_missed',
                        material: '<svg viewBox="0 0 24 24"><path d="M6.5 5.5L12 11l7-7-1-1-6 6-4.5-4.5H11V3H5v6h1.5V5.5zm17.21 11.17A16.97 16.97 0 0 0 12 12C7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73 1.6 0 3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.12-.52-.3-.7z"></path></svg>'
                    },
                    {
                        name: 'phone_paused',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 3h-2v7h2V3zm3 12.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 3v7h2V3h-2z"></path></svg>'
                    },
                    {
                        name: 'power',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"></path></svg>'
                    },
                    {
                        name: 'priority_high',
                        material: '<svg viewBox="0 0 24 24"><circle cx="12" cy="19" r="2"></circle><path d="M10 3h4v12h-4z"></path></svg>'
                    },
                    {
                        name: 'rv_hookup',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3 3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3z"></path></svg>'
                    },
                    {
                        name: 'sd_card',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"></path></svg>'
                    },
                    {
                        name: 'sim_card_alert',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z"></path></svg>'
                    },
                    {
                        name: 'sms',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"></path></svg>'
                    },
                    {
                        name: 'sms_failed',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></svg>'
                    },
                    {
                        name: 'sync',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></svg>'
                    },
                    {
                        name: 'sync_disabled',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33zm-7.14-.94l2.36 2.36a7.925 7.925 0 0 0 1.14 9.87L4 20h6v-6l-2.24 2.24A6.003 6.003 0 0 1 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14 2.86 5.41zM20 4h-6v6l2.24-2.24A6.003 6.003 0 0 1 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46a7.925 7.925 0 0 0-1.14-9.87L20 4z"></path></svg>'
                    },
                    {
                        name: 'sync_problem',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24A6.003 6.003 0 0 1 5 12a5.99 5.99 0 0 1 4-5.65V4.26C5.55 5.15 3 8.27 3 12zm8 5h2v-2h-2v2zM21 4h-6v6l2.24-2.24A6.003 6.003 0 0 1 19 12a5.99 5.99 0 0 1-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64L21 4zm-10 9h2V7h-2v6z"></path></svg>'
                    },
                    {
                        name: 'system_update',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z"></path></svg>'
                    },
                    {
                        name: 'tap_and_play',
                        material: '<svg viewBox="0 0 24 24"><path d="M2 16v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0 4v3h3c0-1.66-1.34-3-3-3zm0-8v2a9 9 0 0 1 9 9h2c0-6.08-4.92-11-11-11zM17 1.01L7 1c-1.1 0-2 .9-2 2v7.37c.69.16 1.36.37 2 .64V5h10v13h-3.03c.52 1.25.84 2.59.95 4H17c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z"></path></svg>'
                    },
                    {
                        name: 'time_to_leave',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"></path></svg>'
                    },
                    {
                        name: 'vibration',
                        material: '<svg viewBox="0 0 24 24"><path d="M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z"></path></svg>'
                    },
                    {
                        name: 'voice_chat',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12l-4-3.2V14H6V6h8v3.2L18 6v8z"></path></svg>'
                    },
                    {
                        name: 'vpn_lock',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 4v-.5a2.5 2.5 0 0 0-5 0V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4zm-2.28 8c.04.33.08.66.08 1 0 2.08-.8 3.97-2.1 5.39-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H7v-2h2c.55 0 1-.45 1-1V8h2c1.1 0 2-.9 2-2V3.46c-.95-.3-1.95-.46-3-.46C5.48 3 1 7.48 1 13s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1h-2.03zM10 20.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 16v1c0 1.1.9 2 2 2v1.93z"></path></svg>'
                    },
                    {
                        name: 'wc',
                        material: '<svg viewBox="0 0 24 24"><path d="M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63A2.01 2.01 0 0 0 16.56 7h-.12a2 2 0 0 0-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z"></path></svg>'
                    },
                    {
                        name: 'wifi',
                        material: '<svg viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 0 0-6 0zm-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"></path></svg>'
                    },
                    {
                        name: 'ac_unit',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"></path></svg>'
                    },
                    {
                        name: 'airport_shuttle',
                        material: '<svg viewBox="0 0 24 24"><path d="M17 5H3a2 2 0 0 0-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z"></path></svg>'
                    },
                    {
                        name: 'all_inclusive',
                        material: '<svg viewBox="0 0 24 24"><path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2A5.37 5.37 0 0 0 5.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12a5.386 5.386 0 0 0 3.82 1.57c2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"></path></svg>'
                    },
                    {
                        name: 'beach_access',
                        material: '<svg viewBox="0 0 24 24"><path d="M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"></path></svg>'
                    },
                    {
                        name: 'business_center',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"></path></svg>'
                    },
                    {
                        name: 'casino',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"></path></svg>'
                    },
                    {
                        name: 'child_care',
                        material: '<svg viewBox="0 0 24 24"><circle cx="14.5" cy="10.5" r="1.25"></circle><circle cx="9.5" cy="10.5" r="1.25"></circle><path d="M22.94 12.66c.04-.21.06-.43.06-.66s-.02-.45-.06-.66a4.008 4.008 0 0 0-2.81-3.17 9.114 9.114 0 0 0-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91a3.994 3.994 0 0 0-2.81 3.17c-.04.21-.06.43-.06.66s.02.45.06.66a4.008 4.008 0 0 0 2.81 3.17 8.977 8.977 0 0 0 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89a3.998 3.998 0 0 0 2.8-3.17zM19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2zM7.5 14c.76 1.77 2.49 3 4.5 3s3.74-1.23 4.5-3h-9z"></path></svg>'
                    },
                    {
                        name: 'child_friendly',
                        material: '<svg viewBox="0 0 24 24"><path d="M13 2v8h8c0-4.42-3.58-8-8-8zm6.32 13.89A7.948 7.948 0 0 0 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42A3.49 3.49 0 0 0 4.5 18.5C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20zm9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20z"></path></svg>'
                    },
                    {
                        name: 'fitness_center',
                        material: '<svg viewBox="0 0 24 24"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"></path></svg>'
                    },
                    {
                        name: 'free_breakfast',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 3H4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"></path></svg>'
                    },
                    {
                        name: 'golf_course',
                        material: '<svg viewBox="0 0 24 24"><circle cx="19.5" cy="19.5" r="1.5"></circle><path d="M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z"></path></svg>'
                    },
                    {
                        name: 'hot_tub',
                        material: '<svg viewBox="0 0 24 24"><circle cx="7" cy="6" r="2"></circle><path d="M11.15 12c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15zM7 20H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zm-.35-14.14l-.07-.07c-.57-.62-.82-1.41-.67-2.2L18 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zm-4 0l-.07-.07c-.57-.62-.82-1.41-.67-2.2L14 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71z"></path></svg>'
                    },
                    {
                        name: 'kitchen',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 2.01L6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"></path></svg>'
                    },
                    {
                        name: 'pool',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z"></path><circle cx="16.5" cy="5.5" r="2.5"></circle></svg>'
                    },
                    {
                        name: 'room_service',
                        material: '<svg viewBox="0 0 24 24"><path d="M2 17h20v2H2zm11.84-9.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z"></path></svg>'
                    },
                    {
                        name: 'rv_hookup',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3 3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3z"></path></svg>'
                    },
                    {
                        name: 'smoke_free',
                        material: '<svg viewBox="0 0 24 24"><path d="M2 6l6.99 7H2v3h9.99l7 7 1.26-1.25-17-17zm18.5 7H22v3h-1.5zM18 13h1.5v3H18zm.85-8.12c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.92c0-2.23-1.28-4.15-3.15-5.04zM14.5 8.7h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.59c0-1.8-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75V2a3.35 3.35 0 0 0 0 6.7zm2.5 7.23V13h-2.93z"></path></svg>'
                    },
                    {
                        name: 'smoking_rooms',
                        material: '<svg viewBox="0 0 24 24"><path d="M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03zm-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5a3.35 3.35 0 0 0 0 6.7h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16z"></path></svg>'
                    },
                    {
                        name: 'spa',
                        material: '<svg viewBox="0 0 24 24"><path d="M8.55 12zm10.43-1.61z"></path><path d="M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63a12.188 12.188 0 0 0-3.55 7.63c1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z"></path></svg>'
                    },
                    {
                        name: 'cake',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 6a2 2 0 0 0 2-2c0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"></path></svg>'
                    },
                    {
                        name: 'domain',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></svg>'
                    },
                    {
                        name: 'group',
                        material: '<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>'
                    },
                    {
                        name: 'group_add',
                        material: '<svg viewBox="0 0 24 24"><path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"></path></svg>'
                    },
                    {
                        name: 'location_city',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"></path></svg>'
                    },
                    {
                        name: 'mood',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></svg>'
                    },
                    {
                        name: 'mood_bad',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path></svg>'
                    },
                    {
                        name: 'notifications',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>'
                    },
                    {
                        name: 'notifications_active',
                        material: '<svg viewBox="0 0 24 24"><path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 0 1 3.55-6.42zm12.39 6.42h2a10.49 10.49 0 0 0-4.12-7.85l-1.42 1.43a8.495 8.495 0 0 1 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04a2.03 2.03 0 0 0 1.44-1.18c.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"></path></svg>'
                    },
                    {
                        name: 'notifications_none',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path></svg>'
                    },
                    {
                        name: 'notifications_off',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z"></path></svg>'
                    },
                    {
                        name: 'notifications_paused',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2zm-3.5-6.2l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5v1.8z"></path></svg>'
                    },
                    {
                        name: 'pages',
                        material: '<svg viewBox="0 0 24 24"><path d="M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'party_mode',
                        material: '<svg viewBox="0 0 24 24"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1A5.002 5.002 0 0 1 12 7zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08a5.002 5.002 0 0 1-4.9 6z"></path></svg>'
                    },
                    {
                        name: 'people',
                        material: '<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>'
                    },
                    {
                        name: 'people_outline',
                        material: '<svg viewBox="0 0 24 24"><path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path></svg>'
                    },
                    {
                        name: 'person',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>'
                    },
                    {
                        name: 'person_add',
                        material: '<svg viewBox="0 0 24 24"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>'
                    },
                    {
                        name: 'person_outline',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 5.9a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></svg>'
                    },
                    {
                        name: 'plus_one',
                        material: '<svg viewBox="0 0 24 24"><path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z"></path></svg>'
                    },
                    {
                        name: 'poll',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></svg>'
                    },
                    {
                        name: 'public',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>'
                    },
                    {
                        name: 'school',
                        material: '<svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>'
                    },
                    {
                        name: 'sentiment_dissatisfied',
                        material: '<svg viewBox="0 0 24 24"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"></path></svg>'
                    },
                    {
                        name: 'sentiment_neutral',
                        material: '<svg viewBox="0 0 24 24"><path d="M9 14h6v1.5H9z"></path><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'sentiment_satisfied',
                        material: '<svg viewBox="0 0 24 24"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88a5.495 5.495 0 0 0 10.24 0h-1.67c-.7 1.19-1.97 2-3.45 2z"></path></svg>'
                    },
                    {
                        name: 'sentiment_very_dissatisfied',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path></svg>'
                    },
                    {
                        name: 'sentiment_very_satisfied',
                        material: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></svg>'
                    },
                    {
                        name: 'share',
                        material: '<svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></svg>'
                    },
                    {
                        name: 'whatshot',
                        material: '<svg viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04a4.8 4.8 0 0 1-4.8 4.8z"></path></svg>'
                    },
                    {
                        name: 'check_box',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>'
                    },
                    {
                        name: 'check_box_outline_blank',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>'
                    },
                    {
                        name: 'indeterminate_check_box',
                        material: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></svg>'
                    },
                    {
                        name: 'radio_button_checked',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'radio_button_unchecked',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>'
                    },
                    {
                        name: 'star',
                        material: '<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>'
                    },
                    {
                        name: 'star_border',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></svg>'
                    },
                    {
                        name: 'star_half',
                        material: '<svg viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></svg>'
                    }
                ];
                // tslint:enable:max-line-length
            },
            enumerable: true,
            configurable: true
        });
        return IconMap;
    }());
    exports.default = IconMap;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/form/ux-submit-attribute',["require", "exports", "aurelia-dependency-injection", "aurelia-pal"], function (require, exports, aurelia_dependency_injection_1, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxSubmitCustomAttribute = (function () {
        function UxSubmitCustomAttribute(element) {
            this.element = element;
            this.canSubmit = false;
        }
        UxSubmitCustomAttribute.prototype.attached = function () {
            var _this = this;
            var currentParent = this.element.parentElement;
            while (currentParent != null) {
                if (currentParent.tagName === 'UX-FORM') {
                    this.canSubmit = true;
                    this.submitEvent = aurelia_pal_1.DOM.createCustomEvent('submit', { bubbles: true });
                    this.element.addEventListener('mouseup', function () {
                        _this.element.dispatchEvent(_this.submitEvent);
                    });
                    break;
                }
                currentParent = currentParent.parentElement;
            }
        };
        UxSubmitCustomAttribute.prototype.detached = function () {
            var _this = this;
            if (this.canSubmit) {
                this.element.removeEventListener('mouseup', function () {
                    _this.element.dispatchEvent(_this.submitEvent);
                });
            }
        };
        return UxSubmitCustomAttribute;
    }());
    UxSubmitCustomAttribute = __decorate([
        aurelia_dependency_injection_1.inject(Element)
    ], UxSubmitCustomAttribute);
    exports.UxSubmitCustomAttribute = UxSubmitCustomAttribute;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/list/ux-list',["require", "exports", "aurelia-templating", "aurelia-dependency-injection", "../styles/style-engine", "../designs/design-attributes"], function (require, exports, aurelia_templating_1, aurelia_dependency_injection_1, style_engine_1, design_attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxList = (function () {
        function UxList(resources, styleEngine) {
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.theme = null;
        }
        UxList.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxList.prototype.bind = function () {
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
        };
        UxList.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        return UxList;
    }());
    __decorate([
        aurelia_templating_1.bindable
    ], UxList.prototype, "theme", void 0);
    UxList = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_templating_1.ViewResources, style_engine_1.StyleEngine),
        aurelia_templating_1.customElement('ux-list'),
        aurelia_templating_1.processAttributes(design_attributes_1.processDesignAttributes)
    ], UxList);
    exports.UxList = UxList;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-ux/list/ux-list-item',["require", "exports", "aurelia-templating", "aurelia-dependency-injection", "../styles/style-engine", "../designs/design-attributes"], function (require, exports, aurelia_templating_1, aurelia_dependency_injection_1, style_engine_1, design_attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UxListItem = (function () {
        function UxListItem(resources, styleEngine) {
            this.resources = resources;
            this.styleEngine = styleEngine;
            this.theme = null;
        }
        UxListItem.prototype.created = function (_, myView) {
            this.view = myView;
        };
        UxListItem.prototype.bind = function () {
            if (this.theme) {
                this.styleEngine.applyTheme(this, this.theme);
            }
        };
        UxListItem.prototype.themeChanged = function (newValue) {
            this.styleEngine.applyTheme(this, newValue);
        };
        return UxListItem;
    }());
    __decorate([
        aurelia_templating_1.bindable
    ], UxListItem.prototype, "theme", void 0);
    UxListItem = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_templating_1.ViewResources, style_engine_1.StyleEngine),
        aurelia_templating_1.customElement('ux-list-item'),
        aurelia_templating_1.processAttributes(design_attributes_1.processDesignAttributes)
    ], UxListItem);
    exports.UxListItem = UxListItem;
});

define('aurelia-validation/get-target-dom-element',["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Gets the DOM element associated with the data-binding. Most of the time it's
     * the binding.target but sometimes binding.target is an aurelia custom element,
     * or custom attribute which is a javascript "class" instance, so we need to use
     * the controller's container to retrieve the actual DOM element.
     */
    function getTargetDOMElement(binding, view) {
        var target = binding.target;
        // DOM element
        if (target instanceof Element) {
            return target;
        }
        // custom element or custom attribute
        // tslint:disable-next-line:prefer-const
        for (var i = 0, ii = view.controllers.length; i < ii; i++) {
            var controller = view.controllers[i];
            if (controller.viewModel === target) {
                var element = controller.container.get(aurelia_pal_1.DOM.Element);
                if (element) {
                    return element;
                }
                throw new Error("Unable to locate target element for \"" + binding.sourceExpression + "\".");
            }
        }
        throw new Error("Unable to locate target element for \"" + binding.sourceExpression + "\".");
    }
    exports.getTargetDOMElement = getTargetDOMElement;
});

define('aurelia-validation/property-info',["require", "exports", "aurelia-binding"], function (require, exports, aurelia_binding_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getObject(expression, objectExpression, source) {
        var value = objectExpression.evaluate(source, null);
        if (value === null || value === undefined || value instanceof Object) {
            return value;
        }
        // tslint:disable-next-line:max-line-length
        throw new Error("The '" + objectExpression + "' part of '" + expression + "' evaluates to " + value + " instead of an object, null or undefined.");
    }
    /**
     * Retrieves the object and property name for the specified expression.
     * @param expression The expression
     * @param source The scope
     */
    function getPropertyInfo(expression, source) {
        var originalExpression = expression;
        while (expression instanceof aurelia_binding_1.BindingBehavior || expression instanceof aurelia_binding_1.ValueConverter) {
            expression = expression.expression;
        }
        var object;
        var propertyName;
        if (expression instanceof aurelia_binding_1.AccessScope) {
            object = aurelia_binding_1.getContextFor(expression.name, source, expression.ancestor);
            propertyName = expression.name;
        }
        else if (expression instanceof aurelia_binding_1.AccessMember) {
            object = getObject(originalExpression, expression.object, source);
            propertyName = expression.name;
        }
        else if (expression instanceof aurelia_binding_1.AccessKeyed) {
            object = getObject(originalExpression, expression.object, source);
            propertyName = expression.key.evaluate(source);
        }
        else {
            throw new Error("Expression '" + originalExpression + "' is not compatible with the validate binding-behavior.");
        }
        if (object === null || object === undefined) {
            return null;
        }
        return { object: object, propertyName: propertyName };
    }
    exports.getPropertyInfo = getPropertyInfo;
});

define('aurelia-validation/property-accessor-parser',["require", "exports", "aurelia-binding", "./util"], function (require, exports, aurelia_binding_1, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PropertyAccessorParser = (function () {
        function PropertyAccessorParser(parser) {
            this.parser = parser;
        }
        PropertyAccessorParser.prototype.parse = function (property) {
            if (util_1.isString(property)) {
                return property;
            }
            var accessorText = getAccessorExpression(property.toString());
            var accessor = this.parser.parse(accessorText);
            if (accessor instanceof aurelia_binding_1.AccessScope
                || accessor instanceof aurelia_binding_1.AccessMember && accessor.object instanceof aurelia_binding_1.AccessScope) {
                return accessor.name;
            }
            throw new Error("Invalid property expression: \"" + accessor + "\"");
        };
        PropertyAccessorParser.inject = [aurelia_binding_1.Parser];
        return PropertyAccessorParser;
    }());
    exports.PropertyAccessorParser = PropertyAccessorParser;
    function getAccessorExpression(fn) {
        /* tslint:disable:max-line-length */
        var classic = /^function\s*\([$_\w\d]+\)\s*\{(?:\s*"use strict";)?\s*(?:[$_\w\d.['"\]+;]+)?\s*return\s+[$_\w\d]+\.([$_\w\d]+)\s*;?\s*\}$/;
        /* tslint:enable:max-line-length */
        var arrow = /^\(?[$_\w\d]+\)?\s*=>\s*[$_\w\d]+\.([$_\w\d]+)$/;
        var match = classic.exec(fn) || arrow.exec(fn);
        if (match === null) {
            throw new Error("Unable to parse accessor function:\n" + fn);
        }
        return match[1];
    }
    exports.getAccessorExpression = getAccessorExpression;
});

define('aurelia-validation/util',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isString(value) {
        return Object.prototype.toString.call(value) === '[object String]';
    }
    exports.isString = isString;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('aurelia-validation/validate-binding-behavior',["require", "exports", "aurelia-task-queue", "./validate-trigger", "./validate-binding-behavior-base"], function (require, exports, aurelia_task_queue_1, validate_trigger_1, validate_binding_behavior_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the validate trigger specified by the associated controller's
     * validateTrigger property occurs.
     */
    var ValidateBindingBehavior = (function (_super) {
        __extends(ValidateBindingBehavior, _super);
        function ValidateBindingBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidateBindingBehavior.prototype.getValidateTrigger = function (controller) {
            return controller.validateTrigger;
        };
        ValidateBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    exports.ValidateBindingBehavior = ValidateBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property will be validated
     * manually, by calling controller.validate(). No automatic validation
     * triggered by data-entry or blur will occur.
     */
    var ValidateManuallyBindingBehavior = (function (_super) {
        __extends(ValidateManuallyBindingBehavior, _super);
        function ValidateManuallyBindingBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidateManuallyBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.manual;
        };
        ValidateManuallyBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateManuallyBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    exports.ValidateManuallyBindingBehavior = ValidateManuallyBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the associated element blurs.
     */
    var ValidateOnBlurBindingBehavior = (function (_super) {
        __extends(ValidateOnBlurBindingBehavior, _super);
        function ValidateOnBlurBindingBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidateOnBlurBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.blur;
        };
        ValidateOnBlurBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateOnBlurBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    exports.ValidateOnBlurBindingBehavior = ValidateOnBlurBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the associated element is changed by the user, causing a change
     * to the model.
     */
    var ValidateOnChangeBindingBehavior = (function (_super) {
        __extends(ValidateOnChangeBindingBehavior, _super);
        function ValidateOnChangeBindingBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidateOnChangeBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.change;
        };
        ValidateOnChangeBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateOnChangeBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    exports.ValidateOnChangeBindingBehavior = ValidateOnChangeBindingBehavior;
    /**
     * Binding behavior. Indicates the bound property should be validated
     * when the associated element blurs or is changed by the user, causing
     * a change to the model.
     */
    var ValidateOnChangeOrBlurBindingBehavior = (function (_super) {
        __extends(ValidateOnChangeOrBlurBindingBehavior, _super);
        function ValidateOnChangeOrBlurBindingBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidateOnChangeOrBlurBindingBehavior.prototype.getValidateTrigger = function () {
            return validate_trigger_1.validateTrigger.changeOrBlur;
        };
        ValidateOnChangeOrBlurBindingBehavior.inject = [aurelia_task_queue_1.TaskQueue];
        return ValidateOnChangeOrBlurBindingBehavior;
    }(validate_binding_behavior_base_1.ValidateBindingBehaviorBase));
    exports.ValidateOnChangeOrBlurBindingBehavior = ValidateOnChangeOrBlurBindingBehavior;
});

define('aurelia-validation/validate-trigger',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Validation triggers.
     */
    var validateTrigger;
    (function (validateTrigger) {
        /**
         * Manual validation.  Use the controller's `validate()` and  `reset()` methods
         * to validate all bindings.
         */
        validateTrigger[validateTrigger["manual"] = 0] = "manual";
        /**
         * Validate the binding when the binding's target element fires a DOM "blur" event.
         */
        validateTrigger[validateTrigger["blur"] = 1] = "blur";
        /**
         * Validate the binding when it updates the model due to a change in the view.
         */
        validateTrigger[validateTrigger["change"] = 2] = "change";
        /**
         * Validate the binding when the binding's target element fires a DOM "blur" event and
         * when it updates the model due to a change in the view.
         */
        validateTrigger[validateTrigger["changeOrBlur"] = 3] = "changeOrBlur";
    })(validateTrigger = exports.validateTrigger || (exports.validateTrigger = {}));
});

define('aurelia-validation/validate-binding-behavior-base',["require", "exports", "aurelia-dependency-injection", "./validation-controller", "./validate-trigger", "./get-target-dom-element"], function (require, exports, aurelia_dependency_injection_1, validation_controller_1, validate_trigger_1, get_target_dom_element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Binding behavior. Indicates the bound property should be validated.
     */
    var ValidateBindingBehaviorBase = (function () {
        function ValidateBindingBehaviorBase(taskQueue) {
            this.taskQueue = taskQueue;
        }
        ValidateBindingBehaviorBase.prototype.bind = function (binding, source, rulesOrController, rules) {
            var _this = this;
            // identify the target element.
            var target = get_target_dom_element_1.getTargetDOMElement(binding, source);
            // locate the controller.
            var controller;
            if (rulesOrController instanceof validation_controller_1.ValidationController) {
                controller = rulesOrController;
            }
            else {
                controller = source.container.get(aurelia_dependency_injection_1.Optional.of(validation_controller_1.ValidationController));
                rules = rulesOrController;
            }
            if (controller === null) {
                throw new Error("A ValidationController has not been registered.");
            }
            controller.registerBinding(binding, target, rules);
            binding.validationController = controller;
            var trigger = this.getValidateTrigger(controller);
            // tslint:disable-next-line:no-bitwise
            if (trigger & validate_trigger_1.validateTrigger.change) {
                binding.standardUpdateSource = binding.updateSource;
                // tslint:disable-next-line:only-arrow-functions
                // tslint:disable-next-line:space-before-function-paren
                binding.updateSource = function (value) {
                    this.standardUpdateSource(value);
                    this.validationController.validateBinding(this);
                };
            }
            // tslint:disable-next-line:no-bitwise
            if (trigger & validate_trigger_1.validateTrigger.blur) {
                binding.validateBlurHandler = function () {
                    _this.taskQueue.queueMicroTask(function () { return controller.validateBinding(binding); });
                };
                binding.validateTarget = target;
                target.addEventListener('blur', binding.validateBlurHandler);
            }
            if (trigger !== validate_trigger_1.validateTrigger.manual) {
                binding.standardUpdateTarget = binding.updateTarget;
                // tslint:disable-next-line:only-arrow-functions
                // tslint:disable-next-line:space-before-function-paren
                binding.updateTarget = function (value) {
                    this.standardUpdateTarget(value);
                    this.validationController.resetBinding(this);
                };
            }
        };
        ValidateBindingBehaviorBase.prototype.unbind = function (binding) {
            // reset the binding to it's original state.
            if (binding.standardUpdateSource) {
                binding.updateSource = binding.standardUpdateSource;
                binding.standardUpdateSource = null;
            }
            if (binding.standardUpdateTarget) {
                binding.updateTarget = binding.standardUpdateTarget;
                binding.standardUpdateTarget = null;
            }
            if (binding.validateBlurHandler) {
                binding.validateTarget.removeEventListener('blur', binding.validateBlurHandler);
                binding.validateBlurHandler = null;
                binding.validateTarget = null;
            }
            binding.validationController.unregisterBinding(binding);
            binding.validationController = null;
        };
        return ValidateBindingBehaviorBase;
    }());
    exports.ValidateBindingBehaviorBase = ValidateBindingBehaviorBase;
});

define('aurelia-validation/validation-controller',["require", "exports", "./validator", "./validate-trigger", "./property-info", "./validate-result", "./property-accessor-parser", "./validate-event"], function (require, exports, validator_1, validate_trigger_1, property_info_1, validate_result_1, property_accessor_parser_1, validate_event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Orchestrates validation.
     * Manages a set of bindings, renderers and objects.
     * Exposes the current list of validation results for binding purposes.
     */
    var ValidationController = (function () {
        function ValidationController(validator, propertyParser) {
            this.validator = validator;
            this.propertyParser = propertyParser;
            // Registered bindings (via the validate binding behavior)
            this.bindings = new Map();
            // Renderers that have been added to the controller instance.
            this.renderers = [];
            /**
             * Validation results that have been rendered by the controller.
             */
            this.results = [];
            /**
             * Validation errors that have been rendered by the controller.
             */
            this.errors = [];
            /**
             *  Whether the controller is currently validating.
             */
            this.validating = false;
            // Elements related to validation results that have been rendered.
            this.elements = new Map();
            // Objects that have been added to the controller instance (entity-style validation).
            this.objects = new Map();
            /**
             * The trigger that will invoke automatic validation of a property used in a binding.
             */
            this.validateTrigger = validate_trigger_1.validateTrigger.blur;
            // Promise that resolves when validation has completed.
            this.finishValidating = Promise.resolve();
            this.eventCallbacks = [];
        }
        /**
         * Subscribe to controller validate and reset events. These events occur when the
         * controller's "validate"" and "reset" methods are called.
         * @param callback The callback to be invoked when the controller validates or resets.
         */
        ValidationController.prototype.subscribe = function (callback) {
            var _this = this;
            this.eventCallbacks.push(callback);
            return {
                dispose: function () {
                    var index = _this.eventCallbacks.indexOf(callback);
                    if (index === -1) {
                        return;
                    }
                    _this.eventCallbacks.splice(index, 1);
                }
            };
        };
        /**
         * Adds an object to the set of objects that should be validated when validate is called.
         * @param object The object.
         * @param rules Optional. The rules. If rules aren't supplied the Validator implementation will lookup the rules.
         */
        ValidationController.prototype.addObject = function (object, rules) {
            this.objects.set(object, rules);
        };
        /**
         * Removes an object from the set of objects that should be validated when validate is called.
         * @param object The object.
         */
        ValidationController.prototype.removeObject = function (object) {
            this.objects.delete(object);
            this.processResultDelta('reset', this.results.filter(function (result) { return result.object === object; }), []);
        };
        /**
         * Adds and renders an error.
         */
        ValidationController.prototype.addError = function (message, object, propertyName) {
            if (propertyName === void 0) { propertyName = null; }
            var resolvedPropertyName;
            if (propertyName === null) {
                resolvedPropertyName = propertyName;
            }
            else {
                resolvedPropertyName = this.propertyParser.parse(propertyName);
            }
            var result = new validate_result_1.ValidateResult({ __manuallyAdded__: true }, object, resolvedPropertyName, false, message);
            this.processResultDelta('validate', [], [result]);
            return result;
        };
        /**
         * Removes and unrenders an error.
         */
        ValidationController.prototype.removeError = function (result) {
            if (this.results.indexOf(result) !== -1) {
                this.processResultDelta('reset', [result], []);
            }
        };
        /**
         * Adds a renderer.
         * @param renderer The renderer.
         */
        ValidationController.prototype.addRenderer = function (renderer) {
            var _this = this;
            this.renderers.push(renderer);
            renderer.render({
                kind: 'validate',
                render: this.results.map(function (result) { return ({ result: result, elements: _this.elements.get(result) }); }),
                unrender: []
            });
        };
        /**
         * Removes a renderer.
         * @param renderer The renderer.
         */
        ValidationController.prototype.removeRenderer = function (renderer) {
            var _this = this;
            this.renderers.splice(this.renderers.indexOf(renderer), 1);
            renderer.render({
                kind: 'reset',
                render: [],
                unrender: this.results.map(function (result) { return ({ result: result, elements: _this.elements.get(result) }); })
            });
        };
        /**
         * Registers a binding with the controller.
         * @param binding The binding instance.
         * @param target The DOM element.
         * @param rules (optional) rules associated with the binding. Validator implementation specific.
         */
        ValidationController.prototype.registerBinding = function (binding, target, rules) {
            this.bindings.set(binding, { target: target, rules: rules, propertyInfo: null });
        };
        /**
         * Unregisters a binding with the controller.
         * @param binding The binding instance.
         */
        ValidationController.prototype.unregisterBinding = function (binding) {
            this.resetBinding(binding);
            this.bindings.delete(binding);
        };
        /**
         * Interprets the instruction and returns a predicate that will identify
         * relevant results in the list of rendered validation results.
         */
        ValidationController.prototype.getInstructionPredicate = function (instruction) {
            var _this = this;
            if (instruction) {
                var object_1 = instruction.object, propertyName_1 = instruction.propertyName, rules_1 = instruction.rules;
                var predicate_1;
                if (instruction.propertyName) {
                    predicate_1 = function (x) { return x.object === object_1 && x.propertyName === propertyName_1; };
                }
                else {
                    predicate_1 = function (x) { return x.object === object_1; };
                }
                if (rules_1) {
                    return function (x) { return predicate_1(x) && _this.validator.ruleExists(rules_1, x.rule); };
                }
                return predicate_1;
            }
            else {
                return function () { return true; };
            }
        };
        /**
         * Validates and renders results.
         * @param instruction Optional. Instructions on what to validate. If undefined, all
         * objects and bindings will be validated.
         */
        ValidationController.prototype.validate = function (instruction) {
            var _this = this;
            // Get a function that will process the validation instruction.
            var execute;
            if (instruction) {
                // tslint:disable-next-line:prefer-const
                var object_2 = instruction.object, propertyName_2 = instruction.propertyName, rules_2 = instruction.rules;
                // if rules were not specified, check the object map.
                rules_2 = rules_2 || this.objects.get(object_2);
                // property specified?
                if (instruction.propertyName === undefined) {
                    // validate the specified object.
                    execute = function () { return _this.validator.validateObject(object_2, rules_2); };
                }
                else {
                    // validate the specified property.
                    execute = function () { return _this.validator.validateProperty(object_2, propertyName_2, rules_2); };
                }
            }
            else {
                // validate all objects and bindings.
                execute = function () {
                    var promises = [];
                    for (var _i = 0, _a = Array.from(_this.objects); _i < _a.length; _i++) {
                        var _b = _a[_i], object = _b[0], rules = _b[1];
                        promises.push(_this.validator.validateObject(object, rules));
                    }
                    for (var _c = 0, _d = Array.from(_this.bindings); _c < _d.length; _c++) {
                        var _e = _d[_c], binding = _e[0], rules = _e[1].rules;
                        var propertyInfo = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source);
                        if (!propertyInfo || _this.objects.has(propertyInfo.object)) {
                            continue;
                        }
                        promises.push(_this.validator.validateProperty(propertyInfo.object, propertyInfo.propertyName, rules));
                    }
                    return Promise.all(promises).then(function (resultSets) { return resultSets.reduce(function (a, b) { return a.concat(b); }, []); });
                };
            }
            // Wait for any existing validation to finish, execute the instruction, render the results.
            this.validating = true;
            var returnPromise = this.finishValidating
                .then(execute)
                .then(function (newResults) {
                var predicate = _this.getInstructionPredicate(instruction);
                var oldResults = _this.results.filter(predicate);
                _this.processResultDelta('validate', oldResults, newResults);
                if (returnPromise === _this.finishValidating) {
                    _this.validating = false;
                }
                var result = {
                    instruction: instruction,
                    valid: newResults.find(function (x) { return !x.valid; }) === undefined,
                    results: newResults
                };
                _this.invokeCallbacks(instruction, result);
                return result;
            })
                .catch(function (exception) {
                // recover, to enable subsequent calls to validate()
                _this.validating = false;
                _this.finishValidating = Promise.resolve();
                return Promise.reject(exception);
            });
            this.finishValidating = returnPromise;
            return returnPromise;
        };
        /**
         * Resets any rendered validation results (unrenders).
         * @param instruction Optional. Instructions on what to reset. If unspecified all rendered results
         * will be unrendered.
         */
        ValidationController.prototype.reset = function (instruction) {
            var predicate = this.getInstructionPredicate(instruction);
            var oldResults = this.results.filter(predicate);
            this.processResultDelta('reset', oldResults, []);
            this.invokeCallbacks(instruction, null);
        };
        /**
         * Gets the elements associated with an object and propertyName (if any).
         */
        ValidationController.prototype.getAssociatedElements = function (_a) {
            var object = _a.object, propertyName = _a.propertyName;
            var elements = [];
            for (var _i = 0, _b = Array.from(this.bindings); _i < _b.length; _i++) {
                var _c = _b[_i], binding = _c[0], target = _c[1].target;
                var propertyInfo = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source);
                if (propertyInfo && propertyInfo.object === object && propertyInfo.propertyName === propertyName) {
                    elements.push(target);
                }
            }
            return elements;
        };
        ValidationController.prototype.processResultDelta = function (kind, oldResults, newResults) {
            // prepare the instruction.
            var instruction = {
                kind: kind,
                render: [],
                unrender: []
            };
            // create a shallow copy of newResults so we can mutate it without causing side-effects.
            newResults = newResults.slice(0);
            var _loop_1 = function (oldResult) {
                // get the elements associated with the old result.
                var elements = this_1.elements.get(oldResult);
                // remove the old result from the element map.
                this_1.elements.delete(oldResult);
                // create the unrender instruction.
                instruction.unrender.push({ result: oldResult, elements: elements });
                // determine if there's a corresponding new result for the old result we are unrendering.
                var newResultIndex = newResults.findIndex(function (x) { return x.rule === oldResult.rule && x.object === oldResult.object && x.propertyName === oldResult.propertyName; });
                if (newResultIndex === -1) {
                    // no corresponding new result... simple remove.
                    this_1.results.splice(this_1.results.indexOf(oldResult), 1);
                    if (!oldResult.valid) {
                        this_1.errors.splice(this_1.errors.indexOf(oldResult), 1);
                    }
                }
                else {
                    // there is a corresponding new result...
                    var newResult = newResults.splice(newResultIndex, 1)[0];
                    // get the elements that are associated with the new result.
                    var elements_1 = this_1.getAssociatedElements(newResult);
                    this_1.elements.set(newResult, elements_1);
                    // create a render instruction for the new result.
                    instruction.render.push({ result: newResult, elements: elements_1 });
                    // do an in-place replacement of the old result with the new result.
                    // this ensures any repeats bound to this.results will not thrash.
                    this_1.results.splice(this_1.results.indexOf(oldResult), 1, newResult);
                    if (!oldResult.valid && newResult.valid) {
                        this_1.errors.splice(this_1.errors.indexOf(oldResult), 1);
                    }
                    else if (!oldResult.valid && !newResult.valid) {
                        this_1.errors.splice(this_1.errors.indexOf(oldResult), 1, newResult);
                    }
                    else if (!newResult.valid) {
                        this_1.errors.push(newResult);
                    }
                }
            };
            var this_1 = this;
            // create unrender instructions from the old results.
            for (var _i = 0, oldResults_1 = oldResults; _i < oldResults_1.length; _i++) {
                var oldResult = oldResults_1[_i];
                _loop_1(oldResult);
            }
            // create render instructions from the remaining new results.
            for (var _a = 0, newResults_1 = newResults; _a < newResults_1.length; _a++) {
                var result = newResults_1[_a];
                var elements = this.getAssociatedElements(result);
                instruction.render.push({ result: result, elements: elements });
                this.elements.set(result, elements);
                this.results.push(result);
                if (!result.valid) {
                    this.errors.push(result);
                }
            }
            // render.
            for (var _b = 0, _c = this.renderers; _b < _c.length; _b++) {
                var renderer = _c[_b];
                renderer.render(instruction);
            }
        };
        /**
         * Validates the property associated with a binding.
         */
        ValidationController.prototype.validateBinding = function (binding) {
            if (!binding.isBound) {
                return;
            }
            var propertyInfo = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source);
            var rules;
            var registeredBinding = this.bindings.get(binding);
            if (registeredBinding) {
                rules = registeredBinding.rules;
                registeredBinding.propertyInfo = propertyInfo;
            }
            if (!propertyInfo) {
                return;
            }
            var object = propertyInfo.object, propertyName = propertyInfo.propertyName;
            this.validate({ object: object, propertyName: propertyName, rules: rules });
        };
        /**
         * Resets the results for a property associated with a binding.
         */
        ValidationController.prototype.resetBinding = function (binding) {
            var registeredBinding = this.bindings.get(binding);
            var propertyInfo = property_info_1.getPropertyInfo(binding.sourceExpression, binding.source);
            if (!propertyInfo && registeredBinding) {
                propertyInfo = registeredBinding.propertyInfo;
            }
            if (registeredBinding) {
                registeredBinding.propertyInfo = null;
            }
            if (!propertyInfo) {
                return;
            }
            var object = propertyInfo.object, propertyName = propertyInfo.propertyName;
            this.reset({ object: object, propertyName: propertyName });
        };
        /**
         * Changes the controller's validateTrigger.
         * @param newTrigger The new validateTrigger
         */
        ValidationController.prototype.changeTrigger = function (newTrigger) {
            this.validateTrigger = newTrigger;
            var bindings = Array.from(this.bindings.keys());
            for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
                var binding = bindings_1[_i];
                var source = binding.source;
                binding.unbind();
                binding.bind(source);
            }
        };
        /**
         * Revalidates the controller's current set of errors.
         */
        ValidationController.prototype.revalidateErrors = function () {
            for (var _i = 0, _a = this.errors; _i < _a.length; _i++) {
                var _b = _a[_i], object = _b.object, propertyName = _b.propertyName, rule = _b.rule;
                if (rule.__manuallyAdded__) {
                    continue;
                }
                var rules = [[rule]];
                this.validate({ object: object, propertyName: propertyName, rules: rules });
            }
        };
        ValidationController.prototype.invokeCallbacks = function (instruction, result) {
            if (this.eventCallbacks.length === 0) {
                return;
            }
            var event = new validate_event_1.ValidateEvent(result ? 'validate' : 'reset', this.errors, this.results, instruction || null, result);
            for (var i = 0; i < this.eventCallbacks.length; i++) {
                this.eventCallbacks[i](event);
            }
        };
        ValidationController.inject = [validator_1.Validator, property_accessor_parser_1.PropertyAccessorParser];
        return ValidationController;
    }());
    exports.ValidationController = ValidationController;
});

define('aurelia-validation/validator',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Validates objects and properties.
     */
    var Validator = (function () {
        function Validator() {
        }
        return Validator;
    }());
    exports.Validator = Validator;
});

define('aurelia-validation/validate-result',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The result of validating an individual validation rule.
     */
    var ValidateResult = (function () {
        /**
         * @param rule The rule associated with the result. Validator implementation specific.
         * @param object The object that was validated.
         * @param propertyName The name of the property that was validated.
         * @param error The error, if the result is a validation error.
         */
        function ValidateResult(rule, object, propertyName, valid, message) {
            if (message === void 0) { message = null; }
            this.rule = rule;
            this.object = object;
            this.propertyName = propertyName;
            this.valid = valid;
            this.message = message;
            this.id = ValidateResult.nextId++;
        }
        ValidateResult.prototype.toString = function () {
            return this.valid ? 'Valid.' : this.message;
        };
        ValidateResult.nextId = 0;
        return ValidateResult;
    }());
    exports.ValidateResult = ValidateResult;
});

define('aurelia-validation/validate-event',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidateEvent = (function () {
        function ValidateEvent(
            /**
             * The type of validate event. Either "validate" or "reset".
             */
            type, 
            /**
             * The controller's current array of errors. For an array containing both
             * failed rules and passed rules, use the "results" property.
             */
            errors, 
            /**
             * The controller's current array of validate results. This
             * includes both passed rules and failed rules. For an array of only failed rules,
             * use the "errors" property.
             */
            results, 
            /**
             * The instruction passed to the "validate" or "reset" event. Will be null when
             * the controller's validate/reset method was called with no instruction argument.
             */
            instruction, 
            /**
             * In events with type === "validate", this property will contain the result
             * of validating the instruction (see "instruction" property). Use the controllerValidateResult
             * to access the validate results specific to the call to "validate"
             * (as opposed to using the "results" and "errors" properties to access the controller's entire
             * set of results/errors).
             */
            controllerValidateResult) {
            this.type = type;
            this.errors = errors;
            this.results = results;
            this.instruction = instruction;
            this.controllerValidateResult = controllerValidateResult;
        }
        return ValidateEvent;
    }());
    exports.ValidateEvent = ValidateEvent;
});

define('aurelia-validation/validation-controller-factory',["require", "exports", "./validation-controller", "./validator", "./property-accessor-parser"], function (require, exports, validation_controller_1, validator_1, property_accessor_parser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Creates ValidationController instances.
     */
    var ValidationControllerFactory = (function () {
        function ValidationControllerFactory(container) {
            this.container = container;
        }
        ValidationControllerFactory.get = function (container) {
            return new ValidationControllerFactory(container);
        };
        /**
         * Creates a new controller instance.
         */
        ValidationControllerFactory.prototype.create = function (validator) {
            if (!validator) {
                validator = this.container.get(validator_1.Validator);
            }
            var propertyParser = this.container.get(property_accessor_parser_1.PropertyAccessorParser);
            return new validation_controller_1.ValidationController(validator, propertyParser);
        };
        /**
         * Creates a new controller and registers it in the current element's container so that it's
         * available to the validate binding behavior and renderers.
         */
        ValidationControllerFactory.prototype.createForCurrentScope = function (validator) {
            var controller = this.create(validator);
            this.container.registerInstance(validation_controller_1.ValidationController, controller);
            return controller;
        };
        return ValidationControllerFactory;
    }());
    exports.ValidationControllerFactory = ValidationControllerFactory;
    ValidationControllerFactory['protocol:aurelia:resolver'] = true;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('aurelia-validation/validation-errors-custom-attribute',["require", "exports", "aurelia-binding", "aurelia-dependency-injection", "aurelia-templating", "./validation-controller", "aurelia-pal"], function (require, exports, aurelia_binding_1, aurelia_dependency_injection_1, aurelia_templating_1, validation_controller_1, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationErrorsCustomAttribute = (function () {
        function ValidationErrorsCustomAttribute(boundaryElement, controllerAccessor) {
            this.boundaryElement = boundaryElement;
            this.controllerAccessor = controllerAccessor;
            this.controller = null;
            this.errors = [];
            this.errorsInternal = [];
        }
        ValidationErrorsCustomAttribute.prototype.sort = function () {
            this.errorsInternal.sort(function (a, b) {
                if (a.targets[0] === b.targets[0]) {
                    return 0;
                }
                // tslint:disable-next-line:no-bitwise
                return a.targets[0].compareDocumentPosition(b.targets[0]) & 2 ? 1 : -1;
            });
        };
        ValidationErrorsCustomAttribute.prototype.interestingElements = function (elements) {
            var _this = this;
            return elements.filter(function (e) { return _this.boundaryElement.contains(e); });
        };
        ValidationErrorsCustomAttribute.prototype.render = function (instruction) {
            var _loop_1 = function (result) {
                var index = this_1.errorsInternal.findIndex(function (x) { return x.error === result; });
                if (index !== -1) {
                    this_1.errorsInternal.splice(index, 1);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
                var result = _a[_i].result;
                _loop_1(result);
            }
            for (var _b = 0, _c = instruction.render; _b < _c.length; _b++) {
                var _d = _c[_b], result = _d.result, elements = _d.elements;
                if (result.valid) {
                    continue;
                }
                var targets = this.interestingElements(elements);
                if (targets.length) {
                    this.errorsInternal.push({ error: result, targets: targets });
                }
            }
            this.sort();
            this.errors = this.errorsInternal;
        };
        ValidationErrorsCustomAttribute.prototype.bind = function () {
            if (!this.controller) {
                this.controller = this.controllerAccessor();
            }
            // this will call render() with the side-effect of updating this.errors
            this.controller.addRenderer(this);
        };
        ValidationErrorsCustomAttribute.prototype.unbind = function () {
            if (this.controller) {
                this.controller.removeRenderer(this);
            }
        };
        ValidationErrorsCustomAttribute.inject = [aurelia_pal_1.DOM.Element, aurelia_dependency_injection_1.Lazy.of(validation_controller_1.ValidationController)];
        __decorate([
            aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.oneWay })
        ], ValidationErrorsCustomAttribute.prototype, "controller", void 0);
        __decorate([
            aurelia_templating_1.bindable({ primaryProperty: true, defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
        ], ValidationErrorsCustomAttribute.prototype, "errors", void 0);
        ValidationErrorsCustomAttribute = __decorate([
            aurelia_templating_1.customAttribute('validation-errors')
        ], ValidationErrorsCustomAttribute);
        return ValidationErrorsCustomAttribute;
    }());
    exports.ValidationErrorsCustomAttribute = ValidationErrorsCustomAttribute;
});

define('aurelia-validation/validation-renderer-custom-attribute',["require", "exports", "./validation-controller"], function (require, exports, validation_controller_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationRendererCustomAttribute = (function () {
        function ValidationRendererCustomAttribute() {
        }
        ValidationRendererCustomAttribute.prototype.created = function (view) {
            this.container = view.container;
        };
        ValidationRendererCustomAttribute.prototype.bind = function () {
            this.controller = this.container.get(validation_controller_1.ValidationController);
            this.renderer = this.container.get(this.value);
            this.controller.addRenderer(this.renderer);
        };
        ValidationRendererCustomAttribute.prototype.unbind = function () {
            this.controller.removeRenderer(this.renderer);
            this.controller = null;
            this.renderer = null;
        };
        return ValidationRendererCustomAttribute;
    }());
    exports.ValidationRendererCustomAttribute = ValidationRendererCustomAttribute;
});

define('aurelia-validation/implementation/rules',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Sets, unsets and retrieves rules on an object or constructor function.
     */
    var Rules = (function () {
        function Rules() {
        }
        /**
         * Applies the rules to a target.
         */
        Rules.set = function (target, rules) {
            if (target instanceof Function) {
                target = target.prototype;
            }
            Object.defineProperty(target, Rules.key, { enumerable: false, configurable: false, writable: true, value: rules });
        };
        /**
         * Removes rules from a target.
         */
        Rules.unset = function (target) {
            if (target instanceof Function) {
                target = target.prototype;
            }
            target[Rules.key] = null;
        };
        /**
         * Retrieves the target's rules.
         */
        Rules.get = function (target) {
            return target[Rules.key] || null;
        };
        /**
         * The name of the property that stores the rules.
         */
        Rules.key = '__rules__';
        return Rules;
    }());
    exports.Rules = Rules;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('aurelia-validation/implementation/standard-validator',["require", "exports", "aurelia-templating", "../validator", "../validate-result", "./rules", "./validation-messages"], function (require, exports, aurelia_templating_1, validator_1, validate_result_1, rules_1, validation_messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Validates.
     * Responsible for validating objects and properties.
     */
    var StandardValidator = (function (_super) {
        __extends(StandardValidator, _super);
        function StandardValidator(messageProvider, resources) {
            var _this = _super.call(this) || this;
            _this.messageProvider = messageProvider;
            _this.lookupFunctions = resources.lookupFunctions;
            _this.getDisplayName = messageProvider.getDisplayName.bind(messageProvider);
            return _this;
        }
        /**
         * Validates the specified property.
         * @param object The object to validate.
         * @param propertyName The name of the property to validate.
         * @param rules Optional. If unspecified, the rules will be looked up using the metadata
         * for the object created by ValidationRules....on(class/object)
         */
        StandardValidator.prototype.validateProperty = function (object, propertyName, rules) {
            return this.validate(object, propertyName, rules || null);
        };
        /**
         * Validates all rules for specified object and it's properties.
         * @param object The object to validate.
         * @param rules Optional. If unspecified, the rules will be looked up using the metadata
         * for the object created by ValidationRules....on(class/object)
         */
        StandardValidator.prototype.validateObject = function (object, rules) {
            return this.validate(object, null, rules || null);
        };
        /**
         * Determines whether a rule exists in a set of rules.
         * @param rules The rules to search.
         * @parem rule The rule to find.
         */
        StandardValidator.prototype.ruleExists = function (rules, rule) {
            var i = rules.length;
            while (i--) {
                if (rules[i].indexOf(rule) !== -1) {
                    return true;
                }
            }
            return false;
        };
        StandardValidator.prototype.getMessage = function (rule, object, value) {
            var expression = rule.message || this.messageProvider.getMessage(rule.messageKey);
            // tslint:disable-next-line:prefer-const
            var _a = rule.property, propertyName = _a.name, displayName = _a.displayName;
            if (propertyName !== null) {
                displayName = this.messageProvider.getDisplayName(propertyName, displayName);
            }
            var overrideContext = {
                $displayName: displayName,
                $propertyName: propertyName,
                $value: value,
                $object: object,
                $config: rule.config,
                // returns the name of a given property, given just the property name (irrespective of the property's displayName)
                // split on capital letters, first letter ensured to be capitalized
                $getDisplayName: this.getDisplayName
            };
            return expression.evaluate({ bindingContext: object, overrideContext: overrideContext }, this.lookupFunctions);
        };
        StandardValidator.prototype.validateRuleSequence = function (object, propertyName, ruleSequence, sequence, results) {
            var _this = this;
            // are we validating all properties or a single property?
            var validateAllProperties = propertyName === null || propertyName === undefined;
            var rules = ruleSequence[sequence];
            var allValid = true;
            // validate each rule.
            var promises = [];
            var _loop_1 = function (i) {
                var rule = rules[i];
                // is the rule related to the property we're validating.
                if (!validateAllProperties && rule.property.name !== propertyName) {
                    return "continue";
                }
                // is this a conditional rule? is the condition met?
                if (rule.when && !rule.when(object)) {
                    return "continue";
                }
                // validate.
                var value = rule.property.name === null ? object : object[rule.property.name];
                var promiseOrBoolean = rule.condition(value, object);
                if (!(promiseOrBoolean instanceof Promise)) {
                    promiseOrBoolean = Promise.resolve(promiseOrBoolean);
                }
                promises.push(promiseOrBoolean.then(function (valid) {
                    var message = valid ? null : _this.getMessage(rule, object, value);
                    results.push(new validate_result_1.ValidateResult(rule, object, rule.property.name, valid, message));
                    allValid = allValid && valid;
                    return valid;
                }));
            };
            for (var i = 0; i < rules.length; i++) {
                _loop_1(i);
            }
            return Promise.all(promises)
                .then(function () {
                sequence++;
                if (allValid && sequence < ruleSequence.length) {
                    return _this.validateRuleSequence(object, propertyName, ruleSequence, sequence, results);
                }
                return results;
            });
        };
        StandardValidator.prototype.validate = function (object, propertyName, rules) {
            // rules specified?
            if (!rules) {
                // no. attempt to locate the rules.
                rules = rules_1.Rules.get(object);
            }
            // any rules?
            if (!rules) {
                return Promise.resolve([]);
            }
            return this.validateRuleSequence(object, propertyName, rules, 0, []);
        };
        StandardValidator.inject = [validation_messages_1.ValidationMessageProvider, aurelia_templating_1.ViewResources];
        return StandardValidator;
    }(validator_1.Validator));
    exports.StandardValidator = StandardValidator;
});

define('aurelia-validation/implementation/validation-messages',["require", "exports", "./validation-message-parser"], function (require, exports, validation_message_parser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Dictionary of validation messages. [messageKey]: messageExpression
     */
    exports.validationMessages = {
        /**
         * The default validation message. Used with rules that have no standard message.
         */
        default: "${$displayName} is invalid.",
        required: "${$displayName} is required.",
        matches: "${$displayName} is not correctly formatted.",
        email: "${$displayName} is not a valid email.",
        minLength: "${$displayName} must be at least ${$config.length} character${$config.length === 1 ? '' : 's'}.",
        maxLength: "${$displayName} cannot be longer than ${$config.length} character${$config.length === 1 ? '' : 's'}.",
        minItems: "${$displayName} must contain at least ${$config.count} item${$config.count === 1 ? '' : 's'}.",
        maxItems: "${$displayName} cannot contain more than ${$config.count} item${$config.count === 1 ? '' : 's'}.",
        equals: "${$displayName} must be ${$config.expectedValue}.",
    };
    /**
     * Retrieves validation messages and property display names.
     */
    var ValidationMessageProvider = (function () {
        function ValidationMessageProvider(parser) {
            this.parser = parser;
        }
        /**
         * Returns a message binding expression that corresponds to the key.
         * @param key The message key.
         */
        ValidationMessageProvider.prototype.getMessage = function (key) {
            var message;
            if (key in exports.validationMessages) {
                message = exports.validationMessages[key];
            }
            else {
                message = exports.validationMessages['default'];
            }
            return this.parser.parse(message);
        };
        /**
         * Formulates a property display name using the property name and the configured
         * displayName (if provided).
         * Override this with your own custom logic.
         * @param propertyName The property name.
         */
        ValidationMessageProvider.prototype.getDisplayName = function (propertyName, displayName) {
            if (displayName !== null && displayName !== undefined) {
                return (displayName instanceof Function) ? displayName() : displayName;
            }
            // split on upper-case letters.
            var words = propertyName.split(/(?=[A-Z])/).join(' ');
            // capitalize first letter.
            return words.charAt(0).toUpperCase() + words.slice(1);
        };
        ValidationMessageProvider.inject = [validation_message_parser_1.ValidationMessageParser];
        return ValidationMessageProvider;
    }());
    exports.ValidationMessageProvider = ValidationMessageProvider;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('aurelia-validation/implementation/validation-message-parser',["require", "exports", "aurelia-binding", "aurelia-templating", "aurelia-logging", "./expression-visitor"], function (require, exports, aurelia_binding_1, aurelia_templating_1, LogManager, expression_visitor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationMessageParser = (function () {
        function ValidationMessageParser(bindinqLanguage) {
            this.bindinqLanguage = bindinqLanguage;
            this.emptyStringExpression = new aurelia_binding_1.LiteralString('');
            this.nullExpression = new aurelia_binding_1.LiteralPrimitive(null);
            this.undefinedExpression = new aurelia_binding_1.LiteralPrimitive(undefined);
            this.cache = {};
        }
        ValidationMessageParser.prototype.parse = function (message) {
            if (this.cache[message] !== undefined) {
                return this.cache[message];
            }
            var parts = this.bindinqLanguage.parseInterpolation(null, message);
            if (parts === null) {
                return new aurelia_binding_1.LiteralString(message);
            }
            var expression = new aurelia_binding_1.LiteralString(parts[0]);
            for (var i = 1; i < parts.length; i += 2) {
                expression = new aurelia_binding_1.Binary('+', expression, new aurelia_binding_1.Binary('+', this.coalesce(parts[i]), new aurelia_binding_1.LiteralString(parts[i + 1])));
            }
            MessageExpressionValidator.validate(expression, message);
            this.cache[message] = expression;
            return expression;
        };
        ValidationMessageParser.prototype.coalesce = function (part) {
            // part === null || part === undefined ? '' : part
            return new aurelia_binding_1.Conditional(new aurelia_binding_1.Binary('||', new aurelia_binding_1.Binary('===', part, this.nullExpression), new aurelia_binding_1.Binary('===', part, this.undefinedExpression)), this.emptyStringExpression, new aurelia_binding_1.CallMember(part, 'toString', []));
        };
        ValidationMessageParser.inject = [aurelia_templating_1.BindingLanguage];
        return ValidationMessageParser;
    }());
    exports.ValidationMessageParser = ValidationMessageParser;
    var MessageExpressionValidator = (function (_super) {
        __extends(MessageExpressionValidator, _super);
        function MessageExpressionValidator(originalMessage) {
            var _this = _super.call(this) || this;
            _this.originalMessage = originalMessage;
            return _this;
        }
        MessageExpressionValidator.validate = function (expression, originalMessage) {
            var visitor = new MessageExpressionValidator(originalMessage);
            expression.accept(visitor);
        };
        MessageExpressionValidator.prototype.visitAccessScope = function (access) {
            if (access.ancestor !== 0) {
                throw new Error('$parent is not permitted in validation message expressions.');
            }
            if (['displayName', 'propertyName', 'value', 'object', 'config', 'getDisplayName'].indexOf(access.name) !== -1) {
                LogManager.getLogger('aurelia-validation')
                    .warn("Did you mean to use \"$" + access.name + "\" instead of \"" + access.name + "\" in this validation message template: \"" + this.originalMessage + "\"?");
            }
        };
        return MessageExpressionValidator;
    }(expression_visitor_1.ExpressionVisitor));
    exports.MessageExpressionValidator = MessageExpressionValidator;
});

define('aurelia-validation/implementation/expression-visitor',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable:no-empty
    var ExpressionVisitor = (function () {
        function ExpressionVisitor() {
        }
        ExpressionVisitor.prototype.visitChain = function (chain) {
            this.visitArgs(chain.expressions);
        };
        ExpressionVisitor.prototype.visitBindingBehavior = function (behavior) {
            behavior.expression.accept(this);
            this.visitArgs(behavior.args);
        };
        ExpressionVisitor.prototype.visitValueConverter = function (converter) {
            converter.expression.accept(this);
            this.visitArgs(converter.args);
        };
        ExpressionVisitor.prototype.visitAssign = function (assign) {
            assign.target.accept(this);
            assign.value.accept(this);
        };
        ExpressionVisitor.prototype.visitConditional = function (conditional) {
            conditional.condition.accept(this);
            conditional.yes.accept(this);
            conditional.no.accept(this);
        };
        ExpressionVisitor.prototype.visitAccessThis = function (access) {
            access.ancestor = access.ancestor;
        };
        ExpressionVisitor.prototype.visitAccessScope = function (access) {
            access.name = access.name;
        };
        ExpressionVisitor.prototype.visitAccessMember = function (access) {
            access.object.accept(this);
        };
        ExpressionVisitor.prototype.visitAccessKeyed = function (access) {
            access.object.accept(this);
            access.key.accept(this);
        };
        ExpressionVisitor.prototype.visitCallScope = function (call) {
            this.visitArgs(call.args);
        };
        ExpressionVisitor.prototype.visitCallFunction = function (call) {
            call.func.accept(this);
            this.visitArgs(call.args);
        };
        ExpressionVisitor.prototype.visitCallMember = function (call) {
            call.object.accept(this);
            this.visitArgs(call.args);
        };
        ExpressionVisitor.prototype.visitPrefix = function (prefix) {
            prefix.expression.accept(this);
        };
        ExpressionVisitor.prototype.visitBinary = function (binary) {
            binary.left.accept(this);
            binary.right.accept(this);
        };
        ExpressionVisitor.prototype.visitLiteralPrimitive = function (literal) {
            literal.value = literal.value;
        };
        ExpressionVisitor.prototype.visitLiteralArray = function (literal) {
            this.visitArgs(literal.elements);
        };
        ExpressionVisitor.prototype.visitLiteralObject = function (literal) {
            this.visitArgs(literal.values);
        };
        ExpressionVisitor.prototype.visitLiteralString = function (literal) {
            literal.value = literal.value;
        };
        ExpressionVisitor.prototype.visitArgs = function (args) {
            for (var i = 0; i < args.length; i++) {
                args[i].accept(this);
            }
        };
        return ExpressionVisitor;
    }());
    exports.ExpressionVisitor = ExpressionVisitor;
});

define('aurelia-validation/implementation/validation-rules',["require", "exports", "./rules", "./validation-messages", "../util"], function (require, exports, rules_1, validation_messages_1, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Part of the fluent rule API. Enables customizing property rules.
     */
    var FluentRuleCustomizer = (function () {
        function FluentRuleCustomizer(property, condition, config, fluentEnsure, fluentRules, parsers) {
            if (config === void 0) { config = {}; }
            this.fluentEnsure = fluentEnsure;
            this.fluentRules = fluentRules;
            this.parsers = parsers;
            this.rule = {
                property: property,
                condition: condition,
                config: config,
                when: null,
                messageKey: 'default',
                message: null,
                sequence: fluentRules.sequence
            };
            this.fluentEnsure._addRule(this.rule);
        }
        /**
         * Validate subsequent rules after previously declared rules have
         * been validated successfully. Use to postpone validation of costly
         * rules until less expensive rules pass validation.
         */
        FluentRuleCustomizer.prototype.then = function () {
            this.fluentRules.sequence++;
            return this;
        };
        /**
         * Specifies the key to use when looking up the rule's validation message.
         */
        FluentRuleCustomizer.prototype.withMessageKey = function (key) {
            this.rule.messageKey = key;
            this.rule.message = null;
            return this;
        };
        /**
         * Specifies rule's validation message.
         */
        FluentRuleCustomizer.prototype.withMessage = function (message) {
            this.rule.messageKey = 'custom';
            this.rule.message = this.parsers.message.parse(message);
            return this;
        };
        /**
         * Specifies a condition that must be met before attempting to validate the rule.
         * @param condition A function that accepts the object as a parameter and returns true
         * or false whether the rule should be evaluated.
         */
        FluentRuleCustomizer.prototype.when = function (condition) {
            this.rule.when = condition;
            return this;
        };
        /**
         * Tags the rule instance, enabling the rule to be found easily
         * using ValidationRules.taggedRules(rules, tag)
         */
        FluentRuleCustomizer.prototype.tag = function (tag) {
            this.rule.tag = tag;
            return this;
        };
        ///// FluentEnsure APIs /////
        /**
         * Target a property with validation rules.
         * @param property The property to target. Can be the property name or a property accessor function.
         */
        FluentRuleCustomizer.prototype.ensure = function (subject) {
            return this.fluentEnsure.ensure(subject);
        };
        /**
         * Targets an object with validation rules.
         */
        FluentRuleCustomizer.prototype.ensureObject = function () {
            return this.fluentEnsure.ensureObject();
        };
        Object.defineProperty(FluentRuleCustomizer.prototype, "rules", {
            /**
             * Rules that have been defined using the fluent API.
             */
            get: function () {
                return this.fluentEnsure.rules;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Applies the rules to a class or object, making them discoverable by the StandardValidator.
         * @param target A class or object.
         */
        FluentRuleCustomizer.prototype.on = function (target) {
            return this.fluentEnsure.on(target);
        };
        ///////// FluentRules APIs /////////
        /**
         * Applies an ad-hoc rule function to the ensured property or object.
         * @param condition The function to validate the rule.
         * Will be called with two arguments, the property value and the object.
         * Should return a boolean or a Promise that resolves to a boolean.
         */
        FluentRuleCustomizer.prototype.satisfies = function (condition, config) {
            return this.fluentRules.satisfies(condition, config);
        };
        /**
         * Applies a rule by name.
         * @param name The name of the custom or standard rule.
         * @param args The rule's arguments.
         */
        FluentRuleCustomizer.prototype.satisfiesRule = function (name) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return (_a = this.fluentRules).satisfiesRule.apply(_a, [name].concat(args));
            var _a;
        };
        /**
         * Applies the "required" rule to the property.
         * The value cannot be null, undefined or whitespace.
         */
        FluentRuleCustomizer.prototype.required = function () {
            return this.fluentRules.required();
        };
        /**
         * Applies the "matches" rule to the property.
         * Value must match the specified regular expression.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.matches = function (regex) {
            return this.fluentRules.matches(regex);
        };
        /**
         * Applies the "email" rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.email = function () {
            return this.fluentRules.email();
        };
        /**
         * Applies the "minLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.minLength = function (length) {
            return this.fluentRules.minLength(length);
        };
        /**
         * Applies the "maxLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.maxLength = function (length) {
            return this.fluentRules.maxLength(length);
        };
        /**
         * Applies the "minItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRuleCustomizer.prototype.minItems = function (count) {
            return this.fluentRules.minItems(count);
        };
        /**
         * Applies the "maxItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRuleCustomizer.prototype.maxItems = function (count) {
            return this.fluentRules.maxItems(count);
        };
        /**
         * Applies the "equals" validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRuleCustomizer.prototype.equals = function (expectedValue) {
            return this.fluentRules.equals(expectedValue);
        };
        return FluentRuleCustomizer;
    }());
    exports.FluentRuleCustomizer = FluentRuleCustomizer;
    /**
     * Part of the fluent rule API. Enables applying rules to properties and objects.
     */
    var FluentRules = (function () {
        function FluentRules(fluentEnsure, parsers, property) {
            this.fluentEnsure = fluentEnsure;
            this.parsers = parsers;
            this.property = property;
            /**
             * Current rule sequence number. Used to postpone evaluation of rules until rules
             * with lower sequence number have successfully validated. The "then" fluent API method
             * manages this property, there's usually no need to set it directly.
             */
            this.sequence = 0;
        }
        /**
         * Sets the display name of the ensured property.
         */
        FluentRules.prototype.displayName = function (name) {
            this.property.displayName = name;
            return this;
        };
        /**
         * Applies an ad-hoc rule function to the ensured property or object.
         * @param condition The function to validate the rule.
         * Will be called with two arguments, the property value and the object.
         * Should return a boolean or a Promise that resolves to a boolean.
         */
        FluentRules.prototype.satisfies = function (condition, config) {
            return new FluentRuleCustomizer(this.property, condition, config, this.fluentEnsure, this, this.parsers);
        };
        /**
         * Applies a rule by name.
         * @param name The name of the custom or standard rule.
         * @param args The rule's arguments.
         */
        FluentRules.prototype.satisfiesRule = function (name) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var rule = FluentRules.customRules[name];
            if (!rule) {
                // standard rule?
                rule = this[name];
                if (rule instanceof Function) {
                    return rule.call.apply(rule, [this].concat(args));
                }
                throw new Error("Rule with name \"" + name + "\" does not exist.");
            }
            var config = rule.argsToConfig ? rule.argsToConfig.apply(rule, args) : undefined;
            return this.satisfies(function (value, obj) {
                return (_a = rule.condition).call.apply(_a, [_this, value, obj].concat(args));
                var _a;
            }, config)
                .withMessageKey(name);
        };
        /**
         * Applies the "required" rule to the property.
         * The value cannot be null, undefined or whitespace.
         */
        FluentRules.prototype.required = function () {
            return this.satisfies(function (value) {
                return value !== null
                    && value !== undefined
                    && !(util_1.isString(value) && !/\S/.test(value));
            }).withMessageKey('required');
        };
        /**
         * Applies the "matches" rule to the property.
         * Value must match the specified regular expression.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.matches = function (regex) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || regex.test(value); })
                .withMessageKey('matches');
        };
        /**
         * Applies the "email" rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.email = function () {
            // regex from https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
            /* tslint:disable:max-line-length */
            return this.matches(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
                .withMessageKey('email');
        };
        /**
         * Applies the "minLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.minLength = function (length) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || value.length >= length; }, { length: length })
                .withMessageKey('minLength');
        };
        /**
         * Applies the "maxLength" STRING validation rule to the property.
         * null, undefined and empty-string values are considered valid.
         */
        FluentRules.prototype.maxLength = function (length) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || value.length <= length; }, { length: length })
                .withMessageKey('maxLength');
        };
        /**
         * Applies the "minItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRules.prototype.minItems = function (count) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length >= count; }, { count: count })
                .withMessageKey('minItems');
        };
        /**
         * Applies the "maxItems" ARRAY validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRules.prototype.maxItems = function (count) {
            return this.satisfies(function (value) { return value === null || value === undefined || value.length <= count; }, { count: count })
                .withMessageKey('maxItems');
        };
        /**
         * Applies the "equals" validation rule to the property.
         * null and undefined values are considered valid.
         */
        FluentRules.prototype.equals = function (expectedValue) {
            return this.satisfies(function (value) { return value === null || value === undefined || value === '' || value === expectedValue; }, { expectedValue: expectedValue })
                .withMessageKey('equals');
        };
        FluentRules.customRules = {};
        return FluentRules;
    }());
    exports.FluentRules = FluentRules;
    /**
     * Part of the fluent rule API. Enables targeting properties and objects with rules.
     */
    var FluentEnsure = (function () {
        function FluentEnsure(parsers) {
            this.parsers = parsers;
            /**
             * Rules that have been defined using the fluent API.
             */
            this.rules = [];
        }
        /**
         * Target a property with validation rules.
         * @param property The property to target. Can be the property name or a property accessor
         * function.
         */
        FluentEnsure.prototype.ensure = function (property) {
            this.assertInitialized();
            var name = this.parsers.property.parse(property);
            var fluentRules = new FluentRules(this, this.parsers, { name: name, displayName: null });
            return this.mergeRules(fluentRules, name);
        };
        /**
         * Targets an object with validation rules.
         */
        FluentEnsure.prototype.ensureObject = function () {
            this.assertInitialized();
            var fluentRules = new FluentRules(this, this.parsers, { name: null, displayName: null });
            return this.mergeRules(fluentRules, null);
        };
        /**
         * Applies the rules to a class or object, making them discoverable by the StandardValidator.
         * @param target A class or object.
         */
        FluentEnsure.prototype.on = function (target) {
            rules_1.Rules.set(target, this.rules);
            return this;
        };
        /**
         * Adds a rule definition to the sequenced ruleset.
         * @internal
         */
        FluentEnsure.prototype._addRule = function (rule) {
            while (this.rules.length < rule.sequence + 1) {
                this.rules.push([]);
            }
            this.rules[rule.sequence].push(rule);
        };
        FluentEnsure.prototype.assertInitialized = function () {
            if (this.parsers) {
                return;
            }
            throw new Error("Did you forget to add \".plugin('aurelia-validation')\" to your main.js?");
        };
        FluentEnsure.prototype.mergeRules = function (fluentRules, propertyName) {
            var existingRules = this.rules.find(function (r) { return r.length > 0 && r[0].property.name === propertyName; });
            if (existingRules) {
                var rule = existingRules[existingRules.length - 1];
                fluentRules.sequence = rule.sequence;
                if (rule.property.displayName !== null) {
                    fluentRules = fluentRules.displayName(rule.property.displayName);
                }
            }
            return fluentRules;
        };
        return FluentEnsure;
    }());
    exports.FluentEnsure = FluentEnsure;
    /**
     * Fluent rule definition API.
     */
    var ValidationRules = (function () {
        function ValidationRules() {
        }
        ValidationRules.initialize = function (messageParser, propertyParser) {
            this.parsers = {
                message: messageParser,
                property: propertyParser
            };
        };
        /**
         * Target a property with validation rules.
         * @param property The property to target. Can be the property name or a property accessor function.
         */
        ValidationRules.ensure = function (property) {
            return new FluentEnsure(ValidationRules.parsers).ensure(property);
        };
        /**
         * Targets an object with validation rules.
         */
        ValidationRules.ensureObject = function () {
            return new FluentEnsure(ValidationRules.parsers).ensureObject();
        };
        /**
         * Defines a custom rule.
         * @param name The name of the custom rule. Also serves as the message key.
         * @param condition The rule function.
         * @param message The message expression
         * @param argsToConfig A function that maps the rule's arguments to a "config"
         * object that can be used when evaluating the message expression.
         */
        ValidationRules.customRule = function (name, condition, message, argsToConfig) {
            validation_messages_1.validationMessages[name] = message;
            FluentRules.customRules[name] = { condition: condition, argsToConfig: argsToConfig };
        };
        /**
         * Returns rules with the matching tag.
         * @param rules The rules to search.
         * @param tag The tag to search for.
         */
        ValidationRules.taggedRules = function (rules, tag) {
            return rules.map(function (x) { return x.filter(function (r) { return r.tag === tag; }); });
        };
        /**
         * Returns rules that have no tag.
         * @param rules The rules to search.
         */
        ValidationRules.untaggedRules = function (rules) {
            return rules.map(function (x) { return x.filter(function (r) { return r.tag === undefined; }); });
        };
        /**
         * Removes the rules from a class or object.
         * @param target A class or object.
         */
        ValidationRules.off = function (target) {
            rules_1.Rules.unset(target);
        };
        return ValidationRules;
    }());
    exports.ValidationRules = ValidationRules;
});

define('text!app.css', ['module'], function(module) { module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml, body {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\ncode {\r\n  font-family: 'Source Code Pro', monospace;\r\n}\r\n\r\nem {\r\n  font-style: italic;\r\n}\r\n\r\nstyles.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n}\r\n\r\nstyles.header {\r\n  background: ${$design.primary};\r\n  color: ${$design.primaryForeground};\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\r\n  padding: 16px;\r\n  font-size: 24px;\r\n  line-height: 32px;\r\n  height: 64px;\r\n}\r\n\r\nstyles.nav {\r\n  width: 275px;\r\n  background: ${$swatches.grey.p200};\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nstyles.nav-list {\r\n  align-self: stretch;\r\n  margin-top: 24px;\r\n  padding-top: 16px;\r\n  border-top: 1px solid ${$swatches.grey.p300};\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nstyles.nav-category {\r\n  padding: 12px 0 12px 24px;\r\n}\r\n\r\nstyles.nav-item {\r\n  transition: all 300ms;\r\n}\r\n\r\nstyles.nav-item:hover {\r\n  background: ${$swatches.grey.p300};\r\n}\r\n\r\nstyles.nav-item > a {\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-size: 16px;\r\n  color: ${$design.primary};\r\n  display: block;\r\n  transition: all 300ms;\r\n  padding: 12px 0;\r\n  margin-left: 24px;\r\n}\r\n\r\nstyles.nav-item > a:before {\r\n  content: '.';\r\n  display: inline-block;\r\n  color: transparent;\r\n  width: 2px;\r\n  margin-right: 8px;\r\n}\r\n\r\nstyles.nav-item.active > a {\r\n  color: ${$design.accent};\r\n}\r\n\r\nstyles.nav-item.active > a:before {\r\n  background-color: ${$design.accent};\r\n}\r\n\r\nstyles.logo {\r\n  margin: 16px 0;\r\n}\r\n\r\nstyles.product-name {\r\n  font-size: 28px;\r\n}\r\n\r\nstyles.page {\r\n  overflow-y: scroll;\r\n  flex: 1;\r\n}\r\n"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"./reset.css\"></require>\r\n  <require from=\"./app.css#ux\"></require>\r\n\r\n  <nav styles.nav>\r\n    <a href=\"#/introduction\">\r\n      <img styles.logo src=\"../images/aurelia-icon-128x128.png\">\r\n    </a>\r\n\r\n    <span styles.product-name>Aurelia UX</span>\r\n\r\n    <ul styles.nav-list>\r\n      <template repeat.for=\"[category, routes] of router.navigation | categories\">\r\n        <li styles.nav-category>\r\n          <span>${category.title}</span>\r\n        </li>\r\n\r\n        <li styles.nav-item repeat.for=\"nav of routes\" class=\"${nav.isActive ? 'active' : ''}\">\r\n          <a href.bind=\"nav.href\">${nav.title}</a>\r\n        </li>\r\n      </template>\r\n    </ul>\r\n  </nav>\r\n\r\n  <section styles.main>\r\n    <header styles.header>\r\n      <h1>${router.currentInstruction.config.navModel.title}</h1>\r\n    </header>\r\n\r\n    <router-view styles.page></router-view>\r\n  </section>\r\n</template>\r\n"; });
define('text!common.css', ['module'], function(module) { module.exports = "styles.main {\r\n  padding: 40px 40px 40px;\r\n}\r\n\r\nstyles.header {\r\n  font-size: 34px;\r\n  font-weight: 400;\r\n  line-height: 32px;\r\n  margin-bottom: 30px;\r\n  color: ${$design.primary};\r\n}\r\n\r\nstyles.description {\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n  line-height: 32px;\r\n  max-width: 940px;\r\n  color: ${$swatches.black};\r\n  margin-bottom: 40px;\r\n}\r\n"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='./common.css#ux'></require>\r\n\r\n  <main styles.main>\r\n\r\n    <h2 styles.header>What is Aurelia UX?</h2>\r\n\r\n    <p styles.description>\r\n      Aurelia UX is a companion framework to Aurelia. While Aurelia focuses on being\r\n      a <em>front-end framework</em> by providing core capabilities you need to build apps, such as templating, binding and routing,\r\n      Aurelia UX focuses on being a <em>user experience framework</em> by providing\r\n      higher-level capabilities such as design languages, theming and components.\r\n    </p>\r\n\r\n    <p styles.description>\r\n      Aurelia UX is still in a very early stage but we'd love for you to play with it\r\n      and consider contributing. We'll keep this app updated as we add new features\r\n      so it's easy for you to track our progress.\r\n    </p>\r\n\r\n  </main>\r\n</template>\r\n"; });
define('text!reset.css', ['module'], function(module) { module.exports = "/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the default font family in all browsers (opinionated).\r\n * 2. Correct the line height in all browsers.\r\n * 3. Prevent adjustments of font size after orientation changes in\r\n *    IE on Windows Phone and in iOS.\r\n */\r\n\r\nhtml {\r\n  font-family: sans-serif; /* 1 */\r\n  line-height: 1.15; /* 2 */\r\n  -ms-text-size-adjust: 100%; /* 3 */\r\n  -webkit-text-size-adjust: 100%; /* 3 */\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers (opinionated).\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: sans-serif; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n *    controls in Android 4.\r\n * 2. Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\nhtml [type=\"button\"], /* 1 */\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Change the border, margin, and padding in all browsers (opinionated).\r\n */\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * 1. Add the correct display in IE 9-.\r\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  display: inline-block; /* 1 */\r\n  vertical-align: baseline; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10-.\r\n * 2. Remove the padding in IE 10-.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-cancel-button,\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n"; });
define('text!components/buttons.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./buttons.css#ux\"></require>\r\n\r\n  <main styles.main>\r\n    <h1 styles.header>\r\n      &lt;ux-button&gt;&lt;/ux-button&gt;\r\n    </h1>\r\n\r\n    <p styles.description>\r\n      The <code>ux-button</code> element is used to indicate that a user can take an action.\r\n      It comes in three types: <em>flat</em>, <em>raised</em> (default) and <em>fab</em> which can be configured either on the button instance or on the theme object, using the <em>type</em> property.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <ux-button type=\"flat\">Button</ux-button>\r\n\r\n        <code>\r\n          type=\"flat\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-button>Button</ux-button>\r\n\r\n        <code>\r\n          type=\"raised\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-button type=\"fab\">\r\n          <span style=\"font-size: 26px\">+</span>\r\n        </ux-button>\r\n\r\n        <code>\r\n          type=\"fab\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-button type=\"icon\">\r\n          <ux-icon icon=\"add\"></ux-icon>\r\n        </ux-button>\r\n\r\n        <code>\r\n          type=\"icon\"\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <p styles.description>\r\n      Buttons also come in three sizes: <em>small</em>, <em>medium</em> (default) and <em>large</em> which can be configured either on the button instance or on the theme object, using the <em>size</em> property.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <ux-button size=\"small\" type=\"flat\">Button</ux-button>\r\n        <ux-button size=\"small\">Button</ux-button>\r\n        <ux-button size=\"small\" type=\"fab\">\r\n          <span style=\"font-size: 26px\">+</span>\r\n        </ux-button>\r\n\r\n        <code>\r\n          size=\"small\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-button type=\"flat\">Button</ux-button>\r\n        <ux-button>Button</ux-button>\r\n        <ux-button type=\"fab\">\r\n          <span style=\"font-size: 26px\">+</span>\r\n        </ux-button>\r\n\r\n        <code>\r\n          size=\"medium\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-button size=\"large\" type=\"flat\">Button</ux-button>\r\n        <ux-button size=\"large\">Button</ux-button>\r\n        <ux-button size=\"large\" type=\"fab\">\r\n          <span style=\"font-size: 26px\">+</span>\r\n        </ux-button>\r\n\r\n        <code>\r\n          size=\"large\"\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <p styles.description>\r\n      Material buttons have a ripple effect by default, however that can be turned off using the <code>effect</code> property.\r\n      As with all properties, this can be specified per design language, using the design language prefix.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <ux-button type=\"flat\" effect=\"none\">Button</ux-button>\r\n        <ux-button effect=\"none\">Button</ux-button>\r\n        <ux-button type=\"fab\" effect=\"none\">\r\n          <span style=\"font-size: 26px\">+</span>\r\n        </ux-button>\r\n\r\n        <code>\r\n          effect=\"none\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-button type=\"flat\" effect=\"ripple\">Button</ux-button>\r\n        <ux-button effect=\"ripple\">Button</ux-button>\r\n        <ux-button type=\"fab\" effect=\"ripple\">\r\n          <span style=\"font-size: 26px\">+</span>\r\n        </ux-button>\r\n\r\n        <code>\r\n          effect=\"ripple\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-button type=\"flat\" material-effect=\"ripple\">Button</ux-button>\r\n        <ux-button material-effect=\"ripple\">Button</ux-button>\r\n        <ux-button type=\"fab\" material-effect=\"ripple\">\r\n          <span style=\"font-size: 26px\">+</span>\r\n        </ux-button>\r\n\r\n        <code>\r\n          material-effect=\"ripple\"\r\n        </code>\r\n      </figure>\r\n    </section>\r\n  </main>\r\n</template>\r\n"; });
define('text!components/buttons.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  margin: 40px 0 20px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  background: ${$swatches.grey.p200};\r\n  display: flex;\r\n  width: 320px;\r\n  height: 320px;\r\n  position:relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nstyles.figure > ux-button {\r\n  margin: auto;\r\n}\r\n\r\nstyles.figure > code {\r\n  position: absolute;\r\n  bottom: 16px;\r\n  left: 16px;\r\n}\r\n"; });
define('text!components/checkbox.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./checkbox.css#ux\"></require>\r\n\r\n  <main styles.main>\r\n    <h1 styles.header>\r\n      &lt;ux-checkbox&gt;&lt;/ux-checkbox&gt;\r\n    </h1>\r\n\r\n    <p styles.description>\r\n      The <code>ux-checkbox</code> element is an element that can be bound to a property.\r\n      <code>checked.bind</code> is used to bind to the output of the checkbox and <code>value.bind</code> represents the\r\n      output of the checkbox. The default value is just a boolean representing the state of the checkbox.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <ux-checkbox></ux-checkbox>\r\n        <code>\r\n          checked=\"false\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-checkbox checked=\"true\"></ux-checkbox>\r\n        <code>\r\n          checked=\"true\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-checkbox disabled></ux-checkbox>\r\n        <code>\r\n          disabled\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-checkbox disabled checked=\"true\"></ux-checkbox>\r\n        <code>\r\n          disabled checked=\"true\"\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <p styles.description>\r\n      The Material ripple effect can be turned off using the effect property.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <ux-checkbox effect=\"none\"></ux-checkbox>\r\n        <code>\r\n          effect=\"none\"\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <p styles.description>\r\n      Labels can be added to a checkbox in one of two ways.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <ux-checkbox label=\"label\"></ux-checkbox>\r\n        <code>\r\n          label=\"label\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-checkbox>label</ux-checkbox>\r\n        <code>\r\n          &lt;ux-checkbox&gt;label&lt;/ux-checkbox&gt;\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n\r\n    <h1 styles.header>\r\n      Binding Demos\r\n    </h1>\r\n\r\n    <p styles.description>\r\n      The <code>ux-checkbox</code> control can be bound just like any other checkbox in Aurelia. The following is an implementation\r\n      of the binding demos from the <a href=\"http://aurelia.io/hub.html#/doc/article/aurelia/binding/latest/binding-checkboxes\">developer hub</a>.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <ux-form>\r\n\r\n          <template repeat.for=\"product of productObjects\">\r\n            <div class=\"form-row\">\r\n              <ux-field>\r\n                <ux-checkbox value.bind=\"product\" checked.bind=\"selectedProductObjects\">${product.id} - ${product.name}</ux-checkbox>\r\n              </ux-field>\r\n            </div>\r\n          </template>\r\n\r\n        </ux-form>\r\n        <code>\r\n          Bound to object array\r\n          <br>\r\n          Selected Products:\r\n            <ul>\r\n              <li repeat.for=\"product of selectedProductObjects\">${product.id} - ${product.name}</li>\r\n            </ul>\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-form>\r\n\r\n          <template repeat.for=\"product of products\">\r\n            <div class=\"form-row\">\r\n              <ux-field>\r\n                <ux-checkbox value.bind=\"product\" checked.bind=\"selectedStringProducts\">${product}</ux-checkbox>\r\n              </ux-field>\r\n            </div>\r\n          </template>\r\n\r\n        </ux-form>\r\n        <code>\r\n          Bound to string array\r\n          <br>\r\n          Selected Products: ${selectedStringProducts}\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-form>\r\n\r\n          <div class=\"form-row\">\r\n            <ux-field>\r\n              <ux-checkbox type=\"checkbox\" model.bind=\"{ id: 0, name: 'Motherboard' }\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductsWithMatcher\">\r\n                Motherboard\r\n              </ux-checkbox>\r\n            </ux-field>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <ux-field>\r\n              <ux-checkbox type=\"checkbox\" model.bind=\"{ id: 1, name: 'CPU' }\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductsWithMatcher\">\r\n                CPU\r\n              </ux-checkbox>\r\n            </ux-field>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <ux-field>\r\n              <ux-checkbox type=\"checkbox\" model.bind=\"{ id: 2, name: 'Memory' }\" matcher.bind=\"productMatcher\" checked.bind=\"selectedProductsWithMatcher\">\r\n                Memory\r\n              </ux-checkbox>\r\n            </ux-field>\r\n          </div>\r\n\r\n        </ux-form>\r\n        <code>\r\n          Bound with matcher\r\n          <br>\r\n          Selected Products:\r\n          <ul>\r\n            <li repeat.for=\"product of selectedProductsWithMatcher\">${product.id} - ${product.name}</li>\r\n          </ul>\r\n        </code>\r\n      </figure>\r\n    </section>\r\n  </main>\r\n</template>\r\n"; });
define('text!components/chips.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./chips.css#ux\"></require>\r\n\r\n  <main styles.main>\r\n    <h1 styles.header>\r\n      &lt;ux-chip&gt;&lt;/ux-chip&gt;\r\n    </h1>\r\n\r\n    <p styles.description>\r\n      The <code>ux-chip</code> element is used to display content in a compact area.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure>\r\n        <ux-chip>\r\n          Text Content\r\n        </ux-chip>\r\n\r\n        <code>\r\n          &lt;ux-chip&gt;&lt;/ux-chip&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-tag>\r\n          Text Content\r\n        </ux-tag>\r\n\r\n        <code>\r\n          &lt;ux-tag&gt;&lt;/ux-tag&gt;\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n    <p styles.description>\r\n      The <code>ux-chip</code> and <code>ux-tag</code> elements both have a <code>deletable</code> attribute that\r\n      can be added to show an X to the right of the chip. Clicking this X fires off a <code>close</code> event\r\n      that can be used with close.trigger.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure>\r\n        <ux-chip deletable>\r\n          Text Content\r\n        </ux-chip>\r\n\r\n        <code>\r\n          &lt;ux-chip&gt;&lt;/ux-chip&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-tag deletable>\r\n          Text Content\r\n        </ux-tag>\r\n\r\n        <code>\r\n          &lt;ux-tag&gt;&lt;/ux-tag&gt;\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n    <h1 styles.header>\r\n      &lt;ux-chip-input&gt;&lt;/ux-chip-input&gt;\r\n    </h1>\r\n\r\n    <p styles.description>\r\n      The <code>ux-chip-input</code> element is an easy to use editor to edit an array of\r\n      chips or tags. This element can be used by binding to its value to get a comma delimited\r\n      list, or by binding to the chips attribute, which exposes an array of chips. Losing focus\r\n      or pressing the enter key causes the input to add the current text to the chip list.\r\n      Pressing the left arrow key will let the user edit the last chip input. Double clicking\r\n      a chip will let the user edit that specific chip.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure>\r\n        <ux-chip-input type=\"chip\"></ux-chip-input>\r\n\r\n        <code>\r\n          type=\"chip\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-chip-input type=\"tag\"></ux-chip-input>\r\n\r\n        <code>\r\n          type=\"tag\"\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n    <p styles.description>\r\n      The <code>ux-chip-input</code> element has a separator attribute that allows the default\r\n      separator to be overridden. The default separator is ', '.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure>\r\n        <ux-chip-input type=\"chip\" separator=\"/$\" value.bind=\"separatorInput\"></ux-chip-input>\r\n\r\n        <code>\r\n          separator=\"/$\"<br/>\r\n          value=\"${separatorInput}\"\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n  </main>\r\n</template>\r\n"; });
define('text!components/checkbox.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  margin: 40px 0 20px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  background: ${$swatches.grey.p200};\r\n  display: flex;\r\n  width: 320px;\r\n  height: 320px;\r\n  position:relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nstyles.figure > ux-button {\r\n  margin: auto;\r\n}\r\n\r\nstyles.figure > code {\r\n  position: absolute;\r\n  bottom: 16px;\r\n  left: 16px;\r\n}\r\n"; });
define('text!components/chips.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  margin: 40px 0 20px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  background: ${$swatches.grey.p200};\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n  width: 320px;\r\n  height: 320px;\r\n  position:relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nstyles.figure > ux-button {\r\n  margin: auto;\r\n}\r\n\r\nstyles.figure > code {\r\n  position: absolute;\r\n  bottom: 16px;\r\n  left: 16px;\r\n}\r\n"; });
define('text!components/forms.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./forms.css#ux\"></require>\r\n\r\n  <main styles.main>\r\n    <h1 styles.header>\r\n      &lt;ux-form&gt;&lt;/ux-form&gt;\r\n    </h1>\r\n\r\n    <p styles.description>\r\n      The <code>ux-form</code> element is used to quickly create and lay out forms.\r\n    </p>\r\n\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-form>\r\n            <div class=\"form-row\">\r\n              <ux-input placeholder=\"Name\"></ux-input>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n              <ux-input type=\"email\" placeholder=\"Email Address\"></ux-input>\r\n            </div>\r\n\r\n            <ux-button type=\"raised\">Button</ux-button>\r\n          </ux-form>\r\n        </div>\r\n        <code>\r\n          Basic Usage\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-form>\r\n\r\n          <ux-input class=\"full-width\" placeholder=\"Title\"></ux-input>\r\n\r\n          <ux-textarea auto-resize class=\"full-width\" placeholder=\"Description\"></ux-textarea>\r\n\r\n          <ux-button type=\"raised\">Button</ux-button>\r\n        </ux-form>\r\n        <code>\r\n          Basic Usage\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n\r\n    <p styles.description>\r\n      <code>ux-form</code> includes the <code>.form-row</code> class to help with both laying out a form and including multiple\r\n      controls on one line.\r\n    </p>\r\n\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n\r\n          <ux-form>\r\n            <div class=\"form-row\">\r\n              <ux-input maxlength=\"10\" placeholder=\"First Name\"></ux-input>\r\n              <ux-input maxlength=\"10\" placeholder=\"Last Name\"></ux-input>\r\n            </div>\r\n\r\n          </ux-form>\r\n\r\n        </div>\r\n        <code>\r\n          class=\"form-row\"\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n\r\n    <p styles.description>\r\n      The <code>ux-field</code> component is the part of form development which takes care of styling labels with inputs and\r\n      other controls.\r\n    </p>\r\n\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n\r\n\r\n          <ux-form>\r\n\r\n            <ux-field label=\"First Name\">\r\n              <ux-input maxlength=\"10\"></ux-input>\r\n              <ux-input-info ux-input-counter>John</ux-input-info>\r\n            </ux-field>\r\n\r\n          </ux-form>\r\n\r\n        </div>\r\n        <code>\r\n        <pre>\r\n&lt;ux-field label=\"First Name\"&gt;\r\n&lt;/ux-field&gt;\r\n        </pre>\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n\r\n\r\n    <p styles.description>\r\n      Bringing all of these elements together allows the quick creation of forms.\r\n    </p>\r\n\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n\r\n\r\n          <ux-form>\r\n\r\n            <div class=\"form-row\">\r\n\r\n              <ux-field label=\"First Name\">\r\n                <ux-input maxlength=\"10\" value.bind=\"firstName & validate\"></ux-input>\r\n                <ux-input-info ux-input-counter>John</ux-input-info>\r\n              </ux-field>\r\n\r\n              <ux-field label=\"Last Name\">\r\n                <ux-input maxlength=\"10\" value.bind=\"lastName & validate\"></ux-input>\r\n                <ux-input-info ux-input-counter>Doe</ux-input-info>\r\n              </ux-field>\r\n\r\n            </div>\r\n\r\n            <ux-field label=\"Email Address\">\r\n              <ux-input type=\"email\" value.bind=\"email & validate\"></ux-input>\r\n              <ux-input-info>email@example.com</ux-input-info>\r\n            </ux-field>\r\n\r\n            <ux-field label=\"Biography\">\r\n              <ux-textarea auto-resize></ux-textarea>\r\n            </ux-field>\r\n\r\n            <ux-button click.delegate=\"submit()\">Submit</ux-button>\r\n\r\n          </ux-form>\r\n\r\n\r\n  </main>\r\n</template>\r\n"; });
define('text!components/forms.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  margin: 40px 0 20px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  background: ${$swatches.grey.p300};\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 320px;\r\n  height: 320px;\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nstyles.figure > div.add-padding {\r\n  padding: 8px;\r\n}\r\n\r\nstyles.figure > ux-button {\r\n  margin: auto;\r\n}\r\n\r\nstyles.figure > code {\r\n  padding:16px;\r\n  background: ${$swatches.grey.p200};\r\n}\r\n"; });
define('text!components/icons.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./icons.css#ux\"></require>\r\n\r\n  <main styles.main>\r\n    <h1 styles.header>\r\n      &lt;ux-icon&gt;&lt;/ux-icon&gt;\r\n    </h1>\r\n\r\n    <p styles.description>\r\n      The <code>ux-icon</code> element is used to display icons that are adaptive and can switch\r\n      to match the current environment. Currently only Material Icons are supported.\r\n    </p>\r\n\r\n    <p styles.description>\r\n      <code>\r\n        &lt;ux-icon icon=\"icon_name\"&gt;&lt;/ux-icon&gt;\r\n      </code>\r\n    </p>\r\n\r\n  <section styles.feature>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"3d_rotation\"></ux-icon>\r\n      <footer>3d_rotation</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"accessibility\"></ux-icon>\r\n      <footer>accessibility</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"accessible\"></ux-icon>\r\n      <footer>accessible</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"account_balance\"></ux-icon>\r\n      <footer>account_balance</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"account_balance_wallet\"></ux-icon>\r\n      <footer>account_balance_wallet</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"account_box\"></ux-icon>\r\n      <footer>account_box</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"account_circle\"></ux-icon>\r\n      <footer>account_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_shopping_cart\"></ux-icon>\r\n      <footer>add_shopping_cart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"alarm\"></ux-icon>\r\n      <footer>alarm</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"alarm_add\"></ux-icon>\r\n      <footer>alarm_add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"alarm_off\"></ux-icon>\r\n      <footer>alarm_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"alarm_on\"></ux-icon>\r\n      <footer>alarm_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"all_out\"></ux-icon>\r\n      <footer>all_out</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"android\"></ux-icon>\r\n      <footer>android</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"announcement\"></ux-icon>\r\n      <footer>announcement</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"aspect_ratio\"></ux-icon>\r\n      <footer>aspect_ratio</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assessment\"></ux-icon>\r\n      <footer>assessment</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assignment\"></ux-icon>\r\n      <footer>assignment</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assignment_ind\"></ux-icon>\r\n      <footer>assignment_ind</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assignment_late\"></ux-icon>\r\n      <footer>assignment_late</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assignment_return\"></ux-icon>\r\n      <footer>assignment_return</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assignment_returned\"></ux-icon>\r\n      <footer>assignment_returned</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assignment_turned_in\"></ux-icon>\r\n      <footer>assignment_turned_in</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"autorenew\"></ux-icon>\r\n      <footer>autorenew</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"backup\"></ux-icon>\r\n      <footer>backup</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"book\"></ux-icon>\r\n      <footer>book</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bookmark\"></ux-icon>\r\n      <footer>bookmark</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bookmark_border\"></ux-icon>\r\n      <footer>bookmark_border</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bug_report\"></ux-icon>\r\n      <footer>bug_report</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"build\"></ux-icon>\r\n      <footer>build</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cached\"></ux-icon>\r\n      <footer>cached</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"camera_enhance\"></ux-icon>\r\n      <footer>camera_enhance</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"card_giftcard\"></ux-icon>\r\n      <footer>card_giftcard</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"card_membership\"></ux-icon>\r\n      <footer>card_membership</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"card_travel\"></ux-icon>\r\n      <footer>card_travel</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"change_history\"></ux-icon>\r\n      <footer>change_history</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"check_circle\"></ux-icon>\r\n      <footer>check_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"chrome_reader_mode\"></ux-icon>\r\n      <footer>chrome_reader_mode</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"class\"></ux-icon>\r\n      <footer>class</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"code\"></ux-icon>\r\n      <footer>code</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"compare_arrows\"></ux-icon>\r\n      <footer>compare_arrows</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"copyright\"></ux-icon>\r\n      <footer>copyright</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"credit_card\"></ux-icon>\r\n      <footer>credit_card</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"dashboard\"></ux-icon>\r\n      <footer>dashboard</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"date_range\"></ux-icon>\r\n      <footer>date_range</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"delete\"></ux-icon>\r\n      <footer>delete</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"delete_forever\"></ux-icon>\r\n      <footer>delete_forever</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"description\"></ux-icon>\r\n      <footer>description</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"dns\"></ux-icon>\r\n      <footer>dns</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"done\"></ux-icon>\r\n      <footer>done</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"done_all\"></ux-icon>\r\n      <footer>done_all</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"donut_large\"></ux-icon>\r\n      <footer>donut_large</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"donut_small\"></ux-icon>\r\n      <footer>donut_small</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"eject\"></ux-icon>\r\n      <footer>eject</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"euro_symbol\"></ux-icon>\r\n      <footer>euro_symbol</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"event\"></ux-icon>\r\n      <footer>event</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"event_seat\"></ux-icon>\r\n      <footer>event_seat</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"exit_to_app\"></ux-icon>\r\n      <footer>exit_to_app</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"explore\"></ux-icon>\r\n      <footer>explore</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"extension\"></ux-icon>\r\n      <footer>extension</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"face\"></ux-icon>\r\n      <footer>face</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"favorite\"></ux-icon>\r\n      <footer>favorite</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"favorite_border\"></ux-icon>\r\n      <footer>favorite_border</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"feedback\"></ux-icon>\r\n      <footer>feedback</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"find_in_page\"></ux-icon>\r\n      <footer>find_in_page</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"find_replace\"></ux-icon>\r\n      <footer>find_replace</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fingerprint\"></ux-icon>\r\n      <footer>fingerprint</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flight_land\"></ux-icon>\r\n      <footer>flight_land</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flight_takeoff\"></ux-icon>\r\n      <footer>flight_takeoff</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flip_to_back\"></ux-icon>\r\n      <footer>flip_to_back</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flip_to_front\"></ux-icon>\r\n      <footer>flip_to_front</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"g_translate\"></ux-icon>\r\n      <footer>g_translate</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gavel\"></ux-icon>\r\n      <footer>gavel</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"get_app\"></ux-icon>\r\n      <footer>get_app</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gif\"></ux-icon>\r\n      <footer>gif</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"grade\"></ux-icon>\r\n      <footer>grade</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"group_work\"></ux-icon>\r\n      <footer>group_work</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"help\"></ux-icon>\r\n      <footer>help</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"help_outline\"></ux-icon>\r\n      <footer>help_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"highlight_off\"></ux-icon>\r\n      <footer>highlight_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"history\"></ux-icon>\r\n      <footer>history</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"home\"></ux-icon>\r\n      <footer>home</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hourglass_empty\"></ux-icon>\r\n      <footer>hourglass_empty</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hourglass_full\"></ux-icon>\r\n      <footer>hourglass_full</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"http\"></ux-icon>\r\n      <footer>http</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"https\"></ux-icon>\r\n      <footer>https</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"important_devices\"></ux-icon>\r\n      <footer>important_devices</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"info\"></ux-icon>\r\n      <footer>info</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"info_outline\"></ux-icon>\r\n      <footer>info_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"input\"></ux-icon>\r\n      <footer>input</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"invert_colors\"></ux-icon>\r\n      <footer>invert_colors</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"label\"></ux-icon>\r\n      <footer>label</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"label_outline\"></ux-icon>\r\n      <footer>label_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"language\"></ux-icon>\r\n      <footer>language</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"launch\"></ux-icon>\r\n      <footer>launch</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"lightbulb_outline\"></ux-icon>\r\n      <footer>lightbulb_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"line_style\"></ux-icon>\r\n      <footer>line_style</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"line_weight\"></ux-icon>\r\n      <footer>line_weight</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"list\"></ux-icon>\r\n      <footer>list</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"lock\"></ux-icon>\r\n      <footer>lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"lock_open\"></ux-icon>\r\n      <footer>lock_open</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"lock_outline\"></ux-icon>\r\n      <footer>lock_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"loyalty\"></ux-icon>\r\n      <footer>loyalty</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"markunread_mailbox\"></ux-icon>\r\n      <footer>markunread_mailbox</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"motorcycle\"></ux-icon>\r\n      <footer>motorcycle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"note_add\"></ux-icon>\r\n      <footer>note_add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"offline_pin\"></ux-icon>\r\n      <footer>offline_pin</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"opacity\"></ux-icon>\r\n      <footer>opacity</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"open_in_browser\"></ux-icon>\r\n      <footer>open_in_browser</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"open_in_new\"></ux-icon>\r\n      <footer>open_in_new</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"open_with\"></ux-icon>\r\n      <footer>open_with</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pageview\"></ux-icon>\r\n      <footer>pageview</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pan_tool\"></ux-icon>\r\n      <footer>pan_tool</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"payment\"></ux-icon>\r\n      <footer>payment</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_camera_mic\"></ux-icon>\r\n      <footer>perm_camera_mic</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_contact_calendar\"></ux-icon>\r\n      <footer>perm_contact_calendar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_data_setting\"></ux-icon>\r\n      <footer>perm_data_setting</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_device_information\"></ux-icon>\r\n      <footer>perm_device_information</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_identity\"></ux-icon>\r\n      <footer>perm_identity</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_media\"></ux-icon>\r\n      <footer>perm_media</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_phone_msg\"></ux-icon>\r\n      <footer>perm_phone_msg</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"perm_scan_wifi\"></ux-icon>\r\n      <footer>perm_scan_wifi</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pets\"></ux-icon>\r\n      <footer>pets</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"picture_in_picture\"></ux-icon>\r\n      <footer>picture_in_picture</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"picture_in_picture_alt\"></ux-icon>\r\n      <footer>picture_in_picture_alt</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"play_for_work\"></ux-icon>\r\n      <footer>play_for_work</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"polymer\"></ux-icon>\r\n      <footer>polymer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"power_settings_new\"></ux-icon>\r\n      <footer>power_settings_new</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pregnant_woman\"></ux-icon>\r\n      <footer>pregnant_woman</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"print\"></ux-icon>\r\n      <footer>print</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"query_builder\"></ux-icon>\r\n      <footer>query_builder</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"question_answer\"></ux-icon>\r\n      <footer>question_answer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"receipt\"></ux-icon>\r\n      <footer>receipt</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"record_voice_over\"></ux-icon>\r\n      <footer>record_voice_over</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"redeem\"></ux-icon>\r\n      <footer>redeem</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"remove_shopping_cart\"></ux-icon>\r\n      <footer>remove_shopping_cart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"reorder\"></ux-icon>\r\n      <footer>reorder</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"report_problem\"></ux-icon>\r\n      <footer>report_problem</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"restore\"></ux-icon>\r\n      <footer>restore</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"restore_page\"></ux-icon>\r\n      <footer>restore_page</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"room\"></ux-icon>\r\n      <footer>room</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rounded_corner\"></ux-icon>\r\n      <footer>rounded_corner</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rowing\"></ux-icon>\r\n      <footer>rowing</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"schedule\"></ux-icon>\r\n      <footer>schedule</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"search\"></ux-icon>\r\n      <footer>search</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings\"></ux-icon>\r\n      <footer>settings</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_applications\"></ux-icon>\r\n      <footer>settings_applications</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_backup_restore\"></ux-icon>\r\n      <footer>settings_backup_restore</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_bluetooth\"></ux-icon>\r\n      <footer>settings_bluetooth</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_brightness\"></ux-icon>\r\n      <footer>settings_brightness</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_cell\"></ux-icon>\r\n      <footer>settings_cell</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_ethernet\"></ux-icon>\r\n      <footer>settings_ethernet</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_input_antenna\"></ux-icon>\r\n      <footer>settings_input_antenna</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_input_component\"></ux-icon>\r\n      <footer>settings_input_component</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_input_composite\"></ux-icon>\r\n      <footer>settings_input_composite</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_input_hdmi\"></ux-icon>\r\n      <footer>settings_input_hdmi</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_input_svideo\"></ux-icon>\r\n      <footer>settings_input_svideo</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_overscan\"></ux-icon>\r\n      <footer>settings_overscan</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_phone\"></ux-icon>\r\n      <footer>settings_phone</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_power\"></ux-icon>\r\n      <footer>settings_power</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_remote\"></ux-icon>\r\n      <footer>settings_remote</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_voice\"></ux-icon>\r\n      <footer>settings_voice</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"shop\"></ux-icon>\r\n      <footer>shop</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"shop_two\"></ux-icon>\r\n      <footer>shop_two</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"shopping_basket\"></ux-icon>\r\n      <footer>shopping_basket</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"shopping_cart\"></ux-icon>\r\n      <footer>shopping_cart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"speaker_notes\"></ux-icon>\r\n      <footer>speaker_notes</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"speaker_notes_off\"></ux-icon>\r\n      <footer>speaker_notes_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"spellcheck\"></ux-icon>\r\n      <footer>spellcheck</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"stars\"></ux-icon>\r\n      <footer>stars</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"store\"></ux-icon>\r\n      <footer>store</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"subject\"></ux-icon>\r\n      <footer>subject</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"supervisor_account\"></ux-icon>\r\n      <footer>supervisor_account</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"swap_horiz\"></ux-icon>\r\n      <footer>swap_horiz</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"swap_vert\"></ux-icon>\r\n      <footer>swap_vert</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"swap_vertical_circle\"></ux-icon>\r\n      <footer>swap_vertical_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"system_update_alt\"></ux-icon>\r\n      <footer>system_update_alt</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tab\"></ux-icon>\r\n      <footer>tab</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tab_unselected\"></ux-icon>\r\n      <footer>tab_unselected</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"theaters\"></ux-icon>\r\n      <footer>theaters</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"thumb_down\"></ux-icon>\r\n      <footer>thumb_down</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"thumb_up\"></ux-icon>\r\n      <footer>thumb_up</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"thumbs_up_down\"></ux-icon>\r\n      <footer>thumbs_up_down</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"timeline\"></ux-icon>\r\n      <footer>timeline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"toc\"></ux-icon>\r\n      <footer>toc</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"today\"></ux-icon>\r\n      <footer>today</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"toll\"></ux-icon>\r\n      <footer>toll</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"touch_app\"></ux-icon>\r\n      <footer>touch_app</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"track_changes\"></ux-icon>\r\n      <footer>track_changes</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"translate\"></ux-icon>\r\n      <footer>translate</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"trending_down\"></ux-icon>\r\n      <footer>trending_down</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"trending_flat\"></ux-icon>\r\n      <footer>trending_flat</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"trending_up\"></ux-icon>\r\n      <footer>trending_up</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"turned_in\"></ux-icon>\r\n      <footer>turned_in</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"turned_in_not\"></ux-icon>\r\n      <footer>turned_in_not</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"update\"></ux-icon>\r\n      <footer>update</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"verified_user\"></ux-icon>\r\n      <footer>verified_user</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_agenda\"></ux-icon>\r\n      <footer>view_agenda</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_array\"></ux-icon>\r\n      <footer>view_array</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_carousel\"></ux-icon>\r\n      <footer>view_carousel</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_column\"></ux-icon>\r\n      <footer>view_column</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_day\"></ux-icon>\r\n      <footer>view_day</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_headline\"></ux-icon>\r\n      <footer>view_headline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_list\"></ux-icon>\r\n      <footer>view_list</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_module\"></ux-icon>\r\n      <footer>view_module</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_quilt\"></ux-icon>\r\n      <footer>view_quilt</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_stream\"></ux-icon>\r\n      <footer>view_stream</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_week\"></ux-icon>\r\n      <footer>view_week</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"visibility\"></ux-icon>\r\n      <footer>visibility</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"visibility_off\"></ux-icon>\r\n      <footer>visibility_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"watch_later\"></ux-icon>\r\n      <footer>watch_later</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"work\"></ux-icon>\r\n      <footer>work</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"youtube_searched_for\"></ux-icon>\r\n      <footer>youtube_searched_for</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"zoom_in\"></ux-icon>\r\n      <footer>zoom_in</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"zoom_out\"></ux-icon>\r\n      <footer>zoom_out</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_alert\"></ux-icon>\r\n      <footer>add_alert</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"error\"></ux-icon>\r\n      <footer>error</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"error_outline\"></ux-icon>\r\n      <footer>error_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"warning\"></ux-icon>\r\n      <footer>warning</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_to_queue\"></ux-icon>\r\n      <footer>add_to_queue</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airplay\"></ux-icon>\r\n      <footer>airplay</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"album\"></ux-icon>\r\n      <footer>album</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"art_track\"></ux-icon>\r\n      <footer>art_track</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"av_timer\"></ux-icon>\r\n      <footer>av_timer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"branding_watermark\"></ux-icon>\r\n      <footer>branding_watermark</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_to_action\"></ux-icon>\r\n      <footer>call_to_action</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"closed_caption\"></ux-icon>\r\n      <footer>closed_caption</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"equalizer\"></ux-icon>\r\n      <footer>equalizer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"explicit\"></ux-icon>\r\n      <footer>explicit</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fast_forward\"></ux-icon>\r\n      <footer>fast_forward</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fast_rewind\"></ux-icon>\r\n      <footer>fast_rewind</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"featured_play_list\"></ux-icon>\r\n      <footer>featured_play_list</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"featured_video\"></ux-icon>\r\n      <footer>featured_video</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fiber_dvr\"></ux-icon>\r\n      <footer>fiber_dvr</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fiber_manual_record\"></ux-icon>\r\n      <footer>fiber_manual_record</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fiber_new\"></ux-icon>\r\n      <footer>fiber_new</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fiber_pin\"></ux-icon>\r\n      <footer>fiber_pin</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fiber_smart_record\"></ux-icon>\r\n      <footer>fiber_smart_record</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"forward_10\"></ux-icon>\r\n      <footer>forward_10</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"forward_30\"></ux-icon>\r\n      <footer>forward_30</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"forward_5\"></ux-icon>\r\n      <footer>forward_5</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"games\"></ux-icon>\r\n      <footer>games</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hd\"></ux-icon>\r\n      <footer>hd</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hearing\"></ux-icon>\r\n      <footer>hearing</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"high_quality\"></ux-icon>\r\n      <footer>high_quality</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"library_add\"></ux-icon>\r\n      <footer>library_add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"library_books\"></ux-icon>\r\n      <footer>library_books</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"library_music\"></ux-icon>\r\n      <footer>library_music</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"loop\"></ux-icon>\r\n      <footer>loop</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mic\"></ux-icon>\r\n      <footer>mic</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mic_none\"></ux-icon>\r\n      <footer>mic_none</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mic_off\"></ux-icon>\r\n      <footer>mic_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"movie\"></ux-icon>\r\n      <footer>movie</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"music_video\"></ux-icon>\r\n      <footer>music_video</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"new_releases\"></ux-icon>\r\n      <footer>new_releases</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"not_interested\"></ux-icon>\r\n      <footer>not_interested</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"note\"></ux-icon>\r\n      <footer>note</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pause\"></ux-icon>\r\n      <footer>pause</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pause_circle_filled\"></ux-icon>\r\n      <footer>pause_circle_filled</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pause_circle_outline\"></ux-icon>\r\n      <footer>pause_circle_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"play_arrow\"></ux-icon>\r\n      <footer>play_arrow</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"play_circle_filled\"></ux-icon>\r\n      <footer>play_circle_filled</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"play_circle_outline\"></ux-icon>\r\n      <footer>play_circle_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"playlist_add\"></ux-icon>\r\n      <footer>playlist_add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"playlist_add_check\"></ux-icon>\r\n      <footer>playlist_add_check</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"playlist_play\"></ux-icon>\r\n      <footer>playlist_play</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"queue\"></ux-icon>\r\n      <footer>queue</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"queue_music\"></ux-icon>\r\n      <footer>queue_music</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"queue_play_next\"></ux-icon>\r\n      <footer>queue_play_next</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"radio\"></ux-icon>\r\n      <footer>radio</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"recent_actors\"></ux-icon>\r\n      <footer>recent_actors</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"remove_from_queue\"></ux-icon>\r\n      <footer>remove_from_queue</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"repeat\"></ux-icon>\r\n      <footer>repeat</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"repeat_one\"></ux-icon>\r\n      <footer>repeat_one</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"replay_10\"></ux-icon>\r\n      <footer>replay_10</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"replay\"></ux-icon>\r\n      <footer>replay</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"replay_30\"></ux-icon>\r\n      <footer>replay_30</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"replay_5\"></ux-icon>\r\n      <footer>replay_5</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"shuffle\"></ux-icon>\r\n      <footer>shuffle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"skip_next\"></ux-icon>\r\n      <footer>skip_next</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"skip_previous\"></ux-icon>\r\n      <footer>skip_previous</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"slow_motion_video\"></ux-icon>\r\n      <footer>slow_motion_video</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"snooze\"></ux-icon>\r\n      <footer>snooze</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sort_by_alpha\"></ux-icon>\r\n      <footer>sort_by_alpha</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"stop\"></ux-icon>\r\n      <footer>stop</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"subscriptions\"></ux-icon>\r\n      <footer>subscriptions</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"subtitles\"></ux-icon>\r\n      <footer>subtitles</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"surround_sound\"></ux-icon>\r\n      <footer>surround_sound</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"video_call\"></ux-icon>\r\n      <footer>video_call</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"video_label\"></ux-icon>\r\n      <footer>video_label</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"video_library\"></ux-icon>\r\n      <footer>video_library</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"videocam\"></ux-icon>\r\n      <footer>videocam</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"videocam_off\"></ux-icon>\r\n      <footer>videocam_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"volume_down\"></ux-icon>\r\n      <footer>volume_down</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"volume_mute\"></ux-icon>\r\n      <footer>volume_mute</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"volume_off\"></ux-icon>\r\n      <footer>volume_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"volume_up\"></ux-icon>\r\n      <footer>volume_up</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"web\"></ux-icon>\r\n      <footer>web</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"web_asset\"></ux-icon>\r\n      <footer>web_asset</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"business\"></ux-icon>\r\n      <footer>business</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call\"></ux-icon>\r\n      <footer>call</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_end\"></ux-icon>\r\n      <footer>call_end</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_made\"></ux-icon>\r\n      <footer>call_made</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_merge\"></ux-icon>\r\n      <footer>call_merge</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_missed\"></ux-icon>\r\n      <footer>call_missed</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_missed_outgoing\"></ux-icon>\r\n      <footer>call_missed_outgoing</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_received\"></ux-icon>\r\n      <footer>call_received</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"call_split\"></ux-icon>\r\n      <footer>call_split</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"chat\"></ux-icon>\r\n      <footer>chat</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"chat_bubble\"></ux-icon>\r\n      <footer>chat_bubble</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"chat_bubble_outline\"></ux-icon>\r\n      <footer>chat_bubble_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"clear_all\"></ux-icon>\r\n      <footer>clear_all</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"comment\"></ux-icon>\r\n      <footer>comment</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"contact_mail\"></ux-icon>\r\n      <footer>contact_mail</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"contact_phone\"></ux-icon>\r\n      <footer>contact_phone</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"contacts\"></ux-icon>\r\n      <footer>contacts</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"dialer_sip\"></ux-icon>\r\n      <footer>dialer_sip</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"dialpad\"></ux-icon>\r\n      <footer>dialpad</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"email\"></ux-icon>\r\n      <footer>email</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"forum\"></ux-icon>\r\n      <footer>forum</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"import_contacts\"></ux-icon>\r\n      <footer>import_contacts</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"import_export\"></ux-icon>\r\n      <footer>import_export</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"invert_colors_off\"></ux-icon>\r\n      <footer>invert_colors_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"live_help\"></ux-icon>\r\n      <footer>live_help</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"location_off\"></ux-icon>\r\n      <footer>location_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"location_on\"></ux-icon>\r\n      <footer>location_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mail_outline\"></ux-icon>\r\n      <footer>mail_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"message\"></ux-icon>\r\n      <footer>message</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"no_sim\"></ux-icon>\r\n      <footer>no_sim</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone\"></ux-icon>\r\n      <footer>phone</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phonelink_erase\"></ux-icon>\r\n      <footer>phonelink_erase</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phonelink_lock\"></ux-icon>\r\n      <footer>phonelink_lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phonelink_ring\"></ux-icon>\r\n      <footer>phonelink_ring</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phonelink_setup\"></ux-icon>\r\n      <footer>phonelink_setup</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"portable_wifi_off\"></ux-icon>\r\n      <footer>portable_wifi_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"present_to_all\"></ux-icon>\r\n      <footer>present_to_all</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"ring_volume\"></ux-icon>\r\n      <footer>ring_volume</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rss_feed\"></ux-icon>\r\n      <footer>rss_feed</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"screen_share\"></ux-icon>\r\n      <footer>screen_share</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"speaker_phone\"></ux-icon>\r\n      <footer>speaker_phone</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"stay_current_landscape\"></ux-icon>\r\n      <footer>stay_current_landscape</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"stay_current_portrait\"></ux-icon>\r\n      <footer>stay_current_portrait</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"stay_primary_landscape\"></ux-icon>\r\n      <footer>stay_primary_landscape</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"stay_primary_portrait\"></ux-icon>\r\n      <footer>stay_primary_portrait</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"stop_screen_share\"></ux-icon>\r\n      <footer>stop_screen_share</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"swap_calls\"></ux-icon>\r\n      <footer>swap_calls</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"textsms\"></ux-icon>\r\n      <footer>textsms</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"voicemail\"></ux-icon>\r\n      <footer>voicemail</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"vpn_key\"></ux-icon>\r\n      <footer>vpn_key</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add\"></ux-icon>\r\n      <footer>add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_box\"></ux-icon>\r\n      <footer>add_box</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_circle\"></ux-icon>\r\n      <footer>add_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_circle_outline\"></ux-icon>\r\n      <footer>add_circle_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"archive\"></ux-icon>\r\n      <footer>archive</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"backspace\"></ux-icon>\r\n      <footer>backspace</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"block\"></ux-icon>\r\n      <footer>block</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"clear\"></ux-icon>\r\n      <footer>clear</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"content_copy\"></ux-icon>\r\n      <footer>content_copy</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"content_cut\"></ux-icon>\r\n      <footer>content_cut</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"content_paste\"></ux-icon>\r\n      <footer>content_paste</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"create\"></ux-icon>\r\n      <footer>create</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"delete_sweep\"></ux-icon>\r\n      <footer>delete_sweep</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"drafts\"></ux-icon>\r\n      <footer>drafts</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_list\"></ux-icon>\r\n      <footer>filter_list</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flag\"></ux-icon>\r\n      <footer>flag</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"font_download\"></ux-icon>\r\n      <footer>font_download</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"forward\"></ux-icon>\r\n      <footer>forward</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gesture\"></ux-icon>\r\n      <footer>gesture</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"inbox\"></ux-icon>\r\n      <footer>inbox</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"link\"></ux-icon>\r\n      <footer>link</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"low_priority\"></ux-icon>\r\n      <footer>low_priority</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mail\"></ux-icon>\r\n      <footer>mail</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"markunread\"></ux-icon>\r\n      <footer>markunread</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"move_to_inbox\"></ux-icon>\r\n      <footer>move_to_inbox</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"next_week\"></ux-icon>\r\n      <footer>next_week</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"redo\"></ux-icon>\r\n      <footer>redo</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"remove\"></ux-icon>\r\n      <footer>remove</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"remove_circle\"></ux-icon>\r\n      <footer>remove_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"remove_circle_outline\"></ux-icon>\r\n      <footer>remove_circle_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"reply\"></ux-icon>\r\n      <footer>reply</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"reply_all\"></ux-icon>\r\n      <footer>reply_all</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"report\"></ux-icon>\r\n      <footer>report</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"save\"></ux-icon>\r\n      <footer>save</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"select_all\"></ux-icon>\r\n      <footer>select_all</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"send\"></ux-icon>\r\n      <footer>send</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sort\"></ux-icon>\r\n      <footer>sort</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"text_format\"></ux-icon>\r\n      <footer>text_format</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"unarchive\"></ux-icon>\r\n      <footer>unarchive</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"undo\"></ux-icon>\r\n      <footer>undo</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"weekend\"></ux-icon>\r\n      <footer>weekend</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"access_alarm\"></ux-icon>\r\n      <footer>access_alarm</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"access_alarms\"></ux-icon>\r\n      <footer>access_alarms</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"access_time\"></ux-icon>\r\n      <footer>access_time</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_alarm\"></ux-icon>\r\n      <footer>add_alarm</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airplanemode_active\"></ux-icon>\r\n      <footer>airplanemode_active</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airplanemode_inactive\"></ux-icon>\r\n      <footer>airplanemode_inactive</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_20\"></ux-icon>\r\n      <footer>battery_20</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_30\"></ux-icon>\r\n      <footer>battery_30</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_50\"></ux-icon>\r\n      <footer>battery_50</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_60\"></ux-icon>\r\n      <footer>battery_60</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_80\"></ux-icon>\r\n      <footer>battery_80</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_90\"></ux-icon>\r\n      <footer>battery_90</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_alert\"></ux-icon>\r\n      <footer>battery_alert</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_charging_20\"></ux-icon>\r\n      <footer>battery_charging_20</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_charging_30\"></ux-icon>\r\n      <footer>battery_charging_30</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_charging_50\"></ux-icon>\r\n      <footer>battery_charging_50</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_charging_60\"></ux-icon>\r\n      <footer>battery_charging_60</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_charging_80\"></ux-icon>\r\n      <footer>battery_charging_80</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_charging_90\"></ux-icon>\r\n      <footer>battery_charging_90</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_charging_full\"></ux-icon>\r\n      <footer>battery_charging_full</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_full\"></ux-icon>\r\n      <footer>battery_full</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_std\"></ux-icon>\r\n      <footer>battery_std</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"battery_unknown\"></ux-icon>\r\n      <footer>battery_unknown</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bluetooth\"></ux-icon>\r\n      <footer>bluetooth</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bluetooth_connected\"></ux-icon>\r\n      <footer>bluetooth_connected</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bluetooth_disabled\"></ux-icon>\r\n      <footer>bluetooth_disabled</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bluetooth_searching\"></ux-icon>\r\n      <footer>bluetooth_searching</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_auto\"></ux-icon>\r\n      <footer>brightness_auto</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_high\"></ux-icon>\r\n      <footer>brightness_high</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_low\"></ux-icon>\r\n      <footer>brightness_low</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_medium\"></ux-icon>\r\n      <footer>brightness_medium</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"data_usage\"></ux-icon>\r\n      <footer>data_usage</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"developer_mode\"></ux-icon>\r\n      <footer>developer_mode</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"devices\"></ux-icon>\r\n      <footer>devices</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"dvr\"></ux-icon>\r\n      <footer>dvr</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gps_fixed\"></ux-icon>\r\n      <footer>gps_fixed</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gps_not_fixed\"></ux-icon>\r\n      <footer>gps_not_fixed</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gps_off\"></ux-icon>\r\n      <footer>gps_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"graphic_eq\"></ux-icon>\r\n      <footer>graphic_eq</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"location_disabled\"></ux-icon>\r\n      <footer>location_disabled</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"location_searching\"></ux-icon>\r\n      <footer>location_searching</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"network_cell\"></ux-icon>\r\n      <footer>network_cell</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"network_wifi\"></ux-icon>\r\n      <footer>network_wifi</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"nfc\"></ux-icon>\r\n      <footer>nfc</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"screen_lock_landscape\"></ux-icon>\r\n      <footer>screen_lock_landscape</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"screen_lock_portrait\"></ux-icon>\r\n      <footer>screen_lock_portrait</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"screen_lock_rotation\"></ux-icon>\r\n      <footer>screen_lock_rotation</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"screen_rotation\"></ux-icon>\r\n      <footer>screen_rotation</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sd_storage\"></ux-icon>\r\n      <footer>sd_storage</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"settings_system_daydream\"></ux-icon>\r\n      <footer>settings_system_daydream</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_0_bar\"></ux-icon>\r\n      <footer>signal_cellular_0_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_1_bar\"></ux-icon>\r\n      <footer>signal_cellular_1_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_2_bar\"></ux-icon>\r\n      <footer>signal_cellular_2_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_3_bar\"></ux-icon>\r\n      <footer>signal_cellular_3_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_4_bar\"></ux-icon>\r\n      <footer>signal_cellular_4_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_connected_no_internet_0_bar\"></ux-icon>\r\n      <footer>signal_cellular_connected_no_internet_0_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_connected_no_internet_1_bar\"></ux-icon>\r\n      <footer>signal_cellular_connected_no_internet_1_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_connected_no_internet_2_bar\"></ux-icon>\r\n      <footer>signal_cellular_connected_no_internet_2_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_connected_no_internet_3_bar\"></ux-icon>\r\n      <footer>signal_cellular_connected_no_internet_3_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_connected_no_internet_4_bar\"></ux-icon>\r\n      <footer>signal_cellular_connected_no_internet_4_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_no_sim\"></ux-icon>\r\n      <footer>signal_cellular_no_sim</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_null\"></ux-icon>\r\n      <footer>signal_cellular_null</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_cellular_off\"></ux-icon>\r\n      <footer>signal_cellular_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_0_bar\"></ux-icon>\r\n      <footer>signal_wifi_0_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_1_bar\"></ux-icon>\r\n      <footer>signal_wifi_1_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_1_bar_lock\"></ux-icon>\r\n      <footer>signal_wifi_1_bar_lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_2_bar\"></ux-icon>\r\n      <footer>signal_wifi_2_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_2_bar_lock\"></ux-icon>\r\n      <footer>signal_wifi_2_bar_lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_3_bar\"></ux-icon>\r\n      <footer>signal_wifi_3_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_3_bar_lock\"></ux-icon>\r\n      <footer>signal_wifi_3_bar_lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_4_bar\"></ux-icon>\r\n      <footer>signal_wifi_4_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_4_bar_lock\"></ux-icon>\r\n      <footer>signal_wifi_4_bar_lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"signal_wifi_off\"></ux-icon>\r\n      <footer>signal_wifi_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"storage\"></ux-icon>\r\n      <footer>storage</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"usb\"></ux-icon>\r\n      <footer>usb</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wallpaper\"></ux-icon>\r\n      <footer>wallpaper</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"widgets\"></ux-icon>\r\n      <footer>widgets</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wifi_lock\"></ux-icon>\r\n      <footer>wifi_lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wifi_tethering\"></ux-icon>\r\n      <footer>wifi_tethering</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"attach_file\"></ux-icon>\r\n      <footer>attach_file</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"attach_money\"></ux-icon>\r\n      <footer>attach_money</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_all\"></ux-icon>\r\n      <footer>border_all</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_bottom\"></ux-icon>\r\n      <footer>border_bottom</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_clear\"></ux-icon>\r\n      <footer>border_clear</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_color\"></ux-icon>\r\n      <footer>border_color</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_horizontal\"></ux-icon>\r\n      <footer>border_horizontal</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_inner\"></ux-icon>\r\n      <footer>border_inner</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_left\"></ux-icon>\r\n      <footer>border_left</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_outer\"></ux-icon>\r\n      <footer>border_outer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_right\"></ux-icon>\r\n      <footer>border_right</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_style\"></ux-icon>\r\n      <footer>border_style</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_top\"></ux-icon>\r\n      <footer>border_top</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"border_vertical\"></ux-icon>\r\n      <footer>border_vertical</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bubble_chart\"></ux-icon>\r\n      <footer>bubble_chart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"drag_handle\"></ux-icon>\r\n      <footer>drag_handle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_align_center\"></ux-icon>\r\n      <footer>format_align_center</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_align_justify\"></ux-icon>\r\n      <footer>format_align_justify</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_align_left\"></ux-icon>\r\n      <footer>format_align_left</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_align_right\"></ux-icon>\r\n      <footer>format_align_right</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_bold\"></ux-icon>\r\n      <footer>format_bold</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_clear\"></ux-icon>\r\n      <footer>format_clear</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_color_fill\"></ux-icon>\r\n      <footer>format_color_fill</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_color_reset\"></ux-icon>\r\n      <footer>format_color_reset</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_color_text\"></ux-icon>\r\n      <footer>format_color_text</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_indent_decrease\"></ux-icon>\r\n      <footer>format_indent_decrease</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_indent_increase\"></ux-icon>\r\n      <footer>format_indent_increase</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_italic\"></ux-icon>\r\n      <footer>format_italic</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_line_spacing\"></ux-icon>\r\n      <footer>format_line_spacing</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_list_bulleted\"></ux-icon>\r\n      <footer>format_list_bulleted</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_list_numbered\"></ux-icon>\r\n      <footer>format_list_numbered</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_paint\"></ux-icon>\r\n      <footer>format_paint</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_quote\"></ux-icon>\r\n      <footer>format_quote</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_shapes\"></ux-icon>\r\n      <footer>format_shapes</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_size\"></ux-icon>\r\n      <footer>format_size</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_strikethrough\"></ux-icon>\r\n      <footer>format_strikethrough</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_textdirection_l_to_r\"></ux-icon>\r\n      <footer>format_textdirection_l_to_r</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_textdirection_r_to_l\"></ux-icon>\r\n      <footer>format_textdirection_r_to_l</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"format_underlined\"></ux-icon>\r\n      <footer>format_underlined</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"functions\"></ux-icon>\r\n      <footer>functions</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"highlight\"></ux-icon>\r\n      <footer>highlight</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"insert_chart\"></ux-icon>\r\n      <footer>insert_chart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"insert_comment\"></ux-icon>\r\n      <footer>insert_comment</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"insert_drive_file\"></ux-icon>\r\n      <footer>insert_drive_file</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"insert_emoticon\"></ux-icon>\r\n      <footer>insert_emoticon</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"insert_invitation\"></ux-icon>\r\n      <footer>insert_invitation</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"insert_link\"></ux-icon>\r\n      <footer>insert_link</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"insert_photo\"></ux-icon>\r\n      <footer>insert_photo</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"linear_scale\"></ux-icon>\r\n      <footer>linear_scale</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"merge_type\"></ux-icon>\r\n      <footer>merge_type</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mode_comment\"></ux-icon>\r\n      <footer>mode_comment</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mode_edit\"></ux-icon>\r\n      <footer>mode_edit</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"monetization_on\"></ux-icon>\r\n      <footer>monetization_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"money_off\"></ux-icon>\r\n      <footer>money_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"multiline_chart\"></ux-icon>\r\n      <footer>multiline_chart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pie_chart\"></ux-icon>\r\n      <footer>pie_chart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pie_chart_outlined\"></ux-icon>\r\n      <footer>pie_chart_outlined</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"publish\"></ux-icon>\r\n      <footer>publish</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"short_text\"></ux-icon>\r\n      <footer>short_text</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"show_chart\"></ux-icon>\r\n      <footer>show_chart</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"space_bar\"></ux-icon>\r\n      <footer>space_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"strikethrough_s\"></ux-icon>\r\n      <footer>strikethrough_s</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"text_fields\"></ux-icon>\r\n      <footer>text_fields</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"title\"></ux-icon>\r\n      <footer>title</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"vertical_align_bottom\"></ux-icon>\r\n      <footer>vertical_align_bottom</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"vertical_align_center\"></ux-icon>\r\n      <footer>vertical_align_center</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"vertical_align_top\"></ux-icon>\r\n      <footer>vertical_align_top</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wrap_text\"></ux-icon>\r\n      <footer>wrap_text</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"attachment\"></ux-icon>\r\n      <footer>attachment</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cloud\"></ux-icon>\r\n      <footer>cloud</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cloud_circle\"></ux-icon>\r\n      <footer>cloud_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cloud_done\"></ux-icon>\r\n      <footer>cloud_done</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cloud_download\"></ux-icon>\r\n      <footer>cloud_download</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cloud_off\"></ux-icon>\r\n      <footer>cloud_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cloud_queue\"></ux-icon>\r\n      <footer>cloud_queue</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cloud_upload\"></ux-icon>\r\n      <footer>cloud_upload</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"create_new_folder\"></ux-icon>\r\n      <footer>create_new_folder</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"file_download\"></ux-icon>\r\n      <footer>file_download</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"file_upload\"></ux-icon>\r\n      <footer>file_upload</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"folder\"></ux-icon>\r\n      <footer>folder</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"folder_open\"></ux-icon>\r\n      <footer>folder_open</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"folder_shared\"></ux-icon>\r\n      <footer>folder_shared</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cast\"></ux-icon>\r\n      <footer>cast</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cast_connected\"></ux-icon>\r\n      <footer>cast_connected</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"computer\"></ux-icon>\r\n      <footer>computer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"desktop_mac\"></ux-icon>\r\n      <footer>desktop_mac</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"desktop_windows\"></ux-icon>\r\n      <footer>desktop_windows</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"developer_board\"></ux-icon>\r\n      <footer>developer_board</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"device_hub\"></ux-icon>\r\n      <footer>device_hub</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"devices_other\"></ux-icon>\r\n      <footer>devices_other</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"dock\"></ux-icon>\r\n      <footer>dock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gamepad\"></ux-icon>\r\n      <footer>gamepad</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"headset\"></ux-icon>\r\n      <footer>headset</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"headset_mic\"></ux-icon>\r\n      <footer>headset_mic</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard\"></ux-icon>\r\n      <footer>keyboard</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_arrow_down\"></ux-icon>\r\n      <footer>keyboard_arrow_down</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_arrow_left\"></ux-icon>\r\n      <footer>keyboard_arrow_left</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_arrow_right\"></ux-icon>\r\n      <footer>keyboard_arrow_right</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_arrow_up\"></ux-icon>\r\n      <footer>keyboard_arrow_up</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_backspace\"></ux-icon>\r\n      <footer>keyboard_backspace</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_capslock\"></ux-icon>\r\n      <footer>keyboard_capslock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_hide\"></ux-icon>\r\n      <footer>keyboard_hide</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_return\"></ux-icon>\r\n      <footer>keyboard_return</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_tab\"></ux-icon>\r\n      <footer>keyboard_tab</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"keyboard_voice\"></ux-icon>\r\n      <footer>keyboard_voice</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"laptop\"></ux-icon>\r\n      <footer>laptop</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"laptop_chromebook\"></ux-icon>\r\n      <footer>laptop_chromebook</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"laptop_mac\"></ux-icon>\r\n      <footer>laptop_mac</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"laptop_windows\"></ux-icon>\r\n      <footer>laptop_windows</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"memory\"></ux-icon>\r\n      <footer>memory</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mouse\"></ux-icon>\r\n      <footer>mouse</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_android\"></ux-icon>\r\n      <footer>phone_android</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_iphone\"></ux-icon>\r\n      <footer>phone_iphone</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phonelink\"></ux-icon>\r\n      <footer>phonelink</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phonelink_off\"></ux-icon>\r\n      <footer>phonelink_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"power_input\"></ux-icon>\r\n      <footer>power_input</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"router\"></ux-icon>\r\n      <footer>router</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"scanner\"></ux-icon>\r\n      <footer>scanner</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"security\"></ux-icon>\r\n      <footer>security</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sim_card\"></ux-icon>\r\n      <footer>sim_card</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"smartphone\"></ux-icon>\r\n      <footer>smartphone</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"speaker\"></ux-icon>\r\n      <footer>speaker</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"speaker_group\"></ux-icon>\r\n      <footer>speaker_group</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tablet\"></ux-icon>\r\n      <footer>tablet</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tablet_android\"></ux-icon>\r\n      <footer>tablet_android</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tablet_mac\"></ux-icon>\r\n      <footer>tablet_mac</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"toys\"></ux-icon>\r\n      <footer>toys</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tv\"></ux-icon>\r\n      <footer>tv</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"videogame_asset\"></ux-icon>\r\n      <footer>videogame_asset</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"watch\"></ux-icon>\r\n      <footer>watch</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_a_photo\"></ux-icon>\r\n      <footer>add_a_photo</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_to_photos\"></ux-icon>\r\n      <footer>add_to_photos</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"adjust\"></ux-icon>\r\n      <footer>adjust</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assistant\"></ux-icon>\r\n      <footer>assistant</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"assistant_photo\"></ux-icon>\r\n      <footer>assistant_photo</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"audiotrack\"></ux-icon>\r\n      <footer>audiotrack</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"blur_circular\"></ux-icon>\r\n      <footer>blur_circular</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"blur_linear\"></ux-icon>\r\n      <footer>blur_linear</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"blur_off\"></ux-icon>\r\n      <footer>blur_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"blur_on\"></ux-icon>\r\n      <footer>blur_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_1\"></ux-icon>\r\n      <footer>brightness_1</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_2\"></ux-icon>\r\n      <footer>brightness_2</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_3\"></ux-icon>\r\n      <footer>brightness_3</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_4\"></ux-icon>\r\n      <footer>brightness_4</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_5\"></ux-icon>\r\n      <footer>brightness_5</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_6\"></ux-icon>\r\n      <footer>brightness_6</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brightness_7\"></ux-icon>\r\n      <footer>brightness_7</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"broken_image\"></ux-icon>\r\n      <footer>broken_image</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"brush\"></ux-icon>\r\n      <footer>brush</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"burst_mode\"></ux-icon>\r\n      <footer>burst_mode</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"camera\"></ux-icon>\r\n      <footer>camera</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"camera_alt\"></ux-icon>\r\n      <footer>camera_alt</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"camera_front\"></ux-icon>\r\n      <footer>camera_front</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"camera_rear\"></ux-icon>\r\n      <footer>camera_rear</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"camera_roll\"></ux-icon>\r\n      <footer>camera_roll</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"center_focus_strong\"></ux-icon>\r\n      <footer>center_focus_strong</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"center_focus_weak\"></ux-icon>\r\n      <footer>center_focus_weak</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"collections\"></ux-icon>\r\n      <footer>collections</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"collections_bookmark\"></ux-icon>\r\n      <footer>collections_bookmark</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"color_lens\"></ux-icon>\r\n      <footer>color_lens</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"colorize\"></ux-icon>\r\n      <footer>colorize</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"compare\"></ux-icon>\r\n      <footer>compare</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"control_point\"></ux-icon>\r\n      <footer>control_point</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"control_point_duplicate\"></ux-icon>\r\n      <footer>control_point_duplicate</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_16_9\"></ux-icon>\r\n      <footer>crop_16_9</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop\"></ux-icon>\r\n      <footer>crop</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_3_2\"></ux-icon>\r\n      <footer>crop_3_2</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_5_4\"></ux-icon>\r\n      <footer>crop_5_4</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_7_5\"></ux-icon>\r\n      <footer>crop_7_5</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_din\"></ux-icon>\r\n      <footer>crop_din</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_free\"></ux-icon>\r\n      <footer>crop_free</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_landscape\"></ux-icon>\r\n      <footer>crop_landscape</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_original\"></ux-icon>\r\n      <footer>crop_original</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_portrait\"></ux-icon>\r\n      <footer>crop_portrait</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_rotate\"></ux-icon>\r\n      <footer>crop_rotate</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"crop_square\"></ux-icon>\r\n      <footer>crop_square</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"dehaze\"></ux-icon>\r\n      <footer>dehaze</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"details\"></ux-icon>\r\n      <footer>details</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"edit\"></ux-icon>\r\n      <footer>edit</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"exposure\"></ux-icon>\r\n      <footer>exposure</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"exposure_neg_1\"></ux-icon>\r\n      <footer>exposure_neg_1</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"exposure_neg_2\"></ux-icon>\r\n      <footer>exposure_neg_2</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"exposure_plus_1\"></ux-icon>\r\n      <footer>exposure_plus_1</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"exposure_plus_2\"></ux-icon>\r\n      <footer>exposure_plus_2</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"exposure_zero\"></ux-icon>\r\n      <footer>exposure_zero</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_1\"></ux-icon>\r\n      <footer>filter_1</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter\"></ux-icon>\r\n      <footer>filter</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_2\"></ux-icon>\r\n      <footer>filter_2</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_3\"></ux-icon>\r\n      <footer>filter_3</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_4\"></ux-icon>\r\n      <footer>filter_4</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_5\"></ux-icon>\r\n      <footer>filter_5</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_6\"></ux-icon>\r\n      <footer>filter_6</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_7\"></ux-icon>\r\n      <footer>filter_7</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_8\"></ux-icon>\r\n      <footer>filter_8</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_9\"></ux-icon>\r\n      <footer>filter_9</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_9_plus\"></ux-icon>\r\n      <footer>filter_9_plus</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_b_and_w\"></ux-icon>\r\n      <footer>filter_b_and_w</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_center_focus\"></ux-icon>\r\n      <footer>filter_center_focus</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_drama\"></ux-icon>\r\n      <footer>filter_drama</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_frames\"></ux-icon>\r\n      <footer>filter_frames</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_hdr\"></ux-icon>\r\n      <footer>filter_hdr</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_none\"></ux-icon>\r\n      <footer>filter_none</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_tilt_shift\"></ux-icon>\r\n      <footer>filter_tilt_shift</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"filter_vintage\"></ux-icon>\r\n      <footer>filter_vintage</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flare\"></ux-icon>\r\n      <footer>flare</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flash_auto\"></ux-icon>\r\n      <footer>flash_auto</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flash_off\"></ux-icon>\r\n      <footer>flash_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flash_on\"></ux-icon>\r\n      <footer>flash_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flip\"></ux-icon>\r\n      <footer>flip</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"gradient\"></ux-icon>\r\n      <footer>gradient</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"grain\"></ux-icon>\r\n      <footer>grain</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"grid_off\"></ux-icon>\r\n      <footer>grid_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"grid_on\"></ux-icon>\r\n      <footer>grid_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hdr_off\"></ux-icon>\r\n      <footer>hdr_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hdr_on\"></ux-icon>\r\n      <footer>hdr_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hdr_strong\"></ux-icon>\r\n      <footer>hdr_strong</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hdr_weak\"></ux-icon>\r\n      <footer>hdr_weak</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"healing\"></ux-icon>\r\n      <footer>healing</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"image\"></ux-icon>\r\n      <footer>image</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"image_aspect_ratio\"></ux-icon>\r\n      <footer>image_aspect_ratio</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"iso\"></ux-icon>\r\n      <footer>iso</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"landscape\"></ux-icon>\r\n      <footer>landscape</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"leak_add\"></ux-icon>\r\n      <footer>leak_add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"leak_remove\"></ux-icon>\r\n      <footer>leak_remove</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"lens\"></ux-icon>\r\n      <footer>lens</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"linked_camera\"></ux-icon>\r\n      <footer>linked_camera</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"looks\"></ux-icon>\r\n      <footer>looks</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"looks_3\"></ux-icon>\r\n      <footer>looks_3</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"looks_4\"></ux-icon>\r\n      <footer>looks_4</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"looks_5\"></ux-icon>\r\n      <footer>looks_5</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"looks_6\"></ux-icon>\r\n      <footer>looks_6</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"looks_one\"></ux-icon>\r\n      <footer>looks_one</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"looks_two\"></ux-icon>\r\n      <footer>looks_two</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"loupe\"></ux-icon>\r\n      <footer>loupe</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"monochrome_photos\"></ux-icon>\r\n      <footer>monochrome_photos</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"movie_creation\"></ux-icon>\r\n      <footer>movie_creation</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"movie_filter\"></ux-icon>\r\n      <footer>movie_filter</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"music_note\"></ux-icon>\r\n      <footer>music_note</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"nature\"></ux-icon>\r\n      <footer>nature</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"nature_people\"></ux-icon>\r\n      <footer>nature_people</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"navigate_before\"></ux-icon>\r\n      <footer>navigate_before</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"navigate_next\"></ux-icon>\r\n      <footer>navigate_next</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"palette\"></ux-icon>\r\n      <footer>palette</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"panorama\"></ux-icon>\r\n      <footer>panorama</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"panorama_fish_eye\"></ux-icon>\r\n      <footer>panorama_fish_eye</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"panorama_horizontal\"></ux-icon>\r\n      <footer>panorama_horizontal</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"panorama_vertical\"></ux-icon>\r\n      <footer>panorama_vertical</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"panorama_wide_angle\"></ux-icon>\r\n      <footer>panorama_wide_angle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo\"></ux-icon>\r\n      <footer>photo</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo_album\"></ux-icon>\r\n      <footer>photo_album</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo_camera\"></ux-icon>\r\n      <footer>photo_camera</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo_filter\"></ux-icon>\r\n      <footer>photo_filter</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo_library\"></ux-icon>\r\n      <footer>photo_library</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo_size_select_actual\"></ux-icon>\r\n      <footer>photo_size_select_actual</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo_size_select_large\"></ux-icon>\r\n      <footer>photo_size_select_large</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"photo_size_select_small\"></ux-icon>\r\n      <footer>photo_size_select_small</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"picture_as_pdf\"></ux-icon>\r\n      <footer>picture_as_pdf</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"portrait\"></ux-icon>\r\n      <footer>portrait</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"remove_red_eye\"></ux-icon>\r\n      <footer>remove_red_eye</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rotate_90_degrees_ccw\"></ux-icon>\r\n      <footer>rotate_90_degrees_ccw</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rotate_left\"></ux-icon>\r\n      <footer>rotate_left</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rotate_right\"></ux-icon>\r\n      <footer>rotate_right</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"slideshow\"></ux-icon>\r\n      <footer>slideshow</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"straighten\"></ux-icon>\r\n      <footer>straighten</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"style\"></ux-icon>\r\n      <footer>style</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"switch_camera\"></ux-icon>\r\n      <footer>switch_camera</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"switch_video\"></ux-icon>\r\n      <footer>switch_video</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tag_faces\"></ux-icon>\r\n      <footer>tag_faces</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"texture\"></ux-icon>\r\n      <footer>texture</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"timelapse\"></ux-icon>\r\n      <footer>timelapse</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"timer_10\"></ux-icon>\r\n      <footer>timer_10</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"timer\"></ux-icon>\r\n      <footer>timer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"timer_3\"></ux-icon>\r\n      <footer>timer_3</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"timer_off\"></ux-icon>\r\n      <footer>timer_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tonality\"></ux-icon>\r\n      <footer>tonality</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"transform\"></ux-icon>\r\n      <footer>transform</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tune\"></ux-icon>\r\n      <footer>tune</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_comfy\"></ux-icon>\r\n      <footer>view_comfy</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"view_compact\"></ux-icon>\r\n      <footer>view_compact</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"vignette\"></ux-icon>\r\n      <footer>vignette</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wb_auto\"></ux-icon>\r\n      <footer>wb_auto</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wb_cloudy\"></ux-icon>\r\n      <footer>wb_cloudy</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wb_incandescent\"></ux-icon>\r\n      <footer>wb_incandescent</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wb_iridescent\"></ux-icon>\r\n      <footer>wb_iridescent</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wb_sunny\"></ux-icon>\r\n      <footer>wb_sunny</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"add_location\"></ux-icon>\r\n      <footer>add_location</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"beenhere\"></ux-icon>\r\n      <footer>beenhere</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions\"></ux-icon>\r\n      <footer>directions</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_bike\"></ux-icon>\r\n      <footer>directions_bike</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_boat\"></ux-icon>\r\n      <footer>directions_boat</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_bus\"></ux-icon>\r\n      <footer>directions_bus</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_car\"></ux-icon>\r\n      <footer>directions_car</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_railway\"></ux-icon>\r\n      <footer>directions_railway</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_run\"></ux-icon>\r\n      <footer>directions_run</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_subway\"></ux-icon>\r\n      <footer>directions_subway</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_transit\"></ux-icon>\r\n      <footer>directions_transit</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"directions_walk\"></ux-icon>\r\n      <footer>directions_walk</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"edit_location\"></ux-icon>\r\n      <footer>edit_location</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"ev_station\"></ux-icon>\r\n      <footer>ev_station</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"flight\"></ux-icon>\r\n      <footer>flight</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hotel\"></ux-icon>\r\n      <footer>hotel</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"layers\"></ux-icon>\r\n      <footer>layers</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"layers_clear\"></ux-icon>\r\n      <footer>layers_clear</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_activity\"></ux-icon>\r\n      <footer>local_activity</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_airport\"></ux-icon>\r\n      <footer>local_airport</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_atm\"></ux-icon>\r\n      <footer>local_atm</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_bar\"></ux-icon>\r\n      <footer>local_bar</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_cafe\"></ux-icon>\r\n      <footer>local_cafe</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_car_wash\"></ux-icon>\r\n      <footer>local_car_wash</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_convenience_store\"></ux-icon>\r\n      <footer>local_convenience_store</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_dining\"></ux-icon>\r\n      <footer>local_dining</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_drink\"></ux-icon>\r\n      <footer>local_drink</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_florist\"></ux-icon>\r\n      <footer>local_florist</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_gas_station\"></ux-icon>\r\n      <footer>local_gas_station</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_grocery_store\"></ux-icon>\r\n      <footer>local_grocery_store</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_hospital\"></ux-icon>\r\n      <footer>local_hospital</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_hotel\"></ux-icon>\r\n      <footer>local_hotel</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_laundry_service\"></ux-icon>\r\n      <footer>local_laundry_service</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_library\"></ux-icon>\r\n      <footer>local_library</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_mall\"></ux-icon>\r\n      <footer>local_mall</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_movies\"></ux-icon>\r\n      <footer>local_movies</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_offer\"></ux-icon>\r\n      <footer>local_offer</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_parking\"></ux-icon>\r\n      <footer>local_parking</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_pharmacy\"></ux-icon>\r\n      <footer>local_pharmacy</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_phone\"></ux-icon>\r\n      <footer>local_phone</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_pizza\"></ux-icon>\r\n      <footer>local_pizza</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_play\"></ux-icon>\r\n      <footer>local_play</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_post_office\"></ux-icon>\r\n      <footer>local_post_office</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_printshop\"></ux-icon>\r\n      <footer>local_printshop</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_see\"></ux-icon>\r\n      <footer>local_see</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_shipping\"></ux-icon>\r\n      <footer>local_shipping</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"local_taxi\"></ux-icon>\r\n      <footer>local_taxi</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"map\"></ux-icon>\r\n      <footer>map</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"my_location\"></ux-icon>\r\n      <footer>my_location</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"navigation\"></ux-icon>\r\n      <footer>navigation</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"near_me\"></ux-icon>\r\n      <footer>near_me</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"person_pin\"></ux-icon>\r\n      <footer>person_pin</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"person_pin_circle\"></ux-icon>\r\n      <footer>person_pin_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pin_drop\"></ux-icon>\r\n      <footer>pin_drop</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"place\"></ux-icon>\r\n      <footer>place</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rate_review\"></ux-icon>\r\n      <footer>rate_review</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"restaurant\"></ux-icon>\r\n      <footer>restaurant</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"restaurant_menu\"></ux-icon>\r\n      <footer>restaurant_menu</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"satellite\"></ux-icon>\r\n      <footer>satellite</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"store_mall_directory\"></ux-icon>\r\n      <footer>store_mall_directory</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"streetview\"></ux-icon>\r\n      <footer>streetview</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"subway\"></ux-icon>\r\n      <footer>subway</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"terrain\"></ux-icon>\r\n      <footer>terrain</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"traffic\"></ux-icon>\r\n      <footer>traffic</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"train\"></ux-icon>\r\n      <footer>train</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tram\"></ux-icon>\r\n      <footer>tram</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"transfer_within_a_station\"></ux-icon>\r\n      <footer>transfer_within_a_station</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"zoom_out_map\"></ux-icon>\r\n      <footer>zoom_out_map</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"apps\"></ux-icon>\r\n      <footer>apps</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"arrow_back\"></ux-icon>\r\n      <footer>arrow_back</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"arrow_downward\"></ux-icon>\r\n      <footer>arrow_downward</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"arrow_drop_down\"></ux-icon>\r\n      <footer>arrow_drop_down</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"arrow_drop_down_circle\"></ux-icon>\r\n      <footer>arrow_drop_down_circle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"arrow_drop_up\"></ux-icon>\r\n      <footer>arrow_drop_up</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"arrow_forward\"></ux-icon>\r\n      <footer>arrow_forward</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"arrow_upward\"></ux-icon>\r\n      <footer>arrow_upward</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cancel\"></ux-icon>\r\n      <footer>cancel</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"check\"></ux-icon>\r\n      <footer>check</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"chevron_left\"></ux-icon>\r\n      <footer>chevron_left</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"chevron_right\"></ux-icon>\r\n      <footer>chevron_right</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"close\"></ux-icon>\r\n      <footer>close</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"expand_less\"></ux-icon>\r\n      <footer>expand_less</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"expand_more\"></ux-icon>\r\n      <footer>expand_more</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"first_page\"></ux-icon>\r\n      <footer>first_page</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fullscreen\"></ux-icon>\r\n      <footer>fullscreen</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fullscreen_exit\"></ux-icon>\r\n      <footer>fullscreen_exit</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"last_page\"></ux-icon>\r\n      <footer>last_page</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"menu\"></ux-icon>\r\n      <footer>menu</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"more_horiz\"></ux-icon>\r\n      <footer>more_horiz</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"more_vert\"></ux-icon>\r\n      <footer>more_vert</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"refresh\"></ux-icon>\r\n      <footer>refresh</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"subdirectory_arrow_left\"></ux-icon>\r\n      <footer>subdirectory_arrow_left</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"subdirectory_arrow_right\"></ux-icon>\r\n      <footer>subdirectory_arrow_right</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"unfold_less\"></ux-icon>\r\n      <footer>unfold_less</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"unfold_more\"></ux-icon>\r\n      <footer>unfold_more</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"adb\"></ux-icon>\r\n      <footer>adb</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_flat\"></ux-icon>\r\n      <footer>airline_seat_flat</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_flat_angled\"></ux-icon>\r\n      <footer>airline_seat_flat_angled</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_individual_suite\"></ux-icon>\r\n      <footer>airline_seat_individual_suite</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_legroom_extra\"></ux-icon>\r\n      <footer>airline_seat_legroom_extra</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_legroom_normal\"></ux-icon>\r\n      <footer>airline_seat_legroom_normal</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_legroom_reduced\"></ux-icon>\r\n      <footer>airline_seat_legroom_reduced</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_recline_extra\"></ux-icon>\r\n      <footer>airline_seat_recline_extra</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airline_seat_recline_normal\"></ux-icon>\r\n      <footer>airline_seat_recline_normal</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"bluetooth_audio\"></ux-icon>\r\n      <footer>bluetooth_audio</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"confirmation_number\"></ux-icon>\r\n      <footer>confirmation_number</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"disc_full\"></ux-icon>\r\n      <footer>disc_full</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"do_not_disturb\"></ux-icon>\r\n      <footer>do_not_disturb</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"do_not_disturb_alt\"></ux-icon>\r\n      <footer>do_not_disturb_alt</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"do_not_disturb_off\"></ux-icon>\r\n      <footer>do_not_disturb_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"do_not_disturb_on\"></ux-icon>\r\n      <footer>do_not_disturb_on</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"drive_eta\"></ux-icon>\r\n      <footer>drive_eta</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"enhanced_encryption\"></ux-icon>\r\n      <footer>enhanced_encryption</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"event_available\"></ux-icon>\r\n      <footer>event_available</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"event_busy\"></ux-icon>\r\n      <footer>event_busy</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"event_note\"></ux-icon>\r\n      <footer>event_note</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"folder_special\"></ux-icon>\r\n      <footer>folder_special</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"live_tv\"></ux-icon>\r\n      <footer>live_tv</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mms\"></ux-icon>\r\n      <footer>mms</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"more\"></ux-icon>\r\n      <footer>more</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"network_check\"></ux-icon>\r\n      <footer>network_check</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"network_locked\"></ux-icon>\r\n      <footer>network_locked</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"no_encryption\"></ux-icon>\r\n      <footer>no_encryption</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"ondemand_video\"></ux-icon>\r\n      <footer>ondemand_video</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"personal_video\"></ux-icon>\r\n      <footer>personal_video</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_bluetooth_speaker\"></ux-icon>\r\n      <footer>phone_bluetooth_speaker</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_forwarded\"></ux-icon>\r\n      <footer>phone_forwarded</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_in_talk\"></ux-icon>\r\n      <footer>phone_in_talk</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_locked\"></ux-icon>\r\n      <footer>phone_locked</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_missed\"></ux-icon>\r\n      <footer>phone_missed</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"phone_paused\"></ux-icon>\r\n      <footer>phone_paused</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"power\"></ux-icon>\r\n      <footer>power</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"priority_high\"></ux-icon>\r\n      <footer>priority_high</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rv_hookup\"></ux-icon>\r\n      <footer>rv_hookup</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sd_card\"></ux-icon>\r\n      <footer>sd_card</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sim_card_alert\"></ux-icon>\r\n      <footer>sim_card_alert</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sms\"></ux-icon>\r\n      <footer>sms</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sms_failed\"></ux-icon>\r\n      <footer>sms_failed</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sync\"></ux-icon>\r\n      <footer>sync</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sync_disabled\"></ux-icon>\r\n      <footer>sync_disabled</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sync_problem\"></ux-icon>\r\n      <footer>sync_problem</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"system_update\"></ux-icon>\r\n      <footer>system_update</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"tap_and_play\"></ux-icon>\r\n      <footer>tap_and_play</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"time_to_leave\"></ux-icon>\r\n      <footer>time_to_leave</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"vibration\"></ux-icon>\r\n      <footer>vibration</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"voice_chat\"></ux-icon>\r\n      <footer>voice_chat</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"vpn_lock\"></ux-icon>\r\n      <footer>vpn_lock</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wc\"></ux-icon>\r\n      <footer>wc</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"wifi\"></ux-icon>\r\n      <footer>wifi</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"ac_unit\"></ux-icon>\r\n      <footer>ac_unit</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"airport_shuttle\"></ux-icon>\r\n      <footer>airport_shuttle</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"all_inclusive\"></ux-icon>\r\n      <footer>all_inclusive</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"beach_access\"></ux-icon>\r\n      <footer>beach_access</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"business_center\"></ux-icon>\r\n      <footer>business_center</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"casino\"></ux-icon>\r\n      <footer>casino</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"child_care\"></ux-icon>\r\n      <footer>child_care</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"child_friendly\"></ux-icon>\r\n      <footer>child_friendly</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"fitness_center\"></ux-icon>\r\n      <footer>fitness_center</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"free_breakfast\"></ux-icon>\r\n      <footer>free_breakfast</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"golf_course\"></ux-icon>\r\n      <footer>golf_course</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"hot_tub\"></ux-icon>\r\n      <footer>hot_tub</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"kitchen\"></ux-icon>\r\n      <footer>kitchen</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pool\"></ux-icon>\r\n      <footer>pool</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"room_service\"></ux-icon>\r\n      <footer>room_service</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"rv_hookup\"></ux-icon>\r\n      <footer>rv_hookup</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"smoke_free\"></ux-icon>\r\n      <footer>smoke_free</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"smoking_rooms\"></ux-icon>\r\n      <footer>smoking_rooms</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"spa\"></ux-icon>\r\n      <footer>spa</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"cake\"></ux-icon>\r\n      <footer>cake</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"domain\"></ux-icon>\r\n      <footer>domain</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"group\"></ux-icon>\r\n      <footer>group</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"group_add\"></ux-icon>\r\n      <footer>group_add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"location_city\"></ux-icon>\r\n      <footer>location_city</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mood\"></ux-icon>\r\n      <footer>mood</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"mood_bad\"></ux-icon>\r\n      <footer>mood_bad</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"notifications\"></ux-icon>\r\n      <footer>notifications</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"notifications_active\"></ux-icon>\r\n      <footer>notifications_active</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"notifications_none\"></ux-icon>\r\n      <footer>notifications_none</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"notifications_off\"></ux-icon>\r\n      <footer>notifications_off</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"notifications_paused\"></ux-icon>\r\n      <footer>notifications_paused</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"pages\"></ux-icon>\r\n      <footer>pages</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"party_mode\"></ux-icon>\r\n      <footer>party_mode</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"people\"></ux-icon>\r\n      <footer>people</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"people_outline\"></ux-icon>\r\n      <footer>people_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"person\"></ux-icon>\r\n      <footer>person</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"person_add\"></ux-icon>\r\n      <footer>person_add</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"person_outline\"></ux-icon>\r\n      <footer>person_outline</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"plus_one\"></ux-icon>\r\n      <footer>plus_one</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"poll\"></ux-icon>\r\n      <footer>poll</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"public\"></ux-icon>\r\n      <footer>public</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"school\"></ux-icon>\r\n      <footer>school</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sentiment_dissatisfied\"></ux-icon>\r\n      <footer>sentiment_dissatisfied</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sentiment_neutral\"></ux-icon>\r\n      <footer>sentiment_neutral</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sentiment_satisfied\"></ux-icon>\r\n      <footer>sentiment_satisfied</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sentiment_very_dissatisfied\"></ux-icon>\r\n      <footer>sentiment_very_dissatisfied</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"sentiment_very_satisfied\"></ux-icon>\r\n      <footer>sentiment_very_satisfied</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"share\"></ux-icon>\r\n      <footer>share</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"whatshot\"></ux-icon>\r\n      <footer>whatshot</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"check_box\"></ux-icon>\r\n      <footer>check_box</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"check_box_outline_blank\"></ux-icon>\r\n      <footer>check_box_outline_blank</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"indeterminate_check_box\"></ux-icon>\r\n      <footer>indeterminate_check_box</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"radio_button_checked\"></ux-icon>\r\n      <footer>radio_button_checked</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"radio_button_unchecked\"></ux-icon>\r\n      <footer>radio_button_unchecked</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"star\"></ux-icon>\r\n      <footer>star</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"star_border\"></ux-icon>\r\n      <footer>star_border</footer>\r\n    </figure>\r\n    <figure styles.figure>\r\n      <ux-icon icon=\"star_half\"></ux-icon>\r\n      <footer>star_half</footer>\r\n    </figure>\r\n    <!--anchor-->\r\n  </section>\r\n  </main>\r\n</template>\r\n"; });
define('text!components/icons.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  margin: 16px;\r\n  width: 250px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 16px;\r\n}\r\n\r\nstyles.figure ux-icon {\r\n  width: 48px;\r\n  height: 48px;\r\n}\r\n\r\nstyles.figure ux-icon>svg {\r\n  fill: #757575;\r\n  width: 48px;\r\n  height: 48px;\r\n}\r\n\r\nstyles.figure>footer {\r\n  padding-top: 16px;\r\n  font-size: 12px;\r\n}\r\n"; });
define('text!components/inputs.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./inputs.css#ux\"></require>\r\n  <main styles.main>\r\n\r\n    <h1 styles.header>\r\n      &lt;ux-input&gt;&lt;/ux-input&gt;\r\n    </h1>\r\n    <p styles.description>\r\n      The <code>ux-input</code> element allows users to input data.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input value.bind=\"uxInputSingleLine\"></ux-input>\r\n        </div>\r\n\r\n        <div class=\"add-padding\">\r\n          value: ${uxInputSingleLine}\r\n        </div>\r\n\r\n        <code>\r\n          default\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <p styles.description>\r\n      The <code>ux-input</code> extends many native functions of the standard input control.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input disabled value=\"Disabled Input\"></ux-input>\r\n        </div>\r\n\r\n        <ux-input class=\"full-width\" disabled value=\"Disabled Input\"></ux-input>\r\n\r\n        <code>\r\n          disabled\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input readonly value=\"Read Only Input\"></ux-input>\r\n        </div>\r\n\r\n        <ux-input class=\"full-width\" readonly value=\"Read Only Input\"></ux-input>\r\n\r\n        <code>\r\n          readonly\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input placeholder=\"Text goes in this field\"></ux-input>\r\n        </div>\r\n\r\n        <code>\r\n          placeholder=\"Value Here\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input value=\"Password\" type=\"password\"></ux-input>\r\n        </div>\r\n\r\n        <ux-input class=\"full-width\" value=\"Password\" type=\"password\"></ux-input>\r\n\r\n        <code>\r\n           type=\"password\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input type=\"number\" step=\"5\"></ux-input>\r\n        </div>\r\n\r\n        <code>\r\n          type=\"number\" step=\"5\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input type=\"number\" min=\"5\"></ux-input>\r\n        </div>\r\n\r\n        <code>\r\n          type=\"number\" min=\"5\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input type=\"number\" max=\"10\"></ux-input>\r\n        </div>\r\n\r\n        <code>\r\n          type=\"number\" max=\"10\"\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n    <p styles.description>\r\n      The <code>ux-input</code> has a few classes to help with styling.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input class=\"has-error\" value=\"Error!\"></ux-input>\r\n        </div>\r\n\r\n        <ux-input class=\"full-width has-error\" value=\"Error!\"></ux-input>\r\n\r\n        <code>\r\n          class=\"has-error\"\r\n        </code>\r\n      </figure>\r\n      \r\n      <figure styles.figure>\r\n        <ux-input class=\"full-width\" value.bind=\"uxInputFullWidth\"></ux-input>\r\n\r\n        <div class=\"add-padding\">\r\n          value: ${uxInputFullWidth}\r\n        </div>\r\n\r\n        <code>\r\n          class=\"full-width\"\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <h2 styles.header>Aurelia Validation</h2>\r\n    <p styles.description>\r\n      The <code>ux-input</code> has native support for the Aurelia Validation plugin.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n\r\n        <div class=\"add-padding\">\r\n          <form submit.delegate=\"submit()\">\r\n            \r\n            <ux-input class=\"form-control\" \r\n                      validation-errors.bind=\"firstNameErrors\"\r\n                      class.bind=\"firstNameErrors.length ? 'has-error' : ''\"\r\n                      view-model.ref=\"errorDemo1\"\r\n                      placeholder=\"First Name\" \r\n                      value.bind=\"firstName & validate\"></ux-input>\r\n            <ux-input-info target.bind=\"errorDemo1\">\r\n              <span if.bind=\"firstNameErrors.length\">${firstNameErrors[0].error.message}</span>\r\n            </ux-input-info>\r\n\r\n            <ux-input type=\"email\"\r\n                      validation-errors.bind=\"emailErrors\"\r\n                      class.bind=\"emailErrors.length ? 'has-error' : ''\" \r\n                      view-model.ref=\"errorDemo2\"\r\n                      class=\"form-control\" \r\n                      placeholder=\"Email\" \r\n                      value.bind=\"email & validate\"></ux-input>\r\n            <ux-input-info target.bind=\"errorDemo2\">\r\n                <span if.bind=\"emailErrors.length\">${emailErrors[0].error.message}</span>\r\n                <span if.bind=\"!emailErrors.length\">john@example.com</span>\r\n            </ux-input-info>\r\n\r\n\r\n            <ux-button type=\"raised\" size=\"small\" class=\"btn btn-primary\">Submit</ux-button>\r\n          </form>\r\n\r\n        </div>\r\n        <code>\r\n          \r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n\r\n    <h2 styles.header>Input Info Box & Input Counter</h2>\r\n    <p styles.description>\r\n      The <code>ux-input</code> has a sibling element that will display the current character count or current characters remaining. If a max attribute is present on the <code>ux-input</code> element then the counter will display the total characters remaining, otherwise it will default to displaying the total characters. This element can also display hint text or error text as well.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-input view-model.ref=\"ibicDemo1\"></ux-input>\r\n          <ux-input-info ux-input-counter target.bind=\"ibicDemo1\"></ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          &lt;ux-input-info input-counter /&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-input view-model.ref=\"ibicDemo2\" maxlength=\"10\"></ux-input>\r\n          <ux-input-info ux-input-counter target.bind=\"ibicDemo2\"></ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          &lt;ux-input-info input-counter maxlength=\"10\" /&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-input view-model.ref=\"ibicDemo3\"></ux-input>\r\n          <ux-input-info target.bind=\"ibicDemo3\">I am a message</ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          &lt;ux-input-info&gt;message&lt;/ux-input-info&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-input view-model.ref=\"ibicDemo3\" maxlength=\"10\"></ux-input>\r\n          <ux-input-info ux-input-counter target.bind=\"ibicDemo3\">I am a message</ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          Combined\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n  </main>\r\n</template>\r\n"; });
define('text!components/inputs.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  margin: 40px 0 20px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  background: ${$swatches.grey.p300};\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 320px;\r\n  height: 320px;\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nstyles.figure > div.add-padding {\r\n  padding: 8px;\r\n}\r\n\r\nstyles.figure > ux-button {\r\n  margin: auto;\r\n}\r\n\r\nstyles.figure > code {\r\n  padding:16px;\r\n  background: ${$swatches.grey.p200};\r\n}\r\n"; });
define('text!components/list.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./list.css#ux\"></require>\r\n  <main styles.main>\r\n\r\n    <h1 styles.header>\r\n      &lt;ux-list&gt;&lt;/ux-list&gt;\r\n    </h1>\r\n    <p styles.description>\r\n      The <code>ux-list</code> element allows users to create lists to display repeating data.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <ux-list>\r\n          <ux-list-item>\r\n            List Item 1\r\n          </ux-list-item>\r\n          <ux-list-item>\r\n            List Item 2\r\n          </ux-list-item>\r\n          <ux-list-item>\r\n            List Item 3\r\n          </ux-list-item>\r\n        </ux-list>\r\n\r\n\r\n        <code>\r\n          ux-list\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <ux-list type=\"two-line\">\r\n\r\n          <ux-list-item>\r\n            <div class=\"list-content\">\r\n              <span>List Item 1</span>\r\n              <div class=\"secondary\">Secondary content</div>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n          <ux-list-item>\r\n            <div class=\"list-content\">\r\n              <span>List Item 2</span>\r\n              <div class=\"secondary\">Secondary content</div>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n          <ux-list-item>\r\n            <div class=\"list-content\">\r\n              <span>List Item 3</span>\r\n              <div class=\"secondary\">Secondary content that is very long, the purpose is to show content that would clip.</div>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n        </ux-list>\r\n\r\n\r\n        <code>\r\n          class=\"two-line\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <ux-list type=\"three-line\">\r\n\r\n          <ux-list-item>\r\n            <div class=\"list-content\">\r\n              <span>List Item 1</span>\r\n              <div class=\"secondary\">Secondary content that is very long. The purpose is to show content that would clip. The three line item wraps\r\n                so the test content must be longer.</div>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n          <ux-list-item>\r\n            <div class=\"list-content\">\r\n              <span>List Item 2</span>\r\n              <div class=\"secondary\">Secondary content that is very long. The purpose is to show content that would clip. The three line item wraps\r\n                so the test content must be longer.</div>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n          <ux-list-item>\r\n            <div class=\"list-content\">\r\n              <span>List Item 3</span>\r\n              <div class=\"secondary\">Secondary content that is very long. The purpose is to show content that would clip. The three line item wraps\r\n                so the test content must be longer.</div>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n        </ux-list>\r\n\r\n\r\n        <code>\r\n          class=\"three-line\"\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n    <p styles.description>\r\n      The <code>ux-list</code> list has support for icons and secondary actions.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <ux-list type=\"two-line\">\r\n\r\n          <ux-list-item>\r\n            <ux-icon icon=\"person\"></ux-icon>\r\n            <div class=\"list-content\">\r\n              <span>List Item 1</span>\r\n              <div class=\"secondary\">Secondary content</div>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n          <ux-list-item>\r\n            <ux-icon icon=\"person\"></ux-icon>\r\n            <div class=\"list-content\">\r\n              <span>List Item 2</span>\r\n              <div class=\"secondary\">Secondary content</div>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n          <ux-list-item>\r\n            <ux-icon icon=\"person\"></ux-icon>\r\n            <div class=\"list-content\">\r\n              <span>List Item 3</span>\r\n              <div class=\"secondary\">Secondary content</div>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n        </ux-list>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n\r\n\r\n        <ux-list type=\"two-line\">\r\n\r\n          <ux-list-item>\r\n            <div class=\"list-content\">\r\n              <span>List Item 1</span>\r\n              <div class=\"secondary\">Secondary content</div>\r\n            </div>\r\n            <ux-checkbox></ux-checkbox>\r\n          </ux-list-item>\r\n\r\n          <ux-list-item>\r\n            <div class=\"list-content\">\r\n              <span>List Item 2</span>\r\n              <div class=\"secondary\">Secondary content</div>\r\n            </div>\r\n            <ux-checkbox></ux-checkbox>\r\n          </ux-list-item>\r\n\r\n          <ux-list-item>\r\n            <div class=\"list-content\">\r\n              <span>List Item 3</span>\r\n              <div class=\"secondary\">Secondary content</div>\r\n            </div>\r\n            <ux-checkbox></ux-checkbox>\r\n          </ux-list-item>\r\n\r\n        </ux-list>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n    <h2 styles.header>.list-avatar</h2>\r\n    <p styles.description>\r\n      The <code>.list-avatar</code> class should be used when adding an image to a list, such as a profile picture in a list\r\n      of people.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <ux-list type=\"two-line\">\r\n\r\n          <ux-list-item>\r\n            <img class=\"list-avatar\" src=\"../images/aurelia-icon-128x128.png\">\r\n            <div class=\"list-content\">\r\n              <span>List Item 1</span>\r\n              <div class=\"secondary\">Secondary content</div>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n          <ux-list-item>\r\n            <img class=\"list-avatar\" src=\"../images/aurelia-icon-128x128.png\">\r\n            <div class=\"list-content\">\r\n              <span>List Item 2</span>\r\n              <div class=\"secondary\">Secondary content</div>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n          <ux-list-item>\r\n            <img class=\"list-avatar\" src=\"../images/aurelia-icon-128x128.png\">\r\n            <div class=\"list-content\">\r\n              <span>List Item 3</span>\r\n              <div class=\"secondary\">Secondary content</div>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n        </ux-list>\r\n\r\n\r\n        <code>\r\n          &lt;img class=\"list-avatar\"&gt;\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n    <h2 styles.header>.action-item</h2>\r\n    <p styles.description>\r\n      The <code>.action-item</code> class is used to add secondary actions. This class centers its content vertically and\r\n      horizontally.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <ux-list type=\"two-line\">\r\n\r\n          <ux-list-item>\r\n            <div class=\"list-content\">\r\n              <span>List Item 1</span>\r\n              <div class=\"secondary\">Secondary content</div>\r\n            </div>\r\n            <div class=\"action-item\">\r\n              <ux-icon icon=\"3d_rotation\"></ux-icon>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n          <ux-list-item>\r\n            <div class=\"list-content\">\r\n              <span>List Item 2</span>\r\n              <div class=\"secondary\">Secondary content</div>\r\n            </div>\r\n            <div class=\"action-item\">\r\n              <ux-button>Edit</ux-button>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n          <ux-list-item>\r\n            <div class=\"list-content\">\r\n              <span>List Item 3</span>\r\n              <div class=\"secondary\">Secondary content</div>\r\n            </div>\r\n            <div class=\"action-item\">\r\n              <ux-checkbox></ux-checkbox>\r\n            </div>\r\n          </ux-list-item>\r\n\r\n        </ux-list>\r\n\r\n\r\n        <code>\r\n          class=\"action-item\"\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n  </main>\r\n</template>\r\n"; });
define('text!components/list.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  margin: 40px 0 20px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  background: ${$swatches.white};\r\n  border: 1px solid ${$swatches.grey.p300};\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 320px;\r\n  height: 320px;\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nstyles.figure > div.add-padding {\r\n  padding: 8px;\r\n}\r\n\r\nstyles.figure > ux-button {\r\n  margin: auto;\r\n}\r\n\r\nstyles.figure > code {\r\n  padding:16px;\r\n  background: ${$swatches.grey.p200};\r\n}\r\n"; });
define('text!components/textarea.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./textarea.css#ux\"></require>\r\n  <main styles.main>\r\n\r\n    <h1 styles.header>\r\n      &lt;ux-textarea&gt;&lt;/ux-textarea&gt;\r\n    </h1>\r\n    <p styles.description>\r\n      The <code>ux-textarea</code> element allows users to input data.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea value.bind=\"uxInputSingleLine\"></ux-textarea>\r\n        </div>\r\n\r\n        <div class=\"add-padding\">\r\n          value: ${uxInputSingleLine}\r\n        </div>\r\n\r\n        <code>\r\n          default\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <p styles.description>\r\n      The <code>ux-textarea</code> extends many native functions of the standard textarea control.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea disabled value=\"Disabled Input\"></ux-textarea>\r\n        </div>\r\n\r\n        <ux-textarea class=\"full-width\" disabled value=\"Disabled Input\"></ux-textarea>\r\n\r\n        <code>\r\n          disabled\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea readonly value=\"Read Only Input\"></ux-textarea>\r\n        </div>\r\n\r\n        <ux-textarea class=\"full-width\" readonly value=\"Read Only Input\"></ux-textarea>\r\n\r\n        <code>\r\n          readonly\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea placeholder=\"Text goes in this field\"></ux-textarea>\r\n        </div>\r\n\r\n        <code>\r\n          placeholder=\"Value Here\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea rows=\"5\" placeholder=\"Text goes in this field\"></ux-textarea>\r\n        </div>\r\n        <code>\r\n          rows=\"number\"\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n    <p styles.description>\r\n      The <code>ux-textarea</code> has a few classes to help with styling.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea class=\"has-error\" value=\"Error!\"></ux-textarea>\r\n        </div>\r\n\r\n        <ux-textarea class=\"full-width has-error\" value=\"Error!\"></ux-textarea>\r\n\r\n        <code>\r\n          class=\"has-error\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <ux-textarea class=\"full-width\" value.bind=\"uxInputFullWidth\"></ux-textarea>\r\n\r\n        <div class=\"add-padding\">\r\n          value: ${uxInputFullWidth}\r\n        </div>\r\n\r\n        <code>\r\n          class=\"full-width\"\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-textarea class=\"show-grip\"></ux-textarea>\r\n        </div>\r\n\r\n        <code>\r\n          class=\"show-grip\"\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <h2 styles.header>Aurelia Validation</h2>\r\n    <p styles.description>\r\n      The <code>ux-textarea</code> has native support for the Aurelia Validation plugin.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n      <figure styles.figure>\r\n\r\n        <div class=\"add-padding\">\r\n          <form submit.delegate=\"submit()\">\r\n\r\n            <ux-input class=\"form-control\" validation-errors.bind=\"firstNameErrors\" class.bind=\"firstNameErrors.length ? 'has-error' : ''\" view-model.ref=\"errorDemo1\" placeholder=\"First Name\" value.bind=\"firstName & validate\"></ux-input>\r\n            <ux-input-info target.bind=\"errorDemo1\">\r\n              <span if.bind=\"firstNameErrors.length\">${firstNameErrors[0].error.message}</span>\r\n            </ux-input-info>\r\n\r\n            <ux-textarea validation-errors.bind=\"descriptionErrors\" class.bind=\"descriptionErrors.length ? 'has-error' : ''\" view-model.ref=\"errorDemo2\" class=\"form-control\" placeholder=\"Description\" maxlength=\"500\" value.bind=\"description & validate\"></ux-textarea>\r\n            <ux-input-info ux-input-counter target.bind=\"errorDemo2\">\r\n              <span if.bind=\"descriptionErrors.length\">${descriptionErrors[0].error.message}</span>\r\n              <span if.bind=\"!descriptionErrors.length\">john@example.com</span>\r\n            </ux-input-info>\r\n\r\n\r\n            <ux-button type=\"raised\" size=\"small\" class=\"btn btn-primary\">Submit</ux-button>\r\n          </form>\r\n\r\n        </div>\r\n        <code>\r\n\r\n        </code>\r\n      </figure>\r\n    </section>\r\n\r\n    <h2 styles.header>auto-resize</h2>\r\n    <p styles.description>\r\n      The <code>ux-textarea</code> has an auto-resize attribute to allow the textarea to grow in height as needed to accomodate the input.\r\n    </p>\r\n\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea auto-resize></ux-textarea>\r\n        </div>\r\n\r\n        <code>\r\n          auto-resize\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n\r\n\r\n    <h2 styles.header>Input Info Box & Input Counter</h2>\r\n    <p styles.description>\r\n      The <code>ux-textarea</code> has a sibling element that will display the current character count or current characters remaining. If a max attribute is present on the <code>ux-textarea</code> element then the counter will display the total characters remaining, otherwise it will default to displaying the total characters. This element can also display hint text or error text.\r\n    </p>\r\n\r\n    <section styles.feature>\r\n\r\n      <figure styles.figure class=\"add-padding\">\r\n        <div class=\"add-padding\">\r\n          <ux-textarea view-model.ref=\"ibicDemo1\"></ux-textarea>\r\n          <ux-input-info ux-input-counter target.bind=\"ibicDemo1\"></ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          &lt;ux-input-info input-counter /&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-textarea view-model.ref=\"ibicDemo2\" maxlength=\"10\"></ux-textarea>\r\n          <ux-input-info ux-input-counter target.bind=\"ibicDemo2\"></ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          &lt;ux-input-info input-counter maxlength=\"10\" /&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-textarea view-model.ref=\"ibicDemo3\"></ux-textarea>\r\n          <ux-input-info target.bind=\"ibicDemo3\">I am a message</ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          &lt;ux-input-info&gt;message&lt;/ux-input-info&gt;\r\n        </code>\r\n      </figure>\r\n\r\n      <figure styles.figure>\r\n        <div class=\"add-padding\">\r\n          <ux-textarea view-model.ref=\"ibicDemo3\" maxlength=\"10\"></ux-textarea>\r\n          <ux-input-info ux-input-counter target.bind=\"ibicDemo3\">I am a message</ux-input-info>\r\n        </div>\r\n\r\n        <code>\r\n          Combined\r\n        </code>\r\n      </figure>\r\n\r\n    </section>\r\n  </main>\r\n</template>\r\n"; });
define('text!components/textarea.css', ['module'], function(module) { module.exports = "styles.feature {\r\n  margin: 40px 0 20px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\nstyles.figure {\r\n  background: ${$swatches.grey.p300};\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 320px;\r\n  height: 320px;\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nstyles.figure > div.add-padding {\r\n  padding: 8px;\r\n}\r\n\r\nstyles.figure > ux-button {\r\n  margin: auto;\r\n}\r\n\r\nstyles.figure > code {\r\n  padding:16px;\r\n  background: ${$swatches.grey.p200};\r\n}\r\n"; });
define('text!core-features/swatches.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./swatches.css#ux\"></require>\r\n\r\n  <main styles.main>\r\n    <p styles.description>\r\n      Swatches provide sets of colors, both primaries and accents, based on the\r\n      color theory behind Material Design. It is recommended that you select one\r\n      primary and one accent color for your app, each with a normal, light and dark shade.\r\n    </p>\r\n\r\n    <section styles.swatches>\r\n      <div repeat.for=\"swatch of swatches\" styles.swatch>\r\n        <ul>\r\n          <li css=\"background: ${swatch.p500}\">\r\n            <div styles.swatch-name>\r\n              ${swatch.name}\r\n            </div>\r\n\r\n            <div styles.color-row>\r\n              <div>p500</div>\r\n              <div>${swatch.p500}</div>\r\n            </div>\r\n          </li>\r\n\r\n          <li repeat.for=\"color of swatch.colors\" styles.color-row css=\"background: ${color.value}\">\r\n            <div>${color.name}</div>\r\n            <div>${color.value}</div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </section>\r\n  </main>\r\n\r\n</template>\r\n"; });
define('text!core-features/swatches.css', ['module'], function(module) { module.exports = "styles.swatches {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  margin-top: 40px;\r\n}\r\n\r\nstyles.swatch {\r\n  width: 320px;\r\n  margin-bottom: 40px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\nstyles.swatch-name {\r\n  padding: 10px 15px 11px;\r\n  font-size: 13px;\r\n  line-height: 24px;\r\n  margin-bottom: 53px;\r\n}\r\n\r\nstyles.color-row {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n  padding: 10px 15px 11px;\r\n  font-size: 13px;\r\n  line-height: 24px;\r\n}\r\n"; });
define('text!core-features/theming.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from='../common.css#ux'></require>\r\n  <require from=\"./theming.css#ux\"></require>\r\n\r\n  <main styles.main>\r\n    <p styles.description>\r\n      All UX styles can include binding expressions. They can be bound against your custom style models, and/or against generally\r\n      available properties such as platform and design language.\r\n    </p>\r\n\r\n    <section styles.themegroup>\r\n      <div styles.themecard>\r\n        <div styles.groupprimary css=\"background: ${ux.design.primary}; color: ${ux.design.primaryForeground};\" click.trigger=\"currentProperty = 'primary'\">\r\n          <span click.delegate=\"currentProperty = 'primaryForeground'\">\r\n            Primary\r\n          </span>\r\n        </div>\r\n\r\n        <div styles.groupsecondary style=\"display:flex;\">\r\n          <div css=\"background: ${ux.design.primaryLight}; color: ${ux.design.primaryLightForeground};\" click.trigger=\"currentProperty = 'primaryLight'\">\r\n            <span click.delegate=\"currentProperty = 'primaryLightForeground'\">\r\n              Primary Light\r\n            </span>\r\n          </div>\r\n          <div css=\"background: ${ux.design.primaryDark}; color: ${ux.design.primaryDarkForeground};\" click.trigger=\"currentProperty = 'primaryDark'\">\r\n            <span click.delegate=\"currentProperty = 'primaryDarkForeground'\">\r\n              Primary Dark\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div styles.themecard>\r\n        <div styles.groupprimary css=\"background: ${ux.design.accent}; color: ${ux.design.accentForeground};\" click.trigger=\"currentProperty = 'accent'\">\r\n          <span click.delegate=\"currentProperty = 'accentForeground'\">\r\n            Accent\r\n          </span>\r\n        </div>\r\n\r\n        <div styles.groupsecondary style=\"display:flex;\">\r\n          <div css=\"background: ${ux.design.accentLight}; color: ${ux.design.accentLightForeground};\" click.trigger=\"currentProperty = 'accentLight'\">\r\n            <span click.delegate=\"currentProperty = 'accentLightForeground'\">\r\n            Accent Light\r\n            </span>\r\n          </div>\r\n          <div css=\"background: ${ux.design.accentDark}; color: ${ux.design.accentDarkForeground};\" click.trigger=\"currentProperty = 'accentDark'\">\r\n            <span click.delegate=\"currentProperty = 'accentDarkForeground'\">\r\n            Accent Dark\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section styles.properties>\r\n\r\n      <p styles.description>\r\n        Click a section(for background) or title(for foreground) to select a property if you wish to change the color with the picker below.\r\n      </p>\r\n\r\n      <div styles.property-row>\r\n        <code>design.${currentProperty}</code> <br> <br>\r\n        <input type=\"color\" value.bind=\"ux.design[currentProperty]\">\r\n        ${ux.design[currentProperty]}\r\n      </div>\r\n    </section>\r\n  </main>\r\n</template>"; });
define('text!core-features/theming.css', ['module'], function(module) { module.exports = "styles.properties {\r\n  margin-top: 40px;\r\n}\r\n\r\nstyles.property-row {\r\n  margin: 24px 0;\r\n}\r\n\r\nstyles.label {\r\n  display: block;\r\n  margin-bottom: 16px;\r\n}\r\n\r\nstyles.themegroup {\r\n  display: flex;\r\n}\r\n\r\nstyles.themecard {\r\n  width: 320px;\r\n  margin-right: 16px;\r\n  margin-bottom: 40px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\r\n  cursor: pointer;\r\n}\r\n\r\nstyles.groupprimary {\r\n  padding: 16px;\r\n  height: 150px;\r\n}\r\n\r\nstyles.groupsecondary {\r\n  display: flex;\r\n  height: 60px;\r\n}\r\n\r\nstyles.groupsecondary > div {\r\n   flex-grow: 1;\r\n   padding: 16px;\r\n}\r\n"; });
//# sourceMappingURL=app-bundle.js.map