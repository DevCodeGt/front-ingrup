import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-6-datatable';
import { BlockUIModule } from 'ng-block-ui';
import { NgSelectModule } from '@ng-select/ng-select';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BlockTemplateComponent } from '../block-template-component/block-template-component.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        BlockUIModule.forRoot({
            template: BlockTemplateComponent
          }),
        TranslateModule,
        NgbDropdownModule,
        NgbAlertModule,
        NgSelectModule,
        DataTableModule
    ],
    declarations: [LayoutComponent, SidebarComponent,BlockTemplateComponent, FooterComponent],
    entryComponents: [
        BlockTemplateComponent // Make sure to add it to the entry components
    ]
})
export class LayoutModule {}
