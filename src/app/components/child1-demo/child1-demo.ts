import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1-demo',
  imports: [],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs:['a','b'],
  outputs:['courseEvent'],
})
export class Child1Demo {
  a : any;
  b : any;
  courseName = 'Angular';

  courseEvent = new EventEmitter();
  sendDataToParent(){
    this.courseEvent.emit(this.courseName);
  }

  constructor(){
    console.log("Child Constructor");
  }
  ngOnChanges(){ // N Times
    console.log('Child ngOnChanges');
  }
  ngOnInit(){
    console.log('Child ngOnInit');
  }
}
