import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  myForm!: FormGroup;

  constructor(public router: Router, private fb: FormBuilder) {
    this.myForm = fb.group({
      // при работе с FormBuilder
      userName: ['', Validators.required],
    });
  }

  submit(event: Event) {
    event.preventDefault();
    if (this.myForm.valid) {
      this.router.navigate(['/quiz'], {
        queryParams: { textInput: this.myForm.value.userName }, // устанавливаем значение textInput = userName
      });
    }
  }
}
