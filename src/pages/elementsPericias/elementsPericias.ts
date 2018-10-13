import { Component, Input } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
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
  title: string = 'Pericias';
  list: Observable<any[]>;
  listFiltered: Observable<any[]>;
  tipoPericias: string[]=['Agilidade/Destreza', 'Arquearia', 'Caça/Animais', 'Carisma', 
  'Combate','Força e Resistencia', 'Gerais', 'Magias', 'Sentidos']
  tipoPericiasSelecionados: string[] = ['Agilidade/Destreza', 'Arquearia', 'Caça/Animais', 'Carisma', 
  'Combate','Força e Resistencia', 'Gerais', 'Magias', 'Sentidos'];

  constructor(public navCtrl: NavController, public service: HomeService, public af: AngularFireDatabase) {
    console.log('pericias');
    service.load().subscribe(snapshot => {
      this.data = snapshot;
    });
    this.list = this.af.list('pericias').valueChanges()
    this.listFiltered = this.af.list('pericias').valueChanges()
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
      let listaBDFiltrada = listaBD.filter((item) => {
        let nomeOK:boolean = item['Nome'].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        let classeOK:boolean = this.tipoPericiasSelecionados.indexOf(item['Tipo']) > -1;

        return nomeOK && classeOK
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
