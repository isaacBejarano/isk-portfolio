import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  img1 = 'portfolio/cabin.png';
  alt1 = 'Log Cabin picture';
  title1 = 'Log Cabin';
  text1 =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
    Mollitia neque assumenda ipsam nihil, molestias magnam, \
    recusandae quos quis inventore quisquam velit asperiores, vitae? \
    Reprehenderit soluta, eos quod consequuntur itaque. Nam.';

  img2 = 'portfolio/cake.png';
  alt2 = 'Tasty Cake picture';
  title2 = 'Tasty Cake';
  text2 =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
    Mollitia neque assumenda ipsam nihil, molestias magnam, \
    recusandae quos quis inventore quisquam velit asperiores, vitae? \
    Reprehenderit soluta, eos quod consequuntur itaque. Nam.';

  img3 = 'portfolio/circus.png';
  alt3 = 'Circus Tent picture';
  title3 = 'Circus Tent';
  text3 =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
    Mollitia neque assumenda ipsam nihil, molestias magnam, \
    recusandae quos quis inventore quisquam velit asperiores, vitae? \
    Reprehenderit soluta, eos quod consequuntur itaque. Nam.';

  img4 = 'portfolio/game.png';
  alt4 = 'Controller picture';
  title4 = 'Controller';
  text4 =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
    Mollitia neque assumenda ipsam nihil, molestias magnam, \
    recusandae quos quis inventore quisquam velit asperiores, vitae? \
    Reprehenderit soluta, eos quod consequuntur itaque. Nam.';

  img5 = 'portfolio/safe.png';
  alt5 = 'Locked Safe picture';
  title5 = 'Locked Safe';
  text5 =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
    Mollitia neque assumenda ipsam nihil, molestias magnam, \
    recusandae quos quis inventore quisquam velit asperiores, vitae? \
    Reprehenderit soluta, eos quod consequuntur itaque. Nam.';

  img6 = 'portfolio/submarine.png';
  alt6 = 'Submarine picture';
  title6 = 'Submarine';
  text6 =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
    Mollitia neque assumenda ipsam nihil, molestias magnam, \
    recusandae quos quis inventore quisquam velit asperiores, vitae? \
    Reprehenderit soluta, eos quod consequuntur itaque. Nam.';

  constructor() {}

  ngOnInit(): void {}
}
