import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-single-task',
  templateUrl: 'single-task.html',
})
export class SingleTaskPage implements OnInit{
  
  public cour:any;
  constructor(public navParam:NavParams, public viewCtrl:ViewController) {
  }

  ngOnInit(): void {
   this.cour=this.navParam.get('etude');
  }

  close()
  {
    this.viewCtrl.dismiss();
  }
}
