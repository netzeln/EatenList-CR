import {Component, EventEmitter} from 'angular2/core';
import {Eaten} from './eaten.model';
import {EatenDetailsComponent} from './eaten-details.component';

@Component({
  selector: 'calorie-calc',
  inputs: ['eatenFoods'],
  outputs:['countedCalories'],
  template: `
  <h2> Current Caloric Consumption: {{countedCalories[0]}}</h2>
  <button (click)="countCalories(eatenFoods)">Calculate</button>
  `
})

export class CalorieCalculateComponent{
  public eaten: Eaten[];
  // public calorieArray: number[];
  public countedCalories: EventEmitter<number[]>;
  // public countedCalories: number;
  public totalCalories: number = 0;
  constructor(){

    this.countedCalories = new EventEmitter();
    // this.countedCalories = 0;
  };

  countCalories(foodsEaten){
    this.totalCalories = 0;
    var foods = foodsEaten;
    for(var food of foods){
      this.totalCalories = this.totalCalories + food.calories;

    }
    // this.countedCalories = totalCalories;
    console.log(this.countedCalories);
    console.log(this.totalCalories);

    this.countedCalories.emit([this.totalCalories]);
      // return this.countedCalories;
  }
}
