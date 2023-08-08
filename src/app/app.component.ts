import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from './authentication/store/users/users.selectors';
import { loginSuccess } from './authentication/store/users/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private store = inject(Store);
  ngOnInit(): void {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const { token, username } = JSON.parse(storedToken);
      this.store.dispatch(loginSuccess({ token, username }));
    }
  }
  title = 'modak-technical-excersice';
}
