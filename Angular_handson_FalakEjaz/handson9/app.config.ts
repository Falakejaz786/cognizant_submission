import {
  provideStore
} from '@ngrx/store';

import {
  courseReducer
} from './store/course/course.reducer';

providers: [

  provideStore({

    course: courseReducer

  })

]
