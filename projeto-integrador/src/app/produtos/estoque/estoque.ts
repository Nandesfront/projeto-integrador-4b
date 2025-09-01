import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
  produtos = [
    {nome: 'Caneta', preco: '10', estoque: 10},
    {nome: 'Lápis', preco: '5', estoque: 0},
    {nome: 'Caderno', preco: '25',estoque: 5},
    {nome: 'Borracha', preco: '2', estoque: 2}
  ];
}
