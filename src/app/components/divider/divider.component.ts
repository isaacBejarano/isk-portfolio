import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
})
export class DividerComponent {
  @Input() color: string;

  faStar = faStar;
}
