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
  //
  props1 = {
    id: 'transcluded-portfolio-1',
    target: '#portfolioModal1',
    src: store.portfolio.img1,
    alt: store.portfolio.alt1,
  };
  props2 = {
    id: 'transcluded-portfolio-2',
    target: '#portfolioModal2',
    src: store.portfolio.img2,
    alt: store.portfolio.alt2,
  };
  props3 = {
    id: 'transcluded-portfolio-3',
    target: '#portfolioModal3',
    src: store.portfolio.img3,
    alt: store.portfolio.alt3,
  };
  props4 = {
    id: 'transcluded-portfolio-4',
    target: '#portfolioModal4',
    src: store.portfolio.img4,
    alt: store.portfolio.alt4,
  };
  props5 = {
    id: 'transcluded-portfolio-5',
    target: '#portfolioModal5',
    src: store.portfolio.img5,
    alt: store.portfolio.alt5,
  };
  props6 = {
    id: 'transcluded-portfolio-6',
    target: '#portfolioModal6',
    src: store.portfolio.img6,
    alt: store.portfolio.alt6,
  };
  props7 = {
    id: 'transcluded-portfolio-7',
    target: '#portfolioModal7',
    src: store.portfolio.img7,
    alt: store.portfolio.alt7,
  };
  propsNEW = {
    id: 'transcluded-portfolio-NEW',
    target: '#portfolioModalNEW',
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
