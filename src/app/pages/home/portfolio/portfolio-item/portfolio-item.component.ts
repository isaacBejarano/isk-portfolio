import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'isk-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioItemComponent {
  // props  <- from <isk-home>
  @Input() item: {
    target: string;
    src: string;
    alt: string;
    tech: string[];
    // ...
  };

  // faPlus = faPlus; FIXME:
}
