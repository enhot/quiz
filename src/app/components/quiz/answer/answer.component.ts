import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [DialogModule, CommonModule, FormsModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
})
export class AnswerComponent implements OnInit {
  public userName!: string;
  constructor(private activeRout: ActivatedRoute, public dialog: Dialog) {}
  ngOnInit(): void {
    this.userName = this.activeRout.snapshot.params['userName'];
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      minWidth: '300px',
      data: {
        animal: 'panda',
      },
    });
  }
}
