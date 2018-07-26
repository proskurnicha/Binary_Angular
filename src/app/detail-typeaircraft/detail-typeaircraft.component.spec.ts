import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTypeaircraftComponent } from './detail-typeaircraft.component';

describe('DetailTypeaircraftComponent', () => {
  let component: DetailTypeaircraftComponent;
  let fixture: ComponentFixture<DetailTypeaircraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTypeaircraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTypeaircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
