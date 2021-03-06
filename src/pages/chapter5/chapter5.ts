import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter4Page } from '../chapter4/chapter4';
import { TableContentsPage } from '../table-contents/table-contents';
import { HomePage } from '../home/home';

/**
 * Generated class for the Chapter5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter5',
  templateUrl: 'chapter5.html',
})
export class Chapter5Page {

  chapter4Page = Chapter4Page;
  table = TableContentsPage;
  home = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter5Page');
  }

}
