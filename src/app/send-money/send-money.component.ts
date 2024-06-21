import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-send-money',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './send-money.component.html',
  styleUrl: './send-money.component.css'
})
export class SendMoneyComponent implements OnInit{
  data: any;
  constructor(
    private userService: UserService,
    // private paymetService: PaymentService,
    // private entryService: EntryService,
  ) {}

  ngOnInit(): void {
    this.userService.user().subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
