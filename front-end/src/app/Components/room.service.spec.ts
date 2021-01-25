import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CreateCustomerComponent} from "./create-customer/create-customer.component";

import { RoomService } from './room.service';

describe('CreateCustomerComponent', () => {
  let component: CreateCustomerComponent;
  let fixture: ComponentFixture<CreateCustomerComponent>;

  beforeEach(async ()=>{
    await TestBed.configureTestingModule({
      declarations: [CreateCustomerComponent]
    })
      .compileComponents();
    }
  );
  beforeEach(() => {
    fixture=TestBed.createComponent(CreateCustomerComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
