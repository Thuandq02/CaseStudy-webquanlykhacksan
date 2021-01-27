import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './Components/customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './Components/customer/list-customer/list-customer.component';
import { UpdateCustomerComponent } from './Components/customer/update-customer/update-customer.component';
import { ToastrModule } from 'ngx-toastr';

import { ListRoomComponent } from './Components/room/list-room/list-room.component';
import { UpdateRoomComponent } from './Components/room/update-room/update-room.component';
import { CreateRoomComponent } from "./Components/room/create-room/create-room.component";
import { DetailCustomerComponent } from './Components/customer/detail-customer/detail-customer.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/storage";


@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    UpdateCustomerComponent,
    CreateRoomComponent,
    ListRoomComponent,
    UpdateRoomComponent,
    DetailCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
