import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
import { MasterService } from 'src/app/service/master.service';
Chart.register(...registerables);


@Component({
  selector: 'app-facultyattendance',
  templateUrl: './facultyattendance.component.html',
  styleUrls: ['./facultyattendance.component.css']
})
export class FacultyattendanceComponent implements OnInit{

  constructor(private service: MasterService) { }


  ngOnInit(): void {
    this.RenderChart();
   
  }
  RenderChart(){

    const myChart = new Chart("attedance", {
      type: 'bar',
      data: {
          labels: ['January', 'Februray', 'March', 'April', 'May', 'June', 'july', 'August', 'Semtember', 'October', 'November', 'December'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3,20,5,9,10,11,12],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

}
