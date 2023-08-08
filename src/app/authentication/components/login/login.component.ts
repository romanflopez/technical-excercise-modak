import { Observable, filter, take, tap } from 'rxjs';
import { OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Datum } from 'src/app/shared/model/interfaces.model';
import { Store } from '@ngrx/store';
import { login } from '../../store/users/users.actions';
import { selectError, selectToken } from '../../store/users/users.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  artowrks$: Observable<Datum[]>;
  error$: Observable<string>;
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  private authService = inject(AuthService);
  private store = inject(Store);

  ngOnInit(): void {
    this.artowrks$ = this.authService.getArtworks();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.store.dispatch(login(this.loginForm.value));
    this.error$ = this.store.select(selectError);
    this.store
      .select(selectToken)
      .pipe(
        filter((token) => !!token),
        take(1),
        tap(() => this.router.navigateByUrl('home'))
      )
      .subscribe();
  }

  addCredentials(): void {
    this.loginForm.get('username').setValue('roman');
    this.loginForm.get('password').setValue('lopez');
  }
}
