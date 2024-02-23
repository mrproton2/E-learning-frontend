import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-attendancesubjectpop',
  templateUrl: './attendancesubjectpop.component.html',
  styleUrls: ['./attendancesubjectpop.component.css']
})
export class AttendancesubjectpopComponent implements OnInit {
  scheduledata: any;
  attedancetabledata: any;
  studentdata: any;
  dataSource: any;
  checkboxForm: FormGroup;
  datas: any[];
  parentSelector: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: MasterService,
    private dialog: MatDialog
  ) {
    this.checkboxForm = this.formBuilder.group({});
    this.data = [];
  }


  ngOnInit() {


    // this.dataSource.forEach(item => {
    //   this.checkboxForm.addControl(item.id.toString(), new FormControl(item.checked));
    // });

    this.getscheduledata()
    this.attedancetabledata = this.data;
    console.log(this.attedancetabledata)
    this.getstudentrecord()
  }


  getscheduledata() {
    debugger
    this.service.Get("Schedule/getschedule").subscribe(scheduledatas => {
      let data = scheduledatas

      this.scheduledata = data.filter((item) => item.batchname == this.data.batchname);
      console.log(this.scheduledata)
      // this.dataSource = this.studentdata.filter((item) => item.batchName == this.attedancetabledata);  
    });
  }

  getstudentrecord() {
    this.service.getstudenddata("Attendance/getstudenddata").subscribe(studentdata => {
      debugger
      this.studentdata = studentdata;
      this.dataSource = this.studentdata.filter((item) => item.batchName == this.data.batchname);
      console.log(this.dataSource)
    });
  }

  onSubmit() {
    const formData = this.data.map(item => {
      return { id: item.id, name: item.name, checked: this.checkboxForm.get(item.id.toString())!.value };
    });
    this.service.Post(formData, 'Attendance/getstudenddata').subscribe(response => {
      console.log('Data sent successfully:', response);
    });
  }





  food = [
    { id: 1, select: false, name: 'dumpling' },
    { id: 2, select: true, name: 'burger' },
    { id: 3, select: true, name: 'sandwich' },
  ];

  onChangeFood($event) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    this.food = this.food.map((d) => {
      if (d.id == id) {
        d.select = isChecked;
        this.parentSelector = false;
        return d;
      }
      if (id == -1) {
        d.select = this.parentSelector;
        return d;
      }
      return d;
    });
    console.log(this.food);
  }

}


