import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoizationComponent } from './memoization.component';

describe('MemoizationComponent', () => {
  let component: MemoizationComponent;
  let fixture: ComponentFixture<MemoizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
