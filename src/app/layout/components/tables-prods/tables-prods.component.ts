import { Component, OnInit, Input } from '@angular/core';
import { FormComponent } from "./../../form/form.component";

declare var $: any

@Component({
  selector: 'app-tables-prods',
  templateUrl: './tables-prods.component.html',
  styleUrls: ['./tables-prods.component.scss']
})
export class TablesProdsComponent implements OnInit {
    session:boolean = localStorage.getItem('currentUser')?true:false;

    @Input() selectedData
  constructor(
      private TablesComponent:FormComponent
  ) { }

  selected:any = {
      id: 0,
      nombre: "", 
      descripcion: [],
      peso: [],
      largo: [],
      cuello: [], 
      altura: [],
      unidades: [],
      separador: []
  }
  complete:any = {
      descripcion: [],
      peso: [],
      largo: [],
      cuello: [],
      altura: [],
      unidades: [],
      separador: []
  }
  unidades: any ;
  nombre: "";
  fichapdf = "";
  fichapdf2 = "";
  fichapdfname = "";
  fichapdfname2 = "";
  id_vial = "";
  pathpdf = "../../../../assets/pdf/";
  ngOnInit() {
    if(this.selectedData.presentaciones){
      

      //alert('xxx');
      //console.log(this.selectedData.presentaciones);
      
      try {
        rename(this.selectedData.presentaciones[0].id);
      } catch (error) {
        console.log(error)
      }

      this.selected = this.selectedData.presentaciones[0];
      this.selected = this.selectedData;
      
      console.log("----------");
      //console.log(this.selected);
      //console.log(this.selectedData)
      console.log("-----------")

      if(this.selected.nombre){
        this.nombre = this.selected.nombre;
      }
      var numero = 0;
      this.selectedData.presentaciones.forEach(element => {
        this.selectedData.presentaciones[numero].peso = add_string(element.peso);
        numero +=1;
      });
      this.selected.unidades = formatearNumero(this.selected.unidades);
      this.selected.altura = formatearNumero2(this.selected.altura);
      
      console.log(this.selected);
      
      if(this.selectedData){
        // console.log($("#finalPic"));
        setTimeout(() => {
            $("#content_data").addClass("hv-100");
            $("#finalPic").removeClass("d-none");
            $("#finalPic").addClass("modalGAlerya");
        }, 500);
        // console.log($("#finalPic"));
    }
    
    this.selected = this.selectedData.presentaciones[0];


    }else{
      this.selected = null
    }

    if (this.selected != null){
    this.fichapdfname = linkpdf(this.nombre , this.selected.peso , this.selected.altura);
    this.fichapdf2 = linkpdf(this.nombre , this.selected.peso , this.selected.altura);
  }
  this.fichapdf = this.pathpdf + this.fichapdfname;
  //console.log("Fichapdfname:");
  //console.log(this.fichapdfname);
  //console.log("fichapdf:");
  //console.log(this.fichapdf);


  }
  onChange($event){
    //   this.complete=$event
    let data = $event
    this.selected = data
    this.id_vial = this.selectedData.presentaciones[0].id;
    rename(this.selectedData.presentaciones[0].id);
    //   console.log(data);
    //   console.log(this.selectedData.presentaciones[0]);
    this.selected.unidades = formatearNumero(this.selected.unidades);
    this.selected.altura = formatearNumero2(this.selected.altura);
    this.nombre = this.selected.nombre;

    this.fichapdfname = linkpdf(this.nombre , this.selected.peso , this.selected.altura);
    this.fichapdf = this.pathpdf + this.fichapdfname;
    console.log("Fichapdfname:");
    console.log(this.fichapdfname);
    console.log("fichapdf:");
    console.log(this.fichapdf);
    this.fichapdf2 = linkpdf(this.nombre , this.selected.peso , this.selected.altura);

  }
  
  onClear(){
    this.selected = this.selectedData.presentaciones[0]
  }
  removeDuplicates(originalArray, prop) {



    }
}
function rename(id){
  console.log("*******");
  console.log(id);
  if(id == "101037" || id == "101036"){
    $(".description_data").text("Altura (m)");
    $(".description_data2").text("Ancho (m)");
    $(".description_data3").text("Fondo (m)");
  }
}
function add_string(string_val){
  string_val = string_val + "";
  var convert = true;
  for (let index = 0; index < string_val.length; index++) {
    const element = string_val[index];
    if(element === ","){
      convert = false;
    }
  }
  if(convert){
    string_val = string_val + "";
  var string_data = string_val.split(".",2);
  // console.log("array string: " + string_data[1]);
  var data_decimal = string_data[1];
  string_data = string_data[0];
  var array_nums = [];
  var string_numero = "";
  for (let index = 0; index < string_data.length; index++) {
    const element = string_data[index];
    // console.log(element);
    if(string_data.length > 3){
      if(string_data.length - 3 === index){
        array_nums.push(",");
        string_numero += ",";
      }
    }
    array_nums.push(element);
    string_numero += element;
  }
  // console.log("decimales: " + data_decimal);
  if(!data_decimal){
    // console.log(".00");
    string_numero =  string_numero + ".00";
  }else{
    // console.log("data decimal true");
    if(data_decimal.length === 1){
      // console.log("length: " + data_decimal.length);
      string_numero = string_numero + "." +data_decimal + "0";
    }else if( data_decimal.length === 2){
      string_numero = string_numero + "." + data_decimal;
    }

  }
    return string_numero.toString();
  }else{
    return string_val;
  }
  
}
function formatearNumero(nStr) {
  nStr += '';
  var x = nStr.split(',');
  var x1 = x[0];
  var x2 = x.length > 1 ? ',' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}
function formatearNumero2(nStr) {
  console.log('Funcion formatearNumero2: ', nStr);
  if(nStr != undefined){
    nStr += '';
    var x = nStr.split('.');
    var x2 = "";
    if(x[1]){
      x[1] = x[1] + "0";
      x2 = "." + x[1];
    }
    var x1 = x[0];
    var converted: any;
    try {
      converted = (parseFloat(x1 + x2)).toFixed(2);
      throw new Error('Something bad happened');
    } catch (e) {
      console.log(e)
    }
    console.log("-----------------");
    console.log(converted);
    console.log("-----------------");
    return converted;
  }else{
    return '';
  }
}
function linkpdf(name , peso , altura){
  if(name === "Preforma 33mm"){
    if(peso === "21.50"){
      return "21_5_GRAMOS_33_MM.pdf"
    }
  }
  if(name === "Preforma 1881"){
    if(peso === "18.50"){
      if(altura === "92.87"){
        return "92_87_altura_18_5_GRAMOS_CORTA_1881.pdf"
      }
      if(altura === "92.35"){
        return "92_35_altura_18_5_G-N_CORTA_1881.pdf"
      }
      if(altura === "92.80"){
        return "000_PREFORMA_PET_18_5_GRAMOS_LARGA_1881  95.80.pdf"
      }
    }
    if(peso === "21.50"){
      if(altura === "92.87"){
        return "000_PREFORMA_PET_21_5_GRAMOS_CORTA_1881 92.87.pdf"
      }
      if(altura === "92.35"){
        return "000_PREFORMA_PET_21_5_G-N_CORTA_1881 92.35.pdf"
      }
      if(altura === "100.30"){
        return "000_PREFORMA_PET_21_5_GRAMOS_LARGA_1881 100.30.pdf"
      }

    }
    if(peso === "23.50"){
      return "000_PREFORMA_PET_23.5_GRAMOS_1881  100.30.pdf"
    }
    if(peso === "25.50"){
      return "000_PREFORMA_PET_25.5_GRAMOS_1881 100.30.pdf"
    }
    if(peso === "26.50"){
      return "000_PREFORMA_PET_26_5_GRAMOS_1881 96.50.pdf"
    }
    if(peso === "31.00"){
      return "000_PREFORMA_PET_31_GRAMOS_1881  116.50.pdf"
    }
    if(peso === "42.50"){
      return "000_PREFORMA_PET_42_5_GRAMOS_1881.pdf"
    }
    if(peso === "46.50"){
      return "000_PREFORMA_PET_46_5_GRAMOS_1881.pdf"
    }
    if(peso === "50.00"){
      return "000_PREFORMA_PET_50_GRAMOS_1881.pdf"
    }
    if(peso === "52.50"){
      return "000_PREFORMA_PET_52_5_GRAMOS_1881 .pdf"
    }
    if(peso === "54.00"){
      return "000_PREFORMA_PET_54_GRAMOS_1881.pdf"
    }
    if(peso === "56.50"){
      return "000_PREFORMA_PET_56_5_GRAMOS_1881.pdf"
    }
    if(peso === "58.50"){
      return "000_PREFORMA_PET_58_5_GRAMOS_1881.pdf"
    }
    if(peso === "62.00"){
      return "000_PREFORMA_PET_62_GRAMOS_1881.pdf"
    }
  }
  if(name === "Preforma 48 mm"){
    if(peso === "90.00"){
      if(altura === "307.50"){
        return "PREFORMA_PET_90_GRAMOS_48_MM.pdf"
      }
    }
  }
  if(name === "Preforma 38 mm"){
    if(peso === "23.00"){
      if(altura === "95.17"){
        return "000_PREFORMA_PET_23_GRAMOS_38_MM ILC.pdf"
      }
    }if(peso === "27.70"){
      if(altura === "95.17"){
        return "000_PREFORMA_PET_27_70_GRAMOS_38_MM.pdf"
      }
    }
  }
  if(name === "Preforma 1816"){
    if(peso === "18.00"){
      return "000_PREFORMA_PET_18_GRAMOS_1816.pdf"
    }
    if(peso === "20.00"){
      if(altura === "97.07"){
        return "000_PREFORMA_PET_20_GRAMOS_CORTA_1816.pdf"
      }
      if(altura === "100.00"){
        return "000_PREFORMA_PET_20_GRAMOS_LARGA_1816.pdf"
      }
    }
    if(peso === "23.00"){
      if(altura === "97.07"){
        return "000_PREFORMA_PET_23_GRAMOS_CORTA_1816.pdf"
      }
      if(altura === "104.50"){
        return "000_PREFORMA_PET_23_GRAMOS_LARGA_1816.pdf"
      }
    }
    if(peso === "27.00"){
      return "000_PREFORMA_PET_27_GRAMOS_1816.pdf"
    }
    if(peso === "28.00"){
      return "000_PREFORMA_PET_28_GRAMOS_1816.pdf"
    }
    if(peso === "33.00"){
      return "000_PREFORMA_PET_33_GRAMOS_1816.pdf"
    }
    if(peso === "37.00"){
      return "000_PREFORMA_PET_37_GRAMOS_1816.pdf"
    }
    if(peso === "44.00"){
      return "000_PREFORMA_PET_44_GRAMOS_1816.pdf"
    }
    if(peso === "48.00"){
      return "000_PREFORMA_PET_48_GRAMOS_1816.pdf"
    }
    if(peso === "52.00"){
      return "000_PREFORMA_PET_52_GRAMOS_1816.pdf"
    }
    if(peso === "54.00"){
      return "000_PREFORMA_PET_54_GRAMOS_1816.pdf"
    }
    if(peso === "56.00"){
      return "000_PREFORMA_PET_56_GRAMOS_1816.pdf"
    }
    if(peso === "64.00"){
      return "000_PREFORMA_PET_64_GRAMOS_1816.pdf"
    }
  }
  if(name === "50 mm"){
    var link_return = $(".uniqueImageContainer div div div").css("background-image");
    var url_final = "";
    for (let index = 0; index < link_return.length; index++) {
      const element = link_return[index];
      if(index > 4 && (link_return.length - index) > 2){
        url_final += element;
      }
      
    }
    return url_final
  }
  return "ingrup.pdf"
}