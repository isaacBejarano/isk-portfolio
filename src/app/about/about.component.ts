import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  title = 'about';

  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
