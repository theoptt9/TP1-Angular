import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { merge, mergeMap, Observable, of, pluck } from 'rxjs';
import { Jobs } from 'src/app/models/jobs';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-detail-jobs',
  templateUrl: './detail-jobs.component.html',
  styleUrls: ['./detail-jobs.component.css']
})
export class DetailJobsComponent implements OnInit {

  titleDetailJobs: String = "Détail de l'offre d'emploi"
  selectedJobId: Observable<Number> | undefined;
  selectedJob: Observable<Jobs | undefined> = of();

  constructor(private route: ActivatedRoute, private jobsService:JobsService) { }

  ngOnInit(): void {
    this.selectedJobId = this.route.params
    .pipe(
      pluck('id')
    );

    this.selectedJob = this.selectedJobId.pipe(
      mergeMap(x => this.jobsService.getJob(x))
    )
  }
    
}
