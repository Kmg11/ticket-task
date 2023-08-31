import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { TicketType } from 'src/app/types/ticket.type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  checkedSwitch: boolean = true;

  tickets: TicketType[] = [
    {
      id: 1,
      user: {
        name: 'محمد محمود',
        phone: '0123456789',
      },
      cinemas: ['سينما مصر', ' مول العرب', 'برج الأطنان', 'سرايا القبة'],
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticketFile: {
        fileName: 'تذكرة رقم 45.pdf',
        fileSize: '9mb',
        fileType: 'pdf',
      },
      ticketNumber: 101,
      ticketPrice: 40,
    },
    {
      id: 2,
      user: {
        name: 'أحمد محمود',
        phone: '0123456789',
        image: '../../../../assets/images/person.png',
      },
      cinemas: ['سينما مصر', ' مول العرب', 'برج الأطنان', 'سرايا القبة'],
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticketFile: {
        fileName: 'تذكرة رقم 45.pdf',
        fileSize: '9mb',
        fileType: 'pdf',
      },
      ticketNumber: 101,
      ticketPrice: 50,
    },
    {
      id: 3,
      user: {
        name: 'أحمد محمود',
        phone: '0123456789',
        image: '../../../../assets/images/person.png',
      },
      cinemas: ['سينما مصر', ' مول العرب', 'برج الأطنان', 'سرايا القبة'],
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticketFile: {
        fileName: 'تذكرة رقم 45.pdf',
        fileSize: '9mb',
        fileType: 'pdf',
      },
      ticketNumber: 101,
      ticketPrice: 40,
    },
    {
      id: 4,
      user: {
        name: 'أحمد محمود',
        phone: '0123456789',
        image: '../../../../assets/images/person.png',
      },
      cinemas: ['سينما مصر', ' مول العرب', 'برج الأطنان', 'سرايا القبة'],
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticketFile: {
        fileName: 'تذكرة رقم 45.pdf',
        fileSize: '9mb',
        fileType: 'pdf',
      },
      ticketNumber: 101,
      ticketPrice: 40,
    },
    {
      id: 1,
      user: {
        name: 'أحمد محمود',
        phone: '0123456789',
      },
      cinemas: ['سينما مصر', ' مول العرب', 'برج الأطنان', 'سرايا القبة'],
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticketFile: {
        fileName: 'تذكرة رقم 45.pdf',
        fileSize: '9mb',
        fileType: 'pdf',
      },
      ticketNumber: 101,
      ticketPrice: 40,
    },
    {
      id: 2,
      user: {
        name: 'أحمد محمود',
        phone: '0123456789',
      },
      cinemas: ['سينما مصر', ' مول العرب', 'برج الأطنان', 'سرايا القبة'],
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticketFile: {
        fileName: 'تذكرة رقم 45.pdf',
        fileSize: '9mb',
        fileType: 'pdf',
      },
      ticketNumber: 101,
      ticketPrice: 40,
    },
    {
      id: 3,
      user: {
        name: 'أحمد محمود',
        phone: '0123456789',
      },
      cinemas: ['سينما مصر', ' مول العرب', 'برج الأطنان', 'سرايا القبة'],
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticketFile: {
        fileName: 'تذكرة رقم 45.pdf',
        fileSize: '9mb',
        fileType: 'pdf',
      },
      ticketNumber: 101,
      ticketPrice: 40,
    },
    {
      id: 4,
      user: {
        name: 'أحمد محمود',
        phone: '0123456789',
      },
      cinemas: ['سينما مصر', ' مول العرب', 'برج الأطنان', 'سرايا القبة'],
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticketFile: {
        fileName: 'تذكرة رقم 45.pdf',
        fileSize: '9mb',
        fileType: 'pdf',
      },
      ticketNumber: 101,
      ticketPrice: 40,
    },
    {
      id: 1,
      user: {
        name: 'أحمد محمود',
        phone: '0123456789',
      },
      cinemas: ['سينما مصر', ' مول العرب', 'برج الأطنان', 'سرايا القبة'],
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticketFile: {
        fileName: 'تذكرة رقم 45.pdf',
        fileSize: '9mb',
        fileType: 'pdf',
      },
      ticketNumber: 101,
      ticketPrice: 40,
    },
    {
      id: 2,
      user: {
        name: 'أحمد محمود',
        phone: '0123456789',
      },
      cinemas: ['سينما مصر', ' مول العرب', 'برج الأطنان', 'سرايا القبة'],
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticketFile: {
        fileName: 'تذكرة رقم 45.pdf',
        fileSize: '9mb',
        fileType: 'pdf',
      },
      ticketNumber: 101,
      ticketPrice: 40,
    },
    {
      id: 3,
      user: {
        name: 'أحمد محمود',
        phone: '0123456789',
      },
      cinemas: ['سينما مصر', ' مول العرب', 'برج الأطنان', 'سرايا القبة'],
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticketFile: {
        fileName: 'تذكرة رقم 45.pdf',
        fileSize: '9mb',
        fileType: 'pdf',
      },
      ticketNumber: 101,
      ticketPrice: 40,
    },
    {
      id: 4,
      user: {
        name: 'أحمد محمود',
        phone: '0123456789',
      },
      cinemas: ['سينما مصر', ' مول العرب', 'برج الأطنان', 'سرايا القبة'],
      numberOfPeople: 1,
      numberOfPurchases: 'مرة واحدة',
      ticketFile: {
        fileName: 'تذكرة رقم 45.pdf',
        fileSize: '9mb',
        fileType: 'pdf',
      },
      ticketNumber: 101,
      ticketPrice: 40,
    },
  ];

  clear(table: Table) {
    table.clear();
  }
}
