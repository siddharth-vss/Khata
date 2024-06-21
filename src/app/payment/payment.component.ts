import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NgFor, CommonModule,NgIf, NgClass,RouterLink],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  data: any;
  id : string;
  users: any;
  auth = "666822e90f999b57b007cd4d" ;
  constructor(
    private route: ActivatedRoute,
    public userService: UserService,
    private paymentService: PaymentService
  ) {
    this.userService.user().subscribe((data: any) => {
      this.users = data;
    });

    this.id = this.route.snapshot.paramMap.get('id') || "" ;
    this.paymentService.getpayment(this.id).subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });


  }

  user(id : string){
    const test = this.users.filter((e: any) => id == e._id);
    console.log(test[0].name,"user")
    return test[0].name;
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
/*
{
    "users": [
        "666822e90f999b57b007cd4d",
        "6668404845b64d5f38067e12"
    ],
    "sender": "666822e90f999b57b007cd4d",
    "amount": 5000,
    "nonUser": "false",
    "createdAt": "2024-06-17T06:24:47.580Z",
    "updatedAt": "2024-06-17T06:24:47.580Z",
    "__v": 0
}
*/
