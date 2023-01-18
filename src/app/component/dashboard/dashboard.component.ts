import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie, Produit } from 'src/app/model/student';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  categorieList: Categorie[] =[];
  produitList: Produit[] = [];
  // @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private auth: AuthService, private data: DataService,router:Router) { }
  ngOnInit(): void {
    this.getAllProduit();
    this.getAllCategorie();
    
  }
  
  // toggleSidebar(): void {
    // this.toggleSidebarForMe.emit();
  // }
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
}
