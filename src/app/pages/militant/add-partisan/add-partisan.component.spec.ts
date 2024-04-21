import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartisanComponent } from './add-partisan.component';

describe('AddPartisanComponent', () => {
  let component: AddPartisanComponent;
  let fixture: ComponentFixture<AddPartisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPartisanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPartisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
