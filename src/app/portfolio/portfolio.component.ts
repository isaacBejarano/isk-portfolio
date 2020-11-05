import { Component } from '@angular/core';
import { Shared } from '../utils/shared';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  // common
  star = 'and give it a "star".';
  stars = 'and give them a "star".';

  // imgage 1
  img1 = 'portfolio/papiro.png';
  alt1 = 'Responsive Bootstrap project';
  title1 = 'Responsive Bootstrap';
  paragraphPart1 =
    'Responsive mobile-first web app made with Bootstrap and LESS. Visit';
  link1 = 'https://isaacbejarano.github.io/';

  // imgage 2
  img2 = 'portfolio/rockets.png';
  alt2 = 'Typescript project';
  title2 = 'Typescript';
  paragraphPart2 =
    'UI made with Typescript to create rockets and thrusters. Object Oriented Programmmig (OOP). Visit';
  link2 = 'https://github.com/isaacBejarano/ts-rockets';

  // imgage 3
  img3 = 'portfolio/joker.png';
  alt3 = 'AJAX + JQuery project';
  title3 = 'AJAX + JQuery';
  paragraphPart3 =
    'Web app using AJAX to fetch Chuck Norris jokes from open REST API. \
    Made with JQuery and Typescript. Visit';
  link3 = 'https://github.com/isaacBejarano/joker';

  // imgage 4
  img4 = 'portfolio/beers.png';
  alt4 = 'SASS + Javascript project';
  title4 = 'SASS + Javascript';
  paragraphPart4 =
    'UI for rating. It uses SASS and scalable algorithms to persist ":hover" and ":active" pseudo-classes. Visit';
  link4 = 'https://github.com/isaacBejarano/rating-beers';

  // imgage 5
  img5 = 'portfolio/restopolitan.png';
  alt5 = 'Leaflet project';
  title5 = 'Leaflet + AJAX';
  paragraphPart5 =
    'UI to fetch and filter API REST response in Leaflet maps. Made with Typescript and JQuery (AJAX). Visit';
  link5 = 'https://github.com/isaacBejarano/leaflet_filtres';

  // imgage 6
  img6 = 'portfolio/algorithms.png';
  alt6 = 'JavaScript Algorithms project';
  title6 = 'JavaScript Algorithms';
  paragraphPart6 = 'Usefull standard-agnostic JavaScript algorithms. Visit';
  link6a = 'https://github.com/isaacBejarano/price-down-breaker';
  link6b = 'https://github.com/isaacBejarano/binary-search';
  link6c = 'https://github.com/isaacBejarano/quicksort';
  link6d = 'https://github.com/isaacBejarano/is-int';
  link6e = 'https://github.com/isaacBejarano/string-mirror';
  link6f = 'https://github.com/isaacBejarano/fibonacci-sequencer';

  constructor() {}

  // methods
  openLink(): boolean {
    return Shared.openLink();
  }
}
