import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
	selector: "isk-portfolio-item",
	templateUrl: "./portfolio-item.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioItem {
	// props  <- from <isk-home>
	@Input() item: {
		target: string;
		src: string;
		alt: string;
		tech: string[];
		// ...
	};

	// faPlus = faPlus; FIXME:
}
