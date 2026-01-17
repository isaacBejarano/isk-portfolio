import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Shared } from '../../../../utils/shared';
import { Divider } from '@app/components/divider/divider';

// FIXME: Se está usando realmente?

@Component({
  selector: 'isk-portfolio-modal',
  templateUrl: './portfolio-modal.html',
  styleUrls: ['./portfolio-modal.css'],
  imports: [Divider],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioModal {
  // prop -> to <isk-divider> Input()
  divider = 'divider-dark';

  // prop <- from <isk-portfolio>
  @Input() modal: {
    title: string;
    id: string;
    label: string;
    src: string;
    alt: string;
    // ...
  };

  // faTimes = faTimes; FIXME:
  openLink = Shared.openLink;
}
