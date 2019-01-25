import { Component, OnInit } from '@angular/core';
import { ScheduleUpdateService } from '../shared/services/schedule-update.service';


enum subjects {
  PHYSICS = 'physics',
  CHEMISTRY = 'chemistry',
  MATHS = 'maths'
}
enum days {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THRUSDAY = 'thursday',
  FRIDAY = 'friday'
}
enum classes {
  FIRST = 'first',
  SECOND = 'second'
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
working_days=[days.MONDAY, days.TUESDAY, days.WEDNESDAY, days.THRUSDAY, days.FRIDAY];
classes = [classes.FIRST, classes.SECOND];
constructor(private scheduleService: ScheduleUpdateService) { }

  ngOnInit() {
  }

  updateTeacher() {
    this.scheduleService.updateTeacherForSpecificDayAndSession('ddssss', 'monday', 'first').then(() => {
      console.log('dd');
    });
  }


}
