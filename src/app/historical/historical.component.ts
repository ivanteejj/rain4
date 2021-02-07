import { Component, OnInit } from '@angular/core';
import { Station } from '../shared/station';


import { StationsService } from '../services/stations.service';
@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss']
})
export class HistoricalComponent implements OnInit {
  stations : Station[];
  selectedStationID : string;

  constructor(private stationsService : StationsService) { }

  ngOnInit(): void {
    this.stations = this.stationsService.getStations();
  }

}
