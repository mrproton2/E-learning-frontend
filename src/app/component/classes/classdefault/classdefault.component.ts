import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-classdefault',
  templateUrl: './classdefault.component.html',
  styleUrls: ['./classdefault.component.css']
})
export class ClassdefaultComponent  {

constructor(private toastr: ToastrService,
  private router: Router){

}
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
    this.toastr.success("Successfully logout!!")
  }
}
