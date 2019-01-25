import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-teach-port',
  templateUrl: './teach-port.component.html',
  styleUrls: ['./teach-port.component.scss']
})
export class TeachPortComponent implements OnInit {
  schedule;
  constructor(private auth: AuthService) { }

  ngOnInit() {
   this.auth.currentUser.subscribe(teacher => {
      this.schedule = teacher.schedule;
   });
  }

}
