import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceManagmentComponent } from './device-managment.component';

describe('DeviceManagmentComponent', () => {
  let component: DeviceManagmentComponent;
  let fixture: ComponentFixture<DeviceManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
