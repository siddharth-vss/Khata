import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit, inject  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, NgFor, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  private readonly router = inject(Router);
  show = false;
  close = false;
  user : any;

  sections = [
    {
      section: 'Dashboard',
      items: [
        { component: 'Overview', icon: 'bx bx-home-alt', path: 'abc' },
        { component: 'All Projects', icon: 'bx bx-grid-alt', path: '' },
      ],
    },
    { section: 'Dashboard' },
    { section: 'Dashboard' },
  ];

  constructor() {
    this.show = false;
    this.close = true;
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
    this.user = localStorage.getItem('user');
    if (this.user !== null) {
      if (this.user === '') {
        this.router.navigateByUrl('/');
      }
    }
  }
  toggleLock() {
    this.show = !this.show;
  }
  hideSidebar(e: any) {
    if (e.classList.contains('hoverable')) {
      this.close = true;
    }
  }
  toggleSidebar() {
    this.close = !this.close;
    console.log(this.close);
    // this.show =!this.show;
    // console.log(this.show);
  }
  showSidebar(e: any) {
    if (e.classList.contains('hoverable')) {
      this.close = false;
    }
  }
}
