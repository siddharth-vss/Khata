import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly router = inject(Router);

  show = true;
  password = "password";
$e: any;
  change(){
    this.show =!this.show;
    if(this.password == "password"){
        this.password = "text";
    }else{
      this.password = "password";
    }
  }
  hello(e : any){
    console.log(e);
    if(e.email == "testuser@mail.com" && e.password == "password"){
        // window.open("localhost:4200/sidebar");
        this.router.navigateByUrl('/sidebar');
    }
  }
}
