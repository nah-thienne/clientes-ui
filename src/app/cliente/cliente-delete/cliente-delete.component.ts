import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.scss']
})
export class ClienteDeleteComponent implements OnInit {
  
  id!: number;
  
  clientes: Cliente[] = [];
  idSelecionado!: number;

  constructor(private service: ClienteService, private route: Router){}
  
  ngOnInit(): void {
    this.listar();
  }
 
  listar(){
    this.service.listarTodos().subscribe((c)=>this.clientes=c)
  }

  deletar(){
    if(this.idSelecionado){
      this.id=this.idSelecionado;
    }
    this.service.deletar(this.id).subscribe(c=>{this.route.navigate(['/clientes-list'])})
  }

}
