import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const jobs  = [
      { id: 501, role: 'In - Angular Application Architect', company: 'In -Mindtree1', location: 'In -UK', salary: 156000, applicantCount: 10 },
      { id: 502, role: 'In - Angular Web Developer', company: 'In -Mindtree2', location: 'In -UK', salary: 256000, applicantCount: 20 },
      { id: 503, role: 'In - Angular Test Lead', company: 'In -BBC', location: 'Manchester', salary: 356000, applicantCount: 30 },
      { id: 504, role: 'In - Angular Test Engineer', company: 'In -Mindtree3', location: 'In -UK', salary: 456000, applicantCount: 40 },
      { id: 505, role: 'In - Angular Automation Tester', company: 'In -Mindtree4', location: 'In -UK', salary: 556000, applicantCount: 50 },
      { id: 506, role: 'In - Angular BDD Test Engineer', company: 'In -Mindtree5', location: 'In -UK', salary: 656000, applicantCount: 60 }
    ];
    return {jobs};
  }

}
