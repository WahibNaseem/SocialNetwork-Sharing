import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  msg= 'Hello World Share';

  constructor(
    public navCtrl: NavController,
    private socialSharing: SocialSharing) {}


  onShareSocial() {
    this.socialSharing.share(this.msg + '\n\n' + ' "potato"',null,null,null).then( (response: any) =>{
       console.log(response);
    }).catch((error) => {
        console.log(error);
    });
  }

}
