import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE } from './AppConfig/appConfig.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { RequestInterceptor } from './request.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Page404Component } from './page404/page404.component';
import { BookingRoomsComponent } from './rooms/booking-rooms/booking-rooms.component';
import { AddRoomComponent } from './rooms/Crud/add-room/add-room.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './Directives/hover.directive';
import { EmailValidaterDirective } from './Directives/email-validater.directive';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    NavBarComponent,
    Page404Component,
    BookingRoomsComponent,
    AddRoomComponent,
    IndexComponent,
    LoginComponent,
    HoverDirective,
    EmailValidaterDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule,HttpClientModule, 
    BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, 
    MatSidenavModule, MatIconModule, MatListModule ,FormsModule],
  providers: [
    {
      provide: APP_SERVICE,
      useValue: APP_CONFIG,
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : RequestInterceptor,
      multi : true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
