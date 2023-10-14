import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Punto 3 parcial';


  tiempo: number = 0;
  altura: number = 0;
  gravedad: number = 0;
  velocidad: number = 0;

  calcularALTURA(){
    const segundos = this.tiempo * 60;
    this.altura = (this.gravedad * (segundos ** 2))/2;
    this.altura = Math.round(this.altura * 100)/100;
  }

  calcularVELOCIDAD() {
    const segundos = this.tiempo * 60;
    this.velocidad = this.gravedad * segundos;
    this.velocidad = Math.round(this.velocidad * 100)/100;
  }
}