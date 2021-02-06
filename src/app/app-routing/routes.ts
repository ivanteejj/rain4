import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { HistoricalComponent } from '../historical/historical.component';
import { ForecastingComponent } from '../forecasting/forecasting.component';
import { TempResolverService } from '../services/resolvers/temp-resolver.service';
import { RainfallResolverService } from '../services/resolvers/rainfall-resolver.service';
import { HumidityResolverService } from '../services/resolvers/humidity-resolver.service';

export const routes : Routes = [
    { 
        path:'home', 
        component : HomeComponent, 
        resolve: {
            tempHttpRes : TempResolverService,
            rainfallHttpRes : RainfallResolverService,
            humidityHttpRes : HumidityResolverService
        }
    },
    { path: 'historical', component : HistoricalComponent },
    { path: 'forecasting', component: ForecastingComponent },
    { path: '', redirectTo: '/home', pathMatch : 'full' } 

]