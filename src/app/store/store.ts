/* Single Source of Truth */

export let store = {
  // --> props
  // navbar
  navbar: {
    home: 'home',
    src: './assets/img/portfolio/codhex-logo.png',
    alt: 'codhex logo',
    hamburger: 'menu',
    page1: 'new',
    page2: 'portfolio',
    page3: 'about',
    page4: 'contact',
  },
  // social
  social: {
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
    bye: 'May the code be with you! ;)',
  },
  // --> methods
  setShow(x: boolean): void {
    this.scroll.show = x;
  },
};
