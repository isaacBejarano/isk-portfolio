import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title = 'portfolio';
  menu = '';
  page0 = 'culex';
  page1 = 'portfolio';
  page2 = 'about';
  page3 = 'contact';

  constructor() {}

  ngOnInit(): void {}
}
