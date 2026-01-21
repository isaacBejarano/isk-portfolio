import {
	ChangeDetectionStrategy,
	Component,
	inject,
	input,
	signal,
} from "@angular/core";
import { Divider } from "@app/divider/divider";
import { StoreService } from "@app/store-service";

@Component({
	selector: "isk-featured",
	templateUrl: "./featured.html",
	imports: [Divider],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Featured {
	// DI
	private readonly _storeSrv = inject(StoreService);

	// CTRL
	protected readonly items = signal(this._storeSrv.get("portfolio").items);
	readonly recent = input.required<string>();

	// portfolioItems = store.getPortfolioItems; // common + modal8
	// portfolioCommon = store.getPortfolioCommon; // common + modal8

	// faPlus = faPlus; FIXME:
	// faTimes = faTimes; FIXME:
	getLast<T>(items: T[]): T {
		return items[items.length - 1];
	}
}
