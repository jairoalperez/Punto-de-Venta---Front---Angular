import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicomComponent } from './clicom.component';

describe('ClicomComponent', () => {
  let component: ClicomComponent;
  let fixture: ComponentFixture<ClicomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClicomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClicomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
