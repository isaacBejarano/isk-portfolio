import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'isk-skillset',
  template: `
    @let name = skillset()[0];
    @let src = skillset()[1];

    <li class="min-w-max p-2 flex flex-col items-center border border-amber-400 rounded-sm bg-linear-to-br from-gray-400 to-white">
      <img
        class="h-15 mix-blend-multiply rounded-lg"
        [src]="src"
        data-toggle="tooltip"
        data-placement="bottom"
        [title]="name"
        [alt]="name" />
      <p class="pt-1.5 text-sm text-center wrap-break-word">
        <span class="text-center"> {{ name }} </span>
      </p>
    </li>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skillset {
  readonly skillset = input.required<[string, string, 1 | 2 | 3]>(); // DUMMY
}
