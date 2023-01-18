// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Categorie, Produit } from 'src/app/model/student';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  categorieList: Categorie[] =[];
  produitList: Produit[] = [];
  produitObj: Produit = {
    id: '',
    last_name: '',
    prix: '',
    Categorie:''
  };
  id: string = '';
  last_name: string = '';
  prix: string = '';
  Categorie:string= ''
  constructor(private auth: AuthService, private data: DataService,private afs : AngularFirestore) { }
  ngOnInit(): void {
    this.getAllProduit();
    this.getAllCategorie();

  }
  // register(){
  //   this.auth.logout();
  // }
  getAllProduit() {

    this.data.getAllProduit().subscribe(res => {

      this.produitList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching student data');
    })

  }
///recuperation de modal
getAllModalProduit(produit:Produit){
  this.id = produit.id,
   this.last_name = produit.last_name,
   this.prix = produit.prix
}
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
    this.prix = ''
    this.Categorie=''
  }

  addProduit() {
    if (this.last_name == '' || this.prix == '' || this.Categorie=='') {
      alert('Remplir tous les champs de saisie');
      return;
    }

    this.produitObj.id = '';
    this.produitObj.last_name = this.last_name;
    this.produitObj.prix = this.prix;
    this.produitObj.Categorie = this.Categorie;

     this.data.addProduit(this.produitObj);
       this.resetForm();

     }
///update produit
     updateProduit() {
      try{
        this.afs.collection('Produit').doc(this.id).update({
          last_name : this.last_name,
          prix : this.prix,
          Categorie : this.Categorie
        })
        alert("update successfull")
        this.resetForm()
       
      }catch(error){
        alert(error)
      }
     }
     deleteProduit(produit: Produit) {
      if (window.confirm('Are you sure you want to delete '+ produit.last_name + ' ' + produit.prix + ' ?')) {
        this.data.deleteProduit(produit);
      }
    }
  }
