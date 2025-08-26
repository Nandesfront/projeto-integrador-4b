import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {
    nome = 'Flavio';

  caminhoImagem = '/workspaces/projeto-integrador-4b/projeto-integrador/public/favicon.ico';

  dizerOi(){
      this.nome = 'alunos do quarto b';
  }
}
