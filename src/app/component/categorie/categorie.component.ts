import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Categorie } from 'src/app/model/student';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  
  categorieList: Categorie[] =[];
  categorieObj: Categorie = {
    id: '',
    last_name: '',
    description: ''
  };
  id : string = '';
  last_name : string = '';
  description : string = '';
  constructor(private auth:AuthService, private data : DataService,private afs : AngularFirestore){}
  ngOnInit(): void {
   
    this.getAllCategorie();
  }
// register(){
//   this.auth.logout();
// }
getAllCategorie() {

  this.data.getAllCategorie().subscribe(res => {

    this.categorieList = res.map((e: any) => {
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
  this.last_name = '';
  this.description = '';
}
///recuperation de modal
getAllModalCategorie(categorie:Categorie){
  this.id = categorie.id,
   this.last_name = categorie.last_name,
   this.description = categorie.description}
addCategorie() {
  if (this.last_name == '' ||  this.description == '') {
    alert('Remplir tous les champs de saisie');
    return;
  }

  this.categorieObj.id = '';
  this.categorieObj.last_name = this.last_name;
  this.categorieObj.description = this.description;

  this.data.addCategorie(this.categorieObj);
  this.resetForm();

}

updateCategorie() {
  try{
    this.afs.collection('Categorie').doc(this.id).update({
      id:this.id,
      last_name : this.last_name,
      description : this.description,
      
    })
    alert("update successfull")
    this.resetForm()
   
  }catch(error){
    alert(error)
  }
  
}
  deleteCategorie(categorie: Categorie) {
  if (window.confirm('Etes-vous sûr que vous voulez supprimer ' + categorie.last_name + ' ' + categorie.description + ' ?')) {
    this.data.deleteCategorie(categorie);
  }
}
}
