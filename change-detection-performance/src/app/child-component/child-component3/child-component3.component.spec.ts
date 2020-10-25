import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent3Component } from './child-component3.component';

describe('ChildComponent3Component', () => {
  let component: ChildComponent3Component;
  let fixture: ComponentFixture<ChildComponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
