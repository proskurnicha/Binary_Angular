import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStewardessComponent } from './detail-stewardess.component';

describe('DetailStewardessComponent', () => {
  let component: DetailStewardessComponent;
  let fixture: ComponentFixture<DetailStewardessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailStewardessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStewardessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
