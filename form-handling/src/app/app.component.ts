import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    userName: '',
    email: '',
    secretQuestion: '',
    answer : '',
    gender : ''
  };
  submitted = false;


  suggestUserName() {
    const suggestedUserName = 'Superuser';
    
    // patchValue : => just set specific value
    this.signupForm.form.patchValue({ UserData: { userName: suggestedUserName } });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.user.userName = this.signupForm.value.UserData.userName;
    this.user.email = this.signupForm.value.UserData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;
  }
}
