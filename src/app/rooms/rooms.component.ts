import {
  AfterViewInit,
  Component,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';
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
  @ViewChildren(HeaderComponent)
  headrChildrenComponent!: QueryList<HeaderComponent>;

  constructor(private roomService: RoomsService) {}

  stream = new Observable((observe) => {
    observe.next('user1');
    observe.next('user2');
    observe.complete();
  });

  //ngOnInit LifeCycleHook
  ngOnInit() {
    this.stream.subscribe({
      next: (u) => console.log(u),
      complete: () => console.log('Complete'),
    });
    this.roomService.getRooms().subscribe((rooms) => {
      this.roomList = rooms;
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
    // if (this.stateDiv == 'hide') {
    //   return;
    // } else {
    //   this.numberRooms = this.numberRooms + 1;
    // }

    const room : RoomList = {
      roomType : 'Suit',
      price : 1300,
      rating : 5,
      checkinTime : new Date('03-13-2021'),
      checkoutTime : new Date('03-14-2021')
    }

    this.roomService.addRooms(room).subscribe((room)=>{
      this.roomList = room as [];
    })
  };
  toggleEdit = ()=>{
    const room : RoomList = {
      roomNumber : '488d3b9c-8bfb-4cdb-bfc0-f955d751e291',
      roomType : 'Suit',
      price : 100,
      rating : 2.3,
      checkinTime : new Date('03-13-2021'),
      checkoutTime : new Date('03-14-2021')
    }

    this.roomService.editRooms(room).subscribe((room)=>{
      this.roomList = room;
    })
  }
  toggleHide = () => {
    this.hideRooms = !this.hideRooms;
    // if (this.hideRooms == true) {
    //   this.stateDiv = 'hide';
    // } else {
    //   this.stateDiv = 'show';
    // }
  };
  handleDelete = (id: string) => {
    this.roomService.deleteRooms(id).subscribe((room)=>{
      this.roomList = room;
    })

  };
  selectRoom = (room: RoomList) => {
    this.selectedRoom = room;
  };
}
