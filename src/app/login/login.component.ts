import { Component } from '@angular/core';
import {SerLogin} from '../Service/SerCommon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  providers:[SerLogin],
   
  templateUrl: './login.component.html',
 //here
  styleUrls: ['./login.css']
  
})
export class LoginComponent {
  login : any={};
  ErrorValue: string;
  constructor(
       private router: Router,
       private SerLogin:SerLogin,
 ){
 
  }
public LoginFrom(){
 
   this.SerLogin.login(this.login.UserName, this.login.Password)
            .subscribe(
              data => {
               
                if(data.IsSuccess == true){
 this.ErrorValue = 'Login Success!'
   this.router.navigate(['/dash']);
                }else{
              this.ErrorValue = 'Invalid credentials!'
                }
            },
            error=>{
              this.ErrorValue = 'Failed!'
            }
              );
}
  
}
