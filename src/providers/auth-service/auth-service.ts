import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthServiceProvider {

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



}
