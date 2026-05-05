import { Injectable } from '@angular/core';

export interface Employee {
  employeeId: number;
  name: string;
  department: string;
  salary: number;
  gender: 'Male' | 'Female';
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [
    { employeeId: 101, name: 'Aarav Sharma', department: 'HR', salary: 55000, gender: 'Male' },
    { employeeId: 102, name: 'Diya Reddy', department: 'Finance', salary: 68000, gender: 'Female' },
    { employeeId: 103, name: 'Rohan Patel', department: 'IT', salary: 72000, gender: 'Male' },
    { employeeId: 104, name: 'Sneha Iyer', department: 'Marketing', salary: 60000, gender: 'Female' },
    { employeeId: 105, name: 'Karthik Nair', department: 'Sales', salary: 58000, gender: 'Male' },
    { employeeId: 106, name: 'Meera Joshi', department: 'Admin', salary: 50000, gender: 'Female' },
  ];

  getAllEmployees(): Employee[] {
    return this.employees;
  }

  getMaleEmployees(): Employee[] {
    return this.employees.filter(employee => employee.gender === 'Male');
  }

  getFemaleEmployees(): Employee[] {
    return this.employees.filter(employee => employee.gender === 'Female');
  }
}
