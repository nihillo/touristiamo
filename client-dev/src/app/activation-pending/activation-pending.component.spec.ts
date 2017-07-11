import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationPendingComponent } from './activation-pending.component';

describe('ActivationPendingComponent', () => {
  let component: ActivationPendingComponent;
  let fixture: ComponentFixture<ActivationPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
