import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { EventsProvider } from '../../providers/events/events';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage implements OnInit{
 
   public eventsTab=[];


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public menuCtrl:MenuController,
              public eventService:EventsProvider) {
  }

 ngOnInit(): void {
   this.eventsTab=this.eventService.evenement;
   console.log(this.eventsTab);
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }
}
