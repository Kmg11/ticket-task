import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/main/top-bar/top-bar.component';
import { ChartComponent } from './components/main/chart/chart.component';
import { TicketComponent } from './components/main/ticket/ticket.component';
import { TableComponent } from './components/main/table/table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/main/table/user/user.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TicketFileComponent } from './components/main/table/ticket-file/ticket-file.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ChartComponent,
    TicketComponent,
    TableComponent,
    UserComponent,
    TicketFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    InputTextModule,
    InputSwitchModule,
    FormsModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
