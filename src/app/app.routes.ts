import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path : 'sidebar',
    component : SidebarComponent
  },
  {
    path : '',
    component : LoginComponent
  }
];
