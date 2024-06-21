import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { EntryService } from '../services/entry.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [CommonModule,RouterLink],
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
      this.users = data;
      console.log(this.users);
    });
    this.id = this.route.snapshot.paramMap.get('id') || "" ;

    this.entryService.getEntry(this.id).subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
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
