import { Component, OnInit } from '@angular/core';
import { PractiseServiceComponent } from './service';


@Component({
    selector: 'app-practisecomponent',
    templateUrl: './practise.component.html',
    styleUrls: ['./practise.component.scss']
})

export class PractiseComponent implements OnInit {

    someElsoZH: {};
    someElsoZH1: {};
    someElsoZH2: {};
    someElsoZH3: {};
    someElsoZH4: {};


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
    public elsozh;elsozh1;elsozh2;elsozh3;elsozh4;elsozh5;elsozh6;elsozh7;elsozh8;elsozh9;elsozh10;elsozh11;elsozh12;elsozh13;

  public eredmeny;
    constructor(
        private service: PractiseServiceComponent

    ) { }


    ngOnInit() {
      this.pmax = 12;
      var myEI = new Array(12);
      var myGI = new Array(12);
      var myMIter = new Array(12);
      var myTudasfel = new Array(12);
      var myLogika = new Array(12);
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
          this.someElsoZH = this.service.EmberiIntelligencia();
          var rnd1 = Math.floor((Math.random() * this.service.EmberiIntelligencia().length));
          this.elsozh = this.someElsoZH[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh.pontszam);
          myEI[i] = rnd1;
        }


        if (this.maxeredmeny < 50) {
          do {
            this.isValid1 = true;
            rnd1 = Math.floor((Math.random() * this.service.EmberiIntelligencia().length));
            this.elsozh1 = this.someElsoZH[rnd1];
            this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh1.pontszam);
            console.log(rnd1);
            myEI[i + 1] = rnd1;

          } while (myEI[i] == myEI[i + 1]);
        }

        if (this.maxeredmeny < 50) {
          this.isValid2 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.EmberiIntelligencia().length));
            this.elsozh2 = this.someElsoZH[rnd1];
            myEI[i + 2] = rnd1;

          } while (myEI[i + 1] == myEI[i + 2] || myEI[i] == myEI[i + 1] || myEI[i] == myEI[i + 2]);

          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh2.pontszam);
        }

        //2. feladat gépi intelligencia
        if (this.maxeredmeny < 50) {
          this.isValid3 = true;
          this.someElsoZH1 = this.service.GepiIntelligencia();
          var rnd1 = Math.floor((Math.random() * this.service.GepiIntelligencia().length));
          this.elsozh3 = this.someElsoZH1[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh3.pontszam);
          myGI[i] = rnd1;
        }


        if (this.maxeredmeny < 50) {
          this.isValid4 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.GepiIntelligencia().length));
            this.elsozh4 = this.someElsoZH1[rnd1];
            console.log(rnd1);
            myGI[i + 1] = rnd1;

          } while (myGI[i] == myGI[i + 1]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh4.pontszam);
        }


        if (this.maxeredmeny < 50) {
          this.isValid5 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.GepiIntelligencia().length));
            this.elsozh5 = this.someElsoZH1[rnd1];
            myGI[i + 2] = rnd1;

          } while (myGI[i + 1] == myGI[i + 2] || myGI[i] == myGI[i + 1] || myGI[i] == myGI[i + 2]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh5.pontszam);
        }

        //3 rész MI területek
        if (this.maxeredmeny < 50) {
          this.isValid6 = true;
          this.someElsoZH2 = this.service.Miteruletek();
          var rnd1 = Math.floor((Math.random() * this.service.Miteruletek().length));
          this.elsozh6 = this.someElsoZH2[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh6.pontszam);
          myMIter[i] = rnd1;
        }


        if (this.maxeredmeny < 50) {
          this.isValid7 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.Miteruletek().length));
            this.elsozh7 = this.someElsoZH2[rnd1];
            console.log(rnd1);
            myMIter[i + 1] = rnd1;

          } while (myMIter[i] == myMIter[i + 1]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh7.pontszam);
        }


        if (this.maxeredmeny < 50) {
          this.isValid8 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.Miteruletek().length));
            this.elsozh8 = this.someElsoZH2[rnd1];
            myMIter[i + 2] = rnd1;
          } while (myMIter[i + 1] == myMIter[i + 2] || myMIter[i] == myMIter[i + 1] || myMIter[i] == myMIter[i + 2]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh8.pontszam);
        }


        //4. rész Tudasfeldolgozas
        if (this.maxeredmeny < 50) {
          this.isValid9 = true;
          this.someElsoZH3 = this.service.Tudasfeldolgozas();
          var rnd1 = Math.floor((Math.random() * this.service.Tudasfeldolgozas().length));
          this.elsozh9 = this.someElsoZH3[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh9.pontszam);
          myTudasfel[i] = rnd1;
        }


        if (this.maxeredmeny < 50) {
          this.isValid10 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.Tudasfeldolgozas().length));
            this.elsozh10 = this.someElsoZH3[rnd1];
            console.log(rnd1);
            myTudasfel[i + 1] = rnd1;
          } while (myTudasfel[i] == myTudasfel[i + 1]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh10.pontszam);
        }



        //5. rész
        if (this.maxeredmeny < 50) {
          this.isValid11 = true;
          this.someElsoZH4 = this.service.Logika();
          var rnd1 = Math.floor((Math.random() * this.service.Logika().length));
          this.elsozh11 = this.someElsoZH4[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh11.pontszam);
          myLogika[i] = rnd1;
          console.log("Zh12: "+this.maxeredmeny);
        }


        if (this.maxeredmeny < 50) {
          this.isValid12 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.Logika().length));
            this.elsozh12 = this.someElsoZH4[rnd1];
            console.log(rnd1);
            myLogika[i + 1] = rnd1;

          } while (myLogika[i] == myLogika[i + 1]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh12.pontszam);
          console.log("Zh13: "+this.maxeredmeny);
        }


        if (this.maxeredmeny < 50) {
          this.isValid13 = true;
          do {
            rnd1 = Math.floor((Math.random() * this.service.Logika().length));
            this.elsozh13 = this.someElsoZH4[rnd1];
            myLogika[i + 2] = rnd1;

          } while (myLogika[i + 1] == myLogika[i + 2] || myLogika[i] == myLogika[i + 1] || myLogika[i] == myLogika[i + 2]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh13.pontszam);
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
