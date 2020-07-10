import { Component, OnInit } from "@angular/core";
import { routerTransition } from "../../router.animations";
import { Router, NavigationEnd } from "@angular/router";
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { NgbAccordionConfig } from "@ng-bootstrap/ng-bootstrap";
import { MarcasService } from "./../../shared/services/marcas.service";
import { UsersService } from "./../../shared/services/users.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-integrate",
  templateUrl: "./integrate.component.html",
  styleUrls: ["./integrate.component.scss"],
  animations: [routerTransition()],
  providers: [NgbAccordionConfig],
})
export class IntegrateComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  constructor(
    config: NgbAccordionConfig,
    private route: ActivatedRoute,
    public router: Router,
    private mainService: MarcasService,
    private UsersService: UsersService
  ) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
    config.type = "success";
  }
  customOptions2: any = {
    loop: true,
    // autoWidth: true,
    // autoHeight: false,
    nav: false,
    autoplay: true,
    center: true,
    dots: true,
    margin: 20,
    responsiveClass: true,
    items: 7,
    responsive: {
      300: {
        items: 3,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 7,
      },
    },
    // URLhashListener:true,
    // startPosition: 'URLHash',
  };
  id = this.route.snapshot.paramMap.get("marca");
  selectedData = {
    nombre: "",
    telefono: "",
    asunto: "Solicitud de empleo",
    pais: "",
    marca: "Solicitud de empleo",
    mensaje: "[INTEGRATE]",
    emailSend: "",
    // emailResp: "josueamenteb@gmail.com",
    emailResp: "anllelamasella@ingrup.com",
    cvFile: null,
  };
  carouselData: any = [
    {
      text: "Slide 1",
      src: "assets/images/Nosotros/titulo1.png",
      dataHash: "one",
    },
    {
      text: "Slide 2",
      src: "assets/images/Nosotros/titulo2.png",
      dataHash: "two",
    },
    {
      text: "Slide 3",
      src: "assets/images/Nosotros/titulo3.png",
      dataHash: "three",
    },
    {
      text: "Slide 4",
      src: "assets/images/Nosotros/titulo4.png",
      dataHash: "four",
    },
    {
      text: "Slide 5",
      src: "assets/images/Nosotros/titulo5.png",
      dataHash: "five",
    },
    {
      text: "Slide 6",
      src: "assets/images/Nosotros/titulo6.png",
      dataHash: "five",
    },
    {
      text: "Slide 7",
      src: "assets/images/Nosotros/titulo7.png",
      dataHash: "five",
    },
    // { text: 'Slide 6', dotContent: 'text5'},
    // { text: 'Slide 7', dotContent: 'text5'},
    // { text: 'Slide 8', dotContent: 'text5'},
    // { text: 'Slide 9', dotContent: 'text5'},
    // { text: 'Slide 10', dotContent: 'text5'},
  ];
  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels: string[] = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
  ];
  public barChartType: string;
  public barChartLegend: boolean;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
  ];

  // Doughnut
  public doughnutChartLabels: string[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail-Order Sales",
  ];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string;

  // Radar
  public radarChartLabels: string[] = [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ];
  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 96, 27, 100], label: "Series B" },
  ];
  public radarChartType: string;

  // Pie
  public pieChartLabels: string[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail Sales",
  ];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: string;

  // PolarArea
  public polarAreaChartLabels: string[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail Sales",
    "Telesales",
    "Corporate Sales",
  ];
  public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend: boolean;

  public polarAreaChartType: string;

  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
    { data: [18, 48, 77, 9, 100, 27, 40], label: "Series C" },
  ];
  public lineChartLabels: Array<any> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: "rgba(148,159,177,0.2)",
      borderColor: "rgba(148,159,177,1)",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)",
    },
    {
      // dark grey
      backgroundColor: "rgba(77,83,96,0.2)",
      borderColor: "rgba(77,83,96,1)",
      pointBackgroundColor: "rgba(77,83,96,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(77,83,96,1)",
    },
    {
      // grey
      backgroundColor: "rgba(148,159,177,0.2)",
      borderColor: "rgba(148,159,177,1)",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)",
    },
  ];
  public lineChartLegend: boolean;
  public lineChartType: string;

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40,
    ];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  ngOnInit() {
    this.barChartType = "bar";
    this.barChartLegend = true;
    this.doughnutChartType = "doughnut";
    this.radarChartType = "radar";
    this.pieChartType = "pie";
    this.polarAreaLegend = true;
    this.polarAreaChartType = "polarArea";
    this.lineChartLegend = true;
    this.lineChartType = "line";
  }
  contact(formValue) {
    console.log(formValue);
    this.blockUI.start();
    formValue.emailResp = this.selectedData.emailResp;
    this.UsersService.send(formValue)
      .then((response) => {
        if (response.enviado) {
          console.log(response);
        } else {
          console.log(response);
        }
        //   console.log(this.id);
        this.blockUI.stop();
      })
      .catch((error) => {
        this.blockUI.stop();
        console.clear;
      });
  }
  fileHandler(id) {
    let fileControl = <HTMLInputElement>document.querySelector("#" + id);
    if (fileControl.files.length > 0) {
      let reader = new FileReader();
      reader.readAsDataURL(fileControl.files[0]);
      reader.onload = () => {
        this.selectedData.cvFile = (<string>reader.result).split(",")[1];
        console.log(this.selectedData.cvFile);
      };
    }
  }
  uploadCV(id) {
    let fileControl = <HTMLInputElement>document.querySelector("#" + id);
    fileControl.click();
  }
}
