import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "isk-divider",
  templateUrl: "./divider.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Divider {
  readonly css = input.required<string>(); // DUMMY
}
