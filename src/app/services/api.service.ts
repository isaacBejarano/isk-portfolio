import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntContactForm } from '../types/contact';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = 'https://jsonplaceholder.typicode.com'; // Open Database
  endpont = '/posts';

  constructor(private http: HttpClient) {}

  // POST
  postOne(body: IntContactForm): Observable<object> {
    return this.http.post<IntContactForm>(
      this.api + this.endpont, // open API REST
      body
    );
  }
}
