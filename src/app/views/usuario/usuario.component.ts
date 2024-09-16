import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardBodyComponent, CardComponent, ColComponent, RowComponent } from '@coreui/angular';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Observable } from 'rxjs';
import { Usuario } from '../../core/interfaces/usuario/usuario';
import { UsuarioService } from '../../core/services/usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, AsyncPipe, CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonModule, TableModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public usuarios$!: Observable<Usuario[]>;

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    this.usuarios$ = this.service.getUsuarios();
  }

}
