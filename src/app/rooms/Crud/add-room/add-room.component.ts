import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../../rooms';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss'],
})
export class AddRoomComponent {
  room: RoomList = {
    roomType: '',
    price: 0,
    rating: 0,
    checkinTime: new Date(),
    checkoutTime: new Date(),
  };
  valid: boolean = true;

  constructor(private roomService: RoomsService) {}

  addRoom(roomForm: NgForm) {
    if (roomForm.invalid) {
      this.valid = false;
    } else {
      this.roomService.addRooms(this.room).subscribe((room) => alert('succes'));
      roomForm.resetForm({
        roomType: '',
        price: 0,
        rating: 0,
        checkinTime: new Date(),
        checkoutTime: new Date(),
      });
    }
  }
}
