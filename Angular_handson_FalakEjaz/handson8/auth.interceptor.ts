import {
  HttpInterceptorFn
} from '@angular/common/http';

export const authInterceptor:
HttpInterceptorFn =
(req, next) => {

  const clonedReq =
    req.clone({

      setHeaders: {
        Authorization:
        'Bearer mock-token'
      }

    });

  return next(clonedReq);
};
