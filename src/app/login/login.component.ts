import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from '../service/master.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  activeuser: boolean = false;
  sessionby: any;


  constructor(private fb: FormBuilder,
    private service: MasterService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user_name: ['', Validators.required],
      user_password: ['', Validators.required]
    
    });
  }

  setLoggedIn(user_id: any) {
    
    sessionStorage.setItem('activeuser', this.sessionby[0].user_id);
    sessionStorage.setItem('RoleID', this.sessionby[0].RoleID);
  }

  IsLoggedIn() {
    return sessionStorage.getItem('activeuser') != null;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginForm.value.user_name
      const formValue = this.loginForm.value;
      this.service.loginget(`Login/loginget/${formValue.user_name}/${formValue.user_password}`).subscribe(result => {
        this.sessionby = result
        debugger
        if (result[0].RoleID == 1 && result[0].user_id) {
          debugger
          this.router.navigate(['/classdefault']);
          this.toastr.success('Successfully Log in')
          this.setLoggedIn(this.sessionby[0].user_id)
          this.setLoggedIn(this.sessionby[0].RoleID)
        }
        else if (result[0].RoleID == 2 && result[0].user_id) {
          debugger
          this.router.navigate(['/studentdefault']);
          this.toastr.success('Successfully Log in')
          this.setLoggedIn(this.sessionby[0].user_id)
          this.setLoggedIn(this.sessionby[0].RoleID)
        }
        else if (result[0].RoleID == 3 && result[0].user_id) {
          debugger
          this.router.navigate(['/facultydefault']);
          this.toastr.success('Successfully Log in')
          this.setLoggedIn(this.sessionby[0].user_id)
          this.setLoggedIn(this.sessionby[0].RoleID)
        }
        else if(this.sessionby.length==0){
          debugger
          this.toastr.warning('Check User ID and Password!')
          sessionStorage.setItem('activeuser', 'false');
          this.router.navigate(['/login']);
        }
        else if(result[0].RoleID == null || result[0].RoleID=='' || result[0].RoleID==undefined 
        &&  result[0].user_id == null || result[0].user_id=='' || result[0].user_id==undefined){
          this.toastr.warning('Check User ID and Password!')
          sessionStorage.setItem('activeuser', 'false');
          this.router.navigate(['/login']);
        }
      })
    }
  }

}