import {Component, EventEmitter} from 'angular2/core';
import {Eaten} from './eaten.model';
import {AppComponent} from './app.component';

@Component({
  selector: 'add-eaten',
  outputs:['submitNewEaten'],
  directives: [AppComponent],
  template:`
    <div>
      <h4>What went in your face?</h4>
      <form>
        <label>Food</label>
        <input type="text" placeholder="food" #newFood>
        <label>How'd That work out for you?</label>
        <input type="text" placeholder="what did you think?" #newDetails>
        <label>Calories?</label>
        <input type="number" min="0" placeholder="how many calories" #newCalories>
        <button (click)="addEaten(newFood, newDetails, newCalories)" class="btn btn-warning">Log it</button>
      </form>
    </div>

  `
})

export class AddEatenComponent{
  public submitNewEaten = EventEmitter<Eaten>;

  constructor (){
    this.submitNewEaten = new EventEmitter();
  }
  addEaten(inputFood: HTMLInputElement, inputDetails:HTMLInputElement, inputCalories:HTMLInputElement){
    if((inputFood.value === "") || (inputDetails.value === "") || (inputCalories.value === "")){
      alert("You're Missing Something. Fill out All Fields");
    }else{
    var food = inputFood.value;
    var details = inputDetails.value;
    var numbCalories = parseInt(inputCalories.value);

    var newEaten = new Eaten(food, details, numbCalories);
    this.submitNewEaten.emit(newEaten);
      inputFood.value ="";
      inputDetails.value="";
      inputCalories.value=""
    }
    // console.log(newEaten);
  }
}
