import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAddingComponent } from './file-adding.component';

describe('FileAddingComponent', () => {
  let component: FileAddingComponent;
  let fixture: ComponentFixture<FileAddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileAddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
