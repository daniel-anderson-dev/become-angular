import { Component, OnInit } from '@angular/core';
import { RandomWordService } from '../random-word.service';

@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.css']
})
export class MyheaderComponent implements OnInit {

  private word:string;

  constructor(private randomWord:RandomWordService) {
    this.word = this.randomWord.getWord();
   }

  ngOnInit() {
  }

}
