import { Component, EventEmitter } from 'angular2/core';
import {Eaten} from './eaten.model';
import {EatenDisplayComponent} from './eaten-display.component';
import {EatenDetailsComponent} from './eaten-details.component';


@Component({
  selector: 'eaten-list',
  imports: ['Eaten'],
  directives: [EatenDiplayComponent, EatenDetailsComponent]
  template: `
    <div class="">
      <eaten-display></eaten-display>
      <eaten-details *ngIf="currentEaten === selectedEaten"></eaten-details>
    </div>
  `
})

export class EatenListComponent {


}
