import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowMoneyComponent } from './show-money/show-money.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { EntriesComponent } from './entries/entries.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { FilesComponent } from './files/files.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'payments',
        children: [
          { path: '', component: ShowMoneyComponent },
          { path: 'create', component: SendMoneyComponent },
        ],
      },
      {
        path: 'entries',
        children: [
          { path: '', component: EntriesComponent },
          { path: 'create', component: CreateEntryComponent },
        ],
      },
      { path: 'files', component: FilesComponent },
    ],
  },
];
