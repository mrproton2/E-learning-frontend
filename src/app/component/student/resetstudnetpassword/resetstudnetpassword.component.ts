import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-resetstudnetpassword',
  templateUrl: './resetstudnetpassword.component.html',
  styleUrls: ['./resetstudnetpassword.component.css']
})
export class ResetstudnetpasswordComponent implements OnInit {
  passwordForm: FormGroup;
  res:any;
  constructor(
    private formBuilder: FormBuilder,
    private service: MasterService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    const activeusersession = sessionStorage.getItem('activeuser')
    this.passwordForm = this.formBuilder.group({
      userid: [activeusersession, Validators.required],
      existingPassword: ['', Validators.required],
      newPassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,12}$/)
      ])],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('newPassword').value;
    const confirmPassword = formGroup.get('confirmPassword').value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword').setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword').setErrors(null);
    }
  }

  resetPassword() {
    if (this.passwordForm.valid) {
      debugger
      this.service.Post(this.passwordForm.value, "StudentProfile/reset").subscribe(result => {
          this.res=result;
        this.toastr.success(this.res)

      })
    } else {
      this.toastr.warning(this.res)
    }

  }
  }
