import { Component } from '@angular/core';

@Component({
  selector: 'app-soma',
  standalone: false,
  templateUrl: './soma.html',
  styleUrl: './soma.css'
})
export class soma {
  soma = 0;

  somar() {
    this.soma++;
  }
}
