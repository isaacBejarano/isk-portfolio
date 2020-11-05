import { Component, OnInit } from '@angular/core';
import { store } from '../store/store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  tool: string;
  theme: string;
  link1: string;
  link2: string;
  license: string;
  copyright: string;
  openLink: () => boolean;

  constructor() {}

  ngOnInit(): void {
    // --> props
    this.tool = store.footer.tool;
    this.theme = store.footer.theme;
    this.link1 = store.footer.link1;
    this.link2 = store.footer.link2;
    this.license = store.footer.license;
    this.copyright = store.footer.copyright;
    // --> shared methods
    this.openLink = store.openLink;
  }
}
