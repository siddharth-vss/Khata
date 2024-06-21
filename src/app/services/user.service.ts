import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:3000";
  state = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4MjJlOTBmOTk5YjU3YjAwN2NkNGQiLCJuYW1lIjoiU3AiLCJlbWFpbCI6InRlc3RAdGVzdC5tYWlsIiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsInBob25lIjoiMTIzNDU2Nzg5MCIsImNpdHkiOiJzdHJpbmciLCJjcmVhdGVkQXQiOiIyMDI0LTA2LTExVDEwOjExOjUzLjE0MiswMDowMCIsInVwZGF0ZWRBdCI6IjIwMjQtMDYtMTFUMTA6MTE6NTMuMTQyKzAwOjAwIiwiX192IjoiMCIsImJhbGFuY2UiOiI1MDAwMDAwMCJ9.FCJsA55TPIgbtKOP67tDGABJU7fwGJVzESFcwrtZ00s";
  constructor( private users : HttpClient  ) { }


  user(){
    return  this.users.get(`${this.url}/user`,{
      headers: {
        Authorization: `Bearer ${this.state}`,
      }
    });
  }
  finduser(id : string){
    return  this.users.get(`${this.url}/user/${id}`,{
      headers: {
        Authorization: `Bearer ${this.state}`,
      }
    });
  }

}
