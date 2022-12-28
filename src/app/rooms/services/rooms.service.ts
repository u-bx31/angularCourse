import { Inject, inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE } from 'src/app/AppConfig/appConfig.service';
import { AppConfig } from 'src/app/AppConfig/appConfig.interface';
import { LocalStorageToken } from 'src/localStorage.token';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(@Inject(APP_SERVICE) private config:AppConfig,
  @Inject(LocalStorageToken) private localStorage:Storage,private httpClient:HttpClient) { 
    console.log('rooms Inistializde..')
    console.log('valueProvider :',this.config.apiEndPoint);
    this.localStorage.setItem('name','helloWOrld')
  }

  roomList: RoomList[] = [];

  getRooms(){
    return this.httpClient.get<RoomList[]>('/api/rooms');
  }
}
