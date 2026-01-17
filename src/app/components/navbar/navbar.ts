import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '@app/data/store';

@Component({
  selector: 'isk-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  navbar = store.getNavbar;
  // faBars = faBars; FIXME:

  hashIt = Shared.hashIt;
}
