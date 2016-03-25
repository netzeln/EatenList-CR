import { Component, EventEmitter } from 'angular2/core';
import {Eaten} from './eaten.model';
import {EatenDisplayComponent} from './eaten-display.component';
import {EatenDetailsComponent} from './eaten-details.component';
import {HealthyPipe} from './healthy.pipe';


@Component({
  selector: 'eaten-list',
  inputs: ['eatenList'],
  outputs: ['onEatenSelect'],
  pipes: [HealthyPipe],
  directives: [EatenDisplayComponent, EatenDetailsComponent],
  template: `

    <div *ngFor="#currentEaten of eatenList">
      <eaten-display (click)="eatenClicked(currentEaten)" [class.selected]="currentEaten === selectedEaten" [eaten]="currentEaten"></eaten-display>
      <eaten-details *ngIf="currentEaten === selectedEaten" [eaten]="currentEaten"></eaten-details>
    </div>
  `
})

export class EatenListComponent {
  public eatenList: Eaten[];
  public onEatenSelect: EventEmitter<Eaten>;
  public selectedEaten: Eaten;


  constructor(){
    this.onEatenSelect = new EventEmitter();
  }

  eatenClicked(clickedEaten: Eaten){
    this.selectedEaten = clickedEaten;
    this.onEatenSelect.emit(clickedEaten);
  }

}
