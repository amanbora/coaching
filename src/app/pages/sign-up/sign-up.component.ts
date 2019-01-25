import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),
    'name': new FormControl('', Validators.required),
    'subject': new FormControl('', Validators.required),
    'accessLevel': new FormControl('', Validators.required)
  });
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  signUp() {
    if(this.signUpForm.valid) {
      const formValue = this.signUpForm.value;
      this.auth.signUp(formValue).then((user) => {
    //     switch(user.accessLevel) {
    //       case 'teacher': 
    //       break;
    //       case 'student':
    //       break;
    //       case 'admin':
    //       break;
    //     }
    //   });
    // }
    this.router.navigateByUrl('/teach-port');

  });
}
}
}

