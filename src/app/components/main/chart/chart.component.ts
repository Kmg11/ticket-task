import { Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import Annotation from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  constructor() {
    Chart.register(Annotation);
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [200, 250, 200, 300, 400, 270, 400, 300, 255, 250, 200, 400],
        yAxisID: 'y',
        backgroundColor: 'rgba(138, 116, 249, 0.2)',
        borderColor: 'rgb(138, 116, 249)',
        borderWidth: 3,
        pointBackgroundColor: '#8A74F9',
        pointBorderWidth: 1.613,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: [
      'ديسمبر',
      'نوفمبر',
      'أكتوبر',
      'سبتمبر',
      'أغسطس',
      'يوليو',
      'يونيو',
      'مايو',
      'أبريل',
      'مارس',
      'فبراير',
      'يناير',
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    elements: {
      line: { tension: 0.5 },
      point: { radius: 8 },
    },
    scales: {
      y: { display: false },
      x: {
        ticks: {
          align: 'center',
          padding: 24,
          font: {
            size: 12,
            family: 'Neo Sans Arabic',
            weight: 'medium',
            lineHeight: 1.5,
          },
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1E1B39',
        titleColor: '#E5E5EF',
        bodyFont: {
          family: 'Inter',
          size: 12,
          weight: 'normal',
          lineHeight: 1.5,
        },
      },
    },
    locale: 'ar',
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
}
