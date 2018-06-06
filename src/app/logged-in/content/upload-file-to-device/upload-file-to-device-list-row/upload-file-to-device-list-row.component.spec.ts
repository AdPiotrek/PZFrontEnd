import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileToDeviceListRowComponent } from './upload-file-to-device-list-row.component';

describe('UploadFileToDeviceListRowComponent', () => {
  let component: UploadFileToDeviceListRowComponent;
  let fixture: ComponentFixture<UploadFileToDeviceListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileToDeviceListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileToDeviceListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
