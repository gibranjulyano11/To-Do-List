import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formularioRegistro: FormGroup;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formularioRegistro = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.formularioRegistro.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Ingrese un correo válido';
    }

    return this.email.hasError('email') ? 'El correo no es válido' : '';
  }

}
