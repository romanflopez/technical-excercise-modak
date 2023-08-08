import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectToken } from 'src/app/authentication/store/users/users.selectors';

export const authGuard = () => {
  const router = inject(Router);
  const store = inject(Store);
  return store.select(selectToken).pipe(
    map((token) => {
      if (token) {
        return true;
      } else {
        router.navigateByUrl('login');
        return false;
      }
    })
  );
};
