import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [
      './sign-in.component.scss',
      './../../../util.css',
    ]
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup({
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  })
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    if(this.signInForm.valid) {
      this.auth.signIn(this.signInForm.value).then((res) => {
        this.router.navigateByUrl('/teach-port');
      });
    }
  }

}
