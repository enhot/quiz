import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../data-sharing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent implements OnInit {
  public arr: {
    questionIdNumber: number;
    selectOption: string;
    correctAnsw: string;
  }[] = [];
  curInd: number = 0;
  constructor(private dataSharing: DataSharingService) {}
  ngOnInit(): void {
    this.dataSharing.saveAnswer.subscribe((data) => {
      this.arr = data;
    });
  }
}
