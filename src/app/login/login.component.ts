import { Component, OnInit } from '@angular/core';

//add imports
import { FormGroup} from '@angular/forms';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: any = {};

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    };
  }

  public signin = (form: FormGroup) => {
    console.log(form.value);
  };
}
