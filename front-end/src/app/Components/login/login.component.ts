import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  result: any;
  constructor(
    private loginService: LoginService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.getToken();
  }
  getToken() {
    this.loginService.login(this.email, this.password).subscribe(
      data => {
        localStorage.setItem('AccessToken',data.token)
        this.router.navigate(['customers'])
      },
      error => console.log(error));
  }

}
