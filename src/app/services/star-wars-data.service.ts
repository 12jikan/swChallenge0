import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class StarWarsDataService {
  baseUrl: string = 'https://swapi.co/api/people';

  constructor(private http: HttpClient) { }

  getData(endpoint: any) {
    return this.http.get(this.baseUrl);
  }



}
