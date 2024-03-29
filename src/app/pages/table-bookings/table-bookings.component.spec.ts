import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBookingsComponent } from './table-bookings.component';

describe('TableBookingsComponent', () => {
  let component: TableBookingsComponent;
  let fixture: ComponentFixture<TableBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableBookingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
