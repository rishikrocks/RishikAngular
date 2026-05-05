import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assessment1',
  imports: [FormsModule],
  templateUrl: './assessment1.html',
  styleUrl: './assessment1.css',
})
export class Assessment1 {
  flag=false;


toggleFlag(){
    this.flag=!this.flag
  }


  state=""


temp="text";

changeType(){
  this.temp=this.temp=="text"?"password":"text"
}
  
count=0;

increment(){
  this.count=this.count+1
}

decrement(){
  this.count=this.count-1
}

reset(){
  this.count=0;
}

 }
