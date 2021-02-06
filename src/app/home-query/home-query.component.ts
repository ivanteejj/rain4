import { Component, OnInit } from '@angular/core';
import { HttpRetrieveService } from '../services/http-retrieve.service';
import { httpResponse } from '../shared/httpResponse';
import { item } from '../shared/item';

@Component({
  selector: 'app-home-query',
  templateUrl: './home-query.component.html',
  styleUrls: ['./home-query.component.scss']
})
export class HomeQueryComponent implements OnInit {
  tempHttpRes : httpResponse;
  items : item[];

  currTempItem : item;

  constructor(private http : HttpRetrieveService) { }

  async ngOnInit() {
    await this.getValues();
  }

  async getValues() {
    await this.http
    .getHttpResponse("air-temperature", "2020-01-30")
    .toPromise()
    .then(res => {
      this.tempHttpRes = {
        api_info : res['api_info'],
        metadata : res['metadata'],
        items : res['items']
      }  
    })

    
    console.log(this.tempHttpRes);
  }
}

/*
subscribe(
      (data : httpResponse) => {
          console.log("Before assignment:")
          console.log(data)
          this.tempHttpRes = {
          api_info : (data as any).api_info,
          metadata : (data as any).metadata,
          items : (data as any).items
        }
        console.log("After assignment:");
        console.log(this.tempHttpRes)
      }
    )
    */