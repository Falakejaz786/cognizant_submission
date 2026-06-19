import { CourseService } from '../../services/course.service';

courseCount = 0;

constructor(
  private courseService: CourseService
) {}

ngOnInit() {

  this.courseCount =
    this.courseService.getCourses().length;

}
