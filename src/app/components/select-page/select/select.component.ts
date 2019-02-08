import { Component, OnInit } from '@angular/core';
import { CharDataService } from '../../../services/char-data.service' 

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  charList: Object;

  constructor(private char: CharDataService) { }

  ngOnInit() {
    this.char.getChar().subscribe( data => {
      this.charList = data;
    })
  }

}
