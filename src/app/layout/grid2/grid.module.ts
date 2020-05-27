import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { PageHeaderModule } from './../../shared';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [CommonModule, GridRoutingModule, PageHeaderModule, TranslateModule],
    declarations: [GridComponent]
})
export class GridModule {}
 