import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElementsRacasPage } from './elementsRacas';

@NgModule({
    declarations: [
        ElementsRacasPage,
    ],
    imports: [
        IonicPageModule.forChild(ElementsRacasPage),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ElementsRacasPageModule { }
