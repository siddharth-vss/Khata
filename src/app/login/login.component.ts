import { Component, OnInit, inject } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
  private readonly router = inject(Router);

  otp = this.generateOTP();
  show = true;
  password = 'password';
  mailStatus = false;
  email = '';
  redirect = true;
  user :string | null= "";



  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
    this.user = localStorage.getItem('user');
    if (this.user !== null) {
      if (this.user != '') {
        this.router.navigateByUrl('/dashboard');
      }
    }else{
      this.router.navigateByUrl('/login');
    }
  }


  change() {
    this.show = !this.show;
    if (this.password == 'password') {
      this.password = 'text';
    } else {
      this.password = 'password';
    }
  }
  generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
  hello(e?: any) {
    if (e) {
      this.email = e.email;
    }

    const templateParams = {
      to_name: 'S.P.',
      subject: 'O.T.P.',
      OTP_CODE: this.otp,
      email_to: this.email,
      reply_to: this.email,
    };

    this.sendEmail(templateParams);
    this.mailStatus = true;
    // if(e.password == "785626"){
    // window.open("localhost:4200/sidebar");
    // this.router.navigateByUrl('/sidebar');
    // }
  }
  sendEmail(params: any) {
    emailjs
      .send('Sparrow', 'OTPSP', params, {
        publicKey: 'qim4QkwrUvsreELYw',
        limitRate: {
          throttle: 5000, // you can not send more then 1 email per 5 seconds
        },
      })
      .then(
        () => {
          alert('message sent');
          this.mailStatus = true;
        },
        (error) => {
         alert('FAILED...' +  error.text);

        }
      );
  }
  move(e: KeyboardEvent, p: any, c: any, n: any) {
    const length = c.value.length;
    const maxlength = c.getAttribute('maxlength');

    if (length == maxlength) {
      if (n && n.hasAttribute('disabled') && c.value !== '') {
        c.setAttribute('disabled', true);
        n.removeAttribute('disabled');
        n.focus();
      }
    }
    if (e.key === 'Backspace') {
      if (p != '') {
        p.removeAttribute('disabled');
        c.setAttribute('disabled', true);
        c.value = '';
        p.focus();
      }
    }
  }

  compare(e: any) {
    e.forEach((element: {}, index: number) => {
      if (element != this.otp[index]) {
        this.redirect = false;
      }else{
        this.redirect = true;
      }
    });

    if (this.redirect) {
      localStorage.setItem("user",this.email);
      this.router.navigateByUrl('/dashboard');
    }
  }
}
