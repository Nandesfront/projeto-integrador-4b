import { ComponentFixture, TestBed } from '@angular/core/testing';

import { soma } from './soma';

describe('Soma', () => {
  let component: soma;
  let fixture: ComponentFixture<soma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [soma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(soma);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
