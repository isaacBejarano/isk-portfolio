import { ChangeDetectionStrategy, Component } from "@angular/core";

import { store } from "@app/app-store";
import { Divider } from "@app/divider/divider";
import { ReversePipe } from "@app/pipes/reverse-pipe";
import { PortfolioItem } from "@app/portfolio/portfolio-item/portfolio-item";
import { PortfolioModal } from "@app/portfolio/portfolio-modal/portfolio-modal";
import { openLink } from "@app/utils/nav-utils";

@Component({
	selector: "isk-portfolio",
	templateUrl: "./portfolio.html",
	imports: [Divider, ReversePipe, PortfolioModal, PortfolioItem],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
	// prop -> to <isk-divider> Input()
	divider = "divider-light";

	portfolioCommon = store.getPortfolioCommon;
	portfolioItems = store.getPortfolioItems as unknown;

	openLink = openLink;
}
