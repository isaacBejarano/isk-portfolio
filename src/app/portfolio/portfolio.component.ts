import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  title1 = 'Culex';
  img1 = 'portfolio/culex.png';
  alt1 = 'culex github repo';

  constructor() { }

  ngOnInit(): void {
  }

}
