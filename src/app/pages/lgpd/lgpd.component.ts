import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shared } from '../../utils/shared';

@Component({
  selector: 'app-lgpd',
  templateUrl: './lgpd.component.html',
  styleUrls: ['./lgpd.component.scss'],
})
export class LgpdComponent implements OnInit {
  language = 0;
  newRoute = '/contact';

  constructor(
    //
    private router: Router
  ) {}

  // hooks
  ngOnInit(): void {
    Shared.pageToTop();
  }

  // mehtods
  reroute(): void {
    Shared.reroute(this.router, this.newRoute);
  }

  switch(language: number): void {
    this.language = language;
  }
}
