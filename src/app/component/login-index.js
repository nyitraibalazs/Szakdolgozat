import {PractiseComponent} from "../PractiseComponent";

var elsoertek;
var masodikertek;
function elso(s1) {
  var s1 = document.getElementById(s1);
  elsoertek = s1.value;
}
function masodik(s2) {
  var s2 = document.getElementById(s2);
  masodikertek = s2.value;
}
function ertekei() {
  if(elsoertek === "Nappali") {
    if(masodikertek === "Programtervező-Informatikus") {
      location.href =  PractiseComponent;
    }
    else if (masodikertek === "Mérnökinformatikus") {
      document.write("nappali mernok");
    }
  }
  if(elsoertek === "Levelezo") {
    if(masodikertek === "Programtervező-Informatikus") {
      document.write("esti progterv");
    }
    else if (masodikertek === "Mérnökinformatikus") {
      document.write("esti mernok");
    }
  }
}
