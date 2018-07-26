import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDepartureComponent } from './detail-departure.component';

describe('DetailDepartureComponent', () => {
  let component: DetailDepartureComponent;
  let fixture: ComponentFixture<DetailDepartureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDepartureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
