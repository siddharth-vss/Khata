import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink],
  templateUrl: './files.component.html',
  styleUrl: './files.component.css'
})
export class FilesComponent implements OnInit {
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
