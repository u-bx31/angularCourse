import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent  {

  title = 'angular-prj1';

  //---// when we use ng-template use viewContainerRef
  // @ViewChild('user',{read : ViewContainerRef}) vsr!:ViewContainerRef;
  // ngAfterViewInit(): void {
  //   const compRef = this.vsr.createComponent(RoomsComponent)

  //   //we can acce to room properties
  //   // compRef.instance.numberRooms = 20
  // }

  //---//div ref;
  // @ViewChild('user' , {static : true}) user!:ElementRef;

  // ngOnInit(): void {
  //   this.user.nativeElement.innerText = 'ref Template using div'
  // }

}
