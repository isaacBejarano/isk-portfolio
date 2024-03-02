import { Component, Input } from '@angular/core';
import { Shared } from '../../../../utils/shared';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.scss'],
})
export class PortfolioModalComponent {
  // prop -> to <app-divider> Input()
  divider = 'divider-dark';

  // prop <- from <app-portfolio>
  @Input() modal: {
    title: string;
    id: string;
    label: string;
    src: string;
    alt: string;
    // ...
  };

  faTimes = faTimes;
  openLink = Shared.openLink;
}
