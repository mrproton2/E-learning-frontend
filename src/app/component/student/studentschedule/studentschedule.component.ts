import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-studentschedule',
  templateUrl: './studentschedule.component.html',
  styleUrls: ['./studentschedule.component.css']
})
export class StudentscheduleComponent implements OnInit {
  apiData: any[];
  studentscheduledat:any;

  constructor(
    private service: MasterService,
  ) {}

  ngOnInit() {
  this.getschedule();
  }
  getschedule(){
    const activeusersession = sessionStorage.getItem('activeuser')
    this.service.Get(`Schedule/studentid/${activeusersession}`).subscribe(result => {
      this.studentscheduledat = result
      console.log(this.studentscheduledat)
  })
}
}