import { Component, Input } from '@angular/core';
import { TicketFileType } from 'src/app/types/ticket.type';

@Component({
  selector: 'app-ticket-file',
  templateUrl: './ticket-file.component.html',
  styleUrls: ['./ticket-file.component.css'],
})
export class TicketFileComponent {
  @Input() ticketFile!: TicketFileType;
}
