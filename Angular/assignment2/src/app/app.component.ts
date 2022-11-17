import { NonNullAssert } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface userdetails {
  username: FormControl<string>,
  email: FormControl<string>,
  phone: FormControl<number>,
  password: FormControl<string>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Sign In';

  loginform = new FormGroup(
    {
      username: new FormControl<string>('', Validators.required),
      email: new FormControl<string>('', Validators.required),
      password: new FormControl<number | string>('', Validators.required),
      phone: new FormControl<string>('',[Validators.required,Validators.pattern('[0-9]+$')])
    }
  )

  get email() {
    return this.loginform.get('email')
  }

  get username() {
    return this.loginform.get('username')
  }

  get phone() {
    return this.loginform.get('phone')
  }

  get password(){
    return this.loginform.get('password')
  }

  submit(e:Event){
    e.preventDefault()
  }
}
