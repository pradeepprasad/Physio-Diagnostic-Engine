import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../model/job';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  //styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  @Input() editOn;
  @Input() selectedJob;
  @Input() userRole;
  @Input() editedJob;
  @Output() afterJobSaved = new EventEmitter<Boolean>();
  @Output() afterDetailClosed = new EventEmitter<Boolean>();

  constructor() { 

      }

  ngOnInit() {
  }
  
  allowEditFromDetail(trueOrFalse : boolean, selectedJob: Job) {
    this.editOn = trueOrFalse;
    this.selectedJob = selectedJob;
        if (trueOrFalse){
          //console.log("value of edited job - " + this.selectedJob.company);
          this.copyValues();
                    
                        }//if ends here
    return false;
  }
 
  //even bid to child component "edit" to change the mode now to parent 
  onModeChange(editOrView: boolean) {
    this.editOn = editOrView;
    this.copyValues();
    this.afterJobSaved.emit(this.editOn);
    return false;
  }
  
  
  copyValues() {
    this.editedJob = new Job;
    this.editedJob.id = this.selectedJob.id
    this.editedJob.role = this.selectedJob.role
    this.editedJob.company = this.selectedJob.company;
    this.editedJob.location = this.selectedJob.location;
    this.editedJob.salary = this.selectedJob.salary;
    this.editedJob.applicantCount = this.selectedJob.applicantCount;
    return false;
  }

//even bid to child component "edit" to change the mode now to parent 
onClose() {
  //this.copyValues();
  this.afterDetailClosed.emit(this.editOn);
  return false;
}




}
