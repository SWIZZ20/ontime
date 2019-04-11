import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { TimeTableService1Provider } from '../../providers/time-table-service1/time-table-service1';

@Component({
  selector: 'page-school-time-table',
  templateUrl: 'school-time-table.html',
})

export class SchoolTimeTablePage implements OnInit {
  
  cours:any;
  jour:string="lundi";

  constructor(public timeTableService1Provider:TimeTableService1Provider){

  }

 ngOnInit(): void {
    this.cours=this.timeTableService1Provider.cours;
  }

}
