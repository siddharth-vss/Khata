import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { PaymentService } from '../services/payment.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-show-money',
  standalone: true,
  imports: [NgFor, NgIf, NgClass,RouterLink],
  templateUrl: './show-money.component.html',
  styleUrl: './show-money.component.css',
})
export class ShowMoneyComponent implements OnInit {
  data: any;
  user: any;
  constructor(
    public userService: UserService,
    private paymentService: PaymentService
  ) {
    this.paymentService.getall().subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }

  ngOnInit(): void {
    this.userService.user().subscribe((data: any) => {
      this.user = data;
      console.log(this.user, 'user');
    });
  }
  hello(id: string[]) {
    const data = id.filter((e) => {
      return e != '666822e90f999b57b007cd4d';
    });
    const test = this.user.filter((e: any) => data[0] == e._id);
    return test[0].name;
  }
}
