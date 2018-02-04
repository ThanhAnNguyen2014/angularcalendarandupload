import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportComponent } from './import/import.component';
import { UploadCsvComponent } from './uploadcsv/uploadcsv.component';


// routes
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'import', component: ImportComponent },
  { path: 'upload', component: UploadCsvComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    ImportComponent,
    UploadCsvComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
