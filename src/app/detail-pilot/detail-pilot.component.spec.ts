import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPilotComponent } from './detail-pilot.component';

describe('DetailPilotComponent', () => {
  let component: DetailPilotComponent;
  let fixture: ComponentFixture<DetailPilotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPilotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
