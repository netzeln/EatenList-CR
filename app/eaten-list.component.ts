import { Component, EventEmitter } from 'angular2/core';
import {Eaten} from './eaten.model';
import {EatenDisplayComponent} from './eaten-display.component';
import {EatenDetailsComponent} from './eaten-details.component';
import {HealthyPipe} from './healthy.pipe';


@Component({
  selector: 'eaten-list',
  inputs: ['eatenList'],
  directives: [EatenDisplayComponent, EatenDetailsComponent, HealthyPipe],
  template: `
    <div class="">
      <eaten-display></eaten-display>
      <eaten-details *ngIf="currentEaten === selectedEaten" [eaten]="currentEaten"></eaten-details>
    </div>
  `
})

export class EatenListComponent {
  public eatenList: Eaten[];

  constructor(){}

}
