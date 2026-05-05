import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assessment2',
  imports: [FormsModule],
  templateUrl: './assessment2.html',
  styleUrl: './assessment2.css',
})
export class Assessment2 {
  color:string ='';
  number1: number = 0;
  number2: number = 0;
  result: number = 0;  
  operator: string = '+';
  size: number = 20;

  currentTime: string = '00:00';   
  currentDate:any;
  greetings:any;
  

  calculate() {
    if(this.operator === '+') {
      this.result = this.number1 + this.number2;
    } else if (this.operator === '-') {
      this.result = this.number1 - this.number2;
    } else if (this.operator === "*") {
      this.result = this.number1 * this.number2;
    } else if (this.operator === "/") {
      this.result = this.number1/this.number2;
    }
  }

  increase(){
    this.size = this.size+2;
  }

  decrease(){
    this.size = this.size-2;
  }
  
  displayGreetings() {
    console.log(this.currentTime);

    let hour = Number(this.currentTime.split(":")[0]);
    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }
}
