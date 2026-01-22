import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
	selector: "isk-portfolio-item",
	templateUrl: "./portfolio-item.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioItem {
	item = input.required<StorePortfolioItemized>(); // DUMMY
}
