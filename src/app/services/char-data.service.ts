import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharDataService {
  
  baseUrl;
  dirUrl;

  constructor(private http: HttpClient) { }

  setUrl(url) {
    this.dirUrl = url;
  }
  
  getChar() {
    return this.http.get('../../assets/data/characters.json');
  };

  getPpl() {
    return this.http.get('https://swapi.co/api/people/')
  }
  
  getData(url) {
    return this.http.get(url)
  }

  getPerson() {
    return this.http.get(this.dirUrl);
  }

  

}
