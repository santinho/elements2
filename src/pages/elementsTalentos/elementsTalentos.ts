import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, Content } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'elements-page-talentos',
  templateUrl: 'elementsTalentos.html',
  providers: [HomeService]

})
export class ElementsTalentosPage {
  @ViewChild(Content)
  content: Content;
  title: string = 'Talentos';
  node: string = 'Tormenta/Talentos'
  list: Observable<any[]>;
  listFiltered: Observable<any[]>;
  tipoPericias: string[]=['Ambientais','Combate','Destino','Magia','Moreau','Perícia','Poderes Concedidos','Raciais','Tormenta'];
  tipoPericiasSelecionados: string[] = ['Ambientais','Combate','Destino','Magia','Moreau','Perícia','Poderes Concedidos','Raciais','Tormenta'];

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
    if (!this.list) {
      this.list = this.listFiltered;
    }
    this.list.subscribe((listaBD:any[])=>{
      let listaBDFiltrada = [...listaBD];
      console.log('listaBDFiltrada', listaBDFiltrada);
      listaBDFiltrada = listaBDFiltrada.filter((item) => {
        console.log('this.tipoMagiasSelecionados.indexOf(item.Nome)',this.tipoPericiasSelecionados.indexOf(item.Nome))
        if(!(this.tipoPericiasSelecionados.indexOf(item.Nome) > -1)){
          return false;
        }
        item.Lista = item.Lista.filter((talento)=>{
          console.log('talento',talento)
          if(talento){
              let nomeOK:boolean = talento['Nome'].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
              console.log('nomeOk', nomeOK)
              return nomeOK;
          }
          return false;
        })

        return item.Lista.length > 0;
        
      });
      console.log('listaBDFiltrada2', listaBDFiltrada)
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
