import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailJobsComponent } from './component/detail-jobs/detail-jobs.component';
import { ListJobsComponent } from './component/list-jobs/list-jobs.component';


const routes: Routes = [
  {
    path: '',
    component: ListJobsComponent,
  },
  {
    path: ':id',
    component: DetailJobsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
