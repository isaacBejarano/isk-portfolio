import { EventEmitter } from '@angular/core';
import { Shared } from '../utils/shared';

/* Single Source of Truth */

export const store = {
  // --> props
  // 1. UI Components
  navbar: {
    home: 'home',
    homeSrc: '../../assets/img/portfolio/codhex-logo.png',
    homeAlt: 'codhex logo',
    hamburger: 'menu',
    page1: 'featured',
    page2: 'portfolio',
    page3: 'about',
    page4: 'contact',
  },
  social: {
    icon1: 'fab fa-fw fa-linkedin-in',
    link1: 'https://www.linkedin.com/in/isaac-bejarano',
    icon2: 'fab fa-github',
    link2: 'https://github.com/isaacBejarano',
  },
  footer: {
    tool: 'Angular',
    theme: 'Start Bootstrap Theme',
    link1: 'https://angular.io',
    link2: 'https://startbootstrap.com/previews/freelancer/',
    license: 'MIT',
    copyright: 'Isaac Bejarano 2020',
  },
  scroll: {
    icon: 'fa fa-chevron-up',
  },
  // 2. Pages and Sections
  masterhead: {
    src: '../../assets/img/portfolio/Isaac-bejarano-s4.jpg',
    alt: 'Isaac Bejarano photo',
    name: 'Isaac Bejarano',
    title: 'Web Developer - Full Stack - MEAN - LAMP',
  },
  featured: {
    title: 'Culex',
    subtitle: 'ES5 library to make HTTP requests',
    id: 'culex-pic',
    src: 'assets/img/portfolio/culex.png',
    alt: 'culex github repo',
    link: 'https://github.com/isaacBejarano/culex.js',
    linkText: 'Github',
    p1:
      'Culex.js is an easy-to-use and lightweight ES5 library \
      to fetch JSON data from RESTful APIs. Visit this repository at',
    p2: 'and give it a "star" if you enjoyed Culex.js.',
    p3: 'Disclaimer: the library is still in beta phase.',
  },
  portfolio: {
    // common
    star: 'and give it a "star".',
    stars: 'and give them a "star".',
    linkText: 'Github',
    linkText2: 'Github Pages',
    visitList: 'Visit these repositories:',
    visitThis: 'Visit this repository at',
    visitThese: 'Visit these repositories at',

    // imgage 1
    img1: 'portfolio/papiro.png',
    alt1: 'Responsive Bootstrap project',
    title1: 'Responsive Bootstrap',
    paragraphPart1:
      'Responsive mobile-first web app made with Bootstrap and LESS.',
    paragraphPart1B: `Don't forget see it live at`,
    link1: 'https://github.com/isaacBejarano/isaacbejarano.github.io',
    linkPages: 'https://isaacbejarano.github.io/',

    // imgage 2
    img2: 'portfolio/rockets.png',
    alt2: 'Typescript project',
    title2: 'Typescript',
    paragraphPart2:
      'UI made with Typescript to create rockets and thrusters.\
       Object Oriented Programmmig (OOP).',
    link2: 'https://github.com/isaacBejarano/ts-rockets',

    // imgage 3
    img3: 'portfolio/joker.png',
    alt3: 'AJAX + JQuery project',
    title3: 'AJAX + JQuery',
    paragraphPart3:
      'Web app using AJAX to fetch Chuck Norris jokes from open REST API. \
      Made with JQuery.',
    link3: 'https://github.com/isaacBejarano/joker',

    // imgage 4
    img4: 'portfolio/beers.png',
    alt4: 'SASS + Javascript project',
    title4: 'SASS + Javascript',
    paragraphPart4:
      'UI for rating. It uses SASS and scalable algorithms to persist\
      ":hover" and ":active" pseudo-classes.',
    link4: 'https://github.com/isaacBejarano/rating-beers',

    // imgage 5
    img5: 'portfolio/restopolitan.png',
    alt5: 'Leaflet project',
    title5: 'Leaflet + AJAX',
    paragraphPart5:
      'UI using AJAX to fetch and filter API REST response in Leaflet maps.\
       Made with JQuery.',
    link5: 'https://github.com/isaacBejarano/leaflet_filtres',

    // imgage 6
    img6: 'portfolio/algorithms.png',
    alt6: 'JavaScript Algorithms project',
    title6: 'JavaScript Algorithms',
    link6a: 'https://github.com/isaacBejarano/price-down-breaker',
    link6b: 'https://github.com/isaacBejarano/binary-search',
    link6c: 'https://github.com/isaacBejarano/quicksort',
    link6d: 'https://github.com/isaacBejarano/is-int',
    link6e: 'https://github.com/isaacBejarano/string-mirror',
    link6f: 'https://github.com/isaacBejarano/fibonacci-sequencer',
    link6aText: 'Down Breaker',
    link6bText: 'Binary Search',
    link6cText: 'Quick Sort',
    link6dText: 'Is Int',
    link6eText: 'String Mirror',
    link6fText: 'Fibonacci Sequencer',
  },

  // --> shared methods
  hashIt(ref: string): string {
    return Shared.hashIt(ref);
  },
  capitalLetter(str: string): string {
    return Shared.capitalLetter(str);
  },
  openLink(): boolean {
    return Shared.openLink();
  },
  fireEvent(eventName: EventEmitter<any>): void {
    return Shared.fireEvent(eventName);
  },
};
