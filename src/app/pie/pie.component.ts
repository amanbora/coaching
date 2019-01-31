import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js'
// import * as CanvasJS from '../../../node_modules/canvasjs';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
    var colors = ['#007bff','red','#28a745'];
    
    var chDonutData3 = {
      labels: ['Present', 'Absent', 'Remaining'],
      datasets: [
        {
          backgroundColor: colors.slice(0,3),
          borderWidth: 0,
          data: [21, 45, 55]
        }
      ]
  };
                /* 3 donut charts */
                var donutOptions = {
                cutoutPercentage: 85, 
                legend: {position:'bottom', padding:5, labels: {pointStyle:'circle', usePointStyle:true}}
                };
                var chDonut3 = document.getElementById("chDonut3");
                if (chDonut3) {
                new Chart(chDonut3, {
                    type: 'pie',
                    data: chDonutData3,
                    options: donutOptions
                });
                }

  
  }

}
