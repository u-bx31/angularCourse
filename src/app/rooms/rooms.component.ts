import { AfterViewInit, Component, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements AfterViewInit {
  numberRooms: number = 0;
  hideRooms: boolean = true;
  stateDiv: string = 'show';

  rooms: Room = {
    bookedRooms: 10,
    avaibleRooms: 2,
    totalRooms: 100,
  };
  selectedRoom!: RoomList;

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headrComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headrChildrenComponent!: QueryList<HeaderComponent>;

  constructor(private roomService: RoomsService){}
  //ngOnInit LifeCycleHook
  ngOnInit() {
    this.roomService.getRooms().subscribe( rooms=>{
      console.log('rooms',rooms);
      this.roomList = rooms ;
    }); 
  }

  ngAfterViewInit(): void {
    try {
      this.headrComponent.Title = 'Hotel Rooms';
      this.headrChildrenComponent.last.Title = 'last children | Footer';
    } catch {
      throw new Error();
    }
  }

  toggleCount = () => {
    if (this.stateDiv == 'hide') {
      return;
    } else {
      this.numberRooms = this.numberRooms + 1;
    }
  };
  toggleHide = () => {
    this.hideRooms = !this.hideRooms;
    // if (this.hideRooms == true) {
    //   this.stateDiv = 'hide';
    // } else {
    //   this.stateDiv = 'show';
    // }
  };
  handleDelete = (id: String) => {
    return (this.roomList = this.roomList.filter((room) => room.roomNumber !== id));
  };
  selectRoom = (room: RoomList) => {
    this.selectedRoom = room;
  };

}
