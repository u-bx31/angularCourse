import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  valid : boolean = true;

  email: string = '';
  password: string = '';
  
  constructor(private router: Router) { }

  login(loginForm : NgForm){
    if(loginForm.valid){
      if(this.email==="admin@gmail.com" && this.password ==='admin321'){
        this.router.navigate(['/index'])
      }
    }
    else{
      this.valid = false;
    }
  }
}
