import { Component, Input } from '@angular/core';
import { Shared } from '../../../../utils/shared';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
})
export class PortfolioModalComponent {
  // prop -> to <app-divider> Input()
  divider = 'divider-dark';

  // prop <- from <app-portfolio>
  @Input() modalComp: {
    // modal.component
    id: string;
    label: string;
    title: string;
    src: string;
    alt: string;
  };

  // --> shared methods
  openLink = Shared.openLink;

  constructor() {}
}
