import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCsvComponentent } from './uploadcsv.component';

describe('UploadcsvComponent', () => {
  let component: UploadCsvComponentent;
  let fixture: ComponentFixture<UploadCsvComponentent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCsvComponentent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCsvComponentent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
