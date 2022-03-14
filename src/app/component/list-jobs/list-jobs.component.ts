import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Jobs } from 'src/app/models/jobs';
import { JobsService } from 'src/app/services/jobs.service';
@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {

  constructor(private JobService:JobsService ) { }
  titre:string="";
  jobs$?: Observable<Jobs[]>;
  ngOnInit(): void {

    this.jobs$=this.JobService.observableJobs();
  }

}
