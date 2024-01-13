import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingAttractionsComponent } from './visiting-attractions.component';

describe('VisitingAttractionsComponent', () => {
  let component: VisitingAttractionsComponent;
  let fixture: ComponentFixture<VisitingAttractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitingAttractionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitingAttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
