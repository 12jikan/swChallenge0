import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharDataService {

  constructor(private http: HttpClient) { }

  getChar() {
    return this.http.get('../../assets/data/characters.json');
  }

}
