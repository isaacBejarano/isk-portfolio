import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Store implements Stored {
  // navbar
  readonly navbar = {
    src: '/img/portfolio/isaac-logo.png',
    alt: 'isaac logo',
    anchor0: <Anchor>'about',
    anchor1: <Anchor>'portfolio',
    anchor2: <Anchor>'technologies',
    anchor3: <Anchor>'footer',
  };

  // follow
  readonly follow = {
    link1: 'https://www.linkedin.com/in/isaac-bejarano',
    link2: 'https://github.com/isaacBejarano',
  };

  // footer
  readonly footer = {
    tools: [
      ['angular', 'https://angular.dev'],
      ['tailwind', 'https://tailwindcss.com/'],
    ],
    copyright: 'Isaac Bejarano',
  };

  // about
  readonly about = {
    src: './img/portfolio/Isaac-bejarano-s4.jpg',
    alt: 'Isaac Bejarano photo',
    name: 'Isaac Bejarano',
    title: 'Web Developer - Angular Specialist',
  };

  // featured ~new FIXME:
  // readonly featured = 'Responsive prototype with only HTML and CSS';

  // portfolio
  readonly portfolio = {
    // common
    common: {
      star: 'and give it a "star"',
      visit: 'Visit this repository at',
      dontforget: `Don't forget to see it live on`,
    },
    items: [
      // TODO: limpia keys no usadas... e.g. "type"
      {
        title: 'Down Breaker',
        target: '#portfolioModal1',
        id: 'portfolioModal1',
        label: 'portfolioModal1Lbabel',
        src: 'portfolio/algorithms.png',
        alt: 'Down Breaker',
        // type: 'D',
        tech: ['javascript'],
        link1: 'https://github.com/isaacBejarano/price-down-breaker',
      },
      {
        title: 'Binary Search',
        target: '#portfolioModal2',
        id: 'portfolioModal2',
        label: 'portfolioModal2Lbabel',
        src: 'portfolio/algorithms.png',
        alt: 'Binary Search',
        // type: 'D',
        tech: ['javascript'],
        link1: 'https://github.com/isaacBejarano/binary-search',
      },
      {
        title: 'Quick Sort',
        target: '#portfolioModal3',
        id: 'portfolioModal3',
        label: 'portfolioModal3Lbabel',
        src: 'portfolio/algorithms.png',
        alt: 'Quick Sort',
        // type: 'D',
        tech: ['javascript'],
        link1: 'https://github.com/isaacBejarano/quicksort',
      },
      {
        title: 'String Mirror',
        target: '#portfolioModal4',
        id: 'portfolioModal4',
        label: 'portfolioModal4Lbabel',
        src: 'portfolio/algorithms.png',
        alt: 'String Mirror',
        // type: 'D',
        tech: ['javascript'],
        link1: 'https://github.com/isaacBejarano/string-mirror',
      },
      {
        title: 'Fibonacci Sequencer',
        target: '#portfolioModa54',
        id: 'portfolioModal5',
        label: 'portfolioModal5Lbabel',
        src: 'portfolio/algorithms.png',
        alt: 'Fibonacci Sequencer',
        // type: 'D',
        tech: ['javascript'],
        link1: 'https://github.com/isaacBejarano/fibonacci-sequencer',
      },
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
        // type: 'B',
        repo: 'Github',
        host: 'Codepen',
        tech: ['SASS'],
      },
      {
        title: 'JavaScript Beer Rating Component',
        target: '#portfolioModal5',
        id: 'portfolioModal5',
        label: 'portfolioModal5Lbabel',
        src: 'portfolio/beers.png',
        alt: 'Javascript project',
        p1: 'UI for rating. It uses SASS and scalable algorithms to persist ":hover" and ":active" pseudo-classes.',
        link1: 'https://github.com/isaacBejarano/rating-beers',
        link2: 'https://codepen.io/eRoboto/pen/bGpKwgM',
        // type: 'B',
        repo: 'Github',
        host: 'Codepen',
        tech: ['css', 'javascript'],
      },
      {
        title: 'Wordpress Page',
        target: '#portfolioModal9',
        id: 'portfolioModal9',
        label: 'portfolioModal9Lbabel',
        src: 'portfolio/amatller.jpg',
        alt: 'casa museu amatller page',
        p1: 'Worked on Casa Museu Amatller Wordpress webpage. Made with Wp-Backery and Yoast.',
        link1: 'https://amatller.org/',
        host: 'Casa Museu Amatller',
        // type: 'A',
        tech: ['wordpress'],
      },
      {
        title: 'Responsive Website',
        target: '#portfolioModal11',
        id: 'portfolioModal11',
        label: 'portfolioModal11Lbabel',
        src: 'portfolio/uoc.png',
        alt: 'Naturae Hub',
        p1: 'Responsive prototype with only HTML and CSS. Made for the UOC Master on Web App Development.',
        link1: 'https://github.com/isaacBejarano/uoc-html-css-p3.github.io',
        link2: 'https://isaacbejarano.github.io/uoc-html-css-p3.github.io',
        // type: 'B',
        repo: 'GitHub',
        host: 'GitHub Pages',
        tech: ['html', 'css'],
      },
    ],
  };

  readonly skills: StoreSkills = {
    languages: [
      ['HTML', './img/skills/html.png', 1],
      ['CSS', './img/skills/css.png', 1],
      ['JavaScript / ES6', './img/skills/javascript.png', 1],
      ['TypeScript', './img/skills/typescript.png', 1],
      ['PHP', './img/skills/php.png', 2],
      ['C#', './img/skills/c-sharp-logo.png', 2],
    ],
    environment: [
      ['Windows Subsystem for Linux', './img/skills/wsl.png', 1],
      ['Docker', './img/skills/docker.png', 2],
      ['IIS', './img/skills/iis.png', 2],
      ['Nginx', './img/skills/nginx.png', 3],
      ['Apache', './img/skills/apache.png', 3],
    ],
    frontend: [
      ['Angular', './img/skills/angular.png', 1],
      ['RxJS', './img/skills/rxjs.png', 1],
      ['Tailwind', './img/skills/tailwind.png', 1],
      ['Angular Material', './img/skills/material.png', 1],
      ['Bootstrap', './img/skills/bootstrap.png', 1],
      ['Vite', './img/skills/vite.png', 1],
      ['Parcel', './img/skills/parcel.png', 1],
      ['Vue', './img/skills/vue.png', 2],
      ['SASS', './img/skills/SASS.png', 2],
    ],
    backend: [
      ['REST API Architecture', './img/skills/REST.png', 1],
      ['Laravel', './img/skills/laravel.png', 2],
      ['.NET', './img/skills/dotnet.png', 2],
      ['Node.js', './img/skills/node.png', 3],
    ],
    'package managers': [
      ['Node Package Manager', './img/skills/npm.png', 1],
      ['Composer', './img/skills/composer.png', 2],
      ['NuGet', './img/skills/nuget.png', 2],
    ],
    testing: [
      ['Playwright', './img/skills/playwright.png', 1],
      ['Vitest', './img/skills/vitest.png', 2],
      ['Testing Library', './img/skills/testing-library.png', 3],
      ['Cypress', './img/skills/cypress.png', 3],
    ],
    vcs: [['git', './img/skills/git.png', 1]],
    'data bases': [
      ['Postgre SQL', './img/skills/postgres.png', 2],
      ['SQL Server', './img/skills/sqlserver.png', 2],
      ['Maria DB', './img/skills/mariadb.png', 2],
      ['SQLite', './img/skills/sqlite.png', 3],
      ['Mongo DB', './img/skills/mongodb.png', 3],
    ],
    cms: [
      ['Wordpress', './img/skills/wordpress.png', 2],
      ['Drupal', './img/skills/drupal.png', 2],
    ],
    cloud: [
      ['Netlify', './img/skills/netlify.png', 1],
      ['Azure', './img/skills/azure.png', 2],
      ['Firebase', './img/skills/firebase.png', 3],
    ],
  };

  get<U extends keyof Store>(key: U) {
    return this[key];
  }
}
