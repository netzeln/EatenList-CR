import { Component, EventEmitter } from 'angular2/core';
import {Eaten} from './eaten.model';
import {EatenDisplayComponent} from './eaten-display.component';
import {EatenDetailsComponent} from './eaten-details.component';
import {HealthyPipe} from './healthy.pipe';



@Component({
  selector: 'eaten-list',
  inputs: ['eatenList', 'healthiness'],
  outputs: ['onEatenSelect'],
  pipes: [HealthyPipe],
  directives: [EatenDisplayComponent, EatenDetailsComponent],
  template: `
    <div class="col-md-6">
      <div class="btn-group" role="group">
      <button type="button" class="btn btn-info"(click)="toggleClickedHealth('all')" value='all'>Everything</button>
      <button type="button"class="btn btn-success" (click)="toggleClickedHealth('good')" value='good' >The Good</button>
      <button type="button"class="btn btn-danger" (click)="toggleClickedHealth('bad')" value='bad' >The Bad</button>
      </div>
      <div *ngFor="#currentEaten of eatenList | healthy: healthiness">
        <eaten-display (click)="eatenClicked(currentEaten)" [class.selected]="currentEaten === selectedEaten" [eaten]="currentEaten"></eaten-display>
        <eaten-details *ngIf="currentEaten === selectedEaten" [eaten]="currentEaten"></eaten-details>
      </div>
    </div>
  `
})

export class EatenListComponent {
  public eatenList: Eaten[];
  public onEatenSelect: EventEmitter<Eaten>;
  public selectedEaten: Eaten;
  public healthiness: string ="all";


  constructor(){
    this.onEatenSelect = new EventEmitter();
  }

  eatenClicked(clickedEaten: Eaten){
    this.selectedEaten = clickedEaten;
    this.onEatenSelect.emit(clickedEaten);
  }
  toggleClickedHealth(healthChoice){
    this.healthiness = healthChoice;

  }


}
