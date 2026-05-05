import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEye, faPen } from '@fortawesome/free-solid-svg-icons';
import { Employee, EmployeeService } from '../../services/employee-service';


@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud {

  employees: Employee[] = [];
  faTrash = faTrash;
  faEye = faEye;
  faPen = faPen;

  constructor(private employeeService: EmployeeService) {
    this.employees = this.employeeService.getAllEmployees();
  }

  showAllEmployees() {
    this.employees = this.employeeService.getAllEmployees();
  }

  showMaleEmployees() {
    this.employees = this.employeeService.getMaleEmployees();
  }

  showFemaleEmployees() {
    this.employees = this.employeeService.getFemaleEmployees();
  }

  deleteEmployee(empId: number) {
    const flag = confirm('Are you sure, You want to delete this record?');
    if (flag) {
      this.employees = this.employees.filter(employee => employee.employeeId !== empId);
    }
  }
  selectedEmployee: any;
  displayStyle = 'none';

  openPopup(emp: any) {
    this.selectedEmployee = emp;
    this.displayStyle = 'block';
  }

  closePopup() {
    this.displayStyle = 'none';
  }


}
