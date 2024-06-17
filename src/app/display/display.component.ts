import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  show = true;

  change(){
    this.show  = !this.show;
    // alert(this.show);
  }
}
