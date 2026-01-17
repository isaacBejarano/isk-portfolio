import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'isk-divider',
  templateUrl: './divider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {
  @Input() color: string;

  // faStar = faStar; FIXME:
}
