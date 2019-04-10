import { SingleSubjectsPage } from './../single-subjects/single-subjects';
import { TimeTableServiceProvider } from './../../providers/time-table-service/time-table-service';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, MenuController } from 'ionic-angular';
import { SingleTaskPage } from '../single-task/single-task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  
  public EmploiDuTemps=[];
  public EmploiEtude=[];
  constructor(public navCtrl: NavController, 
    public timeService : TimeTableServiceProvider,
    public modalCtrl:ModalController,
    public menuCtrl:MenuController) {

  }
  ngOnInit(): void {
    let i=0;
    for(i=0;i<this.timeService.generalTimeTable.length;i++){
      if(this.timeService.generalTimeTable[i].niveau==="1 TC" && this.timeService.generalTimeTable[i].jour==0){
        this.EmploiDuTemps=this.timeService.generalTimeTable[i].cours;
        this.EmploiEtude=this.timeService.generalTimeTable[i+1].cours;
      }
    }
  }

  goToSingleSubjectsPage(cour){
    console.log(cour);
    let modal = this.modalCtrl.create(SingleSubjectsPage,{cour:cour});
    modal.present();
  }

  goToSingleTaskPage(etude){
    let modal = this.modalCtrl.create(SingleTaskPage,{etude:etude});
    modal.present();
  }
  
  onToggleMenu(){
    this.menuCtrl.open();
  }
}
