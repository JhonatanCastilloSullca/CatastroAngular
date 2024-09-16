import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardBodyComponent, CardComponent, ColComponent, RowComponent } from '@coreui/angular';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-individual',
  standalone: true,
  imports: [CommonModule, CardComponent, CardBodyComponent, RowComponent, ColComponent, ReactiveFormsModule, InputTextModule], // Cambiado FormsModule por ReactiveFormsModule
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.scss'
})
export class IndividualComponent {

  fichaForm: FormGroup;
  constructor(private fb: FormBuilder) {

    this.fichaForm = this.fb.group({
      numeficha: [''],
    });
  }
  onSubmit() {
    console.log(this.fichaForm.value);
  }
}
