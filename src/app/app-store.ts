export type Indexed = Record<string, string>;
type Scroll = { show: boolean };
type PortfolioItems = Array<Record<string, string | string[] | Indexed[]>>;
type Portfolio = { common: Indexed; items: PortfolioItems };
type Skills = Record<string, string[][]>;
type Store = {
	// props
	navbar: Indexed;
	follow: Indexed;
	footer: Indexed;
	scroll: Scroll;
	masterhead: Indexed;
	new: string;
	portfolio: Portfolio;
	skills: Skills;
	// getters
	getNavbar: Indexed;
	getFollow: Indexed;
	getFooter: Indexed;
	getScroll: Scroll;
	getMasterhead: Indexed;
	getNew: string;
	getPortfolio: Portfolio;
	getPortfolioCommon: Indexed;
	getPortfolioItems: PortfolioItems;
	getSkillsLang: string[][];
	getSkillsStack: string[][];
	getSkillsFrontend: string[][];
	getSkillsBackend: string[][];
	getSkillsPHP: string[][];
	getSkillsCSS: string[][];
	getSkillsDB: string[][];
	getSkillsTechniques: string[][];
	getSkillsPackages: string[][];
	getSkillsWordpress: string[][];
	getSkillsXaaS: string[][];
	getSkillsGit: string[][];
	getSkillsTDD: string[][];
	getSkillsState: string[][];
	getSkillsBundlers: string[][];
	getSkillsGameEngines: string[][];
	setScrollShow: boolean;
};

export const store: Store = {
	// --> props
	// navbar
	navbar: {
		home: "home",
		src: "/img/portfolio/isaac-logo.png",
		alt: "isaac logo",
		hamburger: "menu",
		page1: "new",
		page2: "portfolio",
		page3: "technologies",
	},
	// follow
	follow: {
		link1: "https://www.linkedin.com/in/isaac-bejarano",
		link2: "https://github.com/isaacBejarano",
	},
	// footer
	footer: {
		tool: "Angular",
		theme: "Start Bootstrap Theme",
		link1: "https://angular.dev",
		link2:
			"https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE",
		license: "MIT",
		copyright: "Isaac Bejarano",
	},
	// scroll
	scroll: {
		show: false, // dafault
	},
	// masterhead
	masterhead: {
		src: "./img/portfolio/Isaac-bejarano-s4.jpg",
		alt: "Isaac Bejarano photo",
		name: "Isaac Bejarano",
		title: "Full Stack Developer",
	},
	// featured ~new
	new: "Responsive prototype with only HTML and CSS",
	// portfolio
	portfolio: {
		// common
		common: {
			star: 'and give it a "star".',
			stars: 'and give them a "star".',
			list: "Visit these repositories:",
			visit: "Visit this repository at",
			visits: "Visit these repositories at",
			dontforget: `Don't forget to see it live on`,
		},
		items: [
			// modal 1
			{
				title: "JavaScript Algorithms",
				target: "#portfolioModal7",
				id: "portfolioModal7",
				label: "portfolioModal7Lbabel",
				src: "portfolio/algorithms.png",
				alt: "JavaScript Algorithms project",
				algorithms: [
					{
						link: "https://github.com/isaacBejarano/price-down-breaker",
						js: "Down Breaker",
					},
					{
						link: "https://github.com/isaacBejarano/binary-search",
						js: "Binary Search",
					},
					{
						link: "https://github.com/isaacBejarano/quicksort",
						js: "Quick Sort",
					},
					{
						link: "https://github.com/isaacBejarano/is-int",
						js: "Is Int",
					},
					{
						link: "https://github.com/isaacBejarano/string-mirror",
						js: "String Mirror",
					},
					{
						link: "https://github.com/isaacBejarano/fibonacci-sequencer",
						js: "Fibonacci Sequencer",
					},
				],
				type: "D",
				tech: ["javascript"],
			},
			// modal 2
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
			// modal 3
			{
				title: "JavaScript Beer Rating Component",
				target: "#portfolioModal5",
				id: "portfolioModal5",
				label: "portfolioModal5Lbabel",
				src: "portfolio/beers.png",
				alt: "Javascript project",
				p1: 'UI for rating. It uses SASS and scalable algorithms to persist\
			  ":hover" and ":active" pseudo-classes.',
				link1: "https://github.com/isaacBejarano/rating-beers",
				link2: "https://codepen.io/eRoboto/pen/bGpKwgM",
				type: "B",
				repo: "Github",
				host: "Codepen",
				tech: ["css", "javascript"],
			},
			// modal 4
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
			// modal ~new is the last!
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
	},
	// technologies
	skills: {
		lang: [
			["HTML", "./img/skills/html.png"],
			["CSS", "./img/skills/css.png"],
			["JavaScript / ES6", "./img/skills/javascript.png"],
			["TypeScript", "./img/skills/typescript.png"],
			["C#", "./img/skills/c-sharp-logo.png"],
			["PHP", "./img/skills/php.png"],
			// ['F#', './img/skills/fsharp.png'],
		],
		getStack: [
			["Docker", "./img/skills/docker.png"],
			["IIS", "./img/skills/iis.png"],
			["Nginx", "./img/skills/nginx.png"],
			["Apache", "./img/skills/apache.png"],
			// ['LAMP', './img/skills/lamp.png'],
			// ['MEAN', './img/skills/mean.png'],
		],
		frontend: [
			["Angular", "./img/skills/angular.png"],
			["RxJS", "./img/skills/rxjs.png"],
			["Tailwind", ""], // FIXME:
			["Bootstrap", "./img/skills/bootstrap.png"],
			// ['Bulma', './img/skills/bulma.png'],
			// ['Angular Material', './img/skills/material.png'],
			// ['SASS', './img/skills/SASS.png'],
			// ['Vue', './img/skills/vue.png'],
			// ['Scully', './img/skills/scully.png'],
			// ['jQuery', './img/skills/jquery.png'],
			// ['Leaflet', './img/skills/leaflet.png'],
		],
		backend: [
			["Laravel", "./img/skills/laravel.png"],
			[".NET", "./img/skills/dotnet.png"],
			["Node.js", "./img/skills/node.png"],
			// ['REST', './img/skills/REST.png'],
			// ['Entity Framework Core', './img/skills/dotnetef.png'],
			// ['Express', './img/skills/express.png'],
			// ['Koa', './img/skills/koa.png'],
		],
		CSS: [
			// ['PureCSS', './img/skills/pureCSS.png'],
			// ['LESS', './img/skills/less.png'],
		],
		DB: [
			["Postgre SQL", "./img/skills/postgres.png"],
			["Maria DB", "./img/skills/mariadb.png"],
			["SQL Server", "./img/skills/sqlserver.png"],
			["SQLite", "./img/skills/sqlite.png"],
			// ['MySQL', './img/skills/mysql.png'],
			// ['Mongo DB', './img/skills/mongodb.png'],
		],
		techniques: [
			// ['REST', './img/skills/REST.png'],
			// ['AJAX', './img/skills/AJAX.png'],
		],
		packages: [
			["Node Package Manager", "./img/skills/npm.png"],
			["Composer", "./img/skills/composer.png"],
		],
		wp: [
			["Wordpress", "./img/skills/wordpress.png"],
			["Drupal", "./img/skills/drupal.png"],
			// ['Wordpress REST API', './img/skills/wp-rest-api.png'],
		],
		XaaS: [
			["Firebase", "./img/skills/firebase.png"],
			["Netlify", "./img/skills/netlify.png"],
			["Azure", "./img/skills/azure.png"],
		],
		version: [
			["git", "./img/skills/git.png"],
			// ['GitHub', './img/skills/github.png'],
		],
		testing: [
			["Vitest", ""], // FIXME:
			["Playwright", "./img/skills/playwright.png"],
			// ['Cypress', './img/skills/cypress.png'],
			// ['Testing Library', './img/skills/testing-library.png'],
		],
		bundlers: [
			["Vite", ""], // FIXME:
			["Parcel", "./img/skills/parcel.png"],
		],
		games: [
			// ['Unity', './img/skills/unity.png']
		],
	},

	// getters
	get getNavbar() {
		return this.navbar;
	},
	get getFollow() {
		return this.follow;
	},
	get getFooter() {
		return this.footer;
	},
	get getScroll() {
		return this.scroll;
	},
	get getMasterhead() {
		return this.masterhead;
	},
	get getNew() {
		return this.new;
	},
	get getPortfolio() {
		return this.portfolio;
	},
	get getPortfolioCommon() {
		return this.portfolio.common;
	},
	get getPortfolioItems() {
		return this.portfolio.items;
	},
	// TECH
	get getSkillsLang() {
		return this.skills.lang;
	},
	get getSkillsStack() {
		return this.skills.getStack;
	},
	get getSkillsFrontend() {
		return this.skills.frontend;
	},
	get getSkillsBackend() {
		return this.skills.backend;
	},
	get getSkillsPHP() {
		return this.skills.PHP;
	},
	get getSkillsCSS() {
		return this.skills.CSS;
	},
	get getSkillsDB() {
		return this.skills.DB;
	},
	get getSkillsTechniques() {
		return this.skills.techniques;
	},
	get getSkillsPackages() {
		return this.skills.packages;
	},
	get getSkillsWordpress() {
		return this.skills.wp;
	},
	get getSkillsXaaS() {
		return this.skills.XaaS;
	},
	get getSkillsGit() {
		return this.skills.version;
	},
	get getSkillsTDD() {
		return this.skills.testing;
	},
	get getSkillsState() {
		return this.skills.state;
	},
	get getSkillsBundlers() {
		return this.skills.bundlers;
	},
	get getSkillsGameEngines() {
		return this.skills.games;
	},

	// setters
	set setScrollShow(x: boolean) {
		this.scroll.show = x;
	},
};
