import { Component, OnInit } from '@angular/core';
// import { BlockTemplateComponent } from "./../block-template-component/block-template-component.component";
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    collapedSideBar: boolean = false;
    blockTemplate:any

    constructor(
        // public blockTemplate:BlockTemplateComponent
    ) {}

    ngOnInit() {}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
