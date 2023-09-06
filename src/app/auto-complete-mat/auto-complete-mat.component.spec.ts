import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteMatComponent } from './auto-complete-mat.component';

describe('AutoCompleteMatComponent', () => {
  let component: AutoCompleteMatComponent;
  let fixture: ComponentFixture<AutoCompleteMatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCompleteMatComponent]
    });
    fixture = TestBed.createComponent(AutoCompleteMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
