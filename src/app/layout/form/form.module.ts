import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-6-datatable';
import { LightboxModule } from 'ngx-lightbox';
import { NgSelectModule } from '@ng-select/ng-select';
 
import { AtftModule } from 'atft';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ProductosService } from "./../../shared/services/productos.service";
import { ImagenesService } from "./../../shared/services/imagenes.service";
import { PresentacionesService } from "./../../shared/services/presentaciones.service";
import { NgxGalleryModule } from 'ngx-gallery';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { MenuComponent } from './../components/menu/menu.component';
import { TablesProdsComponent } from "./../components/tables-prods/tables-prods.component";

import { onlyMyGallery } from "./../../shared/directives/galeria-prod.directive";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [CommonModule, FormRoutingModule, NgbModule,LightboxModule, PageHeaderModule,NgSelectModule,AtftModule,CarouselModule,DataTableModule,FormsModule,NgxGalleryModule, TranslateModule],
    declarations: [FormComponent,MenuComponent,TablesProdsComponent,onlyMyGallery],
    providers: [ProductosService,ImagenesService,PresentacionesService]
})
export class FormModule {}
