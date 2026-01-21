// local types
type Portfolied = { common: PortfolioIndexed; items: PortfolioItemized[] };
type PortfolioIndexed = Record<string, string>;
type PortfolioItemized = {
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

export type { Portfolied, PortfolioIndexed, PortfolioItemized };
