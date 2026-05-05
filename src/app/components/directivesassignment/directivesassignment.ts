import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivesassignment',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directivesassignment.html',
  styleUrl: './directivesassignment.css'
})
export class Directivesassignment {

  tasks = [
	  { id: 1, title: 'Complete Angular assignment', completed: false },
	  { id: 2, title: 'Review pull requests', completed: true },
	  { id: 3, title: 'Prepare project report', completed: false },
	  { id: 4, title: 'Attend team meeting', completed: true },
	  { id: 5, title: 'Update documentation', completed: false },
	];

  filterChoice='All'

  toggleTask(task:any){
    task.completed=!task.completed;
  }

  getfilteredTasks(){
    if(this.filterChoice=='Completed'){
      return this.tasks.filter(task=>task.completed);
    }
    else if (this.filterChoice=='Pending'){
      return this.tasks.filter(task=>!task.completed);
    }
    else{
      return this.tasks;
    }
  }

  //2


  allProducts: any[] = [
  { id: 1, title: 'Shirt', category: "men's clothing", price: 50, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Dress', category: "women's clothing", price: 80, image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Laptop', category: "electronics", price: 500, image: 'https://via.placeholder.com/150' }
];

filteredProducts=[...this.allProducts]

selectedCategory='all';

categories=["all","men's clothing", "women's clothing", "jewelery", "electronics"]



  filterProductsList(){
    if(this.selectedCategory=='all'){
      this.filteredProducts=[...this.allProducts]
    }else{
      this.filteredProducts=this.allProducts.filter(product=>product.category===this.selectedCategory)
    };
    
  }

cartItems = [
    { id: 1, name: 'Wireless Headphones', price: 2499, qty: 1 },
    { id: 2, name: 'Smart Watch', price: 4999, qty: 2 },
    { id: 3, name: 'Bluetooth Speaker', price: 1999, qty: 1 },
    { id: 4, name: 'Power Bank', price: 1299, qty: 3 }
  ];

  incrementQty(item:any){
    item.qty++
  }
  decrementQty(item:any){
    if(item.qty>1){
      item.qty--
    }
    else{
      alert(`${item.name} is already 0 in quantity`);
    }
  }
  totalPrice(){
    return this.cartItems.reduce((total,item)=>{
      return total+(item.price*item.qty);
    },0)
  }

  //4
  employees = [
    { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
    { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
    { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
    { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
    { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
    { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
  ];

  getRowStyle(role:string){
    if(role==='Manager'){
      return {backgroundColor: 'lightyellow'}

    }else if(role==='Developer'){
      return { backgroundColor: 'lightblue'}
    }else if(role==='Tester'){
      return{backgroundColor:'lightpink'}
    }else{
      return{backgroundColor:'orange'};//my custom style 
    }
  }

  getBadgeStyle(salary:number){
    if(salary>70000){
      return{backgroundColor:'green',color:'white'}

    }else if (salary>=40000&& salary<=70000){
      return{backgroundColor:'orange',color:'white'}
    }else{
      return{backgroundColor:'red',color:'white'};
    }
  }
  
}

//3
