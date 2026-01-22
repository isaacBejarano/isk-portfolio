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

type StoreMasterhead = {
	src: string;
	alt: string;
	name: string;
	title: string;
};

type StorePortfolio = {
	common: StoreCommon;
	items: StorePortfolioItemized[];
};

type StoreCommon = {
	star: string;
	visit: string;
	dontforget: string;
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
	p2?: string;
	link1?: string;
	link2?: string;
	repo?: string;
	host?: string;
};

type SkillNames =
	| "languages"
	| "environment"
	| "frontend"
	| "backend"
	| "testing"
	| "vcs"
	| "data bases"
	| "cms"
	| "cloud";

type StoreSkills = Record<SkillNames, string[][]>;

type Stored = {
	navbar: StoreNav;
	follow: StoreFollow;
	footer: StoreFooter;
	scrolling: boolean;
	masterhead: StoreMasterhead;
	featured: string;
	portfolio: StorePortfolio;
	skills: StoreSkills;
};
