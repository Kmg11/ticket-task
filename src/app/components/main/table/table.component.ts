import { Component } from '@angular/core';
import { TicketType } from 'src/app/types/ticket.type';
import { ticketsData } from './ticketsData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  checkedSwitch: boolean = true;
  tickets: TicketType[] = ticketsData;
  rowsPerPageOptions = [5, 10, 15];
  rows = this.rowsPerPageOptions[0];
  pages = Array.from(Array(Math.ceil(this.tickets.length / this.rows)).keys());
  first = 0;
}
