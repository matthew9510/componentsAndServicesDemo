import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRightComponentComponent } from './nested-right-component.component';

describe('NestedRightComponentComponent', () => {
  let component: NestedRightComponentComponent;
  let fixture: ComponentFixture<NestedRightComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedRightComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedRightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
