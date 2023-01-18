import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Produit, Student,Categorie } from '../model/student';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  angularFirestore: any;

  constructor(private afs : AngularFirestore) { }
  
  // add student
  addStudent(student : Student) {
    student.id = this.afs.createId();
    return this.afs.collection('/Students').add(student);
  }

  // get all students
  getAllStudents() {
    return this.afs.collection('/Students').snapshotChanges();
  }

  // delete student
  deleteStudent(student : Student) {
     this.afs.doc('/Students/'+student.id).delete();
  }

  // update student
  updateStudent(student : Student) {
    this.deleteStudent(student);
    this.addStudent(student);
    // return this.angularFirestore.collection("student-collection")
    // .doc(id).update({
    //   first_name:student.first_name
    //   email:student.email
    // })
  }
  ////////////::::::::::PARTI//////////.../§§§§§§§§//////////
  // add Produit
  addProduit(produit : Produit) {
    produit.id = this.afs.createId();
    return this.afs.collection('/Produit').add(produit);
  }

  // get all Produit
  getAllProduit() {
    return this.afs.collection('/Produit').snapshotChanges();
  }

  // delete Produit
  deleteProduit(produit : Produit) {
     this.afs.doc('/Produit/'+produit.id).delete();
  }

  // update Produit
  updateProduit(produit : Produit) {
    this.deleteProduit(produit);
    this.addProduit(produit);
  }
  ////////////::::::::::PARTI Categorie//////////.../§§§§§§§§//////////

   // add Categorie
   addCategorie(categorie : Categorie) {
    categorie.id = this.afs.createId();
    return this.afs.collection('/Categorie').add(categorie);
  }

  // get all Categorie
  getAllCategorie() {
    return this.afs.collection('/Categorie').snapshotChanges();
  }

  // delete categorie
  deleteCategorie(categorie : Categorie) {
     this.afs.doc('/Categorie/'+categorie.id).delete();
  }

  // update categorie
  updateCategorie(categorie : Categorie) {
    this.deleteCategorie(categorie);
    this.addCategorie(categorie);
 }
}

  


