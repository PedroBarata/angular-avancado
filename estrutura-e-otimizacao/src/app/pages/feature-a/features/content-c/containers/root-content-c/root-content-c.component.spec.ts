import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootContentCComponent } from './root-content-c.component';

describe('RootContentCComponent', () => {
  let component: RootContentCComponent;
  let fixture: ComponentFixture<RootContentCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootContentCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootContentCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
