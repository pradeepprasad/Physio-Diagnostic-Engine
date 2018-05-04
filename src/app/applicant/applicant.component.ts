import { Component, OnInit, Input } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../model/job';


@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  //styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  jobsList: Job[];
  selectedJob:Job;
  

  constructor(
    
    private jobService: JobService    
  
  ) { }
  
  ngOnInit() {
    this.getJobs();
      }


      getJobs(): void {
        this.jobService.getJobs()
          .subscribe(
            jobs => this.jobsList = jobs
                    );
          this.selectedJob = this.jobsList[0];
      }
}
