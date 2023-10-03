import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-addsubstreampopup',
  templateUrl: './addsubstreampopup.component.html',
  styleUrls: ['./addsubstreampopup.component.css']
})
export class AddsubstreampopupComponent implements OnInit {
  addsubstreamForm: FormGroup;
  showOTPVerification: boolean = false;
  selected: string = '';
  data: any

  constructor(private formBuilder: FormBuilder, private service: MasterService) { }

  ngOnInit() {

    // Student Details
    this.addsubstreamForm = this.formBuilder.group({
      addsubstream: ['', Validators.required],
      status: ['', Validators.required],
      doc: ['', Validators.required],
      fees: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],


    });
  }

  closepopup() {

  }
  addsubstream() {
    if (this.addsubstreamForm.valid) {
      this.service.addstream(this.addsubstreamForm.value,"").subscribe(result => {
        this.data = result;
        console.log(this.data)
      })
      console.log(this.addsubstreamForm.value);
    }
  }
}