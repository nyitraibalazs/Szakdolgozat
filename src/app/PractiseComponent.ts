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

    someAlpotVizsga1: {};

    public maxeredmeny;

    //I. ZH eredményei
    public elsozh: {
      pontszam: any;
    };
    public elsozh1: {
      pontszam: any;
    };
    public elsozh2:  {
      pontszam: any;
    };
    public elsozh3:  {
      pontszam: any;
    };
    public elsozh4:  {
      pontszam: any;
    };

    //2. ZH megoldásai beletéve
    public masodikzh1: {
        pontszam: any;
    };

    public masodikzh2: {
      pontszam: any;
    };

    public masodikzh3: {
      pontszam: any;
    };

    public masodikzh4: {
      pontszam: any;
    };

    public masodikzh5: {
      pontszam: any;
    };

  public alpotvizsga1: {
    pontszam: any;
  };

  public eredmeny;
    constructor(
        private service: PractiseServiceComponent

    ) { }

    ngOnInit() {
        this.maxeredmeny = 72;
        //1. csoport kérdései
        this.someElsoZH = this.service.EmberiIntelligencia();
        var rnd = Math.floor((Math.random()*5));
        this.elsozh = this.someElsoZH[rnd];
        this.maxeredmeny = this.maxeredmeny - this.elsozh.pontszam;
        console.log("eredmeny   "+ this.maxeredmeny);

        //2. csoport kérdései
        this.someElsoZH1 = this.service.GepiIntelligencia();
        var rnd = Math.floor((Math.random()*5));
        this.elsozh1 = this.someElsoZH1[rnd];
        this.maxeredmeny = this.maxeredmeny - this.elsozh1.pontszam;
        console.log("eredmeny   "+ this.maxeredmeny);

        //3. csoport kérdései
        this.someElsoZH2 = this.service.Miteruletek();
        var rnd = Math.floor((Math.random()*5));
        this.elsozh2 = this.someElsoZH2[rnd];
        this.maxeredmeny = this.maxeredmeny - this.elsozh2.pontszam;
        console.log("eredmeny   "+ this.maxeredmeny);

        //4. csoport kérdései
        this.someElsoZH3 = this.service.Tudasfeldolgozas();
        var rnd = Math.floor((Math.random()*5));
        this.elsozh3 = this.someElsoZH3[rnd];
        this.maxeredmeny = this.maxeredmeny - this.elsozh3.pontszam;
        console.log("eredmeny   "+ this.maxeredmeny);

        //5. csoport kérdései
        this.someElsoZH4 = this.service.Logika();
        var rnd = Math.floor((Math.random()*5));
        this.elsozh4 = this.someElsoZH4[rnd];
        this.maxeredmeny = this.maxeredmeny - this.elsozh4.pontszam;
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
        console.log("eredmeny   "+ this.maxeredmeny);
    }
}
