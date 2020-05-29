import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MarcasService } from "./../../shared/services/marcas.service";

declare var $: any
import { BlockUI, NgBlockUI } from 'ng-block-ui';

export class CarouselData {
    id?: string;
    text: string;
    dataMerge?: number;
    width?: number;
    dotContent?: string;
    src?: string;
    dataHash?: string;
  }
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public alerts2: Array<any> = [];
    public alerts_INGLES: Array<any> = [];
    public alerts_2_INGLES: Array<any> = [];
    public sliders: Array<any> = [];
    public items: Array<any> = [];
    public slider_cards = [];
    @BlockUI() blockUI: NgBlockUI;
    isDragging: boolean;
    public pushRightClass: string;
    carouselData: CarouselData[] = [
        { text: 'Slide 1', src: 'assets/images/Home/slides/slide1.jpg', dataHash: 'one'},
        // { text: 'Slide 2', src: 'assets/images/Home/Modulo-3/Botella-2-pequena.png', dataHash: 'two'},
        // { text: 'Slide 2', src: 'assets/fotos/envase1.jpg', dataHash: 'two'},
        { text: 'Slide 3', src: 'assets/images/Home/slides/slide2.jpg', dataHash: 'three'},
        // { text: 'Slide 4', src: 'assets/fotos/tapas1.jpg', dataHash: 'four'},
        // { text: 'Slide 2', src: 'assets/images/Home/Modulo-3/Botella-2-pequena.png', dataHash: 'two'},
        { text: 'Slide 5', src: 'assets/images/Home/slides/slide3.jpg', dataHash: 'five'},
        { text: 'Slide 6', src: 'assets/images/Home/slides/slide4.jpg', dataHash: 'five'},
        // { text: 'Slide 2', src: 'assets/images/Home/Modulo-3/Botella-2-pequena.png', dataHash: 'two'},
        // { text: 'Slide 5', src: 'assets/fotos/envase3.jpg', dataHash: 'five'},
        // { text: 'Slide 6', dotContent: 'text5'},
        // { text: 'Slide 7', dotContent: 'text5'},
        // { text: 'Slide 8', dotContent: 'text5'},
        // { text: 'Slide 9', dotContent: 'text5'},
        // { text: 'Slide 10', dotContent: 'text5'},
    ];
  Table:any = null
  carouselData2: CarouselData[] = [
    { text: 'Bebidas', src: 'assets/images/Mercados/Modulo-1/menu-principal/Bebidas.png', dataHash: 'one'},
    { text: 'Alimentos', src: 'assets/images/Mercados/Modulo-1/menu-principal/Alimentos.png', dataHash: 'two'},
    { text: 'Home Care', src: 'assets/images/Mercados/Modulo-1/menu-principal/Home-care.png', dataHash: 'three'},
    { text: 'Food Service', src: 'assets/images/Mercados/Modulo-1/menu-principal/Food-service.png', dataHash: 'four'},
    { text: 'Resinas Recicladas', src: 'assets/images/Mercados/Modulo-1/menu-principal/Resinas-recicladas.png', dataHash: 'five'}
    ];
  categoriasBox:any = []
  win = Window
  customOptions0: any = { 
    loop: true,
        autoHeight: false,
        autoWidth: true,
        autoplay:false,
        margin:10,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav: true,
        rewindNav : true,
        navText: ["<img class='flechaIz' src='assets/images/Mercados/Modulo-1/flechaIz.png'>","<img class='flechaDer' src='assets/images/Mercados/Modulo-1/flechaDer.png'>"],
        center: true,
        // navText:["",""],
        dots:false,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        responsiveClass:true,
        responsive:{
            300:{
                items:3
            },
            900:{
                items:5
            },
            1000:{
                items:5
            }
        }

    }
  customOptions: any = {
    loop: true,
    // autoWidth: true,
    // autoHeight: false,
    nav: false,
    autoplay: true,
    center: true,
    dots:false,
    margin: true,
    responsiveClass:true,
    items: 1,
    responsive:{
        100:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1
        }
    }

  }
  customOptionsn: any = {
        loop: true,
        autoWidth: true,
        // autoHeight: false,
        nav: false,
        autoplay: true,
        center: true,
        dots:true,
        items:4,
        autoplayTimeout:3000,
        autoHeight: false,
        margin:20,
        responsiveClass:true,
        responsive:{
            300:{
                items:1
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
        }
    }
        // URLhashListener:true,
    // startPosition: 'URLHash',

  }
  customOptions2: any = {
    loop: true,
    autoWidth: true,
    // autoHeight: false,
    nav: false,
    autoplay: true,
    center: true,
    dots:true,
    items:4,
    autoplayTimeout:3000,
    margin:20,
    responsiveClass:true,
    responsive:{
        300:{
            items:1
        },
        600:{
            items: 2
        },
        1000:{
            items: 4
        }
    }
        // URLhashListener:true,
    // startPosition: 'URLHash',

  }
  
    customOptions3: any = {
    center: true,
    // autoHeight: false,
    nav: true,
    dots:false,
    margin:20,
    responsiveClass:true,
    responsive:{
        100:{
            items:1,
            rewindNav : true,
            navText: ["<img class='flechaIz iz-middle w-100' src='assets/images/FlechaIz.png'>","<img class='flechaDer de-middle w-100' src='assets/images/FlechaDer.png'>"],
            nav: true
        },
        600:{
            items: 1,
            rewindNav : true,
            navText: ["<img class='flechaIz iz-middle w-100' src='assets/images/FlechaIz.png'>","<img class='flechaDer de-middle w-100' src='assets/images/FlechaDer.png'>"],
            nav: true
        },
        1000:{
            items: 1,
            navText: ["<img class='flechaIz iz-middle w-100' src='assets/images/FlechaIz.png'>","<img class='flechaDer de-middle w-100' src='assets/images/FlechaDer.png'>"],
            nav: true
        },
    }
        // URLhashListener:true,
    // startPosition: 'URLHash',
    
  }
  customOptions33: any = {
    center: true,
    // autoHeight: false,
    nav: false,
    dots: true,
    margin:20,
    responsiveClass:true,
    loop: true,
    responsive:{
        100:{
            items:1,
            rewindNav : false,
            nav: false
        },
        600:{
            items: 1,
            rewindNav : true,
            navText: ["<img class='flechaIz iz-middle w-100' src='assets/images/FlechaIz.png'>","<img class='flechaDer de-middle w-100' src='assets/images/FlechaDer.png'>"],
            nav: true
        },
        1000:{
            items: 1,
            navText: ["<img class='flechaIz iz-middle w-100' src='assets/images/FlechaIz.png'>","<img class='flechaDer de-middle w-100' src='assets/images/FlechaDer.png'>"],
            nav: true
        },
    }
        // URLhashListener:true,
    // startPosition: 'URLHash',
    
  }
  customOptions4: any = {
    center: true,
    // autoHeight: false,
    nav: true,
    dots:false,
    margin: 0,
    responsiveClass:true,
    responsive:{
        100:{
            items:1,
            rewindNav : true,
            navText: ["<img class='flechaIz iz-middle w-100' src='assets/images/FlechaIz.png'>","<img class='flechaDer de-middle w-100' src='assets/images/FlechaDer.png'>"],
            nav: true
        },
        600:{
            items: 1,
            rewindNav : true,
            navText: ["<img class='flechaIz iz-middle w-100' src='assets/images/FlechaIz.png'>","<img class='flechaDer de-middle w-100' src='assets/images/FlechaDer.png'>"],
            nav: true
        },
        1000:{
            items: 1,
            navText: ["<img class='flechaIz iz-middle w-100' src='assets/images/FlechaIz.png'>","<img class='flechaDer de-middle w-100' src='assets/images/FlechaDer.png'>"],
            nav: true
        },
    }
        // URLhashListener:true,
    // startPosition: 'URLHash',
    
  }
  customOptions5: any = {
    loop: true,
    autoWidth: true,
    // autoHeight: false,
    nav: false,
    autoplay: true,
    center: true,
    dots:true,
    items:4,
    autoplayTimeout:3000,
    margin:0,
    responsiveClass:true,
    responsive:{
        300:{
            items:1
        },
        600:{
            items: 2
        },
        1000:{
            items: 4
        }
    }
}
    constructor(
        private _sanitizer: DomSanitizer,
        private MarcasService:MarcasService
    ) {
        if(window.innerWidth < 992){
            this.sliders.push(
                // {
                //     imagePath: 'assets/images/Home/slides/mobile/slider1.png',
                //     label: 'Third slide label',
                // },
                {
                    imagePath: 'assets/images/Home/slides/home/BannerHome1m.jpg',
                    label: 'Third slide label',
                },
                {
                    imagePath: 'assets/images/Home/slides/home/BannerHome2m.jpg',
                    label: 'Third slide label',
                }
                /*,
                {
                    imagePath: 'assets/images/Home/slides/home/BannerBodegonM.png',
                    label: 'Third slide label',
                },*/,
                {
                    imagePath: '/assets/images/Home/slides/mobile/one-informe.png',
                    label: ''
                }
                // {
                //     imagePath: 'assets/images/Home/slides/mobile/slider6.png',
                //     label: 'Third slide label',
                // },
                // {
                //     imagePath: 'assets/images/Home/slides/mobile/slider7.png',
                //     label: 'Third slide label',
                // }
            );
        }else{
            this.sliders.push(
                // {
                //     imagePath: 'assets/images/Home/slides/home/slider1.png',
                //     label: 'Third slide label',
                // },
                {
                    imagePath: 'assets/images/Home/slides/home/BannerHome1.jpg',
                    label: 'Third slide label',
                },
                {
                    imagePath: 'assets/images/Home/slides/home/BannerHome2.jpg',
                    label: 'Third slide label',
                }/*,
                {
                    imagePath: 'assets/images/Home/slides/home/bannerbodegon.png',
                    label: 'Third slide label',
                },*/,
                {
                    imagePath: 'assets/images/Home/slides/home/caratula-min.png',
                    label: 'Third slide label',
                },
                // {
                //     imagePath: 'assets/images/Home/slides/home/slider4.png',
                //     label: 'Third slide label',
                // },
                // {
                //     imagePath: 'assets/images/Home/slides/home/slider5.png',
                //     label: 'Third slide label',
                // },
                // {
                //     imagePath: 'assets/images/Home/slides/home/slider6.png',
                //     label: 'Third slide label',
                // },
                // {
                //     imagePath: 'assets/images/Home/slides/home/slider7.png',
                //     label: 'Third slide label',
                // }
            );
        }
        this.items.push(
            { name: 'Bebidas', src: 'assets/images/Mercados/Modulo-1/menu-principal/Bebidas.svg',index: 1, dataHash: 'one'},
            { name: 'Alimentos', src: 'assets/images/Mercados/Modulo-1/menu-principal/Alimentos.svg',index: 2 , dataHash: 'two'},
            { name: 'Home Care', src: 'assets/images/Mercados/Modulo-1/menu-principal/Home-care.svg',index: 3, dataHash: 'three'},
            { name: 'Food Service', src: 'assets/images/Mercados/Modulo-1/menu-principal/Food-service01.svg',index: 4, dataHash: 'four'},
            { name: 'Resinas Recicladas', src: 'assets/images/Mercados/Modulo-1/menu-principal/Resinas-recicladas.svg',index: 5, dataHash: 'five'}
        )
        
        /*
        this.alerts.push(
            { id: 0, type: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/XfZeoOWjQgU")},
            { id: 1, type: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/e0VYQTuQMVA")},
            { id: 2, type: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/dgqhM6H-vyo")},
            { id: 3, type: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/R3pe8_1r3Z4")},
        );

        this.alerts_INGLES.push(
            { id: 0, type: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/zGsbbkoKQUE")},
        );*/


        ///Vide1Lateral ESP
        this.alerts.push(
            { id: 0, type: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/XfZeoOWjQgU")},
        );

        ///Vide2Lateral ESP
        this.alerts2.push(
            { id: 0, type: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/e0VYQTuQMVA")},
        );


        ///Vide1Lateral Ing
        this.alerts_INGLES.push(
            { id: 0, type: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/zGsbbkoKQUE")},
        );

        ///Vide2Lateral Ing
        this.alerts_2_INGLES.push(
            { id: 0, type: this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/zGsbbkoKQUE")},
        );
    }

   

    ngOnInit() {
        this.cargarAll()
        setTimeout(() => {
            $(".videoCarousell .owl-nav").removeClass("disabled")
        }, 300);
    }
    getVideoIframe(url) {
        var video, results;

        if (url === null) {
            return '';
        }
        results = url.match('[\\?&]v=([^&#]*)');
        video   = (results === null) ? url : results[1];

        return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + url+'?controls=1&autoplay=1');
    }

    cargarCategorias(){
    this.blockUI.start();

        this.MarcasService.getAll()
                                .then( response => {
                                    // console.log(response);
                                    response.forEach(element => {
                                        element.nombre = element.nombre.replace(" "," \n ")
                                    });
                                    this.categoriasBox = response
                                    this.blockUI.stop();

                                })
                                .catch(error => {
                                    this.blockUI.stop();
                                    console.log(error);

                                })
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
    cambiarIMG(index,text,cant,url:string=""){
        if(url.indexOf("01")<0){
            cant=4;
        }else{
            cant=6
        }
        this.Table[index].foto = this.Table[index].foto.substring(0,this.Table[index].foto.length-cant)+text

        //console.log(this.Table[index].foto);

    }
    
    cargarAll(){
        let data = {
          id:1,
          state:'0',
          filter:'categoria'
        }
        this.MarcasService.getAll()
                            .then(response => {
                                
                                response.forEach(element => {
                                    
                                    element.fotoActiva = element.foto
                                    
                                });
                              //   let foto = response[response.findIndex(element => { element.id ==id })].foto
                              // response[response.findIndex(element => { element.id ==id })].foto = foto.substring(0,foto.length-4)+"01.svg"
                              this.Table=response
                              console.log(this.Table)
                              
                          }).catch(error => {
                              console.clear
                            })
  }
}
