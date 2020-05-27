import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MarcasService } from "./../../shared/services/marcas.service";
import { UsersService } from "./../../shared/services/users.service";
import { ActivatedRoute } from '@angular/router';
declare var $: any
@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss'],
    providers: [NgbAccordionConfig]
})
export class BlankPageComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    constructor(
        config: NgbAccordionConfig,
        private route: ActivatedRoute,
        public router: Router,
        private mainService:MarcasService,
        private UsersService:UsersService
    ) {
        // customize default values of accordions used by this component tree
        config.closeOthers = true;
        config.type = 'success';
      }
    id = this.route.snapshot.paramMap.get("marca")
    Table=[]
    selectedData= {
        nombre:"",
        telefono:"",
        asunto:"",
        pais:"",
        marca:this.route.snapshot.paramMap.get("marca"),
        mensaje:"",
        emailSend:"",
        emailResp:"suministros@ingrup.com"
    }
    ngOnInit() {
        // this.blockUI.start();

        // setTimeout(() => {
        //     this.blockUI.stop();
        // }, 2000);
        this.cargarAll()
        //this.blockUI.stop();
    }
    button_mapa(){
        console.log("funcion");
    }
    status: boolean = false;
    clickEvent(){
        this.status = !this.status;
    }
    cargarAll(){
        this.blockUI.start();
            let data = {
                data:0,
                id:0,
                filter:"hijos"
            }
          this.mainService.getAllFilter(data)
                              .then(response => {
                                  this.id = this.route.snapshot.paramMap.get("marca")
                                //   console.log(this.id);

                                  response.forEach(element => {
                                      if(element.id==this.id){
                                        element.foto = element.foto.substring(0,element.foto.length-4)+"01.svg"
                                        element.fotoActiva = element.foto
                                        element.selected = true
                                        // console.log(element);

                                      }else{
                                        element.selected = false

                                      }
                                  });
                                //   let foto = response[response.findIndex(element => { element.id ==id })].foto
                                // response[response.findIndex(element => { element.id ==id })].foto = foto.substring(0,foto.length-4)+"01.svg"
                                this.Table=response
                                this.blockUI.stop();

                            }).catch(error => {
                                this.blockUI.stop();
                                console.clear
                              })
    }

    contact(formValue){

        this.blockUI.start();
        formValue.emailResp = this.selectedData.emailResp
          this.UsersService.send(formValue)
                              .then(response => {
                                  if(response.enviado){
                                      console.log(response);

                                  }else{
                                    console.log(response);

                                  }
                                //   console.log(this.id);
                                this.blockUI.stop();
                            }).catch(error => {
                                this.blockUI.stop();
                                console.clear
                              })
    }
}
