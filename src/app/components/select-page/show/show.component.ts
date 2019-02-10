import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
  charName: Object;

  constructor(private route: ActivatedRoute) { }
  
  // anything that need to wait for the component to initialize //
  ngOnInit() {
    this.getParams();
  }

  getParams() {
    let name = parseInt(this.route.snapshot.paramMap.get('name'));
    this.charName = name;
  }

}
