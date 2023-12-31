import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { StudentModel } from 'src/app/student-model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: StudentModel[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  deleteStudent(studentId: number): void {
    this.studentService.deleteStudent(studentId).subscribe(() => {
      this.getStudents();
    });
  }
}
