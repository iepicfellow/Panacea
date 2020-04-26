import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from 'firebase';
import {ToastController } from '@ionic/angular';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  bp: string;
  tri: string;
  chol: string;
  hemo: string;
  constructor(public af: AngularFireAuth, public fs: AngularFirestore, public toastCtrl: ToastController, ) { }


  bloodpressure() {
    if(this.bp != ''){

      this.fs.collection('bp').doc('bp').set({
        bp: this.bp,

      });
      this.bp='';
    }
    this.presentToast('Updated blood pressure', 3000);
  }


  triglyceride() {
    if(this.tri != ''){

      this.fs.collection('tri').add({
        tri: this.tri,

      });
      this.tri='';
    }
    this.presentToast('Updated triglyceride', 3000);

  }

  cholesterol() {
    if(this.chol != ''){

      this.fs.collection('chol').add({
        chol: this.chol,

      });
      this.chol='';
    }
    this.presentToast('Updated cholesterol', 3000);

  }

  hemoglobin() {
    if(this.hemo != ''){

      this.fs.collection('hemo').add({
        hemo: this.hemo,

      });
      this.hemo='';
    }
    this.presentToast('Updated hemoglobin', 3000);
  }

  ngOnInit() {
  }

  async presentToast(message: string, duration: number) {
    let toast = await this.toastCtrl.create({
      message,
      duration,
      position: 'bottom'
    })

    await toast.present()
  }

}
