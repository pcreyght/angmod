import { NgModule } from '@angular/core';

import { PLANT_ROUTES } from './plant.routes';
import { PlantComponent } from './';  // (Barrel : index.ts)

@NgModule( {
    imports:      [ PLANT_ROUTES ],
    declarations: [ PlantComponent ]
})
export class PlantModule { }