import { Component, OnInit, OnDestroy } from '@angular/core';
import { callbackify } from 'util';
import { AppareilService} from './services/appareil.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes: number;
  counterSubscription : Subscription;
  constructor() {}
  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number ) => {
        this.secondes = value;
      }
    );
}

ngOnDestroy() {
  this.counterSubscription.unsubscribe();
}
}
