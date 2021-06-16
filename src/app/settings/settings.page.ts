import { Router } from '@angular/router';
import { SvService } from './../sv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public SvService: SvService, public router: Router) { this.preload()}
  ICR;
  ISF;
  TBS;

  ngOnInit() {
  }

  saveSV(){
    this.SvService.updateSV('icr',this.ICR).then(()=>{
      return this.SvService.updateSV('isf',this.ISF);

     }).then(()=>{
       return     this.SvService.updateSV('tbs',this.TBS);

     }).then(()=>{

    this.preload();
    this.router.navigate(['/main'])

     })
  }
  async preload(){
    // console.log("!!!")
    // console.log(this.ICR,this.ISF,this.TBS,'=>1');
    this.ICR = await this.SvService.getSV('icr');
    this.ISF = await this.SvService.getSV('isf');
    this.TBS = await this.SvService.getSV('tbs');
    // console.log(this.ICR,this.ISF,this.TBS,'=>2');
  }
  saveSV2(){
    console.log(this.ICR);
    console.log(this.ISF);
    console.log(this.TBS);
  }

}
