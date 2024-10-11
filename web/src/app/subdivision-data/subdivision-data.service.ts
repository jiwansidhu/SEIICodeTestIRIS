import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { SubDivision } from '../models/subdivision-data.model';

@Injectable({
  providedIn: 'root'
})
export class SubdivisionService {

  private apiUrl = 'http://localhost:3000/v1/subdivisions';

  constructor(private http: HttpClient) { }

  getAllSubdivisions () {
    return this.http.get<{ subdivisions: SubDivision[] }>(this.apiUrl)
    .pipe(
      map(response => response.subdivisions),
      catchError(this.handleError)
    );
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`check this info ${error.status}, ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}