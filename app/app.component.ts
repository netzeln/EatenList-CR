import { Component, EventEmitter } from 'angular2/core';
import {Eaten} from './eaten.model';
import {EatenListComponent} from './eaten-list.component';
import {AddEatenComponent} from './add-eaten.component';
import {CalorieCalculateComponent} from './calorie-calculate.component';



@Component({
  selector: 'my-app',
  inputs: ['eaten'],
  directives: [EatenListComponent, AddEatenComponent, CalorieCalculateComponent],
  template: `
    <div class="jumbotron">
      <h1>Et, Too</h1>
    </div>
    <div class="container">
      <div class="row">
        <h2> I Ate This...</h2>
        <div class="col-md-6">
          <add-eaten (submitNewEaten)="addEaten($event)"></add-eaten>

          <calorie-calc [eatenFoods]="eaten" [countedCalories]="cals"></calorie-calc>
        </div>

        <eaten-list [eatenList]="eaten"  (onEatenSelect)="eatenWasSelected($event)"></eaten-list>
      </div>
    </div>
  `
})

export class AppComponent{
  public eaten: Eaten[];
    constructor(){
      this.eaten = [
        new Eaten("Celery", "Crunchy, yet wet, but bland", 1),
        new Eaten("Turkey Burger", "Needed lots of Worcestershire sauce", 250),
        new Eaten("Monster Energy Drink", "Forced at Gunpoint", 101),
        new Eaten("Bacon Burger", "imported from Jack's Bistro in Baltimore", 1000)
      ];
    }

    eatenWasSelected(clickedEaten: Eaten):void{

    }

    addEaten(newEats: Eaten):void{
      this.eaten.push(newEats);
    }

}
