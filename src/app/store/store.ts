/* Single Source of Truth */

export let store = {
  // --> props
  // navbar
  navbar: {
    home: 'home',
    src: 'assets/img/portfolio/isaac-logo.png',
    alt: 'isaac logo',
    hamburger: 'menu',
    page1: 'new',
    page2: 'portfolio',
    page3: 'skills',
    page4: 'about',
    page5: 'contact',
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
    copyright: 'Isaac Bejarano 2021',
  },
  // scroll
  scroll: {
    icon: 'fa fa-chevron-up',
    show: false, // dafault
  },
  // masterhead
  masterhead: {
    src: './assets/img/portfolio/Isaac-bejarano-s4.jpg',
    alt: 'Isaac Bejarano photo',
    name: 'Isaac Bejarano',
    title: 'Web Developer - Frontend',
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
        type: 'E',
        repo: 'Github',
        tech: ['javascript', 'AJAX'],
      },
      // modal 2
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
        tech: ['bootstrap', 'jquery', 'AJAX'],
      },
      // modal 5
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
        tech: ['typescript', 'leaflet', 'php', 'mariadb'],
      },
      // modal 6
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
      // modal 7
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
        tech: ['javascript', 'css'],
      },
      // modal 8
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
        tech: ['javascript', 'bootstrap', 'LESS'],
      },
      // modal 9
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
        tech: ['typescript', 'css'],
      },
      // modal 3
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
      // modal 10
      {
        title: 'Wordpress blog',
        target: '#portfolioModal1',
        id: 'portfolioModal1',
        label: 'portfolioModal1Lbabel',
        src: 'portfolio/LFA.jpg',
        alt: 'Wordpress Candidature project',
        p1: `Worked on the Wordpress blog of candiate for Fútbol Club Barcelona's presidency. Made with Elementor and Yoast.`,
        link1: 'https://lluisfernandezala.cat/',
        type: 'A',
        host: 'https://lluisfernandezala.cat',
        tech: ['wordpress'],
      },
      // modal 11
      {
        title: 'Vue 3.0 + VueX',
        target: '#portfolioModal13',
        id: 'portfolioModal13',
        label: 'portfolioModal13Lbabel',
        src: 'portfolio/vue_vuex.png',
        alt: 'vue 3.0 and vuex github repo',
        p1: 'Live example of Vue 3.0 new features and classic cool ones,\
        including VueX for state management, route guards, form validations and many more.',
        link1: 'https://github.com/isaacBejarano/vue-3-typescript-app',
        link2: 'https://vue3-vuex-spa-app.netlify.app/',
        type: 'B',
        repo: 'Github',
        host: 'Netlify',
        tech: ['vue', 'vuex', 'typescript', 'SASS', 'netlify'],
      },
      // modal 12 ~new === items[items.length-1]
      {
        title: 'MontPicolis',
        target: '#portfolioModal11',
        id: 'portfolioModal11',
        label: 'portfolioModal11Lbabel',
        src: 'portfolio/montpicolis.png',
        alt: 'montpicolis wine cellars page',
        p1: 'SPA for a winary made with Angular, using a custom RxJS store for state management,\
        with prerendered views made with Scully and consuming the WordPress REST API.\
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
          'wordpress',
          'wp-rest-api',
          'woocommerce',
        ],
      },
    ],
  },
  // top skills
  skills: {
    lang: [
      ['HTML', './assets/img/skills/html.png'],
      ['CSS', './assets/img/skills/css.png'],
      ['JavaScript / ES6', './assets/img/skills/javascript.png'],
      ['TypeScript', './assets/img/skills/typescript.png'],
    ],
    JS: [
      ['Vue', './assets/img/skills/vue.png'],
      ['Angular', './assets/img/skills/angular.png'],
      ['RxJS', './assets/img/skills/rxjs.png'],
      ['Scully', './assets/img/skills/scully.png'],
    ],
    CSS: [
      ['SASS', './assets/img/skills/SASS.png'],
      ['Bootstrap', './assets/img/skills/bootstrap.png'],
      ['Bulma', './assets/img/skills/bulma.png'],
      ['PureCSS', './assets/img/skills/pureCSS.png'],
    ],
    DB: [
      ['Maria DB', './assets/img/skills/mariadb.png'],
      ['MySQL', './assets/img/skills/mysql.png'],
    ],
    techniques: [
      ['REST', './assets/img/skills/REST.png'],
      ['JSON', './assets/img/skills/JSON.png'],
      ['AJAX', './assets/img/skills/AJAX.png'],
    ],
    packages: [['Node Package Manager', './assets/img/skills/npm.png']],
    wp: [
      ['Wordpress', './assets/img/skills/wordpress.png'],
      ['Wordpress REST API', './assets/img/skills/wp-rest-api.png'],
      ['WooCommerce', './assets/img/skills/woocommerce.png'],
      // ['Yoast SEO', './assets/img/skills/yoast.png'],
      // ['Wordfence Security', './assets/img/skills/wordfence.png'],
      // ['Elementror Page  Builder', './assets/img/skills/elementor.png'],
      // ['Wp Backery Page  Builder', './assets/img/skills/wp-backery.png'],
    ],
    XaaS: [
      ['Netlify', './assets/img/skills/netlify.png'],
      ['Firebase', './assets/img/skills/firebase.png'],
    ],
    version: [
      ['git', './assets/img/skills/git.png'],
      ['GitHub', './assets/img/skills/github.png'],
    ],
    TDD: [],
    state: [
      ['Vuex', './assets/img/skills/vuex.png'],
      ['RxJS', './assets/img/skills/rxjs.png'],
    ],
    webpack: [],
  },
  // basic skills
  skills_basic: {
    lang: [
      ['Node.js', './assets/img/skills/node.png'],
      ['PHP', './assets/img/skills/php.png'],
    ],
    JS: [
      ['Leaflet', './assets/img/skills/leaflet.png'],
      ['Express', './assets/img/skills/express.png'],
      ['jQuery', './assets/img/skills/jquery.png'],
    ],
    PHP: [
      // ['Laravel', './assets/img/skills/laravel.png']
    ],
    CSS: [['LESS', './assets/img/skills/LESS.png']],
    DB: [['Mongo DB', './assets/img/skills/mongodb.png']],
    techniques: [],
    packages: [
      // ['Composer', './assets/img/skills/composer.png'],
    ],
    wp: [],
    XaaS: [['Heroku', './assets/img/skills/heroku.png']],
    version: [],
    TDD: [
      ['Karma', './assets/img/skills/karma.png'],
      ['Jasmine', './assets/img/skills/jasmine.png'],
      ['Jest', './assets/img/skills/jest.png'],
    ],
    // state: [['ngRx', './assets/img/skills/ngRx.png']],
    webpack: [['Webpack', './assets/img/skills/webpack.png']],
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
    p2b: 'I was 12 year old and I was coding',
    p2c: 'Pascal extracurricularwise, making humble text editors in Delphi.',
    p3a1: ' Since I entered the web development world, around 2017,\
    I’ve fallen in love with the',
    p3a2: 'Frontend',
    p3a3: 'which I consider is my strength,\
    but somedays I also think I am a Fullstack defacto,\
    because I deal with everything in my projects:\
    from the Frontend, to making simple REST APIs for the Backend and adminsitrating the databases when needed.',
    p3b: 'I’m dexterous enough in the Angular and Vue ecosystems, and I have recently discovered the prerendering\
    and Backend as a Service compliance with the',
    p3link: 'https://jamstack.org/',
    p3linkText: 'Jamstack',
    p3c: 'arquitecture for modern web developement.',
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
    match2:
      'Your email must comply with the structure "account@some-email.domain"',
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
      socialLink2:
        'https://docs.github.com/es/free-pro-team@latest/github/site-policy/github-privacy-statement',
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
      socialLink2:
        'https://docs.github.com/es/free-pro-team@latest/github/site-policy/github-privacy-statement',
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
  get getNavbar(): object {
    return this.navbar;
  },
  get getFollow(): object {
    return this.follow;
  },
  get getFooter(): object {
    return this.footer;
  },
  get getScroll(): object {
    return this.scroll;
  },
  get getMasterhead(): object {
    return this.masterhead;
  },
  get getNew(): object {
    return this.new;
  },
  get getPortfolio(): object {
    return this.portfolio;
  },
  get getPortfolioItems(): object[] {
    return this.portfolio.items;
  },
  get getPortfolioCommon(): object[] {
    return this.portfolio.common;
  },
  // TOP SKILLS
  get getSkillsLang(): object {
    return this.skills.lang;
  },
  get getSkillsJS(): object {
    return this.skills.JS;
  },
  get getSkillsPHP(): object {
    return this.skills.PHP;
  },
  get getSkillsCSS(): object {
    return this.skills.CSS;
  },
  get getSkillsDB(): object {
    return this.skills.DB;
  },
  get getSkillsTechniques(): object {
    return this.skills.techniques;
  },
  get getSkillsPackages(): object {
    return this.skills.packages;
  },
  get getSkillsWordpress(): object {
    return this.skills.wp;
  },
  get getSkillsXaaS(): object {
    return this.skills.XaaS;
  },
  get getSkillsGit(): object {
    return this.skills.version;
  },
  get getSkillsTDD(): object {
    return this.skills.TDD;
  },
  get getSkillsState(): object {
    return this.skills.state;
  },
  get getSkillsWebpack(): object {
    return this.skills.webpack;
  },
  // BASIC SKILLS
  get getSkillsLang_basic(): object {
    return this.skills_basic.lang;
  },
  get getSkillsJS_basic(): object {
    return this.skills_basic.JS;
  },
  get getSkillsPHP_basic(): object {
    return this.skills_basic.PHP;
  },
  get getSkillsCSS_basic(): object {
    return this.skills_basic.CSS;
  },
  get getSkillsDB_basic(): object {
    return this.skills_basic.DB;
  },
  get getSkillsTechniques_basic(): object {
    return this.skills_basic.techniques;
  },
  get getSkillsPackages_basic(): object {
    return this.skills_basic.packages;
  },
  get getSkillsWordpress_basic(): object {
    return this.skills_basic.wp;
  },
  get getSkillsXaaS_basic(): object {
    return this.skills_basic.XaaS;
  },
  get getSkillsGit_basic(): object {
    return this.skills_basic.version;
  },
  get getSkillsTDD_basic(): object {
    return this.skills_basic.TDD;
  },
  get getSkillsState_basic(): object {
    return this.skills_basic.state;
  },
  get getSkillsWebpack_basic(): object {
    return this.skills_basic.webpack;
  },
  //
  get getAbout(): object {
    return this.about;
  },
  get getContact(): object {
    return this.contact;
  },
  get getLgpd(): object {
    return this.lgpd;
  },

  // setters
  set setScrollShow(x: boolean) {
    this.scroll.show = x;
  },
};
