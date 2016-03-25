//example of a Pipe
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: "healthy",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: , args) {


  }
}
