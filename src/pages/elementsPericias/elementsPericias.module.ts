import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElementsPericiasPage } from './elementsPericias';

@NgModule({
    declarations: [
        ElementsPericiasPage,
    ],
    imports: [
        IonicPageModule.forChild(ElementsPericiasPage),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ElementsPericiasPageModule { }
