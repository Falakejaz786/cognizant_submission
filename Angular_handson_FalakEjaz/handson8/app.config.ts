import { provideHttpClient } from '@angular/common/http';

providers: [
  provideHttpClient()
]
import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import {
  authInterceptor
} from './interceptors/auth.interceptor';

providers: [

  provideHttpClient(
    withInterceptors([
      authInterceptor
    ])
  )

]
