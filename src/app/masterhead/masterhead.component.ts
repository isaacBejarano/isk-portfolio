import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masterhead',
  templateUrl: './masterhead.component.html',
  styleUrls: ['./masterhead.component.scss'],
})
export class MasterheadComponent implements OnInit {
  name = 'Isaac Bejarano';
  title = 'Web Developer - Full Stack - MEAN - LAMP';
  constructor() {}

  ngOnInit(): void {}
}
