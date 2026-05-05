import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeServices } from '../../services/employee-services';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employeeService = inject(EmployeeServices);
  employeeArr: Employee[] = [];

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe((response: Employee[]) => {
      this.employeeArr = response;
    });
  }
}
