import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componets/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

/*Es decordador que tienen metadata*/
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    /*Exportable para que otros modulos lo puedan utilizar */
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }
