import { Component, Input, OnInit } from '@angular/core';
import { HttpRetrieveService } from '../services/http-retrieve.service';
import { HttpManipulateService } from '../services/http-manipulate.service'
import { StationsService } from '../services/stations.service'
import { httpResponse } from '../shared/httpResponse';
import { item } from '../shared/item';
import { reading } from '../shared/reading';
import { Station } from '../shared/station';
import { ActivatedRoute } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-home-query',
  templateUrl: './home-query.component.html',
  styleUrls: ['./home-query.component.scss']
})
export class HomeQueryComponent implements OnInit {
  tempHttpRes : httpResponse;
  tempItems : item[];
  tempItem : item;
  tempReadings : reading[];
  tempReading : reading;

  rainfallHttpRes : httpResponse;
  rainfallItems : item[];
  rainfallItem : item;
  rainfallReadings : reading[];
  rainfallReading : reading;

  stations : Station[];
  selectedStation : Station;

  @Input()
  selectedStationID : string;

  constructor(
    private http : HttpRetrieveService,
    private actRoute : ActivatedRoute,
    private stationService : StationsService,
    private httpMan : HttpManipulateService
    ) { }

  ngOnInit() {
    this.stations = this.stationService.getStations();
    this.selectedStation = this.stations.filter(data => data.id === this.selectedStationID)[0]

    this.actRoute.data.subscribe(
      data => {
        this.tempHttpRes = {
          'api_info' : data.tempHttpRes.api_info,
          'items' : data.tempHttpRes.items,
          'metadata' : data.tempHttpRes.metadata
        }

        this.rainfallHttpRes = {
          'api_info' : data.rainfallHttpRes.api_info,
          'items' : data.rainfallHttpRes.items,
          'metadata' : data.rainfallHttpRes.metadata
        }
      }
    )

    //this.tempItems = this.tempHttpRes.items;
    //var tempLen = this.tempItems.length;
    //this.tempItem = this.tempItems[tempLen - 1]
    //this.tempReadings = this.tempItem['readings'];
    //this.tempReading = this.tempReadings.filter(data => data.station_id === this.selectedStationID)[0];

    this.tempReading = this.httpMan.getLatestReadingFromHttpRes(this.tempHttpRes, this.selectedStation);
    console.log(this.tempReading)

    /*
    this.rainfallItems = this.rainfallHttpRes.items;
    var rainLen = this.rainfallItems.length;
    this.rainfallItem = this.rainfallItems[rainLen - 1]
    this.rainfallReadings = this.rainfallItem['readings'];
    */
    this.rainfallReading = this.httpMan.getLatestReadingFromHttpRes(this.rainfallHttpRes, this.selectedStation);
    console.log(this.rainfallReading)
  }

  
  ngOnChanges() {
    this.selectedStation = this.stations.filter(data => data.id === this.selectedStationID)[0]
    this.tempReading = this.httpMan.getLatestReadingFromHttpRes(this.tempHttpRes, this.selectedStation);
    this.rainfallReading = this.httpMan.getLatestReadingFromHttpRes(this.rainfallHttpRes, this.selectedStation);
  
    console.log(this.selectedStationID);
  }
}