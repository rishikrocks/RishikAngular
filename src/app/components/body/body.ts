import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomPipes } from '../custom-pipes/custom-pipes';
import { Child2Demo } from "../child2-demo/child2-demo";
import { ParentDemo } from '../parent-demo/parent-demo';
import { MathDemo } from '../math-demo/math-demo';
import { EmployeeCrud } from '../employee-crud/employee-crud';
import { HttpDemo1 } from '../../http-demo1/http-demo1';
import { StockList } from '../stock-list/stock-list';
import { Commentlist } from '../commentlist/commentlist';
import { EmployeeList } from '../employee-list/employee-list';
import { Observable } from 'rxjs';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { Demo } from '../demo/demo';
import { DynamicForm } from '../dynamic-form/dynamic-form';

 
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet], //,ProductsList,CustomPipes,ParentDemo, MathDemo, EmployeeCrud, HttpDemo1, StockList,Commentlist,,ObservableDemo1,ObservableDemo2,ObservableDemo3,EmployeeList,SignalDemo1,SignalDemo2,Demo
  //SignalDemo2, Demo, SignalDemo2, DynamicForm, Demo
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
 
