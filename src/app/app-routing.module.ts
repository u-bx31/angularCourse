import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { BookingRoomsComponent } from './rooms/booking-rooms/booking-rooms.component';
import { AddRoomComponent } from './rooms/Crud/add-room/add-room.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [

  { path: 'index', component: IndexComponent , children : [
    { path: 'employee', component: EmployeeComponent },
    { path: 'rooms', component: RoomsComponent, children :[
      { path: ':id', component: BookingRoomsComponent },
    ] },
    
    { path: 'rooms?add', component: AddRoomComponent },
    { path: '', redirectTo: '/index/rooms', pathMatch: 'full' },
  ]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component : Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
