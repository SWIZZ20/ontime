import { Injectable } from '@angular/core';


@Injectable()
export class TimeTableServiceProvider {

  public cours=[
    {
      nom:'Anglais',
      professeur:'Omari Otman',
      heureDebut:'8h',
      heureFin:'9h',
      salle:"archimede"
    },
    {
      nom:'Réseaux Locaux',
      professeur:'Hannafi',
      heureDebut:'9h',
      heureFin:'10h',
      salle:"archimede"
    },
    {
      nom:'Telephonie',
      professeur:'Tayea',
      heureDebut:'10h',
      heureFin:'11h',
      salle:"archimede"
    }
  ];

  public generalTimeTable=[
    {
      niveau:'1 TC',
      jour:0,
      cours:this.cours
    },
    {
      niveau:'1 TC',
      jour:1,
      cours:this.cours
    },
    {
      niveau:'1 TC',
      jour:2,
      cours:this.cours
    }
  ];
  constructor() {
    console.log('Hello TimeTableServiceProvider Provider');
  }

}
