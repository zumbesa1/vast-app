import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VastTokenComponent } from './vast-token.component';

describe('VastTokenComponent', () => {
  let component: VastTokenComponent;
  let fixture: ComponentFixture<VastTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VastTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VastTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
