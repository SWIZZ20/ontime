import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot= firebase.database.DataSnapshot;
import { Subject } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthServiceProvider {
  public userData=[];

  userData$= new Subject();
  public niveau=[{
    nom:"1 TC" 
  },
  {
    nom:"1 IG" 
  },
  {
    nom:"1 MAN" 
  }
  ];

  firedata = firebase.database().ref('profils');
  constructor( public afAuth: AngularFireAuth) {
    
  }

  getuserdetails(){

    var promise = new Promise((resolve , reject) => {
      this.firedata.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
        resolve(snapshot.val());
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;

  }

  emitsData() {
    this.userData$.next(this.userData.slice());
  }

  singIn(email, password)
  {
    return new Promise((resolve,reject)=>
    {
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then((user)=>
      {
        resolve(user);
      }).catch((error)=>
      {
        reject(error);
      });
    });
  }

  singUp(email, password)
  {
    return new Promise((resolve,reject)=>
    {
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((user)=>
      {
        resolve(user);
      }).catch((error)=>
      {
        reject(error);
      });
    });
  }

  logOut()
  {
    firebase.auth().signOut();
  }

  passwordForgotten(email:any){
    return new Promise((resolve,reject)=>{
      firebase.auth().sendPasswordResetEmail(email).then((data)=>{
        resolve("Mot de passe modifié: verifiez votre mail");
      }).catch((error)=>{
        reject(error);
      });
    });
    
  }

  saveData(niveau,nom,prenom,residence,telephone) {
    this.firedata.child(this.afAuth.auth.currentUser.uid).set({
      uid:this.afAuth.auth.currentUser.uid,
      niveau:niveau,
      nom:nom,
      prenom:prenom,
      telephone: telephone,
      adresse: residence,
    }).then((data)=>{
      return data;
    }).catch((err)=>{

    })
  }

  retrieveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('profils').once('value').then(
        (data: DataSnapshot) => {
          resolve(data);
          console.log(firebase.database().ref('profils'+firebase.auth().currentUser.uid).once('value'))
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  fonctionR(){
    var userId = firebase.auth().currentUser.uid;
     return firebase.database().ref('/profils/').once('value').then((DataSnapshot)=> {
      let username = (DataSnapshot.val() && DataSnapshot.val().nom) || 'Anonymous';
       console.log("user name:"+username)
    });
  }

}
