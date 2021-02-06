import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { HistoricalComponent } from '../historical/historical.component';
import { ForecastingComponent } from '../forecasting/forecasting.component';
import { TempResolverService } from '../services/temp-resolver.service';
import { RainfallResolverService } from '../services/rainfall-resolver.service';

export const routes : Routes = [
    { 
        path:'home', 
        component : HomeComponent, 
        resolve: {
            tempHttpRes : TempResolverService,
            rainfallHttpRes : RainfallResolverService
        }
    },
    { path: 'historical', component : HistoricalComponent },
    { path: 'forecasting', component: ForecastingComponent },
    { path: '', redirectTo: '/home', pathMatch : 'full' } 

]