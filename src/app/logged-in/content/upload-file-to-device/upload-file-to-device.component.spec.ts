import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileToDeviceComponent } from './upload-file-to-device.component';

describe('UploadFileToDeviceComponent', () => {
  let component: UploadFileToDeviceComponent;
  let fixture: ComponentFixture<UploadFileToDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileToDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileToDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
