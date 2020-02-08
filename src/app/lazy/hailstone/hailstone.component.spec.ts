import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HailstoneComponent } from './hailstone.component';

describe('HailstoneComponent', () => {
  let component: HailstoneComponent;
  let fixture: ComponentFixture<HailstoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HailstoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HailstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
