import { ChangeDetectionStrategy, Component, input } from "@angular/core";

import { openLink } from "@app/utils/nav-utils";

@Component({
	selector: "isk-follow",
	templateUrl: "./follow.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Follow {
	// DUMMY
	readonly showFollow = input.required<boolean>();
	readonly css = input.required<string>();
	readonly follow = input.required<{ link1: string; link2: string }>();
	openLink = openLink;
}
