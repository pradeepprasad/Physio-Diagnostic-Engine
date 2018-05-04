import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../model/job';
import { JobService } from '../job.service';


@Component({
  selector: 'app-job-detail-edit',
  templateUrl: './job-detail-edit.component.html'
  //styleUrls: ['./job-detail-edit.component.css']
})
export class JobDetailEditComponent implements OnInit {

  @Input() editOn;
  @Input() selectedJob;
  @Input() userRole;
  @Input() editedJob;
  @Output() onModeChange = new EventEmitter<boolean>();

  constructor(private jobService: JobService) { }

  ngOnInit() {

  }

  // save changes to selected job template
  saveChanges(justEditedJob: Job) {
    console.log("selected job id - " + this.selectedJob.id);
    console.log("Just edited job id - " + justEditedJob.id);

    this.jobService.updateJob(justEditedJob)
      .subscribe();

    this.editOn = false;
    this.editedJob = null;
    this.selectedJob = new Job;
    this.onModeChange.emit(this.editOn);
    return false;
  }

  cancelChanges() {
    this.editOn = false;
    this.editedJob = null;
    return false;
  }

}
