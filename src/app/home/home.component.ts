import { Component, OnInit } from '@angular/core';
import { FingerprintAuth, BiometricIDAvailableResult } from "nativescript-fingerprint-auth";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'nativescriptPOC';

  private fingerprintAuth: FingerprintAuth;

   constructor() {
    this.fingerprintAuth = new FingerprintAuth();
  }

ngOnInit(){
  this.fingerprintAuth.available().then((result: BiometricIDAvailableResult) => {
    console.log(`Biometric ID available? ${result.any}`);
    console.log(`Touch? ${result.touch}`);
    console.log(`Face? ${result.face}`);
    alert('hello');
    if(result.any && result.touch){
      this.title =  'Biometric ID available, Touch';
    }
  });
}
}
