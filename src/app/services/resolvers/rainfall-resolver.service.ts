import { Injectable } from '@angular/core';
import { HttpRetrieveService } from '../http-retrieve.service';
import { Resolve } from '@angular/router';
import { httpResponse } from '../../shared/httpResponse';
import { Observable } from 'rxjs';
import { targetDate } from '../../shared/targetDate';

@Injectable({
  providedIn: 'root'
})
export class RainfallResolverService implements Resolve<httpResponse>{

  constructor(private service : HttpRetrieveService) { }

  resolve() : Observable<any> | Promise<any> | any {
    var output = this.service.getHttpResponse("rainfall", targetDate);
    return output;
  }
}
