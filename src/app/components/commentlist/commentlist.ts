import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-commentlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commentlist.html',
  styleUrl: './commentlist.css',
})
export class Commentlist {

  // commentData:Observable<Comment[]> | undefined;

  apiUrl = 'https://jsonplaceholder.typicode.com/comments';
  httpClient = inject(HttpClient);
  commentData?: Observable<any[]>;

  ngOnInit() {
    this.commentData = this.httpClient.get<any[]>(this.apiUrl).pipe(catchError(() => of([])));
  }
}
