import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthLogin, AuthRespuesta } from '../../model/authLogin';
import { catchError } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public cargando: boolean = false;
  private URL_API ='https://dummyjson.com/auth/login';
  private token: AuthRespuesta | null = null;

  constructor(
    private cliente: HttpClient,
    private mensaje: AlertController

  ) { }

  public autenticar({ username, password}:AuthLogin){
    this.cliente.post<AuthRespuesta>(this.URL_API,{
      username,
      password
    },{
      headers: {
        'Content-Type':'application/json'
      }
    }
    )
    .pipe(
      catchError(async(error: HttpErrorResponse)=>{
        if(error.status === 400){
        const mensaje = await this.mensaje.create({
          header: 'usuario y contraseña incorrectos',
          buttons: [{
            text:'Ok',
            role: 'confirm'
          }]
          });
          await mensaje.present();
        };
        return null;
      })
    )
    .subscribe(async(datos)=>{
      if(datos){
        this.token = datos;
        const mensaje = await this.mensaje.create({
          header: 'Usuario Autenticado Correctamente!',
          buttons: [{
            text: 'Ok!',
            role: 'confirm',
          }]
        });
        await mensaje.present();
      }
    })
  }

  public obtenerDatos(){
    return this.token;
  };

  public obtenerCargando(){
    return this.cargando;
  }

}
