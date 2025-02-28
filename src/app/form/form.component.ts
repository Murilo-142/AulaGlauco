import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  num1: number =0;
  num2: number =0;
  sum: number = 0;
  sub: number = 0;
  mul: number = 0;
  div: number = 0;
  exp: number = 0;
  raiz: number = 0;

  resultType: string = ''; // Adiciona uma variável para controlar qual operação foi clicada

  onClickSum() {
    this.sum = this.num1 + this.num2;
  }

  onClickSub() {
    this.sub = this.num1 - this.num2;
  }

  onClickMul(){
this.mul = this.num1 * this.num2; 

  }

  onClickDiv(){
    this.div = this.num1 / this.num2; 
    
      }

      onClickExp() {
        this.exp = this.num1 ** this.num2 // Exponenciação
      }

      onClickRaiz() {
        this.raiz = Math.sqrt(this.num1); // Raiz quadrada de num1
      }

  // Função para controlar qual operação deve mostrar o resultado
  showResult(operation: string) {
    this.resultType = operation;
  }
}