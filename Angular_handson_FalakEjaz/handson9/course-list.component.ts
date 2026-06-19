import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectAllCourses
} from '../../store/course/course.selectors';

export class CourseListComponent {

  courses$!: Observable<any[]>;

  constructor(
    private store: Store
  ) {}

  ngOnInit() {

    this.courses$ =
      this.store.select(
        selectAllCourses
      );

  }
}
