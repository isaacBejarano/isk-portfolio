import { ChangeDetectionStrategy, Component } from "@angular/core";
import { store } from "@app/app-store";
import { openLink } from "../../utils/nav-utils";

@Component({
	selector: "isk-footer",
	templateUrl: "./footer.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
	footer = store.getFooter;
	year = new Date().getFullYear();

	openLink = openLink;
}
