import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Follow } from '@app/follow/follow';
import { Footer } from '@app/footer/footer';
import { Navbar } from '@app/navbar/header';
import { Scroll } from '@app/scroll/scroll';

@Component({
	selector: 'isk-root',
	templateUrl: './app.html',
	imports: [Navbar, Follow, Footer, Scroll, RouterOutlet],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
	lol = '';
}
