import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class Store implements Stored {
  // navbar
  readonly navbar = {
    home: "home",
    src: "/img/portfolio/isaac-logo.png",
    alt: "isaac logo",
    hamburger: "menu",
    page1: "new",
    page2: "portfolio",
    page3: "technologies",
  };

  // follow
  readonly follow = {
    link1: "https://www.linkedin.com/in/isaac-bejarano",
    link2: "https://github.com/isaacBejarano",
  };

  // footer
  readonly footer = {
    tool: "Angular",
    theme: "Start Bootstrap Theme",
    link1: "https://angular.dev",
    link2:
      "https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE",
    license: "MIT",
    copyright: "Isaac Bejarano",
  };

  // scroll
  readonly scrolling = false; // FIXME: use it or remove it

  // masterhead
  readonly masterhead = {
    src: "./img/portfolio/Isaac-bejarano-s4.jpg",
    alt: "Isaac Bejarano photo",
    name: "Isaac Bejarano",
    title: "Full Stack Developer",
  };

  // featured ~new
  readonly featured = "Responsive prototype with only HTML and CSS";

  // portfolio
  readonly portfolio = {
    // common
    common: {
      star: 'and give it a "star"',
      visit: "Visit this repository at",
      dontforget: `Don't forget to see it live on`,
    },
    items: [
      // TODO: limpia keys no usadas... e.g. "type"
      {
        title: "Down Breaker",
        target: "#portfolioModal1",
        id: "portfolioModal1",
        label: "portfolioModal1Lbabel",
        src: "portfolio/algorithms.png",
        alt: "Down Breaker",
        type: "D",
        tech: ["javascript"],
        link1: "https://github.com/isaacBejarano/price-down-breaker",
      },
      {
        title: "Binary Search",
        target: "#portfolioModal2",
        id: "portfolioModal2",
        label: "portfolioModal2Lbabel",
        src: "portfolio/algorithms.png",
        alt: "Binary Search",
        type: "D",
        tech: ["javascript"],
        link1: "https://github.com/isaacBejarano/binary-search",
      },
      {
        title: "Quick Sort",
        target: "#portfolioModal3",
        id: "portfolioModal3",
        label: "portfolioModal3Lbabel",
        src: "portfolio/algorithms.png",
        alt: "Quick Sort",
        type: "D",
        tech: ["javascript"],
        link1: "https://github.com/isaacBejarano/quicksort",
      },
      {
        title: "String Mirror",
        target: "#portfolioModal4",
        id: "portfolioModal4",
        label: "portfolioModal4Lbabel",
        src: "portfolio/algorithms.png",
        alt: "String Mirror",
        type: "D",
        tech: ["javascript"],
        link1: "https://github.com/isaacBejarano/string-mirror",
      },
      {
        title: "Fibonacci Sequencer",
        target: "#portfolioModa54",
        id: "portfolioModal5",
        label: "portfolioModal5Lbabel",
        src: "portfolio/algorithms.png",
        alt: "Fibonacci Sequencer",
        type: "D",
        tech: ["javascript"],
        link1: "https://github.com/isaacBejarano/fibonacci-sequencer",
      },
      {
        title: "SASS",
        target: "#portfolioModal8",
        id: "portfolioModal8",
        label: "portfolioModal8Lbabel",
        src: "portfolio/stripes.png",
        alt: "SASS project",
        p1: "Cool SASS hover effect using CSS animation rules and pseudo-classes.",
        link1: "https://github.com/isaacBejarano/sass-stripes",
        link2: "https://codepen.io/eRoboto/pen/eYZZerg",
        type: "B",
        repo: "Github",
        host: "Codepen",
        tech: ["SASS"],
      },
      {
        title: "JavaScript Beer Rating Component",
        target: "#portfolioModal5",
        id: "portfolioModal5",
        label: "portfolioModal5Lbabel",
        src: "portfolio/beers.png",
        alt: "Javascript project",
        p1: 'UI for rating. It uses SASS and scalable algorithms to persist ":hover" and ":active" pseudo-classes.',
        link1: "https://github.com/isaacBejarano/rating-beers",
        link2: "https://codepen.io/eRoboto/pen/bGpKwgM",
        type: "B",
        repo: "Github",
        host: "Codepen",
        tech: ["css", "javascript"],
      },
      {
        title: "Wordpress Page",
        target: "#portfolioModal9",
        id: "portfolioModal9",
        label: "portfolioModal9Lbabel",
        src: "portfolio/amatller.jpg",
        alt: "casa museu amatller page",
        p1: "Worked on Casa Museu Amatller Wordpress webpage. Made with Wp-Backery and Yoast.",
        link1: "https://amatller.org/",
        host: "Casa Museu Amatller",
        type: "A",
        tech: ["wordpress"],
      },
      {
        title: "Responsive Website",
        target: "#portfolioModal11",
        id: "portfolioModal11",
        label: "portfolioModal11Lbabel",
        src: "portfolio/uoc.png",
        alt: "Naturae Hub",
        p1: "Responsive prototype with only HTML and CSS. Made for the UOC Master on Web App Development.",
        link1: "https://github.com/isaacBejarano/uoc-html-css-p3.github.io",
        link2: "https://isaacbejarano.github.io/uoc-html-css-p3.github.io",
        type: "B",
        repo: "GitHub",
        host: "GitHub Pages",
        tech: ["html", "css"],
      },
    ],
  };

  readonly skills = {
    languages: [
      ["HTML", "./img/skills/html.png"],
      ["CSS", "./img/skills/css.png"],
      ["JavaScript / ES6", "./img/skills/javascript.png"],
      ["TypeScript", "./img/skills/typescript.png"],
      ["C#", "./img/skills/c-sharp-logo.png"],
      ["PHP", "./img/skills/php.png"],
    ],
    environment: [
      ["WSL (Windows Subsystem for Linux)", ""],
      ["Docker", "./img/skills/docker.png"],
      ["IIS", "./img/skills/iis.png"],
      ["Nginx", "./img/skills/nginx.png"],
      ["Apache", "./img/skills/apache.png"],
    ],
    frontend: [
      ["Angular", "./img/skills/angular.png"],
      ["RxJS", "./img/skills/rxjs.png"],
      ["Tailwind", ""], // FIXME:
      ["Bootstrap", "./img/skills/bootstrap.png"],
      ["Vite", ""], // FIXME:
      ["Parcel", "./img/skills/parcel.png"],
      ["Node Package Manager", "./img/skills/npm.png"],
      ["SASS", "./img/skills/SASS.png"],
      ["Vue", "./img/skills/vue.png"],
      ["Angular Material", "./img/skills/material.png"],
    ],
    backend: [
      ["Laravel", "./img/skills/laravel.png"],
      [".NET", "./img/skills/dotnet.png"],
      ["Node.js", "./img/skills/node.png"],
      ["Composer", "./img/skills/composer.png"],
      ["REST", "./img/skills/REST.png"],
    ],
    testing: [
      ["Vitest", ""], // FIXME:
      ["Playwright", "./img/skills/playwright.png"],
      ["Cypress", "./img/skills/cypress.png"],
      ["Testing Library", "./img/skills/testing-library.png"],
    ],
    vcs: [["git", "./img/skills/git.png"]],
    "data bases": [
      ["Postgre SQL", "./img/skills/postgres.png"],
      ["Maria DB", "./img/skills/mariadb.png"],
      ["SQL Server", "./img/skills/sqlserver.png"],
      ["SQLite", "./img/skills/sqlite.png"],
      ["Mongo DB", "./img/skills/mongodb.png"],
    ],
    cms: [
      ["Wordpress", "./img/skills/wordpress.png"],
      ["Drupal", "./img/skills/drupal.png"],
    ],
    cloud: [
      ["Firebase", "./img/skills/firebase.png"],
      ["Netlify", "./img/skills/netlify.png"],
      ["Azure", "./img/skills/azure.png"],
    ],
  };

  get<U extends keyof Store>(key: U) {
    return this[key];
  }
}
