import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeparturesComponent } from './list-departures.component';

describe('ListDeparturesComponent', () => {
  let component: ListDeparturesComponent;
  let fixture: ComponentFixture<ListDeparturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDeparturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeparturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
