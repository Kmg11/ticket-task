import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/main/top-bar/top-bar.component';
import { ChartComponent } from './components/main/chart/chart.component';
import { TicketComponent } from './components/main/ticket/ticket.component';
import { TableComponent } from './components/main/table/table.component';
import { TableHeaderComponent } from './components/main/table/table-header/table-header.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/main/table/user/user.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TicketFileComponent } from './components/main/table/ticket-file/ticket-file.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ChartComponent,
    TicketComponent,
    TableComponent,
    TableHeaderComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
