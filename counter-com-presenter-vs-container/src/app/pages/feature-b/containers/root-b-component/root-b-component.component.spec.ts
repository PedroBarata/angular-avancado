import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootBComponentComponent } from './root-b-component.component';

describe('RootBComponentComponent', () => {
  let component: RootBComponentComponent;
  let fixture: ComponentFixture<RootBComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootBComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootBComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
