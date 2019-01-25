import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../models/teacher.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser:  BehaviorSubject<User>;
  constructor(private afAuth: AngularFireAuth, private afDb: AngularFireDatabase) {
    this.currentUser = new BehaviorSubject(new User({}));
    this.afAuth.authState.subscribe((user) => {
      const uid = user && user.uid;
      if(uid) {
        this.afDb.database.ref('users/' +uid  ).once('value').then((res) => {
          const val = res.val();
          this.currentUser.next(new User({...val, uid: res.key}))
        });
      } else {
        this.currentUser.next(new User({}));
      }
    });
   }
   signIn(data) {
     return this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password).then((userCredential) => {
       const uid = userCredential.user.uid;
      return this.afDb.database.ref('users/' +uid  ).once('value');
     });
   }
   signUp(data) {
    return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password).then(userCredential => {
      delete data.password;
      return this.afDb.database.ref('users/' + userCredential.user.uid + '/').set(data).then(() => userCredential.user);
    }).then((user) => {
      this.currentUser.next(new User({...data, uid: user.uid}));
      const currentUser = this.currentUser.value;
      return this.afDb.database.ref('user-mapping/' +  currentUser.accessLevel + '/' + currentUser.uid).set(true).then(() => this.currentUser.value);
    });
   }
}
