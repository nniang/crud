// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  studentsList: Student[] =[];
  studentObj: Student = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: ''
  };
  id : string = '';
  first_name :  string = '';
  last_name : string = '';
  email : string = '';
  mobile : string = '';
  // afs: any;
  constructor(private auth:AuthService, private data : DataService,private afs : AngularFirestore){}
  ngOnInit(): void {
    this.getAllStudents();
  }
// register(){
//   this.auth.logout();
// }
getAllStudents() {

  this.data.getAllStudents().subscribe(res => {

    this.studentsList = res.map((e: any) => {
      const data = e.payload.doc.data();
      data.id = e.payload.doc.id;
      return data;
    })

  }, err => {
    alert('Error while fetching student data');
  })

}
resetForm() {
  this.id = '';
  this.first_name = '';
  this.last_name = '';
  this.email = '';
  this.mobile = '';
}

addStudent() {
  if (this.first_name == '' || this.last_name == '' || this.mobile == '' || this.email == '') {
    alert('Remplir tous les champs de saisie');
    return;
  }

  this.studentObj.id = '';
  this.studentObj.email = this.email;
  this.studentObj.first_name = this.first_name;
  this.studentObj.last_name = this.last_name;
  this.studentObj.mobile = this.mobile;

  this.data.addStudent(this.studentObj);
  this.resetForm();

}

getAllModalUsers(student:Student){
  this.id = student.id,
   this.first_name =student.first_name,
   this.last_name = student.last_name,
   this.email = student.email,
   this.mobile = student.mobile
}
updateStudent() {
   
  try{
    this.afs.collection('Students').doc(this.id).update({
      first_name :this.first_name,
      last_name : this.last_name,
      email : this.email,
      mobile : this.mobile
    })
    alert("update successfull")
    this.resetForm()
   
  }catch(error){
    alert(error)
  }
 
}
deleteStudent(student: Student) {
  if (window.confirm('Are you sure you want to delete ' + student.first_name + ' ' + student.last_name + ' ?')) {
    this.data.deleteStudent(student);
  }
}
}
