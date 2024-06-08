import {Component, ViewChild} from '@angular/core';
import {NgApexchartsModule} from "ng-apexcharts";

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};


@Component({
  selector: 'app-election-report',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './election-report.component.html',
  styleUrl: './election-report.component.css'
})
export class ElectionReportComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Nos votes",
          data: [150, 1200, 3000, 2000, 940]
        },
        {
          name: "Autres",
          data: [60, 900, 1000, 450, 40]
        }
      ],
      chart: {
        type: "bar",
        height: 400,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "Bureau Lycée 1",
          "Bureau Lycée 2",
          "Bureau Lycée 3",
          "Bureau Lycée 4",
          "Bureau Lycée 5",
        ]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
  }

}
