import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MarcasService } from "./../../../shared/services/marcas.service";
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

export class CarouselData {
    id?: string;
    text: string;
    dataMerge?: number;
    width?: number;
    dotContent?: string;
    src?: string;
    dataHash?: string;
  }
  declare var $: any

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() idF
    id = this.route.snapshot.paramMap.get("id")

    public pushRightClass: string;
    Table:any = null
    carouselData: CarouselData[] = [
        { text: 'Bebidas', src: 'assets/images/Mercados/Modulo-1/menu-principal/Bebidas.png', dataHash: 'one'},
        { text: 'Alimentos', src: 'assets/images/Mercados/Modulo-1/menu-principal/Alimentos.png', dataHash: 'two'},
        { text: 'Home Care', src: 'assets/images/Mercados/Modulo-1/menu-principal/Home-care.png', dataHash: 'three'},
        { text: 'Food Service', src: 'assets/images/Mercados/Modulo-1/menu-principal/Food-service.png', dataHash: 'four'},
        { text: 'Resinas Recicladas', src: 'assets/images/Mercados/Modulo-1/menu-principal/Resinas-recicladas.png', dataHash: 'five'},

        
        // { text: 'Slide 6', dotContent: 'text5'},
        // { text: 'Slide 7', dotContent: 'text5'},
        // { text: 'Slide 8', dotContent: 'text5'},
        // { text: 'Slide 9', dotContent: 'text5'},
        // { text: 'Slide 10', dotContent: 'text5'},
    ];
    customOptions: any = {
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
        startPosition:this.route.snapshot.paramMap.get("id"),
        responsive:{
            300:{
                items:3
            },
            900:{
                items:5
            },
            1000:{
                items:7
            }
        }

            // URLhashListener:true,
        // startPosition: 'URLHash',
    }
    constructor(
        private translate: TranslateService,
        private route: ActivatedRoute,
        public router: Router,
        private mainService:MarcasService
    ) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
        this.cargarAll();
        $(document).ready(function () {
            if($('.owl-nav').hasClass('disabled'))
            {
                $('.owl-nav').removeClass('disabled');
            }
        });
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
    cambiarIMG(index,text,cant,url:string=""){
        if(url.indexOf("01")<0){
            cant=4;
        }else{
            cant=6
        }

        this.Table[index].foto = this.Table[index].foto.substring(0,this.Table[index].foto.length-cant)+text;
        
    }
    changeLang(language: string) {
        this.translate.use(language);
    }
    cargarAll(){
          let data = {
            id:1,
            state:'0',
            filter:'categoria'
          }
          this.mainService.getAll()
                              .then(response => {
                                  let id = this.route.snapshot.paramMap.get("id")
                                  response.forEach(element => {
                                      if(element.id==id){
                                        element.foto = element.foto.substring(0,element.foto.length-4)+"01.svg"
                                        element.fotoActiva = element.foto
                                      }
                                  });
                                //   let foto = response[response.findIndex(element => { element.id ==id })].foto
                                // response[response.findIndex(element => { element.id ==id })].foto = foto.substring(0,foto.length-4)+"01.svg"
                                this.Table=response

                                console.log(this.idF);
                            }).catch(error => {
                                console.clear
                              })
    }
}
