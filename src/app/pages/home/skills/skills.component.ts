import { Component, OnInit } from '@angular/core';
import { store } from '../../../store/store';

declare let $: any; // fixes B4 tooltip() type conflict

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  divider = 'divider-dark'; // -> <app-divider> Input()

  skillsLang = store.getSkillsLang as object;
  skillsJS = store.getSkillsJS as object;
  skillsCSS = store.getSkillsCSS as object;
  skillsPHP = store.getSkillsPHP as object;
  skillsDB = store.getSkillsDB as object;
  techniques = store.getTechniques as object;
  packages = store.getPackages as object;
  wordpress = store.getWordpress as object;
  XaaS = store.getXaaS as object;
  git = store.getGit as object;
  TDD = store.getTDD as object;
  state = store.getState as object;
  webpack = store.getWebpack as object;

  constructor() {}

  ngOnInit(): void {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
}
