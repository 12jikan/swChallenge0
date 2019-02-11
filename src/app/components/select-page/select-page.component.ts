import { Component, OnInit } from '@angular/core';
import { CharDataService } from '../../services/char-data.service';
import { Router } from '@angular/router';
import { sanitizeUrl } from '@angular/core/src/sanitization/sanitization';


@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})

export class SelectPageComponent implements OnInit {
  charList: any;

  constructor(private charInfo: CharDataService, private router: Router) { }

  ngOnInit() {
    this.getChar();
    this.charInfo.getPpl().subscribe(x => console.log(x))
  }
  
  // get's the list of characters from the Json file //
  getChar() {
    this.charInfo.getChar().subscribe(data => {
      this.charList = data.characters;
    });
  };
  
  // adds the characters name to the url //
  onSelect(char) {
    this.router.navigate(['/select', char.name]);
    this.charInfo.setUrl(char.url);
  }


}
