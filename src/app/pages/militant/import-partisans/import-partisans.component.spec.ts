import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportPartisansComponent } from './import-partisans.component';

describe('ImportPartisansComponent', () => {
  let component: ImportPartisansComponent;
  let fixture: ComponentFixture<ImportPartisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportPartisansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportPartisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
