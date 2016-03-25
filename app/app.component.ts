import { Component, EventEmitter } from 'angular2/core';
import {Eaten} from './eaten.model';
import {EatenListComponent} from './eaten-list.component';



@Component({
  selector: 'my-app',
  directives: [EatenListComponent],

  template: `
  <h1>Et, Too</h1>
  `
})

export class AppComponent{
  
}
