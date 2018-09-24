import { Component, Input } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'elements-page-classes',
  templateUrl: 'elementsClasses.html',
  providers: [HomeService]

})
export class ElementsClassesPage {
  title: string = 'Classes';
  list: Observable<any[]>;
  listFiltered: Observable<any[]>;
  lvls: number[] = [0,1,2,3,4,5,6,7,8,9,10]
  tipoClasses: string[]=['Agility', 'Clericato', 'Damage', 'Utility']
  tipoClassesSelecionados: string[] = ['Agility', 'Clericato', 'Damage', 'Utility'];

  constructor(public navCtrl: NavController, public service: HomeService, public af: AngularFireDatabase) {
    console.log('classes');
    service.load().subscribe(snapshot => {
      this.data = snapshot;
    });
    this.list = this.af.list('classes').valueChanges()
    this.listFiltered = this.af.list('classes').valueChanges()
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
        let classeOK:boolean = this.tipoClassesSelecionados.indexOf(item['TipoClasse']) > -1;

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
