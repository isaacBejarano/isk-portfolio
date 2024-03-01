import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
})
export class DividerComponent {
  @Input() color: string;

  constructor() {}
}
