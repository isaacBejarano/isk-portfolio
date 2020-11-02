import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
})
export class ScrollComponent implements OnInit {
  icon = 'fa fa-chevron-up';

  constructor() {}

  ngOnInit(): void {}
}
