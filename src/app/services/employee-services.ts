import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServices {
  httpClient = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/employees';
  private readonly fallbackEmployees: Employee[] = [
    new Employee({
      id: '101',
      firstName: 'Virat',
      lastName: 'Kohli',
      gender: 'male',
      email: 'virat@gmail.com',
      sal: 5200,
    }),
    new Employee({
      id: '103',
      firstName: 'Deepak',
      lastName: 'Singh',
      gender: 'male',
      email: 'deepak@gmail.com',
      sal: 5200,
    }),
    new Employee({
      id: '102',
      firstName: 'Rohit',
      lastName: 'Sharma',
      gender: 'male',
      email: 'deepak@gmail.com',
      sal: 5200,
    }),
  ];

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.apiUrl).pipe(
      map((responseArr: Employee[]) => {
        return responseArr.map((responseObj: Employee) => new Employee(responseObj));
      }),
      catchError(() => of(this.fallbackEmployees))
    );
  }
}
