import { ChangeDetectionStrategy, Component, input } from "@angular/core";

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
	item = input<unknown>();

	// faPlus = faPlus; FIXME:
}
