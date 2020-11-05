import {
  Component,
  OnInit,
  // OnChanges,
  // AfterContentChecked,
  // AfterViewChecked,
  // OnDestroy,
} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

declare let jQuery: any; // ~jQuery Easing

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
// OnChanges,
export class HomeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    // this.id = activatedRoute.snapshot.fragment;
    // this.activatedRoute.snapshot.fragment = '';
    // this.activatedRoute.params.subscribe((param) =>
    //   console.log('param', param)
    // );
  }

  // ngOnChanges(): void {
  //   console.log('ngOnChanges');
  // }

  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }

  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  // }

  ngOnInit(): void {}

  // ngOnInit(): void {
  //   /*!
  //    * Start Bootstrap - Freelancer v6.0.4 (https://startbootstrap.com/themes/freelancer)
  //    * Copyright 2013-2020 Start Bootstrap
  //    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
  //    */
  //   //  JQuery plugin - JQuery Easing
  //   //  https://github.com/gdsmith/jquery.easing
  //   (($, activatedRoute, router): void => {
  //     // 'use strict'; // Start of use strict

  //     // Smooth scrolling using jQuery easing
  //     $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on(
  //       'click',
  //       // prettier-ignore
  //       function(): boolean {
  //         if (
  //           location.pathname.replace(/^\//, '') ===
  //             this.pathname.replace(/^\//, '') &&
  //           location.hostname === this.hostname
  //         )
  //          {
  //           let target = $(this.hash);

  //           target = target.length
  //             ? target
  //             : $('[name=' + this.hash.slice(1) + ']');

  //           if (target.length) {
  //             $('html, body').animate(
  //               {
  //                 scrollTop: target.offset().top - 71,
  //               },
  //               1000,
  //               'easeInOutExpo' // this is the plugin methods // https://gsgd.co.uk/sandbox/jquery/easing/
  //             );
  //             return false;
  //           }
  //         }
  //       }
  //     );

  //     // Scroll to top button appear
  //     $(document).on(
  //       'scroll',
  //       // prettier-ignore
  //       function(): any {

  //         const scrollDistance = $(this).scrollTop();

  //         if (scrollDistance > 100) {
  //           $('.scroll-to-top').fadeIn();
  //         } else {
  //           $('.scroll-to-top').fadeOut();
  //         }
  //       }
  //     );

  //     // Closes responsive menu when a scroll trigger link is clicked
  //     $('.js-scroll-trigger').on('click', () => {
  //       ($('.navbar-collapse') as any).collapse('hide');
  //     });

  //     // Activate scrollspy to add active class to navbar items on scroll
  //     ($('body') as any).scrollspy({
  //       target: '#mainNav',
  //       offset: 80,
  //     });

  //     // Collapse Navbar
  //     const navbarCollapse = () => {
  //       if ($('#mainNav').offset().top > 100) {
  //         $('#mainNav').addClass('navbar-shrink');
  //       } else {
  //         $('#mainNav').removeClass('navbar-shrink');
  //       }
  //     };

  //     // Collapse now if page is not at top
  //     navbarCollapse();

  //     // Collapse the navbar when page is scrolled
  //     $(window).on('scroll', navbarCollapse);

  //     // Floating label headings for the contact form
  //     $(() => {
  //       $('body')
  //         .on(
  //           'input propertychange',
  //           '.floating-label-form-group',
  //           // prettier-ignore
  //           function(e): void {
  //           $(this).toggleClass(
  //             'floating-label-form-group-with-value',
  //             !!$(e.target).val()
  //           );
  //         }
  //         )
  //         .on(
  //           'focus',
  //           '.floating-label-form-group',
  //           // prettier-ignore
  //           function(): void {
  //           $(this).addClass('floating-label-form-group-with-focus');
  //         }
  //         )
  //         .on(
  //           'blur',
  //           '.floating-label-form-group',
  //           // prettier-ignore
  //           function(): void {
  //           $(this).removeClass('floating-label-form-group-with-focus');
  //         }
  //         );
  //     });

  //     /* RESET URL PARAMS WHEN COMING FORM ANOTHER PAGE */
  //     // console.log('ngOnInit', this.activatedRoute.queryParamMap);
  //     // console.log('ngOnInit', this.activatedRoute.queryParams);
  //     // console.log('ngOnInit', this.activatedRoute.params);
  //     // console.log('ngOnInit', this.activatedRoute.paramMap);
  //     // console.log('ngOnInit', this.activatedRoute.snapshot.fragment);
  //     const anchor = `/#${activatedRoute.snapshot.fragment}`;
  //     console.log(anchor);

  //     if (
  //       anchor === '/#page-top' ||
  //       anchor === '/#featured' ||
  //       anchor === '/#portfolio' ||
  //       anchor === '/#null'
  //     ) {
  //       setTimeout(() => router.navigate(['']), 100);
  //       // router.navigateByUrl(anchor);
  //     }
  //     ////
  //   })(jQuery, this.activatedRoute, this.router); // ~jQuery Easing
  // }
}
