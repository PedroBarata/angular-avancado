import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootAComponentComponent } from './root-a-component.component';

describe('RootAComponentComponent', () => {
  let component: RootAComponentComponent;
  let fixture: ComponentFixture<RootAComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootAComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
