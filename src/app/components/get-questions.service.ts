import { Injectable } from '@angular/core';
import { Questions } from './questions';

@Injectable({
  providedIn: 'root',
})
export class GetQuestionsService {
  public answer: { id: number; val: string }[] = [];
  public questions: Questions[] = [
    {
      id: 1,
      text: 'Какова столица Франции?',
      options: [
        { value: 'a', label: 'Берлин' },
        { value: 'b', label: 'Париж' },
        { value: 'c', label: 'Лондон' },
        { value: 'd', label: 'Рим' },
      ],
      correctAnswer: 'b',
    },
    {
      id: 2,
      text: 'Кто является автором романа "Война и мир"?',
      options: [
        { value: 'a', label: 'Федор Достоевский' },
        { value: 'b', label: 'Лев Толстой' },
        { value: 'c', label: 'Олександ Боженко' },
        { value: 'd', label: 'Антон Чехов' },
      ],
      correctAnswer: 'b',
    },
    {
      id: 3,
      text: 'Какое количество планет в Солнечной системе?',
      options: [
        { value: 'a', label: '7' },
        { value: 'b', label: '9' },
        { value: 'c', label: '8' },
        { value: 'd', label: '10' },
      ],
      correctAnswer: 'c',
    },
    {
      id: 4,
      text: 'Какой язык программирования разработал Google?',
      options: [
        { value: 'a', label: 'Java' },
        { value: 'b', label: 'C++' },
        { value: 'c', label: 'Python' },
        { value: 'd', label: 'Go' },
      ],
      correctAnswer: 'd',
    },
    {
      id: 5,
      text: 'Какова столица Франции?',
      options: [
        { value: 'a', label: 'Берлин' },
        { value: 'b', label: 'Париж' },
        { value: 'c', label: 'Лондон' },
        { value: 'd', label: 'Рим' },
      ],
      correctAnswer: 'b',
    },
  ];
  constructor() {}
  getQuestion(): Questions[] {
    return this.questions.map((e) => ({ ...e }));
  }
}
