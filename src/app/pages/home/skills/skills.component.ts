import { Component, OnInit } from '@angular/core';
import { store } from '@app/data/store';

declare let $: any; // fixes B4 tooltip() type conflict

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  divider = 'divider-dark'; // -> <app-divider> Input()

  // TOP SKILLS
  skillsLang = store.getSkillsLang;
  skillsFrontend = store.getSkillsFrontend;
  skillsBackend = store.getSkillsBackend;
  skillsCSS = store.getSkillsCSS;
  skillsDB = store.getSkillsDB;
  XaaS = store.getSkillsXaaS;
  techniques = store.getSkillsTechniques;
  packages = store.getSkillsPackages;
  wordpress = store.getSkillsWordpress;
  git = store.getSkillsGit;
  testing = store.getSkillsTDD;
  state = store.getSkillsState;
  skillsBundlers = store.getSkillsBundlers;
  skillsGameEngines = store.getSkillsGameEngines;
  skillsStack = store.getSkillsStack;

  ngOnInit(): void {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
}
