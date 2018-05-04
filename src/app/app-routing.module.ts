import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobListComponent } from "./job-list/job-list.component";
import { ApplicantComponent } from './applicant/applicant.component';
import { ManagerComponent } from './manager/manager.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/applicant', pathMatch: 'full' },
    { path: 'applicant', component: ApplicantComponent },
    { path: 'manager', component: ManagerComponent },
    { path: 'admin', component: ManagerComponent }
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}