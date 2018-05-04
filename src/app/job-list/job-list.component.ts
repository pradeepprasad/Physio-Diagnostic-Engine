import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../model/job';
import { JobService } from '../job.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html'
  // styleUrls: ['./job-list.component.css']
})

export class JobListComponent implements OnInit {

  constructor(
    
    private jobService: JobService    
  
  ) { }

  @Input() userRole;
  selectedJob: Job;
  editedJob: Job;
  jobsList: Job[];
  editOn = false;
  

  ngOnInit() {
    this.getJobs();
          }


  onJobSelect(newSelectedJob: Job) {
    console.log('New job selected, role = ' + newSelectedJob.role);
    this.selectedJob = newSelectedJob;
    return false;
  }

  getJobs(): void {
    this.jobsList = null;
    this.jobService.getJobs()
      .subscribe(
        jobs => this.jobsList = jobs
          );

  }


  getJob(selectedJob : Job): void {
    console.debug("id for selected job is -" + selectedJob.id);
    this.jobService.getJob(selectedJob.id)
      .subscribe(job => this.selectedJob = job
      );

      }


  allowEdit(trueOrFalse: boolean) {
    this.editOn = trueOrFalse;
    console.log("Before check value of Edit flag - " + this.editOn);
    if (trueOrFalse) {
      this.editedJob = new Job;
      this.editedJob.id = this.selectedJob.id;
      this.editedJob.role = this.selectedJob.role;
      this.editedJob.company = this.selectedJob.company;
      this.editedJob.location = this.selectedJob.location;
      this.editedJob.salary = this.selectedJob.salary;
      this.editedJob.applicantCount = this.selectedJob.applicantCount;

    }//if ends here

    return false;

  }

// remove job from collection of job list once user deletes
onJobDelete(deletedJob: Job) {
  console.log('Job deleted, ID = ' + deletedJob.id);

  this.jobsList = this.jobsList.filter(job => job.id !== deletedJob.id);
  this.jobService.deleteJob(deletedJob).subscribe();
  this.selectedJob = null;
  return false;
  
}

  afterJobSaved(editOrView: boolean) {
    this.editOn = editOrView;
    this.ngOnInit();
    this.selectedJob = null;
    this.selectedJob = this.jobsList[0];
     return false;
  }

  afterDetailClosed(editOrView: boolean) {
   this.selectedJob = null;
    return false;
  }


}
