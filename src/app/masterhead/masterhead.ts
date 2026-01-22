import { ChangeDetectionStrategy, Component, input } from "@angular/core";

import { Divider } from "@app/divider/divider";

@Component({
	selector: "isk-masterhead",
	templateUrl: "./masterhead.html",
	imports: [Divider],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Masterhead {
	// DUMMY
	readonly masterhead = input.required<StoreMasterhead>();
}
