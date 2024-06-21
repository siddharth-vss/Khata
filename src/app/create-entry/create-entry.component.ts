import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EntryService } from '../services/entry.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-entry',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-entry.component.html',
  styleUrl: './create-entry.component.css'
})
export class CreateEntryComponent {
  private readonly router = inject(Router);
constructor(
  private entry : EntryService,
){}
submit(data : any){
  this.entry.saveEntry(data).subscribe((data)=>{
    console.log(data);
  });
  console.log(data);
  this.router.navigateByUrl('/entries');

}
}
