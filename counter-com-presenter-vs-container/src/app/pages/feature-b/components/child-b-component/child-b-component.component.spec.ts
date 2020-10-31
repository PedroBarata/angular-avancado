import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBComponentComponent } from './child-b-component.component';

describe('ChildBComponentComponent', () => {
  let component: ChildBComponentComponent;
  let fixture: ComponentFixture<ChildBComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildBComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
