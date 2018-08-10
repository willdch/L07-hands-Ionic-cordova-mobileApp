import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TableContentsPage } from '../table-contents/table-contents';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  table = TableContentsPage;

  constructor(public navCtrl: NavController) {

  }
  onbuttonClicked() {
    this.navCtrl.push(TableContentsPage);
  }
  
}
