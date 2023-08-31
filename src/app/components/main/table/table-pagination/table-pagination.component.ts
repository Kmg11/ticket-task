import { Component, Input } from '@angular/core';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { TicketType } from 'src/app/types/ticket.type';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css'],
})
export class TablePaginationComponent {
  @Input({ required: true }) rowsPerPageOptions: number[] = [];
  @Input({ required: true }) rows: number = 0;
  @Input({ required: true }) tickets: TicketType[] = [];
  @Input({ required: true }) pages: number[] = [];
  @Input({ required: true }) first: number = 0;

  ngOnInit() {
    console.log(this.tickets);
  }

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
