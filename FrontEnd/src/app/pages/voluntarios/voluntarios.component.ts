import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.scss']
})
export class VoluntariosComponent implements OnInit {
  displayResponsive: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  showResponsiveDialog() {
    this.displayResponsive = true;
  }
}