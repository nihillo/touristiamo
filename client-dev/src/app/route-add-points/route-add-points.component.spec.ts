import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAddPointsComponent } from './route-add-points.component';

describe('RouteAddPointsComponent', () => {
  let component: RouteAddPointsComponent;
  let fixture: ComponentFixture<RouteAddPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteAddPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAddPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
