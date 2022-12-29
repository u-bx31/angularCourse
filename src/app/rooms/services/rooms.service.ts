import { Inject, inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE } from 'src/app/AppConfig/appConfig.service';
import { AppConfig } from 'src/app/AppConfig/appConfig.interface';
import { LocalStorageToken } from 'src/localStorage.token';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { catchError, map, of, shareReplay, Subject } from 'rxjs';

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

  error$ = new Subject<string>;
  getRooms$ = this.httpClient.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1),
    catchError((err)=>{
      console.log('error',err.message);
      return of([]);
    })
  );

  getRooms(){
    return this.httpClient.get<RoomList[]>('/api/rooms');
  }
  addRooms(room : RoomList){
    return this.httpClient.post('/api/rooms',room);
  }
  editRooms(room : RoomList){
    return this.httpClient.put<RoomList[]>(`/api/rooms/${room.roomNumber}`,room);
  }

  deleteRooms(id : string){
    return this.httpClient.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos(){
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress : true,
      }
    )
    return this.httpClient.request(request);
  }
}
