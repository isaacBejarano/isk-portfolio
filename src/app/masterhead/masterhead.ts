import { ChangeDetectionStrategy, Component } from '@angular/core';
import { store } from '@app/app-store';
import { Divider } from '@app/divider/divider';

@Component({
	selector: 'isk-masterhead',
	templateUrl: './masterhead.html',
	imports: [Divider],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Masterhead {
	// prop -> to <isk-divider> Input()
	divider = 'divider-light';

	masterhead = store.getMasterhead;
}
