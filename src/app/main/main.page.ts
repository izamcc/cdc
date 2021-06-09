import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  CBS;
  MCA;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotosettings() {
    this.router.navigate(['/settings'])
  }
  calculateunits(){
    console.log(this.CBS,this.MCA);
  }
}
