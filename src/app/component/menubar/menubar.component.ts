import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { AddstreamComponent } from '../classes/addstream/addstream.component';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): 
  void {
    throw new Error('Method not implemented.');
  }
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  loginpage() {
    debugger
    this.router.navigate(['/app-addstream']);
  }
  // loginpage(){
  //   this.router.navigate([LoginComponent]);}

}
