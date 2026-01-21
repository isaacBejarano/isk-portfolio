import {
	ChangeDetectionStrategy,
	Component,
	inject,
	signal,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Follow } from "@app/follow/follow";
import { Footer } from "@app/footer/footer";
import { Navbar } from "@app/header/header";
import { StoreService } from "./store-service";

@Component({
	selector: "isk-root",
	templateUrl: "./app.html",
	imports: [Navbar, Follow, Footer, RouterOutlet],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
	// DI
	private readonly _storeSrv = inject(StoreService);

	// CTRL
	protected readonly follow = signal(this._storeSrv.get("follow"));
}
