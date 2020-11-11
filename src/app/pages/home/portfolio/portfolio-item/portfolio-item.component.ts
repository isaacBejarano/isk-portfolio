import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
})
export class PortfolioItemComponent {
  // passed in props
  @Input() inProps: {
    id: string;
    target: string;
    src: string;
    alt: string;
  };

  constructor() {}
}
