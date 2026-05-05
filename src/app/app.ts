import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Categories } from './components/categories/categories';
import { Carousel } from './components/carousel/carousel';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { Assessment1 } from './components/assessment1/assessment1';
import { Assessment2 } from './components/assessment2/assessment2';
import { Directivesassignment } from './components/directivesassignment/directivesassignment';
import { EmployeeCrud } from './components/employee-crud/employee-crud';
import { PipesDemo } from './components/pipes-demo/pipes-demo';
import { CategoryItem } from './components/category-item/category-item';
import { Demo } from './components/demo/demo';
import { DynamicForm } from './components/dynamic-form/dynamic-form';
import { SignalForm } from './component/signal-form/signal-form';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Categories, Body, Footer],
  //PipesDemo,Categories
  //Navbar,Categories, Carousel,Assessment1, Assessment2, Directivesassignment,EmployeeCrud,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proj1');
}
