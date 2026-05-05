import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-signal-demo2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-demo2.html',
  styleUrl: './signal-demo2.css',
})
export class SignalDemo2 {
  httpClient = inject(HttpClient);
  userId = signal(1);
  userData: WritableSignal<any> = signal({});

  userDetailsEffect = effect(() => {
    const id = this.userId();
    this.fetchUserDetails(id); //every time userID signal changes, fetchUserDetails() is called
  });

  fetchUserDetails(id: number) {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(catchError(() => of({})))
      .subscribe((response: any) => {
        this.userData.set(response);
      });
  }

  destroyEffect() {
    this.userDetailsEffect.destroy();
  }

  incrementUserId() {
    this.userId.update(val => val + 1);
  }
}
