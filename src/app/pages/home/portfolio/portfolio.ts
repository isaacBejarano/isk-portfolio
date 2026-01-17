import { ChangeDetectionStrategy, Component } from "@angular/core";
import { store } from "@app/app-store";
import { Divider } from "@app/components/divider/divider";
import { openLink } from "../../../utils/nav-utils";

@Component({
	selector: "isk-portfolio",
	templateUrl: "./portfolio.html",
	imports: [Divider],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
	// prop -> to <isk-divider> Input()
	divider = "divider-light";

	portfolioCommon = store.getPortfolioCommon;
	portfolioItems = store.getPortfolioItems;

	openLink = openLink;

	constructor() {}
}
