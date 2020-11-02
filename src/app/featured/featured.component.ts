import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  title = 'Culex';
  subtitle = 'ES5 library to make HTTP requests';
  paragraphPart1 =
    'Culex.js is an easy-to-use and lightweight ES5 library \
    to fetch JSON data from RESTful APIs. Visit';
  paragraphPart2 = 'and give the repo a "star" if you enjoyed Culex.js.';
  paragraphPart3 = 'Disclaimer: the library is still in beta phase.';
  link = 'https://github.com/isaacBejarano/culex.js';
  constructor() {}

  ngOnInit(): void {}
}
