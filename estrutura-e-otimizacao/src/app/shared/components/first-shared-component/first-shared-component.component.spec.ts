import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSharedComponentComponent } from './first-shared-component.component';

describe('FirstSharedComponentComponent', () => {
  let component: FirstSharedComponentComponent;
  let fixture: ComponentFixture<FirstSharedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSharedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSharedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
