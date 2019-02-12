import { Component, OnInit } from '@angular/core';
import { CharDataService } from '../../services/char-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})

export class SelectPageComponent implements OnInit {

  charList: any;

  constructor(private charInfo: CharDataService, private router: Router) { }

  ngOnInit() {
    this.charInfo.getChar().subscribe(data => {
      this.charList = data;
      console.log(this.charList);
    });
  }
  
  // adds the characters name to the url //
  onSelect(char) {
    this.router.navigate(['/select', char.name]);
    this.charInfo.setUrl(char.url);
  }


}
