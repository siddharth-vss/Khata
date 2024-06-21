import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { EntryService } from '../services/entry.service';
import { PaymentService } from '../services/payment.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [UserService, EntryService, PaymentService],
})
export class DashboardComponent implements OnInit {
  data: any;
  constructor(
    private userService: UserService,
    private paymetService: PaymentService,
    private entryService: EntryService,
  ) {}

  ngOnInit(): void {
    this.userService.user().subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    });
  }

  hello(){
    this.paymetService.getall().subscribe((data: any) => {
      console.log(data);
    });

    this.hii();
  }
  hii(){
    this.entryService.getall().subscribe((data: any) => {
      console.log(data);
    });
  }
}
