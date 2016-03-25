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
  public eaten: Eaten[];
    constructor(){
      this.eaten = [
        new Eaten("Celery", "Crunchy, yet wet, but bland", 0),
        new Eaten("Turkey Burger", "Needed lots of Worcestershire sauce", 250),
        new Eaten("Monster Energy Drink", "Forced at Gunpoint", 101),
        new Eaten("Bacon Burger", "imported from Jack's Bistro in Baltimore", 1000)
      ]
    }
}
