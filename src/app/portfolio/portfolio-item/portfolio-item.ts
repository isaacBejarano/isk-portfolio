import { ChangeDetectionStrategy, Component, input } from "@angular/core";

import type { StorePortfolioItemized } from "@app/types";

@Component({
	selector: "isk-portfolio-item",
	templateUrl: "./portfolio-item.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioItem {
	// props  <- from <isk-home>
	//  {
	//     target: string;
	//     src: string;
	//     alt: string;
	//     tech: string[];
	//   }
	item = input.required<StorePortfolioItemized>();

	// faPlus = faPlus; FIXME:
}
