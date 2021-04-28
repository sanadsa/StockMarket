import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStock } from 'src/commons/interfaces/Stock_Interfaces';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  getAllSymbolsByText(text: string): Observable<any> {
    return this.http.get<any>(
      'https://mobiledev.ordernet.co.il/api/stocks?query=' + text
    );
  }

  getStockBySymbol(symbol: string): Observable<IStock> {
    return this.http.get<IStock>(
      'https://mobiledev.ordernet.co.il/api/stocks?symbols=' + symbol
    );
  }

  getStocksBySymbols(symbols: string[], updateId): Observable<IStock[]> {
    console.log(symbols);

    return this.http.get<IStock[]>(
      'https://mobiledev.ordernet.co.il/api/stocks?symbols=' +
        symbols +
        '&updateid=' +
        updateId
    );
  }
}
