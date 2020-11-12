import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shared } from '../../utils/shared';
import { store } from '../../store/store';

@Component({
  selector: 'app-lgpd', // '/contact/lgpd
  templateUrl: './lgpd.component.html',
  styleUrls: ['./lgpd.component.scss'],
})
export class LgpdComponent implements OnInit {
  language = 0; // -> *ngSwitchDefault

  lgpd = store.getLgpd as object | any;

  constructor(private router: Router) {}

  // hooks
  ngOnInit(): void {
    Shared.pageToTop(); // <- shared
  }

  // mehtods
  reroute(): void {
    Shared.reroute(this.router, this.lgpd.close); // <- shared
  }

  switch(language: number): void {
    this.language = language;
  }
}
