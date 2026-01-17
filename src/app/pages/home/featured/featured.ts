import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { store } from "@app/app-store";
import { Divider } from "@app/components/divider/divider";

@Component({
	selector: "isk-featured",
	templateUrl: "./featured.html",
	imports: [Divider],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Featured {
	// props to Input()
	divider = "divider-dark";
	@Input() new: string;

	portfolioItems = store.getPortfolioItems; // common + modal8
	portfolioCommon = store.getPortfolioCommon; // common + modal8

	// faPlus = faPlus; FIXME:
	// faTimes = faTimes; FIXME:
}
