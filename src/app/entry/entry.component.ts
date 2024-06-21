import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { EntryService } from '../services/entry.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css',
})
export class EntryComponent {
  data: any;
  id: string;
  users: any;
  auth = '666822e90f999b57b007cd4d';
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private entryService: EntryService
  ) {
    this.userService.user().subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    });
    this.id = this.route.snapshot.paramMap.get('id') || "" ;

    this.entryService.getEntry(this.id).subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
}
