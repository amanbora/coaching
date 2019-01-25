import { Component, OnInit } from '@angular/core';
// import * as CanvasJS from '../../../node_modules/canvasjs';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
    // window.onload = function () {
    //   var chart = new CanvasJS.Chart("chartContainer",
    //   {
    //     title:{
    //       text: "Attendence Record"
    //     },
    //     legend: {
    //       maxWidth: 350,
    //       itemWidth: 120
    //     },
    //     data: [
    //     {
    //       type: "pie",
    //       showInLegend: true,
    //       legendText: "{indexLabel}",
    //       dataPoints: [
    //         { y: 4, indexLabel: "Present " },
    //         { y: 2, indexLabel: "Absent " },
    //         { y: 3, indexLabel: "Remaning" }
    //       ]
    //     }
    //     ]
    //   });
    //   chart.render();
    // }

  
  }

}
