import { Component } from '@angular/core';
import { TicketType } from 'src/app/types/ticket.type';
import { ticketsData } from './ticketsData';
import { DropdownChangeEvent } from 'primeng/dropdown';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  tickets: TicketType[] = ticketsData;
  rowsPerPageOptions = [5, 10, 15];
  rows = this.rowsPerPageOptions[0];
  pages = Array.from(Array(Math.ceil(this.tickets.length / this.rows)).keys());
  first = 0;

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  goToPage(n: number) {
    this.first = n * this.rows;
  }

  isPageActive(page: number): boolean {
    return page === this.first / this.rows;
  }

  isLastPage(): boolean {
    return this.first + this.rows >= this.tickets.length;
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }

  onRowsChange(e: DropdownChangeEvent) {
    this.first = 0;
    this.rows = e.value;
    this.pages = Array.from(
      Array(Math.ceil(this.tickets.length / e.value)).keys()
    );
  }
}
