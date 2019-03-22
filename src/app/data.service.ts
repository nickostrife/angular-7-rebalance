import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InputData } from './inputdata.model';
import { OutputInfo } from './outputinfo.model';
import { Observable, of } from 'rxjs';
import { catchError, map} from 'rxjs/operators';

const httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable({
  providedIn: 'root'
})

export class DataService
{
  constructor(private _http: HttpClient) { } 
  
  getInputUrl = 'http://localhost:8080/get-input?id=';
  getOutputUrl = 'http://localhost:8080/get-single-output?fkeyId=';
  getApiURL = 'http://localhost:8080/get-input-all';
  getOutputApiURL = 'http://localhost:8080/get-output-all'
  postApiURL = 'http://localhost:8080/calculate'

  /** GET ALL input datas from the server */
  getInputData(): Observable<InputData[]>
  {
    return this._http.get<InputData[]>(this.getApiURL)
     .pipe(catchError(this.handleError('getInputData',[]))
     );
  }

  /** GET input data by id. Will 404 if id not found */
  getInputDataId(id: number): Observable<InputData>
  {   
    const url = `${this.getInputUrl}${id}`;
    return this._http.get<InputData>(url)
     .pipe(catchError(this.handleError<InputData>(`getInputData id=${id}`))
     );
  }

  /** GET All output data from server */
  getOutputInfo(): Observable<OutputInfo[]>
  {
    return this._http.get<OutputInfo[]>(this.getOutputApiURL)
     .pipe(catchError(this.handleError('getOutputInfo',[]))
     );
  }

  /** GET SINGLE output data from server */
  getOutputInfoId(fkeyId: number): Observable<OutputInfo[]>
  {
    const url = `${this.getOutputUrl}${fkeyId}`
    return this._http.get<OutputInfo[]>(url)
     .pipe(catchError(this.handleError('getOutputInfoId',[]))
     );
  }

  /** POST: input form data to server */
  postInputData(inputData: InputData)
  {
    return this._http.post<InputData>(this.postApiURL, inputData, httpOptions)
     .pipe(catchError(this.handleError('postInputData',[]))
     );
  }

  /** TEST: GET SINGLE output to Map for chart.js purpose */
  getChartInfo(fkeyId: number)
  {
    const url = `${this.getOutputUrl}${fkeyId}`
    return this._http.get(url)
    .pipe(map(result=>result),catchError(this.handleError('getChartInfor, []'))
    );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) 
  {
    return (error: any): Observable<T> =>
    {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
