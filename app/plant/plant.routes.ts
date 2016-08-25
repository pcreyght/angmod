import { RouterModule } from '@angular/router';

import { PlantComponent } from './';

export const PLANT_ROUTES = RouterModule.forChild([
    { path: 'plant', component: PlantComponent }
]);