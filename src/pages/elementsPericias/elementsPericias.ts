import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'elements-page-pericias',
  templateUrl: 'elementsPericias.html',
  providers: [HomeService]

})
export class ElementsPericiasPage {
  @ViewChild(Content)
  content: Content;
  title: string = 'Talentos';
  node: string = 'Tormenta/Talentos'
  list: Observable<any[]>;
  listFiltered: Observable<any[]>;
  tipoPericias: string[]=[]
  tipoPericiasSelecionados: string[] = [];

  constructor(public navCtrl: NavController, public service: HomeService, public af: AngularFireDatabase) {
    console.log('pericias');
    service.load().subscribe(snapshot => {
      this.data = snapshot;
    });
    this.list = this.af.list(this.node).valueChanges()
    this.listFiltered = this.af.list(this.node).valueChanges()
  }

  @Input() data: any;
  @Input() events: any;

  searchTerm:any="";
  allItems:any;

  getItems(event: any):void {
    console.log('getItems', this.searchTerm)
    if (!this.list) {
      this.list = this.listFiltered;
    }
    this.list.subscribe((listaBD:any[])=>{
      console.log('lista', listaBD)
      let listaBDFiltrada = listaBD.filter((item) => {
        let nomeOK:boolean = item['Nome'].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        //let classeOK:boolean = this.tipoPericiasSelecionados.indexOf(item['Tipo']) > -1;

        return nomeOK //&& classeOK
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
