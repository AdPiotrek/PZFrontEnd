import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAddingComponent } from './device-adding.component';

describe('DeviceAddingComponent', () => {
  let component: DeviceAddingComponent;
  let fixture: ComponentFixture<DeviceAddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceAddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
