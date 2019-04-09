import { TabsPage } from './../tabs/tabs';
import { UsersInfosPage } from './../users-infos/users-infos';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage implements OnInit{
  public type:string;
  public authForm:FormGroup;
  public error:string;
  public email:string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public AuthService:AuthServiceProvider,
     public formBuilder:FormBuilder,
     public alCtrl:AlertController) {
  }

  ngOnInit(): void {
    this.type=this.navParams.get("Type");
    this.onInitForm();
  }

  onInitForm(){
    this.authForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }

  goToHomePage()
  {
    if(this.type)
    {
      this.AuthService.singIn(this.authForm.get('email').value,this.authForm.get('password').value)
      .then((user)=>{
        this.navCtrl.setRoot(TabsPage);
      }).catch((error)=>{
        this.error=error;
      });
    }
    else{
      this.AuthService.singUp(this.authForm.get('email').value,this.authForm.get('password').value)
      .then((user)=>{
        this.navCtrl.push(UsersInfosPage);
      }).catch((error)=>{
        this.error=error;
      });
    }

  }

  presentAlert(){
    let alert=this.alCtrl.create({
      title: 'Mot de passe oublié',
      message: "Veuillez renseigner votre email",
      inputs: [
        {
          name: 'email',
          type:"email",
          placeholder: 'name@company.com'
        },
      ],
      buttons: [
        {
          text: 'anuler',
          handler: data => {
            
          }
        },
        {
          text: 'Valider',
          handler: data => {
            this.AuthService.passwordForgotten(data.email).then((data)=>{
              console.log(data);
            }).catch((error)=>{
              this.error=error;
            });
          }
        }
      ]
    });
    alert.present();
  }


}
