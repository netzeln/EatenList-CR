import { Component, EventEmitter } from 'angular2/core';
import {Eaten} from './eaten.model';

@Component({
  selector: 'eaten-details',
  inputs:['eaten'],
  template: `
  <h4>My thoughts on those <span class="calories">{{eaten.calories}}</span> calories: {{eaten.details}}</h4>
  `
})

export class EatenDetailsComponent{
  public eaten: Eaten;
}
