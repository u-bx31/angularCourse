import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit {
  
  @ContentChild(RoomsComponent) rooms !: RoomsComponent;
  
  // HERE WE CAN GET CHILD PROP
  ngAfterContentInit(): void {
    console.log('after Init',this.rooms)
  }
}
