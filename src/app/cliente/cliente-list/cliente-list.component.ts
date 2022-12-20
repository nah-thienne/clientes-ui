import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[] = [];
  
  ngOnInit(): void {
    this.lista()
  }
  
  constructor(public service: ClienteService){}
  
  lista(){
    this.service.listarTodos().subscribe((c)=>this.clientes=c)
  }
}

