import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EntryService } from '../services/entry.service';

@Component({
  selector: 'app-entries',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink,CommonModule],
  templateUrl: './entries.component.html',
  styleUrl: './entries.component.css',
})
export class EntriesComponent {
  data: any;
  id: string;
  users: any;
  auth = '666822e90f999b57b007cd4d';
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    // private paymetService: PaymentService,
    private entryService: EntryService
  ) {
    this.userService.user().subscribe((data: any) => {
      this.users = data;
    });

    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.entryService.getall().subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    });
  }
  user(id: string) {
    const test = this.users.filter((e: any) => id == e._id);
    console.log(test[0].name, 'user');
    return test[0].name;
  }
  hello(id: string[]) {
    const data = id.filter((e) => {
      return e != '666822e90f999b57b007cd4d';
    });
  }
  reverse( param : any ){
    var splitString = param.split("-"); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join("-"); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
  }
}
