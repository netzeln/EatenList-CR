import { Component, EventEmitter } from 'angular2/core';
import {Eaten} from './eaten.model';

@Component({
  selector: 'eaten-display',
  imports: ['eaten'] ,
  template: `
    <h3><strong>{{eaten.name}}</strong></h3>
  `
})


export class EatenDisplayComponent{
  public eaten: Eaten
}
