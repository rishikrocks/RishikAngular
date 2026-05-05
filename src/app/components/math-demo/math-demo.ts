import { Component } from '@angular/core';
import { MathService } from '../../services/math-service';

@Component({
  selector: 'app-math-demo',
  imports: [],
  templateUrl: './math-demo.html',
  styleUrl: './math-demo.css',
})
export class MathDemo {
  constructor(private mathService:MathService){}

  ngOnInit(){
    const values = [10, 20, 30, 40, 50];

    console.log(this.mathService.sum(values));
    console.log(this.mathService.average(values));
    console.log(this.mathService.indexOfMax(values));
  }
}
