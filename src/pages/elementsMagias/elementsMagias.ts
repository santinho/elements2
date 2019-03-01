import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'elements-page-magias',
  templateUrl: 'elementsMagias.html',
  providers: [HomeService]

})
export class ElementsMagiasPage {
  title: string = 'Magias';
  list: Observable<any[]>;
  node: string = 'Tormenta/Magias'
  listFiltered: Observable<any[]>;
  tipoMagias: string[]=[]
  tipoMagiasSelecionados: string[] = [];
  nivelCaminho: string[]=[]

  constructor(public navCtrl: NavController, public service: HomeService, public af: AngularFireDatabase) {
    service.load().subscribe(snapshot => {
      this.data = snapshot;
    });
    this.list = this.af.list(this.node).valueChanges()
    this.listFiltered = this.af.list(this.node).valueChanges()
    this.list.subscribe((l)=>{console.log(l)})
  }

  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;

  searchTerm:any="";
  allItems:any;

  getItems(event: any):void {
    if (!this.list) {
      this.list = this.listFiltered;
    }
    this.list.subscribe((listaBD:any[])=>{
      let listaBDFiltrada = [...listaBD];
      listaBDFiltrada = listaBDFiltrada.filter((item) => {
        let possuiElementos:boolean = false;
        this.nivelCaminho.forEach((nivel)=>{
          if(item[nivel]){
            item[nivel] = item[nivel].filter((magia) =>{
              let nomeOK:boolean = magia['NomeMagia'].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
              return nomeOK;
            });

            console.log(item[nivel])
            if(item[nivel].length > 0){
              possuiElementos = true;
            }
          }
        })
        return possuiElementos;
      });
      this.listFiltered = Observable.of(listaBDFiltrada);

    });
     
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

}
