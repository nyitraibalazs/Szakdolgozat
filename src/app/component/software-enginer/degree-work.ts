import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-degree-component',
  templateUrl: './degree-work.html',
})

export class degreeWorkComponent {
  getUrl() {
    return "url('http://ujweboldalfejlesztes.hu/image/degree/informacios_szolg.png')";
  }
  getMobile() {
    return "url('http://ujweboldalfejlesztes.hu/image/degree/mobilaps.jpg')";
  }
}
