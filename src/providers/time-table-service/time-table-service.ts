import { Injectable } from '@angular/core';


@Injectable()
export class TimeTableServiceProvider {

  public cours = [
    {
      matin: [
        {
          nom: "Java",
          professeur: "M.Makhfi",
          heureDebut: "9h",
          heureFin: "10h30h",
          salle: "My Driss"
        },
        {
          nom: "Droit",
          professeur: "M.Dorit",
          heureDebut: "10h45",
          heureFin: "12h15",
          salle: "Senghor"
        }
      ],
      soir: [
        {
          nom: "TP  Electronique",
          professeur: "M.Kitane",
          heureDebut: "14h30",
          heureFin: "16h",
          salle: "Tp "
        },
        {
          nom: "TP  Electronique",
          professeur: "M.Kitane",
          heureDebut: "16h15",
          heureFin: "17h45",
          salle: "Tp "
        },
      ]
    },
    {
      matin: [
        {
          nom: "Anglais",
          professeur: "M.Omari Otman",
          heureDebut: "9h",
          heureFin: "10h30h",
          salle: "My Driss"
        },
        {
          nom: "Maths",
          professeur: "M.Laarabi",
          heureDebut: "10h45",
          heureFin: "12h15",
          salle: "Molière"
        }
      ],
      soir: [
        {
          nom: 'TEC',
          professeur: 'M.Radj',
          heureDebut: '14h30',
          heureFin: '16h',
          salle: "Averroes"
        },
        {
          nom: "Matlab",
          professeur: "M.N'Guadi",
          heureDebut: "16h15",
          heureFin: "17h45",
          salle: "Tp électronique"
        }
      ]
    },
    {
      matin: [
        {
          nom: "Libre",
          professeur: "?",
          heureDebut: "9h",
          heureFin: "10h30h",
          salle: "?"
        },
        {
          nom: "Libre",
          professeur: "?",
          heureDebut: "10h45",
          heureFin: "12h15",
          salle: "?"
        }
      ],
      soir: [
        {
          nom: 'Electronique Optique',
          professeur: 'M.Laarabi',
          heureDebut: '14h30',
          heureFin: '16h',
          salle: "Archimède"
        },
        {
          nom: "Traitement de Signal",
          professeur: "M.Hannafi",
          heureDebut: "16h15",
          heureFin: "17h45",
          salle: "Tp électronique"
        }
      ]
    },
    {
      matin: [
        {
          nom: "LabView",
          professeur: "M.Hannafi",
          heureDebut: "9h",
          heureFin: "10h30h",
          salle: "Archimède"
        },
        {
          nom: "LabView",
          professeur: "M.Hannafi",
          heureDebut: "10h45",
          heureFin: "12h15",
          salle: "Archimède"
        }
      ],
      soir: [
        {
          nom: 'Libre',
          professeur: 'M.Hannafi',
          heureDebut: '14h30',
          heureFin: '16h',
          salle: "Archimède"
        },
        {
          nom: "Libre",
          professeur: "M.Hannafi",
          heureDebut: "16h15",
          heureFin: "17h45",
          salle: "Archimède"
        }
      ]
    },
    {
      matin: [
        {
          nom: "Théorie des Graphes",
          professeur: "M.Nfissi",
          heureDebut: "9h",
          heureFin: "10h30h",
          salle: "Averroes"
        },
        {
          nom: "Théorie des Graphes",
          professeur: "M.Nfissi",
          heureDebut: "10h45",
          heureFin: "12h15",
          salle: "Averroes"
        }
      ],
      soir: [
        {
          nom: 'Libre',
          professeur: 'M.Hannafi',
          heureDebut: '14h30',
          heureFin: '16h',
          salle: "Archimède"
        },
        {
          nom: "Libre",
          professeur: "M.Hannafi",
          heureDebut: "16h15",
          heureFin: "17h45",
          salle: "Archimède"
        }
      ]
    }
  ];


  public etudes = [
    [
      {
        nom: "Anglais",
        professeur: "M.Omari Otman",
        heureDebut: "20h",
        heureFin: "21h30h"
      },
      {
        nom: "Maths",
        professeur: "M.Laarabi",
        heureDebut: "21h30",
        heureFin: "22h00"
      }
    ],
    [
      {
        nom: 'Electronique Optique',
        professeur: 'M.Laarabi',
        heureDebut: "20h",
        heureFin: "21h30h"
      },
      {
        nom: "Traitement de Signal",
        professeur: "M.Hannafi",
        heureDebut: "21h30",
        heureFin: "22h00"
      }
    ],
    [
      {
        nom: "LabView",
        professeur: "M.Hannafi",
        heureDebut: "20h",
        heureFin: "21h30h"
      },
      {
        nom: "LabView",
        professeur: "M.Hannafi",
        heureDebut: "21h30",
        heureFin: "22h00"
      }
    ],
    [
      {
        nom: "Théorie des Graphes",
        professeur: "M.Nfissi",
        heureDebut: "20h",
        heureFin: "21h"
      },
      {
        nom: "Théorie des Graphes",
        professeur: "M.Nfissi",
        heureDebut: "21h",
        heureFin: "21h30"
      }
    ],
    [
      {
        nom: "Java",
        professeur: "M.Makhfi",
        heureDebut: "20h",
        heureFin: "21h30h"
      },
      {
        nom: "Droit",
        professeur: "M.Dorit",
        heureDebut: "21h30",
        heureFin: "22h00"
      }
    ]
  ];


  public generalTimeTable = [
    {
      niveau: '1 TC',
      jour: 0,
      cours: this.cours
    },
    {
      niveau: '1 TC',
      jour: 1,
      cours: this.cours
    },
    {
      niveau: '1 TC',
      jour: 2,
      cours: this.cours
    }
  ];
  constructor() {
    console.log('Hello TimeTableServiceProvider Provider');
  }

}
