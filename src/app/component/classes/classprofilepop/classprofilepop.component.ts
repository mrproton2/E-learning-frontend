import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-classprofilepop',
  templateUrl: './classprofilepop.component.html',
  styleUrls: ['./classprofilepop.component.css']
})
export class ClassprofilepopComponent implements OnInit {
  classprofileForm: FormGroup;
  data: any;
  classLogo: any;
  file: any;
  formData: FormData;
  fileToUpload: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: MasterService,
    private toastr: ToastrService,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.classprofileForm = this.formBuilder.group({
      classname: ['', Validators.required],
      date_of_creation: ['', Validators.required],
      slogan: ['', Validators.required],
      myFile: [''],
      branchname: ['', Validators.required],
      address: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required]],
      panno: ['', Validators.required],
      aadharno: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      gstno: ['', Validators.required],

    });
  }



  handleFileInput(e: any) {
    debugger
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      this.classLogo = reader.result;
      this.fileToUpload = e?.target?.files[0];
      console.log(this.fileToUpload)
    }
  }




  checkActionType() {
    debugger
    const formData: FormData = new FormData();
    formData.append('myFile', this.fileToUpload);
    formData.append('classname', this.classprofileForm.value.classname);
    formData.append('date_of_creation', this.classprofileForm.value.date_of_creation);
    formData.append('slogan', this.classprofileForm.value.slogan);
    formData.append('branchname', this.classprofileForm.value.branchname);
    formData.append('address', this.classprofileForm.value.address);
    formData.append('contact', this.classprofileForm.value.contact);
    formData.append('email', this.classprofileForm.value.email);
    formData.append('panno', this.classprofileForm.value.panno);
    formData.append('aadharno', this.classprofileForm.value.aadharno);
    formData.append('gstno', this.classprofileForm.value.gstno);
    return this.http.post('https://localhost:44390/api/ClassProfile', formData,
      {
        headers: new HttpHeaders()
      })
      .subscribe(() => this.toastr.success('Successfully'));
  }




  // addclass() {
  //   debugger
  //   if (this.classprofileForm.valid) {
  //     this.service.addclassprofile(this.classprofileForm.value, "ClassProfile/addclassForm").subscribe(result => {
  //       this.data = result;
  //       console.log(this.data)
  //       this.toastr.success('Successfully')
  //       //this.closepopup();
  //     })
  //   } else {
  //     this.toastr.warning('Please Check Form Again!')
  //   }
  // }
}