import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsDataService } from '../../../services/star-wars-data.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
  charName: string;
  charData;

  constructor(private route: ActivatedRoute, private swData: StarWarsDataService) { }
  
  // anything that need to wait for the component to initialize //
  ngOnInit() {

    this.getParams();

    this.swData.getInfo().subscribe(data => {
      this.charData = data;
      console.log(data);
    });

  }
  
  getParams() {
    let name = this.route.snapshot.paramMap.get('name');
    this.charName = name;
  }

}
