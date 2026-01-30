type Anchor = 'about' | 'portfolio' | 'technologies';
type StoreNav = {
  // home: string; // FIXME:
  src: string;
  alt: string;
  // hamburger: string; // FIXME:
  anchor0: Anchor;
  anchor1: Anchor;
  anchor2: Anchor;
  anchor3: Anchor;
};

type StoreFollow = { link1: string; link2: string };

type StoreFooter = {
  tools: string[][];
  copyright: string;
};

type Img = {
  title: string;
  src: string;
  alt: string;
};

type StoreAbout = { legend: string } & Img;

type StorePortfolio = {
  common: StorePortfolioCommon;
  items: StorePortfolioItemized[];
};

type StorePortfolioCommon = {
  star: string;
  visit: string;
  live: string;
};

type StorePortfolioItemized = {
  id: number;
  alt: string;
  tech: string[];
  description: string;
  year: number;
  repo?: string;
  link1?: string;
  link2?: string;
  host?: string;
} & Img;

type SkillNames =
  | 'languages'
  | 'environment'
  | 'frontend'
  | 'backend'
  | 'package managers'
  | 'testing'
  | 'vcs'
  | 'data bases'
  | 'cms'
  | 'cloud';

type StoreSkills = Record<SkillNames, [string, string, 1 | 2 | 3][]>;

type Stored = {
  navbar: StoreNav;
  follow: StoreFollow;
  footer: StoreFooter;
  about: StoreAbout;
  portfolio: StorePortfolio;
  skills: StoreSkills;
};
