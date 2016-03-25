import {Component} from 'angular2/core';
import {Eaten} from './eaten.model';

@Component ({
  selector: 'edit-eaten',
  inputs: ['eaten'],
  template:`
  <div>

  <form>
    <label> Edit Food</label>
    <input [(ngModel)]= "eaten.food"/><br>
    <label>Edit Details:</label>
    <input [(ngModel)]="eaten.details"><br>
    <label ><em>Real</em> Calories?:</label>
    <input type="number" [(ngModel)]="eaten.calories">
  </form>
  `
})

export class EditEatenComponent{
  public eaten: Eaten;
}
