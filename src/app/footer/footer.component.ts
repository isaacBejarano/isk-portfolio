import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  built = 'built with Angular';
  license = 'Start Bootstrap Theme under MIT license';
  copyright = 'Copyright © Isaac Bejarano 2020';

  constructor() {}
}
