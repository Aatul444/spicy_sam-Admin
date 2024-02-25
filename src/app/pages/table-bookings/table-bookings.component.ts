import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-table-bookings',
  templateUrl: './table-bookings.component.html',
  styleUrl: './table-bookings.component.scss'
})
export class TableBookingsComponent {
  orders!: any;
  constructor(private firestore: AngularFirestore) {}
  currentMonthIndex: number = new Date().getMonth() + 1;
  currentYear: number = new Date().getFullYear();
  activeAccordion: string | null = null;

  toggleAccordion(orderKey: any) {
    if (this.activeAccordion === orderKey.key) {
      this.activeAccordion = null;
    } else {
      this.activeAccordion = orderKey.key;
    }
  }

  isAccordionActive(orderKey: any): boolean {
    return this.activeAccordion === orderKey.key;
  }
  check(ls:any){console.log(ls)}
  get currentMonth(): string {
    return this.getMonthName(this.currentMonthIndex);
  }
  ngOnInit() {
    this.updateCurrentMonth();
  }
  getMonthName(monthIndex: number): string {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames[monthIndex - 1];
  }

  getValue(order: any) {
    return order.value;
  }

  getFormattedDate(month: number, year: number): string {
    const formattedMonth = month < 10 ? `0${month}` : month;
    return `${formattedMonth}-${year}`;
  }

  getOrders(month: number, year: number): Observable<any> {
    const formattedDate = this.getFormattedDate(month, year);
    return this.firestore
      .collection('admin_tableBookings')
      .doc(formattedDate)
      .valueChanges();
  }

  prev() {
    this.currentMonthIndex--;
    if (this.currentMonthIndex < 1) {
      this.currentMonthIndex = 12;
      this.currentYear--;
    }
    this.updateCurrentMonth();
  }

  next() {
    this.currentMonthIndex++;
    if (this.currentMonthIndex > 12) {
      this.currentMonthIndex = 1;
      this.currentYear++;
    }
    this.updateCurrentMonth();
  }
  updateCurrentMonth() {
    this.getOrders(this.currentMonthIndex, this.currentYear).subscribe(
      (res) => {
        this.orders = res;
        console.log(this.orders);
      }
    );
  }
  getPrice(food: any): string {
    const { selection, fullPrice, halfPrice } = food;
    const quantity = selection?.quantity || 1;
    const fhPlate = selection?.fhPlate || 'full';

    if (fhPlate === 'full') {
      return (quantity * fullPrice).toFixed(2);
    } else if (fhPlate === 'half') {
      return (quantity * halfPrice).toFixed(2);
    }

    return '0.00';
  }
}
