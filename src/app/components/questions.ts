export interface Questions {
  id: number;
  text: string;
  options: { value: string; label: string }[];
  correctAnswer: string;
}
