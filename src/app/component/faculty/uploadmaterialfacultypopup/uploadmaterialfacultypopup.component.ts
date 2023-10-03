import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-uploadmaterialfacultypopup',
  templateUrl: './uploadmaterialfacultypopup.component.html',
  styleUrls: ['./uploadmaterialfacultypopup.component.css']
})
export class UploadmaterialfacultypopupComponent {
  uploadmaterialForm: FormGroup;
  selectedDate!: Date;

  constructor(private formBuilder: FormBuilder) {
    this.uploadmaterialForm = this.formBuilder.group({
      name: '',
      batch: '',
      contenttype: '',
      subject: '',
      subjects: this.formBuilder.array([])
      
    });
  }
  get subjects() {
    return this.uploadmaterialForm.get('subjects') as FormArray;
  }

  addmaterial() {
    const subjectGroup = this.formBuilder.group({
      title: '',
      uploaddate: '',
      uploadby: '',
      selectfile: '',
      
    });
    this.subjects.push(subjectGroup);
  }

  removesubject(index: number) {
    this.subjects.removeAt(index);
  }

  upload() {
    console.log(this.uploadmaterialForm.value);
  }
}
