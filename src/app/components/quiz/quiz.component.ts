import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { GetQuestionsService } from '../get-questions.service';
import { Questions } from '../questions';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule, RouterLink, LoginComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent implements OnInit {
  public radio!: string;
  public userName!: string;
  public questions!: Questions[];
  public currentIndex: number = 0;

  public saveAnswer: {
    questionIdNumber: number;
    selectOption: string;
    correctAnsw: string;
  }[] = [];

  constructor(
    private questService: GetQuestionsService,
    private dataSharing: DataSharingService,
    private activeRout: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userName = this.activeRout.snapshot.queryParams['textInput'];
    this.questions = this.questService.getQuestion();
  }

  nextQustion(selectOption: string, correctAnsw: string) {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.radio = '';
    } else if (this.currentIndex >= this.questions.length - 1) {
      this.router.navigate([`/answer`, this.userName], {
        relativeTo: this.activeRout,
      });
    }

    this.saveAnswer.push({
      questionIdNumber: this.questions[this.currentIndex].id,
      selectOption,
      correctAnsw,
    });

    this.dataSharing.updateSaveAnswer(this.saveAnswer);

    console.log(this.saveAnswer);
  }
}
