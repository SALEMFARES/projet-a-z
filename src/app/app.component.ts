import { Component } from '@angular/core';
import { callbackify } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;

appareilOne = 'Machine à laverrrrrrr';
appareilTow = 'Télevisionnnnn';
appareilThree = 'Ordinateur';


  constructor() {
    setTimeout(
      () => {
         this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    console.log('on allume tout');
  }
}
