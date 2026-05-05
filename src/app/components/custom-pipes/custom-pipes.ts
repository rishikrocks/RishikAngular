
import { OrdinalPipes } from './ordinal-pipes';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { employeeData } from '../employee-crud/employee-data';
//import { employees } from './employee-data';
import { employees as employeeList } from './employee-data';

// 5.⁠ ⁠declare an array of employee objects. display them in a table. 
//    add a search-box above the table. create a custom-pipe to filter/search employees data.
@Pipe({
  name: 'empSearch',
  standalone: true
})
export class EmpSearchPipe implements PipeTransform {
  transform(employees: any[], searchText: string): any[] {
    if (!searchText) {
      return employees;
    }

    return employees.filter(emp =>
      emp.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}

// 4th Question - Declare an array of employee objects. display them in a table.
//  create a custom pipe 'Salutation' that will add 'mr. / miss.' before the employee name.
@Pipe({
  name: 'salutation',
  standalone: true
})
export class SalutationPipe implements PipeTransform {
  transform(name: string, gender: string): string {
    if (gender === 'male') {
      return 'Mr. ' + name;
    } else {
      return 'Miss. ' + name;
    }
  }
}

// 3.⁠ ⁠create a custom pipe called 'age' which takes a date as input and returns the age in years.
//    input : 04-06-2020
//    output : 5 years old

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {
  transform(value: string): string {
    const birthDate = new Date(value);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age + ' years old';
  }
}

// 2.⁠ ⁠create a custom pipe(creditcard) which takes a creditcard as input and returns masked creditcard
//    input :  1111222233334444  
//    output : 1111-2222-3333-4444 

@Pipe({
  name: 'creditCard',
  standalone: true
})
export class creditCardPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/(.{4})/g, '$1-').slice(0, -1);
  }
}

@Component({
  selector: 'app-custom-pipes',
  imports: [OrdinalPipes,FormsModule,creditCardPipe,AgePipe,SalutationPipe,EmpSearchPipe],
  templateUrl: './custom-pipes.html',
  styleUrl: './custom-pipes.css',
})
export class CustomPipes {
  num:number = 21;
  cardNo: string = '';
  dob: string = '2020-04-06';
  employees = employeeList;
  searchText: string = '';

}
