import { Component } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import { FirebaseApp, initializeApp } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Auth, FacebookAuthProvider, GoogleAuthProvider} from "firebase/auth" ;
import {AngularFireAuth } from '@angular/fire/compat/auth' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: any;
 
  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res => {
      console.log(res)
    });
  }
}