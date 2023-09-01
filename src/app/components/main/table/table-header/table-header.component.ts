import { Component, Input } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css'],
})
export class TableHeaderComponent {
  @Input({ required: true }) ticketsTable!: Table;

  checkedSwitch: boolean = true;
}
