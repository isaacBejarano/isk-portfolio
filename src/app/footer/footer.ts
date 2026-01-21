import { ChangeDetectionStrategy, Component, input } from "@angular/core";

import type { StoreFooter } from "@app/types";
import { openLink } from "../utils/nav-utils";

@Component({
	selector: "isk-footer",
	templateUrl: "./footer.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
	// DUMMY
	readonly footer = input.required<StoreFooter>();
	protected readonly year = new Date().getFullYear();
	openLink = openLink;
}
