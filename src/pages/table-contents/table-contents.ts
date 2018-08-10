import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Chapter1Page } from '../chapter1/chapter1';
import { Chapter2Page } from '../chapter2/chapter2';
import { Chapter3Page } from '../chapter3/chapter3';
import { Chapter4Page } from '../chapter4/chapter4';
import { Chapter5Page } from '../chapter5/chapter5';



/**
 * Generated class for the TableContentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-table-contents',
  templateUrl: 'table-contents.html',
})
export class TableContentsPage {

  chapter1Page =Chapter1Page;
  chapter2Page =Chapter2Page;
  chapter3Page =Chapter3Page;
  chapter4Page =Chapter4Page;
  chapter5Page =Chapter5Page;



  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TableContentsPage');
  }

  onbuttonClicked() {
    this.navCtrl.push(Chapter1Page);
  }

 
  // public onbuttonClicked(): void {
  //   this.viewCtrl.dismiss();
  // }
}
