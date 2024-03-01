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

  // TOP SKILLS
  skillsLang = store.getSkillsLang as object;
  skillsJS = store.getSkillsJS as object;
  // skillsPHP = store.getSkillsPHP as object;
  skillsCSS = store.getSkillsCSS as object;
  skillsDB = store.getSkillsDB as object;
  XaaS = store.getSkillsXaaS as object;
  techniques = store.getSkillsTechniques as object;
  packages = store.getSkillsPackages as object;
  wordpress = store.getSkillsWordpress as object;
  git = store.getSkillsGit as object;
  TDD = store.getSkillsTDD as object;
  state = store.getSkillsState as object;
  webpack = store.getSkillsWebpack as object;

  // SKILLS
  skillsLang_basic = store.getSkillsLang_basic as object;
  skillsJS_basic = store.getSkillsJS_basic as object;
  skillsPHP_basic = store.getSkillsPHP_basic as object;
  skillsCSS_basic = store.getSkillsCSS_basic as object;
  skillsDB_basic = store.getSkillsDB_basic as object;
  XaaS_basic = store.getSkillsXaaS_basic as object;
  techniques_basic = store.getSkillsTechniques_basic as object;
  packages_basic = store.getSkillsPackages_basic as object;
  wordpress_basic = store.getSkillsWordpress_basic as object;
  git_basic = store.getSkillsGit_basic as object;
  TDD_basic = store.getSkillsTDD_basic as object;
  state_basic = store.getSkillsState_basic as object;
  webpack_basic = store.getSkillsWebpack_basic as object;

  constructor() {}

  ngOnInit(): void {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
}
