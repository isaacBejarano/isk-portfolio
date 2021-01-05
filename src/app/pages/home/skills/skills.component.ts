import { Component, OnInit } from '@angular/core';
import { store } from '../../../store/store';

// declare var $: JQuery;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  divider = 'divider-dark'; // -> <app-divider> Input()

  skillsJS = store.getSkillsJS as any;
  skillsCSS = store.getSkillsCSS as any;
  skillsDB = store.getSkillsDB as any;

  constructor() {}

  ngOnInit(): void {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
}
