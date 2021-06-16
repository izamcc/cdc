import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class SvService {

  constructor(private storage: Storage) { this.init() }
    updateSV(key: string, value: any){
      return this.storage.set(key, value)
    }
    getSV(key: string){
      return this.storage.get(key)
    }

  async init(){
    await this.storage.create();
  }
}
