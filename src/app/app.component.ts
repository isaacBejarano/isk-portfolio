import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FollowComponent } from './components/follow/follow.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'isk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    NavbarComponent,
    FollowComponent,
    // PortfolioItemComponent,
    // PortfolioModalComponent,
    // ReversePipe,
    FooterComponent,
    ScrollComponent,
    RouterOutlet,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
