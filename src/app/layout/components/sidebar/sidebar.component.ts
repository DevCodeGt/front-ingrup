import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MarcasService } from "./../../../shared/services/marcas.service";
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { TiposService } from "./../../../shared/services/tipos.service";
import { ProductosService } from "./../../../shared/services/productos.service";
import { CategoriasService } from "./../../../shared/services/categorias.service";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
declare var $: any
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    session:boolean = localStorage.getItem('currentUser')?true:false;
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    buscado: boolean;
    pushRightClass: string;
    Table:any = [] 
    TableProds:any = []
    TableProdsFind:any = []
    hover_num = 0
    private _success = new Subject<string>();
    mercados_active = false;
    productos_active = false;
    staticAlertClosed = false;
    Sostenibilidad_active = false;

    Nosotros_active = false;

    successMessage: string;
    @BlockUI() blockUI: NgBlockUI;
    @Output() collapsedEvent = new EventEmitter<boolean>();
    constructor(
        private translate: TranslateService,
        private TiposService:TiposService,
        public router: Router,
        private CategoriasService:CategoriasService,
        private ProductosService:ProductosService,
        private MarcasService:MarcasService
    ) {

        //IMPORTANTE PARA LA ACTUALIZACION DE MERCADOS Y PRODUCTOS CHILDS /id
        this.router.routeReuseStrategy.shouldReuseRoute = function(){
            return false;
         }

        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
                // trick the Router into believing it's last link wasn't previously loaded
                this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
             }

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

        this._success.subscribe((message) => this.successMessage = message);
        this.buscado=false
        this.isActive = true;
        this.collapsed = true;
        this.showMenu = '0';
        this.pushRightClass = 'push-right';
        this.cargarAll();
        $(window).scroll(function() {
            var windscroll = $(window).scrollTop();
            if (windscroll >= 100) {
                $('.menu_fixed').addClass('add_css');
            } else {
                $('.menu_fixed').removeClass('add_css');
            }
        
        }).scroll();​   
        
        $('.conteiner_show_more').click(function(){
            alert(true);
            $( ".content_size").stop().animate( { scrollTop: 1 * 200 }, 500 );
        });
    }
    
    public changeSuccessMessage() {
        if(this.translate.currentLang === 'en'){
            this._success.next(`<strong>Item not found ...</strong>`);
        }else{
            this._success.next(`<strong>No se ha encontrado ...</strong>`);
        }
    }


    findByName(formData){
    //   console.log('antes:'+this.selectedData.id+' Ahora'+id);

        console.log('Lang: ', this.translate.currentLang);
        if(this.translate.currentLang === 'en'){
            formData = formData.toLowerCase();
            formData = this.getTraduccion(formData);
            //console.log('Buscar: ', formData);
        }

        this.blockUI.start();
            const data = {
            id:formData,
            state:'0',
            filter:'nombre'
        };
    
        this.CategoriasService.getAllFilter(data)
                          .then(response => {

                            this.TableProdsFind=response;
                            /*console.log('OTROS');*/
                            console.log('Funcion Categoria');
                            console.log(response);
                            this.expand_menu();
                            if(response.length<=0){
                                this.buscado=true;
                            }
                            console.log(response);
                            this.blockUI.stop();
                        }).catch(error => {
                            console.clear;
                            this.blockUI.stop();
                          });
    }

    getTraduccion(word){
        let diccio = [
            {EN: "caps" , ES: "tapas"},
            {EN: "bottle", ES: "envases"},
            {EN: "preforms", ES: "preformas"},
            {EN: "flexible packaging", ES: "empaque flexible"},
            {EN: "lithographic package", ES: "empaque  litografico"},
            {EN: "crates", ES: "cajillas"},
            {EN: "agricultural harvesting containers", ES: "cajas agricolas"},
            {EN: "cups", ES: "vasos"},
            {EN: "folding carton", ES: "cajillas plegadizas"},
            {EN: "recycled resins", ES: "resinas recicladas"},
            {EN: "water storage tank", ES: "depositos de agua"},
            {EN: "cisterns", ES: "cisternas"},
            {EN: "septic tanks", ES: "fosas septicas"},
            {EN: "plastic laundry sinks", ES: "pilas"},
            {EN: "plastic baskets", ES: "lavaderos"},
            {EN: "trash bins", ES: "contenedor industrial"},
            {EN: "coolers", ES: "hieleras"},
            {EN: "industrial / commercial locker", ES: "casillero industrial"},
            {EN: "toilet plastic", ES: "letrinas"},
            {EN: "pallets", ES: "tarima"},
            {EN: "pe industrial bottles", ES: "envases pe industrial "},
            {EN: "multibox", ES: "multibox"},
            {EN: "buckets", ES: "cubetas"},
            {EN: "plastic baskets", ES: "canastos"},
            {EN: "road safety  products", ES: "linea vial"},
            {EN: "bakety trays", ES: "bandejas de pan"}
        ]

        var patt = new RegExp(`${word}`);

        for(var i = 0; i < diccio.length; i++){
            var res = patt.test(diccio[i].EN);
            if(res === true){
                return diccio[i].ES;
            }
        }
        return word;
    }



    recharge(){
        setTimeout(() => {
            this.TableProdsFind.length=0;
            location.reload();

        }, 500);
    }

    cargarAll(){

          this.MarcasService.getAll()
                              .then(response => {
                                //this.Table=response
                                this.Table=response

                                for(let i=0; i < response.length; i++)
                                {
                                    response[i].nombre = (response[i].nombre).trim();
                                }
                                //console.log('mercados');
                                //console.log(response);
                                // console.log(response);
                                this.CategoriasService.getAll()
                                                        .then(response => {
                                                            this.TableProds=response
                                                            for(let i=0; i < response.length; i++)
                                                            {
                                                                response[i].nombre = (response[i].nombre).trim();
                                                                response[i].nombre = (response[i].nombre).replace(/\s{2,}/g,' ');
                                                            }
            
                                                        }).catch(error => {
                                                            console.clear
                                                        })
                            }).catch(error => {
                                console.clear
                              })

    }
    openMenu(){
        var width_device = window.screen.width;
        if(width_device < 1000){
            // this.toggleCollapsed();
            this.toggleSidebar();
        }else{
            this.toggleSidebar();
            this.toggleCollapsed();
        }

    }
    openMenu2(){
        var width_device = window.screen.width;
        if(width_device < 1000){
            this.toggleCollapsed();
            this.toggleSidebar();
        }else{
            this.toggleCollapsed();
            this.toggleSidebar();
        }

    }

    logout(){
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentEmail');
        localStorage.removeItem('currentFirstName');
        localStorage.removeItem('currentLastName');
        localStorage.removeItem('currentId');
        localStorage.removeItem('currentPicture');
        localStorage.removeItem('currentState');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentBisCardId');
        localStorage.removeItem('currentEmail');
        localStorage.removeItem('currentApellidos');
        localStorage.removeItem('currentNombres');
        localStorage.removeItem('currentEstado');
        localStorage.removeItem('currentSalt');
        localStorage.removeItem('currentTelefono');
        localStorage.removeItem('currentAvatar');
        localStorage.removeItem('token');
        localStorage.removeItem('currentNuevaSesion');
        localStorage.removeItem('currentTipoUsuarioId');
        localStorage.clear();
        this.session=false;
          this.router.navigate([`../../../../`])

      }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        
        //console.log(element);

        if(element === "markets"){
            this.productos_active = false;
            this.Sostenibilidad_active = false;
            this.Nosotros_active = false;
            this.mercados_active = true;
            this.expand_menu();
        }
        
        if(element === "products"){
            this.mercados_active = false;
            this.Sostenibilidad_active = false;
            this.Nosotros_active = false;
            this.productos_active = true;
            this.expand_menu();
        }
        if(element === "pages"){
            this.mercados_active = false;
            this.productos_active = false;
            this.Sostenibilidad_active = true;
            this.Nosotros_active = false;
            this.expand_menu();
        }

        if(element === "nosotros"){
            this.mercados_active = false;
            this.productos_active = false;
            this.Sostenibilidad_active = false;
            this.Nosotros_active = true;
            this.expand_menu();
        }

        if (element === this.showMenu) {
            this.showMenu = '0';
            this.closem();
        } else {
            
            this.showMenu = element;
        }

    }
    toggleCollapsed() {
        $(".sidebar").removeClass("menu-w70");
        $(".toggle-button").removeClass("menu-w70");
        $(".cerrarSide").removeClass("menu-w100");
        this.mercados_active = false;
        this.productos_active = false;
        this.Sostenibilidad_active = false;
        this.Nosotros_active = false;
        this.showMenu = '0';
        this.closem();
        // last code
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
        var width_device = window.screen.width;
        if(width_device <= 1000){
            this.collapsed = false;
        }
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
    expand_menu(){
        $(".sidebar").addClass("menu-w70");
        $(".toggle-button").addClass("menu-w70");
        $(".cerrarSide").addClass("menu-w100");
    }
    closem(){
        this.mercados_active = false;
        this.productos_active = false;
        this.Sostenibilidad_active = false;
        this.Nosotros_active = false;
        $(".sidebar").removeClass("menu-w70");
        $(".toggle-button").removeClass("menu-w70");
        $(".cerrarSide").removeClass("menu-w100");
    }
    showMore(){
       
        
        if(this.hover_num >= 15){
            this.hover_num = 0;
            $( ".content_size").stop().animate( { scrollTop: this.hover_num * 44 }, 500 );
        }else{
            this.hover_num += 10;
            $( ".content_size").stop().animate( { scrollTop: this.hover_num * 44 }, 500 );
        }
    }
    
    showMore2(onHover){
        if(onHover){
            this.hover_num += 1;
            $( ".content_size").stop().animate( { scrollTop: this.hover_num * 44 }, 500 );
        }
        
    }
}
