import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex-component',
  templateUrl: './complex.html',
})

export class complexComponent {
  getMobile() {
    return "url('http://ujweboldalfejlesztes.hu/image/degree/mobilaps.jpg')";
  }

  getUnity() {
    return "url('http://ujweboldalfejlesztes.hu/image/complex/unity.png')";
  }


}
