import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'isk-skillset',
  template: `
    @let title = skillset()[0];
    @let src = skillset()[1];

    <ng-container >
      <img
        class="h-15 mix-blend-multiply rounded-lg"
        [src]="src"
        [alt]="[title + ' logo']" />
      <p class="pt-1.5 text-sm text-center wrap-break-word">
        <span class="text-center"> {{ title }} </span>
      </p>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skillset {
  readonly skillset = input.required<[string, string, 1 | 2 | 3]>(); // DUMMY
}
