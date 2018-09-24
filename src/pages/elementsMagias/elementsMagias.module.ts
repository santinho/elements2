import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElementsMagiasPage } from './elementsMagias';

@NgModule({
    declarations: [
        ElementsMagiasPage,
    ],
    imports: [
        IonicPageModule.forChild(ElementsMagiasPage),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ElementsMagiasPageModule { }
