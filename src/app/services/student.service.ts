import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../student-model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url:string='http://localhost:3000/students'

  constructor(private http:HttpClient) { }

  getStudents():Observable<StudentModel[]>{
    return this.http.get<StudentModel[]>(this.url)
  }

  addStudent(student:StudentModel):Observable<StudentModel>{
    return this.http.post<StudentModel>(this.url,student)
  }

  deleteStudent(studentId:number):Observable<any>{
    const newUrl= `${this.url}/${studentId}`
    return this.http.delete(newUrl)
  }
}
