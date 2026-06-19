import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  enrolledCourseIds: number[] = [];

  enroll(courseId: number) {

    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }

  }

  unenroll(courseId: number) {

    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(
        id => id !== courseId
      );

  }

  isEnrolled(courseId: number) {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses() {
    return this.enrolledCourseIds;
  }
}
