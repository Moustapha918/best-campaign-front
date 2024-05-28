import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindElectorInOfficeComponent } from './find-elector-in-office.component';

describe('FindElectorInOfficeComponent', () => {
  let component: FindElectorInOfficeComponent;
  let fixture: ComponentFixture<FindElectorInOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindElectorInOfficeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindElectorInOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
