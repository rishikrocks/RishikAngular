import { HttpInterceptorFn } from '@angular/common/http';
import Snackbar from 'awesome-snackbar';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError((error) => {
    new Snackbar(`${error.message}`,
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
    return EMPTY;
  }));
};
