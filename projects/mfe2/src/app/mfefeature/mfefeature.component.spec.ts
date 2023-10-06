import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfefeatureComponent } from './mfefeature.component';

describe('MfefeatureComponent', () => {
  let component: MfefeatureComponent;
  let fixture: ComponentFixture<MfefeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MfefeatureComponent]
    });
    fixture = TestBed.createComponent(MfefeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
