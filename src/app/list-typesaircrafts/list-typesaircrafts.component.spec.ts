import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypesaircraftsComponent } from './list-typesaircrafts.component';

describe('ListTypesaircraftsComponent', () => {
  let component: ListTypesaircraftsComponent;
  let fixture: ComponentFixture<ListTypesaircraftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypesaircraftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypesaircraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
