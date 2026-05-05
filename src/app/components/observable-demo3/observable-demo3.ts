import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, exhaustMap, fromEvent, map, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-observable-demo3',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './observable-demo3.html',
  styleUrl: './observable-demo3.css',
})
export class ObservableDemo3 implements AfterViewInit, OnDestroy {
  @ViewChild('loginBtn') loginBtn!: ElementRef<HTMLButtonElement>;

  private readonly destroy$ = new Subject<void>();
  searchResult$?: Observable<any[]>;
  searchForm: FormGroup;

  constructor(private http: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl(),
    });
  }

  ngOnInit() {
    const searchField = this.searchForm.get('searchField');

    if (!searchField) {
      return;
    }

    this.searchResult$ = searchField.valueChanges.pipe(
      switchMap((term) => this.http.get<any>(`https://dummyjson.com/users/search?q=${term}`)),
      map((response: any) => (response.users.length > 0 ? response.users : [])),
    );
  }

  ngAfterViewInit() {
    fromEvent(this.loginBtn.nativeElement, 'click')
      .pipe(
        exhaustMap(() => this.http.get('https://httpbin.org/delay/5')),
        takeUntil(this.destroy$)
      )
      .subscribe({
      next: (res) => console.log('Response:', res),
      error: (err) => console.error('Error:', err),
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
