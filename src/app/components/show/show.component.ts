import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharDataService } from 'src/app/services/char-data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
  charDeets: any;
  charFilms: any;
  filmsNew: any = [];

  constructor(
    private route: ActivatedRoute,
    private charInfo: CharDataService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.charInfo.getPerson().subscribe(data => {

      this.charDeets = data;
      this.charFilms = this.charDeets.films

      console.log("These are the details: ", this.charDeets);
      console.log("These are the films: ", this.charFilms)

      this.charFilms.forEach(link => {
        this.charInfo.getData(link).subscribe(
          movie => { this.filmsNew.push(movie) }, // success path
          error => console.log('here is the error: ', error) // error path
          
          );
      });

      console.log("Decoded the list boss: ", this.filmsNew);
    });

  }

  onSelect(char) {
    this.router.navigate(['select/:name/', char.movie]);
    this.charInfo.setUrl(char.url);
  }

}
