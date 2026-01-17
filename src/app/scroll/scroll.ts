import { ChangeDetectionStrategy, Component } from '@angular/core';
import { store } from '@app/app-store';
import { hashIt } from '@app/utils/string-utils';

@Component({
	selector: 'isk-scroll',
	templateUrl: './scroll.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Scroll {
	scroll = store.getScroll;
	navbar = store.getNavbar;

	// faChevronUp = faChevronUp; FIXME:
	hashIt = hashIt;
}
