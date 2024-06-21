import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  url = "http://localhost:3000";
  state = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4MjJlOTBmOTk5YjU3YjAwN2NkNGQiLCJuYW1lIjoiU3AiLCJlbWFpbCI6InRlc3RAdGVzdC5tYWlsIiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsInBob25lIjoiMTIzNDU2Nzg5MCIsImNpdHkiOiJzdHJpbmciLCJjcmVhdGVkQXQiOiIyMDI0LTA2LTExVDEwOjExOjUzLjE0MiswMDowMCIsInVwZGF0ZWRBdCI6IjIwMjQtMDYtMTFUMTA6MTE6NTMuMTQyKzAwOjAwIiwiX192IjoiMCIsImJhbGFuY2UiOiI1MDAwMDAwMCJ9.FCJsA55TPIgbtKOP67tDGABJU7fwGJVzESFcwrtZ00s";

  config = {
    headers: {
      Authorization: `Bearer ${this.state}`,
    }
  };

  constructor(private entry :HttpClient) { }

  getall(){
    return this.entry.get(`${this.url}/entry`,this.config);
  }
  getEntry(id : string){
    return this.entry.get(`${this.url}/${id}`,this.config);
  }
}
