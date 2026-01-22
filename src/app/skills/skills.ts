import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Divider } from "@app/divider/divider";
import { Skillset } from "@app/skills/skillset/skillset";

@Component({
  selector: "isk-skills",
  templateUrl: "./skills.html",
  imports: [Divider, Skillset],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  // DUMMY
  readonly skills = input.required<StoreSkills>();
  protected readonly skillNames: SkillNames[] = [
    "environment",
    "frontend",
    "backend",
    "testing",
    "vcs",
    "data bases",
    "cms",
    "cloud",
  ];
}
