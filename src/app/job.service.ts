import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Job } from './model/job';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class JobService {

  //private heroesUrl = 'api/heroes';  // URL to web api
  // private jobsUrl = 'api/jobs';  // URL to web api
  private jobsUrl = 'http://localhost:8080/api/jobs';  // URL to web api
  //private heroesUrl = 'http://localhost:8080/api/heroes';  // URL to web api
  constructor(
    private http: HttpClient
  ) { }


  /** GET jobs from the server */
  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl)
      .pipe(
        tap(
          jobs => console.log(`fetched jobs from - ` + this.jobsUrl)
        ),
        catchError(this.handleError('getJobs', []))
      );
  }


  /** GET hero by id. Will 404 if id not found */
  getJob(id: number): Observable<Job> {
    const url = `${this.jobsUrl}/${id}`;
    return this.http.get<Job>(url).pipe(
      tap(_ => console.log(`fetched job id=${_.id}`)),
      catchError(this.handleError<Job>(`getJob id=${id}`))
    );
  }

 /** DELETE: delete the job from the server */
 deleteJob (job: Job | number): Observable<Job> {
  const id = typeof job === 'number' ? job : job.id;
  const url = `${this.jobsUrl}/${id}`;

  return this.http.delete<Job>(url, httpOptions).pipe(
    tap(_ => console.log(`deleted job id=${id}`)),
    catchError(this.handleError<Job>('deleteJob'))
  );
}


 /** PUT: update the job on the server */
 updateJob (job: Job): Observable<any> {
  return this.http.put(this.jobsUrl, job, httpOptions).pipe(
    tap(_ => console.log(`updated job id=${job.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */

}
