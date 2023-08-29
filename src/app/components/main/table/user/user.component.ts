import { Component, Input } from '@angular/core';
import { UserType } from 'src/app/types/ticket.type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user!: UserType;
}
