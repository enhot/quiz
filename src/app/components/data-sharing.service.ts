import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private saveAnswerSubject = new BehaviorSubject<any[]>([]);
  saveAnswer = this.saveAnswerSubject.asObservable();

  updateSaveAnswer(data: any[]): void {
    this.saveAnswerSubject.next(data);
  }
}
