import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
})
export class ScrollComponent implements OnInit, AfterViewChecked {
  icon = 'fa fa-chevron-up';
  home = 'home';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngAfterViewChecked(): void {
    const a: HTMLAnchorElement = document.querySelector('a.js-scroll-trigger');
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // this.home = 'home';

    console.log(this.home);
    console.log(a);
    console.log(this.activatedRoute);
  }

  ngOnInit(): any {}

  // methods
  hashIt(prop: string): any {
    return `#${prop}`;
  }
}
