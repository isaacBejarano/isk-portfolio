import { Component, OnInit } from '@angular/core';

declare let jQuery: any; // ~jQuery Easing

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  img = 'portfolio/codhex-logo.png';
  alt = 'codhex logo';
  menu = '';
  page0 = 'featured';
  page1 = 'portfolio';
  page2 = 'about';
  page3 = 'contact';

  constructor() {}

  ngOnInit(): void {
    /*!
     * Start Bootstrap - Freelancer v6.0.4 (https://startbootstrap.com/themes/freelancer)
     * Copyright 2013-2020 Start Bootstrap
     * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
     */
    //  JQuery plugin - JQuery Easing
    //  https://github.com/gdsmith/jquery.easing
    (($) => {
      'use strict'; // Start of use strict
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
                'easeInOutExpo' // this is the plugin methods // https://gsgd.co.uk/sandbox/jquery/easing/
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
    })(jQuery); // ~jQuery Easing
  }
}
