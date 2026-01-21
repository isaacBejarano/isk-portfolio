import {
	ChangeDetectionStrategy,
	Component,
	DOCUMENT,
	inject,
	type OnInit,
	signal,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { store } from "@app/app-store";
import { Scroller } from "@app/scroll/scroll";
import { hashIt } from "@app/utils/string-utils";

@Component({
	selector: "isk-header",
	templateUrl: "./header.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, Scroller],
})
export class Navbar implements OnInit {
	navbar: Record<string, string> = store.getNavbar;
	// faBars = faBars; FIXME:
	hashIt = hashIt;

	// DI
	private readonly _doc = inject(DOCUMENT).defaultView;
	protected readonly collapsed = signal(true);

	// CTRL
	////

	ngOnInit(): void {
		this.toggle(true);
	}

	protected toggle(init: boolean) {
		const md = parseInt(this._doc.visualViewport.width.toFixed(0), 10);
		if (md < 768) this.collapsed.update((v) => (init ? true : !v));
		else this.collapsed.set(false);
	}
}
