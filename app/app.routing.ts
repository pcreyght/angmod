import { Routes, RouterModule } from '@angular/router';
import { PlantComponent } from './plant/plant.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'plant', component: PlantComponent },
    { path: '', component: AppComponent }
];

export const appRoutingProviders: any[] = [

];

export const EMO_ROUTES = RouterModule.forRoot(routes);