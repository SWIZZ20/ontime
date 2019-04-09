import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { EventsPage } from '../events/events';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1=HomePage;
  tab2=EventsPage;

  constructor() {
  }

}
