/* Single Source of Truth */

export let store = {
  // --> props
  // navbar
  navbar: {
    home: 'home',
    src: 'assets/img/portfolio/codhex-logo.png',
    alt: 'codhex logo',
    hamburger: 'menu',
    page1: 'new',
    page2: 'portfolio',
    page3: 'about',
    page4: 'contact',
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
    copyright: 'Isaac Bejarano 2020',
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
    title: 'Web Developer - Full Stack - MEAN - LAMP',
  },
  // featured ~new
  new: {
    imgId: 'culex-pic',
    subtitle: 'ES5 library to make HTTP requests',
  },
  // portfolio
  portfolio: {
    // common
    common: {
      star: 'and give it a "star".',
      stars: 'and give them a "star".',
      repo1: 'Github',
      repo2: 'Github Pages',
      repo3: 'Codepen',
      list: 'Visit these repositories:',
      visit: 'Visit this repository at',
      visits: 'Visit these repositories at',
      dontforget: `Don't forget to see it live at`,
    },
    // modal 1
    modal1: {
      title: 'Responsive Bootstrap',
      target: '#portfolioModal1',
      id: 'portfolioModal1',
      label: 'portfolioModal1Lbabel',
      src: 'portfolio/papiro.png',
      alt: 'Responsive Bootstrap project',
      p1: 'Responsive mobile-first web app made with Bootstrap and LESS.',
      link1: 'https://github.com/isaacBejarano/isaacbejarano.github.io',
      link2: 'https://isaacbejarano.github.io/',
    },
    // modal 2
    modal2: {
      title: 'Typescript',
      target: '#portfolioModal2',
      id: 'portfolioModal2',
      label: 'portfolioModal2Lbabel',
      src: 'portfolio/rockets.png',
      alt: 'Typescript project',
      p1:
        'UI made with Typescript to create rockets and thrusters.\
        Object Oriented Programmmig (OOP).',
      link1: 'https://github.com/isaacBejarano/ts-rockets',
    },
    // modal 3
    modal3: {
      title: 'JQuery + AJAX',
      target: '#portfolioModal3',
      id: 'portfolioModal3',
      label: 'portfolioModal3Lbabel',
      src: 'portfolio/joker.png',
      alt: 'AJAX + JQuery project',
      p1:
        'Web app using AJAX to fetch Chuck Norris jokes from open REST API. \
        Made with JQuery.',
      link1: 'https://github.com/isaacBejarano/joker',
    },
    // modal 4
    modal4: {
      title: 'Javascript',
      target: '#portfolioModal4',
      id: 'portfolioModal4',
      label: 'portfolioModal4Lbabel',
      src: 'portfolio/beers.png',
      alt: 'Javascript project',
      p1:
        'UI for rating. It uses SASS and scalable algorithms to persist\
        ":hover" and ":active" pseudo-classes.',
      link1: 'https://github.com/isaacBejarano/rating-beers',
      link2: 'https://codepen.io/eRoboto/pen/bGpKwgM',
    },
    // modal 5
    modal5: {
      title: 'Leaflet + AJAX',
      target: '#portfolioModal5',
      id: 'portfolioModal5',
      label: 'portfolioModal5Lbabel',
      src: 'portfolio/restopolitan.png',
      alt: 'Leaflet project',
      p1:
        'UI using AJAX to fetch and filter API REST response in Leaflet maps.\
        Made with JQuery.',
      link1: 'https://github.com/isaacBejarano/leaflet_filtres',
    },
    // modal 6
    modal6: {
      title: 'JavaScript Algorithms',
      target: '#portfolioModal6',
      id: 'portfolioModal6',
      label: 'portfolioModal6Lbabel',
      src: 'portfolio/algorithms.png',
      alt: 'JavaScript Algorithms project',
      link1: 'https://github.com/isaacBejarano/price-down-breaker',
      link2: 'https://github.com/isaacBejarano/binary-search',
      link3: 'https://github.com/isaacBejarano/quicksort',
      link4: 'https://github.com/isaacBejarano/is-int',
      link5: 'https://github.com/isaacBejarano/string-mirror',
      link6: 'https://github.com/isaacBejarano/fibonacci-sequencer',
      js1: 'Down Breaker',
      js2: 'Binary Search',
      js3: 'Quick Sort',
      js4: 'Is Int',
      js5: 'String Mirror',
      js6: 'Fibonacci Sequencer',
    },
    // modal 7
    modal7: {
      title: 'SASS',
      target: '#portfolioModal7',
      id: 'portfolioModal7',
      label: 'portfolioModal7Lbabel',
      src: 'portfolio/stripes.png',
      alt: 'SASS project',
      p1:
        'Cool SASS hover effect using CSS animation rules and pseudo-classes.',
      link1: 'https://github.com/isaacBejarano/sass-stripes',
      link2: 'https://codepen.io/eRoboto/pen/eYZZerg',
    },
    // modal 8 ~new
    modal8: {
      title: 'Culex',
      target: '#portfolioModal8',
      id: 'portfolioModal8',
      label: 'portfolioModal8Lbabel',
      src: 'portfolio/culex.png',
      alt: 'culex github repo',
      p1:
        'Culex.js is an easy-to-use and lightweight ES5 library \
      to fetch JSON data from RESTful APIs.',
      p2: 'Disclaimer: the library is still in beta phase.',
      link1: 'https://github.com/isaacBejarano/culex.js',
    },
  },
  // about
  about: {
    title: 'about me',
    hello: `Hi, I'm Isaac.`,
    p1a:
      'I used to work in audiovisual postproduction and\
    I was pretty dexterous at image manipulation with',
    p1b: 'Photoshop',
    p1c:
      'but I felt it would be useful to boost my designer skills.\
    Taking into account that the majority of media design we consume today is on screen,\
    I decided to join the neverending exciting web developement world.',
    p2a:
      'I easily fell in love with HTML and CSS, and programming quickly got my attention.\
    I suddenly remembered those days when',
    p2b: 'I was 12 year old and I was coding Pascal',
    p2c:
      'extracurricularwise, making humble text editors in Delphi.\
    Thus I reconnected to my inner-coder and my need of deepening in JavaScript and\
    Object Oriented Programming quickly beacame addicitve.',
    p3a:
      'Having gained specialized training after completing the Frontend bootcamp at',
    p3link:
      'https://cibernarium.barcelonactiva.cat/es/ficha-actividad?activityId=1002836',
    p3linkText: 'IT Academy Barcelona',
    p3b: `I've proudly become a pretty educated web developer today.\
    And although I excell in Frontend, which blends my cerative background\
    with my innate analytic mind, I also feel comfortable in both`,
    stak1: 'MEAN',
    stak2: 'LAMP',
    p3c: 'Full Stack.',
    and: 'and',
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
    match2: 'Your email must comply with the structure "account@some-email.domain"',
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
