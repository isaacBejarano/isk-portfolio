(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+xYV":
/*!*********************************!*\
  !*** ./src/app/utils/shared.ts ***!
  \*********************************/
/*! exports provided: Shared */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shared", function() { return Shared; });
class Shared {
    constructor() { }
    // static methods
    static openLink() {
        return confirm('This link will open in a new window');
    }
    static hashIt(str) {
        return '#' + str;
    }
    static capitalLetter(str) {
        return str.substr(0, 1).toUpperCase() + str.substr(1, str.length);
    }
    static pageToTop() {
        window.scrollTo(0, 0);
    }
    // to reroute on buttons and other alements different from <a>
    static reroute(routerInstance, route) {
        routerInstance.navigate([route]);
    }
}


/***/ }),

/***/ "/0IB":
/*!***************************************************!*\
  !*** ./src/app/shared/scroll/scroll.component.ts ***!
  \***************************************************/
/*! exports provided: ScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function() { return ScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/shared */ "+xYV");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store */ "Pii7");




class ScrollComponent {
    constructor() {
        this.scroll = _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].getScroll;
        this.navbar = _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].getNavbar;
        // <- shared methods
        this.hashIt = _utils_shared__WEBPACK_IMPORTED_MODULE_1__["Shared"].hashIt;
    }
}
ScrollComponent.ɵfac = function ScrollComponent_Factory(t) { return new (t || ScrollComponent)(); };
ScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollComponent, selectors: [["app-scroll"]], decls: 3, vars: 3, consts: [["id", "scroller", 1, "scroll-to-top", "d-lg-none", "position-fixed", "d-none"], ["rel", "nofollow", 1, "js-scroll-trigger", "d-block", "text-center", "text-custom", "border", "border-secondary", "rounded-sm", 3, "href"]], template: function ScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.hashIt(ctx.navbar.home), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.scroll.icon);
    } }, styles: [".text-gray[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\na[_ngcontent-%COMP%]:not(.nav-link) {\n  color: orange;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background-color: transparent !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\nbody[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  background-color: #d99a26 !important;\n}\n\n.scroll-to-top[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zYXNzL19nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zY3JvbGwvc2Nyb2xsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtBQ0FGOztBRGtCQTtFQUNFLGFBWk87QUNIVDs7QURrQkE7RUFDRSxzQkFBQTtFQUNBLHdDQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0JBQUE7QUNmRjs7QURrQkE7RUFDRSx3QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLHdCQUFBO0FDZkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QUF4QkU7RUFDRSxzQkFBQTtBQTJCSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zY3JvbGwvc2Nyb2xsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2xvYmFsIFN0eWxlc1xyXG4udGV4dC1ncmF5IHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuJGJyZWFrcG9pbnQtc206IDU3NnB4O1xyXG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XHJcbiRicmVha3BvaW50LWxnOiA5OTJweDtcclxuXHJcbiRjdXN0b206IG9yYW5nZTtcclxuJGN1c3RvbS1iZzogZGFya2VuKCRjdXN0b20sIDglKTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kdmFsaWQtY29sb3I6ICMxYWJjOWM7IC8vIH50aGVtZSBwcmltYXJ5XHJcbiRpbnZhbGlkLWNvbG9yOiBjcmltc29uO1xyXG4kd2FybmluZzogI2ZmYzEwNztcclxuJGRhbmdlcjogI2RjMzU0NTtcclxuJGxhYmVsOiBsaWdodGdyYXk7XHJcblxyXG4vLyBDVVNUT01JWkUgVEhFTUVcclxuXHJcbmE6bm90KC5uYXYtbGluaykge1xyXG4gIGNvbG9yOiAkY3VzdG9tO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1wcmltYXJ5IHtcclxuICBjb2xvcjogJGN1c3RvbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGNvbG9yOiAkY3VzdG9tICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWN1c3RvbSB7XHJcbiAgY29sb3I6ICRjdXN0b20gIWltcG9ydGFudDtcclxufVxyXG5cclxuYm9keSAuYmctcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGVzYXR1cmF0ZSgkY3VzdG9tLCAzMCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuIiwiLnRleHQtZ3JheSB7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG5hOm5vdCgubmF2LWxpbmspIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJ0bi1vdXRsaW5lLWxpZ2h0OmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jdXN0b20ge1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk5YTI2ICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGwtdG8tdG9wIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scroll',
                templateUrl: './scroll.component.html',
                styleUrls: ['./scroll.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\03_CODE\IT_ACADEMY\10_ANGULAR\tramesa1\isk-portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/store */ "Pii7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _masterhead_masterhead_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./masterhead/masterhead.component */ "3xvW");
/* harmony import */ var _featured_featured_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./featured/featured.component */ "Clxq");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "Ek/o");







class HomeComponent {
    constructor(
    //
    activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.portfolio = _store_store__WEBPACK_IMPORTED_MODULE_1__["store"].getPortfolio;
    }
    // I) SCROLL Animation - JQuery plugin - Easing
    ngOnInit() {
        (($, activatedRoute, router) => {
            'use strict';
            /* 1. JQUERY EASING */
            // navbar.component + scroll.component dependencies of app.component
            // so this algorithm can reference them.
            // Smooth scrolling using jQuery easing
            $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', 
            // prettier-ignore
            function () {
                if (location.pathname.replace(/^\//, '') ===
                    this.pathname.replace(/^\//, '') &&
                    location.hostname === this.hostname) {
                    let target = $(this.hash);
                    target = target.length
                        ? target
                        : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top - 71,
                        }, 1000, 'easeInOutExpo' // see plugin methods
                        );
                        return false;
                    }
                }
            });
            // Scroll to top button appear
            $(document).on('scroll', 
            // prettier-ignore
            function () {
                const scrollDistance = $(this).scrollTop();
                if (scrollDistance > 100) {
                    $('.scroll-to-top').fadeIn();
                }
                else {
                    $('.scroll-to-top').fadeOut();
                }
            });
            // Closes responsive menu when a scroll trigger link is clicked
            $('.js-scroll-trigger').on('click', () => {
                $('.navbar-collapse').collapse('hide');
            });
            // Activate scrollspy to add active class to navbar items on scroll
            $('body').scrollspy({
                target: '#mainNav',
                offset: 80,
            });
            // Collapse Navbar
            const navbarCollapse = () => {
                if ($('#mainNav').offset().top > 100) {
                    $('#mainNav').addClass('navbar-shrink');
                }
                else {
                    $('#mainNav').removeClass('navbar-shrink');
                }
            };
            // Collapse now if page is not at top
            navbarCollapse();
            // Collapse the navbar when page is scrolled
            $(window).on('scroll', navbarCollapse);
            // Floating label headings for the contact form
            $(() => {
                $('body')
                    .on('input propertychange', '.floating-label-form-group', 
                // prettier-ignore
                function (e) {
                    $(this).toggleClass('floating-label-form-group-with-value', !!$(e.target).val());
                })
                    .on('focus', '.floating-label-form-group', 
                // prettier-ignore
                function () {
                    $(this).addClass('floating-label-form-group-with-focus');
                })
                    .on('blur', '.floating-label-form-group', 
                // prettier-ignore
                function () {
                    $(this).removeClass('floating-label-form-group-with-focus');
                });
            });
            /* 2. RESET URL FRAGMENT FROM OTHER ROUTES:VIEWS */
            const anchor = `/#${activatedRoute.snapshot.fragment}`;
            if (anchor !== '/#null') {
                setTimeout(() => router.navigate(['']), 30);
            }
        })(jQuery, this.activatedRoute, this.router);
    }
    // II) SCROLL Animation - enabled only in "home.component"
    ngAfterViewChecked() {
        _store_store__WEBPACK_IMPORTED_MODULE_1__["store"].setScrollShow = true; // scroller -> state true
    }
    // III) SCROLL Animation - enable scroller view
    ngDoCheck() {
        if (_store_store__WEBPACK_IMPORTED_MODULE_1__["store"].scroll.show) {
            document.getElementById('scroller').classList.remove('d-none');
        }
    }
    // IV) "home.component" navbar style ".active" remove when in "about.component" and "contact.component"
    ngOnDestroy() {
        const scrollable = document.querySelector('.js-scroll-trigger.active');
        if (scrollable) {
            scrollable.classList.remove('active');
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, consts: [["id", "home"], ["id", "new"], ["id", "portfolio"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-masterhead", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-featured", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-portfolio", 2);
    } }, directives: [_masterhead_masterhead_component__WEBPACK_IMPORTED_MODULE_3__["MasterheadComponent"], _featured_featured_component__WEBPACK_IMPORTED_MODULE_4__["FeaturedComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "3xvW":
/*!***************************************************************!*\
  !*** ./src/app/pages/home/masterhead/masterhead.component.ts ***!
  \***************************************************************/
/*! exports provided: MasterheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterheadComponent", function() { return MasterheadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/store */ "Pii7");
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/divider/divider.component */ "JmOq");




class MasterheadComponent {
    constructor() {
        // prop -> to <app-divider> Input()
        this.divider = 'divider-light';
        this.masterhead = _store_store__WEBPACK_IMPORTED_MODULE_1__["store"].getMasterhead;
    }
}
MasterheadComponent.ɵfac = function MasterheadComponent_Factory(t) { return new (t || MasterheadComponent)(); };
MasterheadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterheadComponent, selectors: [["app-masterhead"]], decls: 8, vars: 5, consts: [[1, "masthead", "bg-primary", "text-white", "text-center"], [1, "container"], [1, "border", "border-white", "rounded", "masthead-avatar", "mb-5", 3, "src", "alt"], [1, "masthead-heading", "text-uppercase", "mb-0"], [3, "color"], [1, "masthead-subheading", "font-weight-light", "mb-0"]], template: function MasterheadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.masterhead.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.masterhead.alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.masterhead.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.divider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.masterhead.title, " ");
    } }, directives: [_shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_2__["DividerComponent"]], styles: [".masthead[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n}\n\n.masthead[_ngcontent-%COMP%] {\n  padding-top: calc(6rem + 74px);\n  padding-bottom: 6rem;\n}\n\n.masthead[_ngcontent-%COMP%]   .masthead-heading[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n  line-height: 2.75rem;\n}\n\n.masthead[_ngcontent-%COMP%]   .masthead-subheading[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\n.masthead[_ngcontent-%COMP%]   .masthead-avatar[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n@media (min-width: 992px) {\n  .masthead[_ngcontent-%COMP%] {\n    padding-top: calc(6rem + 104px);\n    padding-bottom: 6rem;\n  }\n\n  .masthead[_ngcontent-%COMP%]   .masthead-heading[_ngcontent-%COMP%] {\n    font-size: 4rem;\n    line-height: 3.5rem;\n  }\n\n  .masthead[_ngcontent-%COMP%]   .masthead-subheading[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n\nimg.masthead-avatar[_ngcontent-%COMP%] {\n  border-width: 4px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9tYXN0ZXJoZWFkL21hc3RlcmhlYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7QUFJRjs7QUFGQTtFQUNFO0lBQ0UsK0JBQUE7SUFDQSxvQkFBQTtFQUtGOztFQUhBO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBTUY7O0VBSkE7SUFDRSxpQkFBQTtFQU9GO0FBQ0Y7O0FBSEE7RUFDRSw0QkFBQTtBQUtGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9tYXN0ZXJoZWFkL21hc3RlcmhlYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzdGhlYWQgLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5tYXN0aGVhZCB7XHJcbiAgcGFkZGluZy10b3A6IGNhbGMoNnJlbSArIDc0cHgpO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xyXG59XHJcbi5tYXN0aGVhZCAubWFzdGhlYWQtaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAyLjc1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjc1cmVtO1xyXG59XHJcbi5tYXN0aGVhZCAubWFzdGhlYWQtc3ViaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcbi5tYXN0aGVhZCAubWFzdGhlYWQtYXZhdGFyIHtcclxuICB3aWR0aDogMjAwcHg7IC8vIHdpZHRoOiAxNXJlbTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAubWFzdGhlYWQge1xyXG4gICAgcGFkZGluZy10b3A6IGNhbGMoNnJlbSArIDEwNHB4KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2cmVtO1xyXG4gIH1cclxuICAubWFzdGhlYWQgLm1hc3RoZWFkLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcclxuICB9XHJcbiAgLm1hc3RoZWFkIC5tYXN0aGVhZC1zdWJoZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLy8gVGhlbWUgb3ZlcnJpZGVcclxuaW1nLm1hc3RoZWFkLWF2YXRhciB7XHJcbiAgYm9yZGVyLXdpZHRoOiA0cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterheadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-masterhead',
                templateUrl: './masterhead.component.html',
                styleUrls: ['./masterhead.component.scss'],
            }]
    }], function () { return []; }, null); })();


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

/***/ "Clxq":
/*!***********************************************************!*\
  !*** ./src/app/pages/home/featured/featured.component.ts ***!
  \***********************************************************/
/*! exports provided: FeaturedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function() { return FeaturedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/shared */ "+xYV");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/store */ "Pii7");
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/divider/divider.component */ "JmOq");





class FeaturedComponent {
    constructor() {
        // props to Input()
        this.divider = 'divider-dark';
        this.new = _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].getNew; // featured ~new
        this.portfolioItems = _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].getPortfolioItems; // common + modal8
        this.portfolioCommon = _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].getPortfolioCommon; // common + modal8
        // <- shared methods
        this.openLink = _utils_shared__WEBPACK_IMPORTED_MODULE_1__["Shared"].openLink;
    }
}
FeaturedComponent.ɵfac = function FeaturedComponent_Factory(t) { return new (t || FeaturedComponent)(); };
FeaturedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturedComponent, selectors: [["app-featured"]], decls: 41, vars: 15, consts: [[1, "page-section", "featured"], [1, "container"], [1, "page-section-heading", "text-center", "text-custom", "font-weight-lighter", "mb-5"], [1, "featured-heading"], [1, "page-section-heading", "text-center", "text-uppercase", "text-secondary", "mb-3"], [1, "page-section-heading", "text-center", "text-gray", "mb-0"], [3, "color"], [1, "row"], [1, "col", "d-flex", "justify-content-center"], ["id", "featured-pic", "data-toggle", "modal", "data-target", "#featuredModal", 1, "portfolio-item", "mx-auto"], [1, "rounded-lg", "portfolio-item-caption", "d-flex", "align-items-center", "justify-content-center", "h-100", "w-100"], [1, "portfolio-item-caption-content", "text-center", "text-white"], [1, "fas", "fa-plus", "fa-3x"], [1, "border", "border-secondary", "img-fluid", "border", "rounded-lg", 3, "src", "alt"], ["id", "featuredModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "featuredModal", "aria-hidden", "true", 1, "portfolio-modal", "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-xl"], [1, "modal-content"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "text-custom"], ["aria-hidden", "true"], [1, "fas", "fa-times"], [1, "modal-body", "text-center"], [1, "row", "justify-content-center"], [1, "col-lg-8"], ["id", "featuredModal", 1, "portfolio-modal-title", "text-secondary", "text-uppercase", "mb-0"], [1, "border", "border-secondary", "rounded-sm", "img-fluid", "rounded", "mb-5", 3, "src", "alt"], [1, "mb-5", "text-justify"], ["rel", "nofollow", "target", "_blank", 3, "href", "click"], [1, "text-gray"], ["data-dismiss", "modal", 1, "btn", "btn-outline-dark"], [1, "fas", "fa-times", "fa-fw"]], template: function FeaturedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " new ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeaturedComponent_Template_a_click_33_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.portfolioItems[9].title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.new, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.divider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/", ctx.portfolioItems[9].src, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx.portfolioItems[9].alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.portfolioItems[9].title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.divider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/", ctx.portfolioItems[9].src, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx.portfolioItems[9].alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.portfolioItems[9].p1, " ", ctx.portfolioCommon.visit, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.portfolioItems[9].link1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.portfolioItems[9].repo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.portfolioCommon.star, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.portfolioItems[9].p2, " ");
    } }, directives: [_shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_3__["DividerComponent"]], styles: [".text-gray[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\na[_ngcontent-%COMP%]:not(.nav-link) {\n  color: orange;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background-color: transparent !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\nbody[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  background-color: #d99a26 !important;\n}\n\n.portfolio-modal[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 4.5rem;\n}\n\n.container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n\n.container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-item-caption[_ngcontent-%COMP%] {\n  position: absolute !important;\n  top: 0 !important;\n  left: 0 !important;\n  transition: all 0.2s ease-in-out !important;\n  opacity: 0 !important;\n  background-color: orange !important;\n}\n\n.container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .portfolio-item-caption[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 1 !important;\n}\n\n.container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-width: 4px !important;\n}\n\n.container[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-width: 4px !important;\n}\n\n@media (min-width: 320px) {\n  #featured-pic[_ngcontent-%COMP%] {\n    max-width: 400px !important;\n    max-width: 272 !important;\n  }\n}\n\n@media (min-width: 576px) {\n  #featured-pic[_ngcontent-%COMP%] {\n    max-width: 400px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zYXNzL19nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvZmVhdHVyZWQvZmVhdHVyZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFBO0FDQUY7O0FEa0JBO0VBQ0UsYUFaTztBQ0hUOztBRGtCQTtFQUNFLHNCQUFBO0VBQ0Esd0NBQUE7QUNmRjs7QURrQkE7RUFDRSx3QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLHdCQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0JBQUE7QUNmRjs7QURrQkE7RUFDRSxvQ0FBQTtBQ2ZGOztBQXpCQTtFQUNFLFVBQUE7QUE0QkY7O0FBeEJFO0VBQ0UsaUJBQUE7QUEyQko7O0FBekJFO0VBQ0UsaUJBQUE7QUEyQko7O0FBckJJO0VBQ0UsNkJBQUE7QUF1Qk47O0FBckJNO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0FBdUJSOztBQXRCUTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQXdCVjs7QUFwQk07RUFDRSw0QkFBQTtBQXNCUjs7QUFmSTtFQUNFLDRCQUFBO0FBaUJOOztBQVpBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLHlCQUFBO0VBZUY7QUFDRjs7QUFiQTtFQUNFO0lBQ0UsMkJBQUE7RUFlRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9mZWF0dXJlZC9mZWF0dXJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdsb2JhbCBTdHlsZXNcclxuLnRleHQtZ3JheSB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbiRicmVha3BvaW50LXNtOiA1NzZweDtcclxuJGJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xyXG4kYnJlYWtwb2ludC1sZzogOTkycHg7XHJcblxyXG4kY3VzdG9tOiBvcmFuZ2U7XHJcbiRjdXN0b20tYmc6IGRhcmtlbigkY3VzdG9tLCA4JSk7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHZhbGlkLWNvbG9yOiAjMWFiYzljOyAvLyB+dGhlbWUgcHJpbWFyeVxyXG4kaW52YWxpZC1jb2xvcjogY3JpbXNvbjtcclxuJHdhcm5pbmc6ICNmZmMxMDc7XHJcbiRkYW5nZXI6ICNkYzM1NDU7XHJcbiRsYWJlbDogbGlnaHRncmF5O1xyXG5cclxuLy8gQ1VTVE9NSVpFIFRIRU1FXHJcblxyXG5hOm5vdCgubmF2LWxpbmspIHtcclxuICBjb2xvcjogJGN1c3RvbTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWxpZ2h0OmhvdmVyIHtcclxuICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICRjdXN0b20gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBjb2xvcjogJGN1c3RvbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1jdXN0b20ge1xyXG4gIGNvbG9yOiAkY3VzdG9tICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJvZHkgLmJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRlc2F0dXJhdGUoJGN1c3RvbSwgMzApICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsIi50ZXh0LWdyYXkge1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuYTpub3QoLm5hdi1saW5rKSB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5idG4tb3V0bGluZS1saWdodDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuLnRleHQtY3VzdG9tIHtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG5ib2R5IC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5OWEyNiAhaW1wb3J0YW50O1xufVxuXG4ucG9ydGZvbGlvLW1vZGFsIGJ1dHRvbi5jbG9zZTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5jb250YWluZXIgaDIge1xuICBmb250LXNpemU6IDQuNXJlbTtcbn1cbi5jb250YWluZXIgaDQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5jb250YWluZXIgLmNvbCAucG9ydGZvbGlvLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmNvbCAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1pdGVtLWNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmNvbCAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1pdGVtLWNhcHRpb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmNvbCAucG9ydGZvbGlvLWl0ZW0gaW1nIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLm1vZGFsLWJvZHkgaW1nIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gICNmZWF0dXJlZC1waWMge1xuICAgIG1heC13aWR0aDogNDAwcHggIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDI3MiAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgI2ZlYXR1cmVkLXBpYyB7XG4gICAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-featured',
                templateUrl: './featured.component.html',
                styleUrls: ['./featured.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EQnZ":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/home/portfolio/portfolio-modal/portfolio-modal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PortfolioModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModalComponent", function() { return PortfolioModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/shared */ "+xYV");
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/divider/divider.component */ "JmOq");




const _c0 = ["*"];
class PortfolioModalComponent {
    constructor() {
        // prop -> to <app-divider> Input()
        this.divider = 'divider-dark';
        // <- shared methods
        this.openLink = _utils_shared__WEBPACK_IMPORTED_MODULE_1__["Shared"].openLink;
    }
}
PortfolioModalComponent.ɵfac = function PortfolioModalComponent_Factory(t) { return new (t || PortfolioModalComponent)(); };
PortfolioModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioModalComponent, selectors: [["app-portfolio-modal"]], inputs: { modal: "modal" }, ngContentSelectors: _c0, decls: 18, vars: 7, consts: [["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "portfolio-modal", "modal", "fade", 3, "id"], ["role", "document", 1, "modal-dialog", "modal-xl"], [1, "modal-content"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "text-custom"], ["aria-hidden", "true"], [1, "fas", "fa-times"], [1, "modal-body", "text-center"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8"], [1, "portfolio-modal-title", "text-secondary", "text-uppercase", "mb-0", 3, "id"], [3, "color"], [1, "border", "border-secondary", "img-fluid", "rounded", "mb-5", 3, "src", "alt"], ["data-dismiss", "modal", 1, "btn", "btn-outline-dark"], [1, "fas", "fa-times", "fa-fw"]], template: function PortfolioModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-divider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.modal.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx.modal.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.modal.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.modal.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.divider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/", ctx.modal.src, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx.modal.alt);
    } }, directives: [_shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_2__["DividerComponent"]], styles: [".text-gray[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\na[_ngcontent-%COMP%]:not(.nav-link) {\n  color: orange;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background-color: transparent !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\nbody[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  background-color: #d99a26 !important;\n}\n\n.portfolio-modal[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.modal-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-width: 4px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zYXNzL19nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvcG9ydGZvbGlvL3BvcnRmb2xpby1tb2RhbC9wb3J0Zm9saW8tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFBO0FDQUY7O0FEa0JBO0VBQ0UsYUFaTztBQ0hUOztBRGtCQTtFQUNFLHNCQUFBO0VBQ0Esd0NBQUE7QUNmRjs7QURrQkE7RUFDRSx3QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLHdCQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0JBQUE7QUNmRjs7QURrQkE7RUFDRSxvQ0FBQTtBQ2ZGOztBQXpCQTtFQUNFLFVBQUE7QUE0QkY7O0FBdkJFO0VBQ0UsNEJBQUE7QUEwQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL3BvcnRmb2xpby9wb3J0Zm9saW8tbW9kYWwvcG9ydGZvbGlvLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2xvYmFsIFN0eWxlc1xyXG4udGV4dC1ncmF5IHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuJGJyZWFrcG9pbnQtc206IDU3NnB4O1xyXG4kYnJlYWtwb2ludC1tZDogNzY4cHg7XHJcbiRicmVha3BvaW50LWxnOiA5OTJweDtcclxuXHJcbiRjdXN0b206IG9yYW5nZTtcclxuJGN1c3RvbS1iZzogZGFya2VuKCRjdXN0b20sIDglKTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kdmFsaWQtY29sb3I6ICMxYWJjOWM7IC8vIH50aGVtZSBwcmltYXJ5XHJcbiRpbnZhbGlkLWNvbG9yOiBjcmltc29uO1xyXG4kd2FybmluZzogI2ZmYzEwNztcclxuJGRhbmdlcjogI2RjMzU0NTtcclxuJGxhYmVsOiBsaWdodGdyYXk7XHJcblxyXG4vLyBDVVNUT01JWkUgVEhFTUVcclxuXHJcbmE6bm90KC5uYXYtbGluaykge1xyXG4gIGNvbG9yOiAkY3VzdG9tO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1wcmltYXJ5IHtcclxuICBjb2xvcjogJGN1c3RvbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGNvbG9yOiAkY3VzdG9tICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWN1c3RvbSB7XHJcbiAgY29sb3I6ICRjdXN0b20gIWltcG9ydGFudDtcclxufVxyXG5cclxuYm9keSAuYmctcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGVzYXR1cmF0ZSgkY3VzdG9tLCAzMCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuIiwiLnRleHQtZ3JheSB7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG5hOm5vdCgubmF2LWxpbmspIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJ0bi1vdXRsaW5lLWxpZ2h0OmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jdXN0b20ge1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk5YTI2ICFpbXBvcnRhbnQ7XG59XG5cbi5wb3J0Zm9saW8tbW9kYWwgYnV0dG9uLmNsb3NlOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLm1vZGFsLWJvZHkgaW1nIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-modal',
                templateUrl: './portfolio-modal.component.html',
                styleUrls: ['./portfolio-modal.component.scss'],
            }]
    }], function () { return []; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Ek/o":
/*!*************************************************************!*\
  !*** ./src/app/pages/home/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/shared */ "+xYV");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/store */ "Pii7");
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/divider/divider.component */ "JmOq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio-item/portfolio-item.component */ "aFpy");
/* harmony import */ var _portfolio_modal_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio-modal/portfolio-modal.component */ "EQnZ");








function PortfolioComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-portfolio-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r2);
} }
function PortfolioComponent_app_portfolio_modal_7_p_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_app_portfolio_modal_7_p_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.openLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r3.p1, " ", ctx_r4.portfolioCommon.dontforget, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r3.link1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.host, ". ");
} }
function PortfolioComponent_app_portfolio_modal_7_p_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_app_portfolio_modal_7_p_2_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.openLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_app_portfolio_modal_7_p_2_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.openLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r3.p1, " ", ctx_r5.portfolioCommon.visit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r3.link1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.repo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r5.portfolioCommon.star, " ", ctx_r5.portfolioCommon.dontforget, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r3.link2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.host, ". ");
} }
function PortfolioComponent_app_portfolio_modal_7_p_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_app_portfolio_modal_7_p_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.openLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r3.p1, " ", ctx_r6.portfolioCommon.visit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r3.link1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.repo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.portfolioCommon.star, " ");
} }
function PortfolioComponent_app_portfolio_modal_7_ul_4_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_app_portfolio_modal_7_ul_4_li_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.openLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const algor_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", algor_r19.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", algor_r19.js, " ");
} }
function PortfolioComponent_app_portfolio_modal_7_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PortfolioComponent_app_portfolio_modal_7_ul_4_li_2_Template, 4, 2, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.portfolioCommon.list, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.algorithms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.portfolioCommon.stars, " ");
} }
function PortfolioComponent_app_portfolio_modal_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-portfolio-modal", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortfolioComponent_app_portfolio_modal_7_p_1_Template, 4, 4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PortfolioComponent_app_portfolio_modal_7_p_2_Template, 7, 8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PortfolioComponent_app_portfolio_modal_7_p_3_Template, 5, 5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PortfolioComponent_app_portfolio_modal_7_ul_4_Template, 4, 3, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modal", item_r3)("ngSwitch", item_r3.type.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "D");
} }
class PortfolioComponent {
    constructor() {
        // prop -> to <app-divider> Input()
        this.divider = 'divider-light';
        this.portfolioCommon = _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].getPortfolioCommon;
        this.portfolioItems = _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].getPortfolioItems;
        // <- shared methods
        this.openLink = _utils_shared__WEBPACK_IMPORTED_MODULE_1__["Shared"].openLink;
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 8, vars: 3, consts: [[1, "page-section", "portfolio", "bg-primary"], [1, "container"], [1, "page-section-heading", "text-center", "text-uppercase", "text-white", "mb-0"], [3, "color"], [1, "row"], ["class", "col-md-6 col-lg-4 mb-5", 4, "ngFor", "ngForOf"], [3, "modal", "ngSwitch", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4", "mb-5"], [3, "item"], [3, "modal", "ngSwitch"], ["class", "mb-5 text-justify", 4, "ngSwitchCase"], [1, "mb-5", "text-justify"], ["rel", "nofollow", "target", "_blank", 3, "href", "click"], [4, "ngFor", "ngForOf"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " My Portfolio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PortfolioComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PortfolioComponent_app_portfolio_modal_7_Template, 5, 6, "app-portfolio-modal", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.divider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portfolioItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portfolioItems);
    } }, directives: [_shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_3__["DividerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioItemComponent"], _portfolio_modal_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"]], styles: [".text-gray[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\na[_ngcontent-%COMP%]:not(.nav-link) {\n  color: orange;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background-color: transparent !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\nbody[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  background-color: #d99a26 !important;\n}\n\na[_ngcontent-%COMP%]:not(.nav-link):hover {\n  color: #d68b00;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zYXNzL19nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7QUNBRjs7QURrQkE7RUFDRSxhQVpPO0FDSFQ7O0FEa0JBO0VBQ0Usc0JBQUE7RUFDQSx3Q0FBQTtBQ2ZGOztBRGtCQTtFQUNFLHdCQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0JBQUE7QUNmRjs7QURrQkE7RUFDRSx3QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLG9DQUFBO0FDZkY7O0FBekJBO0VBQ0UsY0RPVTtBQ3FCWjs7QUF6QkE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUE0QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgU3R5bGVzXHJcbi50ZXh0LWdyYXkge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4kYnJlYWtwb2ludC1zbTogNTc2cHg7XHJcbiRicmVha3BvaW50LW1kOiA3NjhweDtcclxuJGJyZWFrcG9pbnQtbGc6IDk5MnB4O1xyXG5cclxuJGN1c3RvbTogb3JhbmdlO1xyXG4kY3VzdG9tLWJnOiBkYXJrZW4oJGN1c3RvbSwgOCUpO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR2YWxpZC1jb2xvcjogIzFhYmM5YzsgLy8gfnRoZW1lIHByaW1hcnlcclxuJGludmFsaWQtY29sb3I6IGNyaW1zb247XHJcbiR3YXJuaW5nOiAjZmZjMTA3O1xyXG4kZGFuZ2VyOiAjZGMzNTQ1O1xyXG4kbGFiZWw6IGxpZ2h0Z3JheTtcclxuXHJcbi8vIENVU1RPTUlaRSBUSEVNRVxyXG5cclxuYTpub3QoLm5hdi1saW5rKSB7XHJcbiAgY29sb3I6ICRjdXN0b207XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1saWdodDpob3ZlciB7XHJcbiAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXByaW1hcnkge1xyXG4gIGNvbG9yOiAkY3VzdG9tICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgY29sb3I6ICRjdXN0b20gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtY3VzdG9tIHtcclxuICBjb2xvcjogJGN1c3RvbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ib2R5IC5iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZXNhdHVyYXRlKCRjdXN0b20sIDMwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCIudGV4dC1ncmF5IHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbmE6bm90KC5uYXYtbGluaykge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWN1c3RvbSB7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuYm9keSAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTlhMjYgIWltcG9ydGFudDtcbn1cblxuYTpub3QoLm5hdi1saW5rKTpob3ZlciB7XG4gIGNvbG9yOiAjZDY4YjAwO1xufVxuXG51bCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/shared */ "+xYV");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store */ "Pii7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class NavbarComponent {
    constructor() {
        this.navbar = _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].getNavbar;
        // <- shared methods
        this.hashIt = _utils_shared__WEBPACK_IMPORTED_MODULE_1__["Shared"].hashIt;
        this.capitalLetter = _utils_shared__WEBPACK_IMPORTED_MODULE_1__["Shared"].capitalLetter;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 23, vars: 13, consts: [["id", "mainNav", 1, "navbar", "navbar-expand-lg", "bg-secondary", "fixed-top"], [1, "container"], [1, "navbar-brand", "js-scroll-trigger", 3, "href"], [3, "src", "alt"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right", "text-uppercase", "font-weight-bold"], [1, "fas", "fa-bars"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "mx-0", "mx-lg-1"], [1, "nav-link", "py-3", "px-0", "px-lg-3", "rounded", "text-uppercase", "js-scroll-trigger", 3, "href"], ["routerLinkActive", "active", 1, "nav-link", "py-3", "px-0", "px-lg-3", "rounded", "text-uppercase", "js-scroll-trigger", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.hashIt(ctx.navbar.home), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.navbar.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.navbar.alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.capitalLetter(ctx.navbar.home), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.navbar.hamburger, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.hashIt(ctx.navbar.page1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.navbar.page1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.hashIt(ctx.navbar.page2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.navbar.page2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.navbar.page3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.navbar.page3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.navbar.page4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.navbar.page4);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".text-gray[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\na[_ngcontent-%COMP%]:not(.nav-link) {\n  color: orange;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background-color: transparent !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\nbody[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  background-color: #d99a26 !important;\n}\n\n#mainNav[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  font-family: \"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-weight: 700;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover {\n  color: #1abc9c;\n  color: orange;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:active, #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  color: #d68b00;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%] {\n  color: #1abc9c;\n  color: orange;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  font-size: 80%;\n  padding: 0.8rem;\n}\n\n@media (min-width: 992px) {\n  #mainNav[_ngcontent-%COMP%] {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    transition: padding-top 0.3s, padding-bottom 0.3s;\n  }\n\n  #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 1.75em;\n    transition: font-size 0.3s;\n  }\n\n  #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n\n  #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link.active[_ngcontent-%COMP%] {\n    color: #fff;\n    color: inherit;\n    background: #1abc9c;\n    background: orange;\n  }\n\n  #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link.active[_ngcontent-%COMP%]:active, #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link.active[_ngcontent-%COMP%]:focus, #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link.active[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    color: inherit;\n    background: #1abc9c;\n    background: orange;\n  }\n\n  #mainNav.navbar-shrink[_ngcontent-%COMP%] {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n\n  #mainNav.navbar-shrink[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.navbar-brand[_ngcontent-%COMP%]:hover {\n  mix-blend-mode: luminosity;\n}\n\n.navbar-brand[_ngcontent-%COMP%]:active {\n  mix-blend-mode: color-burn;\n  opacity: 0.2;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  color: #fff !important;\n  border-color: orange !important;\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:hover {\n  color: black !important;\n  background-color: orange !important;\n  border-color: #996300 !important;\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:focus {\n  outline-width: 0;\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:active {\n  border-radius: 0 !important;\n  transition: border-radius 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zYXNzL19nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtBQ0FGOztBRGtCQTtFQUNFLGFBWk87QUNIVDs7QURrQkE7RUFDRSxzQkFBQTtFQUNBLHdDQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0JBQUE7QUNmRjs7QURrQkE7RUFDRSx3QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLHdCQUFBO0FDZkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QUF6QkE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ05BQUE7RUFHQSxnQkFBQTtBQTBCRjs7QUF4QkE7RUFDRSxXQUFBO0FBMkJGOztBQXpCQTtFQUNFLGdCQUFBO0FBNEJGOztBQTFCQTtFQUNFLFdBQUE7QUE2QkY7O0FBM0JBO0VBQ0UsY0FBQTtFQUNBLGFEWk87QUMwQ1Q7O0FBNUJBOztFQUVFLFdBQUE7RUFDQSxjRGhCVTtBQytDWjs7QUE3QkE7RUFDRSxjQUFBO0VBQ0EsYURyQk87QUNxRFQ7O0FBOUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFpQ0Y7O0FBOUJBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsaURBQUE7RUFpQ0Y7O0VBL0JBO0lBQ0UsaUJBQUE7SUFDQSwwQkFBQTtFQWtDRjs7RUFoQ0E7SUFDRSxhQUFBO0VBbUNGOztFQWpDQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkQ3Q0s7RUNpRlA7O0VBbENBOzs7SUFHRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JEckRLO0VDMEZQOztFQWxDQTtJQUNFLG1CQUFBO0lBQ0Esc0JBQUE7RUFxQ0Y7O0VBbkNBO0lBQ0UsZ0JBQUE7RUFzQ0Y7QUFDRjs7QUFqQ0U7RUFDRSxXQUFBO0FBbUNKOztBQWpDRTtFQUNFLGFEdkVLO0FDMEdUOztBQWpDRTtFQUNFLDBCQUFBO0FBbUNKOztBQWpDRTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQW1DSjs7QUEvQkE7RUFDRSxlQUFBO0FBa0NGOztBQS9CQTtFQUNFLHNCQUFBO0VBQ0EsK0JBQUE7QUFrQ0Y7O0FBakNFO0VBQ0UsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0FBbUNKOztBQWpDRTtFQUNFLGdCQUFBO0FBbUNKOztBQWpDRTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7QUFtQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdsb2JhbCBTdHlsZXNcclxuLnRleHQtZ3JheSB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbiRicmVha3BvaW50LXNtOiA1NzZweDtcclxuJGJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xyXG4kYnJlYWtwb2ludC1sZzogOTkycHg7XHJcblxyXG4kY3VzdG9tOiBvcmFuZ2U7XHJcbiRjdXN0b20tYmc6IGRhcmtlbigkY3VzdG9tLCA4JSk7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHZhbGlkLWNvbG9yOiAjMWFiYzljOyAvLyB+dGhlbWUgcHJpbWFyeVxyXG4kaW52YWxpZC1jb2xvcjogY3JpbXNvbjtcclxuJHdhcm5pbmc6ICNmZmMxMDc7XHJcbiRkYW5nZXI6ICNkYzM1NDU7XHJcbiRsYWJlbDogbGlnaHRncmF5O1xyXG5cclxuLy8gQ1VTVE9NSVpFIFRIRU1FXHJcblxyXG5hOm5vdCgubmF2LWxpbmspIHtcclxuICBjb2xvcjogJGN1c3RvbTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWxpZ2h0OmhvdmVyIHtcclxuICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICRjdXN0b20gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBjb2xvcjogJGN1c3RvbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1jdXN0b20ge1xyXG4gIGNvbG9yOiAkY3VzdG9tICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJvZHkgLmJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRlc2F0dXJhdGUoJGN1c3RvbSwgMzApICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsIi50ZXh0LWdyYXkge1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuYTpub3QoLm5hdi1saW5rKSB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5idG4tb3V0bGluZS1saWdodDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuLnRleHQtY3VzdG9tIHtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG5ib2R5IC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5OWEyNiAhaW1wb3J0YW50O1xufVxuXG4jbWFpbk5hdiB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI21haW5OYXYgLm5hdmJhci1uYXYge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4jbWFpbk5hdiAubmF2YmFyLW5hdiBsaS5uYXYtaXRlbSBhLm5hdi1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNtYWluTmF2IC5uYXZiYXItbmF2IGxpLm5hdi1pdGVtIGEubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzFhYmM5YztcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuI21haW5OYXYgLm5hdmJhci1uYXYgbGkubmF2LWl0ZW0gYS5uYXYtbGluazphY3RpdmUsXG4jbWFpbk5hdiAubmF2YmFyLW5hdiBsaS5uYXYtaXRlbSBhLm5hdi1saW5rOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZDY4YjAwO1xufVxuXG4jbWFpbk5hdiAubmF2YmFyLW5hdiBsaS5uYXYtaXRlbSBhLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMWFiYzljO1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4jbWFpbk5hdiAubmF2YmFyLXRvZ2dsZXIge1xuICBmb250LXNpemU6IDgwJTtcbiAgcGFkZGluZzogMC44cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI21haW5OYXYge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nLXRvcCAwLjNzLCBwYWRkaW5nLWJvdHRvbSAwLjNzO1xuICB9XG5cbiAgI21haW5OYXYgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3M7XG4gIH1cblxuICAjbWFpbk5hdiAubmF2YmFyLW5hdiB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gICNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogIzFhYmM5YztcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gIH1cblxuICAjbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluay5hY3RpdmU6YWN0aXZlLFxuI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbmsuYWN0aXZlOmZvY3VzLFxuI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbmsuYWN0aXZlOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiAjMWFiYzljO1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgfVxuXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgfVxuXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxufVxuLm5hdmJhci1icmFuZCBpbWcge1xuICB3aWR0aDogNTBweDtcbn1cbi5uYXZiYXItYnJhbmQgc3BhbiB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgbWl4LWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7XG59XG4ubmF2YmFyLWJyYW5kOmFjdGl2ZSB7XG4gIG1peC1ibGVuZC1tb2RlOiBjb2xvci1idXJuO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5uYXYtbGluazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmJhci10b2dnbGVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cbi5uYXZiYXItdG9nZ2xlcjpob3ZlciB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjOTk2MzAwICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xuICBvdXRsaW5lLXdpZHRoOiAwO1xufVxuLm5hdmJhci10b2dnbGVyOmFjdGl2ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLXJhZGl1cyAwLjJzO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GBFy":
/*!***************************************************************!*\
  !*** ./src/app/pages/lgpd/privacy-en/privacy-en.component.ts ***!
  \***************************************************************/
/*! exports provided: PrivacyEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyEnComponent", function() { return PrivacyEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/shared */ "+xYV");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/store */ "Pii7");




class PrivacyEnComponent {
    constructor() {
        this.lgpd = _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].getLgpd; // lgpd.en - English
        // <- shared methods
        this.openLink = _utils_shared__WEBPACK_IMPORTED_MODULE_1__["Shared"].openLink;
    }
}
PrivacyEnComponent.ɵfac = function PrivacyEnComponent_Factory(t) { return new (t || PrivacyEnComponent)(); };
PrivacyEnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyEnComponent, selectors: [["app-privacy-en"]], decls: 242, vars: 43, consts: [[1, "text-center", "pb-5"], [1, "mb-4"], [1, "text-left"], [1, "text-primary"], [1, "text-primary", "mr-1"], ["rel", "nofollow", "target", "_blank", 3, "href", "click"], [1, "fab", "fa-linkedin", "mr-1"], [1, "fab", "fa-github", "mr-1"]], template: function PrivacyEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " informs you about its Policy Privacy regarding the treatment and protection of character data personal users and customers that may be collected by the browsing or contracting services through the website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " In this sense, the Holder guarantees compliance with current regulations regarding the protection of personal data, reflected in the Organic Law 3/2018, of December 5, Protection of Personal Data and Guarantee of Digital Rights (LOPD GDD). It also complies with the Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 on the protection of natural persons (RGPD). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " The use of the website implies the acceptance of this Privacy Policy as well as the conditions included in the Legal Notice. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Headline: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Website: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Principles applied in the treatment of data In the treatment of your personal data, the Holder will apply the following principles that are conform to the requirements of the new European regulation for the protection of data: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " The Holder will always require consent for the treatment of your personal data that can be for one or more specific purposes about which you will be informed in advance with absolute transparency. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " The Owner will request only the data strictly necessary for the purpose or purposes requested. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " The data will be kept for the time strictly necessary to the purpose or purposes of the treatment. The Owner will inform you of the term of corresponding conservation according to the purpose. In the case of subscriptions, the Holder will periodically review the lists and eliminate those records inactive for a considerable time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Your data will be treated in such a way that its security, confidentiality and integrity is guaranteed. You should know that the Holder takes the necessary precautions to avoid access not authorized or improper use of the data of its users by third parties. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " To browse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " It is not necessary that you provide any personal data. The cases in which you do provide your personal data are the following ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " By contacting through the contact forms or sending an email electronic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " The Owner informs you that regarding your personal data you have the right to: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Request access to stored data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Request a rectification or cancellation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Request the limitation of your treatment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Object to treatment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Request the portability of your data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " The exercise of these rights is personal and therefore must be exercised directly by the interested party, requesting it directly from the Owner, which means that any customer, subscriber or collaborator who has provided your data at some point you can go to the Owner and ask information about the data you have stored and how you have obtained them, request their rectification, request the portability of their personal data, oppose the treatment, limit its use or request the cancellation of these data in the files of the Holder. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " To exercise your rights of access, rectification, cancellation, portability and opposition you have to send an email to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " specifying the name that you entered in the contact form. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " You have the right to effective judicial protection and to file a claim before the control authority, in this case, the Spanish Agency for Data Protection, if you consider that the processing of personal data that concern you violates the Regulation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " When you connect to the website to send an email to the Owner, you subscribe to their newsletter or make a contract, you are facilitating personal information for which the person responsible is the Owner. This information may include personal data such as your IP address, name and surname, physical address, email address email, phone number, and other information. By facilitating this information, you give your consent for your information to be collected, used, managed and stored by superadmin.es, only as described in the Legal Notice and in this Privacy Policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " The personal data and the purpose of the treatment by the Holder is different according to the information capture system: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " The Holder requests personal data among which may be: Name and surname, email address, telephone number and address of your website in order to respond to your queries. For example, the Owner uses this data to respond to your messages, doubts, complaints, comments or concerns you may have regarding the information included in the website, the services that are provided through the website, the processing of your data personal matters, questions regarding the legal texts included in the website, as well as any other queries you may and may not have is subject to the conditions of the website or the contract. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " There are other purposes for which the Holder processes your personal data: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " To guarantee compliance with the conditions contained in the Notice Legal and applicable law. This may include the development of tools and algorithms that help this website to guarantee the confidentiality of the personal data it collects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "To support and improve the services offered by this website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " To analyze navigation. The Holder collects other data not identification that are obtained through the use of cookies that are downloaded to your computer when you browse the website whose characteristics and purpose are detailed in the Cookies Policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " For a possible analysis of the navigation. The owner reserves the right to collect other non-identifying data obtained through the use of cookies that are downloaded to your computer when you browse the website whose characteristics and purpose are detailed in the Cookies Policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " To manage social networks. the Holder has a presence in networks social. If you become a follower on the Owner's social networks, the treatment of personal data will be governed by this section, as well as per those conditions of use, privacy policies and access regulations that belong to the appropriate social network in each case and that you have previously accepted. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " You can check the privacy policies of the main networks social in these links: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacyEnComponent_Template_a_click_129_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacyEnComponent_Template_a_click_133_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " The Owner will process your personal data in order to administer correctly their presence in the social network, inform you of their activities, products or services, as well as for any other purpose than social media regulations allow. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " In no case will the Owner use the profiles of followers in networks social to send advertising individually. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " To protect your personal data, the Holder takes all precautions reasonable and follow industry best practices to avoid their loss, misuse, improper access, disclosure, alteration or destruction of the same. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " The website is hosted on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacyEnComponent_Template_a_click_147_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, ". The security of your data is guaranteed, since they take all the necessary security measures for this. You can check their policy privacy for more information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " The pages of this website may include embedded content (for example, videos, images, articles, etc.). The embedded content of other websites behave in exactly the same way as if you had visited the other website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " These websites may collect data about you, use cookies, embed an additional third-party tracking code, and monitor your interaction using this code. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " For this website to work properly you need to use cookies, which is information that is stored in your web browser. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " In the Cookies Policy page you can consult all the information regarding the collection policy, the purpose and the treatment of cookies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "The legal basis for the processing of your data is: consent.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " To contact the Owner, subscribe to a newsletter or carry out comments on this website you have to accept this Policy Privacy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "The categories of personal data that the Owner deals with are:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Identification data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " The personal data that you provide to the Holder will be kept until request its deletion. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " is a web analytics service provided by Google, Inc., a company of Delaware whose main office is at 1600 Amphitheater Parkway, Mountain View (California), CA 94043, United States (\u201CGoogle\u201D). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " You will find more information in: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacyEnComponent_Template_a_click_195_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " Google Analytics uses \"cookies\", which are text files located on your computer, to help the Holder to analyze the use made by the website users. The information generated by the cookie about the use of the website (including your IP address) will be directly transmitted and archived by Google on servers in the United States. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " You can also see a list of the types of cookies used by Google and its collaborators and all the information regarding their use of cookies advertising. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "The website uses the following third-party analysis services:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " The Owner uses the information obtained to obtain statistical data, analyze trends, administer the site, study browsing patterns and to collect demographic information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " You undertake that the data provided to the Holder are correct, complete, accurate and current, as well as to maintain them properly updated. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " As a user of the website you are solely responsible for the veracity and correction of the data you send to the site exonerating the Holder of any responsibility in this regard. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " As a user of the website, you declare that you have been informed of the conditions on the protection of personal data, you accept and consent to the treatment thereof by the Holder in the form and for the purposes indicated in this Privacy Policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " To exercise your rights of access, rectification, cancellation, portability and opposition you have to send an email to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " with the request, specifying the name you entered in the contact form. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " The exercise of your rights does not include any data that the Holder is obliged to keep for administrative, legal or security purposes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " The Owner reserves the right to modify this Policy of Privacy to adapt it to legislative or jurisprudential developments, as well as to industry practices. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " These policies will be in effect until they are modified by others duly published. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.titular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.website);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.titular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.website);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.lgpd.en.principle1, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.lgpd.en.principle2, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.lgpd.en.principle3, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.lgpd.en.principle4, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.website);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.lgpd.en.tratamiento, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.lgpd.en.socialLink1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lgpd.en.socialTitle1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.lgpd.en.socialLink2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lgpd.en.socialTitle2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.lgpd.en.hostingLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lgpd.en.hostingTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.thirdPartyTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.lgpd.en.thirdPartyLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.thirdPartyLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" When browsing ", ctx.lgpd.en.website, " non-identifying data can be collected, which may include, IP address, geolocation, a record of how use the services and sites, browsing habits and other data that do not can be used to identify you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lgpd.en.thirdPartyTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.en.heading18);
    } }, styles: [".text-gray[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\na[_ngcontent-%COMP%]:not(.nav-link) {\n  color: orange;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background-color: transparent !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\nbody[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  background-color: #d99a26 !important;\n}\n\nb[_ngcontent-%COMP%] {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zYXNzL19nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xncGQvcHJpdmFjeS1lbi9wcml2YWN5LWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtBQ0FGOztBRGtCQTtFQUNFLGFBWk87QUNIVDs7QURrQkE7RUFDRSxzQkFBQTtFQUNBLHdDQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0JBQUE7QUNmRjs7QURrQkE7RUFDRSx3QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLHdCQUFBO0FDZkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QUF6QkE7RUFDRSxhRE1PO0FDc0JUIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGdwZC9wcml2YWN5LWVuL3ByaXZhY3ktZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgU3R5bGVzXHJcbi50ZXh0LWdyYXkge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4kYnJlYWtwb2ludC1zbTogNTc2cHg7XHJcbiRicmVha3BvaW50LW1kOiA3NjhweDtcclxuJGJyZWFrcG9pbnQtbGc6IDk5MnB4O1xyXG5cclxuJGN1c3RvbTogb3JhbmdlO1xyXG4kY3VzdG9tLWJnOiBkYXJrZW4oJGN1c3RvbSwgOCUpO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR2YWxpZC1jb2xvcjogIzFhYmM5YzsgLy8gfnRoZW1lIHByaW1hcnlcclxuJGludmFsaWQtY29sb3I6IGNyaW1zb247XHJcbiR3YXJuaW5nOiAjZmZjMTA3O1xyXG4kZGFuZ2VyOiAjZGMzNTQ1O1xyXG4kbGFiZWw6IGxpZ2h0Z3JheTtcclxuXHJcbi8vIENVU1RPTUlaRSBUSEVNRVxyXG5cclxuYTpub3QoLm5hdi1saW5rKSB7XHJcbiAgY29sb3I6ICRjdXN0b207XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1saWdodDpob3ZlciB7XHJcbiAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXByaW1hcnkge1xyXG4gIGNvbG9yOiAkY3VzdG9tICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgY29sb3I6ICRjdXN0b20gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtY3VzdG9tIHtcclxuICBjb2xvcjogJGN1c3RvbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ib2R5IC5iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZXNhdHVyYXRlKCRjdXN0b20sIDMwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCIudGV4dC1ncmF5IHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbmE6bm90KC5uYXYtbGluaykge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWN1c3RvbSB7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuYm9keSAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTlhMjYgIWltcG9ydGFudDtcbn1cblxuYiB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyEnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy-en',
                templateUrl: './privacy-en.component.html',
                styleUrls: ['./privacy-en.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ApiService {
    constructor(http) {
        this.http = http;
        this.api = 'https://jsonplaceholder.typicode.com'; // Open Database
        this.endpont = '/posts';
    }
    // POST
    postOne(body) {
        return this.http.post(this.api + this.endpont, // open API REST
        body);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "JmOq":
/*!*****************************************************!*\
  !*** ./src/app/shared/divider/divider.component.ts ***!
  \*****************************************************/
/*! exports provided: DividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividerComponent", function() { return DividerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DividerComponent {
    constructor() { }
}
DividerComponent.ɵfac = function DividerComponent_Factory(t) { return new (t || DividerComponent)(); };
DividerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DividerComponent, selectors: [["app-divider"]], inputs: { color: "color" }, decls: 5, vars: 2, consts: [[1, "divider-custom"], [1, "divider-custom-line"], [1, "divider-custom-icon"], [1, "fas", "fa-star"]], template: function DividerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.color);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-divider',
                templateUrl: './divider.component.html',
            }]
    }], function () { return []; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PZ6X":
/*!**********************************************!*\
  !*** ./src/app/pages/lgpd/lgpd.component.ts ***!
  \**********************************************/
/*! exports provided: LgpdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LgpdComponent", function() { return LgpdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/shared */ "+xYV");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store */ "Pii7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/scroll/scroll.component */ "/0IB");
/* harmony import */ var _privacy_en_privacy_en_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy-en/privacy-en.component */ "GBFy");
/* harmony import */ var _privacy_es_privacy_es_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./privacy-es/privacy-es.component */ "hxR0");









function LgpdComponent_app_privacy_en_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-privacy-en");
} }
function LgpdComponent_app_privacy_es_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-privacy-es");
} }
function LgpdComponent_app_privacy_en_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-privacy-en");
} }
class LgpdComponent {
    constructor(router) {
        this.router = router;
        this.language = 0; // -> *ngSwitchDefault
        this.lgpd = _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].getLgpd;
    }
    // hooks
    ngOnInit() {
        _utils_shared__WEBPACK_IMPORTED_MODULE_1__["Shared"].pageToTop(); // <- shared
    }
    // mehtods
    reroute() {
        _utils_shared__WEBPACK_IMPORTED_MODULE_1__["Shared"].reroute(this.router, this.lgpd.close); // <- shared
    }
    switch(language) {
        this.language = language;
    }
}
LgpdComponent.ɵfac = function LgpdComponent_Factory(t) { return new (t || LgpdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LgpdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LgpdComponent, selectors: [["app-lgpd"]], decls: 21, vars: 4, consts: [[1, "mx-auto", "pt-5"], [1, "nav", "nav-tabs"], ["id", "cross", 1, "nav-item"], [1, "nav-link", "text-custom", "border", "border-warning", 3, "routerLink"], ["aria-hidden", "true"], [1, "fas", "fa-times"], [1, "nav-item"], ["rel", "nofollow", "href", "javascript:void(0)", 1, "nav-link", "text-dark", 3, "click"], [1, "d-flex", "flex-column", "border", "border-warning", "text-justify", "mx-auto", "p-5", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "d-flex", "flex-column", "py-5"], [1, "align-self-center", "btn", "btn-outline-dark", 3, "click"], [1, "fas", "fa-times", "fa-fw"]], template: function LgpdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LgpdComponent_Template_a_click_7_listener() { return ctx.switch(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "English ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LgpdComponent_Template_a_click_10_listener() { return ctx.switch(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Spanish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "main", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LgpdComponent_app_privacy_en_13_Template, 1, 0, "app-privacy-en", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LgpdComponent_app_privacy_es_14_Template, 1, 0, "app-privacy-es", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LgpdComponent_app_privacy_en_15_Template, 1, 0, "app-privacy-en", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LgpdComponent_Template_button_click_17_listener() { return ctx.reroute(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-scroll");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.lgpd.close);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchDefault"], _shared_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_5__["ScrollComponent"], _privacy_en_privacy_en_component__WEBPACK_IMPORTED_MODULE_6__["PrivacyEnComponent"], _privacy_es_privacy_es_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyEsComponent"]], styles: [".text-gray[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\na[_ngcontent-%COMP%]:not(.nav-link) {\n  color: orange;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background-color: transparent !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\nbody[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  background-color: #d99a26 !important;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #d68b00 !important;\n}\n\nnav[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  max-width: 768px;\n}\n\nmain[_ngcontent-%COMP%] {\n  max-width: 768px;\n}\n\nmain[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\nmain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\n@media (min-width: 992px) {\n  nav[_ngcontent-%COMP%] {\n    margin-top: 5rem !important;\n  }\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  border-bottom-color: #fff !important;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n  border-bottom-color: #fff !important;\n  box-shadow: 0px -3px 6px -2px gray;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   #cross[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:hover {\n  border-bottom-color: #ffc107 !important;\n  background-color: #ffe7a0;\n  transition: 0.2s background-color;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   #cross[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   #cross[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]:active {\n  background-color: transparent;\n  transition: 0.2s background-color;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zYXNzL19nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xncGQvbGdwZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7QUNBRjs7QURrQkE7RUFDRSxhQVpPO0FDSFQ7O0FEa0JBO0VBQ0Usc0JBQUE7RUFDQSx3Q0FBQTtBQ2ZGOztBRGtCQTtFQUNFLHdCQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0JBQUE7QUNmRjs7QURrQkE7RUFDRSx3QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLG9DQUFBO0FDZkY7O0FBdkJFO0VBQ0UseUJBQUE7QUEwQko7O0FBdEJBO0VBQ0UsZ0JBQUE7RUFDQSxnQkRMYztBQzhCaEI7O0FBdEJBO0VBQ0UsZ0JEVGM7QUNrQ2hCOztBQXZCRTtFQUNFLGlCQUFBO0FBeUJKOztBQXZCRTs7RUFFRSxrQkFBQTtBQXlCSjs7QUFyQkE7RUFDRTtJQUNFLDJCQUFBO0VBd0JGO0FBQ0Y7O0FBcEJBO0VBQ0UsbUJBQUE7QUFzQkY7O0FBbkJBO0VBQ0Usb0NBQUE7QUFzQkY7O0FBbkJBO0VBQ0Usb0NBQUE7RUFDQSxrQ0FBQTtBQXNCRjs7QUFuQkE7RUFDRSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUFzQkY7O0FBbkJBO0VBQ0UsZ0JBQUE7QUFzQkY7O0FBbkJBO0VBQ0UsNkJBQUE7RUFDQSxpQ0FBQTtBQXNCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xncGQvbGdwZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdsb2JhbCBTdHlsZXNcclxuLnRleHQtZ3JheSB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbiRicmVha3BvaW50LXNtOiA1NzZweDtcclxuJGJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xyXG4kYnJlYWtwb2ludC1sZzogOTkycHg7XHJcblxyXG4kY3VzdG9tOiBvcmFuZ2U7XHJcbiRjdXN0b20tYmc6IGRhcmtlbigkY3VzdG9tLCA4JSk7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHZhbGlkLWNvbG9yOiAjMWFiYzljOyAvLyB+dGhlbWUgcHJpbWFyeVxyXG4kaW52YWxpZC1jb2xvcjogY3JpbXNvbjtcclxuJHdhcm5pbmc6ICNmZmMxMDc7XHJcbiRkYW5nZXI6ICNkYzM1NDU7XHJcbiRsYWJlbDogbGlnaHRncmF5O1xyXG5cclxuLy8gQ1VTVE9NSVpFIFRIRU1FXHJcblxyXG5hOm5vdCgubmF2LWxpbmspIHtcclxuICBjb2xvcjogJGN1c3RvbTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWxpZ2h0OmhvdmVyIHtcclxuICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICRjdXN0b20gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBjb2xvcjogJGN1c3RvbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1jdXN0b20ge1xyXG4gIGNvbG9yOiAkY3VzdG9tICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJvZHkgLmJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRlc2F0dXJhdGUoJGN1c3RvbSwgMzApICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsIi50ZXh0LWdyYXkge1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuYTpub3QoLm5hdi1saW5rKSB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5idG4tb3V0bGluZS1saWdodDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuLnRleHQtY3VzdG9tIHtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG5ib2R5IC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5OWEyNiAhaW1wb3J0YW50O1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNkNjhiMDAgIWltcG9ydGFudDtcbn1cblxubmF2IHtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbiAgbWF4LXdpZHRoOiA3NjhweDtcbn1cblxubWFpbiB7XG4gIG1heC13aWR0aDogNzY4cHg7XG59XG5tYWluIGgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5tYWluIHAsXG5tYWluIHVsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgbmF2IHtcbiAgICBtYXJnaW4tdG9wOiA1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5uYXYtdGFicyB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5uYXYtdGFicyAubmF2LWxpbms6aG92ZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtdGFicyAubmF2LWxpbms6Zm9jdXMge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAtM3B4IDZweCAtMnB4IGdyYXk7XG59XG5cbi5uYXYtdGFicyAjY3Jvc3MgYS5uYXYtbGluazpob3ZlciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTdhMDtcbiAgdHJhbnNpdGlvbjogMC4ycyBiYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG4ubmF2LXRhYnMgI2Nyb3NzIGEubmF2LWxpbms6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubmF2LXRhYnMgI2Nyb3NzIGEubmF2LWxpbms6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuMnMgYmFja2dyb3VuZC1jb2xvcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LgpdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lgpd',
                templateUrl: './lgpd.component.html',
                styleUrls: ['./lgpd.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Pii7":
/*!********************************!*\
  !*** ./src/app/store/store.ts ***!
  \********************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* Single Source of Truth */
let store = {
    // --> props
    // navbar
    navbar: {
        home: 'home',
        src: 'assets/img/portfolio/codhex-logo.png',
        alt: 'codhex logo',
        hamburger: 'menu',
        page1: 'new',
        page2: 'portfolio',
        page3: 'about',
        page4: 'contact',
    },
    // follow
    follow: {
        icon1: 'fab fa-fw fa-linkedin-in',
        icon2: 'fab fa-github',
        link1: 'https://www.linkedin.com/in/isaac-bejarano',
        link2: 'https://github.com/isaacBejarano',
    },
    // footer
    footer: {
        tool: 'Angular',
        theme: 'Start Bootstrap Theme',
        link1: 'https://angular.io',
        link2: 'https://startbootstrap.com/previews/freelancer/',
        license: 'MIT',
        copyright: 'Isaac Bejarano 2020',
    },
    // scroll
    scroll: {
        icon: 'fa fa-chevron-up',
        show: false,
    },
    // masterhead
    masterhead: {
        src: './assets/img/portfolio/Isaac-bejarano-s4.jpg',
        alt: 'Isaac Bejarano photo',
        name: 'Isaac Bejarano',
        title: 'Web Developer - Full Stack - MEAN - LAMP',
    },
    // featured ~new
    new: 'ES5 library to make HTTP requests',
    // portfolio
    portfolio: {
        // common
        common: {
            star: 'and give it a "star".',
            stars: 'and give them a "star".',
            list: 'Visit these repositories:',
            visit: 'Visit this repository at',
            visits: 'Visit these repositories at',
            dontforget: `Don't forget to see it live at`,
        },
        items: [
            // modal 1
            {
                title: 'Wordpress blog',
                target: '#portfolioModal1',
                id: 'portfolioModal1',
                label: 'portfolioModal1Lbabel',
                src: 'portfolio/LFA.jpg',
                alt: 'Wordpress Candidature project',
                p1: `Worked on the Wordpress blog of candiate for Fútbol Club Barcelona's presidency.`,
                link1: 'https://lluisfernandezala.cat/',
                type: 'A',
                host: 'https://lluisfernandezala.cat',
            },
            // modal 2
            {
                title: 'Responsive Bootstrap',
                target: '#portfolioModal2',
                id: 'portfolioModal2',
                label: 'portfolioModal2Lbabel',
                src: 'portfolio/papiro.png',
                alt: 'Responsive Bootstrap project',
                p1: 'Responsive mobile-first web app made with Bootstrap and LESS.',
                link1: 'https://github.com/isaacBejarano/isaacbejarano.github.io',
                link2: 'https://isaacbejarano.github.io/',
                type: 'B',
                repo: 'Github',
                host: 'Github Pages',
            },
            // modal 3
            {
                title: 'Typescript',
                target: '#portfolioModal3',
                id: 'portfolioModal3',
                label: 'portfolioModal3Lbabel',
                src: 'portfolio/rockets.png',
                alt: 'Typescript project',
                p1: 'UI made with Typescript to create rockets and thrusters.\
        Object Oriented Programmmig (OOP).',
                link1: 'https://github.com/isaacBejarano/ts-rockets',
                type: 'C',
                repo: 'Github',
            },
            // modal 4
            {
                title: 'JQuery + AJAX',
                target: '#portfolioModal4',
                id: 'portfolioModal4',
                label: 'portfolioModal4Lbabel',
                src: 'portfolio/joker.png',
                alt: 'AJAX + JQuery project',
                p1: 'Web app using AJAX to fetch Chuck Norris jokes from open REST API. \
        Made with JQuery.',
                link1: 'https://github.com/isaacBejarano/joker',
                type: 'C',
                repo: 'Github',
            },
            // modal 5
            {
                title: 'Javascript',
                target: '#portfolioModal5',
                id: 'portfolioModal5',
                label: 'portfolioModal5Lbabel',
                src: 'portfolio/beers.png',
                alt: 'Javascript project',
                p1: 'UI for rating. It uses SASS and scalable algorithms to persist\
        ":hover" and ":active" pseudo-classes.',
                link1: 'https://github.com/isaacBejarano/rating-beers',
                link2: 'https://codepen.io/eRoboto/pen/bGpKwgM',
                type: 'B',
                repo: 'Github',
                host: 'Codepen',
            },
            // modal 6
            {
                title: 'Leaflet + AJAX',
                target: '#portfolioModal6',
                id: 'portfolioModal6',
                label: 'portfolioModal6Lbabel',
                src: 'portfolio/restopolitan.png',
                alt: 'Leaflet project',
                p1: 'UI using AJAX to fetch and filter API REST response in Leaflet maps.\
        Made with JQuery.',
                link1: 'https://github.com/isaacBejarano/leaflet_filtres',
                type: 'C',
                repo: 'Github',
            },
            // modal 7
            {
                title: 'JavaScript Algorithms',
                target: '#portfolioModal7',
                id: 'portfolioModal7',
                label: 'portfolioModal7Lbabel',
                src: 'portfolio/algorithms.png',
                alt: 'JavaScript Algorithms project',
                algorithms: [
                    {
                        link: 'https://github.com/isaacBejarano/price-down-breaker',
                        js: 'Down Breaker',
                    },
                    {
                        link: 'https://github.com/isaacBejarano/binary-search',
                        js: 'Binary Search',
                    },
                    {
                        link: 'https://github.com/isaacBejarano/quicksort',
                        js: 'Quick Sort',
                    },
                    {
                        link: 'https://github.com/isaacBejarano/is-int',
                        js: 'Is Int',
                    },
                    {
                        link: 'https://github.com/isaacBejarano/string-mirror',
                        js: 'String Mirror',
                    },
                    {
                        link: 'https://github.com/isaacBejarano/fibonacci-sequencer',
                        js: 'Fibonacci Sequencer',
                    },
                ],
                type: 'D',
            },
            // modal 8
            {
                title: 'SASS',
                target: '#portfolioModal8',
                id: 'portfolioModal8',
                label: 'portfolioModal8Lbabel',
                src: 'portfolio/stripes.png',
                alt: 'SASS project',
                p1: 'Cool SASS hover effect using CSS animation rules and pseudo-classes.',
                link1: 'https://github.com/isaacBejarano/sass-stripes',
                link2: 'https://codepen.io/eRoboto/pen/eYZZerg',
                type: 'B',
                repo: 'Github',
                host: 'Codepen',
            },
            // modal 9
            {
                title: 'Wordpress Page',
                target: '#portfolioModal9',
                id: 'portfolioModal9',
                label: 'portfolioModal9Lbabel',
                src: 'portfolio/amatller.jpg',
                alt: 'casa museu amatller page',
                p1: 'Worked on Casa Museu Amatller webpage made with Wordpress.',
                link1: 'https://amatller.org/',
                host: 'Casa Museu Amatller',
                type: 'A',
            },
            // modal 10 ~new
            {
                title: 'Culex',
                target: '#portfolioModal10',
                id: 'portfolioModal10',
                label: 'portfolioModal10Lbabel',
                src: 'portfolio/culex.png',
                alt: 'culex github repo',
                p1: 'Culex.js is an easy-to-use and lightweight ES5 library \
      to fetch JSON data from RESTful APIs.',
                p2: 'Disclaimer: the library is still in beta phase.',
                link1: 'https://github.com/isaacBejarano/culex.js',
                type: 'C',
                repo: 'Github',
            },
        ],
    },
    // about
    about: {
        title: 'about me',
        hello: `Hi, I'm Isaac.`,
        p1a: 'I used to work in audiovisual postproduction and\
    I was pretty dexterous at image manipulation with',
        p1b: 'Photoshop',
        p1c: 'but I felt it would be useful to boost my designer skills.\
    Taking into account that the majority of media design we consume today is on screen,\
    I decided to join the neverending exciting web developement world.',
        p2a: 'I easily fell in love with HTML and CSS, and programming quickly got my attention.\
    I suddenly remembered those days when',
        p2b: 'I was 12 year old and I was coding Pascal',
        p2c: 'extracurricularwise, making humble text editors in Delphi.\
    Thus I reconnected to my inner-coder and my need of deepening in JavaScript and\
    Object Oriented Programming quickly beacame addicitve.',
        p3a: 'Having gained specialized training after completing the Frontend bootcamp at',
        p3link: 'https://cibernarium.barcelonactiva.cat/es/ficha-actividad?activityId=1002836',
        p3linkText: 'IT Academy Barcelona',
        p3b: `I've proudly become a pretty educated web developer today.\
    And although I excell in Frontend, which blends my cerative background\
    with my innate analytic mind, I also feel comfortable in both`,
        stak1: 'MEAN',
        stak2: 'LAMP',
        p3c: 'Full Stack.',
        and: 'and',
        bye: 'May the code be with you! ;)',
    },
    // contact
    contact: {
        link: '/contact/lgpd',
        text: 'Privacy Policy',
        warn1: 'Please read and accept the',
        warn2: 'of this site.',
        required1: 'Please enter your name',
        required2: 'Please enter your email adress',
        required3: 'Please leave a message',
        required4: 'Please tick the checkbox above',
        match1: 'Your name must have more than 1 letter',
        match2: 'Your email must comply with the structure "account@some-email.domain"',
        match3: 'Your message must have mimimum 10 letters',
    },
    // lgpd
    lgpd: {
        close: '/contact',
        es: {
            title: 'Política de Privacidad',
            // declaración
            heading1: 'Declaración',
            titular: 'Isaac Bejarano',
            website: 'isaacbejarano.site',
            // identidad del responsable
            heading2: 'Identidad del responsable',
            email: 'isaacbejaranopro@gmail.com',
            // principios tratamiento de datos
            heading3: 'Principios aplicados en el tratamiento de datos',
            principle1: 'Principio de licitud, lealtad y transparencia',
            principle2: 'Principio de minimización de datos',
            principle3: 'Principio de limitación del plazo de conservación',
            principle4: 'Principio de integridad y confidencialidad',
            // obtención de datos
            heading4: 'Obtención de datos personales',
            // tus derechos
            heading5: 'Tus derechos',
            // finalidad
            heading6: 'Finalidad del tratamiento de datos personales',
            tratamiento: 'Formularios de contacto',
            socialLink1: 'https://es.linkedin.com/legal/privacy-policy',
            socialLink2: 'https://docs.github.com/es/free-pro-team@latest/github/site-policy/github-privacy-statement',
            socialTitle1: 'Linked In',
            socialTitle2: 'Github',
            // Seguridad de los datos personales
            heading7: 'Seguridad de los datos personales',
            hostingLink: 'https://www.cdmon.com/es/',
            hostingTitle: 'cdmon',
            // contenido
            heading8: 'Contenido de otros sitios web',
            // cookies
            heading9: 'Política de Cookies',
            // legitimación
            heading10: 'Legitimación para el tratamiento de datos',
            // categoria datos
            heading11: 'Categorías de datos personales',
            // conservación datos
            heading12: 'Conservación de datos personales',
            // destinatarios datos
            heading13: 'Destinatarios de datos personales',
            thirdPartyLink: 'https://analytics.google.com',
            thirdPartyTitle: 'Google Analytics',
            // navegación web
            heading14: 'Navegación Web',
            // veracidad de datos
            heading15: 'Exactitud y veracidad de los datos personales',
            // aceptación
            heading16: 'Aceptación y consentimiento',
            // revocabilidad
            heading17: 'Revocabilidad',
            // cambios en la política
            heading18: 'Cambios en la Política de Privacidad',
        },
        en: {
            title: 'Privacy Policy',
            // declaración
            heading1: 'Statement',
            titular: 'Isaac Bejarano',
            website: 'isaacbejarano.site',
            // identidad del responsable
            heading2: 'Responsible identity',
            email: 'isaacbejaranopro@gmail.com',
            // principios tratamiento de datos
            heading3: 'Principles applied in data processing',
            principle1: 'Principle of legality, loyalty and transparency',
            principle2: 'Data minimization principle',
            principle3: 'Principle of limitation of the conservation period',
            principle4: 'Principle of integrity and confidentiality',
            // obtención de datos
            heading4: 'Obtaining personal data',
            // tus derechos
            heading5: 'Your rights',
            // finalidad
            heading6: 'Purpose of the processing of personal data',
            tratamiento: 'Contact forms',
            socialLink1: 'https://es.linkedin.com/legal/privacy-policy',
            socialLink2: 'https://docs.github.com/es/free-pro-team@latest/github/site-policy/github-privacy-statement',
            socialTitle1: 'Linked In',
            socialTitle2: 'Github',
            // Seguridad de los datos personales
            heading7: 'Personal data security',
            hostingLink: 'https://www.cdmon.com/es/',
            hostingTitle: 'cdmon',
            // contenido
            heading8: 'Content from other websites',
            // cookies
            heading9: 'Cookies policy',
            // legitimación
            heading10: 'Legitimation for data processing',
            // categoria datos
            heading11: 'Categories of personal data',
            // conservación datos
            heading12: 'Preservation of personal data',
            // destinatarios datos
            heading13: 'Recipients of personal data',
            thirdPartyLink: 'https://analytics.google.com',
            thirdPartyTitle: 'Google Analytics',
            // navegación web
            heading14: 'Web navegation',
            // veracidad de datos
            heading15: 'Accuracy and veracity of personal data',
            // aceptación
            heading16: 'Acceptance and consent',
            // revocabilidad
            heading17: 'Revocability',
            // cambios en la política
            heading18: 'Changes to the Privacy Policy',
        },
    },
    // getters
    get getNavbar() {
        return this.navbar;
    },
    get getFollow() {
        return this.follow;
    },
    get getFooter() {
        return this.footer;
    },
    get getScroll() {
        return this.scroll;
    },
    get getMasterhead() {
        return this.masterhead;
    },
    get getNew() {
        return this.new;
    },
    get getPortfolio() {
        return this.portfolio;
    },
    get getPortfolioItems() {
        return this.portfolio.items;
    },
    get getPortfolioCommon() {
        return this.portfolio.common;
    },
    get getAbout() {
        return this.about;
    },
    get getContact() {
        return this.contact;
    },
    get getLgpd() {
        return this.lgpd;
    },
    // setters
    set setScrollShow(x) {
        this.scroll.show = x;
    },
};


/***/ }),

/***/ "Sc3h":
/*!***************************************************!*\
  !*** ./src/app/shared/follow/follow.component.ts ***!
  \***************************************************/
/*! exports provided: FollowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowComponent", function() { return FollowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/shared */ "+xYV");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store */ "Pii7");




class FollowComponent {
    constructor() {
        this.follow = _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].getFollow;
        // <- shared methods
        this.openLink = _utils_shared__WEBPACK_IMPORTED_MODULE_1__["Shared"].openLink;
    }
}
FollowComponent.ɵfac = function FollowComponent_Factory(t) { return new (t || FollowComponent)(); };
FollowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FollowComponent, selectors: [["app-follow"]], decls: 7, vars: 6, consts: [[1, "p-5"], [1, "text-uppercase", "mb-4"], ["rel", "nofollow", "target", "_blank", 1, "btn", "btn-outline-light", "btn-social", "mx-1", 3, "href", "click"]], template: function FollowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "follow me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FollowComponent_Template_a_click_3_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FollowComponent_Template_a_click_5_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.follow.link1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.follow.icon1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.follow.link2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.follow.icon2);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FollowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-follow',
                templateUrl: './follow.component.html',
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _shared_follow_follow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/follow/follow.component */ "Sc3h");
/* harmony import */ var _shared_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/scroll/scroll.component */ "/0IB");







class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["id", "transcluded-follow"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-follow", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-scroll");
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _shared_follow_follow_component__WEBPACK_IMPORTED_MODULE_4__["FollowComponent"], _shared_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_5__["ScrollComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XEn3":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/shared */ "+xYV");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/store */ "Pii7");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/divider/divider.component */ "JmOq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










function ContactComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.contact.required1, " ");
} }
function ContactComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.contact.match1, " ");
} }
function ContactComponent_small_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.contact.required2, " ");
} }
function ContactComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.contact.match2, " ");
} }
function ContactComponent_small_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.contact.required3, " ");
} }
function ContactComponent_small_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.contact.match3, " ");
} }
function ContactComponent_small_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.contact.required4, " ");
} }
const _c0 = function (a0) { return [a0]; };
class ContactComponent {
    constructor(
    // dependency injection
    fb, apiService) {
        this.fb = fb;
        this.apiService = apiService;
        this.divider = 'divider-dark'; // prop -> to <app-divider> Input()
        this.submitable = false;
        this.disabled = false;
        this.contact = _store_store__WEBPACK_IMPORTED_MODULE_3__["store"].getContact;
    }
    // hooks
    ngOnInit() {
        _utils_shared__WEBPACK_IMPORTED_MODULE_2__["Shared"].pageToTop(); // <- shared
        _store_store__WEBPACK_IMPORTED_MODULE_3__["store"].setScrollShow = false; // scroller -> state false
        this.createForm(); // reactive forms
    }
    ngDoCheck() {
        // btn submit
        this.submitable = this.form.valid ? true : false;
        // scroller JQuery Easing update
        const scroller = document.getElementById('scroller');
        // dissable scroller view
        if (!_store_store__WEBPACK_IMPORTED_MODULE_3__["store"].scroll.show) {
            scroller.classList.add('d-none'); // state false
        }
    }
    // methods
    createForm() {
        const regex = '[a-z0-9]+([._-]?[a-z0-9]+)*' +
            '@' +
            '[a-z0-9]+([._-]?[a-z0-9]+)*.[a-z]{2,4}';
        this.form = this.fb.group({
            // [def, sync, async]
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(regex)]],
            msg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]],
            lgpd: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue],
        });
    }
    send() {
        // onsubmit
        if (this.form.valid) {
            console.log('[disable.console.log in production] -> SUBMITING ...', this.form.value);
            // POST
            this.apiService
                .postOne(this.form.value)
                .subscribe((user) => console.log('[disable.console.log in production] -> POSTED: ', user));
            // this.apiService.postOne(this.form.value).subscribe((user) => user);
            // clean form
            this.form.reset();
            this.disabled = false; // .btn-danger
        }
        else {
            this.disabled = true; // .btn-danger
            return Object.values(this.form.controls).forEach((control) => control.markAsTouched());
        }
    }
    validateOnTouched(ref) {
        let errorType = 0; // counter
        const alias = ref.getAttribute('formControlName');
        // condition repertoire
        const controlRequired = this.form.get(alias).invalid && this.form.get(alias).touched;
        const controlMinLength = this.form.get(alias).hasError('minlength') &&
            this.form.get(alias).touched;
        const controlPattern = this.form.get(alias).hasError('pattern') && this.form.get(alias).touched;
        // const min: boolean = ... // OTHER. etc.
        // NAME
        if (alias === 'name') {
            if (controlRequired) {
                errorType += 1; // errorType 1
            }
            if (controlMinLength) {
                errorType += 1; // errorType 2
            }
        }
        // EMAIL
        if (alias === 'email') {
            if (controlRequired) {
                errorType += 1; // errorType 1
            }
            if (controlPattern) {
                errorType += 1; // errorType 2
            }
        }
        // MSG
        if (alias === 'msg') {
            if (controlRequired) {
                errorType += 1; // errorType 1
            }
            if (controlMinLength) {
                errorType += 1; // errorType 2
            }
        }
        // lGPD
        if (alias === 'lgpd') {
            if (controlRequired) {
                errorType += 1; // errorType 1
            }
        }
        // OTHER
        //  if (alias === 'number') { ... } etc.
        return errorType;
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 46, vars: 28, consts: [["id", "contact", 1, "page-section", "mt-5"], [1, "container"], [1, "page-section-heading", "text-center", "text-uppercase", "text-secondary", "mb-0"], [3, "color"], [1, "row"], [1, "col-lg-8", "mx-auto"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "control-group"], [1, "form-group", "floating-label-form-group", "controls", "mb-0", "pb-2"], ["type", "text", "placeholder", "Name", "formControlName", "name", 1, "form-control"], ["ref1", ""], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "Email Address", "formControlName", "email", 1, "form-control", "border", "border-white"], ["ref2", ""], ["rows", "5", "placeholder", "Message", "formControlName", "msg", 1, "form-control", "border", "border-white", "rounded"], ["ref3", ""], [1, "form-group", "my-5"], [1, "small"], ["type", "checkbox", "formControlName", "lgpd", 1, "mr-2"], ["ref4", ""], ["rel", "nofollow", "routerLinkActive", "router-link-active", 1, "px-1", 3, "routerLink"], ["class", "d-block invalid-feedback small", 4, "ngIf"], [1, "form-group", "mt-0"], ["type", "submit", "name", "submited", "value", "valid", 1, "btn", "btn-lg", 3, "disabled"], [1, "invalid-feedback"], [1, "d-block", "invalid-feedback", "small"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Contact Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_7_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ContactComponent_small_14_Template, 2, 1, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContactComponent_small_15_Template, 2, 1, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ContactComponent_small_22_Template, 2, 1, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ContactComponent_small_23_Template, 2, 1, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "textarea", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ContactComponent_small_30_Template, 2, 1, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ContactComponent_small_31_Template, 2, 1, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ContactComponent_small_41_Template, 2, 1, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.divider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.validateOnTouched(_r0) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateOnTouched(_r0) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateOnTouched(_r0) === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.validateOnTouched(_r3) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateOnTouched(_r3) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateOnTouched(_r3) === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.validateOnTouched(_r6) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateOnTouched(_r6) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateOnTouched(_r6) === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.validateOnTouched(_r9) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contact.warn1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.contact.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contact.warn2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateOnTouched(_r9) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-outline-dark", !ctx.disabled || ctx.submitable)("btn-danger", ctx.disabled && !ctx.submitable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled && !ctx.submitable);
    } }, directives: [_shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__["DividerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"]], styles: [".text-gray[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\na[_ngcontent-%COMP%]:not(.nav-link) {\n  color: orange;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background-color: transparent !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\nbody[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  background-color: #d99a26 !important;\n}\n\n.page-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding-top: 5rem;\n}\n\n.floating-label-form-group[_ngcontent-%COMP%] {\n  position: relative;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.floating-label-form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .floating-label-form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  position: relative;\n  z-index: 1;\n  padding-right: 0;\n  padding-left: 0;\n  resize: none;\n  border: none;\n  border-radius: 0;\n  background: none;\n  box-shadow: none !important;\n}\n\n.floating-label-form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  line-height: 1.764705882em;\n  position: relative;\n  z-index: 0;\n  top: 2em;\n  display: block;\n  margin: 0;\n  transition: top 0.3s ease, opacity 0.3s ease;\n  opacity: 0;\n}\n\n.floating-label-form-group[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 14px;\n  border-left: 1px solid #e9ecef;\n}\n\n.floating-label-form-group-with-value[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  top: 0;\n  opacity: 1;\n}\n\nform[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:first-child   .floating-label-form-group[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef;\n}\n\n.control-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.control-group[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%], .control-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n}\n\n.floating-label-form-group-with-value[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: lightgray;\n}\n\n.floating-label-form-group-with-focus[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: lightgray;\n}\n\n.floating-label-form-group[_ngcontent-%COMP%]   input.is-invalid[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545 !important;\n  border-radius: 10px;\n  padding-left: 5px;\n}\n\n.custom-select.is-invalid[_ngcontent-%COMP%], .form-control.is-invalid[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:invalid, .was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid {\n  border-color: #dc3545 !important;\n  border-width: 1px !important;\n}\n\n[type=submit][_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zYXNzL19nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7QUNBRjs7QURrQkE7RUFDRSxhQVpPO0FDSFQ7O0FEa0JBO0VBQ0Usc0JBQUE7RUFDQSx3Q0FBQTtBQ2ZGOztBRGtCQTtFQUNFLHdCQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0JBQUE7QUNmRjs7QURrQkE7RUFDRSx3QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLG9DQUFBO0FDZkY7O0FBekJBO0VBQ0UsaUJBQUE7QUE0QkY7O0FBdkJBO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtBQTBCRjs7QUF2QkE7O0VBRUUsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQTBCRjs7QUF2QkE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7RUFDQSxVQUFBO0FBMEJGOztBQXZCQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7QUEwQkY7O0FBdkJBO0VBQ0UsTUFBQTtFQUNBLFVBQUE7QUEwQkY7O0FBdkJBO0VBQ0UsNkJBQUE7QUEwQkY7O0FBcEJFO0VBQ0UsaUJBQUE7QUF1Qko7O0FBcEJFOztFQUVFLDBCQUFBO0FBc0JKOztBQWxCQTtFQUNFLGdCRG5ETTtBQ3dFUjs7QUFsQkE7RUFDRSxnQkR2RE07QUM0RVI7O0FBbEJBO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBcUJGOztBQWxCQTs7OztFQUlFLGdDQUFBO0VBQ0EsNEJBQUE7QUFxQkY7O0FBbEJBO0VBQ0UsbUJBQUE7QUFxQkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgU3R5bGVzXHJcbi50ZXh0LWdyYXkge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4kYnJlYWtwb2ludC1zbTogNTc2cHg7XHJcbiRicmVha3BvaW50LW1kOiA3NjhweDtcclxuJGJyZWFrcG9pbnQtbGc6IDk5MnB4O1xyXG5cclxuJGN1c3RvbTogb3JhbmdlO1xyXG4kY3VzdG9tLWJnOiBkYXJrZW4oJGN1c3RvbSwgOCUpO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR2YWxpZC1jb2xvcjogIzFhYmM5YzsgLy8gfnRoZW1lIHByaW1hcnlcclxuJGludmFsaWQtY29sb3I6IGNyaW1zb247XHJcbiR3YXJuaW5nOiAjZmZjMTA3O1xyXG4kZGFuZ2VyOiAjZGMzNTQ1O1xyXG4kbGFiZWw6IGxpZ2h0Z3JheTtcclxuXHJcbi8vIENVU1RPTUlaRSBUSEVNRVxyXG5cclxuYTpub3QoLm5hdi1saW5rKSB7XHJcbiAgY29sb3I6ICRjdXN0b207XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1saWdodDpob3ZlciB7XHJcbiAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXByaW1hcnkge1xyXG4gIGNvbG9yOiAkY3VzdG9tICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgY29sb3I6ICRjdXN0b20gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtY3VzdG9tIHtcclxuICBjb2xvcjogJGN1c3RvbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ib2R5IC5iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZXNhdHVyYXRlKCRjdXN0b20sIDMwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCIudGV4dC1ncmF5IHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbmE6bm90KC5uYXYtbGluaykge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWN1c3RvbSB7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuYm9keSAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTlhMjYgIWltcG9ydGFudDtcbn1cblxuLnBhZ2Utc2VjdGlvbiAuY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDVyZW07XG59XG5cbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbn1cblxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgaW5wdXQsXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB0ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICByZXNpemU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBsaW5lLWhlaWdodDogMS43NjQ3MDU4ODJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuICB0b3A6IDJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgdHJhbnNpdGlvbjogdG9wIDAuM3MgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOWVjZWY7XG59XG5cbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtdmFsdWUgbGFiZWwge1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmZvcm0gLnJvdzpmaXJzdC1jaGlsZCAuZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xufVxuXG4uY29udHJvbC1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmNvbnRyb2wtZ3JvdXAgLnNtYWxsLFxuLmNvbnRyb2wtZ3JvdXAgLmludmFsaWQtZmVlZGJhY2sge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC12YWx1ZSBsYWJlbCB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtZm9jdXMgbGFiZWwge1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCBpbnB1dC5pcy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmN1c3RvbS1zZWxlY3QuaXMtaW52YWxpZCxcbi5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCxcbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tc2VsZWN0OmludmFsaWQsXG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbn1cblxuW3R5cGU9c3VibWl0XTpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _pages_lgpd_lgpd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/lgpd/lgpd.component */ "PZ6X");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/error/error.component */ "y+ua");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _shared_follow_follow_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/follow/follow.component */ "Sc3h");
/* harmony import */ var _shared_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/scroll/scroll.component */ "/0IB");
/* harmony import */ var _pages_home_masterhead_masterhead_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/home/masterhead/masterhead.component */ "3xvW");
/* harmony import */ var _pages_home_featured_featured_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/home/featured/featured.component */ "Clxq");
/* harmony import */ var _pages_home_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/home/portfolio/portfolio.component */ "Ek/o");
/* harmony import */ var _pages_lgpd_privacy_es_privacy_es_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/lgpd/privacy-es/privacy-es.component */ "hxR0");
/* harmony import */ var _pages_lgpd_privacy_en_privacy_en_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/lgpd/privacy-en/privacy-en.component */ "GBFy");
/* harmony import */ var _pages_home_portfolio_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/home/portfolio/portfolio-item/portfolio-item.component */ "aFpy");
/* harmony import */ var _pages_home_portfolio_portfolio_modal_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/home/portfolio/portfolio-modal/portfolio-modal.component */ "EQnZ");
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/divider/divider.component */ "JmOq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





// pages - routes





// shared components




// unique components








// services


class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            // import HttpClientModule after BrowserModule.
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
        _pages_lgpd_lgpd_component__WEBPACK_IMPORTED_MODULE_8__["LgpdComponent"],
        _pages_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
        _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _shared_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_13__["ScrollComponent"],
        _pages_home_masterhead_masterhead_component__WEBPACK_IMPORTED_MODULE_14__["MasterheadComponent"],
        _pages_home_featured_featured_component__WEBPACK_IMPORTED_MODULE_15__["FeaturedComponent"],
        _pages_home_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_16__["PortfolioComponent"],
        _shared_follow_follow_component__WEBPACK_IMPORTED_MODULE_12__["FollowComponent"],
        _pages_lgpd_privacy_es_privacy_es_component__WEBPACK_IMPORTED_MODULE_17__["PrivacyEsComponent"],
        _pages_lgpd_privacy_en_privacy_en_component__WEBPACK_IMPORTED_MODULE_18__["PrivacyEnComponent"],
        _pages_home_portfolio_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_19__["PortfolioItemComponent"],
        _pages_home_portfolio_portfolio_modal_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_20__["PortfolioModalComponent"],
        _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_21__["DividerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        // import HttpClientModule after BrowserModule.
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                    _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                    _pages_lgpd_lgpd_component__WEBPACK_IMPORTED_MODULE_8__["LgpdComponent"],
                    _pages_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                    _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                    _shared_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_13__["ScrollComponent"],
                    _pages_home_masterhead_masterhead_component__WEBPACK_IMPORTED_MODULE_14__["MasterheadComponent"],
                    _pages_home_featured_featured_component__WEBPACK_IMPORTED_MODULE_15__["FeaturedComponent"],
                    _pages_home_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_16__["PortfolioComponent"],
                    _shared_follow_follow_component__WEBPACK_IMPORTED_MODULE_12__["FollowComponent"],
                    _pages_lgpd_privacy_es_privacy_es_component__WEBPACK_IMPORTED_MODULE_17__["PrivacyEsComponent"],
                    _pages_lgpd_privacy_en_privacy_en_component__WEBPACK_IMPORTED_MODULE_18__["PrivacyEnComponent"],
                    _pages_home_portfolio_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_19__["PortfolioItemComponent"],
                    _pages_home_portfolio_portfolio_modal_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_20__["PortfolioModalComponent"],
                    _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_21__["DividerComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    // import HttpClientModule after BrowserModule.
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "aFpy":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/home/portfolio/portfolio-item/portfolio-item.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PortfolioItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioItemComponent", function() { return PortfolioItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PortfolioItemComponent {
    constructor() { }
}
PortfolioItemComponent.ɵfac = function PortfolioItemComponent_Factory(t) { return new (t || PortfolioItemComponent)(); };
PortfolioItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioItemComponent, selectors: [["app-portfolio-item"]], inputs: { item: "item" }, decls: 5, vars: 3, consts: [["data-toggle", "modal", 1, "portfolio-item", "border", "border-dark", "mx-auto"], [1, "portfolio-item-caption", "d-flex", "align-items-center", "justify-content-center", "h-100", "w-100", "bg-white", "text-custom"], [1, "portfolio-item-caption-content", "text-center"], [1, "fas", "fa-plus", "fa-3x"], [1, "img-fluid", 3, "src", "alt"]], template: function PortfolioItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", ctx.item.target);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/", ctx.item.src, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx.item.alt);
    } }, styles: [".portfolio-item[_ngcontent-%COMP%] {\n  border-width: 4px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9wb3J0Zm9saW8vcG9ydGZvbGlvLWl0ZW0vcG9ydGZvbGlvLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyw0QkFBQTtBQUFEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9wb3J0Zm9saW8vcG9ydGZvbGlvLWl0ZW0vcG9ydGZvbGlvLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGVtZSBvdmVycmlkZVxyXG4ucG9ydGZvbGlvLWl0ZW0ge1xyXG5cdGJvcmRlci13aWR0aDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-item',
                templateUrl: './portfolio-item.component.html',
                styleUrls: ['./portfolio-item.component.scss'],
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hxR0":
/*!***************************************************************!*\
  !*** ./src/app/pages/lgpd/privacy-es/privacy-es.component.ts ***!
  \***************************************************************/
/*! exports provided: PrivacyEsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyEsComponent", function() { return PrivacyEsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/shared */ "+xYV");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/store */ "Pii7");




class PrivacyEsComponent {
    constructor() {
        this.lgpd = _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].getLgpd; // lgpd.es - Spanish
        // <- shared methods
        this.openLink = _utils_shared__WEBPACK_IMPORTED_MODULE_1__["Shared"].openLink;
    }
}
PrivacyEsComponent.ɵfac = function PrivacyEsComponent_Factory(t) { return new (t || PrivacyEsComponent)(); };
PrivacyEsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyEsComponent, selectors: [["app-privacy-es"]], decls: 242, vars: 43, consts: [[1, "text-center", "pb-5"], [1, "mb-4"], [1, "text-left"], [1, "text-primary"], [1, "text-primary", "mr-1"], ["rel", "nofollow", "target", "_blank", 3, "href", "click"], [1, "fab", "fa-linkedin", "mr-1"], [1, "fab", "fa-github", "mr-1"]], template: function PrivacyEsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " te informa sobre su Pol\u00EDtica de Privacidad respecto del tratamiento y protecci\u00F3n de los datos de car\u00E1cter personal de los usuarios y clientes que puedan ser recabados por la navegaci\u00F3n o contrataci\u00F3n de servicios a trav\u00E9s del sitio Web ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protecci\u00F3n de datos personales, reflejada en la Ley Org\u00E1nica 3/2018, de 5 de diciembre, de Protecci\u00F3n de Datos Personales y de Garant\u00EDa de Derechos Digitales (LOPD GDD). Cumple tambi\u00E9n con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protecci\u00F3n de las personas f\u00EDsicas (RGPD). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " El uso de sitio Web implica la aceptaci\u00F3n de esta Pol\u00EDtica de Privacidad as\u00ED como las condiciones incluidas en el Aviso Legal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Titular: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Correo electr\u00F3nico: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Sitio Web: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Principios aplicados en el tratamiento de datos En el tratamiento de tus datos personales, el Titular aplicar\u00E1 los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protecci\u00F3n de datos: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " El Titular siempre requerir\u00E1 el consentimiento para el tratamiento de tus datos personales que puede ser para uno o varios fines espec\u00EDficos sobre los que te informar\u00E1 previamente con absoluta transparencia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " El Titular te solicitar\u00E1 solo los datos estrictamente necesarios para el fin o los fines que los solicita. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Los datos se mantendr\u00E1n durante el tiempo estrictamente necesario para el fin o los fines del tratamiento. El Titular te informar\u00E1 del plazo de conservaci\u00F3n correspondiente seg\u00FAn la finalidad. En el caso de suscripciones, el Titular revisar\u00E1 peri\u00F3dicamente las listas y eliminar\u00E1 aquellos registros inactivos durante un tiempo considerable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Tus datos ser\u00E1n tratados de tal manera que su seguridad, confidencialidad e integridad est\u00E9 garantizada. Debes saber que el Titular toma las precauciones necesarias para evitar el acceso no autorizado o uso indebido de los datos de sus usuarios por parte de terceros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Para navegar por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " no es necesario que facilites ning\u00FAn dato personal. Los casos en los que s\u00ED proporcionas tus datos personales son los siguientes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Al contactar a trav\u00E9s de los formularios de contacto o enviar un correo electr\u00F3nico. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "El Titular te informa que sobre tus datos personales tienes derecho a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Solicitar el acceso a los datos almacenados.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Solicitar una rectificaci\u00F3n o la cancelaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Solicitar la limitaci\u00F3n de su tratamiento.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Oponerte al tratamiento.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Solicitar la portabilidad de tus datos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " El ejercicio de estos derechos es personal y por tanto debe ser ejercido directamente por el interesado, solicit\u00E1ndolo directamente al Titular, lo que significa que cualquier cliente, suscriptor o colaborador que haya facilitado sus datos en alg\u00FAn momento puede dirigirse al Titular y pedir informaci\u00F3n sobre los datos que tiene almacenados y c\u00F3mo los ha obtenido, solicitar la rectificaci\u00F3n de los mismos, solicitar la portabilidad de sus datos personales, oponerse al tratamiento, limitar su uso o solicitar la cancelaci\u00F3n de esos datos en los ficheros del Titular. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Para ejercitar tus derechos de acceso, rectificaci\u00F3n, cancelaci\u00F3n, portabilidad y oposici\u00F3n tienes que enviar un correo electr\u00F3nico a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " especificando el nombre que introdujiste en el formulario de contacto. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Tienes derecho a la tutela judicial efectiva y a presentar una reclamaci\u00F3n ante la autoridad de control, en este caso, la Agencia Espa\u00F1ola de Protecci\u00F3n de Datos, si consideras que el tratamiento de datos personales que te conciernen infringe el Reglamento. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Cuando te conectas al sitio Web para mandar un correo al Titular, te suscribes a su bolet\u00EDn o realizas una contrataci\u00F3n, est\u00E1s facilitando informaci\u00F3n de car\u00E1cter personal de la que el responsable es el Titular. Esta informaci\u00F3n puede incluir datos de car\u00E1cter personal como pueden ser tu direcci\u00F3n IP, nombre y apellidos, direcci\u00F3n f\u00EDsica, direcci\u00F3n de correo electr\u00F3nico, n\u00FAmero de tel\u00E9fono, y otra informaci\u00F3n. Al facilitar esta informaci\u00F3n, das tu consentimiento para que tu informaci\u00F3n sea recopilada, utilizada, gestionada y almacenada por superadmin.es , s\u00F3lo como se describe en el Aviso Legal y en la presente Pol\u00EDtica de Privacidad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Los datos personales y la finalidad del tratamiento por parte del Titular es diferente seg\u00FAn el sistema de captura de informaci\u00F3n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " El Titular solicita datos personales entre los que pueden estar: Nombre y apellidos, direcci\u00F3n de correo electr\u00F3nico, n\u00FAmero de tel\u00E9fono y direcci\u00F3n de tu sitio Web con la finalidad de responder a tus consultas. Por ejemplo, el Titular utiliza esos datos para dar respuesta a tus mensajes, dudas, quejas, comentarios o inquietudes que puedas tener relativas a la informaci\u00F3n incluida en el sitio Web, los servicios que se prestan a trav\u00E9s del sitio Web, el tratamiento de tus datos personales, cuestiones referentes a los textos legales incluidos en el sitio Web, as\u00ED como cualquier otra consulta que puedas tener y que no est\u00E9 sujeta a las condiciones del sitio Web o de la contrataci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Existen otras finalidades por las que el Titular trata tus datos personales: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Para garantizar el cumplimiento de las condiciones recogidas en el Aviso Legal y en la ley aplicable. Esto puede incluir el desarrollo de herramientas y algoritmos que ayuden a este sitio Web a garantizar la confidencialidad de los datos personales que recoge. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Para apoyar y mejorar los servicios que ofrece este sitio Web.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Para analizar la navegaci\u00F3n. El Titular recoge otros datos no identificativos que se obtienen mediante el uso de cookies que se descargan en tu ordenador cuando navegas por el sitio Web cuyas caracter\u00EDsiticas y finalidad est\u00E1n detalladas en la Pol\u00EDtica de Cookies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Para un posible analisis de la navegaci\u00F3n. El titular se reserva el derecho a recoger otros datos no identificativos que se obtienen mediante el uso de cookies que se descargan en tu ordenador cuando navegas por el sitio Web cuyas caracter\u00EDsiticas y finalidad est\u00E1n detalladas en la Pol\u00EDtica de Cookies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Para gestionar las redes sociales. el Titular tiene presencia en redes sociales. Si te haces seguidor en las redes sociales del Titular el tratamiento de los datos personales se regir\u00E1 por este apartado, as\u00ED como por aquellas condiciones de uso, pol\u00EDticas de privacidad y normativas de acceso que pertenezcan a la red social que proceda en cada caso y que has aceptado previamente. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Puedes consultar las pol\u00EDticas de privacidad de las principales redes sociales en estos enlaces: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacyEsComponent_Template_a_click_129_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacyEsComponent_Template_a_click_133_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " El Titular tratar\u00E1 tus datos personales con la finalidad de administrar correctamente su presencia en la red social, informarte de sus actividades, productos o servicios, as\u00ED como para cualquier otra finalidad que las normativas de las redes sociales permitan. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " En ning\u00FAn caso el Titular utilizar\u00E1 los perfiles de seguidores en redes sociales para enviar publicidad de manera individual. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Para proteger tus datos personales, el Titular toma todas las precauciones razonables y sigue las mejores pr\u00E1cticas de la industria para evitar su p\u00E9rdida, mal uso, acceso indebido, divulgaci\u00F3n, alteraci\u00F3n o destrucci\u00F3n de los mismos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " El sitio Web est\u00E1 alojado en ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacyEsComponent_Template_a_click_147_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, ". La seguridad de tus datos est\u00E1 garantizada, ya que toman todas las medidas de seguridad necesarias para ello. Puedes consultar su pol\u00EDtica de privacidad para tener m\u00E1s informaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Las p\u00E1ginas de este sitio Web pueden incluir contenido incrustado (por ejemplo, v\u00EDdeos, im\u00E1genes, art\u00EDculos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si hubieras visitado la otra web. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Estos sitios Web pueden recopilar datos sobre ti, utilizar cookies, incrustar un c\u00F3digo de seguimiento adicional de terceros, y supervisar tu interacci\u00F3n usando este c\u00F3digo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Para que este sitio Web funcione correctamente necesita utilizar cookies, que es una informaci\u00F3n que se almacena en tu navegador web. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " En la p\u00E1gina Pol\u00EDtica de Cookies puedes consultar toda la informaci\u00F3n relativa a la pol\u00EDtica de recogida, la finalidad y el tratamiento de las cookies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "La base legal para el tratamiento de tus datos es: el consentimiento.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Para contactar con el Titular, suscribirte a un bolet\u00EDn o realizar comentarios en este sitio Web tienes que aceptar la presente Pol\u00EDtica de Privacidad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Las categor\u00EDas de datos personales que trata el Titular son:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Datos identificativos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Los datos personales que proporciones al Titular se conservar\u00E1n hasta que solicites su supresi\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " es un servicio de anal\u00EDtica web prestado por Google, Inc., una compa\u00F1\u00EDa de Delaware cuya oficina principal est\u00E1 en 1600 Amphitheatre Parkway, Mountain View (California), CA 94043, Estados Unidos (\u201CGoogle\u201D). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Encontrar\u00E1s m\u00E1s informaci\u00F3n en: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacyEsComponent_Template_a_click_195_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " Google Analytics utiliza \u201Ccookies\u201D, que son archivos de texto ubicados en tu ordenador, para ayudar al Titular a analizar el uso que hacen los usuarios del sitio Web. La informaci\u00F3n que genera la cookie acerca del uso del sitio Web (incluyendo tu direcci\u00F3n IP) ser\u00E1 directamente transmitida y archivada por Google en los servidores de Estados Unidos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Tambi\u00E9n puedes ver una lista de los tipos de cookies que utiliza Google y sus colaboradores y toda la informaci\u00F3n relativa al uso que hacen de cookies publicitarias. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "El sitio Web utiliza los siguientes servicios de an\u00E1lisis de terceros:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " El Titular utiliza la informaci\u00F3n obtenida para obtener datos estad\u00EDsticos, analizar tendencias, administrar el sitio, estudiar patrones de navegaci\u00F3n y para recopilar informaci\u00F3n demogr\u00E1fica. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " Te comprometes a que los datos facilitados al Titular sean correctos, completos, exactos y vigentes, as\u00ED como a mantenerlos debidamente actualizados. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " Como Usuario del sitio Web eres el \u00FAnico responsable de la veracidad y correcci\u00F3n de los datos que remitas al sitio exonerando a el Titular de cualquier responsabilidad al respecto. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " Como Usuario del sitio Web declaras haber sido informado de las condiciones sobre protecci\u00F3n de datos de car\u00E1cter personal, aceptas y consientes el tratamiento de los mismos por parte de el Titular en la forma y para las finalidades indicadas en esta Pol\u00EDtica de Privacidad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " Para ejercitar tus derechos de acceso, rectificaci\u00F3n, cancelaci\u00F3n, portabilidad y oposici\u00F3n tienes que enviar un correo electr\u00F3nico a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " con la solicitud, especificando el nombre que introdujiste en el formulario de contacto. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " El ejercicio de tus derechos no incluye ning\u00FAn dato que el Titular est\u00E9 obligado a conservar con fines administrativos, legales o de seguridad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " El Titular se reserva el derecho a modificar la presente Pol\u00EDtica de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, as\u00ED como a pr\u00E1cticas de la industria. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " Estas pol\u00EDticas estar\u00E1n vigentes hasta que sean modificadas por otras debidamente publicadas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.titular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.website);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.titular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.website);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.lgpd.es.principle1, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.lgpd.es.principle2, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.lgpd.es.principle3, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.lgpd.es.principle4, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.website);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.lgpd.es.tratamiento, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.lgpd.es.socialLink1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lgpd.es.socialTitle1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.lgpd.es.socialLink2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lgpd.es.socialTitle2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.lgpd.es.hostingLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lgpd.es.hostingTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.thirdPartyTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.lgpd.es.thirdPartyLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.thirdPartyLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Al navegar por ", ctx.lgpd.es.website, " se pueden recoger datos no identificativos, que pueden incluir, la direcci\u00F3n IP, geolocalizaci\u00F3n, un registro de c\u00F3mo se utilizan los servicios y sitios, h\u00E1bitos de navegaci\u00F3n y otros datos que no pueden ser utilizados para identificarte. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lgpd.es.thirdPartyTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lgpd.es.heading18);
    } }, styles: [".text-gray[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\na[_ngcontent-%COMP%]:not(.nav-link) {\n  color: orange;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background-color: transparent !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\nbody[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  background-color: #d99a26 !important;\n}\n\nb[_ngcontent-%COMP%] {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zYXNzL19nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xncGQvcHJpdmFjeS1lcy9wcml2YWN5LWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtBQ0FGOztBRGtCQTtFQUNFLGFBWk87QUNIVDs7QURrQkE7RUFDRSxzQkFBQTtFQUNBLHdDQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0JBQUE7QUNmRjs7QURrQkE7RUFDRSx3QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLHdCQUFBO0FDZkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QUF6QkE7RUFDRSxhRE1PO0FDc0JUIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGdwZC9wcml2YWN5LWVzL3ByaXZhY3ktZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgU3R5bGVzXHJcbi50ZXh0LWdyYXkge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4kYnJlYWtwb2ludC1zbTogNTc2cHg7XHJcbiRicmVha3BvaW50LW1kOiA3NjhweDtcclxuJGJyZWFrcG9pbnQtbGc6IDk5MnB4O1xyXG5cclxuJGN1c3RvbTogb3JhbmdlO1xyXG4kY3VzdG9tLWJnOiBkYXJrZW4oJGN1c3RvbSwgOCUpO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR2YWxpZC1jb2xvcjogIzFhYmM5YzsgLy8gfnRoZW1lIHByaW1hcnlcclxuJGludmFsaWQtY29sb3I6IGNyaW1zb247XHJcbiR3YXJuaW5nOiAjZmZjMTA3O1xyXG4kZGFuZ2VyOiAjZGMzNTQ1O1xyXG4kbGFiZWw6IGxpZ2h0Z3JheTtcclxuXHJcbi8vIENVU1RPTUlaRSBUSEVNRVxyXG5cclxuYTpub3QoLm5hdi1saW5rKSB7XHJcbiAgY29sb3I6ICRjdXN0b207XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1saWdodDpob3ZlciB7XHJcbiAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXByaW1hcnkge1xyXG4gIGNvbG9yOiAkY3VzdG9tICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgY29sb3I6ICRjdXN0b20gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtY3VzdG9tIHtcclxuICBjb2xvcjogJGN1c3RvbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ib2R5IC5iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZXNhdHVyYXRlKCRjdXN0b20sIDMwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCIudGV4dC1ncmF5IHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbmE6bm90KC5uYXYtbGluaykge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWN1c3RvbSB7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuYm9keSAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTlhMjYgIWltcG9ydGFudDtcbn1cblxuYiB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyEsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy-es',
                templateUrl: './privacy-es.component.html',
                styleUrls: ['./privacy-es.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/shared */ "+xYV");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store */ "Pii7");




const _c0 = [[["", "id", "transcluded-follow"]]];
const _c1 = ["#transcluded-follow"];
class FooterComponent {
    constructor() {
        this.footer = _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].getFooter;
        // <- shared methods
        this.openLink = _utils_shared__WEBPACK_IMPORTED_MODULE_1__["Shared"].openLink;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], ngContentSelectors: _c1, decls: 13, vars: 6, consts: [[1, "footer", "text-center", "m-0", "p-0"], [1, "copyright", "py-4", "text-center", "text-white"], [1, "d-block"], ["rel", "nofollow", "target", "_blank", 3, "href", "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_5_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_8_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.footer.link1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.footer.tool, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.footer.link2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.footer.theme, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" under ", ctx.footer.license, " license");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Copyright \u00A9 ", ctx.footer.copyright, "");
    } }, styles: [".text-gray[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\na[_ngcontent-%COMP%]:not(.nav-link) {\n  color: orange;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background-color: transparent !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\nbody[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  background-color: #d99a26 !important;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n  background-color: #2c3e50;\n  color: #fff;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  background-color: #1a252f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zYXNzL19nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtBQ0FGOztBRGtCQTtFQUNFLGFBWk87QUNIVDs7QURrQkE7RUFDRSxzQkFBQTtFQUNBLHdDQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0JBQUE7QUNmRjs7QURrQkE7RUFDRSx3QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLHdCQUFBO0FDZkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QUF6QkE7RUFDQyxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBNEJEOztBQXpCRTtFQUNELHlCQUFBO0FBNEJEIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgU3R5bGVzXHJcbi50ZXh0LWdyYXkge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4kYnJlYWtwb2ludC1zbTogNTc2cHg7XHJcbiRicmVha3BvaW50LW1kOiA3NjhweDtcclxuJGJyZWFrcG9pbnQtbGc6IDk5MnB4O1xyXG5cclxuJGN1c3RvbTogb3JhbmdlO1xyXG4kY3VzdG9tLWJnOiBkYXJrZW4oJGN1c3RvbSwgOCUpO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR2YWxpZC1jb2xvcjogIzFhYmM5YzsgLy8gfnRoZW1lIHByaW1hcnlcclxuJGludmFsaWQtY29sb3I6IGNyaW1zb247XHJcbiR3YXJuaW5nOiAjZmZjMTA3O1xyXG4kZGFuZ2VyOiAjZGMzNTQ1O1xyXG4kbGFiZWw6IGxpZ2h0Z3JheTtcclxuXHJcbi8vIENVU1RPTUlaRSBUSEVNRVxyXG5cclxuYTpub3QoLm5hdi1saW5rKSB7XHJcbiAgY29sb3I6ICRjdXN0b207XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1saWdodDpob3ZlciB7XHJcbiAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXByaW1hcnkge1xyXG4gIGNvbG9yOiAkY3VzdG9tICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgY29sb3I6ICRjdXN0b20gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtY3VzdG9tIHtcclxuICBjb2xvcjogJGN1c3RvbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ib2R5IC5iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZXNhdHVyYXRlKCRjdXN0b20sIDMwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCIudGV4dC1ncmF5IHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbmE6bm90KC5uYXYtbGluaykge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWN1c3RvbSB7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuYm9keSAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTlhMjYgIWltcG9ydGFudDtcbn1cblxuLmZvb3RlciB7XG4gIHBhZGRpbmctdG9wOiA1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb3B5cmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyNTJmO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/shared */ "+xYV");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store */ "Pii7");
/* harmony import */ var _shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/divider/divider.component */ "JmOq");





class AboutComponent {
    constructor() {
        // prop -> to <app-divider> Input()
        this.divider = 'divider-light';
        this.about = _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].getAbout;
        // <- shared methods
        this.openLink = _utils_shared__WEBPACK_IMPORTED_MODULE_1__["Shared"].openLink;
    }
    // hooks
    ngOnInit() {
        _utils_shared__WEBPACK_IMPORTED_MODULE_1__["Shared"].pageToTop();
        _store_store__WEBPACK_IMPORTED_MODULE_2__["store"].setScrollShow = false; // scroller -> state false
    }
    ngDoCheck() {
        const scroller = document.getElementById('scroller');
        // dissable scroller view
        if (!_store_store__WEBPACK_IMPORTED_MODULE_2__["store"].scroll.show) {
            scroller.classList.add('d-none'); // state false
        }
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 36, vars: 18, consts: [["id", "about", 1, "page-section", "bg-primary", "text-white", "mb-0", "mt-5"], [1, "container"], [1, "page-section-heading", "text-center", "text-uppercase", "text-white"], [3, "color"], [1, "row", "text-justify"], [1, "col-lg-4", "ml-auto"], [1, "lead", "py-1"], [1, "text-secondary", "font-weight-bold", "p-0", "m-0"], [1, "col-lg-4", "mr-auto"], ["rel", "nofollow", "target", "_blank", 3, "href", "click"], [1, "text-secondary", "font-weight-bold"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_23_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.divider);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.hello, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.p1a, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.p1b, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.p1c, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.p2a, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.p2b, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.p2c, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.p3a, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.about.p3link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.about.p3linkText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", ctx.about.p3b, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.stak1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.and, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.stak2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.p3c, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about.bye, " ");
    } }, directives: [_shared_divider_divider_component__WEBPACK_IMPORTED_MODULE_3__["DividerComponent"]], styles: [".text-gray[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\na[_ngcontent-%COMP%]:not(.nav-link) {\n  color: orange;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background-color: transparent !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\nbody[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  background-color: #d99a26 !important;\n}\n\n.page-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding-top: 5rem;\n}\n\np.lead[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  font-weight: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zYXNzL19nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtBQ0FGOztBRGtCQTtFQUNFLGFBWk87QUNIVDs7QURrQkE7RUFDRSxzQkFBQTtFQUNBLHdDQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0JBQUE7QUNmRjs7QURrQkE7RUFDRSx3QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLHdCQUFBO0FDZkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QUF6QkE7RUFDRSxpQkFBQTtBQTRCRjs7QUF4QkU7RUFDRSxzQkFBQTtFQUNBLCtCQUFBO0FBMkJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgU3R5bGVzXHJcbi50ZXh0LWdyYXkge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4kYnJlYWtwb2ludC1zbTogNTc2cHg7XHJcbiRicmVha3BvaW50LW1kOiA3NjhweDtcclxuJGJyZWFrcG9pbnQtbGc6IDk5MnB4O1xyXG5cclxuJGN1c3RvbTogb3JhbmdlO1xyXG4kY3VzdG9tLWJnOiBkYXJrZW4oJGN1c3RvbSwgOCUpO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR2YWxpZC1jb2xvcjogIzFhYmM5YzsgLy8gfnRoZW1lIHByaW1hcnlcclxuJGludmFsaWQtY29sb3I6IGNyaW1zb247XHJcbiR3YXJuaW5nOiAjZmZjMTA3O1xyXG4kZGFuZ2VyOiAjZGMzNTQ1O1xyXG4kbGFiZWw6IGxpZ2h0Z3JheTtcclxuXHJcbi8vIENVU1RPTUlaRSBUSEVNRVxyXG5cclxuYTpub3QoLm5hdi1saW5rKSB7XHJcbiAgY29sb3I6ICRjdXN0b207XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1saWdodDpob3ZlciB7XHJcbiAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXByaW1hcnkge1xyXG4gIGNvbG9yOiAkY3VzdG9tICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgY29sb3I6ICRjdXN0b20gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtY3VzdG9tIHtcclxuICBjb2xvcjogJGN1c3RvbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ib2R5IC5iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkZXNhdHVyYXRlKCRjdXN0b20sIDMwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCIudGV4dC1ncmF5IHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbmE6bm90KC5uYXYtbGluaykge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWN1c3RvbSB7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuYm9keSAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTlhMjYgIWltcG9ydGFudDtcbn1cblxuLnBhZ2Utc2VjdGlvbiAuY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDVyZW07XG59XG5cbnAubGVhZCBhIHN0cm9uZzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _pages_lgpd_lgpd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/lgpd/lgpd.component */ "PZ6X");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/error/error.component */ "y+ua");









const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'about',
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
    },
    {
        path: 'contact',
        component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
    },
    {
        path: 'contact/lgpd',
        component: _pages_lgpd_lgpd_component__WEBPACK_IMPORTED_MODULE_5__["LgpdComponent"],
    },
    {
        path: '**',
        component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "y+ua":
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ErrorComponent {
    constructor() { }
    // Animate page 404 - Gsap.js
    ngOnInit() {
        gsap.set('svg', { visibility: 'visible' });
        gsap.to('#headStripe', {
            y: 0.5,
            rotation: 1,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            duration: 1,
        });
        gsap.to('#spaceman', {
            y: 0.5,
            rotation: 1,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            duration: 1,
        });
        gsap.to('#craterSmall', {
            x: -3,
            yoyo: true,
            repeat: -1,
            duration: 1,
            ease: 'sine.inOut',
        });
        gsap.to('#craterBig', {
            x: 3,
            yoyo: true,
            repeat: -1,
            duration: 1,
            ease: 'sine.inOut',
        });
        gsap.to('#planet', {
            rotation: -2,
            yoyo: true,
            repeat: -1,
            duration: 1,
            ease: 'sine.inOut',
            transformOrigin: '50% 50%',
        });
        gsap.to('#starsBig g', {
            rotation: 'random(-30,30)',
            transformOrigin: '50% 50%',
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
        });
        gsap.fromTo('#starsSmall g', { scale: 0, transformOrigin: '50% 50%' }, {
            scale: 1,
            transformOrigin: '50% 50%',
            yoyo: true,
            repeat: -1,
            stagger: 0.1,
        });
        gsap.to('#circlesSmall circle', {
            y: -4,
            yoyo: true,
            duration: 1,
            ease: 'sine.inOut',
            repeat: -1,
        });
        gsap.to('#circlesBig circle', {
            y: -2,
            yoyo: true,
            duration: 1,
            ease: 'sine.inOut',
            repeat: -1,
        });
        gsap.set('#glassShine', { x: -68 });
        gsap.to('#glassShine', {
            x: 80,
            duration: 2,
            rotation: -30,
            ease: 'expo.inOut',
            transformOrigin: '50% 50%',
            repeat: -1,
            repeatDelay: 8,
            delay: 2,
        });
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 103, vars: 0, consts: [[1, "container-fluid"], [1, "row", "d-flex", "mx-0", "mx-sm-5"], [1, "col-md-6"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 800 600"], ["id", "GlassClip"], ["d", "M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5\n\t\t\t\t  s-28.485-16.599-34.877-24.192c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13\n\t\t\t\t  c6.755-0.61,20.546-0.608,41.785,5.087s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z"], ["id", "cordClip"], ["width", "800", "height", "600"], ["id", "planet"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-miterlimit", "10", "cx", "572.859", "cy", "108.803", "r", "90.788"], ["id", "craterBig", "fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-miterlimit", "10", "cx", "548.891", "cy", "62.319", "r", "13.074"], ["id", "craterSmall", "fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-miterlimit", "10", "cx", "591.743", "cy", "158.918", "r", "7.989"], ["id", "ring", "fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t  M476.562,101.461c-30.404,2.164-49.691,4.221-49.691,8.007c0,6.853,63.166,12.408,141.085,12.408s141.085-5.555,141.085-12.408\n\t\t\t  c0-3.378-15.347-4.988-40.243-7.225"], ["id", "ringShadow", "opacity", "0.5", "fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t  M483.985,127.43c23.462,1.531,52.515,2.436,83.972,2.436c36.069,0,68.978-1.19,93.922-3.149"], ["id", "stars"], ["id", "starsBig"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "518.07", "y1", "245.375", "x2", "518.07", "y2", "266.581"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "508.129", "y1", "255.978", "x2", "528.01", "y2", "255.978"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "154.55", "y1", "231.391", "x2", "154.55", "y2", "252.598"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "144.609", "y1", "241.995", "x2", "164.49", "y2", "241.995"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "320.135", "y1", "132.746", "x2", "320.135", "y2", "153.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "310.194", "y1", "143.349", "x2", "330.075", "y2", "143.349"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "200.67", "y1", "483.11", "x2", "200.67", "y2", "504.316"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "210.611", "y1", "493.713", "x2", "190.73", "y2", "493.713"], ["id", "starsSmall"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "432.173", "y1", "380.52", "x2", "432.173", "y2", "391.83"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "426.871", "y1", "386.175", "x2", "437.474", "y2", "386.175"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "489.555", "y1", "299.765", "x2", "489.555", "y2", "308.124"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "485.636", "y1", "303.945", "x2", "493.473", "y2", "303.945"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "231.468", "y1", "291.009", "x2", "231.468", "y2", "299.369"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "227.55", "y1", "295.189", "x2", "235.387", "y2", "295.189"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "244.032", "y1", "547.539", "x2", "244.032", "y2", "555.898"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "247.95", "y1", "551.719", "x2", "240.113", "y2", "551.719"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "186.359", "y1", "406.967", "x2", "186.359", "y2", "415.326"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "190.277", "y1", "411.146", "x2", "182.44", "y2", "411.146"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "480.296", "y1", "406.967", "x2", "480.296", "y2", "415.326"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "x1", "484.215", "y1", "411.146", "x2", "476.378", "y2", "411.146"], ["id", "circlesBig"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "588.977", "cy", "255.978", "r", "7.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "450.066", "cy", "320.259", "r", "7.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "168.303", "cy", "353.753", "r", "7.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "429.522", "cy", "201.185", "r", "7.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "200.67", "cy", "176.313", "r", "7.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "133.343", "cy", "477.014", "r", "7.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "283.521", "cy", "568.033", "r", "7.952"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-miterlimit", "10", "cx", "413.618", "cy", "482.387", "r", "7.952"], ["id", "circlesSmall"], ["fill", "#0E0620", "cx", "549.879", "cy", "296.402", "r", "2.651"], ["fill", "#0E0620", "cx", "253.29", "cy", "229.24", "r", "2.651"], ["fill", "#0E0620", "cx", "434.824", "cy", "263.931", "r", "2.651"], ["fill", "#0E0620", "cx", "183.708", "cy", "544.176", "r", "2.651"], ["fill", "#0E0620", "cx", "382.515", "cy", "530.923", "r", "2.651"], ["fill", "#0E0620", "cx", "130.693", "cy", "305.608", "r", "2.651"], ["fill", "#0E0620", "cx", "480.296", "cy", "477.014", "r", "2.651"], ["id", "spaceman", "clip-path", "url(cordClip)"], ["id", "cord", "fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t  M273.813,410.969c0,0-54.527,39.501-115.34,38.218c-2.28-0.048-4.926-0.241-7.841-0.548\n\t\t\t  c-68.038-7.178-134.288-43.963-167.33-103.87c-0.908-1.646-1.793-3.3-2.654-4.964c-18.395-35.511-37.259-83.385-32.075-118.817"], ["id", "backpack", "fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t  M338.164,454.689l-64.726-17.353c-11.086-2.972-17.664-14.369-14.692-25.455l15.694-58.537\n\t\t\t  c3.889-14.504,18.799-23.11,33.303-19.221l52.349,14.035c14.504,3.889,23.11,18.799,19.221,33.303l-15.694,58.537\n\t\t\t  C360.647,451.083,349.251,457.661,338.164,454.689z"], ["id", "antenna"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "323.396", "y1", "236.625", "x2", "295.285", "y2", "353.753"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "cx", "323.666", "cy", "235.617", "r", "6.375"], ["id", "armR"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\t  M360.633,363.039c1.352,1.061,4.91,5.056,5.824,6.634l27.874,47.634c3.855,6.649,1.59,15.164-5.059,19.02l0,0\n\t\t\t\t  c-6.649,3.855-15.164,1.59-19.02-5.059l-5.603-9.663"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\t  M388.762,434.677c5.234-3.039,7.731-8.966,6.678-14.594c2.344,1.343,4.383,3.289,5.837,5.793\n\t\t\t\t  c4.411,7.596,1.829,17.33-5.767,21.741c-7.596,4.411-17.33,1.829-21.741-5.767c-1.754-3.021-2.817-5.818-2.484-9.046\n\t\t\t\t  C375.625,437.355,383.087,437.973,388.762,434.677z"], ["id", "armL"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\t  M301.301,347.66c-1.702,0.242-5.91,1.627-7.492,2.536l-47.965,27.301c-6.664,3.829-8.963,12.335-5.134,18.999h0\n\t\t\t\t  c3.829,6.664,12.335,8.963,18.999,5.134l9.685-5.564"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\t  M241.978,395.324c-3.012-5.25-2.209-11.631,1.518-15.977c-2.701-0.009-5.44,0.656-7.952,2.096\n\t\t\t\t  c-7.619,4.371-10.253,14.09-5.883,21.71c4.371,7.619,14.09,10.253,21.709,5.883c3.03-1.738,5.35-3.628,6.676-6.59\n\t\t\t\t  C252.013,404.214,245.243,401.017,241.978,395.324z"], ["id", "body"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\t  M353.351,365.387c-7.948,1.263-16.249,0.929-24.48-1.278c-8.232-2.207-15.586-6.07-21.836-11.14\n\t\t\t\t  c-17.004,4.207-31.269,17.289-36.128,35.411l-1.374,5.123c-7.112,26.525,8.617,53.791,35.13,60.899l0,0\n\t\t\t\t  c26.513,7.108,53.771-8.632,60.883-35.158l1.374-5.123C371.778,395.999,365.971,377.536,353.351,365.387z"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\t  M269.678,394.912L269.678,394.912c26.3,20.643,59.654,29.585,93.106,25.724l2.419-0.114"], ["id", "legs"], ["id", "legR"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\t\t  M312.957,456.734l-14.315,53.395c-1.896,7.07,2.299,14.338,9.37,16.234l0,0c7.07,1.896,14.338-2.299,16.234-9.37l17.838-66.534\n\t\t\t\t\t  C333.451,455.886,323.526,457.387,312.957,456.734z"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "304.883", "y1", "486.849", "x2", "330.487", "y2", "493.713"], ["id", "legL"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\t\t  M296.315,452.273L282,505.667c-1.896,7.07-9.164,11.265-16.234,9.37l0,0c-7.07-1.896-11.265-9.164-9.37-16.234l17.838-66.534\n\t\t\t\t\t  C278.993,441.286,286.836,447.55,296.315,452.273z"], ["fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "x1", "262.638", "y1", "475.522", "x2", "288.241", "y2", "482.387"], ["id", "head"], ["transform", "matrix(0.259 -0.9659 0.9659 0.259 -51.5445 563.2371)", "fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "cx", "341.295", "cy", "315.211", "rx", "61.961", "ry", "60.305"], ["id", "headStripe", "fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\t  M330.868,261.338c-7.929,1.72-15.381,5.246-21.799,10.246"], ["fill", "#FFFFFF", "stroke", "#0E0620", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "10", "d", "\n\t\t\t\t  M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5s-28.485-16.599-34.877-24.192\n\t\t\t\t  c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13c6.755-0.61,20.546-0.608,41.785,5.087\n\t\t\t\t  s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z"], ["clip-path", "url(#GlassClip)"], ["id", "glassShine", "fill", "none", "stroke", "#0E0620", "stroke-width", "3", "stroke-miterlimit", "10", "points", "\n\t\t\t\t\t  278.436,375.599 383.003,264.076 364.393,251.618 264.807,364.928 \t\t\t\t"], ["id", "_404", 1, "col-md-6", "text-secondary", "text-center", "align-self-center"], [1, "display-4"], [1, "font-weight-lighter"], [1, "text-justify", "px-0", "px-lg-5", "mx-auto"], ["routerLink", "/", 1, "btn", "btn-warning", "btn-lg"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clipPath", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clipPath", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "circle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "circle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "line", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "line", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "line", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "line", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "line", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "line", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "line", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "g", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "line", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "line", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "line", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "line", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "line", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "line", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "line", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "line", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "line", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "line", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "line", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "line", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "circle", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "circle", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "circle", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "circle", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "circle", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "circle", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "circle", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "circle", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "g", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "circle", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "circle", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "circle", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "circle", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "circle", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "circle", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "circle", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "g", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "g", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "line", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "circle", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "g", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "g", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "g", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "g", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "line", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "g", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "line", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "g", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "ellipse", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "g", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "polygon", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h1", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "UH OH! You're lost.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".text-gray[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\na[_ngcontent-%COMP%]:not(.nav-link) {\n  color: orange;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  background-color: transparent !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  color: orange !important;\n}\n\nbody[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  background-color: #d99a26 !important;\n}\n\n.row[_ngcontent-%COMP%] {\n  padding: 6rem 0 2rem;\n}\n\n.row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold !important;\n}\n\n.row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 576px;\n}\n\n@media screen and (min-width: 768px) {\n  .row[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n  }\n  .row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    font-weight: initial !important;\n  }\n}\n\n@media screen and (min-width: 992px) {\n  .row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zYXNzL19nbG9iYWxzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtBQ0FGOztBRGtCQTtFQUNFLGFBWk87QUNIVDs7QURrQkE7RUFDRSxzQkFBQTtFQUNBLHdDQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0JBQUE7QUNmRjs7QURrQkE7RUFDRSx3QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLHdCQUFBO0FDZkY7O0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjs7QUF6QkE7RUFDRSxvQkFBQTtBQTRCRjs7QUEzQkU7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7QUE2Qko7O0FBM0JFO0VBQ0UsZ0JESlk7QUNpQ2hCOztBQTFCQTtFQUNFO0lBQ0UsaUJBQUE7RUE2QkY7RUE1QkU7SUFDRSxpQkFBQTtJQUNBLCtCQUFBO0VBOEJKO0FBQ0Y7O0FBM0JBO0VBRUk7SUFDRSxlQUFBO0VBNEJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdsb2JhbCBTdHlsZXNcclxuLnRleHQtZ3JheSB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbiRicmVha3BvaW50LXNtOiA1NzZweDtcclxuJGJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xyXG4kYnJlYWtwb2ludC1sZzogOTkycHg7XHJcblxyXG4kY3VzdG9tOiBvcmFuZ2U7XHJcbiRjdXN0b20tYmc6IGRhcmtlbigkY3VzdG9tLCA4JSk7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHZhbGlkLWNvbG9yOiAjMWFiYzljOyAvLyB+dGhlbWUgcHJpbWFyeVxyXG4kaW52YWxpZC1jb2xvcjogY3JpbXNvbjtcclxuJHdhcm5pbmc6ICNmZmMxMDc7XHJcbiRkYW5nZXI6ICNkYzM1NDU7XHJcbiRsYWJlbDogbGlnaHRncmF5O1xyXG5cclxuLy8gQ1VTVE9NSVpFIFRIRU1FXHJcblxyXG5hOm5vdCgubmF2LWxpbmspIHtcclxuICBjb2xvcjogJGN1c3RvbTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWxpZ2h0OmhvdmVyIHtcclxuICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICRjdXN0b20gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBjb2xvcjogJGN1c3RvbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1jdXN0b20ge1xyXG4gIGNvbG9yOiAkY3VzdG9tICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJvZHkgLmJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRlc2F0dXJhdGUoJGN1c3RvbSwgMzApICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsIi50ZXh0LWdyYXkge1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuYTpub3QoLm5hdi1saW5rKSB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5idG4tb3V0bGluZS1saWdodDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuLnRleHQtY3VzdG9tIHtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG5ib2R5IC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5OWEyNiAhaW1wb3J0YW50O1xufVxuXG4ucm93IHtcbiAgcGFkZGluZzogNnJlbSAwIDJyZW07XG59XG4ucm93IGgyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuLnJvdyBwIHtcbiAgbWF4LXdpZHRoOiA1NzZweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnJvdyB7XG4gICAgcGFkZGluZy10b3A6IDhyZW07XG4gIH1cbiAgLnJvdyBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnJvdyBoMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.scss'],
            }]
    }], function () { return []; }, null); })();


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