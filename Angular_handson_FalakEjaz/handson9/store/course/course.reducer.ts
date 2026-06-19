import {
  createReducer,
  on
} from '@ngrx/store';

import * as CourseActions
from './course.actions';

export interface CourseState {

  courses: any[];

}

export const initialState:
CourseState = {

  courses: []

};

export const courseReducer =
createReducer(

  initialState,

  on(
    CourseActions.loadCoursesSuccess,

    (state, action) => ({

      ...state,

      courses: action.courses

    })
  )

);
