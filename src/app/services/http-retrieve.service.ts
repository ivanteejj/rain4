import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { httpResponse } from '../shared/httpResponse';
import { HttpParams } from "@angular/common/http";
import { item } from '../shared/item';
import { timer } from 'rxjs';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { map, filter, tap } from 'rxjs/operators'
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class HttpRetrieveService {
  res : Observable<httpResponse>;

  constructor(private http : HttpClient) { }
  
  getHttpResponse(url : string, date : string) : Observable<httpResponse> {
   this.res = this.http.get<httpResponse>(baseURL + url, {
    responseType: 'json',
    params: new HttpParams().set('date', date)
    });
    return this.res;
  }

}
