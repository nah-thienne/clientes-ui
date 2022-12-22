import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'deletar', 'deletar-com-modal'];
  clientes: Cliente[] = [];
    
  ngOnInit(): void {
    this.listar()
  }
  
  constructor(private dialog: MatDialog, public service: ClienteService, private route: Router){}
  
  listar(){
    this.service.listarTodos().subscribe((c)=>this.clientes=c)
  }

  deletar(id: number){
        this.service.deletar(id).subscribe(c=>{this.ngOnInit()})
  }

  deletarComModal(id: number){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
          title: "Deletar",
          message: "Você tem certeza que gostaria de deletar o registro?"}
    });
    dialogRef.afterClosed().subscribe((dialogResult: any) => {
      if(dialogResult){
        this.service.deletar(id).subscribe(c=>{this.ngOnInit()})
      }
   });
  }
}

