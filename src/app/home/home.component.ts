import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
// OnChanges,
export class HomeComponent implements OnDestroy {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnDestroy(): void {
    const scrollable: HTMLAnchorElement = document.querySelector(
      '.js-scroll-trigger.active'
    );

    if (scrollable) {
      scrollable.classList.remove('active');
    }
  }
}
