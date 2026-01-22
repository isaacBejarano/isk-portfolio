import { ChangeDetectionStrategy, Component, input } from "@angular/core";

import { hashIt } from "@app/utils/string-utils";

@Component({
	selector: "isk-scroll",
	templateUrl: "./scroll.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Scroller {
	// DUMMY
	readonly scrolling = input.required<boolean>();
	readonly navbar = input.required<StoreNav>();
	hashIt = hashIt;
}
