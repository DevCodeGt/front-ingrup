import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ChartsRoutingModule } from './charts-routing.module'; 
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, CarouselModule, PageHeaderModule, TranslateModule],
    declarations: [ChartsComponent]
})
export class ChartsModule {}
 