import {
  Component,
  OnInit,
  AfterViewChecked,
  DoCheck,
  OnDestroy,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { store } from '../../store/store';

declare let jQuery: any; // ~jQuery Easing

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent
  implements OnInit, AfterViewChecked, DoCheck, OnDestroy {
  // ~modal 1
  props1 = {
    target: store.portfolio.modal1.target,
    src: store.portfolio.modal1.src,
    alt: store.portfolio.modal1.alt,
  };
  // ~modal 2
  props2 = {
    target: store.portfolio.modal2.target,
    src: store.portfolio.modal2.src,
    alt: store.portfolio.modal2.alt,
  };
  // ~modal 3
  props3 = {
    target: store.portfolio.modal3.target,
    src: store.portfolio.modal3.src,
    alt: store.portfolio.modal3.alt,
  };
  // ~modal 4
  props4 = {
    target: store.portfolio.modal4.target,
    src: store.portfolio.modal4.src,
    alt: store.portfolio.modal4.alt,
  };
  // ~modal 5
  props5 = {
    target: store.portfolio.modal5.target,
    src: store.portfolio.modal5.src,
    alt: store.portfolio.modal5.alt,
  };
  // ~modal 6
  props6 = {
    target: store.portfolio.modal6.target,
    src: store.portfolio.modal6.src,
    alt: store.portfolio.modal6.alt,
  };
  // ~modal 7
  props7 = {
    target: store.portfolio.modal7.target,
    src: store.portfolio.modal7.src,
    alt: store.portfolio.modal7.alt,
  };
  // ~featured
  props8 = {
    target: store.featured.target,
    src: store.featured.src,
    alt: store.featured.alt,
  };

  constructor(
    //
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

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
        ($('.navbar-collapse') as any).collapse('hide');
      });

      // Activate scrollspy to add active class to navbar items on scroll
      ($('body') as any).scrollspy({
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

      // Floating label headings for the contact form
      $(() => {
        $('body')
          .on(
            'input propertychange',
            '.floating-label-form-group',
            // prettier-ignore
            function(e): void {
              $(this).toggleClass(
                'floating-label-form-group-with-value',
                !!$(e.target).val()
              );
            }
          )
          .on(
            'focus',
            '.floating-label-form-group',
            // prettier-ignore
            function(): void {
              $(this).addClass('floating-label-form-group-with-focus');
            }
          )
          .on(
            'blur',
            '.floating-label-form-group',
            // prettier-ignore
            function(): void {
              $(this).removeClass('floating-label-form-group-with-focus');
            }
          );
      });

      /* 2. RESET URL FRAGMENT FROM OTHER ROUTES:VIEWS */
      const anchor = `/#${activatedRoute.snapshot.fragment}`;

      if (anchor !== '/#null') {
        setTimeout(() => router.navigate(['']), 30);
      }
    })(jQuery, this.activatedRoute, this.router);
  }

  // II) SCROLL Animation - enabled only in "home.component"
  ngAfterViewChecked(): void {
    store.setShow(true); // scroller -> state true
  }

  // III) SCROLL Animation - enable scroller view
  ngDoCheck(): void {
    if (store.scroll.show) {
      document.getElementById('scroller').classList.remove('d-none');
    }
  }

  // IV) "home.component" navbar style ".active" remove when in "about.component" and "contact.component"
  ngOnDestroy(): void {
    const scrollable: HTMLAnchorElement = document.querySelector(
      '.js-scroll-trigger.active'
    );

    if (scrollable) {
      scrollable.classList.remove('active');
    }
  }
}
