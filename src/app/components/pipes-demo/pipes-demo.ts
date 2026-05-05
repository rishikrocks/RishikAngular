import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RemainingPipe } from './remaining-pipe';
import { MysortPipe } from '../custom-pipes/mysort-pipe';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, RemainingPipe,MysortPipe],
  // mysort-pipe
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  userName:string = 'Rishik KUrIKeLLy';
  Salary: number =  5000;
  dateObj = new Date();
  user = {name : 'Rishik', age:24,address:'Virginia'};
  cars = ['Tata','mahindra','toyota'];
  msg: string = '';
  arr = [30,10,50,40];
}
