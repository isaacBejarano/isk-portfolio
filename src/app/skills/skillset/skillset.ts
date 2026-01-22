import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "isk-skillset",
  template: `
    @let name = skillset()[0];
    @let src = skillset()[1];

    <!-- <li class="flex flex-col border border-amber-400 rounded-sm bg-white p-2"> -->
    <li class="min-w-max p-2 flex flex-col items-center border border-amber-400 rounded-sm bg-white">
        <!-- class="block h-15 self-center rounded-lg mix-blend-multiply" -->
      <img
        class="h-15 mix-blend-multiply rounded-lg"
        [src]="src"
        data-toggle="tooltip"
        data-placement="bottom"
        [title]="name"
        [alt]="name" />
      <!-- <p class="max-w-[100%]"> -->
      <p class="pt-1.5 text-sm text-center wrap-break-word">
        <span class="text-center"> {{ name }} </span>
      </p>
    </li>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skillset {
  readonly skillset = input.required<string[]>(); // DUMMY
}
