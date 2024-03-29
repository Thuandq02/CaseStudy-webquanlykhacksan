import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCustomerComponent} from "./Components/customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./Components/customer/create-customer/create-customer.component";
import {UpdateCustomerComponent} from "./Components/customer/update-customer/update-customer.component";
import {ListRoomComponent} from "./Components/room/list-room/list-room.component";
import {UpdateRoomComponent} from "./Components/room/update-room/update-room.component";
import {CreateRoomComponent} from "./Components/room/create-room/create-room.component";
import {DetailCustomerComponent} from "./Components/customer/detail-customer/detail-customer.component";
import {LoginComponent} from "./Components/login/login.component";

const routes: Routes = [
  {path: "", component: ListCustomerComponent},
  {path: "customers", component: ListCustomerComponent},
  {path: "customers/edit/:id", component: UpdateCustomerComponent},
  {path: "customers/add", component: CreateCustomerComponent},
  {path: 'details/:id', component: DetailCustomerComponent },
  {path: "rooms",component: ListRoomComponent},
  {path: "rooms/edit/:id",component:UpdateRoomComponent},
  {path: "rooms/add",component:CreateRoomComponent},
  {path: "login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
