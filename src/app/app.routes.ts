import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowMoneyComponent } from './show-money/show-money.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { EntriesComponent } from './entries/entries.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { FilesComponent } from './files/files.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaymentComponent } from './payment/payment.component';
import { EntryComponent } from './entry/entry.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: SidebarComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'payments',
        children: [
          { path: '', component: ShowMoneyComponent },
          { path: 'create', component: SendMoneyComponent },
          { path: ':id', component: PaymentComponent },
        ],
      },
      {
        path: 'entries',
        children: [
          { path: '', component: EntriesComponent },
          { path: 'create', component: CreateEntryComponent },
          { path: ':id', component: EntryComponent },
        ],
      },
      { path: 'files',
        children: [
          { path: '', component: FilesComponent },
          { path: ':id', component: FilesComponent }
        ],
      },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '/login' },
];
