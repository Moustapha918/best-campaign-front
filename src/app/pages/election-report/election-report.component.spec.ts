import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionReportComponent } from './election-report.component';

describe('ElectionReportComponent', () => {
  let component: ElectionReportComponent;
  let fixture: ComponentFixture<ElectionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
