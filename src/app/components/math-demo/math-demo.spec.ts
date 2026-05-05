import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathDemo } from './math-demo';

describe('MathDemo', () => {
  let component: MathDemo;
  let fixture: ComponentFixture<MathDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(MathDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
