import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-classprofilepop',
  templateUrl: './classprofilepop.component.html',
  styleUrls: ['./classprofilepop.component.css']
})
export class ClassprofilepopComponent implements OnInit {
  classprofileForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.classprofileForm = this.formBuilder.group({
      name: ['', Validators.required],
      doc: ['', Validators.required],
      slogan: ['', Validators.required],
      logo: ['', Validators.required],
      branchname: ['', Validators.required],
      address: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
    
      panno: ['', Validators.required],
      aadharno: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      collegeName: ['', Validators.required],
      gstno: ['', Validators.required],

  });
}

  onSubmit() {
    if (this.classprofileForm.valid) {
    
      console.log(this.classprofileForm.value);
    }

}
}