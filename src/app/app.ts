import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Follow } from './components/follow/follow';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Scroll } from './components/scroll/scroll';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'isk-root',
  templateUrl: './app.html',
  imports: [Navbar, Follow, Footer, Scroll, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
