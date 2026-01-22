import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
	selector: "isk-skillset",
	template: `
    @let name = skillset[0];
    @let src = skillset[1];

    <li class="flex border border-amber-400 rounded-sm bg-white p-2">
      <img
        class="w-15 self-center rounded-lg mix-blend-multiply"
        [src]="src"
        data-toggle="tooltip"
        data-placement="bottom"
        [title]="name"
        [alt]="name" />
      <p>{{ name }}</p>
    </li>
  `,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skillset {
	readonly skillset = input.required<string[]>(); // DUMMY
}
