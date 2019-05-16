import { Component, OnInit } from '@angular/core';
import { PractiseServiceComponent } from './service';
import {PractiseZh2ServiceComponent} from "./zh2.service";
import {vizsgaServiceComponent} from "./vizsga.service";

@Component({
    selector: 'app-vizsgacomponent',
    templateUrl: './vizsga.component.html',
    styleUrls: ['./vizsga.component.scss']
})

export class vizsgaComponent implements OnInit {
    someVizsgaZH: {};
    someVizsgaZH1: {};
    someVizsgaZH2: {};
    someVizsgaZH3: {};
    someVizsgaZH4: {};


    isValid0 = false;
    isValid1 = false;
    isValid2 = false;
    isValid3 = false;
    isValid4 = false;
    isValid5 = false;
    isValid6 = false;
    isValid7 = false;
    isValid8 = false;
    isValid9 = false;
    isValid10 = false;
    isValid11 = false;
    isValid12 = false;
    isValid13 = false;


    public maxeredmeny;
    private pmax;

    //I. ZH eredményei
    public vizsga;vizsga1;vizsga2;vizsga3;vizsga4;vizsga5;vizsga6;vizsga7;vizsga8;vizsga9;vizsga10;vizsga11;vizsga12;vizsga13;

  public eredmeny;
    constructor(
        private service: vizsgaServiceComponent

    ) { }


    ngOnInit() {
      this.pmax = 12;
      var myEI = new Array(12);
      var myGI = new Array(12);
      var myMIter = new Array(12);
      var myTudasfel = new Array(12);
      var myEmberiidegrendszereslatas = new Array(12);
      var i=0;
      var feltetel = 0;

      while (feltetel == 0) {
        this.isValid0 = false;
        this.isValid1 = false;
        this.isValid2 = false;
        this.isValid3 = false;
        this.isValid4 = false;
        this.isValid5=  false;
        this.isValid6 = false;
        this.isValid7 = false;
        this.isValid8 = false;
        this.isValid9 = false;
        this.isValid10 = false;
        this.isValid11 = false;
        this.isValid12 = false;
        this.isValid13 = false;
        this.maxeredmeny = 0;

        //1. csoport kérdései
        if (this.maxeredmeny < 50) {
          this.isValid0 = true;
          this.someVizsgaZH = this.service.EmberiIntelligencia();
          var rnd1 = Math.floor((Math.random() * this.service.EmberiIntelligencia().length));
          this.vizsga = this.someVizsgaZH[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.vizsga.pontszam);
          myEI[i] = rnd1;
        }


        if (this.maxeredmeny < 50) {
            this.isValid1 = true;
             this.someVizsgaZH = this.service.GepiIntelligencia();
            rnd1 = Math.floor((Math.random() * this.service.GepiIntelligencia().length));
            this.vizsga1 = this.someVizsgaZH[rnd1];
            this.maxeredmeny = this.maxeredmeny + parseInt(this.vizsga1.pontszam);
            console.log(rnd1);
        }

        if (this.maxeredmeny < 50) {
          this.isValid2 = true;
          this.someVizsgaZH = this.service.Prolog();
          rnd1 = Math.floor((Math.random() * this.service.Prolog().length));
          this.vizsga2 = this.someVizsgaZH[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.vizsga2.pontszam);
        }

        //2. feladat gépi intelligencia
        if (this.maxeredmeny < 50) {
          this.isValid3 = true;
          this.someVizsgaZH1 = this.service.Miteruletek();
          var rnd1 = Math.floor((Math.random() * this.service.Miteruletek().length));
          this.vizsga3 = this.someVizsgaZH1[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.vizsga3.pontszam);
        }


        if (this.maxeredmeny < 50) {
          this.isValid4 = true;
          this.someVizsgaZH1 = this.service.Tudasfeldolgozas();
          rnd1 = Math.floor((Math.random() * this.service.Tudasfeldolgozas().length));
            this.vizsga4 = this.someVizsgaZH1[rnd1];
            console.log(rnd1);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.vizsga4.pontszam);
        }


        if (this.maxeredmeny < 50) {
          this.isValid5 = true;
          this.someVizsgaZH1 = this.service.Logika();

          rnd1 = Math.floor((Math.random() * this.service.Logika().length));
            this.vizsga5 = this.someVizsgaZH1[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.vizsga5.pontszam);
        }

        //3 rész MI területek
        if (this.maxeredmeny < 50) {
          this.isValid6 = true;
          this.someVizsgaZH2 = this.service.Szemantikushalok();
          var rnd1 = Math.floor((Math.random() * this.service.Szemantikushalok().length));
          this.vizsga6 = this.someVizsgaZH2[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.vizsga6.pontszam);
        }


        if (this.maxeredmeny < 50) {
          this.isValid7 = true;
          this.someVizsgaZH2 = this.service.Emberiidegrendszereslatas();
          rnd1 = Math.floor((Math.random() * this.service.Emberiidegrendszereslatas().length));
            this.vizsga7 = this.someVizsgaZH2[rnd1];
            console.log(rnd1);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.vizsga7.pontszam);
        }


        if (this.maxeredmeny < 50) {
          this.isValid8 = true;
          this.someVizsgaZH2 = this.service.Kereses();

          rnd1 = Math.floor((Math.random() * this.service.Kereses().length));
            this.vizsga8 = this.someVizsgaZH2[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.vizsga8.pontszam);
        }


        //4. rész GenetikusAlgoritmus
        if (this.maxeredmeny < 50) {
          this.isValid9 = true;
          this.someVizsgaZH3 = this.service.Neuralishalok();
          var rnd1 = Math.floor((Math.random() * this.service.Neuralishalok().length));
          this.vizsga9 = this.someVizsgaZH3[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.vizsga9.pontszam);
        }


        if (this.maxeredmeny < 50) {
          this.isValid10 = true;
          this.someVizsgaZH3 = this.service.Procontra();
          rnd1 = Math.floor((Math.random() * this.service.Procontra().length));
            this.vizsga10 = this.someVizsgaZH3[rnd1];
            console.log(rnd1);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.vizsga10.pontszam);
        }



        //5. rész
        if (this.maxeredmeny < 50) {
          this.isValid11 = true;
          this.someVizsgaZH4 = this.service.Egyebek();
          var rnd1 = Math.floor((Math.random() * this.service.Egyebek().length));
          this.vizsga11 = this.someVizsgaZH4[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.vizsga11.pontszam);
          myEmberiidegrendszereslatas[i] = rnd1;
          console.log("Zh12: "+this.maxeredmeny);
        }


        if (this.maxeredmeny < 50) {
          this.isValid12 = true;
          this.someVizsgaZH4 = this.service.Tudasfeldolgozas();
          rnd1 = Math.floor((Math.random() * this.service.Tudasfeldolgozas().length));
            this.vizsga12 = this.someVizsgaZH4[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.vizsga12.pontszam);
          console.log("Zh13: "+this.maxeredmeny);
        }


        if (this.maxeredmeny < 50) {
          this.isValid13 = true;
          this.someVizsgaZH3 = this.service.GenetikusAlgoritmus();
          rnd1 = Math.floor((Math.random() * this.service.Egyebek().length));
            this.vizsga13 = this.someVizsgaZH4[rnd1];
            myEmberiidegrendszereslatas[i + 2] = rnd1;
          this.maxeredmeny = this.maxeredmeny + parseInt(this.vizsga13.pontszam);
        }

        console.log("eredmeny:" +this.maxeredmeny)
        if(this.maxeredmeny == 50)  {
          feltetel =1;
          this.maxeredmeny = this.maxeredmeny;
        } else {
          this.maxeredmeny = 0;
        }
      }
    }
}
