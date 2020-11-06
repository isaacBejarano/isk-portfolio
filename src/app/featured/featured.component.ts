import { Component } from '@angular/core';
import { Shared } from '../utils/shared';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent {
  title = 'Culex';
  subtitle = 'ES5 library to make HTTP requests';
  id = 'culex-pic';
  src = 'assets/img/portfolio/culex.png';
  alt = 'culex github repo';
  link = 'https://github.com/isaacBejarano/culex.js';
  linkText = 'Github';
  p1 =
    'Culex.js is an easy-to-use and lightweight ES5 library \
    to fetch JSON data from RESTful APIs. Visit this repository at';
  p2 = 'and give it a "star" if you enjoyed Culex.js.';
  p3 = 'Disclaimer: the library is still in beta phase.';

  constructor() {}

  // methods
  openLink(): boolean {
    return Shared.openLink();
  }
}
