import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartisansComponent } from './partisans.component';

describe('PartisansComponent', () => {
  let component: PartisansComponent;
  let fixture: ComponentFixture<PartisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartisansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
