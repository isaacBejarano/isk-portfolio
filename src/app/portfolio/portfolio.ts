import {
	ChangeDetectionStrategy,
	Component,
	inject,
	signal,
} from "@angular/core";

import { Divider } from "@app/divider/divider";
import { ListReversePipe } from "@app/pipes/list-reverse-pipe";
import { PortfolioItem } from "@app/portfolio/portfolio-item/portfolio-item";
import { PortfolioModal } from "@app/portfolio/portfolio-modal/portfolio-modal";
import { StoreService } from "@app/store-service";
import { openLink } from "@app/utils/nav-utils";

@Component({
	selector: "isk-portfolio",
	templateUrl: "./portfolio.html",
	imports: [Divider, ListReversePipe, PortfolioModal, PortfolioItem],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
	// DI
	private readonly _storeSrv = inject(StoreService);

	// CTRL
	portfolio = signal(this._storeSrv.get("portfolio"));

	// prop -> to <isk-divider> Input()
	openLink = openLink;
	divider = "divider-light";
}
