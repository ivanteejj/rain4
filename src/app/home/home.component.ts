import { Component, OnInit } from '@angular/core';
import { Station } from '../shared/station';
import { StationsService } from '../services/stations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stations : Station[];
  selectedStationID : string;

  constructor(private stationsService : StationsService) { }

  ngOnInit(): void {
    this.stations = this.stationsService.getStations();
    this.selectedStationID = this.stations[0].id;
  }

}
