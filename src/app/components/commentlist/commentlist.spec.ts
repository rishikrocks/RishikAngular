import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commentlist } from './commentlist';

describe('Commentlist', () => {
  let component: Commentlist;
  let fixture: ComponentFixture<Commentlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Commentlist],
    }).compileComponents();

    fixture = TestBed.createComponent(Commentlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
