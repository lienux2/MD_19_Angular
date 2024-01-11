import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddDino: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddDino(): void {
    this.showAddDino = !this.showAddDino;
    this.subject.next(this.showAddDino);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
