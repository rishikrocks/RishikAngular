import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-stock-list',
  imports: [
    CommonModule
  ],
  templateUrl: './stock-list.html',
  styleUrl: './stock-list.css',
})
export class StockList {
  api_url = 'http://endeavourtech.ddns.net:8095/stockanalytics/stocks/getAllStockFundamentalsJPA';

  httpClient = inject(HttpClient);

  stockData: Observable<any[]> | undefined;

  ngOnInit(){
    this.stockData = this.httpClient.get<any[]>(this.api_url).pipe(catchError(() => of([])));
  }
}
