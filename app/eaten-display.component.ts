import { Component, EventEmitter } from 'angular2/core';
import {Eaten} from './eaten.model';

@Component({
  selector: 'eaten-display',
  inputs: ['eaten'],
  template: `
    <h3><strong>{{eaten.food}}</strong></h3>
  `
})


export class EatenDisplayComponent{
  public eaten: Eaten;
}
