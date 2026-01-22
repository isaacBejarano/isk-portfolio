import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Follow } from "@app/follow/follow";
import { Footer } from "@app/footer/footer";
import { Header } from "@app/header/header";
import { Store } from "./store-model";

@Component({
	selector: "isk-root",
	templateUrl: "./app.html",
	imports: [Header, Follow, Footer, RouterOutlet],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
	// MODEL
	private readonly _model = new Store();

	// CTRL
	protected readonly navbar = signal<StoreNav>(this._model.get("navbar"));
	protected readonly follow = signal<StoreFollow>(this._model.get("follow"));
	protected readonly scrolling = signal<boolean>(this._model.get("scrolling"));
	protected readonly footer = signal<StoreFooter>(this._model.get("footer"));
}
