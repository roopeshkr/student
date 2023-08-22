import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { StudentModel } from 'src/app/student-model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  newStudent: StudentModel = new StudentModel();

  constructor(private studentService: StudentService) {}

  addStudent(): void {
    this.studentService.addStudent(this.newStudent).subscribe(() => {
      this.newStudent = new StudentModel();
    });
  }
}
