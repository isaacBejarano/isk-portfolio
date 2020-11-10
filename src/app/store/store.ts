/* Single Source of Truth */

export let store = {
  // --> props
  // 1. UI Shared Components
  navbar: {
    home: 'home',
    homeSrc: './assets/img/portfolio/codhex-logo.png',
    homeAlt: 'codhex logo',
    hamburger: 'menu',
    page1: 'new',
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
    show: false, // dafault
  },
  // 2. Pages and Sections
  masterhead: {
    src: './assets/img/portfolio/Isaac-bejarano-s4.jpg',
    alt: 'Isaac Bejarano photo',
    name: 'Isaac Bejarano',
    title: 'Web Developer - Full Stack - MEAN - LAMP',
  },
  featured: {
    title: 'Culex',
    subtitle: 'ES5 library to make HTTP requests',
    id: 'culex-pic',
    link: 'https://github.com/isaacBejarano/culex.js',
    linkText: 'Github',
    p1:
      'Culex.js is an easy-to-use and lightweight ES5 library \
    to fetch JSON data from RESTful APIs.',
    p2: 'Disclaimer: the library is still in beta phase.',
    // affects portfolio last image
    target: '#portfolioModal8',
    src: 'portfolio/culex.png',
    alt: 'culex github repo',
  },
  portfolio: {
    // common
    star: 'and give it a "star".',
    stars: 'and give them a "star".',
    linkText: 'Github',
    linkText2: 'Github Pages',
    linkText3: 'Codepen',
    visitList: 'Visit these repositories:',
    visitThis: 'Visit this repository at',
    visitThese: 'Visit these repositories at',
    dontforget: `Don't forget to see it live at`,

    // image 1
    target1: '#portfolioModal1',
    img1: 'portfolio/papiro.png',
    alt1: 'Responsive Bootstrap project',
    title1: 'Responsive Bootstrap',
    paragraphPart1:
      'Responsive mobile-first web app made with Bootstrap and LESS.',
    link1: 'https://github.com/isaacBejarano/isaacbejarano.github.io',
    linkPages: 'https://isaacbejarano.github.io/',

    // image 2
    target2: '#portfolioModal2',
    img2: 'portfolio/rockets.png',
    alt2: 'Typescript project',
    title2: 'Typescript',
    paragraphPart2:
      'UI made with Typescript to create rockets and thrusters.\
       Object Oriented Programmmig (OOP).',
    link2: 'https://github.com/isaacBejarano/ts-rockets',

    // image 3
    target3: '#portfolioModal3',
    img3: 'portfolio/joker.png',
    alt3: 'AJAX + JQuery project',
    title3: 'JQuery + AJAX',
    paragraphPart3:
      'Web app using AJAX to fetch Chuck Norris jokes from open REST API. \
      Made with JQuery.',
    link3: 'https://github.com/isaacBejarano/joker',

    // image 4
    target4: '#portfolioModal4',
    img4: 'portfolio/beers.png',
    alt4: 'Javascript project',
    title4: 'Javascript',
    paragraphPart4:
      'UI for rating. It uses SASS and scalable algorithms to persist\
      ":hover" and ":active" pseudo-classes.',
    link4: 'https://github.com/isaacBejarano/rating-beers',
    link4b: 'https://codepen.io/eRoboto/pen/bGpKwgM',

    // image 5
    target5: '#portfolioModal5',
    img5: 'portfolio/restopolitan.png',
    alt5: 'Leaflet project',
    title5: 'Leaflet + AJAX',
    paragraphPart5:
      'UI using AJAX to fetch and filter API REST response in Leaflet maps.\
       Made with JQuery.',
    link5: 'https://github.com/isaacBejarano/leaflet_filtres',

    // image 6
    target6: '#portfolioModal6',
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

    // image 7
    target7: '#portfolioModal7',
    img7: 'portfolio/stripes.png',
    alt7: 'SASS project',
    title7: 'SASS',
    paragraphPart7:
      'Cool SASS hover effect using CSS animation rules and pseudo-classes.',
    link7: 'https://github.com/isaacBejarano/sass-stripes',
    link7b: 'https://codepen.io/eRoboto/pen/eYZZerg',
  },
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
