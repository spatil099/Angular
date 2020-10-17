import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent{

  constructor(private router : Router, private auth : AuthService) { }
  private username : string
  private password : string
  public errorMessage : String
  authenticate(form : NgForm){
    if(form.valid){
      this.auth.authenticate(this.username, this.password)
      .subscribe(response => {
      if (response) {
      this.router.navigateByUrl("/admin/main");
      }
      this.errorMessage = "Authentication Failed";
      })
    }else{
     this.errorMessage = 'Form Data Entered is invalid'
    }
  }
}
