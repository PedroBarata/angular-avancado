import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAComponentComponent } from './child-a-component.component';

describe('ChildAComponentComponent', () => {
  let component: ChildAComponentComponent;
  let fixture: ComponentFixture<ChildAComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildAComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
