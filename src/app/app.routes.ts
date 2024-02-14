import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { AnswerComponent } from './components/quiz/answer/answer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'quiz', component: QuizComponent, pathMatch: 'full' },
  { path: 'answer/:userName', component: AnswerComponent },
];
