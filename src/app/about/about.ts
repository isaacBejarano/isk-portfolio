import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

const name = 'Isaac Bejarano';

@Component({
  selector: 'isk-about',
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Masterhead {
  // DUMMY
  readonly about = input.required<StoreAbout>();

  protected readonly imgAlt = signal(`Picture of ${name}`);

  protected icongAlt(tech: string): string {
    return `${tech} logo`;
  }

  protected items(width: number): { id: number }[] {
    const items = [];
    for (let i = 0; i < width; i++) {
      items.push({ id: i + 1 });
    }
    return items;
  }
}
