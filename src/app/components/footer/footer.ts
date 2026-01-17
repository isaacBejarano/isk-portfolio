import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '@app/data/store';

@Component({
  selector: 'isk-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  footer = store.getFooter;
  year = new Date().getFullYear();

  openLink = Shared.openLink;
}
