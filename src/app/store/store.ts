import { Shared } from '../utils/shared';

/* Single Source of Truth */

export const store = {
  // --> props
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
};
