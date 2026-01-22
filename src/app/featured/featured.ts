import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Divider } from "@app/divider/divider";
import { getLast } from "@app/utils/array-utils";

@Component({
	selector: "isk-featured",
	templateUrl: "./featured.html",
	imports: [Divider],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Featured {
	// DUMMY
	readonly lastItem = input.required<StorePortfolioItemized>();
	readonly featured = input.required<string>();
	getLast = getLast;
}
