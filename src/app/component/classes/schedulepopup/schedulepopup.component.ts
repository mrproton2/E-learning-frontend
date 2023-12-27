import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedulepopup',
  templateUrl: './schedulepopup.component.html',
  styleUrls: ['./schedulepopup.component.css']
})
export class SchedulepopupComponent {
  scheduleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.scheduleForm = this.formBuilder.group({
      name: ['', Validators.required],
      batch: ['', Validators.required],
      starttime: ['', Validators.required],
      endtime: ['', Validators.required],
      subjects: this.formBuilder.array([])
      
    });
  }
  get subjects() {
    return this.scheduleForm.get('subjects') as FormArray;
  }

  addlecture() {
    const schudelueGroup = this.formBuilder.group({
      sub: '',
      faculty:'',
      date:'',
      notice:'',
      type:'',
      strattime:'',
      endtime:''
      
    });
    this.subjects.push(schudelueGroup);
  }

  removesubject(index: number) {
    this.subjects.removeAt(index);
  }

  onSubmit() {
    console.log(this.scheduleForm.value);
  }
}
