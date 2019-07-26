import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUpdateFormComponent } from './data-update-form.component';

describe('DataUpdateFormComponent', () => {
  let component: DataUpdateFormComponent;
  let fixture: ComponentFixture<DataUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
