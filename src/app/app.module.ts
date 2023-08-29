import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/main/top-bar/top-bar.component';
import { ChartComponent } from './components/main/chart/chart.component';
import { TicketComponent } from './components/main/ticket/ticket.component';
import { TableComponent } from './components/main/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ChartComponent,
    TicketComponent,
    TableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
