import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileToGroupComponent } from './upload-file-to-group.component';

describe('UploadFileToGroupComponent', () => {
  let component: UploadFileToGroupComponent;
  let fixture: ComponentFixture<UploadFileToGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileToGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileToGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
