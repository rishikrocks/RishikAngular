export class Employee {
  id!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  sal!: number;
  gender!: string;

  constructor(data: Partial<Employee> = {}) {
    Object.assign(this, data);
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  
  getYearlySalary(): number {
    return 12 * this.sal;
  }
}
