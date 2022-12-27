import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabinidComponent } from './databinid.component';

describe('DatabinidComponent', () => {
  let component: DatabinidComponent;
  let fixture: ComponentFixture<DatabinidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabinidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabinidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
