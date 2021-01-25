import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCustomerComponent} from "./Components/customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./Components/customer/create-customer/create-customer.component";
import {UpdateCustomerComponent} from "./Components/customer/update-customer/update-customer.component";

const routes: Routes = [
  {path: "", component: ListCustomerComponent},
  {path: "customers", component: ListCustomerComponent},
  {path: "customers/edit/:id", component: UpdateCustomerComponent},
  {path: "add", component: CreateCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
