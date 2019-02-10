import { Component, OnInit } from '@angular/core';
import { CharDataService } from '../../services/char-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})

export class SelectPageComponent implements OnInit {
  charList: Object;

  constructor(private char: CharDataService, private router: Router) { }

  ngOnInit() {
    this.getChar();

  }
  
  // adds the characters name to the url //
  onSelect(char) {
    this.router.navigate(['/select', char.name])
  }

  // get's the list of characters from the Json file //
  getChar() {
    this.char.getChar().subscribe( data => {
      this.charList = data;
      console.log(data);
    })
  }


}
