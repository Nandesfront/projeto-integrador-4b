import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
produtos = [
  { nome: 'Produto 1', preco: '10.00', estoque: 5 },
  { nome: 'Produto 2', preco: '20.00', estoque: 3 }
];
}
