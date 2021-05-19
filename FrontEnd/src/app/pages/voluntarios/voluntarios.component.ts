import { VoluntariosAdminComponent } from './../../admin/voluntarios-admin/voluntarios-admin.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

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