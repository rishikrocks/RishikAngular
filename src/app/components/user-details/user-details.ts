import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  user = signal<any>({});
  httpClient = inject(HttpClient);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/users/${params['id']}`)
      .pipe(catchError(() => of({})))
      .subscribe(response => {
        this.user.set(response)
      })
    })
  }
}
