import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StockService } from './../../commons/services/stock.service';

@Component({
  selector: 'stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css'],
})
export class StockSearchComponent implements OnInit {
  currentSymbol: string = '';
  symbols: { Symbol: string; Name: string }[] = [];
  @Output() onChosenStock: EventEmitter<string> = new EventEmitter<string>();
  constructor(private stockService: StockService) {}

  ngOnInit(): void {}

  public searchSymbol() {
    this.stockService
      .getAllSymbolsByText(this.currentSymbol)
      .subscribe((res) => {
        this.symbols = res;
      });
  }

  public chooseStock(symbol) {
    this.onChosenStock.emit(symbol);
  }
}
