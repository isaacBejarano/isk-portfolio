import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Follow } from '@app/follow/follow';
import { Footer } from '@app/footer/footer';
import { Navbar } from '@app/header/header';

@Component({
	selector: 'isk-root',
	templateUrl: './app.html',
	imports: [Navbar, Follow, Footer, RouterOutlet],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
	lol = '';
}
