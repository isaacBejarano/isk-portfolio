type StoreNav = {
	home: string;
	src: string;
	alt: string;
	hamburger: string;
	page1: string;
	page2: string;
	page3: string;
};

type StoreFollow = { link1: string; link2: string };

type StoreFooter = {
	tool: string;
	theme: string;
	link1: string;
	link2: string;
	license: string;
	copyright: string;
};

type StoreScroll = { show: boolean };

type StoreMasterhead = {
	src: string;
	alt: string;
	name: string;
	title: string;
};

type StorePortfolio = {
	common: Record<string, string>;
	items: StorePortfolioItemized[];
};

type StorePortfolioItemized = {
	title: string;
	target: string;
	id: string;
	label: string;
	src: string;
	alt: string;
	type: string;
	tech: string[];
	//
	// algorithms?: { link: string; js: string }[]; // FIXME: remove
	p1?: string;
	link1?: string;
	link2?: string;
	repo?: string;
	host?: string;
};

type StoreSkills = {
	lang: string[][];
	environment: string[][];
	frontend: string[][];
	backend: string[][];
	testing: string[][];
	vcs: string[][];
	db: string[][];
	cms: string[][];
	cloud: string[][];
};

type Stored = {
	navbar: StoreNav;
	follow: StoreFollow;
	footer: StoreFooter;
	scroll: StoreScroll;
	masterhead: StoreMasterhead;
	recent: string;
	portfolio: StorePortfolio;
	skills: StoreSkills;
};

export type {
	Stored,
	//
	StoreNav,
	StoreFollow,
	StoreFooter,
	StorePortfolioItemized,
};
