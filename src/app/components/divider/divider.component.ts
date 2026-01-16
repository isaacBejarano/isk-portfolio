import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  standalone: false,
})
export class DividerComponent {
  @Input() color: string;

  // faStar = faStar; FIXME:
}
