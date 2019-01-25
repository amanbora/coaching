import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleUpdateService {

  constructor(private afDb: AngularFireDatabase) { }

  updateTeacherForSpecificDayAndSession(uid, day, time) {
    return this.afDb.database.ref('schedule/' + day + '/' + time + '/teacher').set(uid);
  }
  getTeacherList() {
    return this.afDb.database.ref('user-mapping/teacher').once('value').then(res => {
      const uidArray = Object.keys(res.val());
      return Promise.all(uidArray.map(uid => {
        return this.afDb.database.ref('users/' + uid).once('value').then(userVal => {
          return new User({...userVal.val(), uid});
        });
      }));
    });
  }
}
