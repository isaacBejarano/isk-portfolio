export const store = {
  // --> props
  // navbar
  navbar: {
    home: 'home',
    src: 'assets/img/portfolio/isaac-logo.png',
    alt: 'isaac logo',
    hamburger: 'menu',
    page1: 'new',
    page2: 'portfolio',
    page3: 'technologies',
  },
  // follow
  follow: {
    link1: 'https://www.linkedin.com/in/isaac-bejarano',
    link2: 'https://github.com/isaacBejarano',
  },
  // footer
  footer: {
    tool: 'Angular',
    theme: 'Start Bootstrap Theme',
    link1: 'https://angular.dev',
    link2: 'https://startbootstrap.com/previews/freelancer/',
    license: 'MIT',
    copyright: 'Isaac Bejarano',
  },
  // scroll
  scroll: {
    show: false, // dafault
  },
  // masterhead
  masterhead: {
    src: './assets/img/portfolio/Isaac-bejarano-s4.jpg',
    alt: 'Isaac Bejarano photo',
    name: 'Isaac Bejarano',
    title: 'Full Stack Web Developer',
  },
  // featured ~new
  new: 'Winary web app made with Angular',
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
        tech: ['javascript', 'html'],
      },
      // modal 2
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
        tech: ['SASS'],
      },
      // modal 3
      {
        title: 'JavaScript Beer Rating Component',
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
        tech: ['javascript', 'css'],
      },
      // modal 4
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
        type: 'A',
        tech: ['wordpress'],
      },
      // modal ~new is teh last!
      {
        title: 'MontPicolis',
        target: '#portfolioModal11',
        id: 'portfolioModal11',
        label: 'portfolioModal11Lbabel',
        src: 'portfolio/montpicolis.png',
        alt: 'montpicolis wine cellars page',
        p1: 'SPA for a winary made with Angular, using a custom RxJS store for state management,\
            with prerendered views made with Scully and consuming a custom RESTful proxy API made with Laravel which consumes WordPress REST API and WooCommerce SDK.\
            It complies with the Jamstack architecture.',
        link1: 'http://www.montpicolis.cat/',
        link2: 'http://www.montpicolis.cat/',
        host: 'MontPicolis',
        type: 'A',
        tech: [
          'angular',
          'rxjs',
          'scully',
          'SASS',
          'laravel',
          'wordpress',
          'wp-rest-api',
          'woocommerce',
        ],
      },
    ],
  },
  // technologies
  skills: {
    lang: [
      ['HTML', './assets/img/skills/html.png'],
      ['CSS', './assets/img/skills/css.png'],
      ['JavaScript / ES6', './assets/img/skills/javascript.png'],
      ['TypeScript', './assets/img/skills/typescript.png'],
      ['C#', './assets/img/skills/c-sharp-logo.png'],
      ['F#', './assets/img/skills/fsharp.png'],
      ['PHP', './assets/img/skills/php.png'],
    ],
    frontend: [
      ['Angular', './assets/img/skills/angular.png'],
      ['Vue', './assets/img/skills/vue.png'],
      ['RxJS', './assets/img/skills/rxjs.png'],
      ['Scully', './assets/img/skills/scully.png'],
      ['jQuery', './assets/img/skills/jquery.png'],
      ['Leaflet', './assets/img/skills/leaflet.png'],
    ],
    backend: [
      ['.NET', './assets/img/skills/dotnet.png'],
      ['Entity Framework Core', './assets/img/skills/dotnetef.png'],
      ['Node.js', './assets/img/skills/node.png'],
      ['Express', './assets/img/skills/express.png'],
      ['Koa', './assets/img/skills/koa.png'],
      ['Laravel', './assets/img/skills/laravel.png'],
    ],
    CSS: [
      ['SASS', './assets/img/skills/SASS.png'],
      ['Angular Material', './assets/img/skills/material.png'],
      ['Bootstrap', './assets/img/skills/bootstrap.png'],
      ['Bulma', './assets/img/skills/bulma.png'],
      ['PureCSS', './assets/img/skills/pureCSS.png'],
      ['LESS', './assets/img/skills/less.png'],
    ],
    DB: [
      ['Postgre SQL', './assets/img/skills/postgres.png'],
      ['SQL Server', './assets/img/skills/sqlserver.png'],
      ['Maria DB', './assets/img/skills/mariadb.png'],
      ['Mongo DB', './assets/img/skills/mongodb.png'],
      ['MySQL', './assets/img/skills/mysql.png'],
    ],
    techniques: [
      ['REST', './assets/img/skills/REST.png'],
      ['AJAX', './assets/img/skills/AJAX.png'],
    ],
    packages: [
      ['Node Package Manager', './assets/img/skills/npm.png'],
      ['Composer', './assets/img/skills/composer.png'],
    ],
    wp: [
      ['Wordpress', './assets/img/skills/wordpress.png'],
      ['Wordpress REST API', './assets/img/skills/wp-rest-api.png'],
    ],
    XaaS: [
      ['Azure', './assets/img/skills/azure.png'],
      ['Firebase', './assets/img/skills/firebase.png'],
      ['Netlify', './assets/img/skills/netlify.png'],
    ],
    version: [
      ['git', './assets/img/skills/git.png'],
      ['GitHub', './assets/img/skills/github.png'],
    ],
    testing: [
      ['Testing Library', './assets/img/skills/testing-library.png'],
      ['Cypress', './assets/img/skills/cypress.png'],
    ],
    webpack: [],
  },

  // getters
  get getNavbar(): any {
    return this.navbar;
  },
  get getFollow() {
    return this.follow;
  },
  get getFooter() {
    return this.footer;
  },
  get getScroll(): any {
    return this.scroll;
  },
  get getMasterhead(): any {
    return this.masterhead;
  },
  get getNew(): any {
    return this.new;
  },
  get getPortfolio(): any {
    return this.portfolio;
  },
  get getPortfolioItems(): any[] {
    return this.portfolio.items;
  },
  get getPortfolioCommon(): any {
    return this.portfolio.common;
  },
  // TECH
  get getSkillsLang(): any {
    return this.skills.lang;
  },
  get getSkillsFrontend(): any {
    return this.skills.frontend;
  },
  get getSkillsBackend(): any {
    return this.skills.backend;
  },
  get getSkillsPHP(): any {
    return this.skills.PHP;
  },
  get getSkillsCSS(): any {
    return this.skills.CSS;
  },
  get getSkillsDB(): any {
    return this.skills.DB;
  },
  get getSkillsTechniques(): any {
    return this.skills.techniques;
  },
  get getSkillsPackages(): any {
    return this.skills.packages;
  },
  get getSkillsWordpress(): any {
    return this.skills.wp;
  },
  get getSkillsXaaS(): any {
    return this.skills.XaaS;
  },
  get getSkillsGit(): any {
    return this.skills.version;
  },
  get getSkillsTDD(): any {
    return this.skills.testing;
  },
  get getSkillsState(): any {
    return this.skills.state;
  },
  get getSkillsWebpack(): any {
    return this.skills.webpack;
  },

  // setters
  set setScrollShow(x: boolean) {
    this.scroll.show = x;
  },
};
