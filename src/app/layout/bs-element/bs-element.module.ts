import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsElementRoutingModule } from './bs-element-routing.module';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BsElementComponent } from './bs-element.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';


// @NgModule({
//     imports: [
//         CommonModule,
//         NgbCarouselModule,
//         NgbAlertModule,
//         CarouselModule,
//         DashboardRoutingModule,
//         StatModule,
//         AtftModule
//     ],
//     declarations: [
//         DashboardComponent,
//         TimelineComponent,
//         NotificationComponent,
//         ChatComponent
//     ]
// })
@NgModule({
    imports: [CommonModule, BsElementRoutingModule, PageHeaderModule, NgbModule, NgbCarouselModule, CarouselModule, TranslateModule ],
    declarations: [BsElementComponent]
})
export class BsElementModule {}
