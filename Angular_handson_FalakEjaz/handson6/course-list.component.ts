import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

export class CourseListComponent implements OnInit {

  courses: any[] = [];

  constructor(
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.courses =
      this.courseService.getCourses();
  }
}
