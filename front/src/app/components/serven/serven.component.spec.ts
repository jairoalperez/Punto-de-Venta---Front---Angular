import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServenComponent } from './serven.component';

describe('ServenComponent', () => {
  let component: ServenComponent;
  let fixture: ComponentFixture<ServenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
