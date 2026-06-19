import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export const selectCourseState =
createFeatureSelector<any>(
  'course'
);

export const selectAllCourses =
createSelector(

  selectCourseState,

  state => state.courses

);
