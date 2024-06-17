import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  {
   show = false ;
   close = false;


    constructor(){
      this.show = false;
      this.close = true;

    }




    toggleLock(){
     this.show = !this.show;
    }
    hideSidebar(e : any ){
      if(e.classList.contains("hoverable")){
        this.close = true;
      }
    }
    toggleSidebar(){
      this.close =!this.close;
      console.log(this.close);
      // this.show =!this.show;
      // console.log(this.show);
    }
    showSidebar(e : any ){
      if(e.classList.contains("hoverable")){
        this.close = false;
      }
    }

}
