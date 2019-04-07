import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElementsTalentosPage } from './elementsTalentos';

@NgModule({
    declarations: [
        ElementsTalentosPage,
    ],
    imports: [
        IonicPageModule.forChild(ElementsTalentosPage),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ElementsTalentosPageModule { }
