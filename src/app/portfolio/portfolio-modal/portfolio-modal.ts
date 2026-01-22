import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Divider } from "@app/divider/divider";
import { isOpenLink } from "../../utils/nav-utils";

// FIXME: Se está usando realmente?

@Component({
	selector: "isk-portfolio-modal",
	templateUrl: "./portfolio-modal.html",
	imports: [Divider],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioModal {
	// DUMMY
	readonly item = input.required<StorePortfolioItemized>();
	isOpenLink = isOpenLink;
}
