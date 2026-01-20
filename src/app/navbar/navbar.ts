import { ChangeDetectionStrategy, Component } from '@angular/core';
import { store } from '@app/app-store';
import { hashIt } from '@app/utils/string-utils';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'isk-navbar',
	templateUrl: './navbar.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink],
})
export class Navbar {
	navbar: Record<string, string> = store.getNavbar;
	// faBars = faBars; FIXME:

	hashIt = hashIt;
}
