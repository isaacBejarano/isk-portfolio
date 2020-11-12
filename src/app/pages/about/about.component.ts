import { Component, OnInit, DoCheck } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '../../store/store';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, DoCheck {
  // prop -> to <app-divider> Input()
  divider = 'divider-light';

  about = store.getAbout as object | any;

  // <- shared methods
  openLink = Shared.openLink;

  constructor() {}

  // hooks
  ngOnInit(): void {
    Shared.pageToTop();
    store.setScrollShow = false; // scroller -> state false
  }

  ngDoCheck(): void {
    const scroller = document.getElementById('scroller') as HTMLDivElement;

    // dissable scroller view
    if (!store.scroll.show) {
      scroller.classList.add('d-none'); // state false
    }
  }
}
