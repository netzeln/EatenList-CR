//example of a Pipe
import {Pipe, PipeTransform} from 'angular2/core';
import {Eaten} from './eaten.model';

@Pipe({
  name: "healthy",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: Eaten[], args) {
    var desiredHealth = args[0];
    console.log(desiredHealth);
    if(desiredHealth === "good"){
      return input.filter((eaten)=>{
        return eaten.calories <= 300;
      })
    }else if(desiredHealth === "bad"){
      return input.filter((eaten)=>{
        return eaten.calories > 300;
      })
    }else{
      return input;
    }
  }
}
