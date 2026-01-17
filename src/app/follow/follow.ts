import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { store } from '@app/app-store';
import { openLink } from '@app/utils/nav-utils';

@Component({
	selector: 'isk-follow',
	templateUrl: './follow.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Follow {
	follow = store.getFollow;
	@Input() showFollow = true;
	@Input() css = '';

	openLink = openLink;

	// faLinkedin = faLinkedin; FIXME:
	// faGithub = faGithub; FIXME:
}
