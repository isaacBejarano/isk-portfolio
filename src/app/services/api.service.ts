import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IntContactForm } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api1 = 'https://jsonplaceholder.typicode.com'; // no-cors, Open Database
  api2 = 'http://localhost/portfolio/api'; // entrypoint is index.php

  constructor(private http: HttpClient) {}

  // POST
  postOne(body: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        //   Authorization: 'my-auth-token',
      }),
    };

    // when an old token has expired, you can update the authorization
    // httpOptions.headers = httpOptions.headers.set(
    //   'Authorization',
    //   'my-new-auth-token'
    // );

    return this.http.post(
      `${this.api1}/posts`,
      // `${this.api2}/post`,
      body,

      httpOptions
    );
    // .pipe(catchError(this.handleError('addHero', hero)));
  }
}
