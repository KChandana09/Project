import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackjourneyComponent } from './trackjourney.component';

describe('TrackjourneyComponent', () => {
  let component: TrackjourneyComponent;
  let fixture: ComponentFixture<TrackjourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackjourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackjourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
