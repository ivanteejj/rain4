import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { HistoricalComponent } from '../historical/historical.component';
import { ForecastingComponent } from '../forecasting/forecasting.component';

export const routes : Routes = [
    { path:'home', component : HomeComponent },
    { path: 'historical', component : HistoricalComponent },
    { path: 'forecasting', component: ForecastingComponent },
    { path: '', redirectTo: '/home', pathMatch : 'full' } 

]