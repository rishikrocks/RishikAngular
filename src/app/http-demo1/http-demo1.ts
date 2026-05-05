import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {

  user_api = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private httpClient: HttpClient){

  }

  ngOnInit(){
      this.fetchData_javascript();
  }

  fetchData_javascript(){
   fetch(this.user_api).then(
    (response)=>{
      console.log(response)
      response.json().then(finalData=>console.log(finalData))
    },
    (error)=>{
      console.log(error)
    }
   )
  }

  fetchData_angular(){ //httpClient.get() return Observable
    this.httpClient.get(this.user_api).subscribe(response=>{
      console.log(response);
  });
  }
}
