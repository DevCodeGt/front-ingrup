(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{LcBl:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class t{}var o=e("pMnS"),a=e("s7LF"),i=e("TSSN"),d=e("SVse"),r=e("9AJC"),s=e("G0yt"),c=e("mrSG"),p=e("N8BJ");const g=(()=>{class l{constructor(l,n,e,u,t){this.route=n,this.router=e,this.mainService=u,this.UsersService=t,this.id=this.route.snapshot.paramMap.get("marca"),this.Table=[],this.selectedData={nombre:"",telefono:"",asunto:"",pais:"",marca:this.route.snapshot.paramMap.get("marca"),mensaje:"",emailSend:"",emailResp:"suministros@ingrup.com"},this.status=!1,l.closeOthers=!0,l.type="success"}ngOnInit(){this.cargarAll()}button_mapa(){console.log("funcion")}clickEvent(){this.status=!this.status}cargarAll(){this.blockUI.start(),this.mainService.getAllFilter({data:0,id:0,filter:"hijos"}).then(l=>{this.id=this.route.snapshot.paramMap.get("marca"),l.forEach(l=>{l.id==this.id?(l.foto=l.foto.substring(0,l.foto.length-4)+"01.svg",l.fotoActiva=l.foto,l.selected=!0):l.selected=!1}),this.Table=l,this.blockUI.stop()}).catch(l=>{this.blockUI.stop(),console})}contact(l){this.blockUI.start(),l.emailResp=this.selectedData.emailResp,this.UsersService.send(l).then(l=>{console.log(l),this.blockUI.stop()}).catch(l=>{this.blockUI.stop(),console})}}return c.__decorate([Object(p.a)(),c.__metadata("design:type",Object)],l.prototype,"blockUI",void 0),l})();var m=e("iInd"),v=e("3jST"),h=e("dxD2"),f=u["\u0275crt"]({encapsulation:0,styles:[["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{width:100%}.padding-all-5[_ngcontent-%COMP%]{padding-left:5%;padding-right:5%}.paddingt-5[_ngcontent-%COMP%]{padding-top:5%;padding-bottom:2%}#contact[_ngcontent-%COMP%]{width:100%!important}.ingrup-btn[_ngcontent-%COMP%]{background-color:#44d62c!important;border:2px solid #44d62c!important}#contact[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{text-align:center;font-size:3em;margin-bottom:2%;color:#44d62c!important}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:2px solid #44d62c!important;margin-bottom:1%!important;font-size:1.5em!important;opacity:.5}#send[_ngcontent-%COMP%]{background-color:#44d62c!important;border:none!important;font-size:1.5em!important}#inputmensaje[_ngcontent-%COMP%]{min-height:243px;height:343px}select[_ngcontent-%COMP%]{padding:6px 12px;height:-webkit-fit-content!important;height:-moz-fit-content!important;height:fit-content!important}.descriptino_mail[_ngcontent-%COMP%]{margin-bottom:0!important;vertical-align:middle!important;font-size:1.5em;padding-left:5%;line-height:2;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important}.descriptino_mail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#44d62c!important}.paddingr-10[_ngcontent-%COMP%]{padding-right:10%;padding-left:10%}.title[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:3em;margin-bottom:2%;color:#44d62c!important}.description_proveedores[_ngcontent-%COMP%]{font-size:1.8em;line-height:1.3}#button_forma[_ngcontent-%COMP%]{background-color:#44d62c!important;border:none!important;font-size:1.5em!important;color:#fff;padding-left:5%;padding-right:5%;padding-bottom:2%;width:100%;height:6vh;background-repeat:no-repeat;background-position:center;border-radius:15px}#row_1[_ngcontent-%COMP%]{background-image:url(fondo.5eb9eece6beaaa1a8d47.png);background-size:cover;background-repeat:no-repeat;background-position:center}.cloumn1[_ngcontent-%COMP%]{border-right:1px solid #000}.border-b[_ngcontent-%COMP%]{border-bottom:1px solid #000}.row_pais[_ngcontent-%COMP%]{height:50%;margin:auto 2% auto auto}.pais[_ngcontent-%COMP%]{text-align:left;padding:10px;border:2px solid #44d62c;border-radius:8px;margin-bottom:2%}.text_pais[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:0!important;font-size:1.5em}.paddingr-20[_ngcontent-%COMP%]{padding-left:20%;padding-right:20%}.desck_marca[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin-top:auto;margin-bottom:auto;font-size:2em!important}.vh100[_ngcontent-%COMP%]{height:120vh}.mapa[_ngcontent-%COMP%]{height:100%}.buttons[_ngcontent-%COMP%]{width:100%;background-image:url(points.1570292ba53f9458e294.png);background-size:cover;background-repeat:none;height:30vh}@media only screen and (max-width:1500px){#button_forma[_ngcontent-%COMP%]{width:70%}.description_proveedores[_ngcontent-%COMP%]{width:100%;font-size:1.5em}.w-50[_ngcontent-%COMP%]{width:100%!important}}@media only screen and (max-width:1000px){.container_mapas[_ngcontent-%COMP%]{margin:0;padding-left:5%;padding-right:5%}.logo_contacto[_ngcontent-%COMP%]{position:absolute;top:0}#row_1[_ngcontent-%COMP%]{flex-direction:column-reverse;padding-top:10vh}#send[_ngcontent-%COMP%]{width:50%;margin:auto}select[_ngcontent-%COMP%]{padding:6px 12px;height:-webkit-fit-content!important;height:-moz-fit-content!important;height:fit-content!important}.paddingr-10[_ngcontent-%COMP%]{margin:0}.description_proveedores[_ngcontent-%COMP%]{font-size:1em}#button_forma[_ngcontent-%COMP%]{width:100%}.mapa[_ngcontent-%COMP%]{width:100%;padding:10%}.vh100[_ngcontent-%COMP%]{height:-webkit-fit-content!important;height:-moz-fit-content!important;height:fit-content!important}.img_marca[_ngcontent-%COMP%]{display:block!important;padding:10% 0}legend[_ngcontent-%COMP%]{margin-top:10%}.input-group[_ngcontent-%COMP%]{margin-bottom:5%!important}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-size:1.2em!important}}"]],data:{}});function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,5,"option",[],null,null,null,null,null)),u["\u0275did"](1,147456,null,0,a.q,[u.ElementRef,u.Renderer2,[2,a.u]],{value:[0,"value"]},null),u["\u0275did"](2,147456,null,0,a.y,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275eld"](3,0,null,null,0,"img",[["style","width: 10xp;height: 10px;"]],[[8,"src",4]],null,null,null,null)),(l()(),u["\u0275ted"](4,null,[" "," "])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef])],function(l,n){l(n,1,0,n.context.$implicit.id),l(n,2,0,n.context.$implicit.id)},function(l,n){l(n,3,0,n.context.$implicit.icono),l(n,4,0,u["\u0275unv"](n,4,0,u["\u0275nov"](n,5).transform(n.context.$implicit.nombre)))})}function b(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Guatemala"])),(l()(),u["\u0275eld"](2,0,null,null,0,"img",[["class","row_pais"],["src","./../../../assets/images/flecha.png"]],null,null,null,null,null))],null,null)}function _(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](0,null,[" ",""])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](2,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Tel. + (502) 2326-5600 "]))],null,function(l,n){l(n,0,0,u["\u0275unv"](n,0,0,u["\u0275nov"](n,1).transform("Av. Petapa y 56 Calle, Zona 12 Ciudad de Guatemala, Guatemala.")))})}function M(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["El Salvador"])),(l()(),u["\u0275eld"](2,0,null,null,0,"img",[["class","row_pais"],["src","./../../../assets/images/flecha.png"]],null,null,null,null,null))],null,null)}function P(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](0,null,[" ",""])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](2,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Tel.+(503) 2278-7918 "]))],null,function(l,n){l(n,0,0,u["\u0275unv"](n,0,0,u["\u0275nov"](n,1).transform("Boulevard Bayer, Calle L1, Edificio Salaverr\xeda C\xe1ceres, Bodegas 1 y 2, Merliot, El Salvador")))})}function R(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Honduras"])),(l()(),u["\u0275eld"](2,0,null,null,0,"img",[["class","row_pais"],["src","./../../../assets/images/flecha.png"]],null,null,null,null,null))],null,null)}function w(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](0,null,[" "," "])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](2,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Tel. + (504) 2670-2220 "]))],null,function(l,n){l(n,0,0,u["\u0275unv"](n,0,0,u["\u0275nov"](n,1).transform("Km. 13 Desv\xedo a Residencial Monte Mar\xeda, Dos Caminos, Villanueva, Cort\xe9s, Honduras.")))})}function O(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Nicaragua"])),(l()(),u["\u0275eld"](2,0,null,null,0,"img",[["class","row_pais"],["src","./../../../assets/images/flecha.png"]],null,null,null,null,null))],null,null)}function T(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](0,null,[" ",""])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](2,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Tel. + (505) 2233-1744 "])),(l()(),u["\u0275eld"](4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Tel. + (505) 2233-4622 "])),(l()(),u["\u0275eld"](6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Tel. + (505) 2233-0476 "]))],null,function(l,n){l(n,0,0,u["\u0275unv"](n,0,0,u["\u0275nov"](n,1).transform("km 7.5 Carretera Norte, de la Kativo 50 mts al Este")))})}function k(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Costa Rica"])),(l()(),u["\u0275eld"](2,0,null,null,0,"img",[["class","row_pais"],["src","./../../../assets/images/flecha.png"]],null,null,null,null,null))],null,null)}function D(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](0,null,[" ",""])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](2,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Tel. + (506) 2265-6500 "]))],null,function(l,n){l(n,0,0,u["\u0275unv"](n,0,0,u["\u0275nov"](n,1).transform("De la Cervecer\xeda C.R. 1 Km. al Este, San Joaqu\xedn de Flores, Heredia, Costa Rica")))})}function x(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[" ",""])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](3,0,null,null,0,"img",[["class","row_pais"],["src","./../../../assets/images/flecha.png"]],null,null,null,null,null))],null,function(l,n){l(n,1,0,u["\u0275unv"](n,1,0,u["\u0275nov"](n,2).transform("Panam\xe1")))})}function y(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](0,null,[" ",""])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](2,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Tel. + (507) 6263-2629 "]))],null,function(l,n){l(n,0,0,u["\u0275unv"](n,0,0,u["\u0275nov"](n,1).transform("Calle 50, PH Torre Global Bank, Piso 25, Of. 2501 Ciudad de Panam\xe1, Panam\xe1")))})}function j(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,99,"div",[["class","row "],["id","row_1"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,84,"div",[["class","col-xs-8 col-sm-8 col-md-8 col-lg-8 cloumn1 paddingt-5 border-b"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,83,"div",[["class","row paddingr-10"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,82,"form",[["id","contact"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,e){var t=!0;return"submit"===n&&(t=!1!==u["\u0275nov"](l,5).onSubmit(e)&&t),"reset"===n&&(t=!1!==u["\u0275nov"](l,5).onReset()&&t),t},null,null)),u["\u0275did"](4,16384,null,0,a.z,[],null,null),u["\u0275did"](5,4210688,[["contactForm",4]],0,a.o,[[8,null],[8,null]],null,null),u["\u0275prd"](2048,null,a.d,null,[a.o]),u["\u0275did"](7,16384,null,0,a.n,[[4,a.d]],null,null),(l()(),u["\u0275eld"](8,0,null,null,2,"legend",[],null,null,null,null,null)),(l()(),u["\u0275ted"](9,null,[" ",""])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](11,0,null,null,7,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,6,"input",[["class","form-control"],["id","nombre"],["name","nombre"],["type","text"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var t=!0,o=l.component;return"input"===n&&(t=!1!==u["\u0275nov"](l,13)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,13).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,13)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,13)._compositionEnd(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.selectedData.nombre=e)&&t),t},null,null)),u["\u0275did"](13,16384,null,0,a.e,[u.Renderer2,u.ElementRef,[2,a.a]],null,null),u["\u0275prd"](1024,null,a.k,function(l){return[l]},[a.e]),u["\u0275did"](15,671744,[["nombre",4]],0,a.p,[[2,a.d],[8,null],[8,null],[6,a.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,a.l,null,[a.p]),u["\u0275did"](17,16384,null,0,a.m,[[4,a.l]],null,null),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](19,0,null,null,7,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](20,0,null,null,6,"input",[["class","form-control"],["id","emailSend"],["name","emailSend"],["type","email"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var t=!0,o=l.component;return"input"===n&&(t=!1!==u["\u0275nov"](l,21)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,21).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,21)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,21)._compositionEnd(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.selectedData.emailSend=e)&&t),t},null,null)),u["\u0275did"](21,16384,null,0,a.e,[u.Renderer2,u.ElementRef,[2,a.a]],null,null),u["\u0275prd"](1024,null,a.k,function(l){return[l]},[a.e]),u["\u0275did"](23,671744,[["emailSend",4]],0,a.p,[[2,a.d],[8,null],[8,null],[6,a.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,a.l,null,[a.p]),u["\u0275did"](25,16384,null,0,a.m,[[4,a.l]],null,null),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](27,0,null,null,7,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](28,0,null,null,6,"input",[["class","form-control"],["id","telefono"],["name","telefono"],["type","phone"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var t=!0,o=l.component;return"input"===n&&(t=!1!==u["\u0275nov"](l,29)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,29).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,29)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,29)._compositionEnd(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.selectedData.telefono=e)&&t),t},null,null)),u["\u0275did"](29,16384,null,0,a.e,[u.Renderer2,u.ElementRef,[2,a.a]],null,null),u["\u0275prd"](1024,null,a.k,function(l){return[l]},[a.e]),u["\u0275did"](31,671744,[["telefono",4]],0,a.p,[[2,a.d],[8,null],[8,null],[6,a.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,a.l,null,[a.p]),u["\u0275did"](33,16384,null,0,a.m,[[4,a.l]],null,null),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](35,0,null,null,7,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](36,0,null,null,6,"input",[["class","form-control"],["id","asunto"],["name","asunto"],["type","text"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var t=!0,o=l.component;return"input"===n&&(t=!1!==u["\u0275nov"](l,37)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,37).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,37)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,37)._compositionEnd(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.selectedData.asunto=e)&&t),t},null,null)),u["\u0275did"](37,16384,null,0,a.e,[u.Renderer2,u.ElementRef,[2,a.a]],null,null),u["\u0275prd"](1024,null,a.k,function(l){return[l]},[a.e]),u["\u0275did"](39,671744,[["asunto",4]],0,a.p,[[2,a.d],[8,null],[8,null],[6,a.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,a.l,null,[a.p]),u["\u0275did"](41,16384,null,0,a.m,[[4,a.l]],null,null),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](43,0,null,null,7,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](44,0,null,null,6,"input",[["class","form-control"],["id","pais"],["name","pais"],["type","text"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var t=!0,o=l.component;return"input"===n&&(t=!1!==u["\u0275nov"](l,45)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,45).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,45)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,45)._compositionEnd(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.selectedData.pais=e)&&t),t},null,null)),u["\u0275did"](45,16384,null,0,a.e,[u.Renderer2,u.ElementRef,[2,a.a]],null,null),u["\u0275prd"](1024,null,a.k,function(l){return[l]},[a.e]),u["\u0275did"](47,671744,[["pais",4]],0,a.p,[[2,a.d],[8,null],[8,null],[6,a.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,a.l,null,[a.p]),u["\u0275did"](49,16384,null,0,a.m,[[4,a.l]],null,null),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](51,0,null,null,15,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](52,0,null,null,14,"select",[["class","form-control"],["id","marca"],["name","marca"],["required","required"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var t=!0,o=l.component;return"change"===n&&(t=!1!==u["\u0275nov"](l,53).onChange(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,53).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.selectedData.marca=e)&&t),t},null,null)),u["\u0275did"](53,16384,null,0,a.u,[u.Renderer2,u.ElementRef],null,null),u["\u0275did"](54,16384,null,0,a.t,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,a.j,function(l){return[l]},[a.t]),u["\u0275prd"](1024,null,a.k,function(l){return[l]},[a.u]),u["\u0275did"](57,671744,null,0,a.p,[[2,a.d],[6,a.j],[8,null],[6,a.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,a.l,null,[a.p]),u["\u0275did"](59,16384,null,0,a.m,[[4,a.l]],null,null),(l()(),u["\u0275eld"](60,0,null,null,4,"option",[["disabled",""],["hidden",""],["value","Seleccione un mercado"]],null,null,null,null,null)),u["\u0275did"](61,147456,null,0,a.q,[u.ElementRef,u.Renderer2,[2,a.u]],{value:[0,"value"]},null),u["\u0275did"](62,147456,null,0,a.y,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](63,null,["",""])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275and"](16777216,null,null,1,null,C)),u["\u0275did"](66,278528,null,0,d.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275eld"](67,0,null,null,9,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](68,0,null,null,8,"textarea",[["class","form-control"],["id","mensaje"],["name","mensaje"],["required","required"],["rows","3"]],[[8,"placeholder",0],[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var t=!0,o=l.component;return"input"===n&&(t=!1!==u["\u0275nov"](l,69)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,69).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,69)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,69)._compositionEnd(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.selectedData.mensaje=e)&&t),t},null,null)),u["\u0275did"](69,16384,null,0,a.e,[u.Renderer2,u.ElementRef,[2,a.a]],null,null),u["\u0275did"](70,16384,null,0,a.t,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,a.j,function(l){return[l]},[a.t]),u["\u0275prd"](1024,null,a.k,function(l){return[l]},[a.e]),u["\u0275did"](73,671744,null,0,a.p,[[2,a.d],[6,a.j],[8,null],[6,a.k]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,a.l,null,[a.p]),u["\u0275did"](75,16384,null,0,a.m,[[4,a.l]],null,null),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](77,0,null,null,8,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](78,0,null,null,2,"button",[["class","btn btn-primary ingrup-btn"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;return"click"===n&&(u=!1!==t.contact(t.selectedData)&&u),u},null,null)),(l()(),u["\u0275ted"](79,null,["",""])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](81,0,null,null,4,"label",[["class","descriptino_mail"]],null,null,null,null,null)),(l()(),u["\u0275ted"](82,null,[""," "])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](84,0,null,null,1,"span",[["class","my-mail"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["info@ingrup.com"])),(l()(),u["\u0275eld"](86,0,null,null,13,"div",[["class","col-xs-4 col-sm-4 col-md-4 col-lg-4"]],null,null,null,null,null)),(l()(),u["\u0275eld"](87,0,null,null,12,"div",[["class","row paddingr-10 w-100"]],null,null,null,null,null)),(l()(),u["\u0275eld"](88,0,null,null,2,"h2",[["class","title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](89,null,["",""])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](91,0,null,null,4,"p",[["class","description_proveedores"]],null,null,null,null,null)),(l()(),u["\u0275ted"](92,null,[" ",""])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](94,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" suministros@ingrup.com "])),(l()(),u["\u0275eld"](96,0,null,null,3,"a",[["download","ingrup.pdf"],["href","../../../assets/pdf/ingrup.pdf"],["style","text-decoration: none; width: 100%; cursor: pointer;"],["target","_blank"]],null,null,null,null,null)),(l()(),u["\u0275eld"](97,0,null,null,2,"button",[["id","button_forma"]],null,null,null,null,null)),(l()(),u["\u0275ted"](98,null,["",""])),u["\u0275pid"](131072,i.i,[i.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](100,0,null,null,62,"div",[["class","row paddingt-5 border-b vh100"],["id","row_2"]],null,null,null,null,null)),(l()(),u["\u0275eld"](101,0,null,null,58,"div",[["class","col-xs-4 col-sm-4 col-md-4 col-lg-4"]],null,null,null,null,null)),(l()(),u["\u0275eld"](102,0,null,null,57,"ngb-accordion",[["activeIds","config-panel-one"],["class","row paddingr-20 container_mapas accordion"],["role","tablist"]],[[1,"aria-multiselectable",0]],null,null,r.j,r.c)),u["\u0275did"](103,2146304,[["acc",4]],1,s.b,[s.c],{activeIds:[0,"activeIds"]},null),u["\u0275qud"](603979776,1,{panels:1}),(l()(),u["\u0275eld"](105,0,null,null,9,"ngb-panel",[["class","text_pais"],["id","config-panel-one"]],null,null,null,null,null)),u["\u0275did"](106,2113536,[[1,4]],3,s.K,[],{id:[0,"id"]},null),u["\u0275qud"](603979776,2,{titleTpls:1}),u["\u0275qud"](603979776,3,{headerTpls:1}),u["\u0275qud"](603979776,4,{contentTpls:1}),(l()(),u["\u0275and"](0,null,null,1,null,b)),u["\u0275did"](111,16384,[[2,4]],0,s.N,[u.TemplateRef],null,null),(l()(),u["\u0275and"](0,null,null,1,null,_)),u["\u0275did"](113,16384,[[4,4]],0,s.L,[u.TemplateRef],null,null),(l()(),u["\u0275eld"](114,0,null,null,0,"img",[["class","row_pais"],["src","./../../../assets/images/flecha.png"]],null,null,null,null,null)),(l()(),u["\u0275eld"](115,0,null,null,8,"ngb-panel",[],null,null,null,null,null)),u["\u0275did"](116,2113536,[[1,4]],3,s.K,[],null,null),u["\u0275qud"](603979776,5,{titleTpls:1}),u["\u0275qud"](603979776,6,{headerTpls:1}),u["\u0275qud"](603979776,7,{contentTpls:1}),(l()(),u["\u0275and"](0,null,null,1,null,M)),u["\u0275did"](121,16384,[[5,4]],0,s.N,[u.TemplateRef],null,null),(l()(),u["\u0275and"](0,null,null,1,null,P)),u["\u0275did"](123,16384,[[7,4]],0,s.L,[u.TemplateRef],null,null),(l()(),u["\u0275eld"](124,0,null,null,8,"ngb-panel",[],null,null,null,null,null)),u["\u0275did"](125,2113536,[[1,4]],3,s.K,[],null,null),u["\u0275qud"](603979776,8,{titleTpls:1}),u["\u0275qud"](603979776,9,{headerTpls:1}),u["\u0275qud"](603979776,10,{contentTpls:1}),(l()(),u["\u0275and"](0,null,null,1,null,R)),u["\u0275did"](130,16384,[[8,4]],0,s.N,[u.TemplateRef],null,null),(l()(),u["\u0275and"](0,null,null,1,null,w)),u["\u0275did"](132,16384,[[10,4]],0,s.L,[u.TemplateRef],null,null),(l()(),u["\u0275eld"](133,0,null,null,8,"ngb-panel",[],null,null,null,null,null)),u["\u0275did"](134,2113536,[[1,4]],3,s.K,[],null,null),u["\u0275qud"](603979776,11,{titleTpls:1}),u["\u0275qud"](603979776,12,{headerTpls:1}),u["\u0275qud"](603979776,13,{contentTpls:1}),(l()(),u["\u0275and"](0,null,null,1,null,O)),u["\u0275did"](139,16384,[[11,4]],0,s.N,[u.TemplateRef],null,null),(l()(),u["\u0275and"](0,null,null,1,null,T)),u["\u0275did"](141,16384,[[13,4]],0,s.L,[u.TemplateRef],null,null),(l()(),u["\u0275eld"](142,0,null,null,8,"ngb-panel",[],null,null,null,null,null)),u["\u0275did"](143,2113536,[[1,4]],3,s.K,[],null,null),u["\u0275qud"](603979776,14,{titleTpls:1}),u["\u0275qud"](603979776,15,{headerTpls:1}),u["\u0275qud"](603979776,16,{contentTpls:1}),(l()(),u["\u0275and"](0,null,null,1,null,k)),u["\u0275did"](148,16384,[[14,4]],0,s.N,[u.TemplateRef],null,null),(l()(),u["\u0275and"](0,null,null,1,null,D)),u["\u0275did"](150,16384,[[16,4]],0,s.L,[u.TemplateRef],null,null),(l()(),u["\u0275eld"](151,0,null,null,8,"ngb-panel",[],null,null,null,null,null)),u["\u0275did"](152,2113536,[[1,4]],3,s.K,[],null,null),u["\u0275qud"](603979776,17,{titleTpls:1}),u["\u0275qud"](603979776,18,{headerTpls:1}),u["\u0275qud"](603979776,19,{contentTpls:1}),(l()(),u["\u0275and"](0,null,null,1,null,x)),u["\u0275did"](157,16384,[[17,4]],0,s.N,[u.TemplateRef],null,null),(l()(),u["\u0275and"](0,null,null,1,null,y)),u["\u0275did"](159,16384,[[19,4]],0,s.L,[u.TemplateRef],null,null),(l()(),u["\u0275eld"](160,0,null,null,1,"div",[["class","col-xs-8 col-sm-8 col-md-8 col-lg-8 cloumn1 d-flex"]],null,null,null,null,null)),(l()(),u["\u0275eld"](161,0,null,null,0,"img",[["class","mapa m-auto"],["src","././../../../assets/images/mapa.png"]],null,null,null,null,null)),(l()(),u["\u0275eld"](162,0,null,null,0,"div",[["class","buttons"]],null,null,null,null,null)),(l()(),u["\u0275eld"](163,0,null,null,14,"div",[["class","content_footer w-100"]],null,null,null,null,null)),(l()(),u["\u0275eld"](164,0,null,null,13,"div",[["class","row w-100"]],null,null,null,null,null)),(l()(),u["\u0275eld"](165,0,null,null,1,"div",[["class","col-xs-5 col-sm-5 col-md-5 col-lg-5 text-right"]],null,null,null,null,null)),(l()(),u["\u0275eld"](166,0,null,null,0,"img",[["class","logo_white"],["src","../../../assets/images/LogoIngrupBlanco.svg"]],null,null,null,null,null)),(l()(),u["\u0275eld"](167,0,null,null,10,"div",[["class","col-xs-7 col-sm-7 col-md-7 col-lg-7 d-flex text-left content_info_footer"]],null,null,null,null,null)),(l()(),u["\u0275eld"](168,0,null,null,0,"div",[["class","separador_footer"],["style","width: 3px;height: 80%;"]],null,null,null,null,null)),(l()(),u["\u0275eld"](169,0,null,null,3,"p",[["class","text_footer"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" \xa9 2020 Ingrup"])),(l()(),u["\u0275eld"](171,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" info@ingrup.com "])),(l()(),u["\u0275eld"](173,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u["\u0275eld"](174,0,null,null,1,"a",[["href","https://www.facebook.com/pg/Ingrup-103428294520345/about/?ref=page_internal"],["target","_blank"]],null,null,null,null,null)),(l()(),u["\u0275eld"](175,0,null,null,0,"img",[["class"," logo_1 logo_1_footer"],["src","./../../../../assets/images/facebookc.svg"]],null,null,null,null,null)),(l()(),u["\u0275eld"](176,0,null,null,1,"a",[["href","https://www.instagram.com/ingruplatam/"],["target","_blank"]],null,null,null,null,null)),(l()(),u["\u0275eld"](177,0,null,null,0,"img",[["class"," logo_2_footer"],["src","./../../../../assets/images/instagramc.svg"]],null,null,null,null,null))],function(l,n){var e=n.component;l(n,15,0,"nombre",e.selectedData.nombre),l(n,23,0,"emailSend",e.selectedData.emailSend),l(n,31,0,"telefono",e.selectedData.telefono),l(n,39,0,"asunto",e.selectedData.asunto),l(n,47,0,"pais",e.selectedData.pais),l(n,54,0,"required"),l(n,57,0,"marca",e.selectedData.marca),l(n,61,0,"Seleccione un mercado"),l(n,62,0,"Seleccione un mercado"),l(n,66,0,e.Table),l(n,70,0,"required"),l(n,73,0,"mensaje",e.selectedData.mensaje),l(n,103,0,"config-panel-one"),l(n,106,0,"config-panel-one")},function(l,n){l(n,3,0,u["\u0275nov"](n,7).ngClassUntouched,u["\u0275nov"](n,7).ngClassTouched,u["\u0275nov"](n,7).ngClassPristine,u["\u0275nov"](n,7).ngClassDirty,u["\u0275nov"](n,7).ngClassValid,u["\u0275nov"](n,7).ngClassInvalid,u["\u0275nov"](n,7).ngClassPending),l(n,9,0,u["\u0275unv"](n,9,0,u["\u0275nov"](n,10).transform("Cont\xe1ctanos"))),l(n,12,0,u["\u0275inlineInterpolate"](1,"",u["\u0275unv"](n,12,0,u["\u0275nov"](n,18).transform("Nombre")),""),u["\u0275nov"](n,17).ngClassUntouched,u["\u0275nov"](n,17).ngClassTouched,u["\u0275nov"](n,17).ngClassPristine,u["\u0275nov"](n,17).ngClassDirty,u["\u0275nov"](n,17).ngClassValid,u["\u0275nov"](n,17).ngClassInvalid,u["\u0275nov"](n,17).ngClassPending),l(n,20,0,u["\u0275inlineInterpolate"](1,"",u["\u0275unv"](n,20,0,u["\u0275nov"](n,26).transform("Correo")),""),u["\u0275nov"](n,25).ngClassUntouched,u["\u0275nov"](n,25).ngClassTouched,u["\u0275nov"](n,25).ngClassPristine,u["\u0275nov"](n,25).ngClassDirty,u["\u0275nov"](n,25).ngClassValid,u["\u0275nov"](n,25).ngClassInvalid,u["\u0275nov"](n,25).ngClassPending),l(n,28,0,u["\u0275inlineInterpolate"](1,"",u["\u0275unv"](n,28,0,u["\u0275nov"](n,34).transform("Tel\xe9fono")),""),u["\u0275nov"](n,33).ngClassUntouched,u["\u0275nov"](n,33).ngClassTouched,u["\u0275nov"](n,33).ngClassPristine,u["\u0275nov"](n,33).ngClassDirty,u["\u0275nov"](n,33).ngClassValid,u["\u0275nov"](n,33).ngClassInvalid,u["\u0275nov"](n,33).ngClassPending),l(n,36,0,u["\u0275inlineInterpolate"](1,"",u["\u0275unv"](n,36,0,u["\u0275nov"](n,42).transform("Asunto")),""),u["\u0275nov"](n,41).ngClassUntouched,u["\u0275nov"](n,41).ngClassTouched,u["\u0275nov"](n,41).ngClassPristine,u["\u0275nov"](n,41).ngClassDirty,u["\u0275nov"](n,41).ngClassValid,u["\u0275nov"](n,41).ngClassInvalid,u["\u0275nov"](n,41).ngClassPending),l(n,44,0,u["\u0275inlineInterpolate"](1,"",u["\u0275unv"](n,44,0,u["\u0275nov"](n,50).transform("Pa\xeds")),""),u["\u0275nov"](n,49).ngClassUntouched,u["\u0275nov"](n,49).ngClassTouched,u["\u0275nov"](n,49).ngClassPristine,u["\u0275nov"](n,49).ngClassDirty,u["\u0275nov"](n,49).ngClassValid,u["\u0275nov"](n,49).ngClassInvalid,u["\u0275nov"](n,49).ngClassPending),l(n,52,0,u["\u0275nov"](n,54).required?"":null,u["\u0275nov"](n,59).ngClassUntouched,u["\u0275nov"](n,59).ngClassTouched,u["\u0275nov"](n,59).ngClassPristine,u["\u0275nov"](n,59).ngClassDirty,u["\u0275nov"](n,59).ngClassValid,u["\u0275nov"](n,59).ngClassInvalid,u["\u0275nov"](n,59).ngClassPending),l(n,63,0,u["\u0275unv"](n,63,0,u["\u0275nov"](n,64).transform("Seleccione un mercado"))),l(n,68,0,u["\u0275inlineInterpolate"](1,"",u["\u0275unv"](n,68,0,u["\u0275nov"](n,76).transform("Escribir mensaje...")),""),u["\u0275nov"](n,70).required?"":null,u["\u0275nov"](n,75).ngClassUntouched,u["\u0275nov"](n,75).ngClassTouched,u["\u0275nov"](n,75).ngClassPristine,u["\u0275nov"](n,75).ngClassDirty,u["\u0275nov"](n,75).ngClassValid,u["\u0275nov"](n,75).ngClassInvalid,u["\u0275nov"](n,75).ngClassPending),l(n,79,0,u["\u0275unv"](n,79,0,u["\u0275nov"](n,80).transform("Enviar"))),l(n,82,0,u["\u0275unv"](n,82,0,u["\u0275nov"](n,83).transform("O escr\xedbenos al correo:"))),l(n,89,0,u["\u0275unv"](n,89,0,u["\u0275nov"](n,90).transform("Proveedores"))),l(n,92,0,u["\u0275unv"](n,92,0,u["\u0275nov"](n,93).transform("Si eres un proveedor y buscas trabajar con nosotros haz clic en el bot\xf3n a continuaci\xf3n y env\xedanos tu solicitud al correo electr\xf3nico:"))),l(n,98,0,u["\u0275unv"](n,98,0,u["\u0275nov"](n,99).transform("Descargar Forma"))),l(n,102,0,!u["\u0275nov"](n,103).closeOtherPanels)})}function q(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"app-blank-page",[],null,null,null,j,f)),u["\u0275prd"](512,null,s.c,s.c,[]),u["\u0275did"](2,114688,null,0,g,[s.c,m.a,m.l,v.a,h.a],null,null)],function(l,n){l(n,2,0)},null)}var I=u["\u0275ccf"]("app-blank-page",g,q,{},{},[]);class S{}e.d(n,"BlankPageModuleNgFactory",function(){return E});var E=u["\u0275cmf"](t,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,I,r.a,r.b,r.t,r.u,r.q,r.r,r.s]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[u.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,a.w,a.w,[]),u["\u0275mpd"](4608,s.D,s.D,[u.ComponentFactoryResolver,u.Injector,s.Eb,s.E]),u["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),u["\u0275mpd"](1073742336,a.v,a.v,[]),u["\u0275mpd"](1073742336,a.i,a.i,[]),u["\u0275mpd"](1073742336,m.p,m.p,[[2,m.u],[2,m.l]]),u["\u0275mpd"](1073742336,S,S,[]),u["\u0275mpd"](1073742336,s.d,s.d,[]),u["\u0275mpd"](1073742336,s.g,s.g,[]),u["\u0275mpd"](1073742336,s.i,s.i,[]),u["\u0275mpd"](1073742336,s.m,s.m,[]),u["\u0275mpd"](1073742336,s.o,s.o,[]),u["\u0275mpd"](1073742336,s.u,s.u,[]),u["\u0275mpd"](1073742336,s.z,s.z,[]),u["\u0275mpd"](1073742336,s.F,s.F,[]),u["\u0275mpd"](1073742336,s.J,s.J,[]),u["\u0275mpd"](1073742336,s.R,s.R,[]),u["\u0275mpd"](1073742336,s.U,s.U,[]),u["\u0275mpd"](1073742336,s.Z,s.Z,[]),u["\u0275mpd"](1073742336,s.fb,s.fb,[]),u["\u0275mpd"](1073742336,s.kb,s.kb,[]),u["\u0275mpd"](1073742336,s.nb,s.nb,[]),u["\u0275mpd"](1073742336,s.qb,s.qb,[]),u["\u0275mpd"](1073742336,s.rb,s.rb,[]),u["\u0275mpd"](1073742336,s.G,s.G,[]),u["\u0275mpd"](1073742336,i.g,i.g,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](1024,m.j,function(){return[[{path:"",component:g}]]},[])])})}}]);