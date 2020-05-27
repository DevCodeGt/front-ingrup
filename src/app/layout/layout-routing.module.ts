import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', 
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'nosotros', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
            { path: 'mercados/:id', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'mercados/:id/:mercado', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'mercados', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'productos', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'productos/:id', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'productos/:id/:producto', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'medio-ambiente', loadChildren: () => import('./bs-element/bs-element.module').then(m => m.BsElementModule) },
            { path: 'sostenibilidad', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) },
            { path: 'CodigoDeConducta', loadChildren: () => import('./grid2/grid.module').then(m => m.GridModule) },
            { path: 'social', loadChildren: () => import('./bs-component/bs-component.module').then(m => m.BsComponentModule) },
            { path: 'integrate', loadChildren: () => import('./integrate/integrate.module').then(m => m.IntegrateModule) },
            { path: 'contactenos', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) },
            { path: 'contactenos/:marca', loadChildren: () => import('./blank-page/blank-page.module').then(m => m.BlankPageModule) }
        ]
    }
]; 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
