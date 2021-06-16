import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavController, ModalController } from "@ionic/angular";
import { SvService } from '../sv.service';
// import { SettingsPage} from "../settings/settings.page";


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  constructor(private router: Router, public navCtrl: NavController, public modalCtrl: ModalController, public SvService: SvService) {

  }

  CBS = 0;
  MCA = 0;
  ICR;
  ISF;
  TBS;
  IFM;
  CD;
  TIpM;

  ngOnInit() {
  }

  async gotosettings() {
    // this.router.navigate(['/settings'])
    // let modal = await this.modalCtrl.create(SettingsPage);
    //  await modal.present();
    setTimeout(() => {
      this.router.navigate(['/settings'])
    }, 1000);  //1s
  }

  async preload(){
    this.ICR = await this.SvService.getSV('icr');
    this.ISF = await this.SvService.getSV('isf');
    this.TBS = await this.SvService.getSV('tbs');
  }

 async calculateunits(){
   await this.preload(); //preload stable variables
    if (this.ICR == null){this.ICR = 1;}
    this.IFM = this.MCA/this.ICR;
    this.CD =(this.CBS-this.TBS)/this.ISF;
    this.TIpM = this.IFM+this.CD
    this.TIpM = (Math.round(this.TIpM * 100)/100).toFixed(2);

  }
}
