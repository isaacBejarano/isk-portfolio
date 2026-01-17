import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '@app/data/store';

@Component({
  selector: 'isk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  navbar = store.getNavbar;
  // faBars = faBars; FIXME:

  hashIt = Shared.hashIt;
}
