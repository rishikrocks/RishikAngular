import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directivesassignment } from './directivesassignment';

describe('Directivesassignment', () => {
  let component: Directivesassignment;
  let fixture: ComponentFixture<Directivesassignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Directivesassignment],
    }).compileComponents();

    fixture = TestBed.createComponent(Directivesassignment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
