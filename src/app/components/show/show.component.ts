import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
  charName: string;
  charData;

  constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {

    this.getParams();
    this.getList();

  }

  getList() {
  }

  getParams() {
    let name = this.route.snapshot.paramMap.get('name');
    this.charName = name;
  }

}
