import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  cliente!: Cliente;
 
  ngOnInit(): void {}

  constructor(private service: ClienteService, private route: Router){
    this.cliente = new Cliente();
  }

  salvar(){
    this.service.salvar(this.cliente).subscribe(c=>{this.route.navigate(['/clientes-list'])});
  }
}

