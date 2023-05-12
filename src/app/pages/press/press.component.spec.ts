import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressComponent } from './press.component';

describe('PressComponent', () => {
  let component: PressComponent;
  let fixture: ComponentFixture<PressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
