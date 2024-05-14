import { ParseSourceFile } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LogginServiceService } from './loggin-service.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'proyecto';
  user!: string ;
  password!: string;
  email!: string;
  enabled!: boolean;

  constructor(private service: LogginServiceService){
  }

  guardarUsuario(){
    let usr: Usuario = new Usuario(this.user,this.password,this.email,this.enabled);
    this.service.guardarUsuario(usr).subscribe();
  }
}
