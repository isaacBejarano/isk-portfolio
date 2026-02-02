import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

import { Divider } from '@app/divider/divider';
import { Skillset } from '@app/skills/skillset/skillset';

@Component({
  selector: 'isk-skills',
  templateUrl: './skills.html',
  imports: [Divider, Skillset],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  // DUMMY
  ////

  readonly skills = input.required<StoreSkills>();

  protected readonly tierTitles = signal<string[]>([
    'Proficient in...',
    'Working Knowledge of...',
    'Exposed to...',
  ]);

  protected readonly skillNames: SkillNames[] = [
    'languages',
    'environment',
    'frontend',
    'backend',
    'package managers',
    'testing',
    'vcs',
    'data bases',
    'cms',
    'cloud',
  ];

  protected isOnlyTier(skills: [string, string, 1 | 2 | 3][], tier: number): boolean {
    const areExcludedTiers = skills.every((attrs) => !attrs.includes(tier as 1 | 2 | 3));
    return !areExcludedTiers;
  }
}
