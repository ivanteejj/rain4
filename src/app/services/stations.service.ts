import { Injectable } from '@angular/core';
import { Stations } from '../shared/stations';
import { Station } from '../shared/station';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  constructor() { }

  getStations() : Station[] {
    return Stations;
  }

  getStation(id : string) : Station {
    return Stations.filter(
      (station) => (station.id === id))[0]
  }
}
