import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersItemComponent } from './customers-item.component';

describe('CustomersItemComponent', () => {
  let component: CustomersItemComponent;
  let fixture: ComponentFixture<CustomersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomersItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
