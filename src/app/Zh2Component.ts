import { Component, OnInit } from '@angular/core';
import { PractiseServiceComponent } from './service';
import {PractiseZh2ServiceComponent} from "./zh2.service";

@Component({
    selector: 'app-zh2component',
    templateUrl: './zh2.component.html',
    styleUrls: ['./zh2.component.scss']
})

export class Zh2Component implements OnInit {
    someMasodikZH: {};
    someMasodikZH1: {};
    someMasodikZH2: {};
    someMasodikZH3: {};
    someMasodikZH4: {};


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
    public masodikzh;masodikzh1;masodikzh2;masodikzh3;masodikzh4;masodikzh5;masodikzh6;masodikzh7;masodikzh8;masodikzh9;masodikzh10;masodikzh11;masodikzh12;masodikzh13;

  public eredmeny;
    constructor(
        private service: PractiseZh2ServiceComponent

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
          this.someMasodikZH = this.service.Prolog();
          var rnd1 = Math.floor((Math.random() * this.service.Prolog().length));
          this.masodikzh = this.someMasodikZH[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.masodikzh.pontszam);
          myEI[i] = rnd1;
        }


        if (this.maxeredmeny < 50) {
          do {
            this.isValid1 = true;
            rnd1 = Math.floor((Math.random() * this.service.Prolog().length));
            this.masodikzh1 = this.someMasodikZH[rnd1];
            this.maxeredmeny = this.maxeredmeny + parseInt(this.masodikzh1.pontszam);
            console.log(rnd1);
            myEI[i + 1] = rnd1;

          } while (myEI[i] == myEI[i + 1]);
        }

        if (this.maxeredmeny < 50) {
          this.isValid2 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.Prolog().length));
            this.masodikzh2 = this.someMasodikZH[rnd1];
            myEI[i + 2] = rnd1;

          } while (myEI[i + 1] == myEI[i + 2] || myEI[i] == myEI[i + 1] || myEI[i] == myEI[i + 2]);

          this.maxeredmeny = this.maxeredmeny + parseInt(this.masodikzh2.pontszam);
        }

        //2. feladat gépi intelligencia
        if (this.maxeredmeny < 50) {
          this.isValid3 = true;
          this.someMasodikZH1 = this.service.Szemantikushalok();
          var rnd1 = Math.floor((Math.random() * this.service.Szemantikushalok().length));
          this.masodikzh3 = this.someMasodikZH1[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.masodikzh3.pontszam);
          myGI[i] = rnd1;
        }


        if (this.maxeredmeny < 50) {
          this.isValid4 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.Szemantikushalok().length));
            this.masodikzh4 = this.someMasodikZH1[rnd1];
            console.log(rnd1);
            myGI[i + 1] = rnd1;

          } while (myGI[i] == myGI[i + 1]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.masodikzh4.pontszam);
        }


        if (this.maxeredmeny < 50) {
          this.isValid5 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.Szemantikushalok().length));
            this.masodikzh5 = this.someMasodikZH1[rnd1];
            myGI[i + 2] = rnd1;

          } while (myGI[i + 1] == myGI[i + 2] || myGI[i] == myGI[i + 1] || myGI[i] == myGI[i + 2]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.masodikzh5.pontszam);
        }

        //3 rész MI területek
        if (this.maxeredmeny < 50) {
          this.isValid6 = true;
          this.someMasodikZH2 = this.service.Kereses();
          var rnd1 = Math.floor((Math.random() * this.service.Kereses().length));
          this.masodikzh6 = this.someMasodikZH2[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.masodikzh6.pontszam);
          myMIter[i] = rnd1;
        }


        if (this.maxeredmeny < 50) {
          this.isValid7 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.Kereses().length));
            this.masodikzh7 = this.someMasodikZH2[rnd1];
            console.log(rnd1);
            myMIter[i + 1] = rnd1;

          } while (myMIter[i] == myMIter[i + 1]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.masodikzh7.pontszam);
        }


        if (this.maxeredmeny < 50) {
          this.isValid8 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.Kereses().length));
            this.masodikzh8 = this.someMasodikZH2[rnd1];
            myMIter[i + 2] = rnd1;
          } while (myMIter[i + 1] == myMIter[i + 2] || myMIter[i] == myMIter[i + 1] || myMIter[i] == myMIter[i + 2]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.masodikzh8.pontszam);
        }


        //4. rész GenetikusAlgoritmus
        if (this.maxeredmeny < 50) {
          this.isValid9 = true;
          this.someMasodikZH3 = this.service.GenetikusAlgoritmus();
          var rnd1 = Math.floor((Math.random() * this.service.GenetikusAlgoritmus().length));
          this.masodikzh9 = this.someMasodikZH3[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.masodikzh9.pontszam);
          myTudasfel[i] = rnd1;
        }


        if (this.maxeredmeny < 50) {
          this.isValid10 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.GenetikusAlgoritmus().length));
            this.masodikzh10 = this.someMasodikZH3[rnd1];
            console.log(rnd1);
            myTudasfel[i + 1] = rnd1;
          } while (myTudasfel[i] == myTudasfel[i + 1]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.masodikzh10.pontszam);
        }



        //5. rész
        if (this.maxeredmeny < 50) {
          this.isValid11 = true;
          this.someMasodikZH4 = this.service.Emberiidegrendszereslatas();
          var rnd1 = Math.floor((Math.random() * this.service.Emberiidegrendszereslatas().length));
          this.masodikzh11 = this.someMasodikZH4[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.masodikzh11.pontszam);
          myEmberiidegrendszereslatas[i] = rnd1;
          console.log("Zh12: "+this.maxeredmeny);
        }


        if (this.maxeredmeny < 50) {
          this.isValid12 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.Emberiidegrendszereslatas().length));
            this.masodikzh12 = this.someMasodikZH4[rnd1];
            console.log(rnd1);
            myEmberiidegrendszereslatas[i + 1] = rnd1;

          } while (myEmberiidegrendszereslatas[i] == myEmberiidegrendszereslatas[i + 1]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.masodikzh12.pontszam);
          console.log("Zh13: "+this.maxeredmeny);
        }


        if (this.maxeredmeny < 50) {
          this.isValid13 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.Emberiidegrendszereslatas().length));
            this.masodikzh13 = this.someMasodikZH4[rnd1];
            myEmberiidegrendszereslatas[i + 2] = rnd1;

          } while (myEmberiidegrendszereslatas[i + 1] == myEmberiidegrendszereslatas[i + 2] || myEmberiidegrendszereslatas[i] == myEmberiidegrendszereslatas[i + 1] || myEmberiidegrendszereslatas[i] == myEmberiidegrendszereslatas[i + 2]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.masodikzh13.pontszam);
          console.log("Zh14: "+this.maxeredmeny);
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
