import { ChangeDetectionStrategy, Component } from '@angular/core';
import { store } from '@app/app-store';
import { Divider } from '@app/divider/divider';
import { ReversePipe } from '@app/pipes/reverse-pipe';
import { openLink } from '../utils/nav-utils';

@Component({
	selector: 'isk-portfolio',
	templateUrl: './portfolio.html',
	imports: [Divider, ReversePipe],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
	// prop -> to <isk-divider> Input()
	divider = 'divider-light';

	portfolioCommon = store.getPortfolioCommon;
	portfolioItems = store.getPortfolioItems;

	openLink = openLink;
}
