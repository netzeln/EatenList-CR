//example of a Pipe
import {Pipe, PipeTransform} from 'angular2/core';
import {Eaten} from './eaten.model';

@Pipe({
  name: "healthy",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: Eaten[], args) {


  }
}
