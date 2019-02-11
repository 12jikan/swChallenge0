import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharDataService } from 'src/app/services/char-data.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
  charDeets: any;
  charFilms: any; 
  charData: any;

  constructor(
    private route: ActivatedRoute,
    private charInfo: CharDataService,
    ) { }

  ngOnInit() {
    // this.getParams();
    this.getPer();

  }

  getPer() {
    this.charInfo.getPerson().subscribe(data => {
      this.charDeets = data;
      console.log(this.charDeets);
    })
  }

  // getParams() {
  //   let name = this.route.snapshot.paramMap.get('name');
  //   this.charName = name;
  // }

}
