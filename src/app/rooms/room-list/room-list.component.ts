import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnChanges,OnDestroy {

  //ngOnchanges LifieCycle Hook;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('List-Changes :',changes);
  }

  //componentCommuication 
  @Input() rooms : RoomList[] =[];
  @Output() selectedRoom  = new EventEmitter<RoomList>();
  @Output() handleDeleted  = new EventEmitter<String>();

  selectRoom = (room : RoomList)=>{
    this.selectedRoom.emit(room);
  }

  handleDelete = (id : String)=>{
    this.handleDeleted.emit(id);
  }


  ngOnDestroy(): void {
    console.log('room List on destroys Called');
  }

}
