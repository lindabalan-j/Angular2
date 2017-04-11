import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
     <a routerLink="/dash" routerLinkActive="active">Lindu</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a routerLink="/dashboard" routerLinkActive="active">Home</a></li>
       <li><a routerLink="/dash" routerLinkActive="active">About</a></li>
      <li> <a routerLink="/login" routerLinkActive="active">Logout</a></li>
     
    </ul>
  </div>
</nav>
  
    
  `,
  
})
export class DashComponent {
  title = 'Tour of Heroes';
}
