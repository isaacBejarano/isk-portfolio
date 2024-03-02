import { Component, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss'],
})
export class PortfolioItemComponent {
  // props  <- from <app-home>
  @Input() item: {
    target: string;
    src: string;
    alt: string;
    tech: string[];
    // ...
  };

  faPlus = faPlus;
}
