import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header-component',
  templateUrl: './header.html',
})

export class HeaderComponent {
  getUrl() {
    return "url('http://ujweboldalfejlesztes.hu/image/banner.png')";
  }
}
