import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {MarcasService } from "./../../shared/services/marcas.service";
import {CategoriasService } from "./../../shared/services/categorias.service";
import {ProductosService } from "./../../shared/services/productos.service";
import {ImagenesService } from "./../../shared/services/imagenes.service";
import {SlidesService } from "./../../shared/services/slides.service";
import {PresentacionesService } from "./../../shared/services/presentaciones.service";
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { source } from "./../../../environments/config";
import { Lightbox } from 'ngx-lightbox';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
declare var $: any


@Component({
    selector: 'app-form', 
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()],
    providers: [NgbAccordionConfig]
})
export class FormComponent implements OnInit {
    private basePath:string = source.production?source.url:source.urlDev;
    session:boolean = localStorage.getItem('currentUser')?true:false;
    closeResult: string;
    abierto:boolean = false;
    @BlockUI() blockUI: NgBlockUI;
    titulo_texto:any="";
    static Cover = 'cover';
    static Contain = 'contain';
    imagen:any = "";
    muestra=0;
    data_product = false;
    imagen_selected = "";
    imagen_selected_bk = "";
    customOptions: any = {
        loop: false,
        // autoHeight: false,
        // autoWidth: false,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        margin: 0,
        nav: true,
        rewindNav : true,
        navText: ["<img class='flechaIz' src='assets/images/Mercados/Modulo-1/flechaIz.png'>","<img class='flechaDer' src='assets/images/Mercados/Modulo-1/flechaDer.png'>"],
        center: true,
        // navText:["",""],
        dots:false,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        // startPosition:this.Marcas?this.Marcas.submarca.findIndex(element => { element.id==this.route.snapshot.paramMap.get('mercado') }):this.route.snapshot.paramMap.get('mercado'),
        responsiveClass:true,
        responsive:{
            600:{
                items:3
            },
            1000:{
                items:5
            }
        },
    }

    customOptions2: any = {
        loop: false,
        autoplay: false,
        center: false,
        dots:false,
        margin:0,
        responsiveClass:true,
        items:4,
        responsive:{
            300:{
                nav: true,
                rewindNav : true,
                navText: ["<img class='flechaIz' src='assets/images/Mercados/Modulo-1/flechaIz.png'>","<img class='flechaDer' src='assets/images/Mercados/Modulo-1/flechaDer.png'>"],
                items:2,
                imageSize: 'contain'
            },
            600:{
                nav: true,
                rewindNav : true,
                navText: ["<img class='flechaIz' src='assets/images/Mercados/Modulo-1/flechaIz.png'>","<img class='flechaDer' src='assets/images/Mercados/Modulo-1/flechaDer.png'>"],
                items: 3,
                imageSize: 'contain'
            },
            1000:{
                nav: true,
                rewindNav : true,
                navText: ["<img class='flechaIz' src='assets/images/Mercados/Modulo-1/flechaIz.png'>","<img class='flechaDer' src='assets/images/Mercados/Modulo-1/flechaDer.png'>"],
                items: 4,
                imageSize: 'contain'
            }
        },
        nav: true,

            // URLhashListener:true,
        // startPosition: 'URLHash',

      }
      carouselData:any = [
        { text: 'Slide 1', src: 'assets/images/Nosotros/titulo1.png', dataHash: 'one'},
        { text: 'Slide 2', src: 'assets/images/Nosotros/titulo2.png', dataHash: 'two'},
        { text: 'Slide 3', src: 'assets/images/Nosotros/titulo3.png', dataHash: 'three'},
        { text: 'Slide 4', src: 'assets/images/Nosotros/titulo4.png', dataHash: 'four'},
        { text: 'Slide 5', src: 'assets/images/Nosotros/titulo5.png', dataHash: 'five'},
        { text: 'Slide 6', src: 'assets/images/Nosotros/titulo6.png', dataHash: 'five'},
        { text: 'Slide 7', src: 'assets/images/Nosotros/titulo7.png', dataHash: 'five'},
        // { text: 'Slide 6', dotContent: 'text5'},
        // { text: 'Slide 7', dotContent: 'text5'},
        // { text: 'Slide 8', dotContent: 'text5'},
        // { text: 'Slide 9', dotContent: 'text5'},
        // { text: 'Slide 10', dotContent: 'text5'},
      ];
  win = Window

    public edition:any
    public categoriasCombo:any
    public id:number = null
    public idF:number = null
    myColor:string="#ffffff";
    configModel:any = {
        color:"0xffffff",
        intensidad:{
            1:"0.9",
            2:"0.5",
            3:"0.8"
        },
        distancia:{
            1:"100",
            2:"100",
            3:"200"
        },
        x:{
            1:"50",
            2:"-50",
            3:"0"
        },
        y:{
            1:"50",
            2:"20",
            3:"-20"
        },
        z:{
            1:"50",
            2:"-50",
            3:"0"
        }
    }
    Marcas:any= null;
    Table:any= [];
    selectedData:any =
        {
            hasModel:false,
            fov:50,
            near:1,
            far:1100,
            pX:-5,
            pY:0,
            pZ:-50,
            model:"assets/models/mdl_bote_01.obj",
            material:"assets/models/mdl_bote_01.mtl",
            tX:0,
            tY:-10,
            tZ:0,
            rX:0,
            rY:0,
            rZ:0

        }
    cambiarValor(valor){
        //console.log('This SelectData', this.selectedData);
        let data = this.selectedData
        this.selectedData=null
        if(valor==1){
            data.tY+=1
            data.model = "assets/models/mdl_preforma_pet_33mm.obj"
        }
        if(valor==2){
            data.tY-=1
        }
        if(valor==3){
            data.tX+=1
        }
        if(valor==4){
            data.tX-=1
        }
        if(valor==5){
            data.rZ+= 1
        }
        if(valor==6) {
            data.rZ-=1
        }
        if(valor==7) {
            data.rX+=1
        }
        if(valor== 8) {
            data.rX-=1
        }
        if(valor==9) {
            data.rY +=10 
        }
        if(valor===10) {
            data.rY-= 10;
        }
        this.selectedData= data;
        // console.log($('#mainControls'));

    }
    escucha() {
        console.log('si');

    }
    constructor(
        config: NgbAccordionConfig,
        private modalService: NgbModal,
        private ProductosService:ProductosService,
        private MarcasService:MarcasService,
        private _lightbox: Lightbox,
        private route: ActivatedRoute,
        private ImagenesService:ImagenesService,
        private SlidesService:SlidesService,
        private PresentacionesService:PresentacionesService,
        private CategoriasService:CategoriasService,
        public translate: TranslateService,
    ) {
        // customize default values of accordions used by this component tree
        config.closeOthers = true;
        // config.type = 'success';


        translate.onLangChange.subscribe((event: LangChangeEvent) => {

            this.CAMBIAR_L(event.lang);

          });

      }    

    CAMBIAR_L(lang)
    {
        let L = lang;
        let A = [];
        let B = [];
        let IMAGENES_TRANSLATE =
        [
            //Envases Industrial
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ki9vBupLTpRZMVzobUf1KeyoFAIPeTQJjTiz85Ne.jpeg',EN:'./../../assets/images/Custom/Envase/Industrial/Galon-industrial-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/USQ4CwZJLcqsQbec3tyLdmUH7XBLW5XAkiETmWgs.jpeg',EN:'./../../assets/images/Custom/Envase/Industrial/Galon-industrial-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/DXz0kgLQRW39FKGnxnjdxsf2XtPD5fZtnFesT4fD.jpeg',EN:'./../../assets/images/Custom/Envase/Industrial/Galon-industrial.jpg'},
            //-
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/fP3yrUCOhVLqbSvK0bC1ipOy9BrlIaYX1HisRDNz.jpeg',EN:'./../../assets/images/Custom/Envase/Industrial/Galon-industrial-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/w6X8qlnNSFHXOEx2BhPmqgbRKjw03IhHRgmLmwYj.jpeg',EN:'./../../assets/images/Custom/Envase/Industrial/Galon-industrial-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/LjCzdYd97Qxxk32SkqQsnOSrMROlHC1XIHUOhpy2.jpeg',EN:'./../../assets/images/Custom/Envase/Industrial/Galon-industrial.jpg'},
            
            //Envases Pe
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/yVjwLszC1kkWOd0OXiyffpbZBBsKK8zCQVWV7kcB.jpeg',EN:'./../../assets/images/Custom/Envase/PE/PE-1-Galon.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/bZy6V9Gt5nH2ajY9xIIcLxyfB5HdLea1BrGvzTbX.jpeg',EN:'./../../assets/images/Custom/Envase/PE/PE-1-Galon-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/upcJkzZwWWVmo8bidANiV9jO4iwPcn7ApJttQ6ln.jpeg',EN:'./../../assets/images/Custom/Envase/PE/PE-1-Galon-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Dd1HDY4PHCjZUGugFAPXeemNWvmirAyuBw1gCMkG.jpeg',EN:'./../../assets/images/Custom/Envase/PE/PE-1-litro.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/coylvXS58p5RI52rO2i68QFXDpRKe3GvcNo3gfs3.jpeg',EN:'./../../assets/images/Custom/Envase/PE/PE-1-litro-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/16hQwtnZdhmShuugCnQbzsQPJQNUBbfNTPFRu0tt.jpeg',EN:'./../../assets/images/Custom/Envase/PE/PE-1-litro-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/BWDo1vl3IF8mZmbsuL00plCgJy31o0j1hUIA5Sbo.jpeg',EN:'./../../assets/images/Custom/Envase/PE/Botella-PE.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/IWCs2fz28pidvj0fjdBBcdWFDs3XnDTq148iiUFF.jpeg',EN:'./../../assets/images/Custom/Envase/PE/Botella-PE-B.jpg'},
            //CARBO
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/PIw8epp5FNmMJt6DFmohJ35CNqep83qrdEPtbX4f.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/lumzmptpLSgiigN6sYdomQkx2ae1aLmAXoWLpuwk.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/FBHrDeicPGsBP0CRzuyYNkQp2xg1yKxsxAMbBvA6.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/A1FFcMCXglpJBU9FjJTdqwfDNKGzOjpAdYvn355C.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/Pet-2-litros-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/XD77j0U8REnOIk6Oilmv932t9NFFMbYKljebUluD.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-2-litros.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/OTwZtwvgUUul1PeHyzSMDfRnwyRpr1ahYehlrf2k.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-2-litros-B.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/A3zUtAoP1YKguqHADgYT64TIJ5TYKHeuf9RTPjZp.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/2.5-LT.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/C30MMyN0QPujEBcxjOt3KLmK4S7Drpq6JjV0TIFk.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/2.5-LT-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Kav4V9ceTfdqN2jnaAjCniuHcbwbh5PqIpEWLSO1.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/2.5-LT-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/YcKkum1JB4A2qGjBbr4I0ujkXEo9EYuXUXRFHamm.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/3.3-LT.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/IBf5UXCwOTy0cO4ywswrjArJMMLnpOKtaIRljB5I.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/3.3-LT-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/hI1QuY7UsPJPIeHx2kDtSficBbJkuoEEDKht4Qrz.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/3.3-LT-C.jpg'},

            //PET - licores 
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/0ALQhC3RsPwFUyzzZHPzooTvXaNNgt6A7KVthys0.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/XU5uyWay6n1IlSybJNmGa1uO0fMla6E7LkoZhOPw.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/11bDmgE8uVhwOh4RbVlggU812AgJTqUveru0yqli.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro-C.jpg'},

            //PET - aceites 
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/zt3CdUEggcvS8FIa88dMNekz6tMleJIuYnGQFqi3.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/6I9zv4RON9Gf7NTBSsB7f7ZaiNYEHFx5eAsc89F2.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/TvORIrCzINcqFSWBiG1yg1czWyPLLZ0ePi16KkV0.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro-C.jpg'},

            //PET - salsas 
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ljljAqCZyIWgehC4oT3kqO6xEFVaRMccHamsPRJU.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Uu854dsVPlPARI3n8mzQHctCEDvNuiY89bgwFcIJ.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/mPQsz6isO96cVHU74wvb6DaEh9BF2SnmiGINqQ0g.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro-C.jpg'},
            // SAUCES AND DRESSINGS  - BOTTLES
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/cEdXeygLOvyv6sFldDpZMp134SkPoHfAbc6KDpLb.jpeg', EN: './../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos.jpg'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/oimXz1dd6tXeQom20LsjCNftAo7pvrUe59tvfP1N.jpeg',EN: './../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos-B.jpg'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/NJfIYzYWf87DnUbyUDRzwBDSFGQZvA7Wlreu6Sta.jpeg',EN: './../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos-C.jpg'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/oSq3DmLoRBsGtm6lWNjjUQx22Bf1g4fC8B1FZCDb.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos.jpg'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/hsyK88XmARNhEwy0IYcn6L150IG0ow2PjF2BD8ql.jpeg', EN: './../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos-B.jpg'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/7WL5JTRKDVA91v9ys5S5FmRwSovr6jDNaK36V3tX.jpeg', EN: './../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos-C.jpg'},

            //PET - Lacteos y embutidos
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/WwYLSYjTEMeHoDL0koei6jCjikx1xfVZnzvviQkD.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/wlystbaEbHGoks18nsIAMshKwlbopoeJwqZQppPl.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/CbMP54qDy3UkekjBF1H3d6HoPTahwiFKPy1GEs0h.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro-C.jpg'},
            
            
            //PET - Miel
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/KIwmDsTN0H4SojViBrNem5vxYXtsiFPCL7oFHgt0.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/OES973rPMKhkFbPrzLiwI3rgNJQPU2ofojLqiBzW.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/IZ9aWCo3EZnS8gced87xGXmHnfD8afTiVfxYEakE.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro-C.jpg'},

            //PET - Home Care
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/medXiXncupEvFrzyZs94giNZP8gzx2o4k9UUXvzc.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/zZXoNdcKH3tY2uw0Mun48PWc91USlJwnF14ndN8Q.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/WdgjgBBSCmZU8NdE8p6mQ6RXRx3uJQVMUAkmo2ag.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-1-litro-C.jpg'},

            
            //NO CARBO
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ZzqRx2aW7TK0vFHbFPgwIcUjYe9c4KigrMNgFtKp.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/4kzuiF28Q38hHiCbVxAF8J3wn2f7XxiY3og9cvrZ.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/2pXUJV0kkCXnvTOlsIDxhnyVngXwjgqva2UCrLz7.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/SFzmR8jtmNbU1Q04buVDQYWU3uAphIYIt23mE5CM.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/wNYDtOrp5ya62f51ILAADRgjN3WwVYeK1q5zw7lj.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/znJaMbtHekTWU5wWNWS2QHTh8dfsvgiHIOVqYEz1.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/lroX3sHoMVlzN3BzyUmr4Y0B8E0XzNOURO6prpW2.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-2.5-Litros.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/no1UzU8oOLnzJAtqcnRwMuQg4du3DOcNlbZuoyn4.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-2.5-LT.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/S8a2j5HUbZPBio3IPc6JEsXt2fE1qlnYZgO2YF1r.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-2.5-LT-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/dPMnIMZquahLcWJP9SYr6L42XH9HcIbK2V4fVLZl.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-3.3-Litros.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/4uLIf9WJlfmSmf5cSZaEnxmPBiyNzKEJTAPZbM0c.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-3.3-Litros-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/PS1iF6A0y3dVzvG4ZlrEINkZIZYuSiYNcAzkYhmb.jpeg',EN:'./../../assets/images/Custom/Envase/PET/PET/PET-3.3-Litros-Cs.jpg'},

            //-
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/IS9u4NU0q7khWSkB0lDJn0uJsQOEVKvCZsRJCkSE.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/9IJCw7DykgTB1QQKCMvrpLqqrhJmnYxVExbt2SCr.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/9cEW2g9kLq4HQBwPnIReRSMcNdV2haSW3xnbOmcM.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/oDQxq36KPZPuaqhL7iMERRUujsulOQNHzvzAT1Ts.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/heNo4PA6eyu1DDDTgJvSwmU2nLjGp0rZraVd5wv2.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/4RTNmexURpv6a2vVI0tjuxHfgXFS19ZQ36qIytWf.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos-C.jpg'},
            //-
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/tCsHSyWrz7zQWNY1BhgWmeLIyZuvb44BoKsFR9Fx.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/R2dR3O4OA9KaIsByVCBytdFEjJKbviAu1d9PrLg8.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/JfIEzoL5ryFmRDV2292L45tqm06S69VwHxwAPJwN.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/8UKUfKm0MvF6jvWoDFXZpTBzR0JG0pjUtT2ckaeZ.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/vfqCQENXxeEehiZMAKJUCEFE4ZfrKYek3uLa5QZm.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/4PUIvhuQSRAvDOWoRQ6M9bMsZ0u6z1FwzKqovmaT.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos-C.jpg'},
            //-
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/7t3TfdLHTjwmSw6DLNhUCwSP3nbYlqbmw8ON2gTV.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/p5laVCuANsptJrQnA4A2BcpDgyRC4ucY7gDmonp8.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/wgiUSdxrSwunYI58Of93i6M6mpRN7FZgVTX04tp4.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/500-ml-anillos-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/mzgn72wqd9rJt7skQ3mIEZUdunQAVd4YyRDYF1U0.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/phRzUsXSZlRKTG9uGM4Ym5ZwOuod14IoLTNva0Fx.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/rN7FokoRxj8YWoCofXMCKEea96YZ5LpHtTf3eB2v.jpeg',EN:'./../../assets/images/Custom/Envase/PET/ANILLOS/600-ml-anillos-C.jpg'},

            //PREFORMS1881 carbonatadas
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/6k8FxA2TePxHCcEWTPycSst99rHQoaa8N6pgwa3Z.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/u2qfmdZFJ1tbK6wzCOBQFCeiQSaPPVkALCRgAUhq.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/iYmkj815V1g8oXwSIYfXw3g9FyoWs4pgaecn2Jd6.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/9Vf8xraYoJ4Oo36bcy8DkFIhJil3VLZCocUAYspz.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-D.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/OORWXXhud2khRQwtYmwneQrXVNxqz367McWNQktF.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-E.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/W9FHaL7PSDkhpbkJPcSQ92XesmOymfjEcsfjnrfu.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-F.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/asJYIINuC5OJThzkHJ1dy5fEiF28OsRnyjsLSils.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-G.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/IjQPYtH67FKS8Z2qqoHkdqF96Bu6OPKWsHCPb1PP.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-H.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Wm1fGGDjV2n80q6jR7ZH8EUvsMojlUEADjk1qcDc.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-I.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/CmKGAVTMHRfboGKo57tTtlSwpYyfPHSBLqfVD2TW.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-J.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/uBj4k0i8BzteyROdYeiHKR8DFek3DVQiRR8ellZM.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-K.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Xj5ZfoDu4xu5EOVLyCHbYfNtPHzPTE3df0x0b1Rv.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-L.jpg'},

            //PREFORMS1881 no carbonatadas
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/eyvbD29wJCw3rhHYfhT2Ml3U3bGEqeSHZa8bO870.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/fE0gbIRvyTe4uhtFRxLNv0EKlJ10dbxZBIdLCPHs.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/G1b8OZV9b36FB9N7hKjrYBDue95S1eubGXBgMt4p.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/19h9WGwd8hdrj29wkwuW6nduEfpibSWopQ1ivnGS.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-D.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/YSSPOCMS6LXY8oQk5F0vTGkJdM6ZTz9o2CesZRGG.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-E.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/rBfQ7GiYtGAsNJmkxhZ98fYX69nWFrV5aFwUzxTC.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-F.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/cNzfO4A8nsl8mfFFHY8IRVHED720hOi4w9B7cYS5.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-G.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/XUw2EjfAZui2peYHE46OT7SWjnUDncvQCkok2Rx9.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-H.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/lm0jC1hzirPdLEw7muhRlRXRKMZUSFjIPSm484Tk.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-I.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/YtzfxglgN2wMREv7bpQXkiThkZe4o596QPDX1q5n.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-J.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/TdLOBkwpWCtr2e30rqRYtUK2F4N9WjVCm0WONnje.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-K.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/foFhKATv9L2AON7t3znOqIjrGKow6QSfiRkCcjG2.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-L.jpg'},

            //PREFORMS1881 cervezaas y licores
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/pDbbBTr3ItmULKZjneitw6v151PZ9lKSS9mcHxTh.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/f3D9qwNvpe22TGPaghUDJNdY9tvzPkaplRTYAoko.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/jmi6lhnUGkVfs1dOJQ8q8Oc8k2JMr88hsdZel1u9.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/0XsJldgtzsNHYeJqNihXLDmp1WNmxjJgVV260Zqm.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-D.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/XKJp9AFdloSF59lF7GSGErlji0mjoGLntvdK0NbO.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-E.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/0A9p0nzJHjteyVyxlam3zIBXURiDAC9M8wnpDqLa.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-F.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/dQUb3nh5PkM2HCpBxOP7gm9Iu4MRHeSgf6jk9aD2.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-G.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/JsxhhpKV2O6kIuAPMx9T1sGCtsjr5LQ5xV4YVzmj.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-H.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/wBtKh2IdYyvYWxVkjWnfStZEbTNjRuXHcqEErXHn.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-I.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/4UKbLxCLGvrCelZMs2VFX7CGxpudOBVx647jiV84.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-J.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Pi7CtVgZ3Vkeb2d8WO0knPB3dxVDCiJVbEvV0KKo.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-K.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/TI6p6taMRWHsaXpC4Qbba4JEe6kZLSBZnziEKzpy.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-L.jpg'},

            //PREFORMS1881 aceites
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/r1tqEcRIYxYbUdNDVXvR5m8IiO3WDiIATm61a6VU.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/aM5xI8P9SV0zQo8HUuDzSBpyVs6HL7EfcicAfKqk.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/XAX6DnJBGLdx3bm5ahDgxGCm5927GbzADqepd3Mn.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/z3WksMVXB7qAOCOFLgR0Lr0JdSUm99HiE76vtTrC.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-D.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/9XyyhRu4Eii4Jc3vbGyfPNB8J25zcFOFJmVcvJyf.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-E.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/vdR4MWzngZkHGc3FhddXoAh8USW9s1VsiHLb5Jix.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-F.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/NFnFVJ5KIBfvuUcDmm5FXrtrqS8Ri0K13AZAwxGG.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-G.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/hUQFD8pR5ia6SHdaCGZm1TXmPE7965FU55qpYjox.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-H.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/NbyuAIIZ91bd7UaI5BfNfq3f6qT5uMeQ4i4uzyAJ.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-I.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/RNxH1J0TB4c6EKRoj7lIXt7P1yH4Nk3XwyCSVEfg.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-J.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/zy0ZbVtLbZAvbnuVKHzaDQybSe8HIthYp8fCNr47.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-K.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/HQfl0GBOVODTZx177L0ENHiEs2i7Qv4Okza9Thfn.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-L.jpg'},

            //PREFORMS1881 salassa
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/tKRkMQRIw111rX91ewvmXJ2Y5T6oahVOwoN4KKyR.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/l3j6L4MHBUrX7B4agLfuyqyx0XqEKPy6i7hh9XGb.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/v07DZP8WohImgoJlNthxokdjJPr5DdF8t6pWxsjL.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/84FYuOi5i6qdv2AykIJvCIJbVti266ux0PtQyiwF.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-D.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Ocldz9PK7RJepu5QcDVVBOTnQttJqJ6Wb0GJxd6M.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-E.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Fm9hPCW6qNU9mViJJhzve9DdyEXLnlxU8zaRfoGN.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-F.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/pcq5FqXyZHwDOqA4Mq6yGElmaMQu9erzvWDfVtVd.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-G.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/HhUa9E77NZ5PqQjNGhXyYgwCYFKMaLbQecXhemlt.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-H.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/T3rgOcKT2bRfncag65niNnvRfORX6DouuBQHdpjE.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-I.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/jhZQa3cUVxi83cV57p0mp348aDW4LeLbI6cvSY4n.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-J.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/itwxWu9kPFOMtLlqZj5kw9X8XgFnnTf7ECSFqmHI.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-K.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/HkA8Djq2OfUaX8NTEgCRQBBmzfRyqD3zizHBG1Ds.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-L.jpg'},

            //PREFORMS1881 lacteos
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/v2l0jSetcpqc3f5DbUUSaagPNS3HCiO4VWJjHXZZ.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/AGTX3xh4AWQSAcSPZSLEHcdGKkihx1OFQhMNe8na.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/f6M0GZpnjT7N6WAuQeFuiWgd3mLd5eIPLbrTLRFA.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/unBu6HGFh3EL32S4ZnDnbal2EdfmHB3dtYmQPzWD.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-D.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Ocud9QgPfjT7S00aRycwcplWUPhtXFkUUPsouVTo.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-E.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/wQgSwxFOUKM1u9pv1KFX5ysRymR87HNAdRCNCoFX.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-F.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/W2ggjvZo7ngUIQJYL5Tp7yzlk6RuatpoVskYpFuL.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-G.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/heeRBaYMtkE7PNHk7JNLLGDnyV6lbfBcPDxerj2f.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-H.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/IIHoDHdHY4cWo2chmVEMNgd8SJmyQcpKoCxwlzql.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-I.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/M9UomJnzvWnn0zf77XAZQOrmJ8hjrG1uM85lyEa5.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-J.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/I3RLreCa2kXOTxXPjmAmnxLqqvRW2q0V3VaYsykp.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-K.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/XbvmQGPiAhK6HZitr8Fyufg4g6UwScPV0yqzbUAB.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-L.jpg'},

            //PREFORMS1881 miel
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/gy4P1NS8JhEm0XHPPwhl5EWYbXj19MXIz2b7sTk3.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Rylq9HkLtkqZDJZ6lNCtbtAx0b6JxUmsg7bpaXMM.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ho1Sg7AjNM1sHgJCjfcHCysZ6m3k5orlL3fjfT3u.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/DdkapSyC5h2NAW2YE9yQEtb2cZ2uBsJ1lpAKfKiB.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-D.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/64VuYG7gmcD9DVGFk8CCBX62wWwiTd8uoWtdOik9.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-E.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/60YdkRfWoE3Hqypuw2pYzxZQXqfNYjvk9fmL8UAR.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-F.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ieXHPL21b8fRzbVwbPau9MlcdqMXSwTjUNSS2DLT.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-G.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/6S70Ad13unfF2bKpbIODHGZtpEMZtW7lBw77QXWz.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-H.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/OOtKzgEd0uOUtQFz62IB1WOu5pNHzYPTwN1ywEws.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-I.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/V4z9Cpts1hRVA1ZKN0KN4uhpU8jbPqYOTOfUas6z.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-J.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/voM3g5JXaF3KwrO1FJhXdKxzjwZSsdGqbx22hQTC.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-K.jpg'},

            //PREFORMS1881 home-care
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/0KMf81G5Vwu6fs7M9vlPefvjdEGsxAtVhKr4wBBh.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/9hg6sWlGqYEO2WDnmR8AZGDK6o1QpeMWMMAfHASA.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/9mJmATsx0sDZegXpzlZy4uwgJmU5uBnFGaMvgLZY.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-C.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/cjPeMK2n29OOsiJrTukmcdvHRKBld0bIgaSE5IrI.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-D.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Wq6LEW02EbOeUxXHfQVU7yDlgemdsPvcOKXVXrhw.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-E.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/zZ4y1XBla5cyI56X58QHaLeDW8BNq9YgX0wgCrqN.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-F.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/IYmumJhaugHMh9ps2afZnVdaC79orwUjafDu5000.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-G.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/pdusZjXJGjfNjv2BsbiTr9k2AlIp1qlRGWZ6S4xO.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-H.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/GxU9fS59Ocaxt1putAiBHCHDdFK9P5IRphhZPnnm.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-I.jpg'},

            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/dR21OvyC9f5GukqHwXBdVKu0l6T5yNzAXk5zdobm.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-J.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/LldXYw79tQLEtZ5ZJnBxmnEAnbL4IaHW5386PGc6.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-K.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/F0Q5sF8vFapD4EeW93Jg6cUReueeJxPDG3pm2ixh.jpeg',EN:'./../../assets/images/Custom/Preformas/1881/Preforma-1881-L.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/y9KrPUuUcjBVVGhgyam5Tl7Cs8uTiyP25JklCkWj.jpeg',EN:'./../../assets/images/Custom/Envase/Carafes/garrafa1.jpeg' },
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/zNgzhPlWNex00R1sg0ZeDc8qBknJ8NYOQSxdcqKh.jpeg',EN:'./../../assets/images/Custom/Envase/Carafes/garrafa2.jpeg' },
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/k9qnSPUvMmdOTIhXRn0qNVJE1EYl3cfrm7h0pZfy.jpeg',EN:'./../../assets/images/Custom/Envase/Carafes/garrafa3.jpeg' },
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/10TLxLEFYfbFsOxrgdczTbMdrhganKKtFvkxQtGh.jpeg',EN:'./../../assets/images/Custom/Envase/Carafes/garrafa4.jpeg' },

            //PREFORMS 1816 - carbo
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/PBDpaxUwN6OKijzQoLYatWSmVRIjnycx3a9ukVPS.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/AWRG5NYp09qygsmdgSWQJYeiTG1itDhIG8Opkpql.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/8H8cMZB0vDBp7TlZWyJ7XfaMix1yrktDyIm56cHi.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-C.jpg'},
            //PREFORMS 1816 - no carbo
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/IOPSODjUQfapg14ZSHczicM6mqlc7jNDvJsWk7hs.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/6uj6T0bZQXOuJFGHYAK24IJeyS7jsON5BybdScSX.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Ji5H3dKTh0uLmAfUd0SX4uVcyPrjhcSN0r4XmHFp.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-C.jpg'},
            //PREFORMS 1816 - cerveza
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/PcUsv5zXmbdBsjEidA9vj5U1n0o00sCWU0VHWcVp.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/LcJxUbjTFnVJZBhqGm3msSMDkNOTrFgPTtgAg1eL.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/AZZp4ZTCM696tArIvvFpABrqMbkDQzEyUnlhivdm.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-C.jpg'},
            //PREFORMS 1816 - aceites
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/rHeBPDZLVem5tXUCrLU9adM7Z41ETfrL6xmoq019.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/TImYacrtb2g3WMlFR0KpSdBHVLQZTIFYlf55RDjS.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/xBezS18MXfCiXxx3UuWjPzce2cgFjO7XAbmc0HrR.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-C.jpg'},
            //PREFORMS 1816 - salsas
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/yfc7hN9Ob89Xe6E9Z698jItRhabW314ak1HzqrhA.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/rg9Cn86txf6m3eAdts3TL4skRL0v27JD5Cm5Ltb4.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/1Z1Fx2gp26DBYb3NljGhlDfgYK9W0Xo8VCR9X6sn.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-C.jpg'},
            //PREFORMS 1816 - lacteos
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ElC2yJfS7TjBEwKIeGGSsKp4se9o7qzrnFKiOxAj.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/fFcOXMDlCW6xjzNp9QYnZoBz0RehXKWAATrifVAz.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/YyuT3DSdfxxamgmXJULbDrHybiW8YOB0PKKu1siC.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-C.jpg'},
            //PREFORMS 1816 - miel
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/VcFZmZE1PY7nZ00UjfnwEopCspZggmITUH50sTIo.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/JVHH4vHHAL9v0oAo5XVSB7wVNrtyTQR0z6BMfrVV.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/3nwGbQmy51DBzWRHuw8jSrlR0Qq7rAq7geK0OlIU.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-C.jpg'},
            //PREFORMS 1816 - home care
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/U0Hvnj0v85umNgc1p97XiJTaFNFSWX8zrSzqXZRn.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/omPiVf8YuYRdUi4proStEeAjHbdgU67BGAByGdNL.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/MnGSp0cCGSkfO6qJYvBVvcASO3Eqw959DLt34bJJ.jpeg',EN:'./../../assets/images/Custom/Preformas/1816/Preforma-1816-C.jpg'},

            //PREFORMS VARIAS - no carbonatadas
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/vIyfgSDuBEURQJbgxJi3z5klsbG2t9Sbjqxu84fe.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/PET-55-ml.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/NCNCnwaxQLgVBuTHQGQRsPwXgp9YbsxbhblnXiEh.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/PET-55-ml-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/L0oEGMgw3JNSeN3KrSmxoyTWvls5SXMmOHZoCVHD.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/PET-55-ml-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/zcQQ7FDx2gsErav6J4M5H3iZk85JeRbi8Yv4QHlO.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/uQDozLxyLcjorwe66WMvH2Xp2w0YVltHgBSQqrIs.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/8cLKAnKZfY9EaNJZ9PtNc4gkIGT6kl3MzfSYwq9a.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/GJRutzrZp2lcszVJXsqyqHkxGJsHLidO2JHRynCz.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/Garrafon.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/jjz0ugTqRSBMGpPuiXlON563dJNxjZIAsDiVX9q8.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/Garrafon-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/xDjbTs9GvoFQcfcNAJWUxEnmnuWlTA7vg7UA4V6o.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/Garrafon-C.jpg'},

            //PREFORMS VARIAS - salsas
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/2C9Ny7dwgMZB7GyDoUW29wJ2EO9N3yek6J4Il74m.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/PET-55-ml.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/wWFAp8TAk7CIm5ogDSKRzVt5JL2PRQMWJIZy0kpW.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/PET-55-ml-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ClZzRZ6j6Mv0bSLNvvqh3lmxtOHBcFzWOt4mUSKr.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/PET-55-ml-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Ltv5un8llZQZlPkhSv6dAba6KkTZRWxMk95A1F30.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/bEC6OvwliJGAuqrxgmyymKTu8AV3YYoAStm0JbuH.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/yMLIjvEWQenIbH5rTeHo4EdNyKfc1Cx5W3uXpNZF.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm-C.jpg'},

            
            //PREFORMS VARIAS - lacteos
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/eoNBHsUXtbyOQLq3j7OucTLaN7o3p8d3qZ9m856b.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/DloVCLcdvX66j5ZwmzPBOPXUQX4C3AP8FuVlMHjB.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/emsnvsAnYGopzlGKFie3c1phD084062nbAlUcITG.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm-C.jpg'},
            
            //PREFORMS VARIAS - miel
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/F1sANlNWrS8LWgieRqCvclerSLRKlNCrnPvkDJsg.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/9Vs3D8J9n9sqbuq6hIjW7l6ndjNo3XeWaCMBKXfd.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Y1P0nzen0v4fTl0YrHTsn1PjfPu4ewg2IFYvxq3C.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm-C.jpg'},
            
            //PREFORMS VARIAS - home care
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/M2EBavxHJGFJBzNy7XB5fPC7ayhjVZWCLRBbCR4q.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/lcihtFNOO6kPUJ26VqwpSFRfXfUQfuhIAR6acOD1.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/whAi5Kchr2ufT6OBJefc4rtCcNoVxZ5Vl251SGAA.jpeg',EN:'./../../assets/images/Custom/Preformas/Preformas_varias/33mm-C.jpg'},
            
            //////////////////////////-------------------------

            //TAPAS AF&-PN-PR -- carbonated
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/5WMcSExqJxTdQeTr5NUY5xxAMjaIrUBT7cFdfbj0.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/YtIAo9EpCGJmsQoe31r4rCEqW6nNg47Gy7UdZXp8.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/6aekpocyWDu0es1pLgbLpY1kyVo6liX18JcDo4Wf.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-C.jpg'},

            //TAPAS AF&-PN-PR -- no carbonated
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/0MrrzFUdgIIiNkG3v9P6kaSO8HuBNs1vkF4aAmyj.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/EUS5hDRKvaxssFMxSb9Qu7FjxpUmQXo8uRdtRqmI.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/bGWSd7xAYq9iIeuWE0NpmHKKaXtnPugunqu64pUE.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-C.jpg'},

            //TAPAS AF&-PN-PR -- alcolic
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/A5OykCRQ7bS8U2WxxQheS8YK79hLDwVGXDSyMvcZ.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/dtdPLDtRqDX7cDNaHpmg0Lc85yP82n1M9Kc9DSh6.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/wGVrqbZnBI7M7424cujIUffso3P4GpXRccEtRYSt.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-C.jpg'},

            //TAPAS AF&-PN-PR -- oils
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/KG3kwJRhfuqFIWq4OKom4w1LQHqVX6MjHoyAOJcW.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/wsyknrVIEC05owDu9Dv6OezxUP6EVPWUZGBqVlsf.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/OhNMu6tahv6ZcT88mJvE0eqWsUHxPNmCCag7SWAs.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-C.jpg'},

            //TAPAS AF&-PN-PR -- salsas
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/sZOsyTV5VqI9zjubdleBsUitQT5Pk8vzz76n9EIm.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/YGYUEst2t2xMRjGKU4E9n3aSYDi4Dy8disleWDJ3.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/g9Wax0TnDlKVTJ1t34PzdgJo44uwkiLLwMsr3eaR.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-C.jpg'},

            //TAPAS AF&-PN-PR -- lacteos
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/AxtoCJ9McRbhDEHEVP4qC5smSFdS2FVv3jByaSZh.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/dUjJGzQ9r2Bn1nRgPOANAZBKtPvX6KQcdzxthQkt.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/LAvQMWzfAeaTlQfg5NqAkbFgobQMHgWs5igbLwE1.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-C.jpg'},

            //TAPAS AF&-PN-PR -- miel
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/7TCtRTbhrULERKtMdfwRlaaiM96hUkTSsURZwLuS.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/VJaBE8BjG99DniHOBIj2EMLLJRFMouTPFhAdhgKM.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Tvb3Pn1pOzWMV0u0SqTzJ1BKxK1EwejXbqBvhfSl.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-C.jpg'},

            //TAPAS AF&-PN-PR -- home care
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/97feBwOIdprGf1GyronqwBkXmQyJqghNMwFGnZ9u.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/cK5JszAt6TtNsTdEf5jFHP7lhW3Adj6nEuO5WWg8.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/YVzZ3CJ8LfihRlZRcxDBgBHoWB8nHaFUcydw5RKB.jpeg',EN:'./../../assets/images/Custom/Tapas/AF6_PN_y_PR/AF&-PN-PR-C.jpg'},

            /////////////////////////-----------------------------

            //TAPAS PC1881 -- carbonated
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/zpVQea96awgp8jXtMdU98oXTIggHyurh4f1Q8b46.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/BhTwHXXlzUa9y6fXTTwTf2DdCCPyzxf6y46WKnAK.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/QLivd9lIDUa1KIj2deAfwChhTquylc9yvDBinQfF.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-C.jpg'},
            //TAPAS PC1881 -- no carbonated
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/6GrdDUKVXlDoKnhDwVVBD2cnp7niymeXvPRdM1T7.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/nNPySP1UtAH0R91k4nrd51TWfPtbVQajJXjqd9Zy.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/cZxZD9ykv3jpiO6EGoYpgxo47Gu9rgfQkr5UhUMc.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-C.jpg'},
            //TAPAS PC1881 -- alcolic
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Hv03EeIudywZ3urM2fCOUXyqB4yEGErtQRpM4FUw.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ofQjsTp0ql1Nb4yqkyelXTGmWFcInrDOCeMqlVEr.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/P3CeT1aWxuL9lV14xEH3P45pg9GmKlUYHHlYYOwg.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-C.jpg'},
            //TAPAS PC1881 -- oils
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/CUo6NkmK2sZKoUXoBXIz0XAh648pUWWYExvDEmsN.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/eGUu5rLUQ8pwQkyq1uRpR1uT7Xpt467wmp0Qjptg.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/YX8mMvl5fynoz4SnMAymQ5Du0QRDYezZAxxkkDHL.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-C.jpg'},
            //TAPAS PC1881 -- salsas
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/mvVgc3jY4kGGav509fy2ezpaYiqf4BTo2cRfI6Je.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/7HUEgMhFxi1nexkBwUssHvr1V19pd3u8dBGhLEfK.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/FwQgHhOgPn9S6Lz5TMY8PVhSpkpc5YG1h7gJ8M00.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-C.jpg'},
            //TAPAS PC1881 -- lacteos
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/XQTSqbH3SLYbBr4OYJX2rF2c4oajKGWiY5Ed7nE2.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/HBTEZ98pV3cAm79rsOmmtnecvltoAinp75bD11Gu.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Er0Vt6yMWJNjs1uHUPsjlLuLJ4dvIMcJfjQxqQf2.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-C.jpg'},
            //TAPAS PC1881 -- miel
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/MuEvMIVFlCsxP8R8FY3NJC0RS7LawTJO6gn5TxOs.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/wOC5ESZWRrtYTn8CGt7fAiaXNd1aDvSoPVpYm5ax.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/6k3qWKq4gAvk8lRhOaySfx7IsdSh1rEr0kX9C4qN.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-C.jpg'},
            //TAPAS PC1881 -- home care
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/vlkaF5OXGL0KY31pFQ9FmMwDH3GUbHIcxfC3xpwY.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Gprr9DPtn94I4sM7OrwkTIZHTTtbN1cUdNEsZi92.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/aYntYB1vPZjXKmZHSYmaEPuaXMWWGGPpoPu0FBcI.jpeg',EN:'./../../assets/images/Custom/Tapas/PC_1881/PC-1881-C.jpg'},

             /////////////////////////-----------------------------

            //TAPAS CAF4-1816 -- no carbonated
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/uJGgkmnIAQWv2PLXAoqqrkTCbjZ4gS3yKtiaI2OK.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/VdFc6a0FbQaMQK4PdkKcxiGhn6aSM80cdHUri6p6.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/o3gDpyNZ1PFZoMwbLjsPSVJIBH5Ebk9mIExQ4sbx.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816-C.jpg'},
            //TAPAS CAF4-1816 -- alcolic
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/MzB1NhEecdKxVGsSWROTe6ZlIEHE6won7tHLFhqu.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/UidQwkKjd7CYd6xNov4BgWekNjht9Y6guc5xV65V.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/RBISMpyM3F4KYRlbuaIUnJuM1Qy5mdue7jEmaxkh.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816-C.jpg'},
            //TAPAS CAF4-1816 -- oils
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/BTNQgBVQKeiQ7ttFpARTQOTXhIjaZZRx9SL88zFR.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/W0Vjxw2VEgsXI5XxEyIkjt03ilgU6NdWHc6zeuug.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/3aCOghflvawKf2WOoT6S4TKgKAxmAttihTcOfWhx.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816-C.jpg'},
            //TAPAS CAF4-1816 -- salsas
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/xW8KbNn5cuFFb0XwJt9hEkRdfwk0PLFuoUmCCv2U.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/adBXUdXkUQRaO0DJDy2KGH7Zw9qo8t4y692Ubozr.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/EzTsTy01NT4iWFbTUNOGOONlK5oNU46MdQ7WtoTw.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816-C.jpg'},
            //TAPAS CAF4-1816 -- lacteos
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/2CkGV6UIWfmvH7ktBf4SuhagDFsIRwtjkh9WYA7t.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/T754la6m8oZkdceQAW2WNLrTYQBv5c40JwS10zLD.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Fwtl1LzC4cIvny0etkDMAPbpcOgn2FfPNG9nMQHZ.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816-C.jpg'},
            //TAPAS CAF4-1816 -- miel
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/zrL7DbwTZlpDxJQef5x9PNoB1uq8BXmLN7Y65gLR.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/T4irEGJE44jD6VQqb95narqOa03g0sgbZN7KuDX1.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/gzImiKdS8kiDT4FaLVxodBnxsD9zuY7W4Gs0JBHf.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816-C.jpg'},
            //TAPAS CAF4-1816 -- home care
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/9Y9cSRUNyck0qB9O3uWgO5583ddapc0ytO9snyVk.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/sJ8UvGatGhe0FVeZ9uTG0ipbye5kGlBLaKzrFK7N.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/iygKRyAgSu66Nc3qjbTnIISMBgz01VFO19TbwJ7g.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF4_1816/CAF4-1816-C.jpg'},
        
             /////////////////////////-----------------------------

            //TAPAS CAF5 -- no carbonated
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/q70rOOAxwpHruttzh182tWRnBO4qqq6CzZfHfY4v.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/3etlKC0rjIMXeFd17BsydxeyNvnlsxncyzgowJ1k.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/fHAGRlVjRkb94GfO1xN4oKMvur7be3jkISFHBnsf.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5-C.jpg'},
            //TAPAS CAF5 -- alcolic
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/gsCiIwp9m4LdxN3g9MZfZrUWmnoqF3iBo3gbPMYO.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/g8dbV2zNYbRmimTtf6IqUx9madpUREtlzCEYKCMs.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/hqo9yV948iWN5WJsrNBIaS3LdXjOe5CRMymcMCa3.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5-C.jpg'},
            //TAPAS CAF5 -- oils
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/EIgjpGB9kMIYP1A13FGZXhS1iQg3ulv9VybLJV0s.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/EBfaZCrRAn7nJs9LpqQg0JPGFVbN5XJ6NdKMeNn7.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Rr7GJafUFIB4XnCT0xz0CdsVcixIUFb4uNVyp37o.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5-C.jpg'},
            //TAPAS CAF5 -- salsas
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/uSoTN4kuffnVUPoJOxMo3Mstg87k7tLve4t1DI0t.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/hKt2KC8ugG30C31FpwZyUy4HXGcfaXPsShNCT9cH.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Kwl9OIwsAZToSIlWe9LfyoMdpJIKaosaliggFIB4.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5-C.jpg'},
            //TAPAS CAF5 -- lacteos
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Sx0IiagA9DRokDXayPfMXaWqCtypkQnkSZpd7Bg7.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/sJBRjraC2FQNaVH94ru9ygXMyr8cEMRBUIIBOZcK.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/7F8jjSaifIYhQElMAYWlDwaZeQLyaH0XLiCG6G4i.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5-C.jpg'},
            //TAPAS CAF5 -- miel
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/2AdNX0SXM0SSeAU872xtjTGKFqhooUxriLSOUcWt.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/M1Ln1yANYm4RvuJXjrjfAzdCIupUW63bLR35PJm8.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/VCjTEcTNRUE49paoAfXMg5cCwvTzs84XjnLn71uJ.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5-C.jpg'},
            //TAPAS CAF5 -- home care
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/MhvAo0rCfNOKX2WosW9ecITRwBqwCvemGj2OTzg9.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/TLQ83XmtwlpWOtlwxW8LkuZf1RaWHYlZlF2fPD1a.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/AFgNnNhBfFUAE1DyP4nOZJVE2K7OyzZfcVE0oatF.jpeg',EN:'./../../assets/images/Custom/Tapas/CAF5/CAF5-C.jpg'},

             /////////////////////////-----------------------------

            //TAPAS CDS1 -- no carbonated
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/h1Ja8jstbcDIk2DCxELtniLtFYvaEV5oXLea76Ds.jpeg',EN:'./../../assets/images/Custom/Tapas/CSD1/CSD1.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/V7xCt6grm3ntvu2YV55C1C7OTTBoyt5nDpvNZyMq.jpeg',EN:'./../../assets/images/Custom/Tapas/CSD1/CSD1-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/kI9yux5fj35ulQHBzH7DaLITDZf5TWDOhUmgclOt.jpeg',EN:'./../../assets/images/Custom/Tapas/CSD1/CSD1-C.jpg'},

             /////////////////////////-----------------------------

            //TAPAS 33mm -- no carbonated
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/d5voMFgPY7YT3PKECLOQD62c4woWScNNSGB7PN6K.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/B6vXlk8h6f3jdmggq6Q6IcekdZ0SrDgj0eZzJkfO.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm-A.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/L13lESs0mSNHcBUGDjRoswO0FGPQ9iCTZqJzwQVl.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm-B.jpg'},
            //TAPAS 33mm -- salsas
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/AqqJ56VeQVUjd4LK9BhpLRjfgxsGJLyG537uhKIT.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/1B2YfgqMd1BoN1YUtdzMMTWFVwxH8kvzxxJQZXiI.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm-A.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/DfVECaGJIrixIiymhrLgKgtpK66lsnu8yfZq6qLs.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm-B.jpg'},
            //TAPAS 33mm -- lacteos
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/YiC5c9YaMZLqFwRyW3RyU0X3I5FgzWDkHl3nF5Av.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/mYoMqSaUnccbu61V8rhYLHE0Rdyz1ZvqPJ1Ej1WG.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm-A.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/bqgZEVWAH8hliHXiVYCZFX02Ora2XiiJ4RsHE96q.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm-B.jpg'},
            //TAPAS 33mm -- miel
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/LIKPNYaxqu2xvWzdRcDLkkfT07gm98SUkCcWeyQ6.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/fvdRcw4LKdqnD4S3IrzaidqCN8NFAD99Edzbo0t9.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm-A.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/kJXSxZcxYKSzE33ICjnHlnjBTQcpxRFedXtQg2tq.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm-B.jpg'},
            //TAPAS 33mm -- home care
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/h05yXoYngmccnp1EiNNKa9hIPS59IdQQpTQaj0hJ.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/mFnZddYErCWCUxHHLmfscs7GBrbh5HxxVEvb25xP.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm-A.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/oHwIsY1Tp6BIQvBKraVwiwhzR9DYjTOo9Ut9JwHU.jpeg',EN:'./../../assets/images/Custom/Tapas/T33mm/33mm-B.jpg'},

              
             /////////////////////////-----------------------------

            //TAPAS 38mm -- no carbonated
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/djhAekIushDq1gasbG1wXvgYqVmOJxWDgETwn0J8.jpeg',EN:'./../../assets/images/Custom/Tapas/T38mm/38mm.jpeg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/AIn7GJGvXeNSlusXvbUDnSNYCR1hPZOigFic6gF5.jpeg',EN:'./../../assets/images/Custom/Tapas/T38mm/38mm-B.jpeg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ZjK00McFPfC1xgFygmpE2712Xbx6WTGn8extbaNg.jpeg',EN:'./../../assets/images/Custom/Tapas/T38mm/38mm-C.jpeg'},
            //TAPAS 38mm -- lacteos
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/s7688IqoFZjCkW8uRRnVvGt86ig1Sush0hUPAmbm.jpeg',EN:'./../../assets/images/Custom/Tapas/T38mm/38mm.jpeg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/p7isc4PXIjB2yAs4O6xULL0Z26eGnZmoUhEGCv7I.jpeg',EN:'./../../assets/images/Custom/Tapas/T38mm/38mm-B.jpeg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/jBjHGiqhSkM47pyjvcTwgzildPsgMRrt0juMl10o.jpeg',EN:'./../../assets/images/Custom/Tapas/T38mm/38mm-C.jpeg'},
            //TAPAS 38mm -- miel
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/zbvY6SLtifaYAIuXZlQglVmwXaj7b5dioFcTSNFA.jpeg',EN:'./../../assets/images/Custom/Tapas/T38mm/38mm.jpeg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/PMO0g5K59P5B0BP67FM1aYgqcPdjiFdst6GT8jjF.jpeg',EN:'./../../assets/images/Custom/Tapas/T38mm/38mm-B.jpeg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/nGlvGdbs6PqkfEWXyR473R6lA1jMbUPhho43MkCm.jpeg',EN:'./../../assets/images/Custom/Tapas/T38mm/38mm-C.jpeg'},

             /////////////////////////-----------------------------

            //TAPAS Sports -- no carbonated
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/RqsmYA8KkIZit14aJgk24yuZtJla2ICUHFJ204aq.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-2-piezas-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/3eY2PIn5PGhuXXmTbppzTHUU7MNzbn5N3I27llMz.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-2-piezas-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ymNTvxvEyRMgXtygmxFleZosYdfpFDNDJ9c9afBt.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-2-piezas-1881-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/NxmpXh60poaBlqjBJuvETvwmIb7OoIqnTGCf4Hx7.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/PoUekGGFhNPldoM7t4VbiuaG6j5tvT811vn5zspz.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/mDGVaDdmI4gwWNMtP84ACdZcQX9ZUgE1qLmdr2zm.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/E0dJMo7ibQGJGaGq4HD6AZ2PNuvrC8yo5yoH4bDo.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/DA1hrcmqP0wQK2j3HibOMreq0cJ9WJF7Aoo1u3YB.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/OCaKmX8RbTsl65kTWaPDJLSmuzkI2OIOWbIY7A5c.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881-C.jpg'},
            //TAPAS Sports -- salsas
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/RVc97jSpPwKYlfTXAeeMig2Vetsh88cdDkyIsnRj.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-2-piezas-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Wtjvul11Ak5sa19Kyq0PfH8jXHhrOYr45kSGvoVk.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-2-piezas-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/gwOhis2egrVQxI8zzB6mxwitLyTbiAWil0AQfIq3.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-2-piezas-1881-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/boZ4xvnp495YYGnJJuDZaPIFhxfJkABGoA0weJcr.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/FbFoY72M3bhPMVd27IH4RVy0UJhGa27gSq7v7j9r.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/TUqn4AG68COJMORmqBhVd3dTx3KXlsvDSGNSansf.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/RCDZDePKfnC36Aj90T2nhfQTNVETIQKcZbev52zC.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/FNAHC4vtQVZPVg1Se6lWfTbQOuTFlwTIeqWYleq0.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/9z2bAUVeMDcyMbtrlHg06rTYHDumzxzhVIxJRA2h.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881-C.jpg'},
            //TAPAS Sports -- lacteos
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/TONaVMDYkwPWvQSZYuAcnIPPnJr3EqsjnzI9gNlR.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-2-piezas-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/rFuJ6zfOwGaxApFAgugYmSXCh30SJHgDPmozCyzA.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-2-piezas-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Gd6JncfwzK2Rpgz8TczDJnvLSWkgLVb7B0t1m9Ke.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-2-piezas-1881-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/d5s4xmY3s8RxKvroWCrn5rUnOtTAO56gBJg3kzuq.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/itNZ37RTA9dTrh981xj6cU6w4KqyXoZhiKcPPYqr.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/nEecpUE99SFpi8mCDlKfuOw5iVbIXWx9Wm2IXnm0.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/LIT8iUnxLoczK0pbdjO58WWEoXi5gD8NbdmXn3nb.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/OnrONOqX10BBlU2mhUu4EKGejhWdTqibdP8mXm5A.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/gLO8vChICYOenYHktWOTEirRUWAuLRZhwWSVmTuG.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881-C.jpg'},
            //TAPAS Sports -- miel
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/mIGfx3rcpVOXqTPWZ3TAiw5DSkr0FhvWkSG4UDzI.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-2-piezas-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/35rAz5v5WefmxTah89ngvcuu9CidNO2qUi6FwSYP.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-2-piezas-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Jvuam6QwofHh9f6GrjyYkM57c1jrOIA45PAD7Do3.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-2-piezas-1881-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/kUVmHLpXDWuLOgx8Pp0paubjp23vZhwYSGEK1XON.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/YB6YSb0873yPKVZe3lwIpHewmNJRJiFW9CyZbJHc.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/f1u1LZQzDWvmdpKgkbNaFjcFThk74J8DHqA7BbJ0.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/sAZpTVJn4VvTENRSb1LDZF6fRwzVv3pUlZvbowIB.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/vvp467U4Ztum6Xui6TKqBB9aVCrPNyw9m1Xp3LsY.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/jOu3IlyqB8aVDnWuwmF7qjNDEPC2HKeOuqiTmnvb.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881-C.jpg'},
            //TAPAS Sports -- home
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/tMNLQo8Bu7tjAyBg3hN6avG1Gp7pvtIrznA50R7g.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/8z3bvm4IwiJtMMWByW1o53Ap84gBR7woYidI2C3N.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/454aNqpUsxfpU4Yc9fftA3McILjgaYgHkJpvRMpK.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1816-C.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/UJBLQpxlUDQLjQ4sFgaD9Cyj6DuyJF7fz97XjdAG.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/biPd3Z97Fg7TznroehPqfHqrHEGu2SIsm7iwLOmE.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881-B.jpg'},
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/v9MTbOcfKLNiEAgv0nuBUvHN3uDFoKBe6FIvqPPS.jpeg',EN:'./../../assets/images/Custom/Tapas/Sport/Sport-3-piezas-1881-C.jpg'},

            //infografias
            {ES:'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/EFuuA51ZYMwKp5PF07uP2zCfYcwOrA4JDP77iA9A.png', EN: './../../assets/images/infografias/5-Transparent-BOPP-Film-Metallized-BOPP-Film.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/1whpOp80qxshdvbZ9aefgdhqjCjOAT6s9OrsJJst.png', EN: './../../assets/images/infografias/2-Transparent-BOPP-Film.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/VZPKi2mpF8QKrCXgFKFv7V6dn4ZhtZPomdqUaVir.png', EN: './../../assets/images/infografias/1-PE-Film.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/5icsQQWKw1UNisj5Zj4R7rapZ84TGfwGEUNj3qyq.png', EN: './../../assets/images/infografias/2-Transparent-BOPP-Film.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/DTuKuZeBgg1nbqJNhCSkbwYG0tAHfktMTYCAaLAI.png', EN: './../../assets/images/infografias/1-PE-Film.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/OSBLDqz2mCSxscSivSkWqCK9rTPrhgFqfkLHrmew.png', EN: './../../assets/images/infografias/1-PE-Film.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/JJ2f8ZptzOq1NCyiidDOyTkY2PlHpFljteiEK6mo.png', EN: './../../assets/images/infografias/12-Transparent-PET-Film-Metallized-PET-Film-PE-Film.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ux8lYX2MjFZjLRkt7RdycabuPyiGThggtfrn7vEU.png', EN: './../../assets/images/infografias/14-Coextruded-Film-UHT.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ua3K4wzkZupwzkaVU90sokGjuOg0DCiFPmFdK72s.png', EN: './../../assets/images/infografias/8-Transparent-PET-Film-PE-Film.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/hpCGWh7btrOvGqYHbuomHekTA5WyDiihUQIdB3v4.png', EN: './../../assets/images/infografias/1-PE-Film.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/OEwMmj7t4xssAk0ljyPefRPib2rqoEvF1izD3QBs.png', EN: './../../assets/images/infografias/3-Transparent-BOPP-Film-PE-Film.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/p02xu9mNVw68VUZBcc3xo7P1vmn03oCJTnHlVCRH.png', EN: './../../assets/images/infografias/2-Transparent-BOPP-Film.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/bc1b2ItDF9bGgQDzuTTaFJWJnzmN1KlTI9q4T0kR.png', EN: './../../assets/images/infografias/1-PE-Film.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/bc1b2ItDF9bGgQDzuTTaFJWJnzmN1KlTI9q4T0kR.png', EN: './../../assets/images/infografias/4-Transparent-BOPP-Film-Transparent-BOPP-Film.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/bc1b2ItDF9bGgQDzuTTaFJWJnzmN1KlTI9q4T0kR.png', EN: './../../assets/images/infografias/5-Transparent-BOPP-Film-Metallized-BOPP-Film.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/UXANwtRNcrhJIxMkwJIBUJ10GAzilvHdfmkQFkMH.png', EN: './../../assets/images/infografias/7-Transparent-BOPP-Film-Metallized-BOPP-Film-High-Barrier-Metallized-BOPP-Film-PE.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/jSrHiynOne4YpyNV3r35iPKk0PrpDHfqaro3S3Z6.png', EN: './../../assets/images/infografias/6-Transparent-BOPP-Film-Metallized-BOPP-Film-PE.png'},
            {ES: 'https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/GQJsOlgSH5bho1XJaC2p0syLkvfGOqASk9Z9fU2J.png', EN: './../../assets/images/infografias/3-Transparent-BOPP-Film-PE-Film.png'},

        ];

        
        //OBTENER EL ARRAY DE LAS IMAGENES
        /*console.log('Lenguaje cambiado!', L);
        console.log('IMAGENES BK:',this.BK_ORIGIN_IMGS);
        console.log('this.galleryImages:',this.galleryImages);
        console.log('this.selectedData', this.selectedData);
        console.log('imagen_selected: ',this.imagen_selected);*/
        let FIX = [];

        if (L == 'en'){
        A = this.galleryImages;
        
        for(var i=0; i<A.length;i++)
        {
            //console.log('1');
            var img = A[i].small;
            FIX.push(img);

            //console.log('OPT',IMAGENES_TRANSLATE.find(x => x.ES === img));
            if (IMAGENES_TRANSLATE.find(x => x.ES === img)){
                img = IMAGENES_TRANSLATE.find(x => x.ES === img).EN;
            }
            //console.log('2');
            B.push({'small':img,'medium':img,'big':img});
        }
        this.galleryImages = B;

        //console.log('FIX:',FIX)

        if (IMAGENES_TRANSLATE.find(x => x.ES === this.imagen_selected)){
            this.imagen_selected = IMAGENES_TRANSLATE.find(x => x.ES === this.imagen_selected).EN;
        }
        
    }
    else
    {
        //REGRESAR A ESP
        A = this.BK_ORIGIN_IMGS;
        this.galleryImages = A;
        this.imagen_selected = this.imagen_selected_bk;
        //console.log('this.imagen_selected_bk: ', this.imagen_selected_bk);
    }

    //console.log('NUEVA SALIDA',this.galleryImages);
    }

    CambiarNombrePresentaciones(lang){
        let L = lang;
        let Presentaciones = this.selectedData['presentaciones'];
        //let presentaciones = SelecData[]
        let PresentacionTranslate = [
            //Botellas - Carbonatadas

            { ES: "Envase PET&nbsp;3 litros", EN: "3LT PET Bottle" },
            { ES: "Envase PET 3 litros", EN: "3.3LT PET Bottle"},
            { ES: "Envase PET  3.3 litros", EN: "3.3LT PET Bottle" },
            { ES: "Envase PET 2.5 litros", EN: "2.5LT PET Bottle" },
            { ES: "Envase PET 500 ml", EN: "500ml PET Bottle"},
            { ES: "Envase PET 500 ml", EN: '500ml PET Bottle' },
            { ES: "500 ml", EN: "500ml"}, // volumen -> JSON: separador
            { ES: "Envase PET 600 ml", EN: '600 ml PET Bottle' },
            { ES: "600 ml", EN: "600ml"},
            { ES: "Envase PET 1.50 litros", EN: '1.5LT PET Bottle' },
            { ES: "1.50 litros", EN: "1.5 liters"},
            { ES: "Envase PET 2 litros", EN: '2LT PET Bottle' },
            { ES: "2 litros", EN: "2 liters"},
            
            { ES: "3 litros", EN: "3 liters"},
            
            { ES: "3.3 litros", EN: "3.3 liters"},
            
            { ES: "2.5 litros", EN: "2.5 liters"},

            //NOCARBONATED
            //PET Bottles
            { ES: "Envase 300 ml", EN: '300ml Bottle' },
            { ES: "Envase 750 ml", EN: '750ml Bottle' },
            { ES: "Envase  500 ml", EN: '500ml Bottle' },
            { ES: "Envase 500 ml  anillos", EN: '500ml Bottle with Rings' },
            { ES: "Envase 600 ml   anillos", EN: '600ml Bottle with Rings' },
            { ES: "Envase 1L", EN: '1L Bottle' },
            { ES: "Envase 1L anillos", EN: '1L Bottle Rings' },
            { ES: "Envase 1.5 L", EN: '1.5L Bottle' },
            { ES: "Envase 2L", EN: '2L Bottle' },
            { ES: "Envase 3L", EN: '3L Bottle' },
            { ES: "Envase 3.3 L", EN: '3.3L Bottle' },
            { ES: "Envase 2.5 L", EN: '2.5L Bottle' },
            { ES: "Envase 250 ml", EN: '250ml Bottle' },

            //PE BOTTLES 
            { ES: "Envase 1 Galón PE", EN: '300ml Bottle' },
            { ES: "Envase 200ml", EN: '200ml Bottle' },
            { ES: "Envase 250ml", EN: '250ml Bottle' },
            { ES: "Envase 240ml", EN: '240ml Bottle' },
            { ES: "Envase  500 ml", EN: '500ml Bottle' },
            { ES: "Envase 1 LT", EN: '1L Bottle' },
            { ES: "Envase 1/2 Galón", EN: '1/2 Gallon Bottle' },
            { ES: "1/2 Galón", EN: '1/2 Gallon' },

            //Carafes & carafe
            { ES: "Garrafa", EN: 'Carafe' },
            { ES: "Garrafón", EN: 'Carafe' },
            
            { ES: "5 Litros", EN: '5 Liters' },
            { ES: "6 Litros", EN: '6 Liters' },
            { ES: "19 Litros", EN: '19 Liters' },

            //Beer-liquors
            { ES: "Envase 365 ml", EN: '365ml Bottle' },
            //oils
            { ES: "Envase365 ml", EN: '365ml Bottle' },
            { ES: "Envase  600 ml Anillos", EN: '600ml Bottle Rings' },
            { ES: "Envase 500 ml Anillos", EN: '500ml Bottle Rings' },
            { ES: "Envase 1000 ml Anillos", EN: '1000ml Bottle Rings' },

            //Sauce and dressings
            { ES: "Envase 500ml", EN: '500ml Bottle' },
            { ES: "Envase 600ml", EN: '600ml Bottle' },

            //Dairy and Sausages
            //Honey
            { ES: "Envase 500 ml", EN: '500ml Bottle' },
            { ES: "Envase 600 ml", EN: '600ml Bottle' },
            { ES: "Envase 1000 ml", EN: '1000ml Bottle' },
            
            //Home care
            { ES: "Galón Industrial", EN: 'Industrial Gallon' },
            { ES: "1 Galón", EN: '1 Gallon' },
            { ES: "Litro Industrial", EN: 'Industrial Liter' },
            { ES: "1Litro", EN: '1 Liter' },
            { ES: "Envase  600 ml Anillos ",EN: '600 ml Bottle with Rings'},
            { ES: "Envase 500 ml Anillos ",EN: '500 ml Bottle with Rings'},
            { ES: "Envase 1000 ml Anillos ",EN: '1000 ml Bottle with Rings'},

            //caps
            { ES: "Retornable", EN: 'Returnable' },
            { ES: "Lamina", EN: 'Metal' },
            { ES: "Lamina ", EN: 'Metal'},
            { ES: "Retornable", EN: 'Returnable' },
            { ES: "Retornable", EN: 'Returnable' },

            { ES: "Sport Cap 3 Piezas ", EN: 'Sport Cap 3 Pieces' },
            { ES: "Sport Cap 2 Piezas ", EN: 'Sport Cap 2 Pieces' },

            { ES: "Tapa dosificadora Lateral con Foil", EN: "Lateral Dosing Cap with Foil"},

            { ES: "38 mm Presion GT", EN: "38mm Pressure GT"},
            {ES: "38 mm Rosca  PE", EN: '38mm Screw PE'},
            { ES: "38 mm Rosca PE CP2", EN: "38mm Screw PE CP2"},
            { ES: "38 mm Rosca  PE", EN: "38mm Screw PE"},
            { ES: "38 mm Rosca  PE Liner", EN: "38mm Screw  PE Liner"},
            { ES: "Tapa  55 mm Con Vertedero", EN: "55mm Cap ..."},
            { ES: "Tapa 55 mm Plana Clip", EN: "55mm Flat Cap Clip"},
            { ES: "Tapa 53 mm Plana Faldón Corto", EN: "Top 53mm Flat Short Skirt"},

            { ES: "No Retornables", EN: 'No Returnable'},

            { ES: "AF6-PN y PR", EN: "AF6-PN & PR"},
            
            { ES: "1 a 8 colores", EN: "1 up to 8 colors"},
            { ES: "300 kilos", EN: "300 kilos"},

            //Beverage Crates
            { ES: "12 Botellas Litro", EN: "12 Liter Bottles"},
            { ES: "Panal recto", EN: "Honeycomb straight"},
            { ES: "Panal Recto", EN: "Honeycomb straight"},
            { ES: "24 Botellas  12 Oz", EN: "24 Bottles  12 Oz"},
            { ES: "24 Botellas  12  Oz", EN: "24 Bottles  12 Oz"},
            { ES: "Panal en Diagonal", EN: "Honeycomb in Diagonal"},
            { ES: "24 Botellas 12 Oz  baja ", EN: "24 Bottles  12 Oz low"},
            { ES: "24 Botellas  12 Onzas  baja ", EN: "24 Bottles  12 Oz low"},
            { ES: "24 Botellas Medio Litro alta", EN: "24 Half Liter Bottles Tall"},
            { ES: "30 Botellas  7/8 Onzas ", EN: "30 Bottles 7/8 oz"},

            //Caja agricola
            { ES: "Caja Agricola #  1 Calada", EN: "Agricultural Box #1 Openwork"},
            { ES: "Caja Agricola #1 Calada", EN: "Agricultural Box #1 Openwork"},
            { ES: "Caja Agricola Cerrada", EN: "Closed Agricultural Box"},
            { ES: "Caja agricola #2", EN: "Agricultural Box #2"}, 
            { ES: "Caja para Lacteos", EN: "Dairy Box"},

            { ES: "Vaso para helado 12 Onzas", EN: "Ice Cream Cup 12oz"},
            { ES: "Vaso Bebida Fría 5 onzas", EN: "Cold Drink Cup 5oz"},
            { ES: "Vaso Bebida Fría 8 onzas", EN: "Cold Drink Cup 8oz"},
            { ES: "Vaso Bebida Fria  12 onzas Boca Ancha", EN: "Cold Drink Cup 12oz Wide Mouth"},
            { ES: "Vaso Bebida Fría  16 onzas", EN: "Cold Drink Cup 16oz"},
            { ES: "Vaso Bebida Fría 22 onzas", EN: "Cold Drink Cup 22oz"},
            { ES: "Vaso Bebida Fría  30 a 32 onzas", EN: "Cold Drink Cup 30oz to 32oz"},

            { ES: "Vaso Bebida Caliente  5 onzas", EN: "5oz Hot Drink Cup"},
            { ES: "Vaso Bebida Caliente 8 onzas", EN: "8oz Hot Drink Cup"},
            { ES: "Vaso Bebida Caliente  10 onzas", EN: "10oz Hot Drink Cup"},
            { ES: "Vaso Bebida Caliente 12 onzas", EN: "12oz Hot Drink Cup"},
            { ES: "Vaso Bebida Caliente 16 onzas", EN: "16oz Hot Drink Cup"},

            { ES: "Vaso Bebida Fría 5 onzas", EN:  "5oz Cold Drink Cup"},
            { ES: "Vaso Bebida Fría 8 onzas", EN: "8oz Cold Drink Cup"},
            { ES: "Vaso Bebida  Fría 12 onzas", EN: "12oz Cold Drink Cup"},
            { ES: "Vaso Bebida Fria  12 onzas Boca Ancha", EN: "Cold Drink Cup 12oz Wide Mouth"},
            { ES: "Vaso Bebida Fría  16 onzas", EN: "16oz Cold Drink Cup"},
            { ES: "Vaso Bebida Fría 22 onzas", EN: "16oz Cold Drink Cup"},
            { ES: "Vaso Bebida Fría  30 a 32 onzas", EN: "Cold Drink Cup 30oz to 32oz"},

            { ES: "Recubrimiento PLA", EN: "PLA Covering"},

            { ES: "450 Litros", EN: "450 Liters"},
            { ES: '3/4" Fundido', EN: '3/4" Molten'},
            { ES: "Azul", EN: "Blue"},
            { ES: "Negro", EN: "Black"},
            { ES: "600 Litros", EN: "600 Liters"},
            { ES: "650 Litros", EN: "650 Liters"},
            { ES: "750 Litros", EN: "750 Liters"},
            { ES: "990 Litros", EN: "900 Liters"},
            { ES: "1250 Litros", EN: "1250 Liters"},
            { ES: "1750 Litros", EN: "1750 Liters"},
            { ES: "1750", EN: "1750 Liters"},
            { ES: "2500 Litros", EN: "2500 Liters"},
            { ES: "2500", EN: "2500 Liters"},
            { ES: "3200 Litros", EN: "3200 Liters"},
            { ES: "3200", EN: "3200 Liters"},

            { ES: "4100 Lts Negro", EN: "4100 Lts Black"},
            { ES: '2" Fundido', EN: '2" Molten'},
            { ES: '2" Roscado', EN: '2" Screw'},
            { ES: "5000 Lts Negro", EN: "5000 Lts Black"},
            { ES: "6000 Lts Negro", EN: "6000 Lts Black"},
            { ES: "7000 Lts Negro", EN: "7000 Lts Black"},

            { ES: " Fosas Septicas 1250Lt", EN: "Septic Tank 1250 Lt"},
            { ES: "Fosas Septicas 1700Lt", EN: "Septic Tank 1700 Lt"},
            { ES: "Fosas Septicas 2500Lt", EN: "Septic Tank 2500 Lt"},
            { ES: "Fosas Septicas 3200Lt", EN: "Septic Tank 3200 Lt"},
            { ES: "Fosas Septicas 4100Lt", EN: "Septic Tank 4100 Lt"},
            { ES: "Fosas Septicas 6000Lt", EN: "Septic Tank 6000 Lt"},
            { ES: " Fosas Septicas 750Lt", EN: "Septic Tank 750 Lt"},

            { ES: "Un lavadero izquierdo o derecho", EN: "One Left or Right Buddle"},
            { ES: "Dos Lavaderos", EN: "Two Buddles"},
            { ES: "Dos lavaderos", EN: "Two Buddles"},

            { ES: "Contenedor industrial", EN: "Trash Bins"},

            { ES: "Hielera", EN: "Coolers"},
            { ES: "Negro / rojo / azul", EN: "Black / Red / Blue"}, 

            { ES: 'Casillero 36"', EN: 'Locker 36"'},
            { ES: 'Casillero 18"', EN: 'Locker 36"'},

            { ES: "Letrina Plástica", EN: 'Toilet Plastic'},

            { ES: "Tarima", EN: 'Pallet'},
            { ES: "Negro y Azul", EN: 'Black & Blue'},

            { ES: "Caja de transporte abierta baja", EN: "Short open transport box"},
            { ES: "Caja de transporte cerrada alta", EN: "Tall closed transport box"},
            { ES: "Caja de transporte cerrada baja", EN: "Short closed transport box"},
            { ES: "Tapadera de caja de transporte", EN: "Transport box cover"},

            { ES: "Caja ordenadora 1", EN: "Plastic Organizer Box 1"},
            { ES: "Caja ordenadora 2", EN: "Plastic Organizer Box 2"},
            { ES: "Caja ordenadora 3", EN: "Plastic Organizer Box 3"},
            { ES: "Caja ordenadora 4", EN: "Plastic Organizer Box 4"},
            { ES: "Caja ordenadora 5", EN: "Plastic Organizer Box 5"},

            { ES: "Cubeta 1 Galón", EN: "1 Galon Bucket"},
            { ES: "Cubeta 5 Galones", EN: "5 Galons Bucket"},
            { ES: "Tapa Cubeta  1 Galón", EN: "1 Galon Bucket Cover"},
            { ES: "Tapa Cubeta 5 Galones", EN: "5 Galon Bucket Cover"},

            { ES: "Canasto", EN: "Plastic Basket"},

            { ES: "Tambo Vial", EN: "Tambo Vial"},
            { ES: "Tapadera de caja de transporte", EN: "Transport box cover"},
            { ES: "Separador vial", EN: "Road separator"},
            { ES: "Delineador vial", EN: "Road Liner"},
            { ES: "Tope vial", EN: "Road Stop"},
            { ES: "Separador Anidable", EN: "Nestable Separator"},

            { ES: "Bandejas de pan", EN: "Bread Trays"},

            { ES: "Preforma 1881", EN: "Preform 1881"},
            { ES: "Envase PET 3 litros", EN: "3 Lts PET Bottle"},
            { ES: "Envase PET  3.3 litros", EN: "3.3 Lts PET Bottle"},
            { ES: "Envase PET 2.5 litros", EN: "2.5 Lts PET Bottle"},
            { ES: "Preforma 1816", EN: "Preform 1816"},
            { ES: "24 Botellas 12 Oz  baja", EN: "24 Short 12oz Bottles "},
            { ES: "Preforma 33mm", EN: "Preform 33mm"},
            { ES: "Preforma 38mm", EN: "Preform 38mm"},
            { ES: "Preforma 38 mm", EN: "Preform 38mm"},
            { ES: "Preforma 48mm", EN: "Preform 48mm"},
            { ES: "Preforma 48 mm", EN: "Preform 48mm"},
            { ES: "Preforma 55mm", EN: "Preform 55mm"},
            { ES: "Preforma 55 mm", EN: "Preform 55mm"},
            { ES: "Preforma 55mm", EN: "Preform 55mm"},

            {ES: "Envase PET 500 ml", EN: "500ml PET Bottle"},
            {ES: "Envase PET 3 litros", EN: "PET Bottle 3 Lts"},
            {ES: "Envase PET 3.3 litros", EN: "PET Bottle 3.3 Lts"},
            {ES: "Envase PET 2.5 litros", EN: "PET Bottle 2.5 Lts"}
            

        ]

        
        if(lang == 'en'){
            console.log('Presentaciones dentro CambiarNombrePresentaciones: ', this.selectedData['presentaciones']);

            for(var i=0 ; i< Presentaciones.length ;i++){

                var nombre = Presentaciones[i].nombre;
                var separador = Presentaciones[i].separador;
                var material = Presentaciones[i].material;
                var descripcion = Presentaciones[i].descripcion;

                if(Presentaciones[i].descripcion == "Envase PET 500 ml"){
                    console.log("Entro a :", Presentaciones[i].descripcion);
                    Presentaciones[i].descripcion = "500ml PET Bottle";
                }

                //DropDown
                if (PresentacionTranslate.find(x => x.ES === nombre)){
                    nombre = PresentacionTranslate.find(x => x.ES === nombre).EN;
                    this.selectedData['presentaciones'][i].nombre = nombre;
                }

                if (PresentacionTranslate.find(x => x.ES === descripcion)){
                    //console.log('Descripcion: ', descripcion);
                    descripcion = PresentacionTranslate.find(x => x.ES === descripcion).EN;
                    //console.log('Nueva Descripcion: ', descripcion);
                    this.selectedData['presentaciones'][i].descripcion = descripcion;
                }

                //
                if (PresentacionTranslate.find(x => x.ES === separador)){
                    separador = PresentacionTranslate.find(x => x.ES === separador).EN;
                    this.selectedData['presentaciones'][i].separador = separador;
                }

                if (PresentacionTranslate.find(x => x.ES === material)){
                    material = PresentacionTranslate.find(x => x.ES === material).EN;
                    this.selectedData['presentaciones'][i].material = material;
                }

                // por alguna razon estos productos no se traducen como los demas
                //deben de traducirse por medio de id y no buscando en un diccionario
                switch(this.selectedData['presentaciones'][i].id){
                    case 1316:
                        this.selectedData['presentaciones'][i].descripcion = "3Lts PET Bottle";
                        this.selectedData['presentaciones'][i].nombre = "3Lts PET Bottle";
                        break;
                    case 1324:
                        this.selectedData['presentaciones'][i].descripcion = "3.3Lts PET Bottle";
                        this.selectedData['presentaciones'][i].nombre = "3.3Lts PET Bottle";
                        break;
                    case 1332:
                        this.selectedData['presentaciones'][i].descripcion = "2.5Lts PET Bottle";
                        this.selectedData['presentaciones'][i].nombre = "2.5Lts PET Bottle";
                        break;
                    case 1848:
                        this.selectedData['presentaciones'][i].descripcion = "500ml Bottle";
                        this.selectedData['presentaciones'][i].nombre = "500ml Bottle";
                        break;
                    case 2202:
                        this.selectedData['presentaciones'][i].descripcion = "500ml Bottle";
                        this.selectedData['presentaciones'][i].nombre = "500ml Bottle";
                        break;
                    case 808:
                        this.selectedData['presentaciones'][i].descripcion = "38mm Screw PE";
                        this.selectedData['presentaciones'][i].nombre = "38mm Screw PE";
                        break;
                    case 813:
                        this.selectedData['presentaciones'][i].descripcion = "38mm Screw PE Liner";
                        this.selectedData['presentaciones'][i].nombre = "38mm Screw PE Liner";
                        break;
                    
                        
                    default:
                        break;
                }
                /*if(this.selectedData['presentaciones'][i].id == 1316){
                    this.selectedData['presentaciones'][i].descripcion = "3Lts PET Bottle";
                    this.selectedData['presentaciones'][i].nombre = "3Lts PET Bottle";
                }*/
                //console.log(`Descripcion Nueva ${i} : ${Presentaciones[i].descripcion}`);
            }
            //console.log('\n Presentaciones Traducidas: ', this.selectedData['presentaciones']);
        }

    }

    galleryOptions: NgxGalleryOptions[];
    galleryOptions2: NgxGalleryOptions[];
    galleryOptions6: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    galleryImages2:any = [];
    BK_ORIGIN_IMGS:any =[];
    scrollMyDiv(item) {
        let section = item;
        // window.scrollTo(0, 0);  // reset window to top
        const elem = document.querySelector('#' + section);
        // console.log(parseInt(elem.scrollHeight+''));

        let offsetTop = parseInt(elem.scrollHeight+'');
        // if(window.innerWidth < 992){
        //     if(offsetTop>500){
        //         window.scrollTo(0, 1500);

        //     }else{
        //         setTimeout(() => {
        //             window.scrollTo(0, 500);
        //         }, 300);
        //     }
        // }else{
        //     if(offsetTop>200){
        //         if(section=="Galeria"){
        //             window.scrollTo(0, 1500);
        //         }else{
        //             window.scrollTo(0, 800);

        //         }

        //     }else{
        //         if(offsetTop<100){
        //                 window.scrollTo(0, 1500);
        //         }else{
        //             setTimeout(() => {
        //                 window.scrollTo(0, offsetTop);
        //             }, 300);
        //         }

        //     }
        // }


      }
    reset_img(){
        this.imagen_selected = this.setImg(this.route.snapshot.paramMap.get('id'));
        this.imagen_selected_bk = this.imagen_selected;
        if(this.route.snapshot.paramMap.get('id') === "8"){
            this.data_product = true;
        }else{
            this.data_product = false;
        }
    }
    ngOnInit() {
        this.imagen_selected = this.setImg(this.route.snapshot.paramMap.get('id'));
        this.imagen_selected_bk = this.imagen_selected;
        this.cargarCombosMarcas();
        $('.ngx-gallery-preview-top .ngx-gallery-preview-icons .ngx-gallery-icon').html('<div class="lb-dataContainer" style="animation-duration: 0.7s; width: 877px;"><div class="lb-data"><div class="lb-details"><span class="lb-caption animation fadeIn" style="animation-duration: 0.7s;">https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/EFuuA51ZYMwKp5PF07uP2zCfYcwOrA4JDP77iA9A.png</span><span class="lb-number animation fadeIn" hidden="" style="animation-duration: 0.7s;"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div>')
        this.getParams();
        this.galleryOptions = [
            {
                width: '100%',
                height: '600px',
                imagePercent: 100,
                thumbnailsSwipe:true,
                previewCloseOnEsc:true,
                previewCloseOnClick:true,
                thumbnailsColumns: 4,
                thumbnailsMargin: 10,
                thumbnailMargin: 10,
                imageSize: "contain",
                imageInfinityMove: true,
                imageAutoPlay: true
            },
            // max-width 800
            {
                breakpoint: 900,
                width: '100%',
                height: '400px',
                imagePercent: 100,
                thumbnailsSwipe:true,
                previewCloseOnEsc:true,
                previewCloseOnClick:true,
                thumbnailsColumns: 4,
                thumbnailsMargin: 10,
                thumbnailMargin: 10,
                imageSize: "contain",
                imageInfinityMove: true,
                imageAutoPlay: true
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: true
            }
        ];
        this.galleryOptions2 = [
            {
                width: '100%',
                height: '600px',
                imagePercent: 100,
                thumbnailsSwipe:true,
                previewCloseOnEsc:true,
                previewCloseOnClick:true,
                thumbnails: false,
                imageSize: "contain"
                
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 100,
                thumbnailsSwipe:true,
                previewCloseOnEsc:true,
                previewCloseOnClick:true,
                thumbnails: false,
                imageSize: "contain"
            },
            // max-width 400
            {
                breakpoint: 400,
                imagePercent: 100,
                thumbnailsSwipe:true,
                previewCloseOnEsc:true,
                previewCloseOnClick:true,
                preview: true,
                thumbnails: false,
                imageSize: "contain"
            }
        ];
        this.galleryOptions6 = [
            {
                width: '100%',
                height: '600px',
                imagePercent: 100,
                thumbnailsSwipe:true,
                previewCloseOnEsc:true,
                previewCloseOnClick:true,
                thumbnails: false
                
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 100,
                thumbnailsSwipe:true,
                previewCloseOnEsc:true,
                previewCloseOnClick:true,
                thumbnails: false
            },
            // max-width 400
            {
                breakpoint: 400,
                imagePercent: 100,
                thumbnailsSwipe:true,
                previewCloseOnEsc:true,
                previewCloseOnClick:true,
                preview: true,
                thumbnails: false
            }
        ];

        this.resetCarousel();
        $(document).ready(function () {
            if($('.slides-ingrup .owl-nav').hasClass('disabled'))
            {
                $('.slides-ingrup .owl-nav').removeClass('disabled');
            }
        });

        //this.CAMBIAR_L(this.translate.currentLang);
    }
    resetCarousel(){
        this.galleryImages = [
            {
                small: 'http://placehold.it/1000X500?text=X',
                medium: 'http://placehold.it/1000X500?text=X',
                big: 'http://placehold.it/1000X500?text=X'
            },
            {
                small: 'http://placehold.it/1000X500?text=X',
                medium: 'http://placehold.it/1000X500?text=X',
                big: 'http://placehold.it/1000X500?text=X'
            },
            {
                small: 'http://placehold.it/1000X500?text=X',
                medium: 'http://placehold.it/1000X500?text=X',
                big: 'http://placehold.it/1000X500?text=X'
            },
            {
                small: 'http://placehold.it/1000X500?text=X',
                medium: 'http://placehold.it/1000X500?text=X',
                big: 'http://placehold.it/1000X500?text=X'
            }
        ];
    }
    setImg(producto){
        producto = parseInt(producto);
        var src = ""
        switch (producto) {
            case 1:
                src = "../../../assets/fotos/proforma1.jpg";
                break;
            case 2:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/m7CaIk5r5bQ7GYyv2uEjMJDufvztX9ZTJwbbEzZw.jpeg";
                break;
            case 3:
                src = "../../../assets/fotos/tapas2.jpg";
                break;
            case 4:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/kk6fRW2NXDslbMZYDcCojEBy2v4P722XKzJUjJdv.jpeg";
                break;
            case 5:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/a3htYa7FhE90T5Bfss15CZBglxiiWSCQExPKIfWr.jpeg";
                break;
            case 6:
                src = "../../../assets/fotos/cajilla1.jpg";
                break;
            case 7:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/d89pOE5lX9Jphtqq44cW5twpqCFXcQCe7R06GkjK.jpeg";
                break;
            case 8:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/hT08bDx04nj4MvjBAlV2dYKvslvWzdSn3q0ouxim.jpeg";
                break;
            case 9:
                
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Jksym11MENV2tST0CZxywNdZcedsMsdxnJCNQqVZ.jpeg";
                break;
            case 10:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/MF47avW2h4t6tNZn6xuHmqoalja9O1XfJrpVqevC.jpeg";
                break;
            case 11:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/85Jme7jbTIGCW1LbDS4yP0tdRRMCuLve0LSSG7YX.jpeg";
                break;
            case 12:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/4bQu1elqkflC4svTAdawGrUofNyQ5SdoqYLCBrSc.jpeg";
                break;
            case 13:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ejcMaKdv9eA9ugna0BHoV91IWsRXqdb4tENux2uN.jpeg";
                break;
            case 14:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ZSN3l5mhmgVyTaKJ0hoFae0Ebb4BaCys5Wk8FdP1.jpeg";
                break;
            case 15:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/NBQvtBFdM7q0q8Yt2dc0fb24OaVxzK9v9CGKxSaU.png";
                break;
            case 16:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/rOg9l1Dx5XDWsX4QJcFibpyXTA7Vfhb0r9uwhg1E.jpeg";
                break;
            case 17:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/mFC0UIJAlFL3NJ9zR8ipNSfdFhR9A9ELVPZMVzsP.jpeg";
                break;
            case 18:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/7FL74L7bnu2qIP9GRoY71hOcmdCHPL688xQxs9Lm.jpeg";
                break;
            case 19:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/8R4x4GjF9F3k4Sda3KVA0FCE8bSuo58G45wExVJr.jpeg";
                break;
            case 20:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/rcrp6fxiI1hO1tffneEKpwOijW4pXzT4IBzUa6P5.jpeg";
                break;
            case 21:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/ki9vBupLTpRZMVzobUf1KeyoFAIPeTQJjTiz85Ne.jpeg";
                break;
            case 22:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/xnwZbb5PRUM3EyRc2ZBSoLPIXunzisHKgy1JLGrR.jpeg";
                break;
            case 23:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/QpZAYJ34muQKf3MkL2Vk1ON7IaaAu4AVZwAXQDCN.jpeg";
                break;
            case 24:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/Pz75nOuE42UPJVL81QqSC6tbxVOpVXJ5GecJCT5y.jpeg";
                break;
            case 25:
                src = "../../../assets/images/linea.jpg";
                break;
            case 26:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/pouvPK2BpofdHHOzwMY6MhugLZfzs2hJ9MC6Srl6.png";
                break;
            case 27:
                src = "https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/OkZqAfJxF2PPHsVQw02hbS4Bm6I8guYCq3FGvpe1.jpeg";
                break;
            default:
                break;
        }
        return src
    }
    getParams() {

        
        $(".galeria").focus();
        let data = this.route.snapshot.paramMap.get('id');
        if(data) {
            {
                this.id = +data;
                this.cargarOfCate(this.id,false);
            }
        }

        data = this.route.snapshot.paramMap.get('producto');
        if(data) {
            {
                this.idF = +(data);
                this.cargarSingle(this.idF);
            }
        }
    }
    cargarSingle(id:number){
       //console.log('Id: ',id);
        this.resetCarousel();
        //console.log("Show on selectedData");
        this.imagen_selected = this.setImg(this.route.snapshot.paramMap.get('id'));
        this.imagen_selected_bk = this.imagen_selected;

        //console.log('this.imagen_selected: ',this.imagen_selected);
        this.blockUI.start();
        const data = {
        id:1,
        state:'0',
        filter:'evento'
        };
    //   console.log('antes:'+this.selectedData.id+' Ahora'+id);
        this.scrollMyDiv('Galeria');
    //   console.log(this.idF)
        const datas = this.selectedData;
        this.selectedData=null;
        this.ProductosService.getSingle(id)
                          .then(response => {
                            //console.log('getSingle Response: ', response);
                            this.customOptions2.nav = true
                            // console.log(response);
                            response.pX = +response.pX;
                            response.pY = +response.pY;
                            response.pZ = +response.pZ;
                            response.tX = +response.tX;
                            response.tY = +response.tY;
                            response.tZ = +response.tZ;
                            response.rX = +response.rX;
                            response.rY = +response.rY;
                            response.categoria = +response.categoria;
                            response.rZ = +response.rZ;
                            response.near = +response.near;
                            response.far = +response.far;
                            response.fov = +response.fov;
                            response.calibress = false;
                            if(response.presentaciones && response.presentaciones.length>0){
                                let data = []
                                response.presentaciones.forEach(element => {
                                    if(element.calibres && element.calibres.length>0){
                                        element.calibres = element.calibres?element.calibres.replace(/,/g," / "):'';
                                        response.calibress=true;
                                    }
                                });
                                this.galleryImages = data
                                this.BK_ORIGIN_IMGS = data;
                                //this.CAMBIAR_L(this.translate.currentLang);
                            }else{
                                this.resetCarousel();
                            }
                            response.hasModel = +response.hasModel;
                            response.material = response.model.replace('.obj','.mtl');

                            if(response.imagenes && response.imagenes.length>0){ /// lugar para cambiar imagenes a ingles
                                let data = []
                                let data2 = []
                                response.imagenes.forEach(element => {
                                    let obj = {
                                        small: element.src,
                                        medium: element.src,
                                        big: element.src
                                    }
                                    let obj2 = {
                                        src: element.src,
                                        caption: element.src,
                                        thumb: element.src
                                    }
                                    data.push(obj)
                                    data2.push(obj2)
                                });
                                this.galleryImages = data
                                this.galleryImages2 = data2
                                this.BK_ORIGIN_IMGS = data;
                                this.CAMBIAR_L(this.translate.currentLang);
                                response.fotosCant = data2.length
                            }else{
                                this.resetCarousel();
                            }
                            this.selectedData=response;
                            // funcion para cambiar de nombre de presentacion de productos con this.selectedData
                            this.CambiarNombrePresentaciones(this.translate.currentLang);
                            //console.log('selectedData luego de llamar funcion traduccion : ', this.selectedData);

                            $('.ngx-gallery-preview-top .ngx-gallery-preview-icons .ngx-gallery-icon').html('<div class="lb-dataContainer" style="animation-duration: 0.7s; width: 877px;"><div class="lb-data"><div class="lb-details"><span class="lb-caption animation fadeIn" style="animation-duration: 0.7s;">https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/EFuuA51ZYMwKp5PF07uP2zCfYcwOrA4JDP77iA9A.png</span><span class="lb-number animation fadeIn" hidden="" style="animation-duration: 0.7s;"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div>')
                            if(response.slides && response.slides.length>0){
                                let data = []
                                response.slides.forEach(element => {
                                    let obj = {
                                        src: element.src,
                                        text: element.src,
                                        hash: element.src
                                    }
                                    data.push(obj)
                                });
                                this.carouselData = data

                                setTimeout(() => {
                                    $('.owl-nav').removeClass('disabled');
                                    this.scrollMyDiv('Galeria');
                                }, 500);
                                // console.log(this.customOptions2);

                            }

                            this.blockUI.stop();
                        }).catch(error => {
                            console.clear;
                            this.blockUI.stop();
                          });
    }
    openGallery(index: number): void {
        // open lightbox
        this._lightbox.open(this.galleryImages2, index,{ fitImageInViewPort: true, showImageNumberLabel: false,centerVertically:true, albumLabel:"" });
        //this.CAMBIAR_L(this.translate.currentLang);
        
    }
    openGallery2(){
        $('.ngx-gallery-active.ngx-gallery-clickable').click();
        $('.ngx-gallery-preview-top .ngx-gallery-preview-icons .ngx-gallery-icon').html('<div class="lb-dataContainer" style="animation-duration: 0.7s; width: 877px;"><div class="lb-data"><div class="lb-details"><span class="lb-caption animation fadeIn" style="animation-duration: 0.7s;">https://p2p-encuestas.s3.amazonaws.com/ProductosIngrup/EFuuA51ZYMwKp5PF07uP2zCfYcwOrA4JDP77iA9A.png</span><span class="lb-number animation fadeIn" hidden="" style="animation-duration: 0.7s;"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div>')
    }
    cargarAll() {
        this.blockUI.start();
          const data = {
            id:1,
            state:'0',
            filter:'categoria'
          };
          this.ProductosService.getAll()
                              .then(response => {

                                for(let i=0; i < response.length; i++) 
                                {
                                response[i].nombre = (response[i].nombre).trim();
                                response[i].nombre = (response[i].nombre).replace(/\s{2,}/g,' ');
                                }

                                this.Table=response;

                                // console.log(this.idF);
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear; 
                                this.blockUI.stop();
                              });
                              //console.log('this TABLE');
        //console.log(this.Table);
                
        
    }
    // show_modal(){
    //     this.muestra=1
    //     if(this.selectedData){
    //         // console.log($("#finalPic"));
    //         setTimeout(() => {
    //             $("#firstRow").addClass("hv-100");
    //             $("#finalPic").removeClass("d-none");
    //             $("#finalPic").addClass("modalGAlerya");
    //         }, 500);
    //         // console.log($("#finalPic"));

    //     }
    // }
    cargarOfCate(id:number,changeUrl:boolean=false) {
        // this.datoPEnviar2.mercados.pop()
        this.carouselData = null
        if(this.selectedData.slides){
            this.selectedData.slides.length = 0
        }
        if(this.selectedData.presentaciones){
            this.selectedData.presentaciones.length = 0
        }
        this.resetCarousel();
        if(changeUrl){
            this.id=id
        }
        this.blockUI.start();
          const data = {
            id:this.id,
            state:'0',
            filter:'marca'
          };
          this.ProductosService.getAllFilter(data)
                              .then(response => {

                                for(let i=0; i < response.length; i++) 
                                {
                                response[i].nombre = (response[i].nombre).trim();
                                response[i].nombre = (response[i].nombre).replace(/\s{2,}/g,' ');
                                }

                                this.Table = response;
                                //console.log('THIS TABLE 2');
                                //console.log(this.Table);
                                this.reset_img();
                                
                                this.ocultarModal();
                                this.blockUI.stop();
                                this.scrollMyDiv('stinkyEnd');
                            }).catch(error => {
                                console.clear;
                                this.blockUI.stop();
                            });
        
    }


    cargarOfMarca(id: number, changeUrl: boolean= false) {
        //console.log("Show on selectedData2");
        //console.log(this.selectedData);
        //console.log(id);
        this.resetCarousel();
        if (changeUrl) {
            this.id = id;
        }
        this.blockUI.start();
          const data = {
            id: this.id,
            state: '0',
            filter: 'tipo'
          };
        //   console.log(id)
          this.MarcasService.getSingle(id)
                              .then(response => {
                                response.submarca.forEach(element => {
                                    element.foto = element.foto.replace(".png",".svg")
                                    element.fotoActiva = element.foto
                                });
                                this.Marcas = response;
                                this.titulo_texto=response.nombre;
                                if(response.submarca.length<1){
                                    this.cargarOfCate(id,true)
                                }else{

                                    let first = response.submarca?response.submarca[0].id:1;
                                    let index = response.submarca?((response.submarca.findIndex(element => {return element.id==this.idF}))>0?response.submarca.findIndex(element => {return element.id==this.idF})-1:1):1;
                                    this.customOptions.startPosition = index
                                    if(this.route.snapshot.paramMap.get('id')){
                                        this.cargarOfCate(+this.route.snapshot.paramMap.get('id'),false)


                                    }else{
                                        this.cargarOfCate(first,true)

                                    }
                                    this.scrollMyDiv('Galeria');

                                }
                                // console.log(response);
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear;
                                this.blockUI.stop();
                              });
    }
    cargarFotos(id:number){
        this.blockUI.start();
          const data = {
            id: this.id,
            state: '0',
            filter: 'tipo'
          };
        //   console.log(id)
          this.MarcasService.getSingle(id)
                              .then(response => {
                                this.Marcas = response;
                                // console.log(response);
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear;
                                this.blockUI.stop();
                              });

    }


    cargarCombosMarcas(){

        //   console.log(id)
          this.CategoriasService.getAll()
                              .then(response => {
                                this.categoriasCombo = response;
                                // console.log(response);
                                // this.blockUI.stop();
                            }).catch(error => {
                                console.clear;
                                this.blockUI.stop();
                              });

    }

    open(content,id,tipo) {
        this.edition = null;
        switch(tipo){
            case "categorias":{
                
            this.abierto=true;
                this.CategoriasService.getSingle(id)
                      .then(response => {
                        // console.log(response);
                        this.edition=response;
                        this.edition.tipos = tipo
                        this.blockUI.stop();
                    }).catch(error => {
                        console.clear;
                        this.blockUI.stop();
                      });
                break;
            }
            case "categoriasC":{
            this.abierto=true;
            this.ProductosService.getSingle(id)
                      .then(response => {
                        // console.log(response);
                        response.nombre=""
                        this.edition=response;
                        this.edition.tipos = tipo
                        this.edition.id = null;
                        this.blockUI.stop();
                    }).catch(error => {
                        console.clear;
                        this.blockUI.stop();
                      });

                break;
            }
            case "productos":{
        this.abierto=true;
                this.ProductosService.getSingle(id)
                      .then(response => {
                        // console.log(response);
                        this.edition=response;
                        this.edition.tipos = tipo
                        this.blockUI.stop();
                    }).catch(error => {
                        console.clear;
                        this.blockUI.stop();
                      });
                break;
            }
            case "productosC":{
                this.abierto=true;

                this.ProductosService.getSingle(id)
                      .then(response => {
                        // console.log(response);
                        this.edition=response;
                        this.edition.tipos = tipo
                        this.edition.id = null;
                        this.blockUI.stop();
                    }).catch(error => {
                        console.clear;
                        this.blockUI.stop();
                      });
                break;
            }
            case "presentacion":{
        this.abierto=true;
                this.PresentacionesService.getSingle(id)
                      .then(response => {
                        // console.log(response);
                        this.edition=response;
                        this.edition.tipos = tipo
                        this.blockUI.stop();
                    }).catch(error => {
                        console.clear;
                        this.blockUI.stop();
                      });
                break;
            }
            case "presentacionC":{
                    this.abierto=true;
                        let data ={
                            nombre:"",
                            descripcion:"",
                            producto:id,
                            tipos:tipo,
                            tipo:tipo,
                            unidades:0,
                            calibres:"",
                            separador:"",
                            material:"",
                            peso:"",
                            cuello:"",
                            altura:"",
                            largo:0
                        }
                        this.edition=data;
                        this.blockUI.stop();

                break;
            }
            case "galeria":{
                this.abierto=true;
                if(id){
                    this.ProductosService.getSingle(id)
                                            .then(response => {
                                            // console.log(response);
                                            this.edition=response;
                                            this.edition.tipos = tipo
                                            this.blockUI.stop();
                                        }).catch(error => {
                                            console.clear;
                                            this.blockUI.stop();
                                            });
                                            this.muestra=1
                
                }else{
                    let data = {
                        tipos:tipo
                    }
                    this.edition = data
                    this.blockUI.stop();
                }

                break;
            }
            case "slides":{
        this.abierto=true;
                if(id){
                    this.ProductosService.getSingle(id)
                                            .then(response => {
                                            // console.log(response);
                                            this.edition=response;
                                            this.edition.tipos = tipo
                                            this.blockUI.stop();
                                        }).catch(error => {
                                            console.clear;
                                            this.blockUI.stop();
                                            });
                }else{
                    let data = {
                        tipos:tipo
                    }
                    this.edition = data
                    this.blockUI.stop();
                }

                break;
            }
        }
        if(content){
            this.modalService.open(content).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.abierto=false;
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
        
        
    }

    guardarImg(){
        this.imagen = $('#imagenComentario').attr("src")
        if(this.imagen!=""){
            let categoria = $("#multiInsert").prop('checked')
            // console.log(categoria);

            let data = null
            if(categoria){
                data = {
                    nombre: this.imagen,
                    foto: this.imagen,
                    src: this.imagen,
                    producto: this.edition.id,
                    categoria: this.edition.categoria,
                  }
            }else{
                data = {
                    nombre: this.imagen,
                    foto: this.imagen,
                    src: this.imagen,
                    producto: this.edition.id,
                  }
            }
          this.blockUI.start();
          this.ImagenesService.create(data)
                            .then(response => {
                                this.imagen = response.url
                                // console.log(response);
                                if(response.id){
                                  $('#imagenComentario').attr("src",'http://placehold.it/500X500?text=X');
                                  $('#uploadImagenComentario').attr("value",'');
                                  this.imagen="";
                                  this.open(null,this.edition.id,'galeria');
                                }
                                console.clear
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear

                                this.blockUI.stop();
                                alert(error)
                            })
        }

      }
      guardarSlide(){
        this.imagen = $('#imagenComentarioSlide').attr("src")
        if(this.imagen!=""){
            let categoria = $("#multiInsertSliders").prop('checked')

            let data = null
            if(categoria){
                data = {
                    nombre: this.imagen,
                    foto: this.imagen,
                    src: this.imagen,
                    producto: this.edition.id,
                    categoria: this.edition.categoria,
                  }
            }else{
                data = {
                    nombre: this.imagen,
                    foto: this.imagen,
                    src: this.imagen,
                    producto: this.edition.id,
                  }
            }

          this.blockUI.start();
          this.SlidesService.create(data)
                            .then(response => {
                                this.imagen = response.url
                                // console.log(response);
                                if(response.id){
                                  $('#imagenComentarioSlide').attr("src",'http://placehold.it/500X500?text=X');
                                  $('#uploadimagenComentarioSlide').attr("value",'');
                                  this.imagen="";
                                  this.open(null,this.edition.id,'slides');
                                }
                                console.clear
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear

                                this.blockUI.stop();
                                alert(error)
                            })
        }

      }
      subirImagenes(archivo,form,id){
        var archivos=archivo.srcElement.files;
        // ${this.basePath}/
        let url = `${this.basePath}/api/upload`

        var i=0;
        var size=archivos[i].size;
        var type=archivos[i].type;
            if(size<(5*(1024*1024))){
              if(type=="image/png" || type=="image/jpeg" || type=="image/jpg"){
            $("#"+id).upload(url,
                {//upload started
                  avatar: archivos[i],
                  carpeta: "ProductosIngrup"
              },
              function(respuesta)
              {//Upload Successfull
                console.log(respuesta);

                $('#imagenComentario').attr("src",'')
                $('#imagenComentario').attr("src",respuesta)
                $("#"+id).val('')
                $("#barra_de_progreso").val(0)
                $('#guardarImagenes').attr("disabled",false)
                $("#stopLoader").click();
              },
              function(progreso, valor)
              {//Received progress

                $("#barra_de_progreso").val(valor);
              },
              function (error){
                  console.log(error);

              }
            );
              }else{
                alert("El tipo de imagen no es valido")
              }
          }else{
            alert("La imagen es demaciado grande")
          }
    }
    subirSlides(archivo,form,id){
        var archivos=archivo.srcElement.files;
        // ${this.basePath}/
        let url = `${this.basePath}/api/upload`

        var i=0;
        var size=archivos[i].size;
        var type=archivos[i].type;
            if(size<(5*(1024*1024))){
              if(type=="image/png" || type=="image/jpeg" || type=="image/jpg"){
            $("#"+id).upload(url,
                {
                  avatar: archivos[i],
                  carpeta: "ProductosIngrupSlides"
              },
              function(respuesta)
              {
                $('#imagenComentarioSlide').attr("src",'')
                $('#imagenComentarioSlide').attr("src",respuesta)
                $("#"+id).val('')
                $("#barra_de_progreso2").val(0)
                $('#guardarImagenesSlide').attr("disabled",false)
                $("#stopLoader2").click();
              },
              function(progreso, valor)
              {

                $("#barra_de_progreso").val(valor);
              }
            );
              }else{
                alert("El tipo de imagen no es valido")
              }
          }else{
            alert("La imagen es demaciado grande")
          }
    }

  update(formValue:any){
      formValue = this.edition
        this.blockUI.start();
    switch (formValue.tipos) {
        case "categorias":{
            this.CategoriasService.update(formValue)
                                    .then(response => {
                                    // console.log(response);
                                    this.getParams();
                                    console.clear
                                    this.blockUI.stop();
                                    }).catch(error => {
                                    console.clear

                                    this.blockUI.stop();
                                    })
                                    break;
        }
        case "productos":{
            this.ProductosService.update(formValue)
                                    .then(response => {
                                    // console.log(response);
                                    this.getParams();
                                    console.clear
                                    this.blockUI.stop();
                                    }).catch(error => {
                                    console.clear

                                    this.blockUI.stop();
                                    })
                                    break;
        }
        case "presentacion":{
            this.PresentacionesService.update(formValue)
                                    .then(response => {
                                    // console.log(response);
                                    this.cargarSingle(response.producto);
                                    console.clear
                                    this.blockUI.stop();
                                    }).catch(error => {
                                    console.clear

                                    this.blockUI.stop();
                                    })
                                    break;
        }
    }


  }

  create(formValue:any){
      formValue = this.edition
        this.blockUI.start();
    switch (formValue.tipos) {
        case "categoriasC":{
            formValue.descripcion = formValue.nombre
            formValue.tipo = formValue.categoria
            formValue.codigo = btoa(formValue.nombre).substr(0,10);
            this.ProductosService.create(formValue)
                                    .then(response => {
                                        // console.log(response);
                                        this.getParams();
                                        console.clear
                                    this.blockUI.stop();
                                    }).catch(error => {
                                    console.clear

                                    this.blockUI.stop();
                                    })
                                    break;
        }
        case "productosC":{
            formValue.descripcion = formValue.nombre
            formValue.codigo = btoa(formValue.nombre).substr(0,10);
            this.ProductosService.create(formValue)
                                    .then(response => {
                                    // console.log(response);
                                    this.getParams();
                                    console.clear
                                    this.blockUI.stop();
                                    }).catch(error => {
                                    console.clear

                                    this.blockUI.stop();
                                    })
                                    break;
        }
        case "presentacionC":{
            this.PresentacionesService.create(formValue)
                                    .then(response => {
                                    // console.log(response);
                                    this.cargarSingle(response.producto);
                                    console.clear
                                    this.blockUI.stop();
                                    }).catch(error => {
                                    console.clear

                                    this.blockUI.stop();
                                    })
                                    break;
        }
    }


  }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
    eliminarIMG(id:string){
        this.blockUI.start();
        if(confirm("¿Desea eliminar la Foto?")){
          this.ImagenesService.delete(id)
                            .then(response => {
                                if(response){
                                    this.cargarSingle(response.producto)
                                }
                              this.open(null,response.producto,'galeria')
                              console.clear
                              this.blockUI.stop();
                          }).catch(error => {
                              console.clear
                              this.blockUI.stop();
                            })
        }else{
          $('#Loading').css('display','none')
        }

      }
      eliminarSlides(id:string){
          this.blockUI.start();
          if(confirm("¿Desea eliminar la Foto?")){
            this.SlidesService.delete(id)
                              .then(response => {
                                if(response){
                                    this.cargarSingle(response.producto)
                                }
                                this.open(null,response.producto,'slides')
                                console.clear
                                this.blockUI.stop();
                            }).catch(error => {
                                console.clear
                                this.blockUI.stop();
                              })
          }else{
            $('#Loading').css('display','none')
          }

        }
        delete(data:any){
            // console.log("eliminando: ",data.tipos);

            this.blockUI.start();
            switch (data.tipos) {
                case "categorias":{
            // console.log("eliminando2");

                    this.CategoriasService.delete(data.id)
                                            .then(response => {
                                            // console.log(response);
                                            this.abierto=false
            // console.log("eliminado");
            this.getParams();
                                            console.clear
                                            this.blockUI.stop();
                                            }).catch(error => {
                                            console.clear

                                            this.blockUI.stop();
                                            })
                                            break;
                }
                case "productos":{
                    this.ProductosService.delete(data.id)
                                .then(response => {
                                  console.clear
                                  this.cargarOfCate(response.categoria)
                                  this.edition = null
                                //   location.reload();
                                  this.blockUI.stop();
                              }).catch(error => {
                                  console.clear
                                  this.blockUI.stop();
                                })
                                break;
                }
                case "presentacion":{
                    this.PresentacionesService.delete(data.id)
                                                .then(response => {
                                                console.clear
                                                this.cargarSingle(response.producto)
                                                this.blockUI.stop();
                                            }).catch(error => {
                                                console.clear
                                                this.blockUI.stop();
                                                })
                                            break;
                }
            }

          }
        cambiarIMG(index,text,cant,url:string=""){
            if(url.indexOf("01")<0){
                cant=4;
            }else{
                cant=6
            }
            if(this.Marcas.submarca){
                this.Marcas.submarca[index].foto = this.Marcas.submarca[index].foto.substring(0,this.Marcas.submarca[index].foto.length-cant)+text

                // console.log(this.Marcas.submarca[index].foto);
            }


        }
    ocultarModal(){

        setTimeout(() => {
            // $("#finalPic").removeClass("modalGAlerya");
            $("#finalPic").addClass("modalGAleryaOut");
        }, 500);
        setTimeout(() => {
            // $("#finalPic").removeClass("modalGAlerya");
            $("#content_data").removeClass("hv-100");

            this.muestra=0
        }, 1300);
    }

   
}
