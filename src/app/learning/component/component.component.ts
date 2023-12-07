import {NgIf} from "@angular/common";
import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis
} from "ng-apexcharts";
import { NgApexchartsModule } from "ng-apexcharts";
import {ShadowDoomComponent} from "./encapsulation/shadow-doom/shadow-doom.component";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: 'app-component',
  standalone: true,
  imports: [NgApexchartsModule, NgIf, ShadowDoomComponent],
  templateUrl: './component.component.html',
  styleUrl: './component.component.scss'
})
export class ComponentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: "ngOnChanges",
              y: [
                new Date("2019-03-02").getTime(),
                new Date("2019-03-10").getTime()
              ]
            },
            {
              x: "ngOnInit",
              y: [
                new Date("2019-03-03").getTime(),
                new Date("2019-03-04").getTime()
              ]
            },
            {
              x: "ngDoCheck",
              y: [
                new Date("2019-03-04").getTime(),
                new Date("2019-03-05").getTime()
              ]
            },
            {
              x: "ngAfterContentInit",
              y: [
                new Date("2019-03-05").getTime(),
                new Date("2019-03-06").getTime()
              ]
            },
            {
              x: "ngAfterContentChecked",
              y: [
                new Date("2019-03-06").getTime(),
                new Date("2019-03-07").getTime()
              ]
            },
            {
              x: "ngAfterViewInit",
              y: [
                new Date("2019-03-07").getTime(),
                new Date("2019-03-08").getTime()
              ]
            },
            {
              x: "ngAfterViewChecked",
              y: [
                new Date("2019-03-08").getTime(),
                new Date("2019-03-09").getTime()
              ]
            },
            {
              x: "ngOnDestroy",
              y: [
                new Date("2019-03-09").getTime(),
                new Date("2019-03-10").getTime()
              ]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeBar"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      xaxis: {
        type: "datetime"
      }
    };
  }
  ngOnChanges() {
    console.log('ngOnChanges')
  }
  ngOnInit() {
    console.log('ngOnInit')
  }
  ngDoCheck() {
    console.log('ngDoCheck')
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
}
