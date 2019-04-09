import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-single-subjects',
  templateUrl: 'single-subjects.html',
})
export class SingleSubjectsPage implements OnInit {
  
  public cour:any;
  constructor(public navParam:NavParams, public viewCtrl:ViewController) {
  }

  ngOnInit(): void {
   this.cour=this.navParam.get('cour');
  }

  close()
  {
    this.viewCtrl.dismiss();
  }

}
