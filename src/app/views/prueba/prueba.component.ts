import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, RowComponent, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'app-prueba',
  standalone: true,
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss',
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent]
})
export class PruebaComponent {

}
