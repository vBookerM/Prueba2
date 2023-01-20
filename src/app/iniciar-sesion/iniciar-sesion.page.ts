import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { AuthService } from './service/auth-login.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {
    formulario!: FormGroup

  constructor(
    public labPrueba: AuthService,
    public formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      username: ['kminchelle'],
      password: ['0lelplR'],
    })
  }
  public submitForm() {

    this.labPrueba.autenticar({
      username: this.formulario.value['username'],
      password: this.formulario.value['password']
    })
  }
}
