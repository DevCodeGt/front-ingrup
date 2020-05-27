import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BlockUI, NgBlockUI } from 'ng-block-ui';


declare var $: any
@Component({
    selector: 'app-bs-element',
    templateUrl: './bs-element.component.html',
    styleUrls: ['./bs-element.component.scss'],
    animations: [routerTransition()]
})

export class BsElementComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    public sliders: Array<any> = [];
    public alerts: Array<any> = [];
    constructor() {        
        this.alerts.push(
            { text: 'Slide 1', src: 'assets/images/Home/slides/slide1.jpg', title: "Ingrup",description: "realizó una donación en apoyo a la casa Ronald McDonald" ,dataHash: 'one'},
            { text: 'Slide 3', src: 'assets/images/Home/slides/slide2.jpg', title: "Ingrup2",description: "realizó una donación en apoyo a la casa Ronald McDonald" , dataHash: 'three'},
            { text: 'Slide 5', src: 'assets/images/Home/slides/slide3.jpg', dataHash: 'five'},
            { text: 'Slide 6', src: 'assets/images/Home/slides/slide4.jpg', dataHash: 'five'},
        )
        
    }
    
    ngOnInit() {
        this.blockUI.start();
        const data = {
            id:1,
            state:'0',
            filter:'evento'
        };
        setTimeout(() => {
            this.blockUI.stop();
        }, 2000);
        //this.blockUI.stop();
    }
    customOptions3: any = {
        center: true,
        // autoHeight: false,
        nav: true,
        dots:false,
        margin:20,
        rewindNav: true,
        responsiveClass:true,
        loop: true,
        responsive:{
            100:{
                items:1,
                rewindNav : false,
                navText: ["<img class='flechaIz iz-middle w-100' src='assets/images/FlechaIz.png'>","<img class='flechaDer2 de-middle2 w-100' src='assets/images/FlechaDer.png'>"],
                nav: true
            },
            600:{
                items: 1,
                rewindNav : false,
                navText: ["<img class='flechaIz iz-middle w-100' src='assets/images/FlechaIz.png'>","<img class='flechaDer2 de-middle2 w-100' src='assets/images/FlechaDer.png'>"],
                nav: true
            },
            1000:{
                items: 3,
                rewindNav : true,
                navText: ["<img class='flechaIz iz-middle w-100' src='assets/images/FlechaIz.png'>","<img class='flechaDer2 de-middle2 w-100' src='assets/images/FlechaDer.png'>"],
                nav: true
            },
        }
            // URLhashListener:true,
        // startPosition: 'URLHash',
        
    }
}
