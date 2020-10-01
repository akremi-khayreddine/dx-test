import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxTestLibComponent } from './dx-test-lib.component';

describe('DxTestLibComponent', () => {
  let component: DxTestLibComponent;
  let fixture: ComponentFixture<DxTestLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxTestLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
