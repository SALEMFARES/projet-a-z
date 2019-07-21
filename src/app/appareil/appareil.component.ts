import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;

  // appareilName: string = 'Machine a lave';
  // appareilStatus: string = 'etaint';

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }
  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'etaint') {
      return 'red';
    }


}

onSwitchOn() {
  this.appareilService.switchOneOne(this.indexOfAppareil);
}
onSwitchOff() {
  this.appareilService.switchOffOne(this.indexOfAppareil);
}
}
