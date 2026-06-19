import { EnrollmentService } from '../../services/enrollment.service';

constructor(
  public enrollmentService: EnrollmentService
) {}

toggleEnrollment() {

  if (
    this.enrollmentService.isEnrolled(
      this.course.id
    )
  ) {

    this.enrollmentService.unenroll(
      this.course.id
    );

  } else {

    this.enrollmentService.enroll(
      this.course.id
    );

  }

}
