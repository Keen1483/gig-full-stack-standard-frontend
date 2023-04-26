import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AdditionalMethodsService } from '../../services/additional-methods.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  errorMessage: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private additionalMethods: AdditionalMethodsService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signinForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  submitForm() {
    const formValue = this.signinForm.value;
    const username = formValue['username'];
    const password = formValue['password'];

    this.authService.authenticate(username, password).subscribe(
      response => {
        this.additionalMethods.openSnackBar(`User ${username} is logged successful`, 'Close');
        this.router.navigate(['']);
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = this.additionalMethods.failedConnection(error);
      }
    );
  }

}
