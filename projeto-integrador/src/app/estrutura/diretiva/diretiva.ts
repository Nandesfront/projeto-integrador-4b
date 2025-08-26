import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})


export class Diretiva {
  cursos = [
    {nome: 'Hernandes', ativo: true},
    {nome: 'Thaissa', ativo: false},
    {nome: 'Edina', ativo: true},
    {nome: 'Edi', ativo: false}
  ];

  isAtivo = true;
  isInativo = false;

  tamanhoFonte = '12px';

  mostrarMensagem = true;

  
  toggleMensagem() {
    this.mostrarMensagem = !this.mostrarMensagem;
  }
  
  aumentarFonte(){
   const valor = parseInt(this.tamanhoFonte);
  this.tamanhoFonte = (valor + 2) + 'px';
}

  diminuirFonte(){
     const valor = parseInt(this.tamanhoFonte);
  this.tamanhoFonte = (valor - 2) + 'px';
  }
}
