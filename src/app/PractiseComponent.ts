import { Component, OnInit } from '@angular/core';
import { PractiseServiceComponent } from './service';


@Component({
    selector: 'app-practisecomponent',
    templateUrl: './practise.component.html'
    // styleUrls: ['../asdasd/asdasd']
})



export class PractiseComponent implements OnInit {

    someElsoZH: {};
    someElsoZH1: {};
    someElsoZH2: {};
    someElsoZH3: {};
    someElsoZH4: {};

    someMasodikZH1: {};
    someMasodikZH2: {};
    someMasodikZH3: {};
    someMasodikZH4: {};
    someMasodikZH5: {};

    someaAlpotVizsga1: {};

    public maxeredmeny;
    private pmax;

    //I. ZH eredményei
    public elsozh;elsozh1;elsozh2;elsozh3;elsozh4;elsozh5;elsozh6;elsozh7;elsozh8;elsozh9;elsozh10;elsozh11;elsozh12;elsozh13: {
      id: any;
      pontszam: any;
      resz: any;
    };

    //2. ZH megoldásai beletéve
    public masodikzh1: {
        pontszam: any;
        resz: any;
    };

    public masodikzh2: {
      pontszam: any;
      resz: any;
    };

    public masodikzh3: {
      pontszam: any;
      resz: any;
    };

    public masodikzh4: {
      pontszam: any;
      resz: any;
    };

    public masodikzh5: {
      pontszam: any;
      resz: any;
    };

  public alpotvizsga1: {
    pontszam: any;
    resz: any;
  };


  Osszes: {};

  public eredmeny;
    constructor(
        private service: PractiseServiceComponent

    ) { }


    ngOnInit() {
      this.maxeredmeny = 0;
      this.pmax = 12;
      var myEI = new Array(12);
      var myGI = new Array(12);
      var myMIter = new Array(12);
      var myTudasfel = new Array(12);
      var i=0;
      var feltetel = 0;

      while (feltetel == 0) {
      if(this.maxeredmeny<59) {
        console.log("egyszer elindulok");
        //1. csoport kérdései
        if (this.maxeredmeny < 60) {
          this.someElsoZH = this.service.EmberiIntelligencia();
          var rnd1 = Math.floor((Math.random() * 5));
          this.elsozh = this.someElsoZH[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh.pontszam);
          myEI[i] = rnd1;
        }


        if (this.maxeredmeny < 60) {
          do {
            rnd1 = Math.floor((Math.random() * 5));
            this.elsozh1 = this.someElsoZH[rnd1];
            this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh1.pontszam);
            console.log(rnd1);
            myEI[i + 1] = rnd1;

          } while (myEI[i] == myEI[i + 1]);
        }


        if (this.maxeredmeny < 60) {
          do {
            rnd1 = Math.floor((Math.random() * 5));
            this.elsozh2 = this.someElsoZH[rnd1];
            myEI[i + 2] = rnd1;

          } while (myEI[i + 1] == myEI[i + 2] || myEI[i] == myEI[i + 1] || myEI[i] == myEI[i + 2]);

          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh2.pontszam);
        }

        //2. feladat gépi intelligencia
        if (this.maxeredmeny < 60) {
          this.someElsoZH1 = this.service.GepiIntelligencia();
          var rnd1 = Math.floor((Math.random() * 5));
          this.elsozh3 = this.someElsoZH1[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh3.pontszam);
          myGI[i] = rnd1;
        }


        if (this.maxeredmeny < 60) {
          do {
            rnd1 = Math.floor((Math.random() * 5));
            this.elsozh4 = this.someElsoZH1[rnd1];
            console.log(rnd1);
            myGI[i + 1] = rnd1;

          } while (myGI[i] == myGI[i + 1]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh4.pontszam);
        }


        if (this.maxeredmeny < 60) {
          do {
            rnd1 = Math.floor((Math.random() * 5));
            this.elsozh5 = this.someElsoZH1[rnd1];
            myGI[i + 2] = rnd1;

          } while (myGI[i + 1] == myGI[i + 2] || myGI[i] == myGI[i + 1] || myGI[i] == myGI[i + 2]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh5.pontszam);
          console.log("max eredmeny" + this.maxeredmeny);
        }

        //3 rész MI területek
        if (this.maxeredmeny < 60) {
          this.someElsoZH2 = this.service.Miteruletek();
          var rnd1 = Math.floor((Math.random() * 5));
          this.elsozh6 = this.someElsoZH2[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh6.pontszam);
          myMIter[i] = rnd1;
        }


        if (this.maxeredmeny < 60) {
          do {
            rnd1 = Math.floor((Math.random() * 5));
            this.elsozh7 = this.someElsoZH2[rnd1];
            console.log(rnd1);
            myMIter[i + 1] = rnd1;

          } while (myMIter[i] == myMIter[i + 1]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh7.pontszam);
        }


        if (this.maxeredmeny < 60) {
          do {
            rnd1 = Math.floor((Math.random() * 5));
            this.elsozh8 = this.someElsoZH2[rnd1];
            myMIter[i + 2] = rnd1;

          } while (myMIter[i + 1] == myMIter[i + 2] || myMIter[i] == myMIter[i + 1] || myMIter[i] == myMIter[i + 2]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh8.pontszam);
          console.log("max eredmeny" + this.maxeredmeny);
        }


        //4. rész Tudasfeldolgozas
        if (this.maxeredmeny < 60) {
          this.someElsoZH3 = this.service.Tudasfeldolgozas();
          var rnd1 = Math.floor((Math.random() * 5));
          this.elsozh9 = this.someElsoZH3[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh9.pontszam);
          myTudasfel[i] = rnd1;
        }


        if (this.maxeredmeny < 60) {
          do {
            rnd1 = Math.floor((Math.random() * 5));
            this.elsozh10 = this.someElsoZH3[rnd1];
            console.log(rnd1);
            myTudasfel[i + 1] = rnd1;

          } while (myTudasfel[i] == myTudasfel[i + 1]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh10.pontszam);
        }



        //5. rész
        if (this.maxeredmeny < 60) {
          this.someElsoZH4 = this.service.Miteruletek();
          var rnd1 = Math.floor((Math.random() * 5));
          this.elsozh11 = this.someElsoZH4[rnd1];
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh11.pontszam);
          myMIter[i] = rnd1;
        }


        if (this.maxeredmeny < 60) {
          do {
            rnd1 = Math.floor((Math.random() * 5));
            this.elsozh12 = this.someElsoZH4[rnd1];
            console.log(rnd1);
            myMIter[i + 1] = rnd1;

          } while (myMIter[i] == myMIter[i + 1]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh12.pontszam);
        }


        if (this.maxeredmeny < 60) {
          do {
            rnd1 = Math.floor((Math.random() * 5));
            this.elsozh13 = this.someElsoZH4[rnd1];
            myMIter[i + 2] = rnd1;

          } while (myMIter[i + 1] == myMIter[i + 2] || myMIter[i] == myMIter[i + 1] || myMIter[i] == myMIter[i + 2]);
          this.maxeredmeny = this.maxeredmeny + parseInt(this.elsozh13.pontszam);
          console.log("max eredmeny" + this.maxeredmeny);
        }

        if(this.maxeredmeny == 60)  {
          feltetel =1;
        } else {
          this.maxeredmeny = 0;
        }
      }
      }
    }
}

/*
        //2. csoport kérdései
        this.someElsoZH1 = this.service.GepiIntelligencia();
        var rnd2 = Math.floor((Math.random()*5));
        this.elsozh1 = this.someElsoZH1[rnd2];
        this.maxeredmeny = this.maxeredmeny + this.elsozh1.pontszam;
        console.log("eredmeny   "+ this.maxeredmeny);

        //3. csoport kérdései
        this.someElsoZH2 = this.service.Miteruletek();
        var rnd3 = Math.floor((Math.random()*5));
        this.elsozh2 = this.someElsoZH2[rnd3];
        this.maxeredmeny = this.maxeredmeny + this.elsozh2.pontszam;
        console.log("eredmeny   "+ this.maxeredmeny);

        //4. csoport kérdései
        this.someElsoZH3 = this.service.Tudasfeldolgozas();
        var rnd4 = Math.floor((Math.random()*5));
        this.elsozh3 = this.someElsoZH3[rnd4];
        this.maxeredmeny = this.maxeredmeny + this.elsozh3.pontszam;
        console.log("eredmeny   "+ this.maxeredmeny);

        //5. csoport kérdései
        this.someElsoZH4 = this.service.Logika();
        var rnd5 = Math.floor((Math.random()*5));
        this.elsozh4 = this.someElsoZH4[rnd5];
        this.maxeredmeny = this.maxeredmeny + this.elsozh4.pontszam;
        console.log("eredmeny   "+ this.maxeredmeny);

        //2. ZH 1. csoport
        this.someMasodikZH1 = this.service.Prolog();
        var rnd = Math.floor((Math.random()*5));
        this.masodikzh1 = this.someMasodikZH1[rnd];
        this.maxeredmeny = this.maxeredmeny - this.masodikzh1.pontszam;
        console.log("eredmeny   "+ this.maxeredmeny);

        //2. ZH 2. csoport
        this.someMasodikZH2 = this.service.Szemantikushalok();
        var rnd = Math.floor((Math.random()*5));
        this.masodikzh2 = this.someMasodikZH2[rnd];
        this.maxeredmeny = this.maxeredmeny - this.masodikzh2.pontszam;
        console.log("eredmeny   "+ this.maxeredmeny);

        //2. ZH 3. csoport
        this.someMasodikZH3 = this.service.Kereses();
        var rnd = Math.floor((Math.random()*5));
        this.masodikzh3 = this.someMasodikZH3[rnd];
        this.maxeredmeny = this.maxeredmeny - this.masodikzh3.pontszam;
        console.log("eredmeny   "+ this.maxeredmeny);

        //2. ZH 4. csoport
        this.someMasodikZH4 = this.service.GenetikusAlgoritmus();
        var rnd = Math.floor((Math.random()*2));
        this.masodikzh4 = this.someMasodikZH4[rnd];
        this.maxeredmeny = this.maxeredmeny - this.masodikzh4.pontszam;
        console.log("eredmeny   "+ this.maxeredmeny);

        //2. ZH 5. csoport
        this.someMasodikZH5 = this.service.Emberiidegrendszereslatas();
        var rnd = Math.floor((Math.random()*5));
        this.masodikzh5 = this.someMasodikZH5[rnd];
        this.maxeredmeny = this.maxeredmeny - this.masodikzh5.pontszam;
        console.log("eredmeny   "+ this.maxeredmeny);*/


