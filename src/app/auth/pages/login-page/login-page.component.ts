import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  returnUrl!: string;
  isSubmitted: boolean = false;
  regexPassword = '"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"';

  private formBuilder = inject(FormBuilder)
  private authService = inject(AuthService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    this.formLoad();
  }

  formLoad() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.pattern(this.regexPassword)]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }


  onSubmit() {
    this.isSubmitted = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: (result) => {
        this.router.navigate([this.returnUrl || '/dashboard']);
      },
      error: (error) => {
        console.log("Error");

      }
    })
      .add(() => {
        this.isSubmitted = false;
      });

  }

  get loginFormControls() {
    return this.loginForm.controls;
  }


}
