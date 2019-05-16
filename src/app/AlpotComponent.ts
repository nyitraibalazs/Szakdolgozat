import { Component, OnInit } from '@angular/core';
import { PractiseServiceComponent } from './service';
import {PractiseZh2ServiceComponent} from "./zh2.service";
import {alpotServiceComponent} from "./Alpot.service";

@Component({
    selector: 'app-alpot',
    templateUrl: './alpot.component.html',
    styleUrls: ['./alpot.component.scss']
})

export class alpotComponent implements OnInit {
  someAlpotZH: {};
  someAlpotZH1: {};
  someAlpotZH2: {};
  someAlpotZH3: {};
  someAlpotZH4: {};


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
  public alpot;alpot1;alpot2;alpot3;alpot4;alpot5;alpot6;alpot7;alpot8;alpot9;alpot10;alpot11;alpot12;alpot13;

  public eredmeny;
  constructor(
    private service: alpotServiceComponent

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
        this.someAlpotZH = this.service.EmberiIntelligencia();
        var rnd1 = Math.floor((Math.random() * this.service.EmberiIntelligencia().length));
        this.alpot = this.someAlpotZH[rnd1];
        this.maxeredmeny = this.maxeredmeny + parseInt(this.alpot.pontszam);
        myEI[i] = rnd1;
      }


      if (this.maxeredmeny < 50) {
        this.isValid1 = true;
        this.someAlpotZH = this.service.GepiIntelligencia();
        rnd1 = Math.floor((Math.random() * this.service.GepiIntelligencia().length));
        this.alpot1 = this.someAlpotZH[rnd1];
        this.maxeredmeny = this.maxeredmeny + parseInt(this.alpot1.pontszam);
        console.log(rnd1);
      }

      if (this.maxeredmeny < 50) {
        this.isValid2 = true;
        this.someAlpotZH = this.service.Prolog();
        rnd1 = Math.floor((Math.random() * this.service.Prolog().length));
        this.alpot2 = this.someAlpotZH[rnd1];
        this.maxeredmeny = this.maxeredmeny + parseInt(this.alpot2.pontszam);
      }

      //2. feladat gépi intelligencia
      if (this.maxeredmeny < 50) {
        this.isValid3 = true;
        this.someAlpotZH1 = this.service.Miteruletek();
        var rnd1 = Math.floor((Math.random() * this.service.Miteruletek().length));
        this.alpot3 = this.someAlpotZH1[rnd1];
        this.maxeredmeny = this.maxeredmeny + parseInt(this.alpot3.pontszam);
      }


      if (this.maxeredmeny < 50) {
        this.isValid4 = true;
        this.someAlpotZH1 = this.service.Tudasfeldolgozas();
        rnd1 = Math.floor((Math.random() * this.service.Tudasfeldolgozas().length));
        this.alpot4 = this.someAlpotZH1[rnd1];
        console.log(rnd1);
        this.maxeredmeny = this.maxeredmeny + parseInt(this.alpot4.pontszam);
      }


      if (this.maxeredmeny < 50) {
        this.isValid5 = true;
        this.someAlpotZH1 = this.service.Logika();

        rnd1 = Math.floor((Math.random() * this.service.Logika().length));
        this.alpot5 = this.someAlpotZH1[rnd1];
        this.maxeredmeny = this.maxeredmeny + parseInt(this.alpot5.pontszam);
      }

      //3 rész MI területek
      if (this.maxeredmeny < 50) {
        this.isValid6 = true;
        this.someAlpotZH2 = this.service.Szemantikushalok();
        var rnd1 = Math.floor((Math.random() * this.service.Szemantikushalok().length));
        this.alpot6 = this.someAlpotZH2[rnd1];
        this.maxeredmeny = this.maxeredmeny + parseInt(this.alpot6.pontszam);
      }


      if (this.maxeredmeny < 50) {
        this.isValid7 = true;
        this.someAlpotZH2 = this.service.Emberiidegrendszereslatas();
        rnd1 = Math.floor((Math.random() * this.service.Emberiidegrendszereslatas().length));
        this.alpot7 = this.someAlpotZH2[rnd1];
        console.log(rnd1);
        this.maxeredmeny = this.maxeredmeny + parseInt(this.alpot7.pontszam);
      }


      if (this.maxeredmeny < 50) {
        this.isValid8 = true;
        this.someAlpotZH2 = this.service.Kereses();

        rnd1 = Math.floor((Math.random() * this.service.Kereses().length));
        this.alpot8 = this.someAlpotZH2[rnd1];
        this.maxeredmeny = this.maxeredmeny + parseInt(this.alpot8.pontszam);
      }


      //4. rész GenetikusAlgoritmus
      if (this.maxeredmeny < 50) {
        this.isValid9 = true;
        this.someAlpotZH3 = this.service.Neuralishalok();
        var rnd1 = Math.floor((Math.random() * this.service.Neuralishalok().length));
        this.alpot9 = this.someAlpotZH3[rnd1];
        this.maxeredmeny = this.maxeredmeny + parseInt(this.alpot9.pontszam);
      }


      if (this.maxeredmeny < 50) {
        this.isValid10 = true;
        this.someAlpotZH3 = this.service.Neuralishalok();
        rnd1 = Math.floor((Math.random() * this.service.Neuralishalok().length));
        this.alpot10 = this.someAlpotZH3[rnd1];
        console.log(rnd1);
        this.maxeredmeny = this.maxeredmeny + parseInt(this.alpot10.pontszam);
      }



      //5. rész
      if (this.maxeredmeny < 50) {
        this.isValid11 = true;
        this.someAlpotZH4 = this.service.Tudasfeldolgozas();
        var rnd1 = Math.floor((Math.random() * this.service.Tudasfeldolgozas().length));
        this.alpot11 = this.someAlpotZH4[rnd1];
        this.maxeredmeny = this.maxeredmeny + parseInt(this.alpot11.pontszam);
        myEmberiidegrendszereslatas[i] = rnd1;
        console.log("Zh12: "+this.maxeredmeny);
      }


      if (this.maxeredmeny < 50) {
        this.isValid12 = true;
        this.someAlpotZH4 = this.service.Tudasfeldolgozas();
        rnd1 = Math.floor((Math.random() * this.service.Tudasfeldolgozas().length));
        this.alpot12 = this.someAlpotZH4[rnd1];
        this.maxeredmeny = this.maxeredmeny + parseInt(this.alpot12.pontszam);
        console.log("Zh13: "+this.maxeredmeny);
      }


      if (this.maxeredmeny < 50) {
        this.isValid13 = true;
        this.someAlpotZH3 = this.service.GenetikusAlgoritmus();
        rnd1 = Math.floor((Math.random() * this.service.GenetikusAlgoritmus().length));
        this.alpot13 = this.someAlpotZH4[rnd1];
        myEmberiidegrendszereslatas[i + 2] = rnd1;
        this.maxeredmeny = this.maxeredmeny + parseInt(this.alpot13.pontszam);
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
