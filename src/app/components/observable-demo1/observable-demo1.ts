import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, filter, from, interval, map, shareReplay, takeUntil } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  readonly num: Observable<number> = interval(1000).pipe(shareReplay({ bufferSize: 1, refCount: true }));
  readonly even_num = this.num.pipe(filter((val) => val % 2 === 0));
  readonly num_square = this.num.pipe(map((val) => val * val));

  ngOnInit() {
    this.interval_demo();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  interval_demo() {
    this.num.pipe(takeUntil(this.destroy$)).subscribe((val) => console.log('Value : ', val));
  }

  from_demo() {
    const cars = ['Tata', 'Honda', 'Maruti'];
    const carsObservable = from(cars);
    console.log(carsObservable);

    carsObservable.subscribe({
      next: (nextValue) => console.log('next value : ', nextValue),
      error: (err) => console.log('Error : ', err),
      complete: () => console.log('All Data Received'),
    });
  }
}
