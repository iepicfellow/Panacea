import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-accountd',
  templateUrl: './accountd.page.html',
  styleUrls: ['./accountd.page.scss'],
})
export class AccountdPage implements OnInit {


  firstname: string=""
  
  constructor(public alert: AlertController) { }

  ngOnInit() {
  }

  async submit() {
    localStorage.setItem('firstname', this.firstname);
    this.showAlert("Updated!", "")
  }
  
  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Ok"]
    })

    await alert.present()
  }

}
