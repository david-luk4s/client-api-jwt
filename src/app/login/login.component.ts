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

  constructor(private api: UsersService) { }

  ngOnInit() {
    this.user = {session: {uid: '', password: ''}};
  }

  async signin(form: FormGroup){

    if(form.valid){
      await this.api.login(this.user).subscribe(
        data => {
          localStorage.setItem('token', data.headers.get('access-token'));
          console.log(data.headers.get('access-token'));
        },
        error => {
          console.log('Erro in api', error.message);
        }
      );
    }else{
      console.log('Formulário invalído!');
    }

  };
}
