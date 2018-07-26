import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCrewComponent } from './detail-crew.component';

describe('DetailCrewComponent', () => {
  let component: DetailCrewComponent;
  let fixture: ComponentFixture<DetailCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
