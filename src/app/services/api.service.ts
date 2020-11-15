import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IntfaceContact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // endpointGET = 'http://localhost/api/get_contacts.php';
  api1 = 'https://jsonplaceholder.typicode.com'; // no CORS
  api2 = 'http://localhost/api'; // entrypoint is index.php
  api3 = 'https://restcountries.eu/rest/v2/lang/es';

  constructor(private http: HttpClient) {}

  // POST
  postOne(body: IntfaceContact): Observable<object> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //     Authorization: 'my-auth-token',
    //   }),
    // };

    // when an old token has expired, you can update the authorization
    // httpOptions.headers = httpOptions.headers.set(
    //   'Authorization',
    //   'my-new-auth-token'
    // );

    return this.http.post<IntfaceContact>(
      `${this.api1}/posts`,
      body // don't need to type .post() coz response may vary
      // {
      //   submited: 'valid',
      //   name: 'wqeqwe',
      //   email: 'qwe@qwe.er.ok',
      //   msg: 'qweqeqeqeqw',
      //   lgpd: true,
      // },
      // httpOptions
    );
    // .pipe(catchError(this.handleError('addHero', hero)));
  }

  // GET
  getMany(): Observable<object> {
    return this.http.get<object[]>(`${this.api2}/get`).pipe(
      map((res: object[]) =>
        res.map((country: any) => ({
          country: country.name,
          code: country.alpha3Code,
        }))
      )
    );
  }
  // getMany(): Observable<object> {
  //   return this.http.get<IntfaceContact[]>(`${this.api1}/posts`).pipe(
  //     map((res: IntfaceContact[]) =>
  //       res.map((country: any) => ({
  //         country: country.name,
  //         code: country.alpha3Code,
  //       }))
  //     )
  //   );
  // }

  // GET/:id
  getOne(id: string): Observable<object> {
    return this.http
      .get<IntfaceContact>(`${this.api1}/posts/${id}`)
      .pipe(map((res: object) => res));
  }

  // PUT/:id
  putOne(id: string, update: object): Observable<object> {
    return this.http
      .put<IntfaceContact>(`${this.api1}/posts/${id}`, update)
      .pipe(map((res: object) => res));
    // NOTE: PUT requires to send the whole object === Schema
  }
  // DELETE/:id
  deleteOne(id: string): Observable<object> {
    return this.http.delete<IntfaceContact>(`${this.api1}/posts/${id}`).pipe(map((res: object) => res));
  }
}
