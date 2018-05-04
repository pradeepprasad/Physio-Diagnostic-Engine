import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { JobService }           from './job.service';
import { ApplicantComponent }   from './applicant/applicant.component';
import { MenuComponent }        from './menu/menu.component';
import { JobDetailComponent }   from './job-detail/job-detail.component';
import { JobDetailEditComponent } from './job-detail-edit/job-detail-edit.component';
import { ManagerComponent }     from './manager/manager.component';
import { JobListComponent } from './job-list/job-list.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    ApplicantComponent,
    ManagerComponent,
    MenuComponent,
    JobListComponent,
    JobDetailComponent,
    JobDetailEditComponent

  ],
  providers: [ JobService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
