import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamDestinationComponent } from './dream-destination.component';

describe('DreamDestinationComponent', () => {
  let component: DreamDestinationComponent;
  let fixture: ComponentFixture<DreamDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreamDestinationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DreamDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
