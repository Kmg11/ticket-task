import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFileComponent } from './ticket-file.component';

describe('TicketFileComponent', () => {
  let component: TicketFileComponent;
  let fixture: ComponentFixture<TicketFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketFileComponent]
    });
    fixture = TestBed.createComponent(TicketFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
