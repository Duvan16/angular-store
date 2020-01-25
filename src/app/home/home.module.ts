import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './componets/banner/banner.component';
import { HomeComponent } from './componets/home/home.component';

import { HomeRoutingModule } from './home-rounting.module';

import { SharedModule } from './../shared/shared.module';

/*Decorador*/
@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
