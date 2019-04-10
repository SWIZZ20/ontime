import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'page-users-infos',
  templateUrl: 'users-infos.html',
})
export class UsersInfosPage implements OnInit{
  public users=[];
  public niveau=[];
  public infoForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public authService:AuthServiceProvider,public formBuilder:FormBuilder) {
      this.niveau=this.authService.niveau;
      this.onInitForm();
      
     
      //console.log(this.users);
      
  }

  ngOnInit(): void {
    
  }

  ionViewDidLoad() {
    
  }

  onInitForm(){
    this.infoForm=this.formBuilder.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      niveau:['',Validators.required],
      telephone:['',Validators.required],
      residence:['']
    })
  }

  saveData(){
    this.users.push({
      nom:this.infoForm.get('nom').value,
      prenom:this.infoForm.get('prenom').value,
      niveau:this.infoForm.get('niveau').value,
      telephone:this.infoForm.get('telephone').value,
      residence:this.infoForm.get('residence').value
    });
    this.authService.userData=this.users;
    this.authService.saveDataUser(this.users).then((data)=>{
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    });
  }

}
