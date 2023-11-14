import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.scss']
})
export class SessaoComponent {
  Comprar(){
    Swal.fire({
      title: "Você deseja comprar esse produto ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Adicionar no carrinho",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Adicionado no carrinho!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Erro ao comprar!", "", "info");
      }
    });
  }
}
