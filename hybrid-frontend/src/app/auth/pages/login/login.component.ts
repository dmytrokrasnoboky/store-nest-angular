import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { Store } from '@ngrx/store';
import { LoginRequest } from '../../../shared/api/models/login-request';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  responseError = new BehaviorSubject<string | null>(null);

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private store: Store,
    private auth: AuthService
  ) {}
  onSubmit() {
    const body = this.form.value as LoginRequest;
    this.form.disable();
    this.responseError.next(null);

    this.auth.login(body).subscribe({
      next: () => {
        this.form.enable();
      },
      error: (error) => {
        this.responseError.next(error.message);
        this.form.enable();
      },
    });
  }
}
