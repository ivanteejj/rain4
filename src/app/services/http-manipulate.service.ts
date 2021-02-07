import { Injectable } from '@angular/core';
import { httpResponse } from '../shared/httpResponse';
import { reading } from '../shared/reading';
import { Station } from '../shared/station';

@Injectable({
  providedIn: 'root'
})
export class HttpManipulateService {

  constructor() { }

  getStationsFromHttpRes(response : httpResponse) : Station[] {
    return response.metadata.stations;
  }

  getLatestReadingFromHttpRes(response : httpResponse, station : Station) : reading {
    console.log(response);
    var items = response.items;
    var itemsLen = items.length;
    var item = items[itemsLen - 1];
    var readings = item['readings'];

    // this assumes that reading already exists
    // else reading will be undefined

    //method 1 is to do this and check if reading is undefined, very slow
    //method 2 is to check if the station exists in the metadata
    var reading = readings.filter(data => data.station_id === station.device_id)[0];

    if(reading === undefined) {
      reading = {
        "station_id" : "unavailable",
        "value" : -1
      }
    } 
    return reading
  }
}
