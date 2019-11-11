import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartwrapperComponent } from './chartwrapper.component';

describe('ChartwrapperComponent', () => {
  let component: ChartwrapperComponent;
  let fixture: ComponentFixture<ChartwrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartwrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
