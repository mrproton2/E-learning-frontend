import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addsubjectpop',
  templateUrl: './addsubjectpop.component.html',
  styleUrls: ['./addsubjectpop.component.css']
})
export class AddsubjectpopComponent {
  subjectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.subjectForm = this.formBuilder.group({
      name: '',
      subjects: this.formBuilder.array([])
      
    });
  }
  get subjects() {
    return this.subjectForm.get('subjects') as FormArray;
  }

  addsubject() {
    const subjectGroup = this.formBuilder.group({
      sub: '',
      
    });
    this.subjects.push(subjectGroup);
  }

  removesubject(index: number) {
    this.subjects.removeAt(index);
  }

  onSubmit() {
    console.log(this.subjectForm.value);
  }
}
