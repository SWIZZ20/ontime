import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot=firebase.database.DataSnapshot;

@Injectable()
export class AuthServiceProvider {
  public userData=[];
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
  constructor() {
    
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

  saveDataUser(data:any){

    return new Promise((resolve,reject)=>{
      firebase.database().ref("profils").push(data).then((data)=>{
        resolve(data);
      }).catch((error)=>{
        reject(error);
      });
    });  
  }

  getData(){
    let uid=firebase.auth().currentUser.uid;
    return new Promise((resolve,reject)=>{
      firebase.database().ref("profils"+uid).once("value").then((data:DataSnapshot)=>{
        this.userData=data.val();
        console.log(data.val());
      }).catch((error)=>{
        reject(error);
      });
    });
  }

}
