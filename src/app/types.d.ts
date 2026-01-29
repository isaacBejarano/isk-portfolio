type Anchor = 'about' | 'new' | 'portfolio' | 'technologies';
type StoreNav = {
  // home: string; // FIXME:
  src: string;
  alt: string;
  // hamburger: string; // FIXME:
  anchor0: Anchor;
  anchor1: Anchor;
  anchor2: Anchor;
  anchor3: Anchor;
  anchor4: Anchor;
};

type StoreFollow = { link1: string; link2: string };

type StoreFooter = {
  tools: string[][];
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
  masterhead: StoreMasterhead;
  featured: string;
  portfolio: StorePortfolio;
  skills: StoreSkills;
};
