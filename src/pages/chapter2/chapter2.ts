import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter3Page } from '../chapter3/chapter3';
import { Chapter1Page } from '../chapter1/chapter1';
import { TableContentsPage } from '../table-contents/table-contents';

/**
 * Generated class for the Chapter2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter2',
  templateUrl: 'chapter2.html',
})
export class Chapter2Page {

  chapter1Page = Chapter1Page;
  chapter3Page = Chapter3Page;
  table = TableContentsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter2Page');
  }

}
