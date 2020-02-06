import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSpinnerComponent } from './common-spinner.component';

describe('CommonSpinnerComponent', () => {
  let component: CommonSpinnerComponent;
  let fixture: ComponentFixture<CommonSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
