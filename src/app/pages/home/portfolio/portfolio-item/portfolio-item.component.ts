import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss'],
  standalone: false,
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

  // faPlus = faPlus; FIXME:
}
