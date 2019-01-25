import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/shared/models/teacher.model';
import { ScheduleUpdateService } from 'src/app/shared/services/schedule-update.service';

@Component({
  selector: 'app-boss-port',
  templateUrl: './boss-port.component.html',
  styleUrls: ['./boss-port.component.scss']
})
export class BossPortComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private scheduleService: ScheduleUpdateService) { }
  allTeachers: Array<User> = [];
  ngOnInit() {
    this.getAllTeachers();
  }
  getAllTeachers() {
    this.scheduleService.getTeacherList().then(res => {
      this.allTeachers = res;
      debugger;
    });
  }

}
