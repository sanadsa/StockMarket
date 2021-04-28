import { Component, Input, OnInit } from '@angular/core';
import { IStock } from 'src/commons/interfaces/Stock_Interfaces';

@Component({
  selector: 'stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.css'],
})
export class StockTableComponent {
  @Input() searchedStocks: IStock[];

  constructor() {}
}
