import { Component, OnInit, DoCheck } from '@angular/core';
import { Shared } from '../../utils/shared';
import { store } from '../../store/store';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, DoCheck {
  // props to Input()
  divider = 'divider-light';

  // --> props
  title = store.about.title;
  hello = store.about.hello;
  p1a = store.about.p1a;
  p1b = store.about.p1b;
  p1c = store.about.p1c;
  p2a = store.about.p2a;
  p2b = store.about.p2b;
  p2c = store.about.p2c;
  p3a = store.about.p3a;
  p3link = store.about.p3link;
  p3linkText = store.about.p3linkText;
  p3b = store.about.p3b;
  p3c = store.about.p3c;
  stak1 = store.about.stak1;
  stak2 = store.about.stak2;
  bye = store.about.bye;
  // --> shared methods
  openLink = Shared.openLink;

  constructor() {}

  // hooks
  ngOnInit(): void {
    Shared.pageToTop();
    store.setShow(false); // scroller -> state false
  }

  ngDoCheck(): void {
    const scroller = document.getElementById('scroller') as HTMLDivElement;

    // dissable scroller view
    if (!store.scroll.show) {
      scroller.classList.add('d-none'); // state false
    }
  }
}
