type Anchor = 'about' | 'portfolio' | 'technologies' | 'footer' | 'header';
type StoreNav = {
  src: string;
  alt: string;
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

// Biome --> Exception to correctness.noUnusedVariables -> vars/types with underscore
type _StoreSchema = {
  navbar: StoreNav;
  follow: StoreFollow;
  footer: StoreFooter;
  about: StoreAbout;
  portfolio: StorePortfolio;
  skills: StoreSkills;
};
