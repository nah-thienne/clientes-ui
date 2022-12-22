import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.scss']
})
export class ClienteDeleteComponent {

  id!: number;

  constructor(private service: ClienteService, private route: Router){}
 
  deletar(){
    this.service.deletar(this.id).subscribe(c=>{this.route.navigate(['/clientes-list'])})
  }

}
