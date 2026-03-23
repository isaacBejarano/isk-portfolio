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

type StoreAbout = { role: string; specialist: string } & Img;

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

// Models
////

type ArticleStock = { stock: number; articleCurrency: Currency };
type Currency = 'EUR' | 'USD';
type Locale = 'es-ES' | 'en-US';

// HTML attrs.
////

type ImgExtension = 'webp' | 'png';

// UI
////

type BtnStyleBase =
  | 'emerald-outlined'
  | 'rose-outlined'
  | 'amber-outlined'
  | 'gray-outlined'
  | 'disabled-gray-outlined'
  | 'pink-link'
  | 'slate-link';

// Navigation
////

type AppRouteSatic =
  | ''
  | 'login'
  | 'register'
  | 'article/list'
  | 'article/create'
  | 'logout'
  | '**';
type AppRouteDynamic = `article/${number | ':id'}`; // with path variable
type AppRoutePaths = { path: AppRouteSatic | AppRouteDynamic };

// API
////

type Env = { api: string; credentialsPayloadUnit: CredentialsPayload };
type CredentialsPayload = {
  username: string;
  password: CredentialsDefaulPassword;
};
type CredentialsDefaulPassword = 'SECRET'; // remove by 'string' when in real env
type LoginResponse = RegisterResponse & { token: string };
type RegisterResponse = { msg: string };

// Interceptors
////

type SnackIcons = 'icon-warning' | 'icon-check';
type ProgressbarPercent = 0 | 25 | 50 | 75 | 100;
