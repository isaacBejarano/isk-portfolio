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
    title: 'Isaac Bejarano',
    legend: 'Web Developer - Angular Specialist',
  };

  // portfolio
  readonly portfolio = {
    // common
    common: {
      star: 'and give it a "star"',
      visit: 'Visit this repository at',
      live: `See it live on`,
    },
    items: [
      {
        id: 1,
        title: 'Wordpress Page',
        src: 'portfolio/amatller.jpg',
        alt: 'casa museu amatller page',
        description: `I worked on the Casa Museu Amatller's webpage, made with Wordpress,
          implementing little vanilla HTML, CSS, JavaScript and PHP tweaks; and some plugins from the Wordpress ecosystem, like Wp-Backery (page builder) and Yoast (SEO).`,
        tech: ['wordpress', 'html', 'css', 'javascript', 'php'],
        host: 'Casa Museu Amatller',
        link2: 'https://amatller.org/',
        year: 2017,
      },
      {
        id: 2,
        title: 'Price Down Breaker',
        src: 'portfolio/algorithms.png',
        alt: 'Down Breaker',
        description: `This vanilla UI Component uses an algorithm to break a price down to its minimum bill and coin constituents.
          I have prioritized the EUR € coins and bills as a repertoire of such constituents.
          To use this algorithm, just enter a number (integer or float) into the form input.
          The outlet part "broken down change" will then show that price decomposed in all its minimum EUR coin and bill constituents.
          For example, 19.98€ will decompose to 1 bill of 10€ and 5€; 2 coins of 2€ and 20 cents; and 1 coin of 50, 5, 2 and 1 cents.          `,
        tech: ['html', 'css', 'javascript'],
        repo: 'GitHub',
        link1: 'https://github.com/isaacBejarano/price-down-breaker',
        year: 2020,
      },
      {
        id: 3,
        title: 'Binary Search',
        src: 'portfolio/binary-search.png',
        alt: 'Binary Search',
        description: `JavaScript implementation of the Binary Search algorithm, using the "Divide and Conquer" pattern,
          to search a number in a sorted array of numbers logarithmicly.
          To use this algorithm, just pass in a sorted array of numbers as the first argument for the "binarySearch" function.
          Then pass in a number as a second argument as the target value to find.
          The algorithm will return the index of the targeted value if found.
          Otherwise, it will return a negative index "-1", meaning the array did not include the targeted value.
          This implementation also allows float numbers as targeted values.
          For example, provided an array [2,3,4,5,6],
          binarySearch(array,6)) will return the index of targeted integer "6", which is: 4;
          and binarySearch(array,7) will return index "-1" meaning the targeted value "7" does not exist in the array.
          I also defined a test suite with Jest on Node.js to test this algorithm.
          `,
        tech: ['javascript', 'node', 'jest'],
        repo: 'GitHub',
        link1: 'https://github.com/isaacBejarano/binary-search',
        year: 2020,
      },
      {
        id: 4,
        title: 'Quick Sort',
        src: 'portfolio/quicksort.png',
        alt: 'Quick Sort',
        description: `JavaScript implementation of the Quick Sort sorting algorithm.
          This algorithm uses recursion as a quicker strategy over iteration to order a given list of numbers.
          To use this algorithm, just pass in an array of numbers as the first argument for the "quickSort" function.
          Optionally, you can pass in a boolean as a second argument to indicate the sorting direction to the algorithm
          (true or truthy values for descending order; false or falsy values for ascending order).
          The default ordering direction is ascendent.
          For example, calling quickSort([2,1,3]) will return this ascending sorted array: [1, 2, 3].
          And calling quickSort([2,1,3], false) will return this descending sorted array: [3, 2, 1].
          I also defined a test suite with Jest on Node.js to test this algorithm.
          `,
        tech: ['javascript', 'node', 'jest'],
        repo: 'GitHub',
        link1: 'https://github.com/isaacBejarano/quicksort',
        year: 2020,
      },
      {
        id: 5,
        title: 'String Mirror',
        src: 'portfolio/string-mirror.png',
        alt: 'String Mirror',
        description: `JavaScript case-sensitive algorithm to mirror the direction and order of all the characters of a given string.
          To use this algorithm, just pass in a string as the argument for the "mirror" function.
          For example, calling mirror("Hello World") will return "dlroW olleH".
          I also defined a test suite with Jest on Node.js to test this algorithm.
          `,
        tech: ['javascript', 'node', 'jest'],
        repo: 'GitHub',
        link1: 'https://github.com/isaacBejarano/string-mirror',
        year: 2020,
      },
      {
        id: 6,
        title: 'Fibonacci Sequencer',
        src: 'portfolio/fibonacci.png',
        alt: 'Fibonacci Sequencer',
        description: `JavaScript implementation of the Fibonacci Sequence. In mathematics, that is a sequence in which each element is the sum of the two elements that precede it.
          Many writers begin the sequence with 0 and 1. To use this algorithm, just pass in an integer number as the argument for the "fibonacci" function.
          For example, calling fibonacci(10) will return this array of Fibonnaci numbers [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].`,
        tech: ['javascript'],
        repo: 'GitHub',
        link1: 'https://github.com/isaacBejarano/fibonacci-sequencer',
        year: 2020,
      },
      {
        id: 7,
        title: 'SASS Stripes',
        src: 'portfolio/stripes.png',
        alt: 'SASS project',
        description: `This SASS UI Component, implemented as an exercise at IT Academy Barcelona,
          presents selectable items in separate stripes,
          each one with a cool mirror-reflex effect on hover and an independent viewport intersection animation.`,
        repo: 'GitHub',
        link1: 'https://github.com/isaacBejarano/sass-stripes',
        host: 'Codepen',
        link2: 'https://codepen.io/eRoboto/pen/eYZZerg',
        tech: ['SASS'],
        year: 2020,
      },
      {
        id: 8,
        title: 'Rating Component',
        src: 'portfolio/beers.png',
        alt: 'Javascript project',
        description: `Standalone vanilla UI component for rating anything (with 5 beers for example).
          It uses SASS and modern CSS pseudo-clases like ":hover" and ":active",
          as well as a tailored algorithm in JavaScript to make this UI component scalable
          (fueeling it with different images as rating items).
          To use it, just hover over the beers and click on the rating you want to give. Undo and redo as you please.`,
        repo: 'GitHub',
        link1: 'https://github.com/isaacBejarano/rating-beers',
        host: 'Codepen',
        link2: 'https://codepen.io/eRoboto/pen/bGpKwgM',
        tech: ['javascript', 'SASS'],
        year: 2020,
      },
      {
        id: 9,
        title: 'Responsive Website Prototype',
        src: 'portfolio/uoc.png',
        alt: 'Naturae Hub',
        description: `Responsive prototype using only vanilla HTML and CSS. Made for the UOC's
          (Universitat Oberta de Catalunya) Master on Website and Web App Development.`,
        repo: 'GitHub',
        link1: 'https://github.com/isaacBejarano/uoc-html-css-p3.github.io',
        host: 'GitHub Pages',
        link2: 'https://isaacbejarano.github.io/uoc-html-css-p3.github.io',
        tech: ['html', 'css'],
        year: 2025,
      },
      // Añadir nuevos aqui...
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
