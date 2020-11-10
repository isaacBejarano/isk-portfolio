import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss'],
})
export class PortfolioItemComponent {
  // passed in
  @Input() inProps: {
    id: string;
    target: string;
    src: string;
    alt: string;
  };

  constructor() {}
}
