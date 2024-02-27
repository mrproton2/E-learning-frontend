import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
  studentscheduletestdata:any;

  constructor( private service: MasterService,){

}

  ngOnInit(): void {
    this.gettestschedule()
  }

  gettestschedule(){
    const activeusersession = sessionStorage.getItem('activeuser')
    this.service.Get(`AddTest/gettestschedulebystudent/${activeusersession}`).subscribe(result => {
      this.studentscheduletestdata = result
      
  })
}

}
