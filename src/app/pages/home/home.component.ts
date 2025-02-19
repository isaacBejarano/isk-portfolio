import { Component, OnInit, AfterViewChecked, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Shared } from '../../utils/shared';
import { store } from '@app/data/store';

declare let jQuery: any; // ~jQuery Easing

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewChecked, DoCheck {
  propNew = store.getNew; // featured ~new
  portfolioItems = store.getPortfolioItems; // common + modal8
  portfolioCommon = store.getPortfolioCommon; // common + modal8

  constructor(
    //
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  openLink = Shared.openLink;

  // I) SCROLL Animation - JQuery plugin - Easing
  ngOnInit(): void {
    (($, activatedRoute, router): void => {
      'use strict';

      /* 1. JQUERY EASING */
      // navbar.component + scroll.component dependencies of app.component
      // so this algorithm can reference them.

      // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on(
        'click',
        // prettier-ignore
        function(): boolean {
            if (
              location.pathname.replace(/^\//, '') ===
                this.pathname.replace(/^\//, '') &&
              location.hostname === this.hostname
            )
             {
              let target = $(this.hash);

              target = target.length
                ? target
                : $('[name=' + this.hash.slice(1) + ']');

              if (target.length) {
                $('html, body').animate(
                  {
                    scrollTop: target.offset().top - 71,
                  },
                  1000,
                  'easeInOutExpo' // see plugin methods
                );
                return false;
              }
            }
          }
      );

      // Scroll to top button appear
      $(document).on(
        'scroll',
        // prettier-ignore
        function(): any {

            const scrollDistance = $(this).scrollTop();

            if (scrollDistance > 100) {
              $('.scroll-to-top').fadeIn();
            } else {
              $('.scroll-to-top').fadeOut();
            }
          }
      );

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
        } else {
          $('#mainNav').removeClass('navbar-shrink');
        }
      };

      // Collapse now if page is not at top
      navbarCollapse();

      // Collapse the navbar when page is scrolled
      $(window).on('scroll', navbarCollapse);

      /* 2. RESET URL FRAGMENT FROM OTHER ROUTES:VIEWS */
      const anchor = `/#${activatedRoute.snapshot.fragment}`;

      if (anchor !== '/#null') {
        setTimeout(() => router.navigate(['']), 30);
      }
    })(jQuery, this.activatedRoute, this.router);
  }

  // II) SCROLL Animation - enabled only in "home.component"
  ngAfterViewChecked(): void {
    store.setScrollShow = true; // scroller -> state true
  }

  // III) SCROLL Animation - enable scroller view
  ngDoCheck(): void {
    if (store.scroll.show) {
      document.getElementById('scroller').classList.remove('d-none');
    }
  }
}
