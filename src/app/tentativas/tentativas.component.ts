import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = '/src/assets/coracao_vazio.png'; /* Property Bind */
  public coracaoCheio: string = '/src/assets/coracao_cheio.png'; /* Property Bind */

  constructor() { }

  ngOnInit() {
  }

}
