import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Divider } from '@app/divider/divider';
import { openLink } from '../../utils/nav-utils';

// FIXME: Se está usando realmente?

@Component({
	selector: 'isk-portfolio-modal',
	templateUrl: './portfolio-modal.html',
	imports: [Divider],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioModal {
	// prop -> to <isk-divider> Input()
	divider = 'divider-dark';

	// prop <- from <isk-portfolio>
	modal = input<any>();

	// {
	// 	title: string;
	// 	id: string;
	// 	label: string;
	// 	src: string;
	// 	alt: string;
	// };

	// faTimes = faTimes; FIXME:
	openLink = openLink;
}
