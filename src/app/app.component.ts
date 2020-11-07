import { Component, OnInit } from '@angular/core';
import { CulexOptions, Culex } from './utils/culex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // 1. options -> method + url are compulsory!
    const options: CulexOptions = {
      method: 'GET',
      url: 'https://api.wheretheiss.at/v1/satellites/25544',
      contentType: 'application/x-www-form-urlencoded',
      // user: "root",
      // pass: "fe-angular",
    };

    // 2. new connection + printer
    const culex = new Culex();

    // connection + printer
    culex.request(options).response((data: object) => {
      // toDOM(data);
      // toDOM(JSON.stringify(data));
      // this.toConsole(data);
      this.toConsole(JSON.stringify(data));
      // toAlert(JSON.stringify(data));
      // toAlert(data);
    });
  }

  // methods - printer
  toConsole(data: object | string): void {
    console.log(data);
  }
}
