import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  lecture: number;
  test: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', lecture: 1.0079, test: 'H'},
  {position: 2, name: 'Helium', lecture: 4.0026, test: 'He'},
];

@Component({
  selector: 'app-attendancepopup',
  templateUrl: './attendancepopup.component.html',
  styleUrls: ['./attendancepopup.component.css']
})
export class AttendancepopupComponent {
  attendanceForm: FormGroup;
  displayedColumns: string[] = ['srno', 'name', 'lecture', 'test'];
  dataSource= ELEMENT_DATA;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

      // Student Details
      this.attendanceForm = this.formBuilder.group({
        batchname: ['', Validators.required],
        date: ['', Validators.required],
        allotfaculty: ['', Validators.required],
        timing: ['', Validators.required],
        subject: ['', Validators.required],
        testtopic: ['', Validators.required],
      });
    }
  
  
  onSubmit() {
    if (this.attendanceForm.valid) {  
      console.log(this.attendanceForm.value);
    }
  }

 
}

