import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListJobsComponent } from './component/list-jobs/list-jobs.component';
import { AddJobsComponent } from './component/add-jobs/add-jobs.component';
import { DetailJobsComponent } from './component/detail-jobs/detail-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    ListJobsComponent,
    AddJobsComponent,
    DetailJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
