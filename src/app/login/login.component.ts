import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  UserName1=0;
  get UserName() {
    
    return this.UserName1;
  }

  set UserName(value) {
    this.UserName1 = value;
    console.log( this.UserName1);
  }

  
}
