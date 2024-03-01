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
  skillsJS = store.getSkillsJS;
  // skillsPHP = store.getSkillsPHP as object;
  skillsCSS = store.getSkillsCSS;
  skillsDB = store.getSkillsDB;
  XaaS = store.getSkillsXaaS;
  techniques = store.getSkillsTechniques;
  packages = store.getSkillsPackages;
  wordpress = store.getSkillsWordpress;
  git = store.getSkillsGit;
  TDD = store.getSkillsTDD;
  state = store.getSkillsState;
  webpack = store.getSkillsWebpack;

  // SKILLS
  skillsLang_basic = store.getSkillsLang_basic;
  skillsJS_basic = store.getSkillsJS_basic;
  skillsPHP_basic = store.getSkillsPHP_basic;
  skillsCSS_basic = store.getSkillsCSS_basic;
  skillsDB_basic = store.getSkillsDB_basic;
  XaaS_basic = store.getSkillsXaaS_basic;
  techniques_basic = store.getSkillsTechniques_basic;
  packages_basic = store.getSkillsPackages_basic;
  wordpress_basic = store.getSkillsWordpress_basic;
  git_basic = store.getSkillsGit_basic;
  TDD_basic = store.getSkillsTDD_basic;
  state_basic = store.getSkillsState_basic;
  webpack_basic = store.getSkillsWebpack_basic;

  ngOnInit(): void {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
}
