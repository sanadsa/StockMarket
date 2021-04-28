import { Component, OnInit } from '@angular/core';
import { StockService } from './../../commons/services/stock.service';
import { IStock } from 'src/commons/interfaces/Stock_Interfaces';

@Component({
  selector: 'page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css'],
})
export class PageLayoutComponent implements OnInit {
  stocks: IStock[] = [];
  constructor(private stockService: StockService) {}

  ngOnInit(): void {}

  getStock(symbol) {
    this.stockService.getStockBySymbol(symbol).subscribe((res) => {
      this.stocks.push(res[0]);
      console.log(this.stocks);
    });

    setTimeout(() => {
      const updateId = this.stocks[this.stocks.length - 1].UpdateId;
      let symbols = this.stocks.map((s) => {
        return s.Symbol;
      });

      this.stockService
        .getStocksBySymbols(symbols, updateId)
        .subscribe((res) => {
          if (res[0]) this.stocks = res;
        });
    }, 500);
  }
}
