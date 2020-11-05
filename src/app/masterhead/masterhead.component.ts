import { Component } from '@angular/core';

@Component({
  selector: 'app-masterhead',
  templateUrl: './masterhead.component.html',
  styleUrls: ['./masterhead.component.scss'],
})
export class MasterheadComponent {
  src = '../../assets/img/portfolio/Isaac-bejarano-s4.jpg';
  alt = 'Isaac Bejarano photo';
  name = 'Isaac Bejarano';
  title = 'Web Developer - Full Stack - MEAN - LAMP';

  constructor() {}
}
