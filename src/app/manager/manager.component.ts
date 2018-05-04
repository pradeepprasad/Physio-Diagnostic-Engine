import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  //styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  
  jobsList: Job[];
  selectedJob:Job;
  //constructor() { }

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
            //this.selectedJob = this.jobsList[0]
          );
          this.selectedJob = this.jobsList[0];
      }

}
