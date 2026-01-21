import { ChangeDetectionStrategy, Component } from "@angular/core";
import { store } from "@app/app-store";
import { openLink } from "../utils/nav-utils";

@Component({
	selector: "isk-footer",
	templateUrl: "./footer.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
	protected readonly footer = store.getFooter;
	protected readonly year = new Date().getFullYear();
	openLink = openLink;
}
