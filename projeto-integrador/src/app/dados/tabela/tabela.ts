import { Component } from '@angular/core';

interface Produto {
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrls: ['./tabela.css']
})
export class Tabela {
  dataSource: Produto[] = [
    { nome: 'Produto A', quantidade: 10 },
    { nome: 'Produto B', quantidade: 20 },
    { nome: 'Produto C', quantidade: 30 },
  ];

  displayedColumns: string[] = ['nome', 'quantidade'];
}
