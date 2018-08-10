import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter2Page } from '../chapter2/chapter2';
import { Chapter4Page } from '../chapter4/chapter4';
import { TableContentsPage } from '../table-contents/table-contents';

/**
 * Generated class for the Chapter3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter3',
  templateUrl: 'chapter3.html',
})
export class Chapter3Page {

  chapter2Page = Chapter2Page;
  chapter4Page = Chapter4Page;
  table = TableContentsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter3Page');
  }

}
