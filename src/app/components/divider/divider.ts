import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'isk-divider',
  templateUrl: './divider.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Divider {
  @Input() color: string;

  // faStar = faStar; FIXME:
}
