import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectoralOfficeComponent } from './electoral-office.component';

describe('ElectoralOfficeComponent', () => {
  let component: ElectoralOfficeComponent;
  let fixture: ComponentFixture<ElectoralOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectoralOfficeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectoralOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
