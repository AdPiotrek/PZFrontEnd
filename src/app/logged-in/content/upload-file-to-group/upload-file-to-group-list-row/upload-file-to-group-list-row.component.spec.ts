import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileToGroupListRowComponent } from './upload-file-to-group-list-row.component';

describe('UploadFileToGroupListRowComponent', () => {
  let component: UploadFileToGroupListRowComponent;
  let fixture: ComponentFixture<UploadFileToGroupListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileToGroupListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileToGroupListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
