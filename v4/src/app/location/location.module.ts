import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {ComponentsModule} from "../components/components.module";

import {IonicModule} from '@ionic/angular';

import {LocationPage} from './location.page';

const routes: Routes = [
    {
        path: '',
        component: LocationPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LocationPage]
})
export class LocationPageModule {
}
