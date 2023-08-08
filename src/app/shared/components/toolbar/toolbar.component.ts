import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import {
  selectIsLoggedIn,
  selectUsername,
} from 'src/app/authentication/store/users/users.selectors';
import { Observable } from 'rxjs';
import { logout } from 'src/app/authentication/store/users/users.actions';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, ToolbarModule, ButtonModule, RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  private store = inject(Store);
  private router = inject(Router);
  isLoggedIn$: Observable<boolean> = this.store.select(selectIsLoggedIn);
  username$: Observable<string> = this.store.select(selectUsername);

  logOut(): void {
    this.store.dispatch(logout());
    this.router.navigateByUrl('login');
  }
  routeToTable() {
    this.router.navigateByUrl('table');
  }
  routeToHome() {
    this.router.navigateByUrl('home');
  }
}
