import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouselocationComponent } from './houselocation.component';

describe('HouselocationComponent', () => {
  let component: HouselocationComponent;
  let fixture: ComponentFixture<HouselocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouselocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouselocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
