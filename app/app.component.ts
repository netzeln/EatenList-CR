import { Component, EventEmitter } from 'angular2/core';
import {Eaten} from './eaten.model';



@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
  <h1>Et, Too</h1>
  `
})
