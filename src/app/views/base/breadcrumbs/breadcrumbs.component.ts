import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { DocsExampleComponent } from '@docs-components/public-api';
import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  BreadcrumbRouterComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  TextColorDirective
} from '@coreui/angular';

@Component({
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, BreadcrumbComponent, BreadcrumbItemComponent, NgClass, BreadcrumbRouterComponent]
})
export class BreadcrumbsComponent implements OnInit {
  public items = <any>[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'Home', url: '/', attributes: { title: 'Home' } },
      { label: 'Library', url: '/' },
      { label: 'Data', url: '/dashboard/' },
      { label: 'Catastro', url: '/' }
    ];

    setTimeout(() => {
      this.items = [
        { label: 'Catastro', url: '/' },
        { label: 'Data', url: '/dashboard/' },
        { label: 'Library', url: '/' },
        { label: 'Home', url: '/', attributes: { title: 'Home' } }
      ];
    }, 5000);
  }
}
