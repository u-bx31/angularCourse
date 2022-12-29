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

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule,HttpClientModule],
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
