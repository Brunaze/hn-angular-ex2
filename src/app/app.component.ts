import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exercice2';

  nombre1: number = 0;
  nombre2: number = 0;
  operateur: string = '+';
  resultat: number | string = 0;

  historique: Array<{ 
    date: string, 
    nombre1: number, 
    operateur: string, 
    nombre2: number, 
    resultat: number | string 
  }> = [];

  calculer() {

    switch (this.operateur) {
      case '+':
        this.resultat = this.nombre1 + this.nombre2;
        break;
      case '-':
        this.resultat = this.nombre1 - this.nombre2;
        break;
      case '*':
        this.resultat = this.nombre1 * this.nombre2;
        break;
      case '/':
        if (this.nombre2 != 0) {
          this.resultat = this.nombre1 / this.nombre2;
        } else {
          this.resultat = 'Division par 0 impossible';
        }
        break;
      default:
        break;
    }

    this.ajouterHistorique();

  }

  
  ajouterHistorique() {
    const calcul = {
      date: new Date().toLocaleTimeString(),
      nombre1: this.nombre1,
      operateur: this.operateur,
      nombre2: this.nombre2,
      resultat: this.resultat
    }

    this.historique.push(calcul);
  }


  supprimerHistorique(calculSupp: any) {
    this.historique = this.historique.filter(historique => historique != calculSupp);
  }

}
