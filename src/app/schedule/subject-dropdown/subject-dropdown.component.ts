import { Component, Input } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/shared/models/teacher.model';
import { ScheduleUpdateService } from 'src/app/shared/services/schedule-update.service';


enum subjects {
    PHYSICS = 'PHYSICS',
    CHEMISTRY = 'CHEMISTRY',
    MATHS = 'MATHS'
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
    SECOND = 'second',
    THIRD = 'third',
    FORTH = 'forth'
  }
@Component({
    selector: 'app-subject-dropdown',
  templateUrl: './subject-dropdown.component.html',
  styleUrls: ['./subject-dropdown.component.scss']
})
export class SubjectDropdownComponent {
  constructor(private auth: AngularFireAuth, private scheduleService: ScheduleUpdateService){ }
  allTeachers: Array<User> = [];
  ngOnInit() {
    this.getAllTeachers();
  }
  getAllTeachers() {
    this.scheduleService.getTeacherList().then(res => {
      this.allTeachers = res;

    });
  }


    @Input('workingDay') day;
    @Input('session') session;
    // teachers: Array<{
    //     name: string,
    //     classes: Array<string>,
    //     days: Array<string>,
    //     subjects: Array<string>
    //     }> = [
    //       {
    //         name: 'JP SIngh',
    //         classes: [classes.FIRST, classes.SECOND, classes.THIRD, classes.FORTH],
    //         days: [days.FRIDAY, days.MONDAY, days.TUESDAY, days.WEDNESDAY, days.THRUSDAY],
    //         subjects: [subjects.MATHS]
    //       },
    //       {
    //         name: 'K kumar',
    //         classes: [classes.FIRST, classes.SECOND, classes.THIRD, classes.FORTH],
    //         days: [days.FRIDAY, days.MONDAY, days.TUESDAY, days.WEDNESDAY, days.THRUSDAY],
    //         subjects: [subjects.PHYSICS]
    //       }
    //     ];




    // class teachers{
    //         name: string
    //         classes: Array<string>
    //         days: Array<string>
    //         subjects: Array<string>
                //email, subjects, sessions, uid,
    //         constructor(name,classes,days,subjects){
    //             this.name=name;
    //             this.classes=classes;
    //             this.days=days;
    //             this.subjects=subjects;
    //         }
    // }

    // type temp = Array<teachers>;
    // var teacher : temp= [

    //     new teachers('Aman', ['first','second','third','forth'], ['monday'], ['physics'])
    // ];

    
    

        selectedSubject;
        subjects = [subjects.PHYSICS, subjects.CHEMISTRY, subjects.MATHS];
        getAvailableTeachers() {
            return this.allTeachers.filter((teacher) => {
             return teacher.subject.indexOf(this.selectedSubject) !== - 1;
            });
          }
}