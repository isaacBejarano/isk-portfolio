import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // endpointGET = 'http://localhost/api/get_contacts.php';
  endpointGET = 'https://restcountries.eu/rest/v2/lang/es';
  endpointPOST = 'http://localhost/api/post_contacts.php';

  constructor(private http: HttpClient) {}

  // methods
  postContacts(): any {
    return this.http.post(this.endpointPOST, {
      submited: 'valid',
      name: 'wqeqwe',
      email: 'qwe@qwe.er.ok',
      msg: 'qweqeqeqeqw',
      lgpd: true,
    }); // post
  }

  getSpanishCountries(): any {
    return this.http
      .get(this.endpointGET)
      .pipe(
        map((res: any[]) =>
          res.map((country) => ({
            country: country.name,
            code: country.alpha3Code,
          }))
        )
      );
  }
}
